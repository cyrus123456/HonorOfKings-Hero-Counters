const fs = require('fs');
const path = require('path');

// 完整的英雄名称到ID的映射
const nameToIdMap = {
  '元流之子(刺客)': 'yuanliuzhizi_assassin',
  '大禹': 'dayu',
  '元流之子(辅助)': 'yuanliuzhizi_support',
  '蚩奼': 'chicha',
  '孙权': 'sunquan',
  '元流之子(射手)': 'yuanliuzhizi_archer',
  '空空儿': 'kongkonger',
  '苍': 'cang',
  '影': 'ying',
  '少司缘': 'shaosiyuan',
  '元流之子(坦克)': 'yuanliuzhizi_tank',
  '元流之子(法师)': 'yuanliuzhizi_magic',
  '敖隐': 'aoyin',
  '大司命': 'dasiming',
  '云中君': 'yunzhongjun',
  '海诺': 'hainuo',
  '朵莉亚': 'duoliya',
  '姬小满': 'jixiaoman',
  '狂铁': 'kuangtie',
  '莱西奥': 'laixiao',
  '赵怀真': 'zhaohuaizhen',
  '海月': 'haiyue',
  '戈娅': 'gaya',
  '宫本武藏': 'gongbenwuzang',
  '桑启': 'sangqi',
  '暃': 'fei',
  '金蝉': 'jinchan',
  '姜子牙': 'jiangziya',
  '弈星': 'yixing',
  '梦奇': 'mengqi',
  '云缨': 'yunying',
  '司空震': 'sikongzhen',
  '澜': 'lan',
  '夏洛特': 'xialuote',
  '阿古朵': 'agudo',
  '蒙恬': 'mengtian',
  '廉颇': 'lianpo',
  '镜': 'jing',
  '白起': 'baiqi',
  '蒙犽': 'mengya',
  '鲁班大师': 'lubandashi',
  '西施': 'xishi',
  '马超': 'machao',
  '曜': 'yao_fighter',
  '瑶': 'yao',
  '盘古': 'pangu',
  '猪八戒': 'zhubajie',
  '嫦娥': 'change',
  '貂蝉': 'diaochan',
  '鬼谷子': 'guiguzi',
  '李信': 'lixin',
  '上官婉儿': 'shangguanwaner',
  '元歌': 'yuange',
  '米莱狄': 'milaidi',
  '马可波罗': 'makeboluo',
  '张良': 'zhangliang',
  '裴擒虎': 'peiqinhu',
  '杨玉环': 'yangyuhuan',
  '公孙离': 'gongsunli',
  '明世隐': 'mingshiyin',
  '后羿': 'houyi',
  '女娲': 'nvwa',
  '苏烈': 'sulie',
  '周瑜': 'zhouyu',
  '百里玄策': 'bailixuance',
  '百里守约': 'bailishouyue',
  '铠': 'kai',
  '芈月': 'miyue',
  '亚瑟': 'yase',
  '盾山': 'dunshan',
  '沈梦溪': 'shenmengxi',
  '伽罗': 'jailuo',
  '司马懿': 'simayi',
  '孙策': 'sunce',
  '干将莫邪': 'ganjiangmoye',
  '狄仁杰': 'direnjie',
  '刘备': 'liubei',
  '阿轲': 'ake',
  '刘邦': 'liubang',
  '东皇太一': 'donghuangtaiyi',
  '大乔': 'daqiao',
  '黄忠': 'huangzhong',
  '诸葛亮': 'zhugeliang',
  '哪吒': 'nezha',
  '太乙真人': 'taiyizhenren',
  '蔡文姬': 'caiwenji',
  '雅典娜': 'yadianna',
  '杨戬': 'yangjian',
  '钟馗': 'zhongkui',
  '虞姬': 'yuji',
  '李元芳': 'liyuanfang',
  '张飞': 'zhangfei',
  '牛魔': 'niumo',
  '橘右京': 'jvyoujing',
  '王昭君': 'wangzhaojun',
  '娜可露露': 'nakelulu',
  '不知火舞': 'buzhihuowu',
  '花木兰': 'huamulan',
  '兰陵王': 'lanlingwang',
  '韩信': 'hanxin',
  '露娜': 'luna',
  '程咬金': 'chengyaojin',
  '安琪拉': 'anqila',
  '关羽': 'guanyu',
  '老夫子': 'laofuzi',
  '武则天': 'wuzetian',
  '项羽': 'xiangyu',
  '达摩': 'damo',
  '李白': 'libai',
  '典韦': 'dianwei',
  '曹操': 'caocao',
  '甄姬': 'zhenji',
  '夏侯惇': 'xiahoudun',
  '吕布': 'lvbu',
  '扁鹊': 'bianque',
  '孙膑': 'sunbin',
  '钟无艳': 'zhongwuyan',
  '高渐离': 'gaojianli',
  '刘禅': 'liushan',
  '庄周': 'zhuangzhou',
  '小乔': 'xiaoqiao',
  '赵云': 'zhaoyun',
  '墨子': 'mozi',
  '妲己': 'daji',
  '嬴政': 'yingzheng',
  '孙尚香': 'sunshangxiang',
  '孙悟空': 'sunwukong',
  '鲁班七号': 'luban7',
  '艾琳': 'ailin',
  '亚连': 'yalian',
};

// 读取 heroRelationsComplete.ts
const relationsPath = path.join(__dirname, '..', 'src', 'data', 'heroRelationsComplete.ts');
const relationsContent = fs.readFileSync(relationsPath, 'utf-8');

// 提取 heroRelations 数组
const relationsMatch = relationsContent.match(/export const heroRelations: HeroRelation\[\] = \[([\s\S]*?)\];/);
if (!relationsMatch) {
  console.error('无法解析 hero relations');
  process.exit(1);
}

const oldJsonStr = '[' + relationsMatch[1] + ']';
const heroRelations = eval(oldJsonStr);

console.log(`从 heroRelationsComplete.ts 加载了 ${heroRelations.length} 个英雄`);

// 辅助函数: 获取英雄ID
function getHeroId(heroName) {
  const id = nameToIdMap[heroName];
  if (!id) {
    console.warn(`警告: 找不到英雄名称对应的ID: ${heroName}`);
  }
  return id;
}

// 辅助函数: 转义字符串中的单引号
function escapeString(str) {
  return str.replace(/'/g, "\\'");
}

// ============================================================
// 1. 生成 counterRelations 和 counterReasons
// ============================================================
const counterRelations = [];
const counterReasons = {};

heroRelations.forEach(heroA => {
  const heroAId = getHeroId(heroA.heroName);
  if (!heroAId) return;

  // counters: A 克制 B (source 克制 target)
  // 这是正向关系: A counters B
  heroA.counters.heroes.forEach((heroBName, index) => {
    const heroBId = getHeroId(heroBName);
    if (heroBId) {
      counterRelations.push({
        source: heroAId,
        target: heroBId,
        strength: 3
      });
      
      const reason = heroA.counters.reasons[index] || '';
      counterReasons[`${heroAId}-${heroBId}`] = {
        reasonZh: reason,
        reasonEn: reason
      };
    }
  });

  // counteredBy: A 被 B 克制 (B 克制 A, 即 source 克制 target)
  // 这也是克制关系: B counters A (逆向推理: A counteredBy B 等价于 B counters A)
  heroA.counteredBy.heroes.forEach((heroBName, index) => {
    const heroBId = getHeroId(heroBName);
    if (heroBId) {
      counterRelations.push({
        source: heroBId,
        target: heroAId,
        strength: 3
      });
      
      const reason = heroA.counteredBy.reasons[index] || '';
      counterReasons[`${heroBId}-${heroAId}`] = {
        reasonZh: reason,
        reasonEn: reason
      };
    }
  });
});

console.log(`生成了 ${counterRelations.length} 个克制关系`);
console.log(`生成了 ${Object.keys(counterReasons).length} 个克制理由`);

// ============================================================
// 2. 生成 synergyRelations 和 synergyReasons
// ============================================================
const synergyRelations = [];
const synergyReasons = {};

heroRelations.forEach(heroA => {
  const heroAId = getHeroId(heroA.heroName);
  if (!heroAId) return;

  // bestPartners: 最佳拍档关系 (双向关系)
  heroA.bestPartners.heroes.forEach((heroBName, index) => {
    const heroBId = getHeroId(heroBName);
    if (heroBId) {
      synergyRelations.push({
        source: heroBId,
        target: heroAId,
        strength: 3
      });
      
      const reason = heroA.bestPartners.reasons[index] || '';
      synergyReasons[`${heroBId}-${heroAId}`] = {
        reasonZh: reason,
        reasonEn: reason
      };
    }
  });
});

console.log(`生成了 ${synergyRelations.length} 个拍档关系`);
console.log(`生成了 ${Object.keys(synergyReasons).length} 个拍档理由`);

// ============================================================
// 3. 更新 counterReasons.ts
// ============================================================
const counterReasonsPath = path.join(__dirname, '..', 'src', 'data', 'counterReasons.ts');
let counterReasonsFile = `// 被克制理由数据 - 基于王者荣耀官网数据生成
import type { Language } from '@/i18n';

// 克制原因数据 - key 为 "source-target" 格式
export interface CounterReasonData {
  reasonZh: string;
  reasonEn: string;
}

// 被克制理由数据 - 从官网英雄关系模块抓取
export const counterReasons: Record<string, CounterReasonData> = {
`;

Object.entries(counterReasons).forEach(([key, data], index) => {
  const reasonZh = escapeString(data.reasonZh);
  const reasonEn = escapeString(data.reasonEn);
  counterReasonsFile += `  '${key}': {
    reasonZh: '${reasonZh}',
    reasonEn: '${reasonEn}'
  }${index < Object.keys(counterReasons).length - 1 ? ',' : ''}
`;
});

counterReasonsFile += `};

// 获取被克制理由的辅助函数
export function getCounterReason(sourceId: string, targetId: string, language: Language = 'zh'): string {
  const key = \`\${sourceId}-\${targetId}\`;
  const data = counterReasons[key];
  if (!data) return '';
  return language === 'zh' ? data.reasonZh : data.reasonEn;
}
`;

fs.writeFileSync(counterReasonsPath, counterReasonsFile, 'utf-8');
console.log('已更新 counterReasons.ts');

// ============================================================
// 4. 更新 heroData.ts 中的 counterRelations
// ============================================================
const heroDataPath = path.join(__dirname, '..', 'src', 'data', 'heroData.ts');
const heroDataContent = fs.readFileSync(heroDataPath, 'utf-8');

let counterRelationsStr = `// ============================================================
// 被克制关系数据 - 基于王者荣耀官网英雄关系数据生成
// strength: 3=S级(强克制), 2=A级(一般克制)
// 数据来源: https://pvp.qq.com/web201605/herolist.shtml
// 生成时间: ${new Date().toISOString()}
// ============================================================
export const counterRelations: CounterRelation[] = [
`;

counterRelations.forEach((rel, index) => {
  counterRelationsStr += `  { source: '${rel.source}', target: '${rel.target}', strength: ${rel.strength} }${index < counterRelations.length - 1 ? ',' : ''}
`;
});

counterRelationsStr += `];
`;

// 替换 heroData.ts 中的 counterRelations 部分
const newHeroDataContent = heroDataContent.replace(
  /\/\/ ============================================================[\s\S]*?export const counterRelations: CounterRelation\[\] = \[[\s\S]*?\];/,
  counterRelationsStr
);

fs.writeFileSync(heroDataPath, newHeroDataContent, 'utf-8');
console.log('已更新 heroData.ts counterRelations');

// ============================================================
// 5. 更新 synergyRelations.ts
// ============================================================
const synergyRelationsPath = path.join(__dirname, '..', 'src', 'data', 'synergyRelations.ts');
let synergyRelationsFile = `// 最佳拍档关系数据 - 基于王者荣耀官网数据生成
// 配合强度: strength = 3 (核心搭档/Must Pick), 2 (优秀配合/Good Synergy), 1 (良好配合/Decent)
// 数据来源: https://pvp.qq.com/web201605/herolist.shtml

import type { CounterStrength, OwHeroId } from './heroData';

export interface SynergyRelation {
  source: OwHeroId;
  target: OwHeroId;
  strength?: CounterStrength;
}

// 最佳拍档关系数据 - 从官网英雄关系模块抓取
export const synergyRelations: SynergyRelation[] = [
`;

synergyRelations.forEach((rel, index) => {
  synergyRelationsFile += `  { source: '${rel.source}', target: '${rel.target}', strength: ${rel.strength} }${index < synergyRelations.length - 1 ? ',' : ''}
`;
});

synergyRelationsFile += `];
`;

fs.writeFileSync(synergyRelationsPath, synergyRelationsFile, 'utf-8');
console.log('已更新 synergyRelations.ts');

// ============================================================
// 6. 更新 synergyReasons.ts
// ============================================================
const synergyReasonsPath = path.join(__dirname, '..', 'src', 'data', 'synergyReasons.ts');
let synergyReasonsFile = `// 最佳拍档理由数据 - 基于王者荣耀官网数据生成
import type { Language } from '@/i18n';

// 拍档原因数据 - key 为 "source-target" 格式
export interface SynergyReasonData {
  reasonZh: string;
  reasonEn: string;
}

// 最佳拍档理由数据 - 从官网英雄关系模块抓取
export const synergyReasons: Record<string, SynergyReasonData> = {
`;

Object.entries(synergyReasons).forEach(([key, data], index) => {
  const reasonZh = escapeString(data.reasonZh);
  const reasonEn = escapeString(data.reasonEn);
  synergyReasonsFile += `  '${key}': {
    reasonZh: '${reasonZh}',
    reasonEn: '${reasonEn}'
  }${index < Object.keys(synergyReasons).length - 1 ? ',' : ''}
`;
});

synergyReasonsFile += `};

// 获取最佳拍档理由的辅助函数
export function getSynergyReason(sourceId: string, targetId: string, language: Language = 'zh'): string {
  const key = \`\${sourceId}-\${targetId}\`;
  const data = synergyReasons[key];
  if (!data) return '';
  return language === 'zh' ? data.reasonZh : data.reasonEn;
}
`;

fs.writeFileSync(synergyReasonsPath, synergyReasonsFile, 'utf-8');
console.log('已更新 synergyReasons.ts');

console.log('\n========== 所有文件更新完成 ==========');
console.log(`克制关系: ${counterRelations.length} 个`);
console.log(`克制理由: ${Object.keys(counterReasons).length} 个`);
console.log(`拍档关系: ${synergyRelations.length} 个`);
console.log(`拍档理由: ${Object.keys(synergyReasons).length} 个`);
