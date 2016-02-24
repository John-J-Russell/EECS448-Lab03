var apply=function()
{
	//Obtain the 3 text colors
	var tc1=document.getElementById("textCol1").value;
	var tc2=document.getElementById("textCol2").value;
	var tc3=document.getElementById("textCol3").value;
	
	//obtain 3 background colors
	var bc1=document.getElementById("backCol1").value;
	var bc2=document.getElementById("backCol2").value;
	var bc3=document.getElementById("backCol3").value;
	
	//For interacting with properties of paragraph
	var paragraph=document.getElementById("dummyText");
	
	console.log(tc1+" "+tc2+" "+tc3);
	console.log(bc1+" "+bc2+" "+bc3);
	
	if((tc1<=255 && tc1>=0) && (tc2<=255 && tc2>=0) && (tc3<=255 && tc3>=0) && (bc1<=255 && bc1>=0) && (bc2<=255 && bc2>=0) && (bc3<=255 && bc3>=0))
	{
		//That is a nightmare right there. Wow.
		//Anyways, change requisite colors as input is valid.
		console.log("Works.");
		
	}
	else
	{
		alert("Invalid input, please give numbers between 0 and 255 for all entry boxes.");
	}
}