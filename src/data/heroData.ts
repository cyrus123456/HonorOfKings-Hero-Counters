// 王者荣耀英雄数据 - 基于被克制关系数据库 v1 整理


/** 王者荣耀英雄职业类型 - 官方六种职业 */
export type HeroRole = 'tank' | 'fighter' | 'assassin' | 'mage' | 'marksman' | 'support';

/** 克制强度等级 */
export type CounterStrength = 1 | 2 | 3;

/** 协同强度等级 */
export type SynergyStrength = 1 | 2 | 3;

/** 职业颜色映射 */
export const roleColors: Record<HeroRole, string> = {
  tank: '#eab308',
  fighter: '#ef4444',
  assassin: '#f97316',
  mage: '#a855f7',
  marksman: '#3b82f6',
  support: '#22c55e',
};

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
  color: Record<HeroRole, string>;
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
  { id: 'houyi', name: '后羿', nameEn: 'Hou Yi', role: ['marksman'], color: roleColors, image: heroImages.houyi },
  { id: 'luban7', name: '鲁班七号', nameEn: 'Luban No.7', nickname: '鲁班', role: ['marksman'], color: roleColors, image: heroImages.luban7 },
  { id: 'sunshangxiang', name: '孙尚香', nameEn: 'Sun Shangxiang', nickname: '大小姐', role: ['marksman'], color: roleColors, image: heroImages.sunshangxiang },
  { id: 'makeboluo', name: '马可波罗', nameEn: 'Marco Polo', role: ['marksman'], color: roleColors, image: heroImages.makeboluo },
  { id: 'direnjie', name: '狄仁杰', nameEn: 'Di Renjie', role: ['marksman'], color: roleColors, image: heroImages.direnjie },
  { id: 'yuji', name: '虞姬', nameEn: 'Yu Ji', role: ['marksman'], color: roleColors, image: heroImages.yuji },
  { id: 'liyuanfang', name: '李元芳', nameEn: 'Li Yuanfang', role: ['marksman'], color: roleColors, image: heroImages.liyuanfang },
  { id: 'gongsunli', name: '公孙离', nameEn: 'Gongsun Li', nickname: '阿离', role: ['marksman'], color: roleColors, image: heroImages.gongsunli },
  { id: 'jailuo', name: '伽罗', nameEn: 'Jialuo', role: ['marksman'], color: roleColors, image: heroImages.jailuo },
  // 百里守约: 射手+刺客
  { id: 'bailishouyue', name: '百里守约', nameEn: 'Baili Shouyue', role: ['assassin', 'marksman'], color: roleColors, image: heroImages.bailishouyue },
  { id: 'huangzhong', name: '黄忠', nameEn: 'Huang Zhong', role: ['marksman'], color: roleColors, image: heroImages.huangzhong },
  { id: 'ailin', name: '艾琳', nameEn: 'Ailin', role: ['marksman'], color: roleColors, image: heroImages.ailin },
  { id: 'mengya', name: '蒙犽', nameEn: 'Meng Ya', role: ['marksman'], color: roleColors, image: heroImages.mengya },
  { id: 'gaya', name: '戈娅', nameEn: 'Ga Ya', role: ['marksman'], color: roleColors, image: heroImages.gaya },
  { id: 'aoyin', name: '敖隐', nameEn: 'Ao Yin', role: ['marksman'], color: roleColors, image: heroImages.aoyin },
  { id: 'agudo', name: '阿古朵', nameEn: 'A Gu Duo', role: ['marksman'], color: roleColors, image: heroImages.agudo }, // 官方主分类为射手
  { id: 'cang', name: '苍', nameEn: 'Cang', role: ['marksman'], color: roleColors, image: heroImages.cang },
  { id: 'sunquan', name: '孙权', nameEn: 'Sun Quan', role: ['marksman'], color: roleColors, image: heroImages.sunquan },
  { id: 'laixiao', name: '莱西奥', nameEn: 'La Xiao', role: ['marksman'], color: roleColors, image: heroImages.laixiao },
  { id: 'yuanliuzhizi_archer', name: '元流之子(射手)', nameEn: 'Source Child (Archer)', role: ['marksman'], color: roleColors, image: heroImages.yuanliuzhizi_archer },

  // ========== 辅助（游走）- Support (13名) ==========
  { id: 'zhuangzhou', name: '庄周', nameEn: 'Zhuang Zhou', nickname: '鱼', role: ['tank', 'support'], color: roleColors, image: heroImages.zhuangzhou },
  { id: 'caiwenji', name: '蔡文姬', nameEn: 'Cai Wenji', role: ['mage', 'support'], color: roleColors, image: heroImages.caiwenji },
  { id: 'mingshiyin', name: '明世隐', nameEn: 'Ming Shiyin', role: ['mage', 'support'], color: roleColors, image: heroImages.mingshiyin },
  { id: 'yao', name: '瑶', nameEn: 'Yao', role: ['mage', 'support'], color: roleColors, image: heroImages.yao },
  { id: 'guiguzi', name: '鬼谷子', nameEn: 'Gui Gu Zi', role: ['mage', 'support'], color: roleColors, image: heroImages.guiguzi },
  { id: 'sunbin', name: '孙膑', nameEn: 'Sun Bin', role: ['mage', 'support'], color: roleColors, image: heroImages.sunbin },
  { id: 'daqiao', name: '大乔', nameEn: 'Da Qiao', role: ['mage', 'support'], color: roleColors, image: heroImages.daqiao },
  { id: 'sangqi', name: '桑启', nameEn: 'Sang Qi', role: ['mage', 'support'], color: roleColors, image: heroImages.sangqi },
  { id: 'duoliya', name: '朵莉亚', nameEn: 'Dolia', role: ['mage', 'support'], color: roleColors, image: heroImages.duoliya },
  { id: 'shaosiyuan', name: '少司缘', nameEn: 'Shao Siyuan', role: ['mage', 'support'], color: roleColors, image: heroImages.shaosiyuan },
  { id: 'kongkonger', name: '空空儿', nameEn: 'Kong Kong Er', role: ['fighter', 'support'], color: roleColors, image: heroImages.kongkonger },
  { id: 'yuanliuzhizi_support', name: '元流之子(辅助)', nameEn: 'Source Child (Support)', role: ['support'], color: roleColors, image: heroImages.yuanliuzhizi_support },
  // 墨子: 战士+法师
  { id: 'mozi', name: '墨子', nameEn: 'Mo Zi', nickname: '和平守望', role: ['fighter', 'mage'], color: roleColors, image: heroImages.mozi },

  // ========== 坦克（对抗路/野区）- Tank (20名) ==========
  { id: 'niumo', name: '牛魔', nameEn: 'Niu Mo', role: ['tank', 'support'], color: roleColors, image: heroImages.niumo },
  { id: 'zhangfei', name: '张飞', nameEn: 'Zhang Fei', role: ['tank', 'support'], color: roleColors, image: heroImages.zhangfei },
  { id: 'donghuangtaiyi', name: '东皇太一', nameEn: 'Dong Huang Tai Yi', role: ['mage', 'support'], color: roleColors, image: heroImages.donghuangtaiyi },
  { id: 'lianpo', name: '廉颇', nameEn: 'Lian Pin', role: ['tank'], color: roleColors, image: heroImages.lianpo },
  { id: 'sulie', name: '苏烈', nameEn: 'Su Lie', role: ['tank', 'support'], color: roleColors, image: heroImages.sulie },
  { id: 'dunshan', name: '盾山', nameEn: 'Dun Shan', role: ['tank', 'support'], color: roleColors, image: heroImages.dunshan },
  { id: 'zhongkui', name: '钟馗', nameEn: 'Zhong Kui', role: ['tank', 'support'], color: roleColors, image: heroImages.zhongkui },
  { id: 'baiqi', name: '白起', nameEn: 'Bai Qi', role: ['tank'], color: roleColors, image: heroImages.baiqi },
  { id: 'liushan', name: '刘禅', nameEn: 'Liu Shan', role: ['tank', 'support'], color: roleColors, image: heroImages.liushan },
  { id: 'taiyizhenren', name: '太乙真人', nameEn: 'Taiyi Zhenren', role: ['tank', 'support'], color: roleColors, image: heroImages.taiyizhenren },
  { id: 'sunce', name: '孙策', nameEn: 'Sun Ce', role: ['tank', 'fighter'], color: roleColors, image: heroImages.sunce },
  { id: 'lubandashi', name: '鲁班大师', nameEn: 'Luban Master', role: ['tank', 'support'], color: roleColors, image: heroImages.lubandashi },
  { id: 'zhubajie', name: '猪八戒', nameEn: 'Zhu Bajie', role: ['tank'], color: roleColors, image: heroImages.zhubajie },
  { id: 'dayu', name: '大禹', nameEn: 'Da Yu', role: ['tank', 'support'], color: roleColors, image: heroImages.dayu },
  { id: 'mengqi', name: '梦奇', nameEn: 'Meng Qi', role: ['tank', 'mage'], color: roleColors, image: heroImages.mengqi },
  // 刘邦: 坦克+法师
  { id: 'liubang', name: '刘邦', nameEn: 'Liu Bang', nickname: '双面君主', role: ['tank', 'mage'], color: roleColors, image: heroImages.liubang },
  { id: 'chengyaojin', name: '程咬金', nameEn: 'Cheng Yaojin', role: ['tank'], color: roleColors, image: heroImages.chengyaojin },
  { id: 'xiangyu', name: '项羽', nameEn: 'Xiang Yu', role: ['tank', 'fighter'], color: roleColors, image: heroImages.xiangyu },
  // 雅典娜: 战士+刺客
  { id: 'yadianna', name: '雅典娜', nameEn: 'Athena', role: ['fighter', 'assassin'], color: roleColors, image: heroImages.yadianna },

  // ========== 法师（中路）- Mage (26名) ==========
  { id: 'daji', name: '妲己', nameEn: "Da Ji", role: ['mage'], color: roleColors, image: heroImages.daji },
  { id: 'wuzetian', name: '武则天', nameEn: 'Wu Zetian', role: ['mage'], color: roleColors, image: heroImages.wuzetian },
  { id: 'zhenji', name: '甄姬', nameEn: 'Zhen Ji', role: ['mage'], color: roleColors, image: heroImages.zhenji },
  { id: 'anqila', name: '安琪拉', nameEn: 'Angela', role: ['mage'], color: roleColors, image: heroImages.anqila },
  { id: 'wangzhaojun', name: '王昭君', nameEn: 'Wang Zhaojun', role: ['mage'], color: roleColors, image: heroImages.wangzhaojun },
  { id: 'zhangliang', name: '张良', nameEn: 'Zhang Liang', role: ['mage'], color: roleColors, image: heroImages.zhangliang },
  { id: 'gaojianli', name: '高渐离', nameEn: 'Gao Jianli', role: ['mage'], color: roleColors, image: heroImages.gaojianli },
  // 扁鹊: 战士+法师
  { id: 'bianque', name: '扁鹊', nameEn: 'Bian Que', role: ['fighter', 'mage'], color: roleColors, image: heroImages.bianque },
  { id: 'zhugeliang', name: '诸葛亮', nameEn: 'Zhuge Liang', role: ['mage'], color: roleColors, image: heroImages.zhugeliang },
  { id: 'nvwa', name: '女娲', nameEn: "Nü Wa", role: ['mage'], color: roleColors, image: heroImages.nvwa },
  { id: 'diaochan', name: '貂蝉', nameEn: 'Diao Chan', role: ['mage'], color: roleColors, image: heroImages.diaochan },
  // 不知火舞: 刺客+法师
  { id: 'buzhihuowu', name: '不知火舞', nameEn: 'Shiranui', role: ['assassin', 'mage'], color: roleColors, image: heroImages.buzhihuowu },
  { id: 'yixing', name: '弈星', nameEn: 'Yi Xing', role: ['mage'], color: roleColors, image: heroImages.yixing },
  { id: 'milaidi', name: '米莱狄', nameEn: 'milaidi', role: ['mage'], color: roleColors, image: heroImages.milaidi },
  { id: 'ganjiangmoye', name: '干将莫邪', nameEn: 'Ganjiang Moye', role: ['mage'], color: roleColors, image: heroImages.ganjiangmoye },
  { id: 'shenmengxi', name: '沈梦溪', nameEn: 'Shen Mengxi', role: ['mage'], color: roleColors, image: heroImages.shenmengxi },
  { id: 'xishi', name: '西施', nameEn: 'Xi Shi', role: ['mage'], color: roleColors, image: heroImages.xishi },
  { id: 'shangguanwaner', name: '上官婉儿', nameEn: "Shangguan Wan'er", role: ['mage'], color: roleColors, image: heroImages.shangguanwaner },
  { id: 'yingzheng', name: '嬴政', nameEn: 'Ying Zheng', role: ['mage'], color: roleColors, image: heroImages.yingzheng },
  // 周瑜: 战士+法师
  { id: 'zhouyu', name: '周瑜', nameEn: 'Zhou Yu', role: ['fighter', 'mage'], color: roleColors, image: heroImages.zhouyu },
  // 杨玉环: 法师+辅助
  { id: 'yangyuhuan', name: '杨玉环', nameEn: 'Yang Yuhuan', role: ['mage'], color: roleColors, image: heroImages.yangyuhuan },
  { id: 'jiangziya', name: '姜子牙', nameEn: 'Jiang Ziya', role: ['mage'], color: roleColors, image: heroImages.jiangziya },
  // 嫦娥: 战士+法师
  { id: 'change', name: '嫦娥', nameEn: "Chang'e", role: ['fighter', 'mage'], color: roleColors, image: heroImages.change },
  { id: 'jinchan', name: '金蝉', nameEn: 'Jin Chan', role: ['mage'], color: roleColors, image: heroImages.jinchan },
  { id: 'haiyue', name: '海月', nameEn: 'Hai Yue', role: ['mage'], color: roleColors, image: heroImages.haiyue },
  { id: 'hainuo', name: '海诺', nameEn: 'Hai Nuo', role: ['mage'], color: roleColors, image: heroImages.hainuo },
  { id: 'yuanliuzhizi_magic', name: '元流之子(法师)', nameEn: 'Source Child (Mage)', role: ['mage'], color: roleColors, image: heroImages.yuanliuzhizi_magic },
  { id: 'xiaoqiao', name: '小乔', nameEn: 'Xiao Qiao', nickname: '恋之微风', role: ['mage'], color: roleColors, image: heroImages.xiaoqiao },
  { id: 'yase', name: '亚瑟', nameEn: 'Arthur', role: ['tank', 'fighter'], color: roleColors, image: heroImages.yase },
  { id: 'hanxin', name: '韩信', nameEn: 'Han Xin', role: ['assassin'], color: roleColors, image: heroImages.hanxin },
  // 露娜: 刺客+法师
  { id: 'luna', name: '露娜', nameEn: 'Luna', role: ['assassin', 'mage'], color: roleColors, image: heroImages.luna },
  { id: 'libai', name: '李白', nameEn: 'Li Bai', role: ['assassin'], color: roleColors, image: heroImages.libai },
  { id: 'liubei', name: '刘备', nameEn: 'Liu Bei', role: ['fighter'], color: roleColors, image: heroImages.liubei },
  { id: 'dianwei', name: '典韦', nameEn: 'Dian Wei', role: ['fighter'], color: roleColors, image: heroImages.dianwei },
  { id: 'ake', name: '阿轲', nameEn: "A Ke", role: ['assassin'], color: roleColors, image: heroImages.ake },
  { id: 'lanlingwang', name: '兰陵王', nameEn: 'Lanling Wang', role: ['assassin'], color: roleColors, image: heroImages.lanlingwang },
  { id: 'nakelulu', name: '娜可露露', nameEn: 'Nakoruru', role: ['assassin'], color: roleColors, image: heroImages.nakelulu },
  // 芈月: 战士+法师
  { id: 'miyue', name: '芈月', nameEn: 'Mi Yue', role: ['mage'], color: roleColors, image: heroImages.miyue },
  { id: 'bailixuance', name: '百里玄策', nameEn: 'Baili Xuance', role: ['assassin'], color: roleColors, image: heroImages.bailixuance },
  { id: 'peiqinhu', name: '裴擒虎', nameEn: 'Pei Qinhu', role: ['assassin'], color: roleColors, image: heroImages.peiqinhu },
  // 司马懿: 刺客+法师
  { id: 'simayi', name: '司马懿', nameEn: 'Sima Yi', role: ['assassin', 'mage'], color: roleColors, image: heroImages.simayi },
  { id: 'yunzhongjun', name: '云中君', nameEn: 'Yun Zhongjun', role: ['assassin'], color: roleColors, image: heroImages.yunzhongjun },
  { id: 'lan', name: '澜', nameEn: 'Lan', role: ['fighter', 'assassin'], color: roleColors, image: heroImages.lan },
  { id: 'pangu', name: '盘古', nameEn: 'Pan Gu', role: ['fighter'], color: roleColors, image: heroImages.pangu },
  { id: 'jing', name: '镜', nameEn: 'Jing', role: ['assassin'], color: roleColors, image: heroImages.jing },
  { id: 'fei', name: '暃', nameEn: 'Fei', role: ['assassin'], color: roleColors, image: heroImages.fei },
  { id: 'yuanliuzhizi_assassin', name: '元流之子(刺客)', nameEn: 'Source Child (Assassin)', role: ['assassin'], color: roleColors, image: heroImages.yuanliuzhizi_assassin },
  { id: 'yao_fighter', name: '曜', nameEn: 'Yao', role: ['fighter', 'assassin'], color: roleColors, image: heroImages.yao_fighter },
  // 赵云: 战士+刺客
  { id: 'zhaoyun', name: '赵云', nameEn: 'Zhao Yun', nickname: '苍天翔龙', role: ['fighter', 'assassin'], color: roleColors, image: heroImages.zhaoyun },

  // ========== 对抗路（边路）- Fighter (25名) ==========
  { id: 'lvbu', name: '吕布', nameEn: "Lu Bu", role: ['tank', 'fighter'], color: roleColors, image: heroImages.lvbu },
  { id: 'machao', name: '马超', nameEn: 'Ma Chao', role: ['fighter'], color: roleColors, image: heroImages.machao },
  { id: 'guanyu', name: '关羽', nameEn: 'Guan Yu', role: ['tank', 'fighter'], color: roleColors, image: heroImages.guanyu },
  { id: 'huamulan', name: '花木兰', nameEn: 'Hua Mulan', role: ['fighter'], color: roleColors, image: heroImages.huamulan },
  { id: 'laofuzi', name: '老夫子', nameEn: 'Lao Fu Zi', role: ['fighter'], color: roleColors, image: heroImages.laofuzi },
  { id: 'kuangtie', name: '狂铁', nameEn: 'Kuang Tie', role: ['tank', 'fighter'], color: roleColors, image: heroImages.kuangtie },
  { id: 'xiahoudun', name: '夏侯惇', nameEn: 'Xiahou Dun', role: ['tank', 'fighter'], color: roleColors, image: heroImages.xiahoudun },
  { id: 'xialuote', name: '夏洛特', nameEn: 'Charlotte', role: ['fighter'], color: roleColors, image: heroImages.xialuote },
  { id: 'mengtian', name: '蒙恬', nameEn: 'Meng Tian', role: ['tank', 'fighter'], color: roleColors, image: heroImages.mengtian },
  { id: 'yuange', name: '元歌', nameEn: 'Yuan Ge', role: ['assassin'], color: roleColors, image: heroImages.yuange },
  // 橘右京: 战士+刺客
  { id: 'jvyoujing', name: '橘右京', nameEn: 'Tachibana Ukyo', role: ['fighter', 'assassin'], color: roleColors, image: heroImages.jvyoujing },
  { id: 'jixiaoman', name: '姬小满', nameEn: 'Ji Xiaoman', role: ['fighter'], color: roleColors, image: heroImages.jixiaoman },
  { id: 'yalian', name: '亚连', nameEn: 'A Lian', role: ['tank', 'fighter'], color: roleColors, image: heroImages.yalian },
  { id: 'sikongzhen', name: '司空震', nameEn: 'Si Kong Zhen', role: ['fighter', 'mage'], color: roleColors, image: heroImages.sikongzhen },
  { id: 'damo', name: '达摩', nameEn: 'Damo', role: ['tank', 'fighter'], color: roleColors, image: heroImages.damo },
  { id: 'kai', name: '铠', nameEn: 'Kai', role: ['tank', 'fighter'], color: roleColors, image: heroImages.kai },
  { id: 'sunwukong', name: '孙悟空', nameEn: 'Sun Wukong', role: ['assassin'], color: roleColors, image: heroImages.sunwukong },
  { id: 'gongbenwuzang', name: '宫本武藏', nameEn: 'Miyamoto Musashi', role: ['fighter', 'assassin'], color: roleColors, image: heroImages.gongbenwuzang },
  { id: 'yangjian', name: '杨戬', nameEn: 'Yang Jian', role: ['fighter'], color: roleColors, image: heroImages.yangjian },
  { id: 'nezha', name: '哪吒', nameEn: 'Nezha', role: ['tank', 'fighter'], color: roleColors, image: heroImages.nezha },
  { id: 'caocao', name: '曹操', nameEn: 'Cao Cao', role: ['fighter'], color: roleColors, image: heroImages.caocao },
  { id: 'zhongwuyan', name: '钟无艳', nameEn: 'Zhong Wuyan', role: ['tank', 'fighter'], color: roleColors, image: heroImages.zhongwuyan },
  { id: 'lixin', name: '李信', nameEn: 'Li Xin', role: ['fighter'], color: roleColors, image: heroImages.lixin },
  { id: 'zhaohuaizhen', name: '赵怀真', nameEn: 'Zhao Huaizhen', role: ['fighter'], color: roleColors, image: heroImages.zhaohuaizhen },
  { id: 'chicha', name: '蚩奼', nameEn: 'Chi Yan', role: ['fighter'], color: roleColors, image: heroImages.chicha },
  { id: 'dasiming', name: '大司命', nameEn: 'Da Siming', role: ['fighter'], color: roleColors, image: heroImages.dasiming },
  { id: 'ying', name: '影', nameEn: 'Ying', role: ['fighter'], color: roleColors, image: heroImages.ying },
  // 云缨: 战士+刺客
  { id: 'yunying', name: '云缨', nameEn: 'Yun Ying', role: ['fighter', 'assassin'], color: roleColors, image: heroImages.yunying },
  { id: 'yuanliuzhizi_tank', name: '元流之子(坦克)', nameEn: 'Source Child (Tank)', role: ['fighter', 'tank'], color: roleColors, image: heroImages.yuanliuzhizi_tank },
];

// ============================================================
// 被克制关系数据 - 基于王者荣耀官网英雄关系数据生成
// strength: 3=S级(强克制), 2=A级(一般克制)
// 数据来源: https://pvp.qq.com/web201605/herolist.shtml
// 生成时间: 2026-04-17T13:54:10.457Z
// ============================================================
export const counterRelations: CounterRelation[] = [
  { source: 'yuanliuzhizi_assassin', target: 'ganjiangmoye', strength: 3 },
  { source: 'yuanliuzhizi_assassin', target: 'gaya', strength: 3 },
  { source: 'jinchan', target: 'yuanliuzhizi_assassin', strength: 3 },
  { source: 'kai', target: 'yuanliuzhizi_assassin', strength: 3 },
  { source: 'dayu', target: 'yao', strength: 3 },
  { source: 'dayu', target: 'shenmengxi', strength: 3 },
  { source: 'sunbin', target: 'dayu', strength: 3 },
  { source: 'zhuangzhou', target: 'dayu', strength: 3 },
  { source: 'yuanliuzhizi_support', target: 'zhangfei', strength: 3 },
  { source: 'yuanliuzhizi_support', target: 'zhuangzhou', strength: 3 },
  { source: 'simayi', target: 'yuanliuzhizi_support', strength: 3 },
  { source: 'guiguzi', target: 'yuanliuzhizi_support', strength: 3 },
  { source: 'chicha', target: 'daji', strength: 3 },
  { source: 'chicha', target: 'zhenji', strength: 3 },
  { source: 'zhangliang', target: 'chicha', strength: 3 },
  { source: 'dunshan', target: 'chicha', strength: 3 },
  { source: 'sunquan', target: 'luban7', strength: 3 },
  { source: 'sunquan', target: 'kongkonger', strength: 3 },
  { source: 'yao', target: 'sunquan', strength: 3 },
  { source: 'kai', target: 'sunquan', strength: 3 },
  { source: 'yuanliuzhizi_archer', target: 'luban7', strength: 3 },
  { source: 'yuanliuzhizi_archer', target: 'houyi', strength: 3 },
  { source: 'dunshan', target: 'yuanliuzhizi_archer', strength: 3 },
  { source: 'lan', target: 'yuanliuzhizi_archer', strength: 3 },
  { source: 'kongkonger', target: 'lvbu', strength: 3 },
  { source: 'kongkonger', target: 'sunce', strength: 3 },
  { source: 'caiwenji', target: 'kongkonger', strength: 3 },
  { source: 'guiguzi', target: 'kongkonger', strength: 3 },
  { source: 'sunquan', target: 'kongkonger', strength: 3 },
  { source: 'cang', target: 'liubei', strength: 3 },
  { source: 'cang', target: 'bailishouyue', strength: 3 },
  { source: 'jiangziya', target: 'cang', strength: 3 },
  { source: 'buzhihuowu', target: 'cang', strength: 3 },
  { source: 'ying', target: 'houyi', strength: 3 },
  { source: 'ying', target: 'daji', strength: 3 },
  { source: 'kai', target: 'ying', strength: 3 },
  { source: 'diaochan', target: 'ying', strength: 3 },
  { source: 'shaosiyuan', target: 'luban7', strength: 3 },
  { source: 'shaosiyuan', target: 'gongsunli', strength: 3 },
  { source: 'caiwenji', target: 'shaosiyuan', strength: 3 },
  { source: 'gongbenwuzang', target: 'shaosiyuan', strength: 3 },
  { source: 'yuanliuzhizi_tank', target: 'lvbu', strength: 3 },
  { source: 'yuanliuzhizi_tank', target: 'kuangtie', strength: 3 },
  { source: 'miyue', target: 'yuanliuzhizi_tank', strength: 3 },
  { source: 'gongsunli', target: 'yuanliuzhizi_tank', strength: 3 },
  { source: 'yuanliuzhizi_magic', target: 'dunshan', strength: 3 },
  { source: 'yuanliuzhizi_magic', target: 'jinchan', strength: 3 },
  { source: 'kai', target: 'yuanliuzhizi_magic', strength: 3 },
  { source: 'mozi', target: 'yuanliuzhizi_magic', strength: 3 },
  { source: 'aoyin', target: 'guanyu', strength: 3 },
  { source: 'aoyin', target: 'gaya', strength: 3 },
  { source: 'jailuo', target: 'aoyin', strength: 3 },
  { source: 'dunshan', target: 'aoyin', strength: 3 },
  { source: 'dasiming', target: 'buzhihuowu', strength: 3 },
  { source: 'dasiming', target: 'nezha', strength: 3 },
  { source: 'pangu', target: 'dasiming', strength: 3 },
  { source: 'liubei', target: 'dasiming', strength: 3 },
  { source: 'yunzhongjun', target: 'houyi', strength: 3 },
  { source: 'yunzhongjun', target: 'xiaoqiao', strength: 3 },
  { source: 'direnjie', target: 'yunzhongjun', strength: 3 },
  { source: 'huamulan', target: 'yunzhongjun', strength: 3 },
  { source: 'hainuo', target: 'mengtian', strength: 3 },
  { source: 'hainuo', target: 'milaidi', strength: 3 },
  { source: 'diaochan', target: 'hainuo', strength: 3 },
  { source: 'dunshan', target: 'hainuo', strength: 3 },
  { source: 'duoliya', target: 'xiahoudun', strength: 3 },
  { source: 'duoliya', target: 'yao', strength: 3 },
  { source: 'simayi', target: 'duoliya', strength: 3 },
  { source: 'guiguzi', target: 'duoliya', strength: 3 },
  { source: 'jixiaoman', target: 'machao', strength: 3 },
  { source: 'jixiaoman', target: 'lvbu', strength: 3 },
  { source: 'xiahoudun', target: 'jixiaoman', strength: 3 },
  { source: 'liubei', target: 'jixiaoman', strength: 3 },
  { source: 'kuangtie', target: 'xiahoudun', strength: 3 },
  { source: 'kuangtie', target: 'sunwukong', strength: 3 },
  { source: 'sunshangxiang', target: 'kuangtie', strength: 3 },
  { source: 'sunbin', target: 'kuangtie', strength: 3 },
  { source: 'yuanliuzhizi_tank', target: 'kuangtie', strength: 3 },
  { source: 'yuange', target: 'kuangtie', strength: 3 },
  { source: 'laixiao', target: 'buzhihuowu', strength: 3 },
  { source: 'laixiao', target: 'lianpo', strength: 3 },
  { source: 'ake', target: 'laixiao', strength: 3 },
  { source: 'sunshangxiang', target: 'laixiao', strength: 3 },
  { source: 'zhaohuaizhen', target: 'xiahoudun', strength: 3 },
  { source: 'zhaohuaizhen', target: 'diaochan', strength: 3 },
  { source: 'lvbu', target: 'zhaohuaizhen', strength: 3 },
  { source: 'jailuo', target: 'zhaohuaizhen', strength: 3 },
  { source: 'haiyue', target: 'liubang', strength: 3 },
  { source: 'haiyue', target: 'daji', strength: 3 },
  { source: 'jailuo', target: 'haiyue', strength: 3 },
  { source: 'simayi', target: 'haiyue', strength: 3 },
  { source: 'gaya', target: 'makeboluo', strength: 3 },
  { source: 'gaya', target: 'zhongwuyan', strength: 3 },
  { source: 'zhangliang', target: 'gaya', strength: 3 },
  { source: 'lan', target: 'gaya', strength: 3 },
  { source: 'yuanliuzhizi_assassin', target: 'gaya', strength: 3 },
  { source: 'aoyin', target: 'gaya', strength: 3 },
  { source: 'gongbenwuzang', target: 'caocao', strength: 3 },
  { source: 'gongbenwuzang', target: 'machao', strength: 3 },
  { source: 'jinchan', target: 'gongbenwuzang', strength: 3 },
  { source: 'niumo', target: 'gongbenwuzang', strength: 3 },
  { source: 'simayi', target: 'gongbenwuzang', strength: 3 },
  { source: 'liubei', target: 'gongbenwuzang', strength: 3 },
  { source: 'liubang', target: 'gongbenwuzang', strength: 3 },
  { source: 'xiangyu', target: 'gongbenwuzang', strength: 3 },
  { source: 'dianwei', target: 'gongbenwuzang', strength: 3 },
  { source: 'sangqi', target: 'bailishouyue', strength: 3 },
  { source: 'sangqi', target: 'shenmengxi', strength: 3 },
  { source: 'nezha', target: 'sangqi', strength: 3 },
  { source: 'sunshangxiang', target: 'sangqi', strength: 3 },
  { source: 'fei', target: 'bailishouyue', strength: 3 },
  { source: 'fei', target: 'xiaoqiao', strength: 3 },
  { source: 'jinchan', target: 'fei', strength: 3 },
  { source: 'zhangfei', target: 'fei', strength: 3 },
  { source: 'jinchan', target: 'niumo', strength: 3 },
  { source: 'jinchan', target: 'libai', strength: 3 },
  { source: 'zhuangzhou', target: 'jinchan', strength: 3 },
  { source: 'ganjiangmoye', target: 'jinchan', strength: 3 },
  { source: 'yuanliuzhizi_magic', target: 'jinchan', strength: 3 },
  { source: 'jiangziya', target: 'houyi', strength: 3 },
  { source: 'jiangziya', target: 'daji', strength: 3 },
  { source: 'nakelulu', target: 'jiangziya', strength: 3 },
  { source: 'ganjiangmoye', target: 'jiangziya', strength: 3 },
  { source: 'yixing', target: 'xiahoudun', strength: 3 },
  { source: 'yixing', target: 'jailuo', strength: 3 },
  { source: 'lan', target: 'yixing', strength: 3 },
  { source: 'ganjiangmoye', target: 'yixing', strength: 3 },
  { source: 'mengqi', target: 'mozi', strength: 3 },
  { source: 'lvbu', target: 'mengqi', strength: 3 },
  { source: 'daji', target: 'mengqi', strength: 3 },
  { source: 'yunying', target: 'guanyu', strength: 3 },
  { source: 'yunying', target: 'houyi', strength: 3 },
  { source: 'buzhihuowu', target: 'yunying', strength: 3 },
  { source: 'makeboluo', target: 'yunying', strength: 3 },
  { source: 'sikongzhen', target: 'machao', strength: 3 },
  { source: 'sikongzhen', target: 'zhongwuyan', strength: 3 },
  { source: 'baiqi', target: 'sikongzhen', strength: 3 },
  { source: 'jailuo', target: 'sikongzhen', strength: 3 },
  { source: 'lan', target: 'jailuo', strength: 3 },
  { source: 'lan', target: 'jing', strength: 3 },
  { source: 'zhaoyun', target: 'lan', strength: 3 },
  { source: 'diaochan', target: 'lan', strength: 3 },
  { source: 'xialuote', target: 'laofuzi', strength: 3 },
  { source: 'xialuote', target: 'houyi', strength: 3 },
  { source: 'gongsunli', target: 'xialuote', strength: 3 },
  { source: 'kai', target: 'xialuote', strength: 3 },
  { source: 'agudo', target: 'zhugeliang', strength: 3 },
  { source: 'agudo', target: 'daji', strength: 3 },
  { source: 'sulie', target: 'agudo', strength: 3 },
  { source: 'hanxin', target: 'agudo', strength: 3 },
  { source: 'mengtian', target: 'caocao', strength: 3 },
  { source: 'mengtian', target: 'kai', strength: 3 },
  { source: 'zhenji', target: 'mengtian', strength: 3 },
  { source: 'wangzhaojun', target: 'mengtian', strength: 3 },
  { source: 'hainuo', target: 'mengtian', strength: 3 },
  { source: 'lianpo', target: 'zhangliang', strength: 3 },
  { source: 'lianpo', target: 'wangzhaojun', strength: 3 },
  { source: 'houyi', target: 'lianpo', strength: 3 },
  { source: 'diaochan', target: 'lianpo', strength: 3 },
  { source: 'laixiao', target: 'lianpo', strength: 3 },
  { source: 'jing', target: 'jailuo', strength: 3 },
  { source: 'jing', target: 'xishi', strength: 3 },
  { source: 'xiangyu', target: 'jing', strength: 3 },
  { source: 'wangzhaojun', target: 'jing', strength: 3 },
  { source: 'lan', target: 'jing', strength: 3 },
  { source: 'baiqi', target: 'ake', strength: 3 },
  { source: 'baiqi', target: 'jailuo', strength: 3 },
  { source: 'zhuangzhou', target: 'baiqi', strength: 3 },
  { source: 'yingzheng', target: 'baiqi', strength: 3 },
  { source: 'mengya', target: 'luban7', strength: 3 },
  { source: 'mengya', target: 'dunshan', strength: 3 },
  { source: 'lanlingwang', target: 'mengya', strength: 3 },
  { source: 'kai', target: 'mengya', strength: 3 },
  { source: 'lubandashi', target: 'ake', strength: 3 },
  { source: 'lubandashi', target: 'houyi', strength: 3 },
  { source: 'mozi', target: 'lubandashi', strength: 3 },
  { source: 'jailuo', target: 'lubandashi', strength: 3 },
  { source: 'xishi', target: 'niumo', strength: 3 },
  { source: 'xishi', target: 'gaojianli', strength: 3 },
  { source: 'lianpo', target: 'xishi', strength: 3 },
  { source: 'ake', target: 'xishi', strength: 3 },
  { source: 'jing', target: 'xishi', strength: 3 },
  { source: 'machao', target: 'luban7', strength: 3 },
  { source: 'machao', target: 'anqila', strength: 3 },
  { source: 'wangzhaojun', target: 'machao', strength: 3 },
  { source: 'kai', target: 'machao', strength: 3 },
  { source: 'jixiaoman', target: 'machao', strength: 3 },
  { source: 'gongbenwuzang', target: 'machao', strength: 3 },
  { source: 'sikongzhen', target: 'machao', strength: 3 },
  { source: 'pangu', target: 'machao', strength: 3 },
  { source: 'yao_fighter', target: 'ake', strength: 3 },
  { source: 'yao_fighter', target: 'sunwukong', strength: 3 },
  { source: 'sunshangxiang', target: 'yao_fighter', strength: 3 },
  { source: 'wangzhaojun', target: 'yao_fighter', strength: 3 },
  { source: 'yao', target: 'lvbu', strength: 3 },
  { source: 'yao', target: 'lanlingwang', strength: 3 },
  { source: 'ganjiangmoye', target: 'yao', strength: 3 },
  { source: 'jailuo', target: 'yao', strength: 3 },
  { source: 'dayu', target: 'yao', strength: 3 },
  { source: 'duoliya', target: 'yao', strength: 3 },
  { source: 'pangu', target: 'machao', strength: 3 },
  { source: 'pangu', target: 'bailixuance', strength: 3 },
  { source: 'mengya', target: 'pangu', strength: 3 },
  { source: 'liubei', target: 'pangu', strength: 3 },
  { source: 'zhubajie', target: 'laofuzi', strength: 3 },
  { source: 'zhubajie', target: 'houyi', strength: 3 },
  { source: 'libai', target: 'zhubajie', strength: 3 },
  { source: 'bailishouyue', target: 'zhubajie', strength: 3 },
  { source: 'change', target: 'shangguanwaner', strength: 3 },
  { source: 'change', target: 'libai', strength: 3 },
  { source: 'jailuo', target: 'change', strength: 3 },
  { source: 'lvbu', target: 'change', strength: 3 },
  { source: 'guiguzi', target: 'wangzhaojun', strength: 3 },
  { source: 'guiguzi', target: 'lanlingwang', strength: 3 },
  { source: 'makeboluo', target: 'guiguzi', strength: 3 },
  { source: 'liyuanfang', target: 'guiguzi', strength: 3 },
  { source: 'lixin', target: 'luna', strength: 3 },
  { source: 'lixin', target: 'zhenji', strength: 3 },
  { source: 'shenmengxi', target: 'lixin', strength: 3 },
  { source: 'makeboluo', target: 'lixin', strength: 3 },
  { source: 'shangguanwaner', target: 'gaojianli', strength: 3 },
  { source: 'shangguanwaner', target: 'houyi', strength: 3 },
  { source: 'zhangliang', target: 'shangguanwaner', strength: 3 },
  { source: 'huamulan', target: 'shangguanwaner', strength: 3 },
  { source: 'change', target: 'shangguanwaner', strength: 3 },
  { source: 'yuange', target: 'luban7', strength: 3 },
  { source: 'yuange', target: 'kuangtie', strength: 3 },
  { source: 'lanlingwang', target: 'yuange', strength: 3 },
  { source: 'ake', target: 'yuange', strength: 3 },
  { source: 'milaidi', target: 'hanxin', strength: 3 },
  { source: 'milaidi', target: 'luna', strength: 3 },
  { source: 'sulie', target: 'milaidi', strength: 3 },
  { source: 'huamulan', target: 'milaidi', strength: 3 },
  { source: 'hainuo', target: 'milaidi', strength: 3 },
  { source: 'makeboluo', target: 'lvbu', strength: 3 },
  { source: 'makeboluo', target: 'donghuangtaiyi', strength: 3 },
  { source: 'ganjiangmoye', target: 'makeboluo', strength: 3 },
  { source: 'huamulan', target: 'makeboluo', strength: 3 },
  { source: 'gaya', target: 'makeboluo', strength: 3 },
  { source: 'dunshan', target: 'makeboluo', strength: 3 },
  { source: 'yuji', target: 'makeboluo', strength: 3 },
  { source: 'dianwei', target: 'makeboluo', strength: 3 },
  { source: 'ailin', target: 'makeboluo', strength: 3 },
  { source: 'zhangliang', target: 'lvbu', strength: 3 },
  { source: 'zhangliang', target: 'wangzhaojun', strength: 3 },
  { source: 'ganjiangmoye', target: 'zhangliang', strength: 3 },
  { source: 'zhugeliang', target: 'zhangliang', strength: 3 },
  { source: 'lianpo', target: 'zhangliang', strength: 3 },
  { source: 'houyi', target: 'zhangliang', strength: 3 },
  { source: 'peiqinhu', target: 'sunwukong', strength: 3 },
  { source: 'peiqinhu', target: 'luban7', strength: 3 },
  { source: 'diaochan', target: 'peiqinhu', strength: 3 },
  { source: 'sunbin', target: 'peiqinhu', strength: 3 },
  { source: 'yangyuhuan', target: 'ake', strength: 3 },
  { source: 'yangyuhuan', target: 'nvwa', strength: 3 },
  { source: 'huamulan', target: 'yangyuhuan', strength: 3 },
  { source: 'nezha', target: 'yangyuhuan', strength: 3 },
  { source: 'gongsunli', target: 'kai', strength: 3 },
  { source: 'gongsunli', target: 'anqila', strength: 3 },
  { source: 'donghuangtaiyi', target: 'gongsunli', strength: 3 },
  { source: 'daji', target: 'gongsunli', strength: 3 },
  { source: 'shaosiyuan', target: 'gongsunli', strength: 3 },
  { source: 'mingshiyin', target: 'libai', strength: 3 },
  { source: 'mingshiyin', target: 'shenmengxi', strength: 3 },
  { source: 'nakelulu', target: 'mingshiyin', strength: 3 },
  { source: 'zhenji', target: 'mingshiyin', strength: 3 },
  { source: 'houyi', target: 'bailishouyue', strength: 3 },
  { source: 'houyi', target: 'zhangliang', strength: 3 },
  { source: 'daji', target: 'houyi', strength: 3 },
  { source: 'libai', target: 'houyi', strength: 3 },
  { source: 'yuanliuzhizi_archer', target: 'houyi', strength: 3 },
  { source: 'ying', target: 'houyi', strength: 3 },
  { source: 'yunzhongjun', target: 'houyi', strength: 3 },
  { source: 'jiangziya', target: 'houyi', strength: 3 },
  { source: 'yunying', target: 'houyi', strength: 3 },
  { source: 'xialuote', target: 'houyi', strength: 3 },
  { source: 'lubandashi', target: 'houyi', strength: 3 },
  { source: 'zhubajie', target: 'houyi', strength: 3 },
  { source: 'shangguanwaner', target: 'houyi', strength: 3 },
  { source: 'kai', target: 'houyi', strength: 3 },
  { source: 'dunshan', target: 'houyi', strength: 3 },
  { source: 'nezha', target: 'houyi', strength: 3 },
  { source: 'nakelulu', target: 'houyi', strength: 3 },
  { source: 'anqila', target: 'houyi', strength: 3 },
  { source: 'zhuangzhou', target: 'houyi', strength: 3 },
  { source: 'zhaoyun', target: 'houyi', strength: 3 },
  { source: 'nvwa', target: 'luban7', strength: 3 },
  { source: 'nvwa', target: 'wangzhaojun', strength: 3 },
  { source: 'gongbenwuzang', target: 'nvwa', strength: 3 },
  { source: 'lanlingwang', target: 'nvwa', strength: 3 },
  { source: 'yangyuhuan', target: 'nvwa', strength: 3 },
  { source: 'sulie', target: 'ake', strength: 3 },
  { source: 'sulie', target: 'sunwukong', strength: 3 },
  { source: 'damo', target: 'sulie', strength: 3 },
  { source: 'sunshangxiang', target: 'sulie', strength: 3 },
  { source: 'zhouyu', target: 'huangzhong', strength: 3 },
  { source: 'zhouyu', target: 'laofuzi', strength: 3 },
  { source: 'lanlingwang', target: 'zhouyu', strength: 3 },
  { source: 'bailishouyue', target: 'zhouyu', strength: 3 },
  { source: 'zhongkui', target: 'zhouyu', strength: 3 },
  { source: 'bailixuance', target: 'luban7', strength: 3 },
  { source: 'bailixuance', target: 'anqila', strength: 3 },
  { source: 'donghuangtaiyi', target: 'bailixuance', strength: 3 },
  { source: 'zhugeliang', target: 'bailixuance', strength: 3 },
  { source: 'pangu', target: 'bailixuance', strength: 3 },
  { source: 'bailishouyue', target: 'dianwei', strength: 3 },
  { source: 'bailishouyue', target: 'yase', strength: 3 },
  { source: 'gongbenwuzang', target: 'bailishouyue', strength: 3 },
  { source: 'daji', target: 'bailishouyue', strength: 3 },
  { source: 'cang', target: 'bailishouyue', strength: 3 },
  { source: 'sangqi', target: 'bailishouyue', strength: 3 },
  { source: 'fei', target: 'bailishouyue', strength: 3 },
  { source: 'houyi', target: 'bailishouyue', strength: 3 },
  { source: 'kai', target: 'luban7', strength: 3 },
  { source: 'kai', target: 'houyi', strength: 3 },
  { source: 'miyue', target: 'kai', strength: 3 },
  { source: 'zhugeliang', target: 'kai', strength: 3 },
  { source: 'mengtian', target: 'kai', strength: 3 },
  { source: 'gongsunli', target: 'kai', strength: 3 },
  { source: 'miyue', target: 'wangzhaojun', strength: 3 },
  { source: 'miyue', target: 'luna', strength: 3 },
  { source: 'zhangliang', target: 'miyue', strength: 3 },
  { source: 'donghuangtaiyi', target: 'miyue', strength: 3 },
  { source: 'yase', target: 'hanxin', strength: 3 },
  { source: 'yase', target: 'ake', strength: 3 },
  { source: 'xiangyu', target: 'yase', strength: 3 },
  { source: 'sunshangxiang', target: 'yase', strength: 3 },
  { source: 'bailishouyue', target: 'yase', strength: 3 },
  { source: 'dunshan', target: 'makeboluo', strength: 3 },
  { source: 'dunshan', target: 'houyi', strength: 3 },
  { source: 'lvbu', target: 'dunshan', strength: 3 },
  { source: 'zhouyu', target: 'dunshan', strength: 3 },
  { source: 'yuanliuzhizi_magic', target: 'dunshan', strength: 3 },
  { source: 'mengya', target: 'dunshan', strength: 3 },
  { source: 'shenmengxi', target: 'huangzhong', strength: 3 },
  { source: 'shenmengxi', target: 'luban7', strength: 3 },
  { source: 'lanlingwang', target: 'shenmengxi', strength: 3 },
  { source: 'ake', target: 'shenmengxi', strength: 3 },
  { source: 'dayu', target: 'shenmengxi', strength: 3 },
  { source: 'sangqi', target: 'shenmengxi', strength: 3 },
  { source: 'mingshiyin', target: 'shenmengxi', strength: 3 },
  { source: 'jailuo', target: 'guanyu', strength: 3 },
  { source: 'jailuo', target: 'zhangfei', strength: 3 },
  { source: 'lanlingwang', target: 'jailuo', strength: 3 },
  { source: 'ake', target: 'jailuo', strength: 3 },
  { source: 'yixing', target: 'jailuo', strength: 3 },
  { source: 'lan', target: 'jailuo', strength: 3 },
  { source: 'jing', target: 'jailuo', strength: 3 },
  { source: 'baiqi', target: 'jailuo', strength: 3 },
  { source: 'simayi', target: 'gongbenwuzang', strength: 3 },
  { source: 'simayi', target: 'zhugeliang', strength: 3 },
  { source: 'kai', target: 'simayi', strength: 3 },
  { source: 'donghuangtaiyi', target: 'simayi', strength: 3 },
  { source: 'sunce', target: 'chengyaojin', strength: 3 },
  { source: 'sunce', target: 'wangzhaojun', strength: 3 },
  { source: 'daqiao', target: 'sunce', strength: 3 },
  { source: 'xiangyu', target: 'sunce', strength: 3 },
  { source: 'kongkonger', target: 'sunce', strength: 3 },
  { source: 'ganjiangmoye', target: 'huangzhong', strength: 3 },
  { source: 'ganjiangmoye', target: 'gaojianli', strength: 3 },
  { source: 'lanlingwang', target: 'ganjiangmoye', strength: 3 },
  { source: 'huamulan', target: 'ganjiangmoye', strength: 3 },
  { source: 'yuanliuzhizi_assassin', target: 'ganjiangmoye', strength: 3 },
  { source: 'nakelulu', target: 'ganjiangmoye', strength: 3 },
  { source: 'guanyu', target: 'ganjiangmoye', strength: 3 },
  { source: 'direnjie', target: 'luna', strength: 3 },
  { source: 'direnjie', target: 'yuji', strength: 3 },
  { source: 'lanlingwang', target: 'direnjie', strength: 3 },
  { source: 'huamulan', target: 'direnjie', strength: 3 },
  { source: 'liubei', target: 'gongbenwuzang', strength: 3 },
  { source: 'liubei', target: 'luban7', strength: 3 },
  { source: 'sunshangxiang', target: 'liubei', strength: 3 },
  { source: 'xiangyu', target: 'liubei', strength: 3 },
  { source: 'cang', target: 'liubei', strength: 3 },
  { source: 'ake', target: 'wangzhaojun', strength: 3 },
  { source: 'ake', target: 'luban7', strength: 3 },
  { source: 'niumo', target: 'ake', strength: 3 },
  { source: 'taiyizhenren', target: 'ake', strength: 3 },
  { source: 'baiqi', target: 'ake', strength: 3 },
  { source: 'lubandashi', target: 'ake', strength: 3 },
  { source: 'yao_fighter', target: 'ake', strength: 3 },
  { source: 'yangyuhuan', target: 'ake', strength: 3 },
  { source: 'sulie', target: 'ake', strength: 3 },
  { source: 'yase', target: 'ake', strength: 3 },
  { source: 'caiwenji', target: 'ake', strength: 3 },
  { source: 'liyuanfang', target: 'ake', strength: 3 },
  { source: 'liushan', target: 'ake', strength: 3 },
  { source: 'liubang', target: 'gongbenwuzang', strength: 3 },
  { source: 'liubang', target: 'lanlingwang', strength: 3 },
  { source: 'niumo', target: 'liubang', strength: 3 },
  { source: 'lvbu', target: 'liubang', strength: 3 },
  { source: 'haiyue', target: 'liubang', strength: 3 },
  { source: 'donghuangtaiyi', target: 'luna', strength: 3 },
  { source: 'donghuangtaiyi', target: 'taiyizhenren', strength: 3 },
  { source: 'caiwenji', target: 'donghuangtaiyi', strength: 3 },
  { source: 'niumo', target: 'donghuangtaiyi', strength: 3 },
  { source: 'makeboluo', target: 'donghuangtaiyi', strength: 3 },
  { source: 'bianque', target: 'donghuangtaiyi', strength: 3 },
  { source: 'sunshangxiang', target: 'donghuangtaiyi', strength: 3 },
  { source: 'xiaoqiao', target: 'donghuangtaiyi', strength: 3 },
  { source: 'daqiao', target: 'luna', strength: 3 },
  { source: 'daqiao', target: 'mozi', strength: 3 },
  { source: 'ake', target: 'daqiao', strength: 3 },
  { source: 'hanxin', target: 'daqiao', strength: 3 },
  { source: 'huangzhong', target: 'hanxin', strength: 3 },
  { source: 'huangzhong', target: 'zhugeliang', strength: 3 },
  { source: 'lanlingwang', target: 'huangzhong', strength: 3 },
  { source: 'huamulan', target: 'huangzhong', strength: 3 },
  { source: 'zhouyu', target: 'huangzhong', strength: 3 },
  { source: 'shenmengxi', target: 'huangzhong', strength: 3 },
  { source: 'ganjiangmoye', target: 'huangzhong', strength: 3 },
  { source: 'taiyizhenren', target: 'huangzhong', strength: 3 },
  { source: 'zhongkui', target: 'huangzhong', strength: 3 },
  { source: 'guanyu', target: 'huangzhong', strength: 3 },
  { source: 'lvbu', target: 'huangzhong', strength: 3 },
  { source: 'gaojianli', target: 'huangzhong', strength: 3 },
  { source: 'luban7', target: 'huangzhong', strength: 3 },
  { source: 'yingzheng', target: 'huangzhong', strength: 3 },
  { source: 'mozi', target: 'huangzhong', strength: 3 },
  { source: 'zhugeliang', target: 'bianque', strength: 3 },
  { source: 'zhugeliang', target: 'luban7', strength: 3 },
  { source: 'lanlingwang', target: 'zhugeliang', strength: 3 },
  { source: 'huamulan', target: 'zhugeliang', strength: 3 },
  { source: 'agudo', target: 'zhugeliang', strength: 3 },
  { source: 'simayi', target: 'zhugeliang', strength: 3 },
  { source: 'huangzhong', target: 'zhugeliang', strength: 3 },
  { source: 'libai', target: 'zhugeliang', strength: 3 },
  { source: 'sunbin', target: 'zhugeliang', strength: 3 },
  { source: 'nezha', target: 'houyi', strength: 3 },
  { source: 'nezha', target: 'chengyaojin', strength: 3 },
  { source: 'zhangliang', target: 'nezha', strength: 3 },
  { source: 'diaochan', target: 'nezha', strength: 3 },
  { source: 'dasiming', target: 'nezha', strength: 3 },
  { source: 'laofuzi', target: 'nezha', strength: 3 },
  { source: 'taiyizhenren', target: 'huangzhong', strength: 3 },
  { source: 'taiyizhenren', target: 'lanlingwang', strength: 3 },
  { source: 'sunshangxiang', target: 'taiyizhenren', strength: 3 },
  { source: 'luna', target: 'taiyizhenren', strength: 3 },
  { source: 'donghuangtaiyi', target: 'taiyizhenren', strength: 3 },
  { source: 'caiwenji', target: 'diaochan', strength: 3 },
  { source: 'caiwenji', target: 'ake', strength: 3 },
  { source: 'lanlingwang', target: 'caiwenji', strength: 3 },
  { source: 'huamulan', target: 'caiwenji', strength: 3 },
  { source: 'yadianna', target: 'damo', strength: 3 },
  { source: 'yadianna', target: 'lanlingwang', strength: 3 },
  { source: 'sunbin', target: 'yadianna', strength: 3 },
  { source: 'guanyu', target: 'yadianna', strength: 3 },
  { source: 'yangjian', target: 'luban7', strength: 3 },
  { source: 'yangjian', target: 'guanyu', strength: 3 },
  { source: 'sunshangxiang', target: 'yangjian', strength: 3 },
  { source: 'diaochan', target: 'yangjian', strength: 3 },
  { source: 'zhongkui', target: 'zhouyu', strength: 3 },
  { source: 'zhongkui', target: 'huangzhong', strength: 3 },
  { source: 'hanxin', target: 'zhongkui', strength: 3 },
  { source: 'huamulan', target: 'zhongkui', strength: 3 },
  { source: 'zhongwuyan', target: 'zhongkui', strength: 3 },
  { source: 'yuji', target: 'makeboluo', strength: 3 },
  { source: 'yuji', target: 'hanxin', strength: 3 },
  { source: 'luna', target: 'yuji', strength: 3 },
  { source: 'diaochan', target: 'yuji', strength: 3 },
  { source: 'direnjie', target: 'yuji', strength: 3 },
  { source: 'ailin', target: 'yuji', strength: 3 },
  { source: 'liyuanfang', target: 'lanlingwang', strength: 3 },
  { source: 'liyuanfang', target: 'ake', strength: 3 },
  { source: 'lanlingwang', target: 'liyuanfang', strength: 3 },
  { source: 'huamulan', target: 'liyuanfang', strength: 3 },
  { source: 'zhangfei', target: 'wangzhaojun', strength: 3 },
  { source: 'zhangfei', target: 'mozi', strength: 3 },
  { source: 'huamulan', target: 'zhangfei', strength: 3 },
  { source: 'zhuangzhou', target: 'zhangfei', strength: 3 },
  { source: 'yuanliuzhizi_support', target: 'zhangfei', strength: 3 },
  { source: 'jailuo', target: 'zhangfei', strength: 3 },
  { source: 'diaochan', target: 'zhangfei', strength: 3 },
  { source: 'lvbu', target: 'zhangfei', strength: 3 },
  { source: 'niumo', target: 'wangzhaojun', strength: 3 },
  { source: 'niumo', target: 'mozi', strength: 3 },
  { source: 'huamulan', target: 'niumo', strength: 3 },
  { source: 'diaochan', target: 'niumo', strength: 3 },
  { source: 'jinchan', target: 'niumo', strength: 3 },
  { source: 'xishi', target: 'niumo', strength: 3 },
  { source: 'jvyoujing', target: 'sunwukong', strength: 3 },
  { source: 'jvyoujing', target: 'luban7', strength: 3 },
  { source: 'sunshangxiang', target: 'jvyoujing', strength: 3 },
  { source: 'wangzhaojun', target: 'jvyoujing', strength: 3 },
  { source: 'nakelulu', target: 'houyi', strength: 3 },
  { source: 'nakelulu', target: 'ganjiangmoye', strength: 3 },
  { source: 'xiangyu', target: 'nakelulu', strength: 3 },
  { source: 'zhangliang', target: 'nakelulu', strength: 3 },
  { source: 'buzhihuowu', target: 'guanyu', strength: 3 },
  { source: 'buzhihuowu', target: 'gaojianli', strength: 3 },
  { source: 'hanxin', target: 'buzhihuowu', strength: 3 },
  { source: 'huamulan', target: 'buzhihuowu', strength: 3 },
  { source: 'dasiming', target: 'buzhihuowu', strength: 3 },
  { source: 'laixiao', target: 'buzhihuowu', strength: 3 },
  { source: 'huamulan', target: 'luban7', strength: 3 },
  { source: 'huamulan', target: 'mozi', strength: 3 },
  { source: 'niumo', target: 'huamulan', strength: 3 },
  { source: 'zhugeliang', target: 'huamulan', strength: 3 },
  { source: 'zhuangzhou', target: 'huamulan', strength: 3 },
  { source: 'lanlingwang', target: 'luban7', strength: 3 },
  { source: 'lanlingwang', target: 'libai', strength: 3 },
  { source: 'xiangyu', target: 'lanlingwang', strength: 3 },
  { source: 'zhangliang', target: 'lanlingwang', strength: 3 },
  { source: 'yao', target: 'lanlingwang', strength: 3 },
  { source: 'guiguzi', target: 'lanlingwang', strength: 3 },
  { source: 'liubang', target: 'lanlingwang', strength: 3 },
  { source: 'taiyizhenren', target: 'lanlingwang', strength: 3 },
  { source: 'yadianna', target: 'lanlingwang', strength: 3 },
  { source: 'liyuanfang', target: 'lanlingwang', strength: 3 },
  { source: 'zhongwuyan', target: 'lanlingwang', strength: 3 },
  { source: 'wangzhaojun', target: 'luban7', strength: 3 },
  { source: 'wangzhaojun', target: 'lvbu', strength: 3 },
  { source: 'hanxin', target: 'wangzhaojun', strength: 3 },
  { source: 'lanlingwang', target: 'wangzhaojun', strength: 3 },
  { source: 'lianpo', target: 'wangzhaojun', strength: 3 },
  { source: 'guiguzi', target: 'wangzhaojun', strength: 3 },
  { source: 'zhangliang', target: 'wangzhaojun', strength: 3 },
  { source: 'nvwa', target: 'wangzhaojun', strength: 3 },
  { source: 'miyue', target: 'wangzhaojun', strength: 3 },
  { source: 'sunce', target: 'wangzhaojun', strength: 3 },
  { source: 'ake', target: 'wangzhaojun', strength: 3 },
  { source: 'zhangfei', target: 'wangzhaojun', strength: 3 },
  { source: 'niumo', target: 'wangzhaojun', strength: 3 },
  { source: 'wuzetian', target: 'wangzhaojun', strength: 3 },
  { source: 'xiangyu', target: 'wangzhaojun', strength: 3 },
  { source: 'damo', target: 'wangzhaojun', strength: 3 },
  { source: 'caocao', target: 'wangzhaojun', strength: 3 },
  { source: 'luban7', target: 'wangzhaojun', strength: 3 },
  { source: 'yingzheng', target: 'wangzhaojun', strength: 3 },
  { source: 'hanxin', target: 'luna', strength: 3 },
  { source: 'hanxin', target: 'libai', strength: 3 },
  { source: 'xiangyu', target: 'hanxin', strength: 3 },
  { source: 'zhangliang', target: 'hanxin', strength: 3 },
  { source: 'milaidi', target: 'hanxin', strength: 3 },
  { source: 'yase', target: 'hanxin', strength: 3 },
  { source: 'huangzhong', target: 'hanxin', strength: 3 },
  { source: 'yuji', target: 'hanxin', strength: 3 },
  { source: 'damo', target: 'hanxin', strength: 3 },
  { source: 'luna', target: 'yuji', strength: 3 },
  { source: 'luna', target: 'luban7', strength: 3 },
  { source: 'zhangliang', target: 'luna', strength: 3 },
  { source: 'zhongkui', target: 'luna', strength: 3 },
  { source: 'lixin', target: 'luna', strength: 3 },
  { source: 'milaidi', target: 'luna', strength: 3 },
  { source: 'miyue', target: 'luna', strength: 3 },
  { source: 'direnjie', target: 'luna', strength: 3 },
  { source: 'donghuangtaiyi', target: 'luna', strength: 3 },
  { source: 'daqiao', target: 'luna', strength: 3 },
  { source: 'hanxin', target: 'luna', strength: 3 },
  { source: 'diaochan', target: 'luna', strength: 3 },
  { source: 'daji', target: 'luna', strength: 3 },
  { source: 'chengyaojin', target: 'luban7', strength: 3 },
  { source: 'chengyaojin', target: 'daji', strength: 3 },
  { source: 'huamulan', target: 'chengyaojin', strength: 3 },
  { source: 'sunshangxiang', target: 'chengyaojin', strength: 3 },
  { source: 'sunce', target: 'chengyaojin', strength: 3 },
  { source: 'nezha', target: 'chengyaojin', strength: 3 },
  { source: 'anqila', target: 'luban7', strength: 3 },
  { source: 'anqila', target: 'houyi', strength: 3 },
  { source: 'hanxin', target: 'anqila', strength: 3 },
  { source: 'lanlingwang', target: 'anqila', strength: 3 },
  { source: 'machao', target: 'anqila', strength: 3 },
  { source: 'gongsunli', target: 'anqila', strength: 3 },
  { source: 'bailixuance', target: 'anqila', strength: 3 },
  { source: 'diaochan', target: 'luna', strength: 3 },
  { source: 'diaochan', target: 'zhangfei', strength: 3 },
  { source: 'zhaohuaizhen', target: 'diaochan', strength: 3 },
  { source: 'caiwenji', target: 'diaochan', strength: 3 },
  { source: 'zhenji', target: 'diaochan', strength: 3 },
  { source: 'gaojianli', target: 'diaochan', strength: 3 },
  { source: 'daji', target: 'diaochan', strength: 3 },
  { source: 'guanyu', target: 'ganjiangmoye', strength: 3 },
  { source: 'guanyu', target: 'huangzhong', strength: 3 },
  { source: 'sunshangxiang', target: 'guanyu', strength: 3 },
  { source: 'sunbin', target: 'guanyu', strength: 3 },
  { source: 'aoyin', target: 'guanyu', strength: 3 },
  { source: 'yunying', target: 'guanyu', strength: 3 },
  { source: 'jailuo', target: 'guanyu', strength: 3 },
  { source: 'yangjian', target: 'guanyu', strength: 3 },
  { source: 'buzhihuowu', target: 'guanyu', strength: 3 },
  { source: 'laofuzi', target: 'guanyu', strength: 3 },
  { source: 'wuzetian', target: 'guanyu', strength: 3 },
  { source: 'laofuzi', target: 'guanyu', strength: 3 },
  { source: 'laofuzi', target: 'nezha', strength: 3 },
  { source: 'xiangyu', target: 'laofuzi', strength: 3 },
  { source: 'sunshangxiang', target: 'laofuzi', strength: 3 },
  { source: 'xialuote', target: 'laofuzi', strength: 3 },
  { source: 'zhubajie', target: 'laofuzi', strength: 3 },
  { source: 'zhouyu', target: 'laofuzi', strength: 3 },
  { source: 'wuzetian', target: 'guanyu', strength: 3 },
  { source: 'wuzetian', target: 'wangzhaojun', strength: 3 },
  { source: 'hanxin', target: 'wuzetian', strength: 3 },
  { source: 'lanlingwang', target: 'wuzetian', strength: 3 },
  { source: 'xiangyu', target: 'wangzhaojun', strength: 3 },
  { source: 'xiangyu', target: 'gongbenwuzang', strength: 3 },
  { source: 'huamulan', target: 'xiangyu', strength: 3 },
  { source: 'diaochan', target: 'xiangyu', strength: 3 },
  { source: 'damo', target: 'wangzhaojun', strength: 3 },
  { source: 'damo', target: 'hanxin', strength: 3 },
  { source: 'xiangyu', target: 'damo', strength: 3 },
  { source: 'diaochan', target: 'damo', strength: 3 },
  { source: 'yadianna', target: 'damo', strength: 3 },
  { source: 'libai', target: 'daji', strength: 3 },
  { source: 'libai', target: 'zhugeliang', strength: 3 },
  { source: 'sunbin', target: 'libai', strength: 3 },
  { source: 'zhangliang', target: 'libai', strength: 3 },
  { source: 'jinchan', target: 'libai', strength: 3 },
  { source: 'change', target: 'libai', strength: 3 },
  { source: 'mingshiyin', target: 'libai', strength: 3 },
  { source: 'lanlingwang', target: 'libai', strength: 3 },
  { source: 'hanxin', target: 'libai', strength: 3 },
  { source: 'dianwei', target: 'makeboluo', strength: 3 },
  { source: 'dianwei', target: 'gongbenwuzang', strength: 3 },
  { source: 'sunbin', target: 'dianwei', strength: 3 },
  { source: 'diaochan', target: 'dianwei', strength: 3 },
  { source: 'bailishouyue', target: 'dianwei', strength: 3 },
  { source: 'sunshangxiang', target: 'dianwei', strength: 3 },
  { source: 'caocao', target: 'wangzhaojun', strength: 3 },
  { source: 'caocao', target: 'luban7', strength: 3 },
  { source: 'liubang', target: 'caocao', strength: 3 },
  { source: 'wangzhaojun', target: 'caocao', strength: 3 },
  { source: 'gongbenwuzang', target: 'caocao', strength: 3 },
  { source: 'mengtian', target: 'caocao', strength: 3 },
  { source: 'zhenji', target: 'luban7', strength: 3 },
  { source: 'zhenji', target: 'diaochan', strength: 3 },
  { source: 'hanxin', target: 'zhenji', strength: 3 },
  { source: 'diaochan', target: 'zhenji', strength: 3 },
  { source: 'chicha', target: 'zhenji', strength: 3 },
  { source: 'lixin', target: 'zhenji', strength: 3 },
  { source: 'xiahoudun', target: 'luban7', strength: 3 },
  { source: 'xiahoudun', target: 'zhongwuyan', strength: 3 },
  { source: 'sunshangxiang', target: 'xiahoudun', strength: 3 },
  { source: 'diaochan', target: 'xiahoudun', strength: 3 },
  { source: 'duoliya', target: 'xiahoudun', strength: 3 },
  { source: 'kuangtie', target: 'xiahoudun', strength: 3 },
  { source: 'zhaohuaizhen', target: 'xiahoudun', strength: 3 },
  { source: 'yixing', target: 'xiahoudun', strength: 3 },
  { source: 'lvbu', target: 'zhangfei', strength: 3 },
  { source: 'lvbu', target: 'huangzhong', strength: 3 },
  { source: 'xiangyu', target: 'lvbu', strength: 3 },
  { source: 'wangzhaojun', target: 'lvbu', strength: 3 },
  { source: 'kongkonger', target: 'lvbu', strength: 3 },
  { source: 'yuanliuzhizi_tank', target: 'lvbu', strength: 3 },
  { source: 'jixiaoman', target: 'lvbu', strength: 3 },
  { source: 'yao', target: 'lvbu', strength: 3 },
  { source: 'makeboluo', target: 'lvbu', strength: 3 },
  { source: 'zhangliang', target: 'lvbu', strength: 3 },
  { source: 'yalian', target: 'lvbu', strength: 3 },
  { source: 'bianque', target: 'daji', strength: 3 },
  { source: 'bianque', target: 'donghuangtaiyi', strength: 3 },
  { source: 'lanlingwang', target: 'bianque', strength: 3 },
  { source: 'huamulan', target: 'bianque', strength: 3 },
  { source: 'zhugeliang', target: 'bianque', strength: 3 },
  { source: 'sunbin', target: 'zhugeliang', strength: 3 },
  { source: 'sunbin', target: 'libai', strength: 3 },
  { source: 'lanlingwang', target: 'sunbin', strength: 3 },
  { source: 'huamulan', target: 'sunbin', strength: 3 },
  { source: 'zhongwuyan', target: 'zhongkui', strength: 3 },
  { source: 'zhongwuyan', target: 'lanlingwang', strength: 3 },
  { source: 'xiangyu', target: 'zhongwuyan', strength: 3 },
  { source: 'diaochan', target: 'zhongwuyan', strength: 3 },
  { source: 'gaya', target: 'zhongwuyan', strength: 3 },
  { source: 'sikongzhen', target: 'zhongwuyan', strength: 3 },
  { source: 'xiahoudun', target: 'zhongwuyan', strength: 3 },
  { source: 'gaojianli', target: 'huangzhong', strength: 3 },
  { source: 'gaojianli', target: 'diaochan', strength: 3 },
  { source: 'hanxin', target: 'gaojianli', strength: 3 },
  { source: 'huamulan', target: 'gaojianli', strength: 3 },
  { source: 'xishi', target: 'gaojianli', strength: 3 },
  { source: 'shangguanwaner', target: 'gaojianli', strength: 3 },
  { source: 'ganjiangmoye', target: 'gaojianli', strength: 3 },
  { source: 'buzhihuowu', target: 'gaojianli', strength: 3 },
  { source: 'xiaoqiao', target: 'gaojianli', strength: 3 },
  { source: 'liushan', target: 'ake', strength: 3 },
  { source: 'liushan', target: 'luban7', strength: 3 },
  { source: 'hanxin', target: 'liushan', strength: 3 },
  { source: 'diaochan', target: 'liushan', strength: 3 },
  { source: 'mozi', target: 'liushan', strength: 3 },
  { source: 'zhuangzhou', target: 'huamulan', strength: 3 },
  { source: 'zhuangzhou', target: 'houyi', strength: 3 },
  { source: 'hanxin', target: 'zhuangzhou', strength: 3 },
  { source: 'diaochan', target: 'zhuangzhou', strength: 3 },
  { source: 'yuanliuzhizi_support', target: 'zhuangzhou', strength: 3 },
  { source: 'yalian', target: 'zhuangzhou', strength: 3 },
  { source: 'luban7', target: 'huangzhong', strength: 3 },
  { source: 'luban7', target: 'wangzhaojun', strength: 3 },
  { source: 'lanlingwang', target: 'luban7', strength: 3 },
  { source: 'libai', target: 'luban7', strength: 3 },
  { source: 'sunquan', target: 'luban7', strength: 3 },
  { source: 'yuanliuzhizi_archer', target: 'luban7', strength: 3 },
  { source: 'shaosiyuan', target: 'luban7', strength: 3 },
  { source: 'mengya', target: 'luban7', strength: 3 },
  { source: 'machao', target: 'luban7', strength: 3 },
  { source: 'yuange', target: 'luban7', strength: 3 },
  { source: 'peiqinhu', target: 'luban7', strength: 3 },
  { source: 'nvwa', target: 'luban7', strength: 3 },
  { source: 'bailixuance', target: 'luban7', strength: 3 },
  { source: 'kai', target: 'luban7', strength: 3 },
  { source: 'shenmengxi', target: 'luban7', strength: 3 },
  { source: 'liubei', target: 'luban7', strength: 3 },
  { source: 'ake', target: 'luban7', strength: 3 },
  { source: 'zhugeliang', target: 'luban7', strength: 3 },
  { source: 'yangjian', target: 'luban7', strength: 3 },
  { source: 'jvyoujing', target: 'luban7', strength: 3 },
  { source: 'huamulan', target: 'luban7', strength: 3 },
  { source: 'wangzhaojun', target: 'luban7', strength: 3 },
  { source: 'luna', target: 'luban7', strength: 3 },
  { source: 'chengyaojin', target: 'luban7', strength: 3 },
  { source: 'anqila', target: 'luban7', strength: 3 },
  { source: 'caocao', target: 'luban7', strength: 3 },
  { source: 'zhenji', target: 'luban7', strength: 3 },
  { source: 'xiahoudun', target: 'luban7', strength: 3 },
  { source: 'liushan', target: 'luban7', strength: 3 },
  { source: 'sunshangxiang', target: 'dianwei', strength: 3 },
  { source: 'sunshangxiang', target: 'donghuangtaiyi', strength: 3 },
  { source: 'lanlingwang', target: 'sunshangxiang', strength: 3 },
  { source: 'huamulan', target: 'sunshangxiang', strength: 3 },
  { source: 'yingzheng', target: 'huangzhong', strength: 3 },
  { source: 'yingzheng', target: 'wangzhaojun', strength: 3 },
  { source: 'lanlingwang', target: 'yingzheng', strength: 3 },
  { source: 'huamulan', target: 'yingzheng', strength: 3 },
  { source: 'daji', target: 'luna', strength: 3 },
  { source: 'daji', target: 'diaochan', strength: 3 },
  { source: 'lanlingwang', target: 'daji', strength: 3 },
  { source: 'huamulan', target: 'daji', strength: 3 },
  { source: 'chicha', target: 'daji', strength: 3 },
  { source: 'ying', target: 'daji', strength: 3 },
  { source: 'haiyue', target: 'daji', strength: 3 },
  { source: 'jiangziya', target: 'daji', strength: 3 },
  { source: 'agudo', target: 'daji', strength: 3 },
  { source: 'chengyaojin', target: 'daji', strength: 3 },
  { source: 'libai', target: 'daji', strength: 3 },
  { source: 'bianque', target: 'daji', strength: 3 },
  { source: 'mozi', target: 'huangzhong', strength: 3 },
  { source: 'mozi', target: 'liushan', strength: 3 },
  { source: 'xiangyu', target: 'mozi', strength: 3 },
  { source: 'huamulan', target: 'mozi', strength: 3 },
  { source: 'mengqi', target: 'mozi', strength: 3 },
  { source: 'daqiao', target: 'mozi', strength: 3 },
  { source: 'zhangfei', target: 'mozi', strength: 3 },
  { source: 'niumo', target: 'mozi', strength: 3 },
  { source: 'zhaoyun', target: 'houyi', strength: 3 },
  { source: 'zhaoyun', target: 'xiaoqiao', strength: 3 },
  { source: 'liubang', target: 'zhaoyun', strength: 3 },
  { source: 'wangzhaojun', target: 'zhaoyun', strength: 3 },
  { source: 'xiaoqiao', target: 'donghuangtaiyi', strength: 3 },
  { source: 'xiaoqiao', target: 'gaojianli', strength: 3 },
  { source: 'hanxin', target: 'xiaoqiao', strength: 3 },
  { source: 'lanlingwang', target: 'xiaoqiao', strength: 3 },
  { source: 'yunzhongjun', target: 'xiaoqiao', strength: 3 },
  { source: 'fei', target: 'xiaoqiao', strength: 3 },
  { source: 'zhaoyun', target: 'xiaoqiao', strength: 3 },
  { source: 'yalian', target: 'lvbu', strength: 3 },
  { source: 'yalian', target: 'zhuangzhou', strength: 3 },
  { source: 'simayi', target: 'yalian', strength: 3 },
  { source: 'makeboluo', target: 'yalian', strength: 3 },
  { source: 'ailin', target: 'makeboluo', strength: 3 },
  { source: 'ailin', target: 'yuji', strength: 3 },
  { source: 'jailuo', target: 'ailin', strength: 3 },
  { source: 'houyi', target: 'ailin', strength: 3 }
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