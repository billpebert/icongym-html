/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./**/*.{html,js}"],
	theme: {
		fontFamily: {
			montserrat: "Montserrat, sans-serif",
		},
		container: {
			center: true,
			padding: {
				DEFAULT: "1rem",
				lg: "25px",
				xl: "50px",
			},
		},
		extend: {
			colors: {
				primary: "#76BC1E",
				secondary: "#242424",
				light: "#E9EDF5",
				lime: "#9BED34",
				dark: "#1F1F1F",
				grey: "#959595"
			},
		},
	},
	plugins: [],
};
