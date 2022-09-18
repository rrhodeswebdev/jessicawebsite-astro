/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
	content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
	theme: {
		extend: {
			colors: {
				primary: "#2c3639",
				secondary: "#966844",
				accent: "#3f4e4f",
				shade: "#dcd7c9",
				lightGray: "#c2c8c6",
				lightWhite: "#f6f5f1",
			},
			height: {
				fs: "750px",
			},
		},
		fontFamily: {
			sans: ["Lato", ...defaultTheme.fontFamily.sans],
			serif: [...defaultTheme.fontFamily.serif],
			mono: [...defaultTheme.fontFamily.mono],
		},
	},
	plugins: [],
};
