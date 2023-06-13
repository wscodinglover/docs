(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{288:function(t,v,_){"use strict";_.r(v);var a=_(14),r=Object(a.a)({},(function(){var t=this,v=t._self._c;return v("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[v("h1",{attrs:{id:"cron-备忘清单"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#cron-备忘清单"}},[t._v("#")]),t._v(" Cron 备忘清单")]),t._v(" "),v("p",[v("a",{attrs:{href:"https://en.wikipedia.org/wiki/Cron",target:"_blank",rel:"noopener noreferrer"}},[t._v("Cron"),v("OutboundLink")],1),t._v(" 最适合安排重复性任务。 可以使用关联的 at 实用程序来完成一次性任务的调度。")]),t._v(" "),v("h2",{attrs:{id:"crontab-格式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#crontab-格式"}},[t._v("#")]),t._v(" Crontab 格式")]),t._v(" "),v("h3",{attrs:{id:"格式"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#格式"}},[t._v("#")]),t._v(" 格式")]),t._v(" "),v("div",{staticClass:"language- line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-text"}},[v("code",[t._v("Min  Hour Day  Mon  Weekday\n分钟  小时  天   月   周\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br")])]),v("hr"),t._v(" "),v("div",{staticClass:"language-bash line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[t._v("*    *    *    *    *   "),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("要执行的命令"),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n┬    ┬    ┬    ┬    ┬\n│    │    │    │    └─  星期几         "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("周日 "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("6")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("星期六"),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n│    │    │    └──────  月            "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("12")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n│    │    └───────────  月份中的某天    "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("31")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n│    └────────────────  小时           "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("23")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n└─────────────────────  分钟           "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("..")]),v("span",{pre:!0,attrs:{class:"token number"}},[t._v("59")]),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br"),v("span",{staticClass:"line-number"},[t._v("2")]),v("br"),v("span",{staticClass:"line-number"},[t._v("3")]),v("br"),v("span",{staticClass:"line-number"},[t._v("4")]),v("br"),v("span",{staticClass:"line-number"},[t._v("5")]),v("br"),v("span",{staticClass:"line-number"},[t._v("6")]),v("br"),v("span",{staticClass:"line-number"},[t._v("7")]),v("br")])]),v("hr"),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("字段")]),t._v(" "),v("th",[t._v("范围")]),t._v(" "),v("th",[t._v("特殊字符")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("分钟 Minute")]),t._v(" "),v("td",[t._v("0 - 59")]),t._v(" "),v("td",[v("kbd",[t._v(",")]),t._v(" "),v("kbd",[t._v("-")]),t._v(" "),v("kbd",[t._v("*")]),t._v(" "),v("kbd",[t._v("/")])])]),t._v(" "),v("tr",[v("td",[t._v("小时 Hour")]),t._v(" "),v("td",[t._v("0 - 23")]),t._v(" "),v("td",[v("kbd",[t._v(",")]),t._v(" "),v("kbd",[t._v("-")]),t._v(" "),v("kbd",[t._v("*")]),t._v(" "),v("kbd",[t._v("/")])])]),t._v(" "),v("tr",[v("td",[t._v("月份中的某天")]),t._v(" "),v("td",[t._v("1 - 31")]),t._v(" "),v("td",[v("kbd",[t._v(",")]),t._v(" "),v("kbd",[t._v("-")]),t._v(" "),v("kbd",[t._v("*")]),t._v(" "),v("kbd",[t._v("?")]),t._v(" "),v("kbd",[t._v("/")]),t._v(" "),v("kbd",[t._v("L")]),t._v(" "),v("kbd",[t._v("W")])])]),t._v(" "),v("tr",[v("td",[t._v("月 Month")]),t._v(" "),v("td",[t._v("1 - 12")]),t._v(" "),v("td",[v("kbd",[t._v(",")]),t._v(" "),v("kbd",[t._v("-")]),t._v(" "),v("kbd",[t._v("*")]),t._v(" "),v("kbd",[t._v("/")])])]),t._v(" "),v("tr",[v("td",[t._v("星期几")]),t._v(" "),v("td",[t._v("0 - 6")]),t._v(" "),v("td",[v("kbd",[t._v(",")]),t._v(" "),v("kbd",[t._v("-")]),t._v(" "),v("kbd",[t._v("*")]),t._v(" "),v("kbd",[t._v("?")]),t._v(" "),v("kbd",[t._v("/")]),t._v(" "),v("kbd",[t._v("L")]),t._v(" "),v("kbd",[t._v("#")])])]),t._v(" "),v("tr",[v("td",[t._v("年 Year")]),t._v(" "),v("td",[t._v("1970–2099")]),t._v(" "),v("td",[v("kbd",[t._v(",")]),t._v(" "),v("kbd",[t._v("-")])])])])]),t._v(" "),v("h3",{attrs:{id:"示例"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#示例"}},[t._v("#")]),t._v(" 示例")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("Example")]),t._v(" "),v("th",[t._v("Description")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("*/15 * * * *")])]),t._v(" "),v("td",[t._v("每 15 分钟")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("0 * * * *")])]),t._v(" "),v("td",[t._v("每隔一小时")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("0 */2 * * *")])]),t._v(" "),v("td",[t._v("每 2 小时")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("15 2 * * *")])]),t._v(" "),v("td",[t._v("每天凌晨 2 点 15 分")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("15 2 * * ?")])]),t._v(" "),v("td",[t._v("每天凌晨 2 点 15 分")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("10 9 * * 5")])]),t._v(" "),v("td",[t._v("每周五上午 9:10")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("0 0 * * 0")])]),t._v(" "),v("td",[t._v("每个星期日的午夜")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("15 2 * * 1L")])]),t._v(" "),v("td",[t._v("每月最后一个星期一凌晨 2 点 15 分")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("15 0 * * 4#2")])]),t._v(" "),v("td",[t._v("每个月的第二个星期四早上 00:15")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("0 0 0 1 * *")])]),t._v(" "),v("td",[t._v("每个月的 1 日(每月)")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("0 0 0 1 1 *")])]),t._v(" "),v("td",[t._v("每年 1 月 1 日(每年)")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("@reboot")])]),t._v(" "),v("td",[t._v("每次重启 "),v("em",[t._v("(非标准)")])])])])]),t._v(" "),v("h3",{attrs:{id:"特殊字符串"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#特殊字符串"}},[t._v("#")]),t._v(" 特殊字符串")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("特殊字符串")]),t._v(" "),v("th",[t._v("意义")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[t._v("@reboot")]),t._v(" "),v("td",[t._v("运行一次，在系统启动时 "),v("em",[t._v("(非标准)")])])]),t._v(" "),v("tr",[v("td",[t._v("@yearly")]),t._v(" "),v("td",[t._v("每年运行一次，“0 0 1 1 *” "),v("em",[t._v("(非标准)")])])]),t._v(" "),v("tr",[v("td",[t._v("@annually")]),t._v(" "),v("td",[t._v("(与@yearly 相同)"),v("em",[t._v("(非标准)")])])]),t._v(" "),v("tr",[v("td",[t._v("@monthly")]),t._v(" "),v("td",[t._v("每月运行一次，“0 0 1 * *” "),v("em",[t._v("(非标准)")])])]),t._v(" "),v("tr",[v("td",[t._v("@weekly")]),t._v(" "),v("td",[t._v("每周运行一次，“0 0 * * 0” "),v("em",[t._v("(非标准)")])])]),t._v(" "),v("tr",[v("td",[t._v("@daily")]),t._v(" "),v("td",[t._v("每天运行一次，“0 0 * * *” "),v("em",[t._v("(非标准)")])])]),t._v(" "),v("tr",[v("td",[t._v("@midnight")]),t._v(" "),v("td",[t._v("(与@daily 相同)"),v("em",[t._v("(非标准)")])])]),t._v(" "),v("tr",[v("td",[t._v("@hourly")]),t._v(" "),v("td",[t._v("每小时运行一次，“0 * * * *” "),v("em",[t._v("(非标准)")])])])])]),t._v(" "),v("h3",{attrs:{id:"crontab-命令"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#crontab-命令"}},[t._v("#")]),t._v(" Crontab 命令")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("-")]),t._v(" "),v("th",[t._v("-")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("crontab -e")])]),t._v(" "),v("td",[t._v("如果不存在，则编辑或创建一个 crontab 文件")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("crontab -l")])]),t._v(" "),v("td",[t._v("显示 crontab 文件")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("crontab -r")])]),t._v(" "),v("td",[t._v("删除 crontab 文件")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("crontab -v")])]),t._v(" "),v("td",[t._v("显示您上次编辑 crontab 文件的时间 "),v("em",[t._v("(非标准)")])])])])]),t._v(" "),v("p",[t._v("轻松添加任务")]),t._v(" "),v("div",{staticClass:"language-bash line-numbers-mode"},[v("pre",{pre:!0,attrs:{class:"language-bash"}},[v("code",[v("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("echo")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token string"}},[t._v('"@reboot echo hi"')]),t._v(" "),v("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),v("span",{pre:!0,attrs:{class:"token operator"}},[t._v("|")]),t._v(" "),v("span",{pre:!0,attrs:{class:"token function"}},[t._v("crontab")]),t._v("\n")])]),t._v(" "),v("div",{staticClass:"line-numbers-wrapper"},[v("span",{staticClass:"line-number"},[t._v("1")]),v("br")])]),v("h3",{attrs:{id:"特殊字符"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#特殊字符"}},[t._v("#")]),t._v(" 特殊字符")]),t._v(" "),v("table",[v("thead",[v("tr",[v("th",[t._v("特殊字符")]),t._v(" "),v("th",[t._v("说明")])])]),t._v(" "),v("tbody",[v("tr",[v("td",[v("code",[t._v("星号(*)")])]),t._v(" "),v("td",[t._v("匹配字段中的所有值或任何可能的值。")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("横杆(-)")])]),t._v(" "),v("td",[t._v("用于定义范围。例如：第 5 个字段(星期几)中的 1-5 每个工作日，即星期一到星期五")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("斜线 (/)")])]),t._v(" "),v("td",[t._v("第一个字段(分钟)/15 表示每十五分钟或范围的增量。")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("逗号(,)")])]),t._v(" "),v("td",[t._v("用于分隔项目。例如：第二个字段(小时)中的 2、6、8 在凌晨 2 点、早上 6 点和早上 8 点执行")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("L")])]),t._v(" "),v("td",[t._v("仅允许用于 "),v("code",[t._v("月份中的某天")]),t._v(" 或 "),v("code",[t._v("星期几")]),t._v(" 字段，"),v("code",[t._v("星期几")]),t._v(" 中的 "),v("code",[t._v("2L")]),t._v(" 表示每个月的最后一个星期二")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("井号 (#)")])]),t._v(" "),v("td",[t._v("仅允许用于 "),v("code",[t._v("星期几")]),t._v(" 字段，后面必须在 1 到 5 的范围内。例如，"),v("code",[t._v("4#1")]),t._v(" 表示给定月份的“第一个星期四”。")])]),t._v(" "),v("tr",[v("td",[v("code",[t._v("问号(?)")])]),t._v(" "),v("td",[t._v("可以代替“*”并允许用于月份和星期几。使用仅限于 cron 表达式中的 "),v("code",[t._v("月份中的某天")]),t._v(" 或 "),v("code",[t._v("星期几")]),t._v("。")])])])]),t._v(" "),v("h2",{attrs:{id:"另见"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#另见"}},[t._v("#")]),t._v(" 另见")]),t._v(" "),v("ul",[v("li",[v("a",{attrs:{href:"https://devhints.io/cron",target:"_blank",rel:"noopener noreferrer"}},[t._v("Devhints"),v("OutboundLink")],1),t._v(" "),v("em",[t._v("(devhints.io)")])]),t._v(" "),v("li",[v("a",{attrs:{href:"https://crontab-generator.org/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Crontab Generator"),v("OutboundLink")],1),t._v(" "),v("em",[t._v("(crontab-generator.org)")])]),t._v(" "),v("li",[v("a",{attrs:{href:"https://crontab.guru/",target:"_blank",rel:"noopener noreferrer"}},[t._v("Crontab guru"),v("OutboundLink")],1),t._v(" "),v("em",[t._v("(crontab.guru)")])])])])}),[],!1,null,null,null);v.default=r.exports}}]);