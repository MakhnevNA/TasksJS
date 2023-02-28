//1

let newStr = str[0].toUpperCase();


//2


function checkSpam(str) {
	let lowerStr = str.toLowerCase();

	return lowerStr.includes('viagra') || lowerStr.includes('xxx');
}

	alert( checkSpam('buy ViAgRA now') );


//3

function truncate(str, maxlength) {
	return (str.length > maxlength) ? str.slice(0, maxlength - 1) + '...' : str;

}


//4

function extractCurrencyValue(str) {
	return +str.slice(1);
}