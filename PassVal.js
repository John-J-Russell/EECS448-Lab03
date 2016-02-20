var validate=function(/*does anything go here?*/ )
{
	//Compare the two entries
	//if same alert.whatever "good"
	//else "they're not the same, dummy"
	
	var firstPass=document.getElementById("passOne");
	var secondPass=document.getElementById("passTwo");
	
	var happyDog=document.getElementById("soHappy");
	happyDog.style.visibility="hidden";
	if(firstPass.value==secondPass.value && secondPass.value.length>=8 && firstPass.value.length>=8)
	{
		alert("You did it! Hooray! Have a happy retriever.");
		
		happyDog.style.visibility="visible";
	}
	else if (firstPass.value==secondPass.value &&(firstPass.value.length<8||secondPass.value.length<8))
	{
		alert("Password must be at least 8 characters.");
	}
	else if(firstPass.value!=secondPass.value)
	{
		alert("Passwords do not match.");
	}
	
}