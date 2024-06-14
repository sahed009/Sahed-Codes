/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ["./src/**/*.{html,js,jsx}"],
	theme: {
		extend: {
			fontFamily: {
                Dosis : ['"Dosis", sans-serif',],
            },
			animation: {
				blob: "blob 5s infinite",
				animate: "animate 6s linear infinite",
			},
			keyframes: {
				blob: {
					"0%": {
						transform: "translate(0px, 0px) scale(1)",
					},
					"33%": {
						transform: "translate(30px, -50px) scale(1.3)",
					},
					"66%": {
						transform: "translate(-20px, 20px) scale(0.8)",
					},
					"100%": {
						transform: "tranlate(0px, 0px) scale(1)",
					},
				},
				animate: {
					"0%,10%,100%": {
						width: "0%",
					},
					"70%,80%,90%": {
						width: "100%",
					},
				},
			},
		},
	},
	plugins: [],
};
