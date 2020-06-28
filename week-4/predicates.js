 	/* 
 	; Title: Discussion Board 4.1 - Arrays
 	; Author: Arlix Sorto
 	; Date: 6/16/2020
 	; Modified By:
 	; Description: A program with a few of errors.
 	 modified by: Rhiannon Kimberlin
 	;===========================================
 	*/
 	 
 	 
 	//FIXME: Should output a list of colors. 
 	//changed {} to [] also while not an error, I fixed some spacing between the words
 	var myColors = ["Black", "Blue", "Brown", "Gray", "Green", "Orange", "Purple", "Red", "White", "Yellow"];
 	 
 	//Validate an array and then loop through an array.
 	function displayColors(colors){
 	if (Array.isArray(colors)){
  //removed () after colors.length
 	for(var i = 0; i < colors.length; i++){
 	//changed {i} to [i]
  console.log(colors[i]);
 	}
 	}
 	}
 	 
 	//Calls displayColors function
 	displayColors(myColors);