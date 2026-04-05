export type CounterLanguage = 'zh' | 'en' | 'ja' | 'ko' | 'zh-TW' | 'es' | 'fr' | 'de' | 'pt' | 'ru' | 'it';

export interface CounterAbilityData {
  abilityZh: string;
  abilityEn: string;
  abilityJa?: string;
  abilityKo?: string;
  abilityZhTW?: string;
  abilityEs?: string;
  abilityFr?: string;
  abilityDe?: string;
  abilityPt?: string;
  abilityRu?: string;
  abilityIt?: string;
}

export interface WeaknessData {
  weaknessZh: string;
  weaknessEn: string;
  weaknessJa?: string;
  weaknessKo?: string;
  weaknessZhTW?: string;
  weaknessEs?: string;
  weaknessFr?: string;
  weaknessDe?: string;
  weaknessPt?: string;
  weaknessRu?: string;
  weaknessIt?: string;
}

export const heroCounterAbilities: Record<string, CounterAbilityData> = {
  // ================================================================
  // 一、射手（发育路）- ADC
  // ================================================================

  // --- 后羿 ---
  houyi: {
    abilityZh: '站撸输出极强、持续伤害稳定、容错率高，开大可先手控制或封走位',
    abilityEn: 'Extremely strong sustained DPS with high fault tolerance, ult provides initiation or zoning control'
  },

  // --- 鲁班七号 ---
  luban7: {
    abilityZh: '打坦顶级伤害、范围压制能力强，被动扫射对前排威胁极大',
    abilityEn: 'Top-tier tank-busting damage with excellent area pressure, passive sweep devastates frontlines'
  },

  // --- 狄仁杰 ---
  direnjie: {
    abilityZh: '二技能解控净化、输出稳定可靠，克依赖挂印记和控制的射手与刺客',
    abilityEn: 'Skill 2 cleanse removes CC with stable output, counters mark-dependent and CC-reliant heroes'
  },

  // --- 李元芳 ---
  liyuanfang: {
    abilityZh: '前期压制力强、滚雪球速度快，被动叠印记爆发高且控龙能力强',
    abilityEn: 'Strong early-game pressure with fast snowballing, passive mark stacking offers burst and objective control'
  },

  // --- 虞姬 ---
  yuji: {
    abilityZh: '二技能物理免疫克物理爆发射手与刺客，自保能力在射手中出类拔萃',
    abilityEn: 'Skill 2 physical immunity counters physical burst assassins and marksman, exceptional self-peel among ADCs'
  },

  // --- 孙尚香 ---
  sunshangxiang: {
    abilityZh: '一技能翻滚爆发极高、滚雪球能力强，秒脆皮速度顶尖',
    abilityEn: 'Skill 1 roll offers extreme burst with strong snowballing, top-tier squishy elimination speed'
  },

  // --- 伽罗 ---
  jailuo: {
    abilityZh: '超长射程压制、开弓后减速粘人，打团舒适度和持续输出环境极佳',
    abilityEn: 'Ultra-long range suppression with slow on critical hits, excellent teamfight comfort and sustained output'
  },

  // --- 公孙离 ---
  gongsunli: {
    abilityZh: '多段位移拉扯顶级、二技能格挡飞行物，操作上限高难以被锁定',
    abilityEn: 'Multi-dash kite is best-in-class, Skill 2 parries projectiles, high skill ceiling makes her hard to lock down'
  },

  // --- 马可波罗 ---
  makeboluo: {
    abilityZh: '真伤打坦克效率高、机动性出众，一技能消耗和大招进场收割能力强',
    abilityEn: 'True damage shreds tanks efficiently with outstanding mobility, Skill 1 pokes and ult excels at diving cleanup'
  },

  // --- 黄忠 ---
  huangzhong: {
    abilityZh: '开大后阵地战火力覆盖极强、守塔和反打能力顶尖',
    abilityEn: 'Ult form provides unmatched positional firepower coverage, exceptional tower defense and counter-engage capability'
  },

  // --- 蒙犽 ---
  mengya: {
    abilityZh: '持续扫射火力强、团战AOE压制能力优秀，一技能可移动输出',
    abilityEn: 'Sustained spray fire with excellent teamfight AOE pressure, Skill 1 allows mobile output'
  },

  // --- 戈娅 ---
  gaya: {
    abilityZh: '拉扯风筝能力强、起步加速快，灵活走A让近战难以贴近',
    abilityEn: 'Strong kiting ability with fast acceleration, flexible hit-and-run makes it hard for melee to approach'
  },

  // --- 敖隐 ---
  aoyin: {
    abilityZh: '空投爆发伤害高、打团威胁大，三形态切换兼顾输出、生存和控制',
    abilityEn: 'High aerial drop burst damage with major teamfight threat, three-form switching balances DPS, survival and CC'
  },

  // --- 百里守约 ---
  bailishouyue: {
    abilityZh: '超远狙击消耗、视野压制能力强，二技能精准狙击可极限压血线',
    abilityEn: 'Ultra-long sniper poke with vision domination, Skill 2 precision sniping can extremize HP pressure'
  },

  // --- 艾琳 ---
  ailin: {
    abilityZh: '法术伤害克虞姬物免、机动性不错，普攻法伤穿透效果持续叠加',
    abilityEn: 'Magic damage counters Yu Ji\'s physical immunity with good mobility, AA magic pen stacks over time'
  },

  // --- 莱西奥 ---
  laixiao: {
    abilityZh: '爆发和收割线优秀、大招升空不可选取，团战AOE输出稳定',
    abilityEn: 'Excellent burst and cleanup lines, ult aerial untargetable state, stable teamfight AOE output'
  },

  // --- 成吉思汗（当前无独立ID，暂用已有英雄补充）---

  // --- 孙权 ---
  sunquan: {
    abilityZh: '强化普攻贯穿+位移+浮空，兼具输出控制和机动性的全能射手',
    abilityEn: 'Enhanced AA pierce + dash + knockup, versatile marksman combining DPS, CC and mobility'
  },

  // --- 苍 ---
  cang: {
    abilityZh: '远程消耗+控制+收割能力兼备，技能连招容错空间大',
    abilityEn: 'Balanced range poke + control + cleanup kit, skill combo allows large error margin'
  },

  // --- 元流之子(射手) ---
  yuanliuzhizi_archer: {
    abilityZh: '强化普攻贯穿+位移+浮空，核心是持续输出和灵活进场的结合',
    abilityEn: 'Enhanced AA pierce + dash + knockup, core strength lies in combining sustained output with flexible engagement'
  },

  // ================================================================
  // 二、辅助（游走）- Support
  // ================================================================

  // --- 盾山 ---
  dunshan: {
    abilityZh: '举盾格挡飞行技能天敌，克弹道型法师和射手体系，四技能过载军拳强制控制',
    abilityEn: 'Shield blocks projectile-based abilities, hard-counters mage/marksman projectile comps, Skill 4 overloaded punch forces CC'
  },

  // --- 钟馗 ---
  zhongkui: {
    abilityZh: '二技能钩中即致命级控制，一钩定乾坤改变战场局势，命中收益极高',
    abilityEn: 'Skill 2 hook is lethal-level CC when landed, single hook can turn the tide, extremely high reward on hit'
  },

  // --- 牛魔 ---
  niumo: {
    abilityZh: '硬辅模板保人开团两用，双控制技能配合护盾保护能力稳定',
    abilityEn: 'Hard support template for both peel and engage, dual-CC skills with shield provide reliable protection'
  },

  // --- 庄周 ---
  zhuangzhou: {
    abilityZh: '群体解控克硬控开团体系，免伤承伤一体自保能力强，解控节奏破坏力一流',
    abilityEn: 'Group cleanse counters hard-CC engage comps, damage reduction plus tankiness offers strong survival, top-tier disruption'
  },

  // --- 明世隐 ---
  mingshiyin: {
    abilityZh: '单人核增幅强度顶尖，连线增加攻击力和移速，保单核推进效率极高',
    abilityEn: 'Single-target amplification is best-in-class, link boosts AD and MS, extremely efficient at enabling solo-carry pushes'
  },

  // --- 蔡文姬 ---
  caiwenji: {
    abilityZh: '奶量和拉扯治疗量充足，双控制自保能力不错，加血加速团队续航拉满',
    abilityEn: 'Healing volume and kiting sustain are ample, dual-CC offers decent self-peel, heal + speed max out team sustainability'
  },

  // --- 鬼谷子 ---
  guiguzi: {
    abilityZh: '隐身加速带队友开团顶级，拉人多段控制配合爆发秒C能力强',
    abilityEn: 'Invisibility speed boost enables best-in-class team engages, multi-pull CC paired with burst eliminates carries'
  },

  // --- 廉颇（辅）---
  lianpin: {
    abilityZh: '霸体免控克鬼谷子马超关羽等需要空间的英雄，连续控制开团能力强',
    abilityEn: 'Body-block CC immunity counters space-dependent heroes like Guiguzi/Ma Chao/Guan Yu, chain-CC engage is powerful'
  },

  // --- 东皇太一 ---
  donghuangtaiyi: {
    abilityZh: '全峡谷最稳定的锁头点控，以命换命强行按住一人，克一切花哨机动英雄',
    abilityEn: 'Most stable point-and-click lockdown in the game, trade-for-trade forced pin, counters all fancy mobility heroes'
  },

  // --- 苏烈 ---
  sulie: {
    abilityZh: '复活机制保底反开能力强，击退控制打断敌方进场节奏',
    abilityEn: 'Revive mechanic guarantees safety net, knockback CC interrupts enemy dive tempo'
  },

  // --- 张飞 ---
  zhangfei: {
    abilityZh: '保人反打开团都极强，变身吼大提供超大范围击退和护盾',
    abilityEn: 'Exceptional at peel, counter-engage and initiate, transformed ult offers massive AOE knockback and shield'
  },

  // --- 瑶 ---
  yao: {
    abilityZh: '附身保核能力强，实时护盾和控制技能保护C位，自动跟随解放操作',
    abilityEn: 'Strong bodyguard carry-protection, real-time shield and CC protect the carry, auto-follow reduces micro burden'
  },

  // --- 大乔 ---
  daqiao: {
    abilityZh: '电梯体系转线支援最强之一，召唤传送改变战场人数差，克带线流英雄',
    abilityEn: 'Teleport system offers best rotation support, summon warp creates number advantages, counters split-push strategies'
  },

  // --- 太乙真人 ---
  taiyizhenren: {
    abilityZh: '保核和前期节奏都强，复活机制提升队伍容错率，控制链配合抓人稳定',
    abilityEn: 'Strong carry-protection and early tempo, resurrection raises team error margin, stable CC chain for ganks'
  },

  // --- 鲁班大师 ---
  lubandashi: {
    abilityZh: '开团和保人兼具，链子拉回敌人或推开友军，功能全面吃配合',
    abilityEn: 'Balances engage and protection, links pull enemies or push allies, versatile but coordination-dependent'
  },

  // --- 孙膑 ---
  sunbin: {
    abilityZh: '拉扯抬血团战功能顶级，二技能时光倒流回复大量血量并加速，克制站桩阵容',
    abilityEn: 'Top-tier kiting/heal teamfight utility, Skill 2 time reverse restores massive HP + speed, counters stationary comps'
  },

  // --- 刘禅 ---
  liushan: {
    abilityZh: '拆塔机制独特+连续控制强，对敌方防御塔造成额外伤害，团战中多段打断能力出色',
    abilityEn: 'Unique tower-destroy mechanic + strong chain CC, deals bonus damage to enemy turrets, excellent multi-interrupt capability in teamfights'
  },

  // --- 墨子（辅）---
  mozi: {
    abilityZh: '远程控制先手好用，炮击远程消耗+眩晕控制，全距离干扰能力强',
    abilityEn: 'Long-range initiation is effective, cannon poke + stun CC, excellent all-range harassment capability'
  },

  // --- 桑启 ---
  sangqi: {
    abilityZh: '拉扯和持续保人好，草丛机动治疗兼顾，多段回复维持战线',
    abilityEn: 'Good kiting and sustained protection, grass mobility + healing combined, multi-tick recovery maintains frontlines'
  },

  // --- 朵莉亚 ---
  duoliya: {
    abilityZh: '刷新队友大招联动上限高，体系价值强但依赖配合目标',
    abilityEn: 'Refreshes ally ultimate for high combo potential, strong system value but depends on coordination target'
  },

  // --- 少司缘 ---
  shaosiyuan: {
    abilityZh: '多段控制+治疗+伤害一体，灵活的技能组合适应多种团战场景',
    abilityEn: 'Integrated multi-CC + heal + damage, flexible skill combos adapt to multiple teamfight scenarios'
  },

  // --- 空空儿 ---
  kongkonger: {
    abilityZh: '高机动多段突进+隐身机制，花活型辅助切后排和骚扰能力强',
    abilityEn: 'High mobility multi-dash + stealth, trickster support excels at backline assassination and harassment'
  },

  // --- 元流之子(辅助) ---
  yuanliuzhizi_support: {
    abilityZh: '护盾+控制+增益一体，全能型辅助适配多种阵容搭配',
    abilityEn: 'Integrated shield + CC + buff, versatile support fits various comp compositions'
  },

  // --- 大禹 ---
  dayu: {
    abilityZh: '重装站场+控制能力兼备，抗伤和保护队友能力均衡',
    abilityEn: 'Balances heavy positioning + control capability, well-rounded damage-taking and ally protection'
  },

  // --- 猪八戒 ---
  zhubajie: {
    abilityZh: '团战和赖线能力强，大范围控制+高回复保证持续站场',
    abilityEn: 'Strong teamfight and lane sustain, wide AOE CC + high recovery ensures sustained battlefield presence'
  },

  // ================================================================
  // 三、法师（中路）- Mage
  // ================================================================

  // --- 张良 ---
  zhangliang: {
    abilityZh: '全峡谷最稳定的定点压制，大招按住一人无法操作克制一切高机动英雄（露娜李白韩信镜等）',
    abilityEn: 'Most stable point-lockdown in the game, ult pins one target unable to act countering all high-mobility heroes (Luna/Li Bai/Han Xin/Jing etc.)'
  },

  // --- 妲己 ---
  daji: {
    abilityZh: '稳定单体抓人秒后排强，一套技能连招简单有效，蹲草丛威慑力大',
    abilityEn: 'Reliable single-target pick-off with simple but effective combo, bush ambush threat is significant'
  },

  // --- 安琪拉 ---
  anqila: {
    abilityZh: '爆发极高草丛秒人能力强，火盾提供生存保障，大招全图追踪输出',
    abilityEn: 'Extreme burst with strong bush-ambush kill power, fire shield ensures survival, ult tracks globally'
  },

  // --- 王昭君 ---
  wangzhaojun: {
    abilityZh: '封路分割战场能力强，大招冰冻大范围控场，打团和守塔都优秀',
    abilityEn: 'Strong zone denial and battlefield splitting, ult freeze offers huge AOE control, great in both teamfights and tower defense'
  },

  // --- 小乔 ---
  xiaoqiao: {
    abilityZh: '爆发稳定打团能力强，二技能吹飞自保一手，输出环境好时毁伤极高',
    abilityEn: 'Stable burst with strong teamfight damage, Skill 2 blowaway provides self-peel, devastating when given space'
  },

  // --- 甄姬 ---
  zhenji: {
    abilityZh: '团战冰冻控场能力强，弹弹球混战伤害爆炸，自保依赖冰冻留人',
    abilityEn: 'Teamfight freeze control is strong, bouncing balls deal explosive chaos damage, survival relies on freezing retention'
  },

  // --- 周瑜 ---
  zhouyu: {
    abilityZh: '线权强推塔快，火区持续伤害+风向控制分割战场，阵地战压制力一流',
    abilityEn: 'Strong lane priority with fast tower push, fire zone DoT + wind control splits battlefield, top-tier positional suppression'
  },

  // --- 嬴政 ---
  yingzheng: {
    abilityZh: '超远消耗压线能力强，飞剑全覆盖清兵推塔，中期节奏推进压迫感强',
    abilityEn: 'Ultra-long range poke with strong line pressure, sword rain covers all for wave clear and tower push, midgame tempo feels oppressive'
  },

  // --- 姜子牙 ---
  jiangziya: {
    abilityZh: '减速消耗斩杀线高，经验机制帮助团队抢等级，大招封路分割能力强',
    abilityEn: 'Slow-poke with high execute threshold, XP mechanic helps team level-gate, ult zone-denial splits battlefield effectively'
  },

  // --- 杨玉环 ---
  yangyuhuan: {
    abilityZh: '回复拉扯团战功能强，控制+奶+伤害一体，适配多种阵容体系',
    abilityEn: 'Recovery-kiting teamfight utility is strong, integrated CC + heal + damage, adapts to various comp archetypes'
  },

  // --- 貂蝉 ---
  diaochan: {
    abilityZh: '持续作战能力顶级的法刺，真伤叠加打肉效率高，花舞旋转规避伤害',
    abilityEn: 'Top-tier sustained combat assassin mage, true damage stacks shred tanks efficiently, dance spin dodges damage'
  },

  // --- 诸葛亮 ---
  zhugeliang: {
    abilityZh: '收割切后排能力强，大招远程狙击触发被动刷钱，支援速度和滚雪球快',
    abilityEn: 'Strong cleanup and backline elimination, long-range snipe triggers passive gold generation, fast roams and snowballing'
  },

  // --- 不知火舞 ---
  buzhihuowu: {
    abilityZh: '消耗先手切后排都强，多段位移灵活切入，扇子伤害高冷却短',
    abilityEn: 'Strong poke, initiation and backline elimination, multi-dash flexible engagement, fan damage is high with short CDs'
  },

  // --- 上官婉儿 ---
  shangguwaner: {
    abilityZh: '越塔斩C切后排顶级，飞天期间无敌无法选中，爆发刺客中的佼佼者',
    abilityEn: 'Best-in-class tower-dive carry elimination, untargetable during flight phase, standout among burst assassins'
  },

  // --- 海月 ---
  haiyue: {
    abilityZh: '单点拉人幻境孤立打击，打刺客和法刺很强，强制1v1环境公平对决',
    abilityEn: 'Single-target pull into isolation dimension, very strong vs assassin mages, forces fair 1v1 environment'
  },

  // --- 女娲 ---
  nuwa: {
    abilityZh: '分割地形守线能力强，矩阵方块封路+远程支援，全局视野和信息优势',
    abilityEn: 'Terrain-splitting and line-holding are strong, matrix block + long-range support, global vision and information advantage'
  },

  // --- 沈梦溪 ---
  shenmengxi: {
    abilityZh: '线权消耗支援强，炸弹大范围AOE清兵推进，游走gank节奏快速',
    abilityEn: 'Lane priority, poke and roams are strong, bombs offer large AOE wave-clear and push, fast gank tempo'
  },

  // --- 扁鹊 ---
  bianque: {
    abilityZh: '回复持续输出能力强，毒药叠加克消耗流法师，奶人+毒人双重身份',
    abilityEn: 'Recovery and sustained output are strong, poison stacks counter poke mages, dual identity as healer and poisoner'
  },

  // --- 西施 ---
  xishi: {
    abilityZh: '先手拉人配合强，牵引强制位移帮队友留人，开团工具人中顶级',
    abilityEn: 'Strong initiation pull synergy, forced displacement helps allies lock targets, top-tier among engagement tools'
  },

  // --- 干将莫邪 ---
  ganjiangmoye: {
    abilityZh: '远程爆发顶级，剑气远近双模式输出，精准预判时秒杀能力极强',
    abilityEn: 'Top-tier long-range burst, dual-mode near/far sword damage, one-shot potential is extreme when accurate'
  },

  // --- 海诺 ---
  hainuo: {
    abilityZh: '长手+回血+位移三合一，近远双形态灵活切换，生存和输出兼顾',
    abilityEn: 'Long range + heal + dash triple combo, near/far dual-form flexible switch, balances survival and output'
  },

  // --- 弈星 ---
  yixing: {
    abilityZh: '分割战场打团强，棋阵大范围限制+控制，自保能力不错',
    abilityEn: 'Battlefield split and teamfight focus,棋阵 large-area restriction + CC, decent self-survival'
  },

  // --- 金蝉 ---
  jinchan: {
    abilityZh: '紧箍咒限制突进英雄位移，克冲阵体系和多段位移英雄',
    abilityEn: 'Headband restricts dash-based heroes, counters dive compositions and multi-dash characters'
  },

  // --- 高渐离 ---
  gaojianli: {
    abilityZh: '团战AOE爆发强，大招免伤进场输出，持续范围伤害切割后排',
    abilityEn: 'Strong teamfight AOE burst, ult damage reduction enables diving, sustained range damage cuts backlines'
  },

  // --- 米莱狄 ---
  milady: {
    abilityZh: '推塔和单抓强，机器人军团拆塔牵制，带线牵制打乱敌方节奏',
    abilityEn: 'Tower pushing and single-target focus strong, robot army dismantles towers and disrupts enemy tempo'
  },

  // --- 武则天 ---
  wuzetian: {
    abilityZh: '全图支援团战先手强，大招击飞大范围控制，女帝威严压制力持久',
    abilityEn: 'Global support with strong teamfight initation, ult offers massive AOE knockup, empress pressure is persistent'
  },

  // --- 嫦娥 ---
  change: {
    abilityZh: '前中期强爆发和坦度兼具，蓝量转化护盾机制独特，法坦刺客混合体',
    abilityEn: 'Strong early-mid game with balanced burst and tankiness, unique mana-to-shield conversion, mage-tank-assassin hybrid'
  },

  // --- 元流之子(法师) ---
  yuanliuzhizi_magic: {
    abilityZh: '控制+伤害+机动性平衡，多段技能衔接流畅，适合多种打法风格',
    abilityEn: 'Balanced CC + damage + mobility, smooth multi-skill chaining, suits various playstyles'
  },

  // ================================================================
  // 四、打野 - Jungle
  // ================================================================

  // --- 露娜 ---
  luna: {
    abilityZh: '月光剑舞天花板级收割能力，无限连招机制上限极高，标记刷新持续输出恐怖',
    abilityEn: 'Moonlight Dance offers ceiling-tier cleanup, infinite combo has extremely high mechanical cap, mark-refresh sustained damage is terrifying'
  },

  // --- 李白 ---
  libai: {
    abilityZh: '拉扯消耗切后排强，无法选中外加多段位移，十步杀一人千里不留行',
    abilityEn: 'Kiting poke and backline elimination strong, untargetable plus multi-dash, elusive assassin playstyle'
  },

  // --- 韩信 ---
  hanxin: {
    abilityZh: '节奏反野带线强，三段位移机动性拉满，挑兵线偷野区牵制力顶级',
    abilityEn: 'Tempo, counter-jungle and split-push strong, triple-dash maximizes mobility, wave/steal harassment is top-tier'
  },

  // --- 孙悟空 ---
  sunwukong: {
    abilityZh: '爆发秒C能力强，护身棍挡伤害+强控制，身法猴暴击伤害极高',
    abilityEn: 'Strong burst elimination of carries, defensive staff blocks damage + hard CC, trickster monkey crit damage is extreme'
  },

  // --- 刘备 ---
  liubei: {
    abilityZh: '近身爆发前期强，盾厚吸血持续作战，野区对拼压制力出色',
    abilityEn: 'Close-range burst strong early game, thick shield + lifesteal for sustain, jungle duel suppression is excellent'
  },

  // --- 铠（野）---
  kai_jg: {
    abilityZh: '单挑强切后排狠，变身魔神后双刀切割伤害爆表，一刀一个脆皮',
    abilityEn: 'Strong 1v1 with devastating backline cut, transformed Demon God form deals insane double-blade damage, one-shot squishes'
  },

  // --- 典韦 ---
  dianwei: {
    abilityZh: '反打硬拼真实伤害高，怒气叠加攻速移速拉满，疯狗模式下谁都不怕',
    abilityEn: 'Counter-attack brute-force true damage is high, rage stacks maximize AS/MS, berserk mode fears nothing'
  },

  // --- 澜 ---
  lan: {
    abilityZh: '切后排收割顶级，被动狩猎标记多段伤害，下水道潜水绕后能力强',
    abilityEn: 'Top-tier backline elimination and cleanup, passive hunt mark multi-hit damage, submarine dive flanking is strong'
  },

  // --- 盘古 ---
  pangu: {
    abilityZh: '机制级克普攻核英雄，缴械让平A英雄废掉，拳头形态霸体+高爆发',
    abilityEn: 'Mechanically counters AA-centric heroes, disarm renders auto-attackers useless, fist form grants superarmor + high burst'
  },

  // --- 镜 ---
  jing: {
    abilityZh: '镜像换位操作上限高，大招本体镜像同步输出爆发恐怖，入场出场自如',
    abilityEn: 'Mirror-swap has extremely high skill ceiling, ult sync-mirror output offers terrifying burst, free entry and exit'
  },

  // --- 娜可露露 ---
  nakelulu: {
    abilityZh: '切脆皮强一击必杀，大招腾空落地爆发，百分比伤害对坦克也有威胁',
    abilityEn: 'Strong squishy elimination with guaranteed kills, ult airborne-drop burst, % damage threatens even tanks'
  },

  // --- 裴擒虎 ---
  peiqinhu: {
    abilityZh: '前期节奏王双形态切换，人形态POKE虎形态近战，入侵反野压制力极强',
    abilityEn: "Early-game tempo king with dual-form switch, human form pokes tiger form melee, invasion suppression is extremely strong"
  },

  // --- 云中君 ---
  yunzhongjun: {
    abilityZh: '无视地形越墙飞行突进，空中无法选中持续输出，前中期抓人和反野强',
    abilityEn: 'Terrain-ignoring wall-crossing flight dive, airborne untargetable sustained output, strong early ganking and counter-jungling'
  },

  // --- 暃 ---
  fei: {
    abilityZh: '墙体机动性强上下翻飞，多段位移切入逃脱自如，地形复杂地图发挥空间大',
    abilityEn: 'Strong wall-based mobility with vertical traversal, multi-dash enables free entry/escape, excels on complex terrain maps'
  },

  // --- 曜 ---
  yao2: {
    abilityZh: '拉扯和容错高，星屑归巢回血+免伤，能量条管理好的情况下极难被击杀',
    abilityEn: 'Strong kiting with high fault tolerance, star return heals + damage reduction, nearly unkillable when energy managed well'
  },

  // --- 赵云 ---
  zhaoyun: {
    abilityZh: '稳定开团容错高，七进七出多段位移+击飞，打野中的六边形战士',
    abilityEn: 'Reliable initiation with high fault tolerance, seven-entry multi-dash + knockup, jungle\'s well-rounded fighter'
  },

  // --- 司马懿（野）---
  simayi: {
    abilityZh: '切后排法伤突进强，沉默+高移速隐身切入，爆发刺客中少有的法系代表',
    abilityEn: 'Backline-eliminating magic-damage dive strong, silence + high-speed stealth infiltration, rare magic representative among burst assassins'
  },

  // --- 阿轲 ---
  ake: {
    abilityZh: '背后暴击收割爆炸，隐身绕后爆发高，击杀刷新滚雪球能力极强',
    abilityEn: 'Backstab crit cleanup is explosive, stealth flanking burst is high, kill-refresh snowballing is extremely strong'
  },

  // --- 兰陵王 ---
  lanlingwang: {
    abilityZh: '前中期抓人顶级隐身接近，瞬间爆发控制连招稳定，视野压力给足对手',
    abilityEn: 'Best-in-class early-mid ganking with stealth approach, instant burst-CC combo is consistent, applies maximum vision pressure'
  },

  // --- 阿古朵 ---
  agudo: {
    abilityZh: '节奏控图能力强，球球替伤+放牧机制独特，推塔转线牵制力出色',
    abilityEn: 'Strong tempo and map control, Ball-Ball substitute + shepherd mechanic is unique, tower-push rotation harassment is excellent'
  },

  // --- 橘右京 ---
  juyoujing_bl: {
    abilityZh: '技能型爆发换血强，居合拔刀位移+控制，克缴械类英雄',
    abilityEn: 'Skill-based burst trade is strong, iaijutsu slash dash + CC, counters disarm-type heroes'
  },

  // --- 宫本武藏 ---
  gongben: {
    abilityZh: '二段跳锁定C位强，重做后多段空中控制+免伤，针对射手和法师效果好',
    abilityEn: 'Two-stage jump locks onto carries, reworked multi-airborne CC + damage reduction, effective against marksman and mages'
  },

  // --- 梦奇（野）---
  mengqi_jg: {
    abilityZh: '前期站场和带线强，质量叠加高坦度高伤，胖胖消耗让人头疼',
    abilityEn: 'Early game presence and split-push strong, mass stacking gives high tankiness and damage, chonky sustain is annoying to face'
  },

  // --- 元流之子(刺客) ---
  yuanliuzhizi_assassin: {
    abilityZh: '多段突进切后排强，灵活位移+爆发连招，进场时机选择多样',
    abilityEn: 'Multi-dash backline assassination strong, flexible movement + burst combo, diverse engagement timing options'
  },

  // --- 亚瑟（野）---
  yase_jg: {
    abilityZh: '沉默+加速+真伤多合一，抓人稳定追击能力强，新手友好但强度不低',
    abilityEn: 'Silence + speed + true damage all-in-one, reliable catching with strong chase, beginner-friendly but potent'
  },

  // --- 百里玄策 ---
  bailixuance: {
    abilityZh: '钩中就起飞收割能力强，勾镰控制链+位移爆发，节奏型打野代表',
    abilityEn: 'Once hooked the snowball starts, hook-chain CC + dash burst, represents tempo-oriented junglers'
  },

  // --- 云缨 ---
  yunying: {
    abilityZh: '节奏和团战都不错，枪意叠加多段控制+伤害，持续作战能力较强',
    abilityEn: 'Decent tempo and teamfight, gun-intent stacks give multi-CC + damage, sustained combat capability is solid'
  },

  // ================================================================
  // 五、对抗路（边路）- Toplane
  // ================================================================

  // --- 马超 ---
  machao: {
    abilityZh: '拉扯收割支援顶级，冷晖之枪多段突进移速极快，捡枪机制让机动性拉满',
    abilityEn: 'Top-tier kiting cleanup and support, multi-dash spear with extreme speed pickup, gun-collecting mechanic maximizes mobility'
  },

  // --- 夏洛特 ---
  xialuote: {
    abilityZh: '七星光芒剑黏人强，多段减伤+霸体持续输出，单挑和抗压能力俱佳',
    abilityEn: 'Seven-Star Radiant Sword sticks to targets, multi-stack damage reduction + superarmor sustained output, excellent at both 1v1 and tanking pressure'
  },

  // --- 蒙恬 ---
  mengtian: {
    abilityZh: '站场抗压团战顶级，方阵形态正面硬度极高，群体伤害+控制+减伤一体',
    abilityEn: 'Top-tier positional tanking and teamfight, phalanx form has extreme frontal hardness, integrated group damage + CC + DR'
  },

  // --- 狂铁 ---
  kuangtie: {
    abilityZh: '对线压制力强，充能后高爆发+高回复，武器切换电刀重击伤害爆表',
    abilityEn: 'Strong lane suppression, charged high burst + high recovery, weapon-switch electro-smite damage is off the charts'
  },

  // --- 老夫子 ---
  laofuzi: {
    abilityZh: '单挑锁人顶级，捆绑+免伤让对面无法还手，栈道机制单挑几乎无敌',
    abilityEn: 'Top-tier 1v1 lockdown, bind + damage reduction leaves opponent helpless, stack mechanic is nearly invincible in duels'
  },

  // --- 花木兰 ---
  huamulan: {
    abilityZh: '操作上限高切C强，轻重剑双形态灵活切换，轻剑灵活重剑爆发',
    abilityEn: 'High skill ceiling carry elimination, light/heavy sword dual-form switch, light form flexibility + heavy form burst'
  },

  // --- 夏侯惇 ---
  xiahoudun: {
    abilityZh: '六边形战坦容错高，真盾+控制+续航一体，抗压和打团都靠谱',
    abilityEn: 'Well-rounded battle-tank with high fault tolerance, true-shield + CC + sustain integrated, reliable at both tanking and teamfights'
  },

  // --- 芈月 ---
  miyue: {
    abilityZh: '拉扯单带打战坦强，暗影之力持续法伤+吸血+减速，黏人流打法让对手难受',
    abilityEn: 'Kiting split-push anti-battle-tank strong, shadow force sustained magic damage + lifesteal + slow, sticky playstyle frustrates opponents'
  },

  // --- 元歌 ---
  yuange: {
    abilityZh: '消耗和单抓顶级傀儡操控复杂多变，傀儡探路+本体现身爆发连招',
    abilityEn: 'Top-tier poke and single-target elimination, puppet manipulation complex and variable, puppet scout +本体 appearance burst combo'
  },

  // --- 关羽 ---
  guanyu: {
    abilityZh: '支援团战分割战场顶级，冲锋状态下高移速+群控，骑马绕后切入威胁大',
    abilityEn: 'Top-tier support teamfight and battlefield splitting, mounted high-speed + group-CC, horseback flanking threat is major'
  },

  // --- 吕布 ---
  lvbu: {
    abilityZh: '真伤克一切厚前排和护盾战边，方天画斩附魔真伤，跳大团控进场能力强',
    abilityEn: 'True damage counters all bulky frontlines and shield fighters, Sky Piercer true damage on attachment, ult jump-AOE engage is strong'
  },

  // 注：橘右京共用上方 juyoujing_bl 条目

  // --- 姬小满 ---
  jixiaoman: {
    abilityZh: '多段抓取打拉扯强，一/二技能组合变化多端，控制链衔接紧密难躲避',
    abilityEn: 'Multi-grab kiting is strong, Skill 1/2 combo variations are numerous, tight CC chain is hard to dodge'
  },

  // --- 亚连 ---
  alian: {
    abilityZh: '硬顶控制进场强，防御姿态减伤+混伤输出，半肉半C定位让对面不知道怎么防',
    abilityEn: 'Hard-tanking CC engagement strong, defensive stance DR + mixed damage, semi-tank semi-carry confuses enemy itemization'
  },

  // --- 司空震（边）---
  sikongzhen: {
    abilityZh: '风筝持续输出强，雷电法王多段位移+护盾，拉扯战中持续积累雷击伤害',
    abilityEn: 'Kiting sustained output strong, lightning lord multi-dash + shield, sustained lightning damage accumulation during kite-fights'
  },

  // --- 达摩 ---
  damo: {
    abilityZh: '墙体斩杀和开团强，上墙拳控制+爆发伤害，地形利用好的时候强度翻倍',
    abilityEn: 'Wall-slam execution and engage strong, wall-punch CC + burst damage, strength doubles with good terrain usage'
  },

  // --- 项羽 ---
  xiangyu: {
    abilityZh: '抗压保护团战功能强，霸体冲撞+群体控制+免伤，团队守护者定位明确',
    abilityEn: 'Strong抗压 protection and teamfight utility, superarmor charge + group-CC + DR, clearly defined team guardian role'
  },

  // --- 程咬金 ---
  chengyaojin: {
    abilityZh: '单带和回复强力不讲理回血机制，血越低越猛让对面不想跟他打',
    abilityEn: 'Strong split-push and regeneration, unreasonable low-HP healing mechanic, gets stronger at lower HP making opponents avoid him'
  },

  // --- 杨戬 ---
  yangjian: {
    abilityZh: '中期节奏强，哮天犬标记+斩杀+续航，狗咬标记让残血英雄无所遁形',
    abilityEn: 'Strong mid-game tempo, celestial dog mark + execute + sustain, dog-mark reveal leaves no place for low-HP heroes to hide'
  },

  // --- 雅典娜（边）---
  yadianna: {
    abilityZh: '前中期强贴脸爆发高，枪矛突进+护盾+CD刷新，献祭流玩法牵制力极强',
    abilityEn: 'Strong early-mid game with high close-range burst, spear thrust + shield + CD refresh, sacrifice-style play has extreme map pressure'
  },

  // --- 哪吒（边）---
  nezha: {
    abilityZh: '全球支援和切C强，火焰大招锁定飞向敌方C位，无法躲避的必中突进',
    abilityEn: 'Global support and carry elimination strong, fire ult locks onto and flies toward enemy carry, undodgeable homing dive'
  },

  // --- 曹操 ---
  caocao: {
    abilityZh: '续航和追击强，霸气大开大合+高吸血+高移压，开启大招后战斗力暴涨',
    abilityEn: 'Sustain and pursuit strong, domineering big-play + high lifesteal + high pressure, combat power skyrockets after ult activation'
  },

  // --- 钟无艳 ---
  zhongwuyan: {
    abilityZh: '爆发和控制上限高，锤石化石控制+高伤害，运气好时一锤定音',
    abilityEn: 'Burst and CC ceiling high, hammer petrification + high damage, lucky strikes can decide fights instantly'
  },

  // --- 李信 ---
  lixin: {
    abilityZh: '双形态灵活光信远程+暗信近战，形态切换应对不同局面',
    abilityEn: 'Flexible dual-form: Light form ranged + Dark form melee, form switch adapts to different situations'
  },

  // --- 赵怀真 ---
  zhaohuaizhen: {
    abilityZh: '反制飞行物和持续站场强，化劲吸收伤害+控制+回复，四两拨千斤以柔克刚',
    abilityEn: 'Projectile counter and sustained presence strong, absorb damage + CC + recover, gentle-deflects-heavy martial arts philosophy'
  },

  // 注：云缨共用上方 yunying 条目

  // --- 刘邦 ---
  liubang: {
    abilityZh: '支援体系核心，大招全图传送护盾支援，带线牵制+即时参团能力独一无二',
    abilityEn: 'Support system core, ult global teleport-shield support, unique split-push + instant teamfight participation'
  },

  // 注：廉颇对抗路与辅助共用 lianpin 条目，见上方辅助部分

  // --- 白起 ---
  baiqi: {
    abilityZh: '强开和留人能力强，嘲讽大范围控制+回血反击，血量越高威胁越大',
    abilityEn: 'Strong initiation and retention, taunt AOE control + lifesteal counter-attack, higher HP means greater threat'
  },

  // --- 孙策（边）---
  sunce: {
    abilityZh: '支援开团顶级，驾船撞击+群体控制+支援速度极快，开船进场气势磅礴',
    abilityEn: 'Top-tier support engage, ship ram + group-CC + extremely fast arrival, ship-enter engagement is majestic'
  },

  // --- 源流之子（边）---
  yuanliuzhizi: {
    abilityZh: '连续控制打关羽很强，多段控制链+稳定站场，功能性战士定位清晰',
    abilityEn: 'Multi-CC chain counters Guan Yu strongly, multi-CC chain + stable positioning, clearly defined functional fighter role'
  },

  // --- 大司命 ---
  dasiming: {
    abilityZh: '进场和残局能力强，魂链连接+高伤害+生存能力，阴阳师风格的收割刺客',
    abilityEn: 'Strong entry and cleanup, soul-chain connection + high damage + survival, onmyoji-style cleanup assassin'
  },

  // --- 影 ---
  ying2: {
    abilityZh: '高机动和收割能力强，影分身+多段位移+爆发，来去如影难以捉摸',
    abilityEn: 'High mobility and cleanup strong, shadow clone + multi-dash + burst, comes and goes like a shadow, elusive'
  },

  // --- 蚩奼 ---
  chicha: {
    abilityZh: '新战边通常进场/面板强势，多段控制+高爆发+生存能力，综合战斗能力强',
    abilityEn: 'New fighter usually strong entry/base stats, multi-CC + high burst + survival, comprehensive combat capability'
  },
};

// 被克制英雄的弱点描述 - 基于王者荣耀130英雄克制数据库
export const heroWeaknesses: Record<string, WeaknessData> = {
  // ================================================================
  // 一、射手（发育路）- ADC
  // ================================================================

  // --- 后羿 ---
  houyi: {
    weaknessZh: '怕突脸、怕封走位、怕超远消耗，无位移被迫走位就掉伤害，被贴身后极其脆弱',
    weaknessEn: 'Fears dive, zoning and ultra-long poke, no dashes mean losing position loses damage, extremely fragile when dove'
  },

  // --- 鲁班七号 ---
  luban7: {
    weaknessZh: '无位移怕贴脸爆发和强开，很吃保人辅助，一旦被近身几乎没有自保手段',
    weaknessEn: 'No dashes fears close-range burst and hard engage, heavily dependent on peel supports, nearly zero self-defense when approached'
  },

  // --- 狄仁杰 ---
  direnjie: {
    weaknessZh: '怕超长手压制和先手爆发，虽然解控稳定但极限上限不如高机动射手，被拉扯时输出受限',
    weaknessEn: 'Fears long-range suppression and first-strike burst, while cleanse is reliable ceiling is below mobile marksman, output limited when kited'
  },

  // --- 李元芳 ---
  liyuanfang: {
    weaknessZh: '怕解印记的英雄（狄仁杰），一套打不死就容易进入真空期，后期上限依赖节奏滚雪球',
    weaknessEn: 'Fears mark-cleanse heroes (Di Renjie), struggles if initial combo doesn\'t kill, late-game ceiling relies on tempo snowball'
  },

  // --- 虞姬 ---
  yuji: {
    weaknessZh: '怕法伤和持续拉扯，物免只挡物理对法伤无效，面对艾琳法伤和高机动拉扯体系吃力',
    weaknessEn: 'Fears magic damage and sustained kiting, physical immune only blocks physical, struggles vs Ailin magic damage and high-mobility kite comps'
  },

  // --- 孙尚香 ---
  sunshangxiang: {
    weaknessZh: '怕物免和贴脸反打，一技能翻滚CD期脆弱，滚空后伤害断档非常尴尬',
    weaknessEn: 'Fears physical immunity and close-range counter, vulnerable during Skill 1 roll CD, very awkward if roll misses'
  },

  // --- 伽罗 ---
  jailuo: {
    weaknessZh: '怕强突脸和爆发切入，开弓后自身也减速不好撤退，被近身后基本没有反抗能力',
    weaknessEn: 'Fears strong dive and burst entry, self-slow during bow mode hurts retreat, basically helpless when approached'
  },

  // --- 公孙离 ---
  gongsunli: {
    weaknessZh: '容错低失误就暴毙，怕高持续站撸和稳定锁定伤害，伞的位置被判断后就容易被抓到',
    weaknessEn: 'Low fault tolerance means death on mistake, fears high sustained stand-and-fight and stable locked-on damage, predictable umbrella positions get exploited'
  },

  // --- 马可波罗 ---
  makeboluo: {
    weaknessZh: '怕格挡弹道和解控反打，真伤成型需要时间进场环境要求高，半肉版本爆发不够',
    weaknessEn: 'Fears parry projectiles and cleanse counter-attack, true damage needs time to scale and requires good entry environment, bruiser version lacks burst'
  },

  // --- 黄忠 ---
  huangzhong: {
    weaknessZh: '一开大就暴露弱点成为靶子，怕超远消耗和持续AOE拆阵地，被绕后或强开时难以应对',
    weaknessEn: 'Reveals weakness as sitting duck during ult, fears ultra-long poke and AOE position-breaking, struggles when flanked or hard-engaged'
  },

  // --- 蒙犽 ---
  mengya: {
    weaknessZh: '怕高机动拉扯打不到人就很尴尬，自身较笨重容易被风筝，遇到灵活英雄时输出效率大幅下降',
    weaknessEn: 'Fears high-mobility kiting, very awkward when can\'t hit targets, clumsy and easily kited, output efficiency drops sharply vs mobile heroes'
  },

  // --- 戈娅 ---
  gaya: {
    weaknessZh: '怕更高爆发和更强远程压制，自身输出需要持续累积，被更高维度的输出压制时难以发挥',
    weaknessEn: 'Fears higher burst and stronger range suppression, output requires accumulation, struggles when suppressed by higher-dimensional damage'
  },

  // --- 敖隐 ---
  aoyin: {
    weaknessZh: '怕超远定点狙杀，进场前被打残就废了，三形态切换有真空期可以被抓住',
    weaknessEn: 'Fears ultra-long precision sniping, becomes useless if damaged before engagement, form-switch windows can be exploited'
  },

  // --- 百里守约 ---
  bailishouyue: {
    weaknessZh: '怕高机动贴脸和强突进，吃命中率二技能空了就损失巨大，理论克制强但操作门槛最高',
    weaknessEn: 'Fears high-mobility close-range and strong dives, accuracy-dependent with huge cost on missed Skill 2 shots, theoretically strong but highest skill floor'
  },

  // --- 艾琳 ---
  ailin: {
    weaknessZh: '怕高抗站桩阵地坦射体系，法伤虽好但怕被纯肉装吸收，面对黄忠这类高抗站场英雄吃力',
    weaknessEn: 'Fears high-resistance stationary tank-shooter comps, magic damage gets absorbed by pure tank builds, struggles vs Huang Zhong type high-resistance positions'
  },

  // --- 莱西奥 ---
  laixiao: {
    weaknessZh: '怕高机动绕技能规避爆发，升空期间虽不可被选但仍可能被打到，怕稳定长手压住输出窗',
    weaknessEn: 'Fears high-mobility dodge of skills, aerial untargetable but still vulnerable to AoE, fears stable long-range suppressing output windows'
  },

  // --- 成吉思汗（暂无ID） ---

  // --- 孙权 ---
  sunquan: {
    weaknessZh: '如果输出依赖持续平A和中近距离换血，就怕物免、格挡和解控反打，核心被限制后价值骤降',
    weaknessEn: 'If output relies on sustained AA and mid-range trades, fears physical immunity, parry and cleanse counter, value drops sharply when core is restricted'
  },

  // --- 苍 ---
  cang: {
    weaknessZh: '怕超射程压制和高爆发抢先手，站位被封锁时难以发挥，容错空间中等偏上',
    weaknessEn: 'Fears outrange suppression and burst first-strike, struggles when positioning restricted, moderate-to-high error margin'
  },

  // --- 元流之子(射手) ---
  yuanliuzhizi_archer: {
    weaknessZh: '核心是强化普攻贯穿+位移+浮空，怕高机动贴身规避、稳定长手狙杀和解控反打，进场时机要求高',
    weaknessEn: 'Core is enhanced AA pierce + dash + knockup, fears mobile close-range evasion, long-range sniping and cleanse counter, demands precise timing'
  },

  // ================================================================
  // 二、辅助（游走）- Support
  // ================================================================

  // --- 盾山 ---
  dunshan: {
    weaknessZh: '举盾姿态怕被绕盾和钩，背对方向是死角，举盾移速慢容易被开',
    weaknessEn: 'Shield stance fears being hooked or circled, backside is blind spot, slow move speed during shield makes it engage-vulnerable'
  },

  // --- 钟馗 ---
  zhongkui: {
    weaknessZh: '空钩后白给容易送节奏，怕反开和解控，钩到前排送对面机会',
    weaknessEn: 'Missed hook throws away tempo, fears counter-engage and cleanse, hooking frontline gifts enemy opportunities'
  },

  // --- 牛魔 ---
  niumo: {
    weaknessZh: '怕群体解控后价值骤降，二技能冲上去后如果没有后续控制就很尴尬',
    weaknessEn: 'Value plummets after group cleanse, awkward if Skill 2 charge lacks follow-up CC'
  },

  // --- 庄周 ---
  zhuangzhou: {
    weaknessZh: '怕非传统控制链和数值压制，硬开能力差不能主动开团，单挑能力一般',
    weaknessEn: 'Fears non-traditional CC chains and stat-checks, poor hard-engage cannot initiate actively, mediocre 1v1 ability'
  },

  // --- 明世隐 ---
  mingshiyin: {
    weaknessZh: '功能单一怕体系被拆，连线对象被秒就失去价值，怕强开和分散阵容',
    weaknessEn: 'Single-function fears system being broken, loses value if linked ally gets eliminated, fears hard engage and spread formations'
  },

  // --- 蔡文姬 ---
  caiwenji: {
    weaknessZh: '怕先手秒人来不及奶，本身较脆怕被集火，大招读条怕被打断',
    weaknessEn: 'Fears instant elimination before healing, relatively squishy and fears focus fire, ult channel fears interruption'
  },

  // --- 鬼谷子 ---
  guiguzi: {
    weaknessZh: '怕霸体和解控和硬反手，路人局吃配合节奏价值虽长期公认但不稳定',
    weaknessEn: 'Fears superarmor cleanse and hard counterplay, coordination-dependent in ranked, tempo value is well-established but inconsistent'
  },

  // --- 廉颇（辅）---
  lianpin: {
    weaknessZh: '怕无视霸体的点名控制（东皇张良）和真伤，霸体不是无敌仍有弱点',
    weaknessEn: 'Fears point-and-click CC ignoring superarmor (Dong Huang/Zhang Liang) and true damage, superarmor is not invincible with weaknesses'
  },

  // --- 东皇太一 ---
  donghuangtaiyi: {
    weaknessZh: '吸进去后被反打很伤，怕被拉扯和集火，很吃队友跟伤害不然就是一换一甚至亏',
    weaknessEn: 'Hurt badly by counter-attack after absorption, fears kiting and focus-fire, highly dependent on ally follow-up damage else trade is even negative'
  },

  // --- 苏烈 ---
  sulie: {
    weaknessZh: '怕击退打断和解控，复活期间如果没人跟就很孤立无援，吃进场时机',
    weaknessEn: 'Fears knockback interruption and cleanse, isolated during revival if no allies follow, timing-dependent engagement'
  },

  // --- 张飞 ---
  zhangfei: {
    weaknessZh: '怕无视威慑的附体和拉扯体系（瑶），功能全面但单点极致性不如专职辅助',
    weaknessEn: 'Fears ignore-threat attach systems (Yao) and kiting comps, versatile but lacks specialized single-point excellence'
  },

  // --- 瑶 ---
  yao: {
    weaknessZh: '怕点名秒杀和强开，附体目标被秒自己也危险，正面开团能力弱',
    weaknessEn: 'Fears targeted elimination and hard engage, dangerous if attached ally gets killed, weak frontal engagement'
  },

  // --- 大乔 ---
  daqiao: {
    weaknessZh: '怕强开拆体系和飞行技能被挡（盾山），单排收益下降，公开攻略认为其极克带线流但也怕被针对',
    weaknessEn: 'Fears hard-engaged system breaking and blocked flight skills (Dun Shan), ranked value drops, guides say she counters split-push but also vulnerable to targeting'
  },

  // --- 太乙真人 ---
  taiyizhenren: {
    weaknessZh: '怕先手点控和强开压复活收益，复活价值打不出来就很亏，公开教学视为高节奏保核型',
    weaknessEn: 'Fears point-click CC and hard engage suppressing revive value, big loss if revive doesn\'t trigger, publicly recognized as high-tempo protect-carry type'
  },

  // --- 鲁班大师 ---
  lubandashi: {
    weaknessZh: '怕解控反开和拉到前排，吃配合路人局不稳定，链子收益被化解时无力',
    weaknessEn: 'Fears cleanse counter-engage and pulling frontline, coordination-dependent and unstable in solo queue, powerless when link value gets neutralized'
  },

  // --- 孙膑 ---
  sunbin: {
    weaknessZh: '怕被盾山挡飞行技能和强突脸，公开攻略提到其克站桩但也怕被硬开打断节奏',
    weaknessEn: 'Fears Dun Shan blocking flight skills and hard dives, public guides note he counters stationaries but also fears hard-engage tempo disruption'
  },

  // --- 墨子（辅）---
  mozi: {
    weaknessZh: '怕位移和解控降低命中率，技能全是非指向性需要预判，命中率决定上下限',
    weaknessEn: 'Fears dashes and cleanse reducing accuracy, all skills are skillshot requiring prediction, hit-rate determines performance ceiling'
  },

  // --- 桑启 ---
  sangqi: {
    weaknessZh: '怕先手秒和钩子类控制，奶量和拉扯来不及展开就被控死，怕被瞬间开死',
    weaknessEn: 'Fears instant elimination and hook-type CC, heal and kiting can\'t deploy before being CC-locked, fears instant death on open'
  },

  // --- 朵莉亚 ---
  duoliya: {
    weaknessZh: '怕锁头强开和先手点控，刷新体系吃不到完整收益就浪费，怕被优先处理',
    weaknessEn: 'Fears point-click hard engage and initiation CC, refresh system wastes if full value not obtained, prioritized as target'
  },

  // --- 少司缘 ---
  shaosiyuan: {
    weaknessZh: '怕锁头强开和先手控制，技能链被打断就价值大跌，作为新功能辅怕被针对性处理',
    weaknessEn: 'Fears lockdown hard engage and initiation CC, value drops massively when skill chain interrupted, as new functional support fears targeted handling'
  },

  // --- 空空儿 ---
  kongkonger: {
    weaknessZh: '怕定点控制和硬控反打，高机动花活型怕被按住动不了，容错较低',
    weaknessEn: 'Fears pinpoint CC and hard counter-control, high-mobile trickster type suffers when pinned down, lower fault tolerance'
  },

  // --- 元流之子(辅助) ---
  yuanliuzhizi_support: {
    weaknessZh: '怕被针对和强开体系拆散，万能型辅助但缺乏极端特长，在专精领域不如专职辅助',
    weaknessEn: 'Fears targeting and engage-system dismantling, universal support lacking extreme specialization, outclassed by specialists in focused areas'
  },

  // --- 大禹 ---
  dayu: {
    weaknessZh: '如果是重前排持续站场逻辑就怕真伤风筝和持续消耗，回复体系怕被针对拆解',
    weaknessEn: 'As heavy front-line sustained presence, fears true damage kiting and sustained consumption, recovery system vulnerable to targeted dismantle'
  },

  // --- 猪八戒 ---
  zhubajie: {
    weaknessZh: '怕真伤和持续百分比消耗，回血价值被吕布梦奇等拆掉时很难受，怕"回血变扣血"',
    weaknessEn: 'Fears true damage and %HP sustained consumption, suffers when heal-value gets countered by Lu Bu/Meng Qi types, fears "healing becoming damage"'
  },

  // ================================================================
  // 三、法师（中路）- Mage
  // ================================================================

  // --- 张良 ---
  zhangliang: {
    weaknessZh: '全峡谷最稳定的定点压制，大招按住一人无法操作克制一切高机动英雄（露娜李白韩信镜等）',
    weaknessEn: 'Most stable point-lockdown in the game, ult pins one target unable to act countering all high-mobility heroes (Luna/Li Bai/Han Xin/Jing etc.)'
  },

  // --- 妲己 ---
  daji: {
    weaknessZh: '怕先手更远的英雄和技能规避，清线能力和持续作战差，一套打完真空期长',
    weaknessEn: 'Fears longer-ranged initiators and skill dodging, weak waveclear and sustained combat, long cooldown after full combo'
  },

  // --- 安琪拉 ---
  anqila: {
    weaknessZh: '怕多位移绕技能的英雄，火球预判型技能空了就废，高爆发但高风险',
    weaknessEn: 'Fears multi-dash skill-evading heroes, fireball predication skills leave her useless if missed, high burst but high risk'
  },

  // --- 王昭君 ---
  wangzhaojun: {
    weaknessZh: '怕高机动切入和贴脸，技能预判型怕被近身，冰冻前可以被规避',
    weaknessEn: 'Fears high-mobility dives and close-range, prediction-type skills struggle when pressured, freeze can be dodged before landing'
  },

  // --- 小乔 ---
  xiaoqiao: {
    weaknessZh: '怕法刺贴脸和突脸爆发，自保只有一技能吹飞，被近身后生存压力大',
    weaknessEn: 'Fears mage-assassin dives and burst, only Skill 2 blowaway for self-peel, high survival pressure when approached'
  },

  // --- 甄姬 ---
  zhenji: {
    weaknessZh: '怕突脸和位移切后，腿短怕被拉扯，冰冻需要预判和弹跳累积',
    weaknessEn: 'Fears dive and dash backline-cutting, short legs fear kiting, freeze requires prediction and bounce stacking'
  },

  // --- 周瑜 ---
  zhouyu: {
    weaknessZh: '怕更长手和强突脸，被拉出火区就很难受，火区铺不开时输出大减',
    weaknessEn: 'Fears longer range and strong dives, miserable when pulled out of fire zone, output drops significantly without fire zone setup'
  },

  // --- 嬴政 ---
  yingzheng: {
    weaknessZh: '怕法刺突脸和强切后排，"炮台法师怕法刺突进"是长期稳定规律，自保能力偏弱',
    weaknessEn: 'Fears mage-assassin dives and backline cutting, "artillery mages fear assassin dives" is long-established pattern, weak self-defense'
  },

  // --- 姜子牙 ---
  jiangziya: {
    weaknessZh: '怕突脸和不给蓄力时间，被近身后大招蓄力被打断，需要队友保护',
    weaknessEn: 'Fears dives and denied charging time, ult channel interrupted when approached, needs ally protection'
  },

  // --- 杨玉环 ---
  yangyuhuan: {
    weaknessZh: '怕锁头硬控和张良东皇这类定点控制，输出节奏慢需要时间铺垫，怕被控死',
    weaknessEn: 'Fears point-click lockdown and Zhang Liang/Dong Huang type pinning controls, slow output pacing needs setup time, fears being controlled to death'
  },

  // --- 貂蝉 ---
  diaochan: {
    weaknessZh: '怕稳定强控和沉默，"强控克貂蝉"长期成立，被控住就一套被秒没法开花',
    weaknessEn: 'Fears stable hard CC and silence, "hard CC counters Diao Chan" is long-established, controlled means instant death before flowering'
  },

  // --- 诸葛亮 ---
  zhugeliang: {
    weaknessZh: '怕先手瞬控瞬秒和埋伏，手短进场风险大，被动刷新被中断就伤害断档',
    weaknessEn: 'Fears instant-CC instant-kill ambushes, short range means high entry risk, passive-refresh interruption causes damage gap'
  },

  // --- 不知火舞 ---
  buzhihuowu: {
    weaknessZh: '怕单点锁定控制如海月拉人，进场判断失误容易暴毙，扇子需要命中才有伤害',
    weaknessEn: 'Fears single-target pin like Hai Yue pull, misjudged entry leads to instant death, fans need to land for damage'
  },

  // --- 上官婉儿 ---
  shangguwaner: {
    weaknessZh: '怕起飞前被控（张良），被控就飞天失败直接废掉，需要找到好的进场时机',
    weaknessEn: 'Fears pre-flight CC (Zhang Liang), controlled means failed flight and total uselessness, needs good engagement timing'
  },

  // --- 海月 ---
  haiyue: {
    weaknessZh: '怕持续回复和稳定长手输出，拉进去杀不掉就很尴尬，幻境内并非完全无敌',
    weaknessEn: 'Fears sustained recovery and stable long-range output, awkward if can\'t kill inside dimension, dimension is not fully invincible'
  },

  // --- 女娲 ---
  nuwa: {
    weaknessZh: '怕持续轰炸和更长手的法师，续航差怕被持续消耗，矩阵方块可以被打断',
    weaknessEn: 'Fears sustained bombardment and longer-range mages, poor sustain vs sustained consumption, matrix blocks can be interrupted'
  },

  // --- 沈梦溪 ---
  shenmengxi: {
    weaknessZh: '怕回复型法师（扁鹊），炸弹消耗被回血抵消时就吃力，打持续回血体系效率低',
    weaknessEn: 'Fears recovery mages (Bian Que), bomb poke gets negated by healing, inefficient vs sustained heal comps'
  },

  // --- 扁鹊 ---
  bianque: {
    weaknessZh: '怕牵引强开和爆发秒杀，需要时间叠毒层才能打出伤害，怕被瞬秒打不出叠毒',
    weaknessEn: 'Fears pull-engages and burst elimination, needs time stacking poison layers for damage, fears instant death preventing stack buildup'
  },

  // --- 西施 ---
  xishi: {
    weaknessZh: '怕更长手消耗和压制，清线和正面压制一般，需要配合队友才能发挥最大价值',
    weaknessEn: 'Fears longer-range poke and suppression, average waveclear and frontal pressure, needs ally coordination for maximum value'
  },

  // --- 干将莫邪 ---
  ganjiangmoye: {
    weaknessZh: '怕全面型长手法师和法刺贴脸，剑气预判需要准度，近身基本没有自保',
    weaknessEn: 'Fears comprehensive long-range mages and mage-assassin dives, sword prediction requires accuracy, basically zero self-defense up-close'
  },

  // --- 海诺 ---
  hainuo: {
    weaknessZh: '怕稳定定点控制（张良东皇），最怕被按住无法切换形态发挥，控制链一到就危险',
    weaknessEn: 'Fears stable point-click CC (Zhang Liang/Dong Huang), most fears being pinned unable to form-switch, dangerous once CC chain arrives'
  },

  // --- 弈星 ---
  yixing: {
    weaknessZh: '怕反手冰冻和自保型法师（甄姬），单杀能力一般需要打团发挥作用，怕被消耗',
    weaknessEn: 'Fears counter-freeze and self-defense mages (Zhen Ji), mediocre 1v1 needs teamfights to shine, fears sustained poke'
  },

  // --- 金蝉 ---
  jinchan: {
    weaknessZh: '怕封路和手长压站位（王昭君嬴政），自身机动性一般怕被风筝，紧箍咒可以被净化',
    weaknessEn: 'Fears zone denial and long-range pressure (Wang Zhaojun/Ying Zheng), average mobility fears kiting, headband can be cleansed'
  },

  // --- 高渐离 ---
  gaojianli: {
    weaknessZh: '怕禁锢封路和沉默（金蝉张良王昭君），进不了场就没用，大招开了进不去更伤',
    weaknessEn: 'Fears imprison zone-denial and silence (Jin Chan/Zhang Liang/Wang Zhaojun), useless if can\'t enter, worse when ult active but can\'t engage'
  },

  // --- 米莱狄 ---
  milady: {
    weaknessZh: '怕近身团战法师和高渐离这种AOE清机器人快的，正面大团机器人容易被蒸发',
    weaknessEn: 'Fears close-range teamfight mages and Gao Jianli type AOE robot-clearers, robots easily evaporated in direct teamfights'
  },

  // --- 武则天 ---
  wuzetian: {
    weaknessZh: '怕框控和点控压站位（弈星海月），正面持续压制不算顶级，需要大招配合才能打出完整控制',
    weaknessEn: 'Fears box-CC and point-pressing (Yi Xing/Hai Yue), frontal sustained pressure isn\'t top-tier, needs ult for full CC combo'
  },

  // --- 嫦娥 ---
  change: {
    weaknessZh: '怕真伤拆蓝盾和持续拉扯（伽罗吕布），蓝量护盾体系怕被针对，法力值被抽空就脆',
    weaknessEn: 'Fears true damage shield-break and sustained kiting (Jia Luo/Lu Bu), mana-shield system vulnerable to targeting, brittle when mana drained'
  },

  // --- 元流之子(法师) ---
  yuanliuzhizi_magic: {
    weaknessZh: '怕被先手控和被突脸，作为通用型法师缺乏极端特长，在专精领域不如专职法师',
    weaknessEn: 'Fears initiation CC and dives, as general-purpose mage lacks extreme specialization, outclassed by specialists in focused areas'
  },

  // ================================================================
  // 四、打野 - Jungle
  // ================================================================

  // --- 露娜 ---
  luna: {
    weaknessZh: '怕沉默锁头免伤（孙悟空亚瑟），断大后就废掉，"东皇张良克露娜李白韩信"长期成立',
    weaknessEn: 'Fears silence lockdown immunity (Sun Wukong/Arthur), becomes useless after missing combo, "Dong Huang/Zhang Liang counters Luna/Li Bai/Han Xin" long-established'
  },

  // --- 李白 ---
  libai: {
    weaknessZh: '怕稳定点控和沉默（韩信亚瑟），刷大的进场点容易被卡，被控住一套打不出来',
    weaknessEn: 'Fears stable point-control and silence (Han Xin/Arthur), entry points for ult farming easily blocked, can\'t execute combo when controlled'
  },

  // --- 韩信 ---
  hanxin: {
    weaknessZh: '怕反甲硬拼和稳定控制（典韦），容错低被抓到就容易死，身板较脆怕被集火',
    weaknessEn: 'Fears Thornmail brute-force and stable CC (Dian Wei), low fault tolerance means easy death when caught, squishy and fears focus fire'
  },

  // --- 孙悟空 ---
  sunwukong: {
    weaknessZh: '怕野区硬碰硬（刘备典韦铠），逆风时很难发挥，身法再好也怕数值碾压',
    weaknessEn: 'Fears jungle brute-force (Liu Bei/Dian Wei/Kai), struggles when behind, no amount of trickery beats stat-crushing'
  },

  // --- 刘备 ---
  liubei: {
    weaknessZh: '怕免伤拉扯（铠镜吕布），不跟你近战就没办法，盾被破后也很脆弱',
    weaknessEn: 'Fears damage-reduction kiting (Kai/Jing/Lu Bu), can\'t do anything if enemy refuses melee, vulnerable after shield breaks'
  },

  // --- 铠（野）---
  kai_jg: {
    weaknessZh: '怕拉扯骗大（李白露娜貂蝉），大招空窗期明显，变身结束后战斗力骤降',
    weaknessEn: 'Fears kiting baited ult (Li Bai/Luna/Diao Chan), obvious ult window weakness, combat power drops sharply post-transformation'
  },

  // --- 典韦 ---
  dianwei: {
    weaknessZh: '怕无控风筝和远程拉扯（露娜马可波罗公孙离），摸不到人就完全没用，疯狗模式也怕放风筝',
    weaknessEn: 'Fears CC-less kiting and range poking (Luna/Marco Polo/Gongsun Li), completely useless if can\'t reach target, berserk mode also fears kiting'
  },

  // --- 澜 ---
  lan: {
    weaknessZh: '怕缴械和锁头控制（盘古东皇张良），依赖普攻被动循环被断就废掉，进场被控就死',
    weaknessEn: 'Fears disarm and lockdown (Pan Gu/Dong Huang/Zhang Liang), useless when AA-passive cycle broken, dies if controlled on entry'
  },

  // --- 盘古 ---
  pangu: {
    weaknessZh: '怕不吃普攻的技能型打野（橘右京镜赵云），拳头形态伤害不够打不动法系，缴械对技能英雄无效',
    weaknessEn: 'Fears non-AA skill junglers (Tachibana Ukyo/Jing/Zhao Yun), fist form damage insufficient vs magic types, disarm useless vs skill-based heroes'
  },

  // --- 镜 ---
  jing: {
    weaknessZh: '怕锁头控制和沉默（东皇张良亚瑟），进场被按死就无法输出，镜像换位也需要操作空间',
    weaknessEn: 'Fears lockdown CC and silence (Dong Huang/Zhang Liang/Arthur), can\'t output if pinned on entry, mirror swap also needs operational space'
  },

  // --- 娜可露露 ---
  nakelulu: {
    weaknessZh: '怕锁头免伤和沉默（东皇张良铠亚瑟），一套秒不掉就很尴尬，进场时机要求高',
    weaknessEn: 'Fears lockdown immunity and silence (Dong Huang/Zhang Liang/Kai/Arthur), awkward if full combo doesn\'t kill, demands precise entry timing'
  },

  // --- 裴擒虎 ---
  peiqinhu: {
    weaknessZh: '怕野区硬碰硬和点控（典韦铠刘备东皇），拖后期压力大，人形态较脆怕被切',
    weaknessEn: 'Fears jungle brute-force and point-CC (Dian Wei/Kai/Liu Bei/Dong Huang), struggles in late game, human form squishy and fears dives'
  },

  // --- 司马懿（野）---
  simayi: {
    weaknessZh: '怕定点强控（张良东皇海月狄仁杰），进场即死的恐惧，隐身被识破后也很脆弱',
    weaknessEn: 'Fears pinpoint hard CC (Zhang Liang/Dong Huang/Hai Yue/Di Renjie), instant-death on entry fear, fragile when stealth revealed'
  },

  // --- 云中君 ---
  yunzhongjun: {
    weaknessZh: '怕硬拼和稳定控制（盘古典韦铠东皇），被控落地就脆皮，飞行状态怕被强制降落',
    weaknessEn: 'Fears brute-force and stable CC (Pan Gu/Dian Wei/Kai/Dong Huang), fragile when grounded by CC, flight status fears forced landing'
  },

  // --- 暃 ---
  fei: {
    weaknessZh: '怕落地被按和强控（东皇张良铠亚瑟），墙体机动再强也怕被稳定锁头，落地瞬间是最脆弱的',
    weaknessEn: 'Fears ground-pin and hard CC (Dong Huang/Zhang Liang/Kai/A Lian), wall mobility still fears stable lockdown, landing moment is most vulnerable'
  },

  // --- 曜 ---
  yao2: {
    weaknessZh: '怕回星前被控死（东皇张良），星屑能量被打断就很伤，怕被强行站场拖入长线战',
    weaknessEn: 'Fears pre-star-return CC-death (Dong Huang/Zhang Liang), star-energy interrupt is painful, fears forced prolonged engagement'
  },

  // --- 赵云 ---
  zhaoyun: {
    weaknessZh: '怕真伤和持续拉扯（吕布貂蝉），极限秒人能力一般，大招进场后被反控就危险',
    weaknessEn: 'Fears true damage and sustained kiting (Lu Bu/Diao Chan), mediocre extreme-elimination ability, dangerous if countered after ult entry'
  },

  // --- 阿轲 ---
  ake: {
    weaknessZh: '怕视野和硬控及反手保护（东皇张良张飞太乙），开不到后排就很难受，背后暴击条件苛刻',
    weaknessEn: 'Fears vision and hard CC & counter-peel (Dong Huang/Zhang Liang/Zhang Fei/Tai Yi), struggles when can\'t reach backline, strict backstab crit conditions'
  },

  // --- 兰陵王 ---
  lanlingwang: {
    weaknessZh: '怕视野和肉辅及反手控（太乙张飞东皇鲁班大师），后期隐身被发现后容错低，怕被提前察觉',
    weaknessEn: 'Fears vision and tank-support & counter-CC (Tai Yi/Zhang Fei/Dong Huang/Luban Master), late-game low fault tolerance when revealed, fears early detection'
  },

  // --- 阿古朵 ---
  agudo: {
    weaknessZh: '怕收野和切宠物及反野（澜韩信裴擒虎），球球被杀后自身很弱，野区被针对就崩盘',
    weaknessEn: 'Fears jungle-steal and pet-killing (Lan/Han Xin/Pei Qinhu), very weak without Ball-Ball, crumbles when jungle is targeted'
  },

  // --- 橘右京（野）---
  juyoujing_jg: {
    weaknessZh: '怕霸体硬压和位移镜像拉扯（宫本武藏镜），怕被硬顶近战，技能型怕被纯数值压制',
    weaknessEn: 'Fears superarmor pressure and mirror-dash kiting (Miyamoto Musashi/Jing), fears brute-force melee, skill-type fears pure stat-crushing'
  },

  // --- 宫本武藏 ---
  gongben: {
    weaknessZh: '怕高护盾和真伤（梦奇吕布），打厚前排一般，需要找C位切才有效果',
    weaknessEn: 'Fears high shields and true damage (Meng Qi/Lu Bu), mediocre vs thick frontlines, must find carries for effectiveness'
  },

  // --- 梦奇（野）---
  mengqi_jg: {
    weaknessZh: '怕真伤和风筝（镜吕布老夫子），"吕布老夫子克梦奇"长期稳定，胖胖被拉扯就很难受',
    weaknessEn: 'Fears true damage and kiting (Jing/Lu Bu/Lao Fu Zi), "Lu Bu/Lao Fu Zi counters Meng Qi" long-established, chubby suffers when kited'
  },

  // --- 元流之子(刺客) ---
  yuanliuzhizi_assassin: {
    weaknessZh: '怕多段爆发被免伤和被锁头（铠东皇张良亚瑟），多段突进进场被定住就完蛋，怕进场被反制',
    weaknessEn: 'Fears multi-burst nullified by DR and lockdown (Kai/Dong Huang/Zhang Liang/Arthur), pinned on multi-dash entry means death, fears entry counterplay'
  },

  // --- 亚瑟（野）---
  yase_jg: {
    weaknessZh: '怕持续吸血拉扯（芈月貂蝉），沉默虽然强但怕被风筝，后期单挑能力下降',
    weaknessEn: 'Fears sustained lifesteal kiting (Mi Yue/Diao Chan), silence strong but fears kiting, late-game 1v1 declines'
  },

  // --- 百里玄策 ---
  bailixuance: {
    weaknessZh: '怕净化解控和强反开（狄仁杰庄周张飞太乙），钩空就很伤，钩到肉也没用',
    weaknessEn: 'Fears cleanse and hard counter-engage (Di Renjie/Zhuang Zhou/Zhang Fei/Tai Yi), hurt badly on miss hook, useless hooking tanks'
  },

  // --- 云缨（野）---
  yunying_jg: {
    weaknessZh: '怕真伤硬控和站撸战坦（吕布夏侯惇老夫子），长线站撸一般，怕被拖进消耗战',
    weaknessEn: 'Fears true damage hard-CC and stand-fight tanks (Lu Bu/Xiahou Dun/Lao Fu Zi), mediocre prolonged standing fight, fears dragged into war of attrition'
  },

  // ================================================================
  // 五、对抗路（边路）- Toplane
  // ================================================================

  // --- 马超 ---
  machao: {
    weaknessZh: '怕减速霸体和断节奏（夏洛特廉颇蒙恬），"廉颇克马超"是长期经典关系，捡枪被卡就废',
    weaknessEn: 'Fears slows superarmor and tempo-breaking (Xia Lote/Lian Pin/Meng Tian), "Lian Pin counters Ma Chao" is classic long-term, useless when gun-pickup denied'
  },

  // --- 夏洛特 ---
  xialuote: {
    weaknessZh: '怕霸体减伤和回复战（蒙恬狂铁），打更硬的霸体战边很吃亏，七星剑需要近身才能触发',
    weaknessEn: 'Fears superarmor DR and sustain battles (Meng Tian/Kuang Tie), loses to harder superarmor fighters, Seven-Star Sword needs proximity to trigger'
  },

  // --- 蒙恬 ---
  mengtian: {
    weaknessZh: '怕多目标吸血和真伤（狂铁吕布），方阵怕被绕侧面，回复怪让他很难受',
    weaknessEn: 'Fears multi-target lifesteal and true damage (Kuang Tie/Lu Bu), phalanx vulnerable to flanking, sustain monsters give him trouble'
  },

  // --- 狂铁 ---
  kuangtie: {
    weaknessZh: '怕免伤和拉长战线（老夫子花木兰），进场点容易被拿捏，能量条管理不好就弱',
    weaknessEn: 'Fears DR and extended fights (Lao Fu Zi/Hua Mulan), entry points easily exploitable, weak with poor energy management'
  },

  // --- 老夫子 ---
  laofuzi: {
    weaknessZh: '怕霸体和真伤以及链子价值被化解（花木兰廉颇夏侯惇），"廉颇让老夫子难受"长期成立',
    weaknessEn: 'Fears superarmor true damage and bind-value neutralization (Hua Mulan/Lian Pin/Xiahou Dun), "Lian Pin troubles Lao Fu Zi" long-established'
  },

  // --- 花木兰 ---
  huamulan: {
    weaknessZh: '怕六边形战坦稳定换血（夏侯惇吕布），重剑形态怕被拉扯，轻剑形态身板较脆',
    weaknessEn: 'Fears well-rounded tank steady trading (Xiahou Dun/Lu Bu), heavy-sword form fears kiting, light-sword form is squishy'
  },

  // --- 夏侯惇 ---
  xiahoudun: {
    weaknessZh: '怕持续吸血拉扯和真伤（芈月吕布），被长线消耗就很难受，回复跟不上就崩盘',
    weaknessEn: 'Fears sustained lifesteal kiting and true damage (Mi Yue/Lu Bu), suffers from long-line consumption, collapses if recovery falls behind'
  },

  // --- 芈月 ---
  miyue: {
    weaknessZh: '怕傀儡消耗和强清兵断链（元歌阿古朵关羽），怕高机动收割，暗影之力怕被沉默打断',
    weaknessEn: 'Fears puppet poke and strong wave-clear chain-break (Yuan Ge/A Gu Duo/Guan Yu), fears high-mobility cleanup, Shadow Power fears silence interrupt'
  },

  // --- 元歌 ---
  yuange: {
    weaknessZh: '怕高速清傀儡和贴脸斩本体（关羽司空震），操作门槛高傀儡被清就很伤，怕被集火本体',
    weaknessEn: 'Fears fast puppet clear and close-range body-slay (Guan Yu/Si Kong Zhen), high skill floor with painful puppet-loss, fears focus on body'
  },

  // --- 关羽 ---
  guanyu: {
    weaknessZh: '怕连续控制断马腿（源流之子廉颇夏洛特），跑不起来就只是个超级兵，最怕被"停马"',
    weaknessEn: 'Fears chain-CC leg-break (Source Child/Lian Pin/Xia Lote), can\'t run means just a super minion, worst fear is "stopping the horse"'
  },

  // --- 吕布 ---
  lvbu: {
    weaknessZh: '怕高机动技能型拉扯（橘右京姬小满），怕空一技能没附魔就废了，怕被持续拉扯不打架',
    weaknessEn: 'Fears high-mobility skill-kiting (Tachibana Ukyo/Ji Xiaoman), useless if Skill 1 misses enchantment, fears sustained refusal-to-engage kiting'
  },

  // 注：橘右京共用上方 juyoujing_bl 条目

  // --- 姬小满 ---
  jixiaoman: {
    weaknessZh: '怕霸体和稳定换血（亚连夏侯惇），怕厚前排打不动，控制链被免伤化解就很亏',
    weaknessEn: 'Fears superarmor and steady trading (A Lian/Xiahou Dun), struggles vs thick frontlines, loses when CC gets nullified by DR'
  },

  // --- 亚连 ---
  alian: {
    weaknessZh: '怕远程风筝和多段位移（司空震吕布），半肉定位怕被持续拉扯消耗，需要进场才有作用',
    weaknessEn: 'Fears long-range kiting and multi-dashes (Si Kong Zhen/Lu Bu), semi-tank fears sustained poke kiting, needs engagement for effect'
  },

  // --- 司空震（边）---
  sikongzhen: {
    weaknessZh: '怕锁头硬控（张良东皇），被点名就动不了无法发挥风筝优势，怕被按住一套带走',
    weaknessEn: 'Fears point-click lockdown (Zhang Liang/Dong Huang), can\'t move when pinned losing kiting advantage, fears being burst down when held'
  },

  // --- 达摩 ---
  damo: {
    weaknessZh: '怕真伤厚前排和被拉长战线（夏侯惇吕布芈月老夫子），很吃地形和切入点，上墙失败就亏',
    weaknessEn: 'Fears true damage thick frontlines and extended fights (Xiahou Dun/Lu Bu/Mi Yue/Lao Fu Zi), terrain and entry-point dependent, fails if wall-slam misses'
  },

  // --- 项羽 ---
  xiangyu: {
    weaknessZh: '怕真伤和持续法伤及拉扯（吕布貂蝉马可波罗芈月），怕持续拆坦，霸体也不是完全无敌',
    weaknessEn: 'Fears true damage magic DoT and kiting (Lu Bu/Diao Chan/Marco Polo/Mi Yue), fears sustained tank-breaking, superarmor isn\'t fully invincible'
  },

  // --- 程咬金 ---
  chengyaojin: {
    weaknessZh: '怕真伤和持续法伤及强留人（吕布梦奇貂蝉芈月），怕打不出带线价值，回血被克制就很惨',
    weaknessEn: 'Fears true damage magic DoT and retention (Lu Bu/Meng Qi/Diao Chan/Mi Yue), fears failing split-push value, miserable when healing countered'
  },

  // --- 杨戬 ---
  yangjian: {
    weaknessZh: '怕更稳的六边形战坦和真伤（夏侯惇吕布），后期站场一般怕被持续消耗，狗咬标记可以被躲',
    weaknessEn: 'Fears steadier well-rounded tanks and true damage (Xiahou Dun/Lu Bu), mediocre late-game presence vs sustained consumption, dog-mark can be dodged'
  },

  // --- 雅典娜（边）---
  yadianna: {
    weaknessZh: '怕真伤和锁头单挑（老夫吕布夏侯惇），逆风发育差怕被针对，献祭流也怕被多人包夹',
    weaknessEn: 'Fears true damage lockdown duels (Lao Fu Zi/Lu Bu/Xiahou Dun), bad behind-development fears targeting, sacrifice style also fears ganks'
  },

  // --- 哪吒（边）---
  nezha: {
    weaknessZh: '怕落地被控死和真伤战边（张良东皇吕布夏侯惇），单线压制一般，飞过去回不来',
    weaknessEn: 'Fears landing-cc-death and true-damage fighters (Zhang Liang/Dong Huang/Lu Bu/Xiahou Dun), mediocre lane pressure, can\'t return after flying'
  },

  // --- 曹操 ---
  caocao: {
    weaknessZh: '怕真伤和链子锁人及持续拉扯（吕布老夫子芈月貂蝉），怕被拉长且打不死，大招CD时较弱',
    weaknessEn: 'Fears true damage bind-lock and sustained kiting (Lu Bu/Lao Fu Zi/Mi Yue/Diao Chan), fears extended unwinnable fights, weaker during ult CD'
  },

  // --- 钟无艳 ---
  zhongwuyan: {
    weaknessZh: '怕灵活拉扯和被动不稳定（芈月花木兰夏侯惇老夫子），吃脸吃先手机制，石化概率看脸',
    weaknessEn: 'Fears flexible kiting and unstable passive (Mi Yue/Hua Mulan/Xiahou Dun/Lao Fu Zi), face-dependent initiation, petrification is RNG-based'
  },

  // --- 李信 ---
  lixin: {
    weaknessZh: '怕稳定换血和持续压制（夏侯惇芈月花木兰吕布），光信怕贴脸暗信怕被控，双形态都有明显弱点',
    weaknessEn: 'Fears steady trading and sustained pressure (Xiahou Dun/Mi Yue/Hua Mulan/Lu Bu), Light form fears close-range Dark form fears CC, both forms have clear weaknesses'
  },

  // --- 赵怀真 ---
  zhaohuaizhen: {
    weaknessZh: '怕真伤和持续法伤（吕布貂蝉夏侯惇花木兰），化劲吸收有上限，怕真伤拆坦',
    weaknessEn: 'Fears true damage and magic DoT (Lu Bu/Diao Chan/Xiahou Dun/Hua Mulan), absorption has upper limit, fears true damage tank-breaking'
  },

  // --- 蚩奼 ---
  chicha: {
    weaknessZh: '怕真伤和更厚站场（吕布夏侯惇老夫子芈月），新战边怕被拖入标准战边对线公式，怕被熟悉机制的反制',
    weaknessEn: 'Fears true damage and thicker presence (Lu Bu/Xiahou Dun/Lao Fu Zi/Mi Yue), new fighter fears standard lane-match formula, fears counterplay from familiar mechanics'
  },

  // --- 大司命 ---
  dasiming: {
    weaknessZh: '怕锁头控制和真伤站场（东皇张良吕布夏侯惇），第一时间被按住就废，进场需要找好时机',
    weaknessEn: 'Fears lockdown CC and true-damage presence (Dong Huang/Zhang Liang/Lu Bu/Xiahou Dun), useless if pinned immediately, needs good timing for engagement'
  },

  // --- 影 ---
  ying2: {
    weaknessZh: '怕真伤和定点控制（吕布东皇张良夏侯惇），高机动也怕硬控，容错不算特别高',
    weaknessEn: 'Fears true damage and pinpoint CC (Lu Bu/Dong Huang/Zhang Liang/Xiahou Dun), high mobility still fears hard CC, not exceptionally high fault tolerance'
  },

  // 注：云缨共用上方 yunying 条目

  // --- 刘邦 ---
  liubang: {
    weaknessZh: '怕真伤和持续法伤及拆坦（吕布貂蝉芈月马可波罗），单线压制弱怕被单抓，大招交了就回不来',
    weaknessEn: 'Fears true damage magic DoT and tank-breaking (Lu Bu/Diao Chan/Mi Yue/Marco Polo), weak lane pressure and fears 1v1, can\'t return after ult used'
  },

  // --- 廉颇（边）---
  // 注：共用上方 lianpin 条目

  // --- 白起 ---
  baiqi: {
    weaknessZh: '怕持续拉扯和真伤（吕布貂蝉芈月），怕空大后真空期长，回血需要时间堆叠',
    weaknessEn: 'Fears sustained kiting and true damage (Lu Bu/Diao Chan/Mi Yue), long vacuum after whiffed ult, heal needs time to stack'
  },

  // --- 孙策（边）---
  sunce: {
    weaknessZh: '怕解控和反手硬辅（庄周张飞廉颇东皇牛魔），船开空就很伤节奏，怕船被挡或被打下来',
    weaknessEn: 'Fears cleanse and counter-hard-support (Zhuang Zhou/Zhang Fei/Lian Pin/Dong Huang/Niu Mo), missed ship hurts tempo, fears ship being blocked or shot down'
  },

  // --- 源流之子（边）---
  yuanliuzhizi: {
    weaknessZh: '怕真伤和更厚站场（吕布夏侯惇），打真伤战边会被拆，作为新英雄怕被研究透',
    weaknessEn: 'Fears true damage and thicker presence (Lu Bu/Xiahou Dun), gets dismantled by true-damage fighters, as new hero fears being thoroughly studied'
  },

};

export type SupportedLanguage = 'zh' | 'en' | 'ja' | 'ko' | 'zh-TW' | 'es' | 'fr' | 'de' | 'pt' | 'ru' | 'it';

export const fallbackMessages: Record<SupportedLanguage, string> = {
  zh: '存在克制关系',
  en: 'Counter relationship exists',
  ja: '相克関係があります',
  ko: '상성이 있습니다',
  'zh-TW': '存在剋制關係',
  es: 'Relación de contra existe',
  fr: 'Relation de contre existe',
  de: 'Gegner-Beziehung existiert',
  pt: 'Relação de contra existe',
  ru: 'Отношение контра существует',
  it: 'Relazione contro esiste',
};

export function getCounterReason(sourceId: string, targetId: string, language: SupportedLanguage): string {
  const sourceAbility = heroCounterAbilities[sourceId];
  const targetWeakness = heroWeaknesses[targetId];

  if (!sourceAbility || !targetWeakness) {
    return fallbackMessages[language];
  }

  const abilityZh = sourceAbility.abilityZh;
  const abilityEn = sourceAbility.abilityEn;
  const weaknessZh = targetWeakness.weaknessZh;
  const weaknessEn = targetWeakness.weaknessEn;

  switch (language) {
    case 'zh':
      return `${abilityZh} → ${weaknessZh}`;
    case 'zh-TW':
      return `${abilityZh} → ${weaknessZh}`;
    default:
      return `${abilityEn} → ${weaknessEn}`;
  }
}
