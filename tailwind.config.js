module.exports = {
	mode: "jit",
	purge: ["./public/**/*.html"],
	darkMode: "media", // false or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				gold: "#D2AC4A",
				"gold-light": "#FFD700",
				"logo-pink": "#FF0F7B",
				"logo-orange": "#F89B29",
			},
		},
		fontFamily: {
			body: '"Roboto", Arial, sans-serif',
			logo: "Roboto, Arial, sans-serif",
			montserrat: "Montserrat, Arial, sans-serif",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
