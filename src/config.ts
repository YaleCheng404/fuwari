import type {
	ExpressiveCodeConfig,
	LicenseConfig,
	NavBarConfig,
	ProfileConfig,
	SiteConfig,
} from "./types/config";
import { LinkPreset } from "./types/config";

export const siteConfig: SiteConfig = {
	title: "Fuwari",
	subtitle: "Demo Site",
	lang: "zh_CN", // Language code, e.g. 'en', 'zh_CN', 'ja', etc.
	themeColor: {
		hue: 250, // 主题颜色的默认色相，范围 0~360。例如 红色: 0，青色: 200，蓝绿色: 250，粉色: 345
		fixed: false, // 隐藏主题颜色选择器（让访客无法更改）
	},
	banner: {
		enable: true,
		src: "assets/images/75102882_p0.jpg", // 相对于 /src 目录的路径。如果以 '/' 开头，则相对于 /public 目录
		position: "center", // 相当于 CSS 的 object-position，仅支持 'top'、'center'、'bottom'，默认 'center'
		credit: {
			enable: true, // 是否显示横幅图片的版权/出处文字
			text: "3 | _LM7_ #pixiv", // 要显示的版权/出处文字
			url: "https://www.pixiv.net/artworks/75102882", // （可选）指向原作或作者页面的 URL 链接
		},
	},
	toc: {
		enable: true, // 在文章右侧显示目录
		depth: 2, // 目录显示的最大标题层级，范围 1~3
	},
	favicon: [
		// 如果此数组为空，则使用默认的 favicon
		// {
		//   src: '/favicon/icon.png',    // favicon 路径，相对于 /public 目录
		//   theme: 'light',              // （可选）'light' 或 'dark'，仅当你有浅色/深色两套 favicon 时设置
		//   sizes: '32x32',              // （可选）favicon 尺寸，仅当你有多种尺寸时设置
		// }
	],
};

export const navBarConfig: NavBarConfig = {
	links: [
		LinkPreset.Home,
		LinkPreset.Archive,
		LinkPreset.About,
		{
			name: "GitHub",
			url: "https://github.com/YaleCheng404/fuwari", // 内部链接不要包含基础路径（base path），系统会自动添加
			external: true, // 显示外部链接图标，并在新标签页中打开
		},
	],
};

export const profileConfig: ProfileConfig = {
	avatar: "assets/images/anno-avatar.jpg", // 相对于 /src 目录的路径。如果以 '/' 开头，则相对于 /public 目录
	name: "Yale Cheng",
	bio: "杂食爱好者，喜欢探索新事物",
	links: [
		{
			name: "Twitter",
			icon: "fa6-brands:twitter", // 图标代码可在 https://icones.js.org/ 查询
			// 如果尚未包含该图标集，需要安装对应的图标集
			// 命令：`pnpm add @iconify-json/<图标集名称>`
			url: "https://twitter.com",
		},
		{
			name: "Steam",
			icon: "fa6-brands:steam",
			url: "https://store.steampowered.com",
		},
		{
			name: "GitHub",
			icon: "fa6-brands:github",
			url: "https://github.com/YaleCheng404/fuwari",
		},
	],
};

export const licenseConfig: LicenseConfig = {
	enable: true,
	name: "CC BY-NC-SA 4.0",
	url: "https://creativecommons.org/licenses/by-nc-sa/4.0/",
};

export const expressiveCodeConfig: ExpressiveCodeConfig = {
	// 注意：部分样式（例如背景颜色）在 astro.config.mjs 文件中被覆盖
	// 请选择深色主题，因为当前博客主题仅支持深色背景
	theme: "github-dark",
};
