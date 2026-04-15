﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿﻿// 王者荣耀英雄数据 - 基于被克制关系数据库 v1 整理


/** 王者荣耀英雄职业类型 - 官方六种职业 */
export type HeroRole = 'tank' | 'fighter' | 'assassin' | 'mage' | 'marksman' | 'support';

/** 克制强度等级 */
export type CounterStrength = 1 | 2 | 3;

/** 协同强度等级 */
export type SynergyStrength = 1 | 2 | 3;

/** 王者荣耀英雄ID */
export type HeroId =
  // 射手 (Marksman) 20名
  | 'houyi' | 'luban7' | 'sunshangxiang' | 'makeboluo' | 'direnjie' | 'yuji'
  | 'liyuanfang' | 'gongsunli' | 'jailuo' | 'bailishouyue' | 'huangzhong' | 'ailin'
  | 'mengya' | 'gaya' | 'aoyin' | 'agudo' | 'cang' | 'sunquan' | 'laixiao' | 'yuanliuzhizi_archer'
  // 辅助 (Support) 22名
  | 'zhuangzhou' | 'niumo' | 'zhangfei' | 'donghuangtaiyi' | 'caiwenji' | 'mingshiyin'
  | 'yao' | 'sulie' | 'guiguzi' | 'dunshan' | 'zhongkui' | 'baiqi' | 'liushan'
  | 'sunbin' | 'taiyizhenren' | 'daqiao' | 'sunce' | 'lubandashi' | 'zhubajie' | 'sangqi'
  | 'duoliya' | 'shaosiyuan' | 'kongkonger' | 'yuanliuzhizi_support' | 'dayu' | 'mozi'
  // 坦克 (Tank) 30名
  | 'kuangtie' | 'mengtian' | 'lianpo' | 'kai' | 'yase' | 'guanyu' | 'lvbu'
  | 'liubang' | 'nezha' | 'taiyizhenren' | 'zhongkui' | 'zhangfei' | 'niumo'
  | 'chengyaojin' | 'xiangyu' | 'damo' | 'xiahoudun' | 'zhongwuyan' | 'liushan'
  | 'yuanliuzhizi_tank' | 'yalian' | 'mengqi' | 'sunce'
  // 战士 (Fighter) 43名
  | 'chicha' | 'ying' | 'dasiming' | 'yalian' | 'jixiaoman' | 'zhaohuaizhen'
  | 'gongbenwuzang' | 'yunying' | 'sikongzhen' | 'lan' | 'xialuote' | 'machao'
  | 'pangu' | 'change' | 'lixin' | 'zhouyu' | 'kai' | 'yase' | 'sunce' | 'liubei'
  | 'nezha' | 'yadianna' | 'yangjian' | 'jvyoujing' | 'huamulan' | 'laofuzi'
  | 'dianwei' | 'caocao' | 'bianque' | 'mozi' | 'zhaoyun' | 'yao_fighter'
  // 刺客 (Assassin) 24名
  | 'yuanliuzhizi_assassin' | 'yunzhongjun' | 'gongbenwuzang' | 'fei'
  | 'yunying' | 'lan' | 'jing' | 'yuange' | 'peiqinhu' | 'bailixuance'
  | 'bailishouyue' | 'simayi' | 'sunwukong' | 'ake' | 'yadianna' | 'jvyoujing'
  | 'nakelulu' | 'buzhihuowu' | 'lanlingwang' | 'hanxin' | 'luna' | 'libai' | 'zhaoyun'
  // 法师 (Mage) 45名
  | 'yuanliuzhizi_magic' | 'hainuo' | 'haiyue' | 'jinchan' | 'jiangziya' | 'yixing'
  | 'mengqi' | 'sikongzhen' | 'xishi' | 'shangguanwaner' | 'milaidi' | 'zhangliang'
  | 'yangyuhuan' | 'mingshiyin' | 'nvwa' | 'zhouyu' | 'miyue' | 'shenmengxi' | 'simayi'
  | 'ganjiangmoye' | 'liubang' | 'donghuangtaiyi' | 'daqiao' | 'zhugeliang'
  | 'buzhihuowu' | 'wangzhaojun' | 'luna' | 'anqila' | 'diaochan' | 'wuzetian'
  | 'zhenji' | 'bianque' | 'sunbin' | 'gaojianli' | 'yingzheng' | 'daji' | 'mozi' | 'xiaoqiao';

/** 守望先锋英雄ID（包含王者荣耀） */
export type OwHeroId = HeroId
  | 'winston' | 'dva' | 'orisa' | 'wrecking_ball' | 'doomfist' | 'ramattra'
  | 'junkrat' | 'pharah' | 'genji' | 'hanzo' | 'soldier76' | 'venture'
  | 'lucio' | 'kiriko' | 'zenyatta' | 'baptiste' | 'illari' | 'junker_queen'
  | 'sigma' | 'zarya' | 'hazard' | 'mauga' | 'reaper' | 'tracer' | 'echo'
  | 'ashe' | 'cassidy' | 'bastion' | 'mei' | 'symmetra' | 'torbjorn' | 'widowmaker'
  | 'sombra' | 'mercy' | 'moira' | 'brigitte' | 'ana' | 'lifeweaver'
  | 'freja' | 'sojourn' | 'feitianmao' | 'juno' | 'domina' | 'jinyu' | 'vendetta' | 'anran' | 'emrey' | 'wuyang' | 'ruixi' | 'mizuki'
  | 'reinhardt' | 'roadhog';

export interface Hero {
  id: HeroId;
  name: string;
  nameEn: string;
  nickname?: string;
  role: HeroRole[];
  color: string;
  image: string;
}

export interface CounterRelation {
  source: HeroId;
  target: HeroId;
  strength?: CounterStrength;
}

// 英雄图片URL - 使用王者荣耀官方CDN资源
// 来源: https://pvp.qq.com/web201605/herolist.shtml
// 格式: https://game.gtimg.cn/images/yxzj/img201606/heroimg/{英雄数字ID}/{英雄数字ID}.jpg
const heroImages: Record<OwHeroId, string> = {
  // ========== 射手（发育路）- ADC ==========
  makeboluo: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/132/132.jpg`,       // 马可波罗 132
  gongsunli: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/199/199.jpg`,        // 公孙离 199
  direnjie: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/133/133.jpg`,         // 狄仁杰 133
  yuji: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/174/174.jpg`,              // 虞姬 174
  houyi: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/169/169.jpg`,             // 后羿 169
  luban7: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/112/112.jpg`,            // 鲁班七号 112
  liyuanfang: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/173/173.jpg`,         // 李元芳 173
  sunshangxiang: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/111/111.jpg`,      // 孙尚香 111
  jailuo: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/508/508.jpg`,             // 伽罗 508
  ailin: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/155/155.jpg`,             // 艾琳 155
  huangzhong: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/192/192.jpg`,         // 黄忠 192
  mengya: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/524/524.jpg`,             // 蒙犽 524
  gaya: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/548/548.jpg`,               // 戈娅 548
  aoyin: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/519/519.jpg`,              // 敖隐 519
  bailishouyue: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/196/196.jpg`,       // 百里守约 196
  cang: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/177/177.jpg`,               // 苍 177
  sunquan: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/151/151.jpg`,             // 孙权 151
  yuanliuzhizi_archer: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/584/584.jpg`, // 元流之子(射手) 584

  // ========== 缺失英雄补充 ==========
  xiaoqiao: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/106/106.jpg`,           // 小乔 106
  zhaoyun: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/107/107.jpg`,             // 赵云 107
  mozi: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/108/108.jpg`,               // 墨子 108
  liubang: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/149/149.jpg`,            // 刘邦 149

  // ========== 辅助（游走）- Support ==========
  dunshan: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/509/509.jpg`,            // 盾山 509
  zhongkui: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/175/175.jpg`,           // 钟馗 175
  niumo: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/168/168.jpg`,              // 牛魔 168
  zhuangzhou: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/113/113.jpg`,          // 庄周 113
  mingshiyin: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/501/501.jpg`,          // 明世隐 501
  caiwenji: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/184/184.jpg`,            // 蔡文姬 184
  guiguzi: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/189/189.jpg`,             // 鬼谷子 189
  lianpo: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/105/105.jpg`,             // 廉颇 105
  donghuangtaiyi: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/187/187.jpg`,      // 东皇太一 187
  sulie: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/194/194.jpg`,               // 苏烈 194
  zhangfei: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/171/171.jpg`,            // 张飞 171
  yao: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/505/505.jpg`,                 // 瑶 505
  yao_fighter: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/522/522.jpg`,                 // 曜 522
  liushan: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/114/114.jpg`,             // 刘禅 114
  baiqi: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/120/120.jpg`,               // 白起 120
  sunbin: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/118/118.jpg`,              // 孙膑 118
  taiyizhenren: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/186/186.jpg`,        // 太乙真人 186
  daqiao: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/191/191.jpg`,              // 大乔 191
  sunce: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/510/510.jpg`,               // 孙策 510
  lubandashi: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/525/525.jpg`,          // 鲁班大师 525
  zhubajie: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/511/511.jpg`,            // 猪八戒 511
  sangqi: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/534/534.jpg`,              // 桑启 534
  laixiao: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/545/545.jpg`,             // 莱西奥 545
  duoliya: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/159/159.jpg`,             // 朵莉亚 159
  shaosiyuan: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/577/577.jpg`,          // 少司缘 577
  kongkonger: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/550/550.jpg`,          // 空空儿 550
  yuanliuzhizi_support: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/585/585.jpg`,  // 元流之子(辅助) 585
  dayu: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/188/188.jpg`,                // 大禹 188

  // ========== 法师（中路）- Mage ==========
  shangguanwaner: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/513/513.jpg`,       // 上官婉儿 513
  diaochan: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/141/141.jpg`,            // 貂蝉 141
  zhangliang: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/156/156.jpg`,          // 张良 156
  wuzetian: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/136/136.jpg`,            // 武则天 136
  yixing: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/197/197.jpg`,              // 弈星 197
  zhenji: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/127/127.jpg`,              // 甄姬 127
  milaidi: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/504/504.jpg`,              // 米莱狄 504
  gaojianli: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/115/115.jpg`,           // 高渐离 115
  jinchan: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/540/540.jpg`,             // 金蝉 540
  wangzhaojun: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/152/152.jpg`,         // 王昭君 152
  zhugeliang: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/190/190.jpg`,          // 诸葛亮 190
  daji: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/109/109.jpg`,                // 妲己 109
  anqila: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/142/142.jpg`,              // 安琪拉 142
  buzhihuowu: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/157/157.jpg`,          // 不知火舞 157
  haiyue: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/521/521.jpg`,              // 海月 521
  nvwa: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/179/179.jpg`,                // 女娲 179
  shenmengxi: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/312/312.jpg`,          // 沈梦溪 312
  bianque: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/119/119.jpg`,             // 扁鹊 119
  xishi: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/523/523.jpg`,                // 西施 523
  ganjiangmoye: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/182/182.jpg`,         // 干将莫邪 182
  hainuo: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/563/563.jpg`,              // 海诺 563
  yingzheng: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/110/110.jpg`,           // 嬴政 110
  zhouyu: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/124/124.jpg`,              // 周瑜 124
  yangyuhuan: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/176/176.jpg`,          // 杨玉环 176
  jiangziya: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/148/148.jpg`,           // 姜子牙 148
  change: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/515/515.jpg`,              // 嫦娥 515
  yuanliuzhizi_magic: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/582/582.jpg`,   // 元流之子(法师) 582

  // ========== 打野 - Jungle ==========
  luna: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/146/146.jpg`,                // 露娜 146
  sunwukong: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/167/167.jpg`,            // 孙悟空 167
  liubei: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/170/170.jpg`,              // 刘备 170
  dianwei: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/129/129.jpg`,             // 典韦 129
  kai: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/193/193.jpg`,              // 铠 193
  libai: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/131/131.jpg`,               // 李白 131
  hanxin: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/150/150.jpg`,              // 韩信 150
  yase: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/166/166.jpg`,             // 亚瑟 166
  miyue: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/121/121.jpg`,               // 芈月 121
  agudo: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/533/533.jpg`,              // 阿古朵 533
  lan: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/528/528.jpg`,                 // 澜 528
  pangu: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/529/529.jpg`,              // 盘古 529
  jvyoujing: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/163/163.jpg`,         // 橘右京(打野) 163
  gongbenwuzang: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/130/130.jpg`,             // 宫本武藏 130
  mengqi: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/198/198.jpg`,           // 梦奇 198
  jing: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/531/531.jpg`,                // 镜 531
  ake: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/116/116.jpg`,                // 阿轲 116
  lanlingwang: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/153/153.jpg`,         // 兰陵王 153
  nakelulu: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/162/162.jpg`,           // 娜可露露 162
  bailixuance: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/195/195.jpg`,         // 百里玄策 195
  peiqinhu: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/502/502.jpg`,            // 裴擒虎 502
  simayi: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/137/137.jpg`,              // 司马懿 137
  yunzhongjun: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/506/506.jpg`,         // 云中君 506
  fei: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/542/542.jpg`,                  // 暃 542
  yuanliuzhizi_assassin: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/583/583.jpg`, // 元流之子(刺客) 583

  // ========== 对抗路（边路）- Toplane ==========
  machao: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/518/518.jpg`,              // 马超 518
  xialuote: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/536/536.jpg`,            // 夏洛特 536
  mengtian: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/527/527.jpg`,             // 蒙恬 527
  kuangtie: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/503/503.jpg`,             // 狂铁 503
  laofuzi: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/139/139.jpg`,             // 老夫子 139
  huamulan: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/154/154.jpg`,             // 花木兰 154
  xiahoudun: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/126/126.jpg`,            // 夏侯惇 126
  yuange: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/125/125.jpg`,              // 元歌 125
  guanyu: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/140/140.jpg`,              // 关羽 140
  lvbu: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/123/123.jpg`,                // 吕布 123
  jixiaoman: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/564/564.jpg`,            // 姬小满 564
  yalian: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/514/514.jpg`,               // 亚连 514
  sikongzhen: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/537/537.jpg`,           // 司空震 537
  damo: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/134/134.jpg`,                // 达摩 134
  xiangyu: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/135/135.jpg`,              // 项羽 135
  chengyaojin: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/144/144.jpg`,          // 程咬金 144
  yangjian: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/178/178.jpg`,             // 杨戬 178
  yadianna: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/183/183.jpg`,            // 雅典娜 183
  nezha: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/180/180.jpg`,               // 哪吒 180
  caocao: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/128/128.jpg`,              // 曹操 128
  zhongwuyan: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/117/117.jpg`,           // 钟无艳 117
  lixin: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/507/507.jpg`,               // 李信 507
  zhaohuaizhen: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/544/544.jpg`,         // 赵怀真 544
  chicha: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/172/172.jpg`,              // 蚩奼 172
  dasiming: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/517/517.jpg`,            // 大司命 517
  ying: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/558/558.jpg`,               // 影 558
  yunying: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/538/538.jpg`,             // 云缨 538
  yuanliuzhizi_tank: `https://game.gtimg.cn/images/yxzj/img201606/heroimg/581/581.jpg`,         // 元流之子(坦克) 581
  // 守望先锋英雄
  winston: '', dva: '', orisa: '', wrecking_ball: '', doomfist: '', ramattra: '',
  junkrat: '', pharah: '', genji: '', hanzo: '', soldier76: '', venture: '',
  lucio: '', kiriko: '', zenyatta: '', baptiste: '', illari: '', junker_queen: '',
  sigma: '', zarya: '', hazard: '', mauga: '', reaper: '', tracer: '', echo: '',
  ashe: '', cassidy: '', bastion: '', mei: '', symmetra: '', torbjorn: '', widowmaker: '',
  sombra: '', mercy: '', moira: '', brigitte: '', ana: '', lifeweaver: '',
  freja: '', sojourn: '', feitianmao: '', juno: '', domina: '', jinyu: '', vendetta: '', anran: '', emrey: '', wuyang: '', ruixi: '', mizuki: '',
  reinhardt: '', roadhog: '',
};

// 英雄数据 - 基于王者荣耀官方130名英雄（截至2026年4月）
export const heroes: Hero[] = [
  // ========== 射手（发育路）- ADC (19名) ==========
  { id: 'houyi', name: '后羿', nameEn: 'Hou Yi', role: ['marksman'], color: '#3b82f6', image: heroImages.houyi },
  { id: 'luban7', name: '鲁班七号', nameEn: 'Luban No.7', nickname: '鲁班', role: ['marksman'], color: '#3b82f6', image: heroImages.luban7 },
  { id: 'sunshangxiang', name: '孙尚香', nameEn: 'Sun Shangxiang', nickname: '大小姐', role: ['marksman'], color: '#3b82f6', image: heroImages.sunshangxiang },
  { id: 'makeboluo', name: '马可波罗', nameEn: 'Marco Polo', role: ['marksman'], color: '#3b82f6', image: heroImages.makeboluo },
  { id: 'direnjie', name: '狄仁杰', nameEn: 'Di Renjie', role: ['marksman'], color: '#3b82f6', image: heroImages.direnjie },
  { id: 'yuji', name: '虞姬', nameEn: 'Yu Ji', role: ['marksman'], color: '#3b82f6', image: heroImages.yuji },
  { id: 'liyuanfang', name: '李元芳', nameEn: 'Li Yuanfang', role: ['marksman'], color: '#3b82f6', image: heroImages.liyuanfang },
  { id: 'gongsunli', name: '公孙离', nameEn: 'Gongsun Li', nickname: '阿离', role: ['marksman'], color: '#3b82f6', image: heroImages.gongsunli },
  { id: 'jailuo', name: '伽罗', nameEn: 'Jialuo', role: ['marksman'], color: '#3b82f6', image: heroImages.jailuo },
  // 百里守约: 射手+刺客
  { id: 'bailishouyue', name: '百里守约', nameEn: 'Baili Shouyue', role: ['assassin', 'marksman'], color: '#3b82f6', image: heroImages.bailishouyue },
  { id: 'huangzhong', name: '黄忠', nameEn: 'Huang Zhong', role: ['marksman'], color: '#3b82f6', image: heroImages.huangzhong },
  { id: 'ailin', name: '艾琳', nameEn: 'Ailin', role: ['marksman'], color: '#3b82f6', image: heroImages.ailin },
  { id: 'mengya', name: '蒙犽', nameEn: 'Meng Ya', role: ['marksman'], color: '#3b82f6', image: heroImages.mengya },
  { id: 'gaya', name: '戈娅', nameEn: 'Ga Ya', role: ['marksman'], color: '#3b82f6', image: heroImages.gaya },
  { id: 'aoyin', name: '敖隐', nameEn: 'Ao Yin', role: ['marksman'], color: '#3b82f6', image: heroImages.aoyin },
  { id: 'agudo', name: '阿古朵', nameEn: 'A Gu Duo', role: ['marksman'], color: '#3b82f6', image: heroImages.agudo }, // 官方主分类为射手
  { id: 'cang', name: '苍', nameEn: 'Cang', role: ['marksman'], color: '#3b82f6', image: heroImages.cang },
  { id: 'sunquan', name: '孙权', nameEn: 'Sun Quan', role: ['marksman'], color: '#3b82f6', image: heroImages.sunquan },
  { id: 'laixiao', name: '莱西奥', nameEn: 'La Xiao', role: ['marksman'], color: '#3b82f6', image: heroImages.laixiao },
  { id: 'yuanliuzhizi_archer', name: '元流之子(射手)', nameEn: 'Source Child (Archer)', role: ['marksman'], color: '#3b82f6', image: heroImages.yuanliuzhizi_archer },

  // ========== 辅助（游走）- Support (13名) ==========
  { id: 'zhuangzhou', name: '庄周', nameEn: 'Zhuang Zhou', nickname: '鱼', role: ['tank', 'support'], color: '#22c55e', image: heroImages.zhuangzhou },
  { id: 'caiwenji', name: '蔡文姬', nameEn: 'Cai Wenji', role: ['mage', 'support'], color: '#22c55e', image: heroImages.caiwenji },
  { id: 'mingshiyin', name: '明世隐', nameEn: 'Ming Shiyin', role: ['mage', 'support'], color: '#22c55e', image: heroImages.mingshiyin },
  { id: 'yao', name: '瑶', nameEn: 'Yao', role: ['mage', 'support'], color: '#22c55e', image: heroImages.yao },
  { id: 'guiguzi', name: '鬼谷子', nameEn: 'Gui Gu Zi', role: ['mage', 'support'], color: '#22c55e', image: heroImages.guiguzi },
  { id: 'sunbin', name: '孙膑', nameEn: 'Sun Bin', role: ['mage', 'support'], color: '#22c55e', image: heroImages.sunbin },
  { id: 'daqiao', name: '大乔', nameEn: 'Da Qiao', role: ['mage', 'support'], color: '#22c55e', image: heroImages.daqiao },
  { id: 'sangqi', name: '桑启', nameEn: 'Sang Qi', role: ['mage', 'support'], color: '#22c55e', image: heroImages.sangqi },
  { id: 'duoliya', name: '朵莉亚', nameEn: 'Dolia', role: ['mage', 'support'], color: '#22c55e', image: heroImages.duoliya },
  { id: 'shaosiyuan', name: '少司缘', nameEn: 'Shao Siyuan', role: ['mage', 'support'], color: '#22c55e', image: heroImages.shaosiyuan },
  { id: 'kongkonger', name: '空空儿', nameEn: 'Kong Kong Er', role: ['fighter', 'support'], color: '#22c55e', image: heroImages.kongkonger },
  { id: 'yuanliuzhizi_support', name: '元流之子(辅助)', nameEn: 'Source Child (Support)', role: ['support'], color: '#22c55e', image: heroImages.yuanliuzhizi_support },
  // 墨子: 战士+法师
  { id: 'mozi', name: '墨子', nameEn: 'Mo Zi', nickname: '和平守望', role: ['fighter', 'mage'], color: '#ef4444', image: heroImages.mozi },

  // ========== 坦克（对抗路/野区）- Tank (20名) ==========
  { id: 'niumo', name: '牛魔', nameEn: 'Niu Mo', role: ['tank', 'support'], color: '#6b7280', image: heroImages.niumo },
  { id: 'zhangfei', name: '张飞', nameEn: 'Zhang Fei', role: ['tank', 'support'], color: '#6b7280', image: heroImages.zhangfei },
  { id: 'donghuangtaiyi', name: '东皇太一', nameEn: 'Dong Huang Tai Yi', role: ['mage', 'support'], color: '#6b7280', image: heroImages.donghuangtaiyi },
  { id: 'lianpo', name: '廉颇', nameEn: 'Lian Pin', role: ['tank'], color: '#6b7280', image: heroImages.lianpo },
  { id: 'sulie', name: '苏烈', nameEn: 'Su Lie', role: ['tank', 'support'], color: '#6b7280', image: heroImages.sulie },
  { id: 'dunshan', name: '盾山', nameEn: 'Dun Shan', role: ['tank', 'support'], color: '#6b7280', image: heroImages.dunshan },
  { id: 'zhongkui', name: '钟馗', nameEn: 'Zhong Kui', role: ['tank', 'support'], color: '#6b7280', image: heroImages.zhongkui },
  { id: 'baiqi', name: '白起', nameEn: 'Bai Qi', role: ['tank'], color: '#6b7280', image: heroImages.baiqi },
  { id: 'liushan', name: '刘禅', nameEn: 'Liu Shan', role: ['tank', 'support'], color: '#6b7280', image: heroImages.liushan },
  { id: 'taiyizhenren', name: '太乙真人', nameEn: 'Taiyi Zhenren', role: ['tank', 'support'], color: '#6b7280', image: heroImages.taiyizhenren },
  { id: 'sunce', name: '孙策', nameEn: 'Sun Ce', role: ['tank', 'fighter'], color: '#6b7280', image: heroImages.sunce },
  { id: 'lubandashi', name: '鲁班大师', nameEn: 'Luban Master', role: ['tank', 'support'], color: '#6b7280', image: heroImages.lubandashi },
  { id: 'zhubajie', name: '猪八戒', nameEn: 'Zhu Bajie', role: ['tank'], color: '#6b7280', image: heroImages.zhubajie },
  { id: 'dayu', name: '大禹', nameEn: 'Da Yu', role: ['tank', 'support'], color: '#6b7280', image: heroImages.dayu },
  { id: 'mengqi', name: '梦奇', nameEn: 'Meng Qi', role: ['tank', 'mage'], color: '#6b7280', image: heroImages.mengqi },
  // 刘邦: 坦克+法师
  { id: 'liubang', name: '刘邦', nameEn: 'Liu Bang', nickname: '双面君主', role: ['tank', 'mage'], color: '#6b7280', image: heroImages.liubang },
  { id: 'chengyaojin', name: '程咬金', nameEn: 'Cheng Yaojin', role: ['tank'], color: '#6b7280', image: heroImages.chengyaojin },
  { id: 'xiangyu', name: '项羽', nameEn: 'Xiang Yu', role: ['tank', 'fighter'], color: '#6b7280', image: heroImages.xiangyu },
  // 雅典娜: 战士+刺客
  { id: 'yadianna', name: '雅典娜', nameEn: 'Athena', role: ['fighter', 'assassin'], color: '#ef4444', image: heroImages.yadianna },

  // ========== 法师（中路）- Mage (26名) ==========
  { id: 'daji', name: '妲己', nameEn: "Da Ji", role: ['mage'], color: '#a855f7', image: heroImages.daji },
  { id: 'wuzetian', name: '武则天', nameEn: 'Wu Zetian', role: ['mage'], color: '#a855f7', image: heroImages.wuzetian },
  { id: 'zhenji', name: '甄姬', nameEn: 'Zhen Ji', role: ['mage'], color: '#a855f7', image: heroImages.zhenji },
  { id: 'anqila', name: '安琪拉', nameEn: 'Angela', role: ['mage'], color: '#a855f7', image: heroImages.anqila },
  { id: 'wangzhaojun', name: '王昭君', nameEn: 'Wang Zhaojun', role: ['mage'], color: '#a855f7', image: heroImages.wangzhaojun },
  { id: 'zhangliang', name: '张良', nameEn: 'Zhang Liang', role: ['mage'], color: '#a855f7', image: heroImages.zhangliang },
  { id: 'gaojianli', name: '高渐离', nameEn: 'Gao Jianli', role: ['mage'], color: '#a855f7', image: heroImages.gaojianli },
  // 扁鹊: 战士+法师
  { id: 'bianque', name: '扁鹊', nameEn: 'Bian Que', role: ['fighter', 'mage'], color: '#ef4444', image: heroImages.bianque },
  { id: 'zhugeliang', name: '诸葛亮', nameEn: 'Zhuge Liang', role: ['mage'], color: '#a855f7', image: heroImages.zhugeliang },
  { id: 'nvwa', name: '女娲', nameEn: "Nü Wa", role: ['mage'], color: '#a855f7', image: heroImages.nvwa },
  { id: 'diaochan', name: '貂蝉', nameEn: 'Diao Chan', role: ['mage'], color: '#a855f7', image: heroImages.diaochan },
  // 不知火舞: 刺客+法师
  { id: 'buzhihuowu', name: '不知火舞', nameEn: 'Shiranui', role: ['assassin', 'mage'], color: '#f97316', image: heroImages.buzhihuowu },
  { id: 'yixing', name: '弈星', nameEn: 'Yi Xing', role: ['mage'], color: '#a855f7', image: heroImages.yixing },
  { id: 'milaidi', name: '米莱狄', nameEn: 'milaidi', role: ['mage'], color: '#a855f7', image: heroImages.milaidi },
  { id: 'ganjiangmoye', name: '干将莫邪', nameEn: 'Ganjiang Moye', role: ['mage'], color: '#a855f7', image: heroImages.ganjiangmoye },
  { id: 'shenmengxi', name: '沈梦溪', nameEn: 'Shen Mengxi', role: ['mage'], color: '#a855f7', image: heroImages.shenmengxi },
  { id: 'xishi', name: '西施', nameEn: 'Xi Shi', role: ['mage'], color: '#a855f7', image: heroImages.xishi },
  { id: 'shangguanwaner', name: '上官婉儿', nameEn: "Shangguan Wan'er", role: ['mage'], color: '#a855f7', image: heroImages.shangguanwaner },
  { id: 'yingzheng', name: '嬴政', nameEn: 'Ying Zheng', role: ['mage'], color: '#a855f7', image: heroImages.yingzheng },
  // 周瑜: 战士+法师
  { id: 'zhouyu', name: '周瑜', nameEn: 'Zhou Yu', role: ['fighter', 'mage'], color: '#ef4444', image: heroImages.zhouyu },
  // 杨玉环: 法师+辅助
  { id: 'yangyuhuan', name: '杨玉环', nameEn: 'Yang Yuhuan', role: ['mage'], color: '#a855f7', image: heroImages.yangyuhuan },
  { id: 'jiangziya', name: '姜子牙', nameEn: 'Jiang Ziya', role: ['mage'], color: '#a855f7', image: heroImages.jiangziya },
  // 嫦娥: 战士+法师
  { id: 'change', name: '嫦娥', nameEn: "Chang'e", role: ['fighter', 'mage'], color: '#ef4444', image: heroImages.change },
  { id: 'jinchan', name: '金蝉', nameEn: 'Jin Chan', role: ['mage'], color: '#a855f7', image: heroImages.jinchan },
  { id: 'haiyue', name: '海月', nameEn: 'Hai Yue', role: ['mage'], color: '#a855f7', image: heroImages.haiyue },
  { id: 'hainuo', name: '海诺', nameEn: 'Hai Nuo', role: ['mage'], color: '#a855f7', image: heroImages.hainuo },
  { id: 'yuanliuzhizi_magic', name: '元流之子(法师)', nameEn: 'Source Child (Mage)', role: ['mage'], color: '#a855f7', image: heroImages.yuanliuzhizi_magic },
  { id: 'xiaoqiao', name: '小乔', nameEn: 'Xiao Qiao', nickname: '恋之微风', role: ['mage'], color: '#a855f7', image: heroImages.xiaoqiao },
  { id: 'yase', name: '亚瑟', nameEn: 'Arthur', role: ['tank', 'fighter'], color: '#ef4444', image: heroImages.yase },
  { id: 'hanxin', name: '韩信', nameEn: 'Han Xin', role: ['assassin'], color: '#f97316', image: heroImages.hanxin },
  // 露娜: 刺客+法师
  { id: 'luna', name: '露娜', nameEn: 'Luna', role: ['assassin', 'mage'], color: '#f97316', image: heroImages.luna },
  { id: 'libai', name: '李白', nameEn: 'Li Bai', role: ['assassin'], color: '#f97316', image: heroImages.libai },
  { id: 'liubei', name: '刘备', nameEn: 'Liu Bei', role: ['fighter'], color: '#ef4444', image: heroImages.liubei },
  { id: 'dianwei', name: '典韦', nameEn: 'Dian Wei', role: ['fighter'], color: '#ef4444', image: heroImages.dianwei },
  { id: 'ake', name: '阿轲', nameEn: "A Ke", role: ['assassin'], color: '#f97316', image: heroImages.ake },
  { id: 'lanlingwang', name: '兰陵王', nameEn: 'Lanling Wang', role: ['assassin'], color: '#f97316', image: heroImages.lanlingwang },
  { id: 'nakelulu', name: '娜可露露', nameEn: 'Nakoruru', role: ['assassin'], color: '#f97316', image: heroImages.nakelulu },
  // 芈月: 战士+法师
  { id: 'miyue', name: '芈月', nameEn: 'Mi Yue', role: ['mage'], color: '#ef4444', image: heroImages.miyue },
  { id: 'bailixuance', name: '百里玄策', nameEn: 'Baili Xuance', role: ['assassin'], color: '#f97316', image: heroImages.bailixuance },
  { id: 'peiqinhu', name: '裴擒虎', nameEn: 'Pei Qinhu', role: ['assassin'], color: '#f97316', image: heroImages.peiqinhu },
  // 司马懿: 刺客+法师
  { id: 'simayi', name: '司马懿', nameEn: 'Sima Yi', role: ['assassin', 'mage'], color: '#f97316', image: heroImages.simayi },
  { id: 'yunzhongjun', name: '云中君', nameEn: 'Yun Zhongjun', role: ['assassin'], color: '#f97316', image: heroImages.yunzhongjun },
  { id: 'lan', name: '澜', nameEn: 'Lan', role: ['fighter', 'assassin'], color: '#f97316', image: heroImages.lan },
  { id: 'pangu', name: '盘古', nameEn: 'Pan Gu', role: ['fighter'], color: '#f97316', image: heroImages.pangu },
  { id: 'jing', name: '镜', nameEn: 'Jing', role: ['assassin'], color: '#f97316', image: heroImages.jing },
  { id: 'fei', name: '暃', nameEn: 'Fei', role: ['assassin'], color: '#f97316', image: heroImages.fei },
  { id: 'yuanliuzhizi_assassin', name: '元流之子(刺客)', nameEn: 'Source Child (Assassin)', role: ['assassin'], color: '#f97316', image: heroImages.yuanliuzhizi_assassin },
  { id: 'yao_fighter', name: '曜', nameEn: 'Yao', role: ['fighter', 'assassin'], color: '#ef4444', image: heroImages.yao_fighter },
  // 赵云: 战士+刺客
  { id: 'zhaoyun', name: '赵云', nameEn: 'Zhao Yun', nickname: '苍天翔龙', role: ['fighter', 'assassin'], color: '#ef4444', image: heroImages.zhaoyun },

  // ========== 对抗路（边路）- Fighter (25名) ==========
  { id: 'lvbu', name: '吕布', nameEn: "Lu Bu", role: ['tank', 'fighter'], color: '#ef4444', image: heroImages.lvbu },
  { id: 'machao', name: '马超', nameEn: 'Ma Chao', role: ['fighter'], color: '#ef4444', image: heroImages.machao },
  { id: 'guanyu', name: '关羽', nameEn: 'Guan Yu', role: ['tank', 'fighter'], color: '#ef4444', image: heroImages.guanyu },
  { id: 'huamulan', name: '花木兰', nameEn: 'Hua Mulan', role: ['fighter'], color: '#ef4444', image: heroImages.huamulan },
  { id: 'laofuzi', name: '老夫子', nameEn: 'Lao Fu Zi', role: ['fighter'], color: '#ef4444', image: heroImages.laofuzi },
  { id: 'kuangtie', name: '狂铁', nameEn: 'Kuang Tie', role: ['tank', 'fighter'], color: '#ef4444', image: heroImages.kuangtie },
  { id: 'xiahoudun', name: '夏侯惇', nameEn: 'Xiahou Dun', role: ['tank', 'fighter'], color: '#ef4444', image: heroImages.xiahoudun },
  { id: 'xialuote', name: '夏洛特', nameEn: 'Charlotte', role: ['fighter'], color: '#ef4444', image: heroImages.xialuote },
  { id: 'mengtian', name: '蒙恬', nameEn: 'Meng Tian', role: ['tank', 'fighter'], color: '#ef4444', image: heroImages.mengtian },
  { id: 'yuange', name: '元歌', nameEn: 'Yuan Ge', role: ['assassin'], color: '#ef4444', image: heroImages.yuange },
  // 橘右京: 战士+刺客
  { id: 'jvyoujing', name: '橘右京', nameEn: 'Tachibana Ukyo', role: ['fighter', 'assassin'], color: '#ef4444', image: heroImages.jvyoujing },
  { id: 'jixiaoman', name: '姬小满', nameEn: 'Ji Xiaoman', role: ['fighter'], color: '#ef4444', image: heroImages.jixiaoman },
  { id: 'yalian', name: '亚连', nameEn: 'A Lian', role: ['tank', 'fighter'], color: '#ef4444', image: heroImages.yalian },
  { id: 'sikongzhen', name: '司空震', nameEn: 'Si Kong Zhen', role: ['fighter', 'mage'], color: '#ef4444', image: heroImages.sikongzhen },
  { id: 'damo', name: '达摩', nameEn: 'Damo', role: ['tank', 'fighter'], color: '#ef4444', image: heroImages.damo },
  { id: 'kai', name: '铠', nameEn: 'Kai', role: ['tank', 'fighter'], color: '#ef4444', image: heroImages.kai },
  { id: 'sunwukong', name: '孙悟空', nameEn: 'Sun Wukong', role: ['assassin'], color: '#ef4444', image: heroImages.sunwukong },
  { id: 'gongbenwuzang', name: '宫本武藏', nameEn: 'Miyamoto Musashi', role: ['fighter', 'assassin'], color: '#ef4444', image: heroImages.gongbenwuzang },
  { id: 'yangjian', name: '杨戬', nameEn: 'Yang Jian', role: ['fighter'], color: '#ef4444', image: heroImages.yangjian },
  { id: 'nezha', name: '哪吒', nameEn: 'Nezha', role: ['tank', 'fighter'], color: '#ef4444', image: heroImages.nezha },
  { id: 'caocao', name: '曹操', nameEn: 'Cao Cao', role: ['fighter'], color: '#ef4444', image: heroImages.caocao },
  { id: 'zhongwuyan', name: '钟无艳', nameEn: 'Zhong Wuyan', role: ['tank', 'fighter'], color: '#ef4444', image: heroImages.zhongwuyan },
  { id: 'lixin', name: '李信', nameEn: 'Li Xin', role: ['fighter'], color: '#ef4444', image: heroImages.lixin },
  { id: 'zhaohuaizhen', name: '赵怀真', nameEn: 'Zhao Huaizhen', role: ['fighter'], color: '#ef4444', image: heroImages.zhaohuaizhen },
  { id: 'chicha', name: '蚩奼', nameEn: 'Chi Yan', role: ['fighter'], color: '#ef4444', image: heroImages.chicha },
  { id: 'dasiming', name: '大司命', nameEn: 'Da Siming', role: ['fighter'], color: '#ef4444', image: heroImages.dasiming },
  { id: 'ying', name: '影', nameEn: 'Ying', role: ['fighter'], color: '#ef4444', image: heroImages.ying },
  // 云缨: 战士+刺客
  { id: 'yunying', name: '云缨', nameEn: 'Yun Ying', role: ['fighter', 'assassin'], color: '#ef4444', image: heroImages.yunying },
  { id: 'yuanliuzhizi_tank', name: '元流之子(坦克)', nameEn: 'Source Child (Tank)', role: ['fighter', 'tank'], color: '#ef4444', image: heroImages.yuanliuzhizi_tank },
];

// ============================================================
// 被克制关系数据 - 基于王者荣耀被克制关系数据库 v1 整理
// strength: 3=S级(强克制), 2=A级(一般克制)
// ============================================================
export const counterRelations: CounterRelation[] = [
  // ==================== 一、射手（发育路）====================

  // --- 马可波罗 ---
  { source: 'gongsunli', target: 'makeboluo', strength: 3 },   // S: 公孙离
  { source: 'direnjie', target: 'makeboluo', strength: 3 },     // S: 狄仁杰
  { source: 'yuji', target: 'makeboluo', strength: 2 },         // A: 虞姬
  { source: 'houyi', target: 'makeboluo', strength: 2 },         // A: 后羿
  // 原因：怕格挡弹道、怕稳定站撸、怕解控反手

  // --- 公孙离 ---
  { source: 'houyi', target: 'gongsunli', strength: 3 },        // S: 后羿
  { source: 'direnjie', target: 'gongsunli', strength: 3 },      // S: 狄仁杰
  { source: 'luban7', target: 'gongsunli', strength: 2 },        // A: 鲁班七号
  { source: 'huangzhong', target: 'gongsunli', strength: 2 },    // A: 黄忠
  // 原因：怕高持续站撸、怕稳定锁定输出、怕压制走位空间

  // --- 后羿 ---
  { source: 'luban7', target: 'houyi', strength: 3 },           // S: 鲁班七号
  { source: 'bailishouyue', target: 'houyi', strength: 3 },      // S: 百里守约
  { source: 'liyuanfang', target: 'houyi', strength: 2 },        // A: 李元芳
  { source: 'sunshangxiang', target: 'houyi', strength: 2 },      // A: 孙尚香
  // 原因：怕远程消耗、怕爆发切脸、怕被迫移动

  // --- 鲁班七号 ---
  { source: 'liyuanfang', target: 'luban7', strength: 3 },       // S: 李元芳
  { source: 'gongsunli', target: 'luban7', strength: 3 },        // S: 公孙离
  { source: 'yuji', target: 'luban7', strength: 2 },             // A: 虞姬
  { source: 'sunshangxiang', target: 'luban7', strength: 2 },     // A: 孙尚香
  // 原因：无位移、怕前中期贴脸爆发

  // --- 李元芳 ---
  { source: 'direnjie', target: 'liyuanfang', strength: 3 },     // S: 狄仁杰
  { source: 'gongsunli', target: 'liyuanfang', strength: 2 },    // A: 公孙离
  { source: 'yuji', target: 'liyuanfang', strength: 2 },         // A: 虞姬
  // 原因：核心爆发被解、持续对A吃亏；"狄仁杰克元芳"经典关系

  // --- 狄仁杰 ---
  { source: 'jailuo', target: 'direnjie', strength: 3 },         // S: 伽罗
  { source: 'sunshangxiang', target: 'direnjie', strength: 2 },   // A: 孙尚香
  { source: 'bailishouyue', target: 'direnjie', strength: 2 },    // A: 百里守约
  // 原因：怕超射程、怕先手爆发、怕拉扯

  // --- 伽罗 ---
  { source: 'sunshangxiang', target: 'jailuo', strength: 3 },     // S: 孙尚香
  { source: 'makeboluo', target: 'jailuo', strength: 3 },         // S: 马可波罗
  { source: 'gongsunli', target: 'jailuo', strength: 2 },         // A: 公孙离
  { source: 'liyuanfang', target: 'jailuo', strength: 2 },        // A: 李元芳
  // 原因：怕突脸、怕爆发、怕强行缩短射程差

  // --- 孙尚香 ---
  { source: 'yuji', target: 'sunshangxiang', strength: 3 },       // S: 虞姬
  { source: 'gongsunli', target: 'sunshangxiang', strength: 2 },  // A: 公孙离
  { source: 'direnjie', target: 'sunshangxiang', strength: 2 },   // A: 狄仁杰
  // 原因：怕物免、怕规避爆发、怕被控住第一套

  // --- 虞姬 ---
  { source: 'ailin', target: 'yuji', strength: 3 },               // S: 艾琳
  { source: 'makeboluo', target: 'yuji', strength: 2 },           // A: 马可波罗
  { source: 'gongsunli', target: 'yuji', strength: 2 },           // A: 公孙离
  // 原因：怕法伤、怕持续拉扯、怕技能空窗

  // --- 艾琳 ---
  { source: 'huangzhong', target: 'ailin', strength: 3 },          // S: 黄忠
  { source: 'houyi', target: 'ailin', strength: 2 },              // A: 后羿
  { source: 'jailuo', target: 'ailin', strength: 2 },              // A: 伽罗
  // 原因：怕高抗高阵地、怕更长时间站桩压制

  // --- 黄忠 ---
  { source: 'mengya', target: 'huangzhong', strength: 3 },         // S: 蒙犽
  { source: 'bailishouyue', target: 'huangzhong', strength: 3 },   // S: 百里守约
  { source: 'makeboluo', target: 'huangzhong', strength: 2 },      // A: 马可波罗
  // 原因：怕超远消耗、怕持续AOE拆炮台环境

  // --- 蒙犽 ---
  { source: 'gaya', target: 'mengya', strength: 3 },              // S: 戈娅
  { source: 'gongsunli', target: 'mengya', strength: 2 },          // A: 公孙离
  { source: 'makeboluo', target: 'mengya', strength: 2 },          // A: 马可波罗
  // 原因：怕灵活拉扯、怕打不到人

  // --- 戈娅 ---
  { source: 'aoyin', target: 'gaya', strength: 3 },               // S: 敖隐
  { source: 'direnjie', target: 'gaya', strength: 2 },            // A: 狄仁杰
  { source: 'houyi', target: 'gaya', strength: 2 },               // A: 后羿
  // 原因：怕更高爆发空投、怕稳定命中压血

  // --- 敖隐 ---
  { source: 'bailishouyue', target: 'aoyin', strength: 3 },        // S: 百里守约
  { source: 'jailuo', target: 'aoyin', strength: 2 },              // A: 伽罗
  { source: 'direnjie', target: 'aoyin', strength: 2 },            // A: 狄仁杰
  // 原因：怕超远定点狙杀、怕进场前被打残

  // --- 百里守约 ---
  { source: 'gongsunli', target: 'bailishouyue', strength: 3 },    // S: 公孙离
  { source: 'sunshangxiang', target: 'bailishouyue', strength: 3 }, // S: 孙尚香
  { source: 'makeboluo', target: 'bailishouyue', strength: 2 },    // A: 马可波罗
  // 原因：怕高机动贴脸、怕容错被压低

  // --- 莱西奥 ---
  { source: 'gongsunli', target: 'laixiao', strength: 3 },         // S: 公孙离
  { source: 'direnjie', target: 'laixiao', strength: 3 },          // S: 狄仁杰
  { source: 'yuji', target: 'laixiao', strength: 2 },              // A: 虞姬
  { source: 'bailishouyue', target: 'laixiao', strength: 2 },      // A: 百里守约
  { source: 'jailuo', target: 'laixiao', strength: 1 },            // B: 伽罗
  // 原因：怕高机动规避爆发、怕稳定点控、怕更长手压输出窗

  // --- 孙权 ---
  { source: 'yuji', target: 'sunquan', strength: 3 },              // S: 虞姬
  { source: 'gongsunli', target: 'sunquan', strength: 3 },         // S: 公孙离
  { source: 'direnjie', target: 'sunquan', strength: 2 },          // A: 狄仁杰
  { source: 'makeboluo', target: 'sunquan', strength: 2 },         // A: 马可波罗
  { source: 'houyi', target: 'sunquan', strength: 1 },             // B: 后羿
  // 原因：如果输出依赖持续平A与中近距离换血，就怕物免、格挡和解控反打

  // --- 苍 ---
  { source: 'bailishouyue', target: 'cang', strength: 3 },         // S: 百里守约
  { source: 'jailuo', target: 'cang', strength: 3 },               // S: 伽罗
  { source: 'sunshangxiang', target: 'cang', strength: 2 },        // A: 孙尚香
  { source: 'liyuanfang', target: 'cang', strength: 2 },           // A: 李元芳
  { source: 'luban7', target: 'cang', strength: 1 },               // B: 鲁班七号
  // 原因：怕超射程、怕高爆发抢先手、怕站位被封锁

  // --- 元流之子(射手) ---
  { source: 'gongsunli', target: 'yuanliuzhizi_archer', strength: 3 },   // S: 公孙离
  { source: 'bailishouyue', target: 'yuanliuzhizi_archer', strength: 3 },// S: 百里守约
  { source: 'direnjie', target: 'yuanliuzhizi_archer', strength: 2 },    // A: 狄仁杰
  { source: 'yuji', target: 'yuanliuzhizi_archer', strength: 2 },        // A: 虞姬
  { source: 'houyi', target: 'yuanliuzhizi_archer', strength: 1 },       // B: 后羿
  // 原因：核心是强化普攻贯穿+位移+浮空，怕高机动贴身规避、稳定长手狙杀、解控反打


  // ==================== 二、辅助（游走）====================

  // --- 盾山 ---
  { source: 'zhongkui', target: 'dunshan', strength: 3 },         // S: 钟馗
  { source: 'lianpo', target: 'dunshan', strength: 2 },           // A: 廉颇
  { source: 'donghuangtaiyi', target: 'dunshan', strength: 2 },    // A: 东皇太一
  // 原因：举盾移速慢、怕强开和绕盾

  // --- 钟馗 ---
  { source: 'niumo', target: 'zhongkui', strength: 3 },            // S: 牛魔
  { source: 'zhuangzhou', target: 'zhongkui', strength: 3 },       // S: 庄周
  { source: 'zhangfei', target: 'zhongkui', strength: 2 },         // A: 张飞
  // 原因：怕反开、怕解控、怕钩到前排送节奏

  // --- 牛魔 ---
  { source: 'zhuangzhou', target: 'niumo', strength: 3 },          // S: 庄周
  { source: 'donghuangtaiyi', target: 'niumo', strength: 2 },      // A: 东皇太一
  { source: 'zhangfei', target: 'niumo', strength: 2 },            // A: 张飞
  // 原因：怕群体解控，团战价值被削

  // --- 庄周 ---
  { source: 'mingshiyin', target: 'zhuangzhou', strength: 3 },      // S: 明世隐
  { source: 'caiwenji', target: 'zhuangzhou', strength: 2 },        // A: 蔡文姬
  // 原因：怕非传统控制链、怕持续数值压制

  // --- 明世隐 ---
  { source: 'caiwenji', target: 'mingshiyin', strength: 3 },        // S: 蔡文姬
  { source: 'guiguzi', target: 'mingshiyin', strength: 3 },         // S: 鬼谷子
  { source: 'zhangfei', target: 'mingshiyin', strength: 2 },        // A: 张飞
  // 原因：怕双人联动被拆、怕强开秒C

  // --- 蔡文姬 ---
  { source: 'guiguzi', target: 'caiwenji', strength: 3 },           // S: 鬼谷子
  { source: 'donghuangtaiyi', target: 'caiwenji', strength: 2 },    // A: 东皇太一
  { source: 'zhongkui', target: 'caiwenji', strength: 2 },          // A: 钟馗
  // 原因：怕先手秒人，来不及奶

  // --- 鬼谷子 ---
  { source: 'lianpo', target: 'guiguzi', strength: 3 },            // S: 廉颇
  { source: 'zhuangzhou', target: 'guiguzi', strength: 2 },         // A: 庄周
  { source: 'donghuangtaiyi', target: 'guiguzi', strength: 2 },     // A: 东皇太一
  // 原因：怕霸体、怕解控、怕反手硬控

  // --- 廉颇（辅助）---
  { source: 'donghuangtaiyi', target: 'lianpo', strength: 3 },     // S: 东皇太一
  { source: 'zhangfei', target: 'lianpo', strength: 2 },           // A: 张飞
  // 原因：怕无视霸体的点名控制

  // --- 东皇太一 ---
  { source: 'sulie', target: 'donghuangtaiyi', strength: 3 },       // S: 苏烈
  { source: 'zhangfei', target: 'donghuangtaiyi', strength: 3 },     // S: 张飞
  { source: 'zhuangzhou', target: 'donghuangtaiyi', strength: 2 },   // A: 庄周
  // 原因：怕吸进去后被反集火、怕开团失败

  // --- 苏烈 ---
  { source: 'zhangfei', target: 'sulie', strength: 3 },             // S: 张飞
  { source: 'zhuangzhou', target: 'sulie', strength: 2 },           // A: 庄周
  // 原因：怕击退打断、怕解控

  // --- 张飞 ---
  { source: 'yao', target: 'zhangfei', strength: 3 },               // S: 瑶
  { source: 'zhuangzhou', target: 'zhangfei', strength: 2 },        // A: 庄周
  // 原因：怕"无视威慑"的野核附体体系

  // --- 瑶 ---
  { source: 'donghuangtaiyi', target: 'yao', strength: 3 },          // S: 东皇太一
  { source: 'zhongkui', target: 'yao', strength: 3 },                // S: 钟馗
  { source: 'guiguzi', target: 'yao', strength: 2 },                 // A: 鬼谷子
  // 原因：怕点名、怕强开、怕附体目标被秒

  // --- 太乙真人 ---
  { source: 'zhangliang', target: 'taiyizhenren', strength: 3 },     // S: 张良
  { source: 'donghuangtaiyi', target: 'taiyizhenren', strength: 3 },// S: 东皇太一
  { source: 'guiguzi', target: 'taiyizhenren', strength: 2 },        // A: 鬼谷子
  { source: 'zhongkui', target: 'taiyizhenren', strength: 2 },       // A: 钟馗
  { source: 'zhuangzhou', target: 'taiyizhenren', strength: 1 },     // B: 庄周
  // 原因：怕开不到人、怕先手被点控、怕复活体系在强开阵前失效

  // --- 大乔 ---
  { source: 'dunshan', target: 'daqiao', strength: 3 },              // S: 盾山
  { source: 'guiguzi', target: 'daqiao', strength: 3 },              // S: 鬼谷子
  { source: 'zhongkui', target: 'daqiao', strength: 2 },             // A: 钟馗
  { source: 'donghuangtaiyi', target: 'daqiao', strength: 2 },        // A: 东皇太一
  { source: 'sulie', target: 'daqiao', strength: 1 },                // B: 苏烈
  // 原因：怕传送/回城节奏被强开破坏，怕飞行技能与站位体系被拆

  // --- 孙策 ---
  { source: 'zhuangzhou', target: 'sunce', strength: 3 },            // S: 庄周
  { source: 'zhangfei', target: 'sunce', strength: 3 },              // S: 张飞
  { source: 'lianpo', target: 'sunce', strength: 2 },               // A: 廉颇
  { source: 'donghuangtaiyi', target: 'sunce', strength: 2 },         // A: 东皇太一
  { source: 'niumo', target: 'sunce', strength: 1 },                 // B: 牛魔
  // 原因：怕船开进去没人跟、怕解控和反手硬控

  // --- 鲁班大师 ---
  { source: 'zhuangzhou', target: 'lubandashi', strength: 3 },        // S: 庄周
  { source: 'zhangfei', target: 'lubandashi', strength: 3 },          // S: 张飞
  { source: 'lianpo', target: 'lubandashi', strength: 2 },           // A: 廉颇
  { source: 'donghuangtaiyi', target: 'lubandashi', strength: 2 },    // A: 东皇太一
  { source: 'sulie', target: 'lubandashi', strength: 1 },            // B: 苏烈
  // 原因：怕链子开团收益被化解，怕"拉到前排"

  // --- 猪八戒 ---
  { source: 'lvbu', target: 'zhubajie', strength: 3 },               // S: 吕布
  { source: 'mengqi', target: 'zhubajie', strength: 3 },           // S: 梦奇
  { source: 'diaochan', target: 'zhubajie', strength: 2 },           // A: 貂蝉
  { source: 'makeboluo', target: 'zhubajie', strength: 2 },          // A: 马可波罗
  { source: 'bianque', target: 'zhubajie', strength: 1 },            // B: 扁鹊
  // 原因：怕真伤、怕持续百分比消耗、怕能把回血肉度拆掉

  // --- 桑启 ---
  { source: 'guiguzi', target: 'sangqi', strength: 3 },              // S: 鬼谷子
  { source: 'zhongkui', target: 'sangqi', strength: 3 },             // S: 钟馗
  { source: 'donghuangtaiyi', target: 'sangqi', strength: 2 },       // A: 东皇太一
  { source: 'mozi', target: 'sangqi', strength: 2 },                 // A: 墨子
  { source: 'zhangfei', target: 'sangqi', strength: 1 },             // B: 张飞
  // 原因：怕被先手控死，奶量与拉扯空间来不及展开

  // --- 朵莉亚 ---
  { source: 'guiguzi', target: 'duoliya', strength: 3 },             // S: 鬼谷子
  { source: 'zhongkui', target: 'duoliya', strength: 3 },            // S: 钟馗
  { source: 'donghuangtaiyi', target: 'duoliya', strength: 2 },      // A: 东皇太一
  { source: 'zhangliang', target: 'duoliya', strength: 2 },          // A: 张良
  { source: 'zhuangzhou', target: 'duoliya', strength: 1 },          // B: 庄周
  // 原因：怕技能链断、怕被点名秒掉，刷新体系吃不到完整收益

  // --- 少司缘 ---
  { source: 'zhongkui', target: 'shaosiyuan', strength: 3 },         // S: 钟馗
  { source: 'guiguzi', target: 'shaosiyuan', strength: 3 },          // S: 鬼谷子
  { source: 'zhangfei', target: 'shaosiyuan', strength: 2 },         // A: 张飞
  { source: 'donghuangtaiyi', target: 'shaosiyuan', strength: 2 },    // A: 东皇太一
  { source: 'zhuangzhou', target: 'shaosiyuan', strength: 1 },        // B: 庄周

  // --- 空空儿 ---
  { source: 'donghuangtaiyi', target: 'kongkonger', strength: 3 },   // S: 东皇太一
  { source: 'zhangliang', target: 'kongkonger', strength: 3 },       // S: 张良
  { source: 'mozi', target: 'kongkonger', strength: 2 },             // A: 墨子
  { source: 'lianpo', target: 'kongkonger', strength: 2 },          // A: 廉颇
  { source: 'zhuangzhou', target: 'kongkonger', strength: 1 },       // B: 庄周
  // 原因：高机动/花活型辅助都怕锁头强控

  // --- 大禹 ---
  { source: 'lvbu', target: 'dayu', strength: 3 },                  // S: 吕布
  { source: 'diaochan', target: 'dayu', strength: 3 },               // S: 貂蝉
  { source: 'makeboluo', target: 'dayu', strength: 2 },              // A: 马可波罗
  { source: 'bianque', target: 'dayu', strength: 2 },                // A: 扁鹊
  { source: 'mozi', target: 'dayu', strength: 1 },                   // B: 墨子
  // 原因：如果是重前排/持续站场逻辑，就怕真伤、风筝、持续消耗

  // --- 墨子（游走）---
  { source: 'zhuangzhou', target: 'mozi', strength: 3 },             // S: 庄周
  { source: 'gongsunli', target: 'mozi', strength: 3 },              // S: 公孙离
  { source: 'buzhihuowu', target: 'mozi', strength: 2 },             // A: 不知火舞
  { source: 'hanxin', target: 'mozi', strength: 2 },                 // A: 韩信
  { source: 'zhangfei', target: 'mozi', strength: 1 },               // B: 张飞
  // 原因：怕技能命中率被位移和解控拆掉

  // --- 元流之子(辅助) ---
  { source: 'donghuangtaiyi', target: 'yuanliuzhizi_support', strength: 3 },    // S: 东皇太一（强克制）
  { source: 'zhangfei', target: 'yuanliuzhizi_support', strength: 2 },          // A: 张飞（中强克制）
  { source: 'mozi', target: 'yuanliuzhizi_support', strength: 2 },             // A: 墨子（中克制）
  // 原因：怕进来就锁、怕正面硬碰硬压制拉扯空间、怕远程消耗封路

  // --- 刘禅 ---
  { source: 'zhuangzhou', target: 'liushan', strength: 2 },           // A: 庄周（中强克制）
  { source: 'sunbin', target: 'liushan', strength: 2 },               // A: 孙膑（中强克制）
  { source: 'makeboluo', target: 'liushan', strength: 2 },            // A: 马可波罗（中克制）
  { source: 'gongsunli', target: 'liushan', strength: 2 },            // A: 公孙离（中克制）
  // 原因：怕解控断控制链、怕加速拉扯不接团、怕灵活长手C位打不满控制

  // --- 孙膑 ---
  { source: 'dunshan', target: 'sunbin', strength: 3 },               // S: 盾山（强克制）
  { source: 'guiguzi', target: 'sunbin', strength: 2 },               // A: 鬼谷子（中强克制）
  { source: 'zhongkui', target: 'sunbin', strength: 2 },              // A: 钟馗（中克制）
  { source: 'nezha', target: 'sunbin', strength: 2 },                 // A: 哪吒（中克制）
  // 原因：怕飞行物被挡/前压节奏被压制、怕突然一波开穿、怕被先手点名失误、怕无脑锁后排破阵型


  // ==================== 三、法师（中路）====================

  // --- 上官婉儿 ---
  { source: 'zhangliang', target: 'shangguanwaner', strength: 3 },    // S: 张良
  { source: 'daji', target: 'shangguanwaner', strength: 2 },          // A: 妲己
  { source: 'yixing', target: 'shangguanwaner', strength: 2 },        // A: 弈星
  // 原因：怕稳定硬控、怕起飞失败

  // --- 貂蝉 ---
  { source: 'shangguanwaner', target: 'diaochan', strength: 3 },      // S: 上官婉儿
  { source: 'zhangliang', target: 'diaochan', strength: 3 },         // S: 张良
  { source: 'sunshangxiang', target: 'diaochan', strength: 2 },      // A: 孙膑（注：孙膑不在当前列表中）
  // 原因：怕强控和爆发覆盖；"强控克貂蝉"长期稳定逻辑

  // --- 张良 ---
  { source: 'wuzetian', target: 'zhangliang', strength: 3 },         // S: 武则天
  { source: 'shenmengxi', target: 'zhangliang', strength: 2 },       // A: 沈梦溪
  { source: 'wangzhaojun', target: 'zhangliang', strength: 2 },       // A: 嬴政（注：嬴政不在当前列表中）
  // 原因：怕手长、怕进不了控制距离

  // --- 武则天 ---
  { source: 'yixing', target: 'wuzetian', strength: 3 },            // S: 弈星
  { source: 'haiyue', target: 'wuzetian', strength: 2 },            // A: 海月
  // 原因：怕框控、怕被限制输出站位

  // --- 弈星 ---
  { source: 'zhenji', target: 'yixing', strength: 3 },              // S: 甄姬
  { source: 'shenmengxi', target: 'yixing', strength: 2 },          // A: 沈梦溪
  // 原因：怕反手冰冻、怕手长消耗

  // --- 甄姬 ---
  { source: 'milaidi', target: 'zhenji', strength: 3 },              // S: 米莱狄
  { source: 'buzhihuowu', target: 'zhenji', strength: 2 },          // A: 不知火舞
  // 原因：怕小兵/机器人挡弹射、怕突脸

  // --- 米莱狄 ---
  { source: 'gaojianli', target: 'milaidi', strength: 3 },           // S: 高渐离
  { source: 'wangzhaojun', target: 'milaidi', strength: 2 },          // A: 王昭君
  // 原因：怕强冲脸、怕AOE清场

  // --- 高渐离 ---
  { source: 'jinchan', target: 'gaojianli', strength: 3 },           // S: 金蝉
  { source: 'zhangliang', target: 'gaojianli', strength: 2 },        // A: 张良
  { source: 'wangzhaojun', target: 'gaojianli', strength: 2 },        // A: 王昭君
  // 原因：怕被禁锢进不了场

  // --- 金蝉 ---
  { source: 'wangzhaojun', target: 'jinchan', strength: 3 },         // S: 王昭君
  { source: 'ganjiangmoye', target: 'jinchan', strength: 2 },        // A: 干将莫邪（注：干将对应嬴政位置）
  // 原因：怕封路和手长消耗

  // --- 王昭君 ---
  { source: 'zhugeliang', target: 'wangzhaojun', strength: 3 },       // S: 诸葛亮
  { source: 'buzhihuowu', target: 'wangzhaojun', strength: 2 },       // A: 不知火舞
  // 原因：怕高机动切入

  // --- 诸葛亮 ---
  { source: 'daji', target: 'zhugeliang', strength: 3 },             // S: 妲己
  { source: 'zhangliang', target: 'zhugeliang', strength: 2 },        // A: 张良
  // 原因：怕瞬控瞬秒

  // --- 妲己 ---
  { source: 'anqila', target: 'daji', strength: 3 },                 // S: 安琪拉
  { source: 'shenmengxi', target: 'daji', strength: 2 },             // A: 沈梦溪
  // 原因：怕更高面伤/护盾/射程

  // --- 安琪拉 ---
  { source: 'buzhihuowu', target: 'anqila', strength: 3 },            // S: 不知火舞
  { source: 'shangguanwaner', target: 'anqila', strength: 2 },          // A: 上官婉儿
  // 原因：怕多位移绕技能

  // --- 不知火舞 ---
  { source: 'haiyue', target: 'buzhihuowu', strength: 3 },            // S: 海月
  { source: 'zhangliang', target: 'buzhihuowu', strength: 2 },        // A: 张良
  // 原因：怕单点拉入幻境、怕稳定压制

  // --- 海月 ---
  { source: 'bianque', target: 'haiyue', strength: 3 },               // S: 扁鹊
  { source: 'hainuo', target: 'haiyue', strength: 3 },                // S: 海诺
  { source: 'ganjiangmoye', target: 'haiyue', strength: 2 },          // A: 干将莫邪（注：对应原数据嬴政位置）
  // 原因：怕持续回复和更稳定拉扯

  // --- 女娲 ---
  { source: 'shenmengxi', target: 'nvwa', strength: 3 },              // S: 沈梦溪
  { source: 'buzhihuowu', target: 'nvwa', strength: 2 },              // A: 不知火舞
  // 原因：怕持续远程消耗和突脸

  // --- 沈梦溪 ---
  { source: 'bianque', target: 'shenmengxi', strength: 3 },           // S: 扁鹊
  { source: 'hainuo', target: 'shenmengxi', strength: 2 },            // A: 海诺
  // 原因：怕回血续航型法师

  // --- 扁鹊 ---
  { source: 'xishi', target: 'bianque', strength: 3 },                // S: 西施
  { source: 'zhangliang', target: 'bianque', strength: 2 },           // A: 张良
  // 原因：怕被牵引强开、怕控制

  // --- 西施 ---
  { source: 'ganjiangmoye', target: 'xishi', strength: 3 },           // S: 干将莫邪
  { source: 'wangzhaojun', target: 'xishi', strength: 2 },            // A: 王昭君（注：对应原数据嬴政位置）
  // 原因：怕更长手消耗

  // --- 干将莫邪 ---
  { source: 'hainuo', target: 'ganjiangmoye', strength: 3 },          // S: 海诺
  { source: 'buzhihuowu', target: 'ganjiangmoye', strength: 2 },      // A: 不知火舞
  // 原因：怕更全面的长手+回血+位移

  // --- 海诺 ---
  { source: 'zhangliang', target: 'hainuo', strength: 3 },            // S: 张良
  { source: 'daji', target: 'hainuo', strength: 2 },                  // A: 妲己
  // 原因：怕稳定定点控制

  // --- 嬴政 ---
  { source: 'buzhihuowu', target: 'yingzheng', strength: 3 },         // S: 不知火舞
  { source: 'simayi', target: 'yingzheng', strength: 3 },             // S: 司马懿
  { source: 'haiyue', target: 'yingzheng', strength: 2 },              // A: 海月
  { source: 'shangguanwaner', target: 'yingzheng', strength: 2 },        // A: 上官婉儿
  { source: 'zhangliang', target: 'yingzheng', strength: 1 },          // B: 张良
  // 原因：怕高机动切后排、怕强突脸法刺

  // --- 周瑜 ---
  { source: 'shenmengxi', target: 'zhouyu', strength: 3 },            // S: 沈梦溪
  { source: 'buzhihuowu', target: 'zhouyu', strength: 3 },            // S: 不知火舞
  { source: 'hainuo', target: 'zhouyu', strength: 2 },                 // A: 海诺
  { source: 'xishi', target: 'zhouyu', strength: 2 },                  // A: 西施
  { source: 'yingzheng', target: 'zhouyu', strength: 1 },              // B: 嬴政
  // 原因：怕更长手、怕快速切入、不喜欢被牵引拉出火区

  // --- 杨玉环 ---
  { source: 'zhangliang', target: 'yangyuhuan', strength: 3 },         // S: 张良
  { source: 'donghuangtaiyi', target: 'yangyuhuan', strength: 3 },     // S: 东皇太一
  { source: 'haiyue', target: 'yangyuhuan', strength: 2 },              // A: 海月
  { source: 'daji', target: 'yangyuhuan', strength: 2 },               // A: 妲己
  { source: 'shenmengxi', target: 'yangyuhuan', strength: 1 },         // B: 沈梦溪
  // 原因：怕被定点控死，回复/拉扯节奏断掉

  // --- 姜子牙 ---
  { source: 'buzhihuowu', target: 'jiangziya', strength: 3 },          // S: 不知火舞
  { source: 'simayi', target: 'jiangziya', strength: 3 },              // S: 司马懿
  { source: 'haiyue', target: 'jiangziya', strength: 2 },              // A: 海月
  { source: 'shangguanwaner', target: 'jiangziya', strength: 2 },        // A: 上官婉儿
  { source: 'zhangliang', target: 'jiangziya', strength: 1 },          // B: 张良
  // 原因：怕短时间内被贴脸，不给蓄力与拉扯空间

  // --- 嫦娥 ---
  { source: 'jailuo', target: 'change', strength: 3 },                 // S: 伽罗
  { source: 'lvbu', target: 'change', strength: 3 },                   // S: 吕布
  { source: 'diaochan', target: 'change', strength: 2 },               // A: 貂蝉
  { source: 'simayi', target: 'change', strength: 2 },                 // A: 司马懿
  { source: 'zhangliang', target: 'change', strength: 1 },             // B: 张良
  // 原因：怕护盾/蓝量体系被高穿透或真伤拆解

  // --- 小乔 ---
  { source: 'buzhihuowu', target: 'xiaoqiao', strength: 3 },           // S: 不知火舞
  { source: 'simayi', target: 'xiaoqiao', strength: 3 },               // S: 司马懿
  { source: 'shangguanwaner', target: 'xiaoqiao', strength: 2 },         // A: 上官婉儿
  { source: 'haiyue', target: 'xiaoqiao', strength: 2 },               // A: 海月
  { source: 'zhangliang', target: 'xiaoqiao', strength: 1 },           // B: 张良
  // 原因：怕法刺强切、怕多段突脸


  // ==================== 四、打野====================

  // --- 露娜 ---
  { source: 'sunwukong', target: 'luna', strength: 3 },              // S: 孙悟空
  { source: 'yase', target: 'luna', strength: 3 },                 // S: 亚瑟
  { source: 'zhangliang', target: 'luna', strength: 2 },              // A: 张良
  { source: 'donghuangtaiyi', target: 'luna', strength: 2 },          // A: 东皇太一
  // 原因：怕免伤、怕沉默、怕稳定点控；"强控克刺客/露娜李白"经典通用结论

  // --- 孙悟空 ---
  { source: 'liubei', target: 'sunwukong', strength: 3 },            // S: 刘备
  { source: 'dianwei', target: 'sunwukong', strength: 2 },            // A: 典韦
  { source: 'kai', target: 'sunwukong', strength: 2 },             // A: 铠
  // 原因：怕前中期硬拼、怕更高贴脸爆发

  // --- 刘备 ---
  { source: 'kai', target: 'liubei', strength: 3 },                // S: 铠
  { source: 'jing', target: 'liubei', strength: 2 },                   // A: 镜
  // 原因：怕免伤和多段规避

  // --- 铠（打野）---
  { source: 'libai', target: 'kai', strength: 3 },                 // S: 李白
  { source: 'luna', target: 'kai', strength: 2 },                  // A: 露娜
  // 原因：怕拉扯骗大、怕不跟你正面

  // --- 李白 ---
  { source: 'hanxin', target: 'libai', strength: 3 },                 // S: 韩信
  { source: 'yase', target: 'libai', strength: 2 },                // A: 亚瑟
  { source: 'donghuangtaiyi', target: 'libai', strength: 2 },         // A: 东皇太一
  // 原因：怕更强节奏压制、怕点控；官网旧攻略长期把李白列入被点控克制对象

  // --- 韩信 ---
  { source: 'dianwei', target: 'hanxin', strength: 3 },              // S: 典韦
  { source: 'kai', target: 'hanxin', strength: 2 },                // A: 铠
  { source: 'yase', target: 'hanxin', strength: 2 },               // A: 亚瑟
  // 原因：怕反甲+解控、怕容错低被抓失误

  // --- 典韦 ---
  { source: 'luna', target: 'dianwei', strength: 3 },                 // S: 露娜
  { source: 'makeboluo', target: 'dianwei', strength: 2 },            // A: 马可波罗
  // 原因：怕无控拉扯、怕打不到人

  // --- 亚瑟（打野）---
  { source: 'miyue', target: 'yase', strength: 3 },                // S: 芈月
  { source: 'diaochan', target: 'yase', strength: 2 },             // A: 貂蝉
  // 原因：怕持续吸血拉扯

  // --- 芈月（打野/边野）---
  { source: 'agudo', target: 'miyue', strength: 3 },                  // S: 阿古朵
  { source: 'yuange', target: 'miyue', strength: 3 },                  // S: 元歌
  { source: 'guanyu', target: 'miyue', strength: 2 },                  // A: 关羽
  // 原因：怕兵线/野怪屏障、怕傀儡和高机动抓失误

  // --- 阿古朵 ---
  { source: 'lan', target: 'agudo', strength: 3 },                    // S: 澜
  { source: 'hanxin', target: 'agudo', strength: 2 },                 // A: 韩信
  // 原因：怕收割野怪滚雪球、怕反野节奏

  // --- 澜 ---
  { source: 'pangu', target: 'lan', strength: 3 },                    // S: 盘古
  { source: 'donghuangtaiyi', target: 'lan', strength: 2 },           // A: 东皇太一
  { source: 'zhangliang', target: 'lan', strength: 2 },               // A: 张良
  // 原因：怕缴械、怕被按住进不了场

  // --- 盘古 ---
  { source: 'jvyoujing', target: 'pangu', strength: 3 },           // S: 橘右京
  { source: 'jing', target: 'pangu', strength: 2 },                   // A: 镜
  // 原因：怕技能型打野，不怕你缴械

  // --- 橘右京 ---
  { source: 'gongbenwuzang', target: 'jvyoujing', strength: 3 },         // S: 宫本武藏
  { source: 'jing', target: 'jvyoujing', strength: 2 },            // A: 镜
  // 原因：怕霸体压制、怕更高机动对拼

  // --- 宫本武藏 ---
  { source: 'mengqi', target: 'gongbenwuzang', strength: 3 },            // S: 梦奇
  { source: 'dianwei', target: 'gongbenwuzang', strength: 2 },              // A: 典韦
  // 原因：怕高护盾厚度、怕贴脸硬拼

  // --- 梦奇（打野/边）---
  { source: 'jing', target: 'mengqi', strength: 3 },               // S: 镜
  { source: 'lvbu', target: 'mengqi', strength: 3 },               // S: 吕布
  { source: 'laofuzi', target: 'mengqi', strength: 2 },            // A: 老夫子
  // 原因：怕真伤、怕拉扯、怕被风筝；"吕布/老夫子克梦奇"长期稳定逻辑

  // --- 镜 ---
  { source: 'donghuangtaiyi', target: 'jing', strength: 3 },          // S: 东皇太一
  { source: 'zhangliang', target: 'jing', strength: 3 },              // S: 张良
  { source: 'yase', target: 'jing', strength: 2 },                 // A: 亚瑟
  // 原因：怕定点强控、怕沉默断连

  // --- 娜可露露 ---
  { source: 'donghuangtaiyi', target: 'nakelulu', strength: 3 },      // S: 东皇太一
  { source: 'zhangliang', target: 'nakelulu', strength: 3 },          // S: 张良
  { source: 'kai', target: 'nakelulu', strength: 2 },              // A: 铠
  { source: 'yase', target: 'nakelulu', strength: 2 },             // A: 亚瑟
  { source: 'dianwei', target: 'nakelulu', strength: 1 },             // B: 典韦
  // 原因：怕进场被锁头、怕爆发被免伤/沉默断掉

  // --- 裴擒虎 ---
  { source: 'dianwei', target: 'peiqinhu', strength: 3 },             // S: 典韦
  { source: 'kai', target: 'peiqinhu', strength: 3 },              // S: 铠
  { source: 'liubei', target: 'peiqinhu', strength: 2 },              // A: 刘备
  { source: 'donghuangtaiyi', target: 'peiqinhu', strength: 2 },       // A: 东皇太一
  { source: 'yase', target: 'peiqinhu', strength: 1 },             // B: 亚瑟
  // 原因：怕野区硬碰硬和锁头控制

  // --- 司马懿 ---
  { source: 'zhangliang', target: 'simayi', strength: 3 },             // S: 张良
  { source: 'donghuangtaiyi', target: 'simayi', strength: 3 },        // S: 东皇太一
  { source: 'haiyue', target: 'simayi', strength: 2 },                // A: 海月
  { source: 'direnjie', target: 'simayi', strength: 2 },              // A: 狄仁杰
  { source: 'yase', target: 'simayi', strength: 1 },               // B: 亚瑟
  // 原因：怕定点强控和反手保命

  // --- 云中君 ---
  { source: 'pangu', target: 'yunzhongjun', strength: 3 },            // S: 盘古
  { source: 'dianwei', target: 'yunzhongjun', strength: 3 },          // S: 典韦
  { source: 'kai', target: 'yunzhongjun', strength: 2 },           // A: 铠
  { source: 'donghuangtaiyi', target: 'yunzhongjun', strength: 2 },    // A: 东皇太一
  { source: 'yase', target: 'yunzhongjun', strength: 1 },          // B: 亚瑟
  // 原因：怕被近身硬拼和强控拦截

  // --- 暃 ---
  { source: 'donghuangtaiyi', target: 'fei', strength: 3 },            // S: 东皇太一
  { source: 'zhangliang', target: 'fei', strength: 3 },                // S: 张良
  { source: 'kai', target: 'fei', strength: 2 },                   // A: 铠
  { source: 'yase', target: 'fei', strength: 2 },                  // A: 亚瑟
  { source: 'dianwei', target: 'fei', strength: 1 },                  // B: 典韦
  // 原因：墙体机动再强，也怕落地被按住

  // --- 元流之子(刺客) ---
  { source: 'kai', target: 'yuanliuzhizi_assassin', strength: 3 },// S: 铠
  { source: 'donghuangtaiyi', target: 'yuanliuzhizi_assassin', strength: 3 }, // S: 东皇太一
  { source: 'zhangliang', target: 'yuanliuzhizi_assassin', strength: 2 },   // A: 张良
  { source: 'yase', target: 'yuanliuzhizi_assassin', strength: 2 },     // A: 亚瑟
  { source: 'dianwei', target: 'yuanliuzhizi_assassin', strength: 1 },     // B: 典韦
  // 原因：多段突进+多段伤害刺客，怕抗多段爆发英雄和稳定锁头控制

  // --- 曜 ---
  { source: 'donghuangtaiyi', target: 'yao', strength: 3 },          // S: 东皇太一
  { source: 'zhangliang', target: 'yao', strength: 3 },              // S: 张良
  { source: 'yase', target: 'yao', strength: 2 },                 // A: 亚瑟
  { source: 'dianwei', target: 'yao', strength: 2 },                 // A: 典韦
  { source: 'kai', target: 'yao', strength: 1 },                  // B: 铠
  // 原因：怕回星前被控死，怕强行站场

  // --- 赵云 ---
  { source: 'lvbu', target: 'zhaoyun', strength: 3 },                 // S: 吕布
  { source: 'diaochan', target: 'zhaoyun', strength: 3 },             // S: 貂蝉
  { source: 'donghuangtaiyi', target: 'zhaoyun', strength: 2 },        // A: 东皇太一
  { source: 'zhangliang', target: 'zhaoyun', strength: 2 },            // A: 张良
  { source: 'dianwei', target: 'zhaoyun', strength: 1 },              // B: 典韦
  // 原因：怕真伤、怕持续拉扯、怕大招进场后被反控

  // --- 阿轲 ---
  { source: 'lanlingwang', target: 'ake', strength: 2 },              // A: 兰陵王（中强克制）
  { source: 'donghuangtaiyi', target: 'ake', strength: 3 },           // S: 东皇太一（强克制）
  { source: 'zhangliang', target: 'ake', strength: 3 },               // S: 张良（强克制）
  { source: 'yuji', target: 'ake', strength: 2 },                     // A: 虞姬（中强克制）
  // 原因：怕视野反蹲、怕进场被稳定锁头、怕切不死被化解爆发


  // ==================== 五、对抗路（边路）====================

  // --- 马超 ---
  { source: 'xialuote', target: 'machao', strength: 3 },              // S: 夏洛特
  { source: 'lianpo', target: 'machao', strength: 3 },               // S: 廉颇
  { source: 'mengtian', target: 'machao', strength: 2 },              // A: 蒙恬
  // 原因：怕减速/霸体/顶脸站场；"廉颇克马超"老攻略中长期成立

  // --- 夏洛特 ---
  { source: 'mengtian', target: 'xialuote', strength: 3 },            // S: 蒙恬
  { source: 'kuangtie', target: 'xialuote', strength: 2 },            // A: 狂铁
  // 原因：怕霸体减伤、怕回复战

  // --- 蒙恬 ---
  { source: 'kuangtie', target: 'mengtian', strength: 3 },            // S: 狂铁
  { source: 'lvbu', target: 'mengtian', strength: 2 },                // A: 吕布
  // 原因：怕多目标吸血、怕真伤

  // --- 狂铁 ---
  { source: 'laofuzi', target: 'kuangtie', strength: 3 },             // S: 老夫子
  { source: 'huamulan', target: 'kuangtie', strength: 2 },            // A: 花木兰
  // 原因：怕免伤和持续拉扯

  // --- 老夫子 ---
  { source: 'huamulan', target: 'laofuzi', strength: 3 },             // S: 花木兰
  { source: 'lianpo', target: 'laofuzi', strength: 3 },              // S: 廉颇
  { source: 'xiahoudun', target: 'laofuzi', strength: 2 },            // A: 夏侯惇
  // 原因：怕霸体、怕链子价值被化解；"廉颇让老夫子无从下手"典型说法

  // --- 花木兰 ---
  { source: 'xiahoudun', target: 'huamulan', strength: 3 },           // S: 夏侯惇
  { source: 'lvbu', target: 'huamulan', strength: 2 },                // A: 吕布
  // 原因：怕六边形坦战稳定换血

  // --- 夏侯惇 ---
  { source: 'miyue', target: 'xiahoudun', strength: 3 },              // S: 芈月
  { source: 'lvbu', target: 'xiahoudun', strength: 2 },               // A: 吕布
  // 原因：怕持续拉扯和吸血

  // --- 元歌 ---
  { source: 'guanyu', target: 'yuange', strength: 3 },                // S: 关羽
  { source: 'sikongzhen', target: 'yuange', strength: 2 },            // A: 司空震
  // 原因：怕高速清傀儡、怕远程压本体

  // --- 关羽 ---
  { source: 'yuanliuzhizi_tank', target: 'guanyu', strength: 3 },           // S: 源流之子
  { source: 'lianpo', target: 'guanyu', strength: 3 },               // S: 廉颇
  { source: 'xialuote', target: 'guanyu', strength: 2 },              // A: 夏洛特
  // 原因：怕连续控断马腿

  // --- 源流之子 ---
  { source: 'lvbu', target: 'yuanliuzhizi_tank', strength: 3 },             // S: 吕布
  { source: 'xiahoudun', target: 'yuanliuzhizi_tank', strength: 2 },        // A: 夏侯惇
  // 原因：怕真伤和更厚正面站场

  // --- 吕布 ---
  { source: 'jvyoujing', target: 'lvbu', strength: 3 },            // S: 橘右京
  { source: 'jixiaoman', target: 'lvbu', strength: 2 },               // A: 姬小满
  // 原因：怕灵活位移和技能拉扯

  // --- 橘右京（边）---
  { source: 'jixiaoman', target: 'jvyoujing', strength: 3 },       // S: 姬小满
  { source: 'yalian', target: 'jvyoujing', strength: 2 },           // A: 亚连
  // 原因：怕多段抓取和硬拼

  // --- 姬小满 ---
  { source: 'yalian', target: 'jixiaoman', strength: 3 },              // S: 亚连
  { source: 'xiahoudun', target: 'jixiaoman', strength: 2 },           // A: 夏侯惇
  // 原因：怕霸体和更稳定换血

  // --- 亚连 ---
  { source: 'sikongzhen', target: 'yalian', strength: 3 },             // S: 司空震
  { source: 'lvbu', target: 'yalian', strength: 2 },                   // A: 吕布
  // 原因：怕远程风筝和真伤

  // --- 司空震 ---
  { source: 'zhangliang', target: 'sikongzhen', strength: 3 },        // S: 张良
  { source: 'donghuangtaiyi', target: 'sikongzhen', strength: 2 },    // A: 东皇太一
  // 原因：怕稳定定点强控

  // --- 达摩 ---
  { source: 'xiahoudun', target: 'damo', strength: 3 },               // S: 夏侯惇
  { source: 'lvbu', target: 'damo', strength: 3 },                    // S: 吕布
  { source: 'miyue', target: 'damo', strength: 2 },                   // A: 芈月
  { source: 'laofuzi', target: 'damo', strength: 2 },                 // A: 老夫子
  { source: 'lianpo', target: 'damo', strength: 1 },                 // B: 廉颇

  // --- 项羽 ---
  { source: 'lvbu', target: 'xiangyu', strength: 3 },                  // S: 吕布
  { source: 'diaochan', target: 'xiangyu', strength: 3 },             // S: 貂蝉
  { source: 'makeboluo', target: 'xiangyu', strength: 2 },            // A: 马可波罗
  { source: 'miyue', target: 'xiangyu', strength: 2 },                // A: 芈月
  { source: 'bianque', target: 'xiangyu', strength: 1 },              // B: 扁鹊

  // --- 程咬金 ---
  { source: 'lvbu', target: 'chengyaojin', strength: 3 },             // S: 吕布
  { source: 'mengqi', target: 'chengyaojin', strength: 3 },        // S: 梦奇
  { source: 'diaochan', target: 'chengyaojin', strength: 2 },         // A: 貂蝉
  { source: 'miyue', target: 'chengyaojin', strength: 2 },            // A: 芈月
  { source: 'bianque', target: 'chengyaojin', strength: 1 },          // B: 扁鹊

  // --- 杨戬 ---
  { source: 'xiahoudun', target: 'yangjian', strength: 3 },           // S: 夏侯惇
  { source: 'lvbu', target: 'yangjian', strength: 3 },                // S: 吕布
  { source: 'miyue', target: 'yangjian', strength: 2 },               // A: 芈月
  { source: 'laofuzi', target: 'yangjian', strength: 2 },             // A: 老夫子
  { source: 'huamulan', target: 'yangjian', strength: 1 },            // B: 花木兰

  // --- 雅典娜 ---
  { source: 'laofuzi', target: 'yadianna', strength: 3 },             // S: 老夫子
  { source: 'lvbu', target: 'yadianna', strength: 3 },                // S: 吕布
  { source: 'xiahoudun', target: 'yadianna', strength: 2 },           // A: 夏侯惇
  { source: 'donghuangtaiyi', target: 'yadianna', strength: 2 },       // A: 东皇太一
  { source: 'miyue', target: 'yadianna', strength: 1 },               // B: 芈月

  // --- 哪吒 ---
  { source: 'zhangliang', target: 'nezha', strength: 3 },             // S: 张良
  { source: 'donghuangtaiyi', target: 'nezha', strength: 3 },         // S: 东皇太一
  { source: 'lvbu', target: 'nezha', strength: 2 },                   // A: 吕布
  { source: 'xiahoudun', target: 'nezha', strength: 2 },              // A: 夏侯惇
  { source: 'zhuangzhou', target: 'nezha', strength: 1 },             // B: 庄周

  // --- 曹操 ---
  { source: 'lvbu', target: 'caocao', strength: 3 },                  // S: 吕布
  { source: 'laofuzi', target: 'caocao', strength: 3 },               // S: 老夫子
  { source: 'miyue', target: 'caocao', strength: 2 },                 // A: 芈月
  { source: 'diaochan', target: 'caocao', strength: 2 },              // A: 貂蝉
  { source: 'xiahoudun', target: 'caocao', strength: 1 },             // B: 夏侯惇

  // --- 钟无艳 ---
  { source: 'miyue', target: 'zhongwuyan', strength: 3 },             // S: 芈月
  { source: 'huamulan', target: 'zhongwuyan', strength: 3 },          // S: 花木兰
  { source: 'xiahoudun', target: 'zhongwuyan', strength: 2 },         // A: 夏侯惇
  { source: 'laofuzi', target: 'zhongwuyan', strength: 2 },           // A: 老夫子
  { source: 'lvbu', target: 'zhongwuyan', strength: 1 },              // B: 吕布

  // --- 李信 ---
  { source: 'xiahoudun', target: 'lixin', strength: 3 },              // S: 夏侯惇
  { source: 'miyue', target: 'lixin', strength: 3 },                  // S: 芈月
  { source: 'huamulan', target: 'lixin', strength: 2 },              // A: 花木兰
  { source: 'lvbu', target: 'lixin', strength: 2 },                   // A: 吕布
  { source: 'laofuzi', target: 'lixin', strength: 1 },               // B: 老夫子

  // --- 赵怀真 ---
  { source: 'lvbu', target: 'zhaohuaizhen', strength: 3 },            // S: 吕布
  { source: 'diaochan', target: 'zhaohuaizhen', strength: 3 },        // S: 貂蝉
  { source: 'xiahoudun', target: 'zhaohuaizhen', strength: 2 },       // A: 夏侯惇
  { source: 'huamulan', target: 'zhaohuaizhen', strength: 2 },        // A: 花木兰
  { source: 'laofuzi', target: 'zhaohuaizhen', strength: 1 },         // B: 老夫子

  // --- 蚩奼 ---
  { source: 'lvbu', target: 'chicha', strength: 3 },                  // S: 吕布
  { source: 'xiahoudun', target: 'chicha', strength: 3 },             // S: 夏侯惇
  { source: 'miyue', target: 'chicha', strength: 2 },                 // A: 芈月
  { source: 'laofuzi', target: 'chicha', strength: 2 },               // A: 老夫子
  { source: 'huamulan', target: 'chicha', strength: 1 },              // B: 花木兰
  // 原因：新战边通常先看真伤、站撸、持续拉扯、锁头单挑四个维度

  // --- 大司命 ---
  { source: 'donghuangtaiyi', target: 'dasiming', strength: 3 },      // S: 东皇太一
  { source: 'zhangliang', target: 'dasiming', strength: 3 },          // S: 张良
  { source: 'lvbu', target: 'dasiming', strength: 2 },                // A: 吕布
  { source: 'xiahoudun', target: 'dasiming', strength: 2 },           // A: 夏侯惇
  { source: 'laofuzi', target: 'dasiming', strength: 1 },             // B: 老夫子

  // --- 影 ---
  { source: 'lvbu', target: 'ying', strength: 3 },                   // S: 吕布
  { source: 'donghuangtaiyi', target: 'ying', strength: 3 },         // S: 东皇太一
  { source: 'zhangliang', target: 'ying', strength: 2 },             // A: 张良
  { source: 'xiahoudun', target: 'ying', strength: 2 },              // A: 夏侯惇
  { source: 'laofuzi', target: 'ying', strength: 1 },                // B: 老夫子

  // --- 云缨 ---
  { source: 'xiahoudun', target: 'yunying', strength: 3 },            // S: 夏侯惇
  { source: 'lvbu', target: 'yunying', strength: 3 },                 // S: 吕布
  { source: 'huamulan', target: 'yunying', strength: 2 },             // A: 花木兰
  { source: 'laofuzi', target: 'yunying', strength: 2 },              // A: 老夫子
  { source: 'miyue', target: 'yunying', strength: 1 },                // B: 芈月

  // --- 刘邦 ---
  { source: 'lvbu', target: 'liubang', strength: 3 },                 // S: 吕布
  { source: 'diaochan', target: 'liubang', strength: 3 },             // S: 貂蝉
  { source: 'miyue', target: 'liubang', strength: 2 },                // A: 芈月
  { source: 'makeboluo', target: 'liubang', strength: 2 },            // A: 马可波罗
  { source: 'bianque', target: 'liubang', strength: 1 },              // B: 扁鹊

  // --- 白起 ---
  { source: 'lvbu', target: 'baiqi', strength: 3 },                   // S: 吕布（强克制）
  { source: 'makeboluo', target: 'baiqi', strength: 3 },               // S: 马可波罗（强克制）
  { source: 'diaochan', target: 'baiqi', strength: 2 },                // A: 貂蝉（中强克制）
  { source: 'miyue', target: 'baiqi', strength: 2 },                   // A: 芈月（中克制）
  // 原因：怕真伤让坦度缩水、怕高频真伤+风筝摸不到、怕持续真伤+灵活位移、怕拉扯笨重前排拖到没开团价值
];


// 获取角色颜色
export const getRoleColor = (role: string): string => {
  switch (role) {
    case 'tank': return '#eab308';
    case 'fighter': return '#ef4444';
    case 'assassin': return '#f97316';
    case 'mage': return '#a855f7';
    case 'marksman': return '#3b82f6';
    case 'support': return '#22c55e';
    default: return '#6b7280';
  }
};
   
// 获取角色名称
export const getRoleName = (role: string, language: string = 'zh'): string => {
  const roleNames: Record<string, Record<string, string>> = {
    tank: { zh: '坦克', en: 'Tank', ja: 'タンク', ko: '탱커', 'zh-TW': '坦克', es: 'Tanque', fr: 'Tank', de: 'Panzer', pt: 'Tanque', ru: 'Танк', it: 'Carro' },
    fighter: { zh: '战士', en: 'Fighter', ja: 'ウォリアー', ko: '전사', 'zh-TW': '戰士', es: 'Guerrero', fr: 'Guerrier', de: 'Krieger', pt: 'Guerreiro', ru: 'Воин', it: 'Guerriero' },
    assassin: { zh: '刺客', en: 'Assassin', ja: 'アサシン', ko: '암살자', 'zh-TW': '刺客', es: 'Asesino', fr: 'Assassin', de: 'Assassine', pt: 'Assassino', ru: 'Убийца', it: 'Assassino' },
    mage: { zh: '法师', en: 'Mage', ja: 'メイジ', ko: '마법사', 'zh-TW': '法師', es: 'Mago', fr: 'Mage', de: 'Magier', pt: 'Mago', ru: 'Маг', it: 'Mago' },
    marksman: { zh: '射手', en: 'Marksman', ja: 'マークスマン', ko: '원딜', 'zh-TW': '射手', es: 'Tirador', fr: 'Tireur', de: 'Schütze', pt: 'Atirador', ru: 'Стрелок', it: 'Tiratore' },
    support: { zh: '辅助', en: 'Support', ja: 'サポート', ko: '서포터', 'zh-TW': '輔助', es: 'Apoyo', fr: 'Support', de: 'Support', pt: 'Suporte', ru: 'Поддержка', it: 'Support' },
  };
  return roleNames[role]?.[language] || roleNames[role]?.['en'] || role;
};

/** 获取多个职业名称（用斜杠分隔） */
export const getRoleNames = (roles: HeroRole[], language: string = 'zh'): string => {
  const separator = language === 'zh' || language === 'zh-TW' || language === 'ja' ? '/' : '/';
  return roles.map(r => getRoleName(r, language)).join(separator);
};

// 获取角色英文名称
export const getRoleNameEn = (role: string): string => {
  switch (role) {
    case 'tank': return 'Tank';
    case 'fighter': return 'fighter';
    case 'assassin': return 'Assassin';
    case 'mage': return 'Mage';
    case 'marksman': return 'Marksman';
    case 'support': return 'Support';
    default: return 'Unknown';
  }
};

// 获取英雄名称（根据语言）
export const getHeroName = (hero: Hero | undefined | null, language: string = 'zh'): string => {
  if (!hero) return '';
  return language === 'zh' ? hero.name : hero.nameEn;
};
