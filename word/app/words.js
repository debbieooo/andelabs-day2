//Write a function called *words* that takes in a string argument and counts the occurrences of each word in the string.
//The function should return a JSON object showing the words identified, and their occurrences.
//For example for the input `olly olly in come free`, the output should be
//olly: 2
//in: 1
//come: 1
//free: 1



function words(string){
	var newString = string.replace(/\s+/g," "), words = newString.split(' '),
	newArray ={},
	word, i;

	console.log(newString);


	for(i=0; i<words.length; i++){


		word = words[i];

		if(newArray[word] == undefined){

			newArray[word]=newArray[word]||0;
			newArray[word]++;

		}

		else if(typeof newArray != 'string'){
			newArray[word] = 1;
		}

		else{

			newArray[word]=newArray[word]||0;

			newArray[word]++;

		}


		
	}

	var json = JSON.stringify(newArray);

	return json;



}

module.exports.words=words;
