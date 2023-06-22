(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{282:function(a,s,e){"use strict";e.r(s);var t=e(14),n=Object(t.a)({},(function(){var a=this,s=a._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h1",{attrs:{id:"apt-备忘清单"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apt-备忘清单"}},[a._v("#")]),a._v(" APT 备忘清单")]),a._v(" "),s("p",[a._v("这个 APT 快速参考备忘单显示了它的常用命令使用清单。")]),a._v(" "),s("h2",{attrs:{id:"apt-清单查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apt-清单查询"}},[a._v("#")]),a._v(" APT 清单查询")]),a._v(" "),s("h3",{attrs:{id:"介绍"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#介绍"}},[a._v("#")]),a._v(" 介绍")]),a._v(" "),s("p",[a._v("APT（"),s("code",[a._v("A")]),a._v("dvanced "),s("code",[a._v("P")]),a._v("ackaging "),s("code",[a._v("T")]),a._v("ools）是"),s("code",[a._v("Debian")]),a._v("及其派生的"),s("code",[a._v("Linux")]),a._v("软件包管理器。APT可以自动下载，配置，安装二进制或者源代码格式的软件包，因此简化了Unix系统上管理软件的过程。APT最早被设计成"),s("code",[a._v("dpkg的前端")]),a._v("，用来处理deb格式的软件包。现在经过"),s("code",[a._v("APT-RPM")]),a._v("组织修改，APT已经可以安装在支持RPM的系统管理RPM包。")]),a._v(" "),s("p",[a._v("它结合了apt-get和apt-cache工具中最常用的命令以及选项与默认值。"),s("code",[a._v("apt")]),a._v("命令必须以具有"),s("code",[a._v("sudo")]),a._v("权限的用户运行。")]),a._v(" "),s("p",[a._v("命令语法格式")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("[")]),a._v(" OPTIONS "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[a._v("]")]),a._v(" COMMAND\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("hr"),a._v(" "),s("p",[a._v("相关参考文献")]),a._v(" "),s("ul",[s("li",[s("a",{attrs:{href:"https://manpages.debian.org/unstable/apt/apt.8.en.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("APT（8） 官方网站"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://manpages.debian.org/unstable/apt/apt.conf.5.en.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("apt.conf(5) 官方文档"),s("OutboundLink")],1)]),a._v(" "),s("li",[s("a",{attrs:{href:"https://manpages.debian.org/unstable/apt/sources.list.5.en.html",target:"_blank",rel:"noopener noreferrer"}},[a._v("sources.list(5) 官方文档"),s("OutboundLink")],1)])]),a._v(" "),s("h3",{attrs:{id:"命令查询"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令查询"}},[a._v("#")]),a._v(" 命令查询")]),a._v(" "),s("p",[a._v("子命令描述和任务，显示 apt 命令和选项。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("-h")]),a._v(" or "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--help")]),a._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[a._v("# 或")]),a._v("\n$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" \n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br"),s("span",{staticClass:"line-number"},[a._v("2")]),s("br"),s("span",{staticClass:"line-number"},[a._v("3")]),s("br")])]),s("p",[a._v("查看指令用法")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("man")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"update"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#update"}},[a._v("#")]),a._v(" update")]),a._v(" "),s("p",[a._v("从APT存储库中获取最新索引数据。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" update\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("在升级或安装新软件包之前，建议始终先运行一次更新软件包索引。")]),a._v(" "),s("h3",{attrs:{id:"upgrade"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#upgrade"}},[a._v("#")]),a._v(" upgrade")]),a._v(" "),s("p",[a._v("将安装的软件包升级到最新版本，该命令不会升级那些已删除软件包的依赖。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" upgrade\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("升级单个软件包。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" upgrade package_name\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("升级整个系统，则会删除当前安装的软件包。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" full-upgrade\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"install"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#install"}},[a._v("#")]),a._v(" install")]),a._v(" "),s("p",[a._v("安装软件包。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" package_name\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("如果只想升级，不要安装")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("<")]),a._v("package_name"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v(">")]),a._v(" --only-upgrade\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),a._v(" "),s("p",[a._v("安装多个软件包，包名用空格分隔。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" package1 package2\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("安装本地deb文件，提供文件的完整路径。否则，apt命令将尝试从APT存储库中检索并安装软件包。\n"),s("code",[a._v("Deb是所有基于Debian的发行版使用的安装软件包格式")]),a._v("。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("install")]),a._v(" /full/path/file.deb\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"remove和purge"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remove和purge"}},[a._v("#")]),a._v(" remove和purge")]),a._v(" "),s("p",[a._v("要删除已安装的程序包，你可以使用apt子命令"),s("code",[a._v("remove")]),a._v("和"),s("code",[a._v("purge")]),a._v("。")]),a._v(" "),s("h4",{attrs:{id:"remove"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#remove"}},[a._v("#")]),a._v(" remove")]),a._v(" "),s("p",[a._v("remove子命令将卸载指定的软件包，"),s("code",[a._v("但可能会留下一些配置文件")]),a._v("。\n通过remove方式卸载的软件包可以通过重新安装软件包来恢复，因为个人配置文件还在本地。")]),a._v(" "),s("p",[a._v("卸载指定的软件包")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" remove package_name\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("指定多个软件包，以空格分隔")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" remove package1 package2\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h4",{attrs:{id:"purge"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#purge"}},[a._v("#")]),a._v(" purge")]),a._v(" "),s("p",[a._v("purge子命令将卸载指定的软件包和配置文件。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" purge package_name\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"autoremove自动删除依赖"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#autoremove自动删除依赖"}},[a._v("#")]),a._v(" autoremove自动删除依赖")]),a._v(" "),s("p",[a._v("用于删除自动安装的包，这些包都是为了满足其他包的依赖关系，现在不再需要这些包，因为依赖关系已更改或者同时删除了需要它们的包。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" autoremove\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"list"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#list"}},[a._v("#")]),a._v(" list")]),a._v(" "),s("p",[a._v("打印所有软件包的列表，包括软件包的版本和结构的信息。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" list\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("要确定是否安装了指定的软件包，可以使用grep命令过滤输出。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" list "),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("grep")]),a._v(" package_name\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("仅列出已安装的软件包。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" list "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--installed")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("获取可升级软件包的列表。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" list "),s("span",{pre:!0,attrs:{class:"token parameter variable"}},[a._v("--upgradeable")]),a._v("\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"搜索查找软件包详细信息"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#搜索查找软件包详细信息"}},[a._v("#")]),a._v(" 搜索查找软件包详细信息")]),a._v(" "),s("h4",{attrs:{id:"search"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#search"}},[a._v("#")]),a._v(" search")]),a._v(" "),s("p",[a._v("在可用软件源列表中搜索指定的软件包。如果找到该软件包，则将返回名称与搜索词匹配的软件包。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" search package_name\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h4",{attrs:{id:"show"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#show"}},[a._v("#")]),a._v(" show")]),a._v(" "),s("p",[a._v("显示有关给定软件包的信息，包括其依赖项、安装、下载大小、软件包可用的来源、软件包内容的描述等。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" show package_name\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("h3",{attrs:{id:"edit-sources-快速换源"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#edit-sources-快速换源"}},[a._v("#")]),a._v(" edit-sources 快速换源")]),a._v(" "),s("p",[a._v("允许您在首选的文本编辑器中编辑"),s("code",[a._v("sources.list(5)")]),a._v(" 文件，同时还提供基本的健全性检查。")]),a._v(" "),s("p",[a._v("首次换源可以使用"),s("code",[a._v("edit-sources")])]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" show edit-sources\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("换源后更新一下软件包索引。")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("apt")]),a._v(" update\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])]),s("p",[a._v("之后可以使用"),s("code",[a._v("select-editor")]),a._v("更换默认编辑器")]),a._v(" "),s("div",{staticClass:"language-bash line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("$ "),s("span",{pre:!0,attrs:{class:"token function"}},[a._v("sudo")]),a._v(" select-editor\n")])]),a._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[a._v("1")]),s("br")])])])}),[],!1,null,null,null);s.default=n.exports}}]);