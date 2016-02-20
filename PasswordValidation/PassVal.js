/*
	@AUTHOR: JOHN RUSSELL
	@EMAIL: j362r647@ku.edu
	@DATE: 19 FEB 2016
	@FILE: PassVal.js
	@PURPOSE: Coordinates with PasswordValidator.html to check if entries are the same
			  and at least 8 characters.
*/

var validate=function()
{
	//Get the submission box entries
	var firstPass=document.getElementById("passOne");
	var secondPass=document.getElementById("passTwo");
	
	var happyDog=document.getElementById("soHappy");
	//This line re-hides the dog if user attempts to do more password things after initial success.
	happyDog.style.visibility="hidden";
	
	//compares entries and checks length.
	if(firstPass.value==secondPass.value && secondPass.value.length>=8 && firstPass.value.length>=8)
	{
		alert("You did it! Hooray! Have a happy retriever.");
		//Display dog
		happyDog.style.visibility="visible";
	}
	//This one is a little redundant, as if they're the same it only needs to check the length of one.
	else if (firstPass.value==secondPass.value &&(firstPass.value.length<8||secondPass.value.length<8))
	{
		alert("Password must be at least 8 characters.");
	}
	else if(firstPass.value!=secondPass.value)
	{
		alert("Passwords do not match.");
	}
	
}