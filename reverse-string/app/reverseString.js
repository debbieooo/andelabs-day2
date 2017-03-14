//Write a function *reverseString* that takes in a string argument and returns the reverse of the string provided.
//If the reverse of the string is the same as the original string, as in the case of palindromes, return true instead.


function reverseString(string){

	var new ='';

	for (var i = sting.length -1; i>= 0; i--){
		new += string[i];
	}

	if (new ===string){
		return true;
	}

	else{

		return new;
	}
}

module.exports.reverseString=reverseString;