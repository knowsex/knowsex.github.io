import * as OpenCC from "opencc-js";

const symbolsConvertionDict = [
  ["“", "「"],
  ["”", "」"],
  ["‘", "『"],
  ["’", "』"],
];

// 自定义转换组
const customDict = [
  // 生物学名词
  ["艾滋病", "愛滋病"],
  ["获得性免疫缺陷综合征", "後天免疫缺乏症候群"],
  ["人类免疫缺陷病毒", "人類免疫缺乏病毒"],
  ["尖锐湿疣", "尖銳濕疣"],
  ["人乳头状瘤病毒", "人類乳突病毒"],
  ["综合征", "症候群"],
  ["卵泡", "濾泡"],
  ["巴氏涂片", "柏氏抹片"],
  ["涂片", "抹片"],
  ["双合诊检查", "雙手觸診"],

  ["卫生巾", "衛生棉"],
  ["安全套", "保險套"],

  // 信息技术名词
  ["社交媒体", "社群媒體"],
  ["互联网", "網路"],

  // 单位
  ["厘米", "公分"],

  // 译名
  ["猫和老鼠", "湯姆貓與傑利鼠"],
];

// 保留的词汇，不转换惯用词，此列表中的用字必须是 OpenCC 标准
const preservedIdiom = [
  "字節跳動",
  "醫學聲明",
  "術語在線",
  "[J].醫學信息",
  "類型",
  "’m",
  "’t",
  "’d",
  "’s",
  "’ve",
  "s’",
];

export const convertToZH_TW = OpenCC.ConverterFactory(
  [customDict],
  OpenCC.Locale.from.cn, // 大陆 => OpenCC 标准
  OpenCC.Locale.to.twp
    .map(
      (entries: string) =>
        `${preservedIdiom
          .map((entry) => `${entry} ${entry}`)
          .join("|")}|${entries}`,
    )
    .concat(symbolsConvertionDict.map((entry) => `${entry[0]} ${entry[1]}`)), // OpenCC 标准 => 台湾+自订
);
