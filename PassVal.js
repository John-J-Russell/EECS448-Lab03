var validate=function(/*does anything go here?*/ )
{
	//Compare the two entries
	//if same alert.whatever "good"
	//else "they're not the same, dummy"
	
	var firstPass=document.getElementById("passOne");
	var secondPass=document.getElementById("passTwo");
	
	//alert(secondPass.length);
	//console.log(firstPass.value);
	if(secondPass.value.length < 8)
	{
		alert("Password must be at least 8 characters.");
	}
	
	if(firstPass==secondPass)
	{
		alert("Congratulations");
	}
	else
	{
		alert("You're an idiot");
	}
	
}