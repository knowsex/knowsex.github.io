import * as OpenCC from "opencc-js";

// 自定义转换组
const customDict = [
    ['“', '「'],
    ['”', '」'],
    ['‘', '『'],
    ['’', '』'],
];

export const convertToZH_TW = OpenCC.ConverterFactory(
    OpenCC.Locale.from.cn,                   // 大陆 => OpenCC 标准
    OpenCC.Locale.to.twp.concat([customDict]) // OpenCC 标准 => 台湾+自订
);
