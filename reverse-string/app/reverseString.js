//Write a function *reverseString* that takes in a string argument and returns the reverse of the string provided.
//If the reverse of the string is the same as the original string, as in the case of palindromes, return true instead.


function reverseString(string){

	var newString = '';

	for (var i = string.length -1; i >= 0; i--){
		newString += string[i];
	}


	if (newString ===string){
		return true;
	}

	else{

		return newString;
	}
}

module.exports.reverseString=reverseString;