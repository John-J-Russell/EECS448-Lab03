/*
	@AUTHOR: JOHN RUSSELL
	@EMAIL: j362r647@ku.edu
	@DATE: 20 Feb 2016
	@FILE: SliShoNew.js
	@PURPOSE: Coordinate with SlideShow.html to flick back and forth between images.
*/

//Go to previous image
var decrement=function()
{
	//Get the image
	var pic=document.getElementById("image");
	//console.log(pic.src);
	
	//checks which image is being displayed, and changes it accordingly.
	if(pic.getAttribute("src")=="sunrise1.jpg")
	{
		pic.src="sunrise0.jpg";
	}
	else if(pic.getAttribute("src")=="sunrise0.jpg")
	{
		pic.src="sunrise4.jpg";
	}
	else if(pic.getAttribute("src")=="sunrise4.jpg")
	{
		pic.src="sunrise3.jpg";
	}
	else if(pic.getAttribute("src")=="sunrise3.jpg")
	{
		pic.src="sunrise2.jpg";
	}
	else if(pic.getAttribute("src")=="sunrise2.jpg")
	{
		pic.src="sunrise1.jpg";
	}
	//This will only prompt if something goes wrong
	else
	{
		alert("error");
	}
	
}

//Go to next image
var increment=function()
{
	//Gets the image
	var pic=document.getElementById("image");
	//console.log(pic.src);
	
	//Checks which image is being displayed, and changes it accordingly.
	if(pic.getAttribute("src")=="sunrise1.jpg")
	{
		pic.src="sunrise2.jpg";
	}
	else if(pic.getAttribute("src")=="sunrise2.jpg")
	{
		pic.src="sunrise3.jpg";
	}
	else if(pic.getAttribute("src")=="sunrise3.jpg")
	{
		pic.src="sunrise4.jpg";
	}
	else if(pic.getAttribute("src")=="sunrise4.jpg")
	{
		pic.src="sunrise0.jpg";
	}
	else if(pic.getAttribute("src")=="sunrise0.jpg")
	{
		pic.src="sunrise1.jpg";
	}
	//Only prompts if something goes wrong.
	else
	{
		alert("error");
	}
}