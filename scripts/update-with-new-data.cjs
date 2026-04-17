const fs = require('fs');

// 完整准确的英雄代码到名称映射表
const codeToNameMap = {
  '105': '廉颇', '106': '小乔', '107': '赵云', '108': '墨子', '109': '妲己',
  '110': '嬴政', '111': '孙尚香', '112': '鲁班七号', '113': '庄周', '114': '刘禅',
  '115': '高渐离', '116': '阿轲', '117': '钟无艳', '118': '孙膑', '119': '扁鹊',
  '120': '白起', '121': '芈月', '123': '吕布', '124': '周瑜', '125': '元歌',
  '126': '夏侯惇', '127': '甄姬', '128': '曹操', '129': '典韦', '130': '宫本武藏',
  '131': '李白', '132': '马可波罗', '133': '狄仁杰', '134': '达摩', '135': '老夫子',
  '136': '武则天', '137': '司马懿', '139': '夏洛特', '140': '关羽', '141': '貂蝉',
  '142': '安琪拉', '144': '程咬金', '146': '露娜', '147': '花木兰', '148': '姜子牙',
  '149': '刘邦', '150': '韩信', '151': '孙权', '152': '王昭君', '153': '兰陵王',
  '154': '花木兰', '155': '艾琳', '156': '张良', '157': '不知火舞', '159': '朵莉亚',
  '160': '橘右京', '162': '娜可露露', '163': '橘右京', '165': '苏烈', '166': '亚瑟',
  '167': '孙悟空', '168': '牛魔', '169': '后羿', '170': '刘备', '171': '张飞',
  '172': '影', '173': '李元芳', '174': '虞姬', '175': '钟馗', '176': '杨玉环',
  '177': '苍', '178': '梦奇', '179': '女娲', '180': '哪吒', '182': '干将莫邪',
  '183': '少司缘', '184': '蔡文姬', '186': '太乙真人', '187': '东皇太一', '188': '大禹',
  '189': '鬼谷子', '190': '诸葛亮', '191': '大乔', '192': '黄忠', '193': '铠',
  '194': '苏烈', '195': '百里玄策', '196': '百里守约', '197': '弈星', '198': '梦奇',
  '199': '公孙离', '312': '沈梦溪', '501': '明世隐', '502': '裴擒虎', '503': '狂铁',
  '504': '米莱狄', '505': '瑶', '506': '云中君', '507': '李信', '508': '伽罗',
  '509': '盾山', '510': '孙策', '511': '猪八戒', '513': '上官婉儿', '514': '亚连',
  '515': '嫦娥', '517': '大司命', '518': '马超', '519': '敖隐', '521': '海月',
  '522': '曜', '523': '西施', '524': '蒙犽', '525': '鲁班大师', '527': '蒙恬',
  '528': '澜', '529': '盘古', '531': '镜', '533': '阿古朵', '534': '桑启',
  '536': '夏洛特', '537': '司空震', '538': '云缨', '540': '金蝉', '542': '暃',
  '544': '赵怀真', '545': '莱西奥', '548': '戈娅', '550': '空空儿', '558': '影',
  '563': '海诺', '564': '姬小满', '577': '少司缘', '582': '元流之子(法师)',
  '583': '元流之子(刺客)', '584': '元流之子(射手)', '585': '元流之子(辅助)'
};

// 读取新抓取的数据
const newData = JSON.parse(fs.readFileSync('rescraped-heroes.json', 'utf-8'));
const oldRelationsStr = fs.readFileSync('src/data/heroRelationsComplete.ts', 'utf-8');

// 建立新旧数据的映射
const newDataMap = {};
newData.forEach(item => {
  newDataMap[item.heroName] = item;
});

// 提取旧的JSON数据
const jsonMatch = oldRelationsStr.match(/export const heroRelations: HeroRelation\[\] = \[([\s\S]*?)\];/);
if (!jsonMatch) {
  console.error('Could not parse old relations');
  process.exit(1);
}

const oldJsonStr = '[' + jsonMatch[1] + ']';
const oldRelations = eval(oldJsonStr);

// 更新数据
const newRelations = oldRelations.map(oldRel => {
  const newDataItem = newDataMap[oldRel.heroName];
  
  if (newDataItem) {
    // 有新数据的英雄,更新counters
    let counterHeroNames = [];
    if (newDataItem.counterCodes) {
      newDataItem.counterCodes.forEach(code => {
        const name = codeToNameMap[code];
        if (name && name !== oldRel.heroName && !counterHeroNames.includes(name)) {
          counterHeroNames.push(name);
        }
      });
    }
    
    // 更新数据
    return {
      ...oldRel,
      counters: {
        heroes: counterHeroNames,
        reasons: newDataItem.counterReasons || []
      },
      // 如果有新的bestPartners和counteredBy的reasons,也更新
      bestPartners: {
        ...oldRel.bestPartners,
        reasons: (newDataItem.bestPartnersReasons && newDataItem.bestPartnersReasons.length > 0) ? 
          newDataItem.bestPartnersReasons : oldRel.bestPartners.reasons
      },
      counteredBy: {
        ...oldRel.counteredBy,
        reasons: (newDataItem.counteredByReasons && newDataItem.counteredByReasons.length > 0) ? 
          newDataItem.counteredByReasons : oldRel.counteredBy.reasons
      }
    };
  }
  return oldRel;
});

// 生成新的文件内容
let newFileContent = `// 从王者荣耀官网抓取的英雄关系数据
// 生成时间: ${new Date().toISOString()}
// 数据来源: https://pvp.qq.com/web201605/herolist.shtml
// 收集英雄数: ${newRelations.length}

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

newRelations.forEach((rel, index) => {
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
  }${index < newRelations.length - 1 ? ',' : ''}
`;
});

newFileContent += `];
`;

// 保存文件
fs.writeFileSync('src/data/heroRelationsComplete.ts', newFileContent, 'utf-8');
console.log('Successfully updated heroRelationsComplete.ts with new data!');
console.log(`Total heroes: ${newRelations.length}`);

// 统计结果
let fixedCount = 0;
let emptyCount = 0;
let oneHeroCount = 0;
newRelations.forEach(rel => {
  if (rel.counters.heroes.length === 0) {
    emptyCount++;
    console.log(`Warning: ${rel.heroName} has empty counters`);
  } else if (rel.counters.heroes.length === 1) {
    oneHeroCount++;
  } else {
    fixedCount++;
  }
});
console.log(`\nHeroes with valid counters (2+ heroes): ${fixedCount}`);
console.log(`Heroes with 1 counter hero: ${oneHeroCount}`);
console.log(`Heroes with empty counters: ${emptyCount}`);
