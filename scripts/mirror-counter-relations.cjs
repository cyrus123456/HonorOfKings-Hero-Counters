const fs = require('fs');
const path = require('path');

// 读取英雄关系数据
const filePath = path.join(__dirname, '..', 'src', 'data', 'heroRelationsComplete.ts');
const fileContent = fs.readFileSync(filePath, 'utf-8');

// 提取JSON数据
const jsonMatch = fileContent.match(/export const heroRelations: HeroRelation\[\] = \[([\s\S]*?)\];/);
if (!jsonMatch) {
  console.error('Could not parse hero relations data');
  process.exit(1);
}

const oldJsonStr = '[' + jsonMatch[1] + ']';
const heroRelations = eval(oldJsonStr);

// 创建英雄名称到数据的映射
const heroMap = new Map();
heroRelations.forEach(rel => {
  heroMap.set(rel.heroName, rel);
});

// 统计变更数量
let addedCounteredBy = 0;
let totalCounters = 0;

// 遍历每个英雄的counters,将关系镜像到被counter的英雄的counteredBy
heroRelations.forEach(heroA => {
  heroA.counters.heroes.forEach((heroBName, index) => {
    totalCounters++;
    const heroB = heroMap.get(heroBName);
    
    if (heroB) {
      // 检查heroB的counteredBy中是否已经包含heroA
      if (!heroB.counteredBy.heroes.includes(heroA.heroName)) {
        // 添加到counteredBy
        heroB.counteredBy.heroes.push(heroA.heroName);
        // 添加对应的reason(如果有的话)
        const reason = heroA.counters.reasons[index] || '';
        heroB.counteredBy.reasons.push(reason);
        addedCounteredBy++;
        console.log(`Added: ${heroBName} counteredBy ${heroA.heroName}`);
      }
    }
  });
});

// 生成新的文件内容
let newFileContent = `// 从王者荣耀官网抓取的英雄关系数据
// 生成时间: ${new Date().toISOString()}
// 数据来源: https://pvp.qq.com/web201605/herolist.shtml
// 收集英雄数: ${heroRelations.length}
// 已镜像 ${addedCounteredBy} 个counter关系到counteredBy

export interface HeroRelation {
  heroName: string;
  heroUrl: string;
  bestPartners: {
    heroes: string[];
    reasons: string[];
  };
  counteredBy: {
    heroes: string[];
    reasons: string[];
  };
  counters: {
    heroes: string[];
    reasons: string[];
  };
}

export const heroRelations: HeroRelation[] = [
`;

heroRelations.forEach((rel, index) => {
  newFileContent += `  {
    "heroName": "${rel.heroName}",
    "heroUrl": "${rel.heroUrl}",
    "bestPartners": {
      "heroes": [${rel.bestPartners.heroes.map(h => `"${h}"`).join(', ')}],
      "reasons": [${rel.bestPartners.reasons.map(r => `"${r.replace(/"/g, '\\"')}"`).join(', ')}]
    },
    "counteredBy": {
      "heroes": [${rel.counteredBy.heroes.map(h => `"${h}"`).join(', ')}],
      "reasons": [${rel.counteredBy.reasons.map(r => `"${r.replace(/"/g, '\\"')}"`).join(', ')}]
    },
    "counters": {
      "heroes": [${rel.counters.heroes.map(h => `"${h}"`).join(', ')}],
      "reasons": [${rel.counters.reasons.map(r => `"${r.replace(/"/g, '\\"')}"`).join(', ')}]
    }
  }${index < heroRelations.length - 1 ? ',' : ''}
`;
});

newFileContent += `];
`;

// 保存文件
fs.writeFileSync(filePath, newFileContent, 'utf-8');

console.log('\n========== 转换完成 ==========');
console.log(`总共处理了 ${totalCounters} 个counter关系`);
console.log(`新增了 ${addedCounteredBy} 个counteredBy关系`);
console.log('文件已更新: src/data/heroRelationsComplete.ts');
