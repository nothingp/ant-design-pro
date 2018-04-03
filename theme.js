//  根据UI的前端规范大概自定义了antd的主题
//  antd 默认配置文件 https://github.com/ant-design/ant-design/blob/master/components/style/themes/default.less#L51
//  antd 规范 https://ant.design/docs/spec/introduce-cn
//  保存后最好跑一次build



module.exports = () => {
    const $primary = "#ffc135";
    const $normal = "#e4e4e4";
    const $success = "#66cc33";
    const $highlight = "#ff0000";
    const $link = "#3399cc";
    const $error = "#e54545";
    const $background = "#f2f2f2";
    const $text = "#333";
    const $textHelp = "#666";
    const $textDisable = "#999";
    const $borderColor = "#b3b3b3";
    const $fontSize = "14px";
    const $broderFontWight = 400;
    const $btnHeight = "40px";
    const $inputHeight = "40px";

    return {

        // 颜色定义
        "@primary-color": $primary, /* 主要色[黄] */
        "@success-color": $success, /* 成功色[绿] */

        "@error-color": $error, /* 错误色[红] */
        "@highlight-color": $highlight, /* 高亮提示色[红] */
        "@warning-color": $error, /* 警告色 跟ui确认了下暂缺，以后有用上再补，先同错误色一样 */
        "@normal-color": $normal, /* 普通的灰色 */

        // 背景色
        "@background-color-base": $background,

        // 文字色，对于antd的参数设置不太明确，可能实际还得调整
        "@heading-color": $text, /* 主要文字 */
        "@text-color": $textHelp, /* 次要文字 */
        "@text-color-secondary": $textDisable, /* 辅助文字 */

        // 文字大小,跟UI确认了默认12,14,16,24,32三种,其中16为默认大小
        "@font-size-base": $fontSize,
        "@font-size-lg": "@font-size-base + 6px",

        // 链接颜色
        "@link-color": $link, /* 蓝色 */

        // 通用的边框颜色
        "@border-color-base": $borderColor,
        "@btn-font-weight": $broderFontWight,

        // 按钮高度，跟ui确认了一次 默认统一40高度，宽度约定三个通用的 120,160,180px
        "@btn-circle-size": $btnHeight,
        "@btn-circle-size-lg": $btnHeight,
        "@btn-circle-size-sm": $btnHeight,

        // 输入框高度，跟ui确认了一次 默认统一40高度
        "@input-height-base": $inputHeight,
        "@input-height-lg": $inputHeight,
        "@input-height-sm": $inputHeight,

    };
};
