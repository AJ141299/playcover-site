module.exports = {
	mode: "jit",
	purge: ["./public/**/*.html"],
	darkMode: "class", // false or 'media' or 'class'
	theme: {
		screens: {
			sm: "640px",
			// => @media (min-width: 640px) { ... }

			md: "768px",
			// => @media (min-width: 768px) { ... }

			lg: "1024px",
			// => @media (min-width: 1024px) { ... }

			xl: "1280px",
			// => @media (min-width: 1280px) { ... }

			"2xl": "1536px",
			// => @media (min-width: 1536px) { ... }

			"3xl": "1900px",
			// => @media (min-width: 1536px) { ... }
		},
		extend: {
			colors: {
				gold: "#D2AC4A",
				"gold-light": "#FFD700",
				"logo-pink": "#FF0066",
				"logo-purple": "#b634e9",
				"logo-purple-dark": "#9f2dcc",
				"logo-purple-darker": "#7f24a3",
				"body": "#171717",
				"nav-footer": "#141414",
			},
		},
		fontFamily: {
			sourceSansPro: "'Source Sans Pro', Arial, sans-serif",
			neon: "'Quicksand', cursive;",
		},
	},
	variants: {
		extend: {},
	},
	plugins: [],
};
