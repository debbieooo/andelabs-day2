//Write a function called *words* that takes in a string argument and counts the occurrences of each word in the string.
//The function should return a JSON object showing the words identified, and their occurrences.
//For example for the input `olly olly in come free`, the output should be
//olly: 2
//in: 1
//come: 1
//free: 1



function words(arg){
	var words = arg.split(/\s+/);
	var newArray ={};
	var word = '';


	


	for(var i=0; i<words.length; i++){


		word = words[i];


		if(newArray[word] == undefined || typeof newArray[word] !='number'){

			newArray[word] = 1;

		}

		

		else{


			newArray[word]++;

		}



		
	}

	console.log(newArray);



	return newArray;



}

module.exports.words=words;
