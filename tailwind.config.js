/** @type {import('tailwindcss').Config} */
module.exports = {
	// This content key lets tailwind know which files it needs to take note of
	content: [
		'./layout/*.liquid',
		'./sections/*.liquid',
		'./snippets/*.liquid',
		'./templates/customers/*.liquid',
		'./templates/*.liquid'
	],
	theme: {
		extend: {}
	},
	plugins: []
}
