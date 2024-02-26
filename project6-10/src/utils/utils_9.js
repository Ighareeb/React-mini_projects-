//HELPER FUNCTION convert single color component to hexadecimal string - if string only one number the starts with 0 to make each two numbers
function componentToHex(c) {
	var hex = c.toString(16); //0-9,A-F
	return hex.length === 1 ? '0' + hex : hex;
}
//convert rgc components to hex string eg. rgb(255, 255, 255) ---> #ffffff
export default function rgbToHex(r, g, b) {
	return `#${componentToHex(r)}${componentToHex(g)}${componentToHex(b)}`;
}
