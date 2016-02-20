

var loc;
var increment=function()
{
	var pic0=document.getElementById("image0");
	var pic1=document.getElementById("image1");
	var pic2=document.getElementById("image2");
	var pic3=document.getElementById("image3");
	var pic4=document.getElementById("image4");
	
	
	//starts from zero, as usual
	var picArray=[pic0,pic1,pic2,pic3,pic4];
	//console.log(picArray);
	loc=findLoc(picArray);
	console.log(loc);
	
	//alert("making sure this works");
}

var decrement=function()
{
	findLoc();
	//alert("DOes this work too?");
}

var findLoc=function(picArray)
{
	
	
	if(picArray[0].height=="500")
	{
		return(0);
	}
	else if(picArray[1].height=="500")
	{
		return(1);
	}
	else if(picArray[2].height=="500")
	{
		return(2);
	}
	else if(picArray[3].height=="500")
	{
		return(3);
	}
	else if(picArray[4].height=="500")
	{
		return(4);
	}
	else
	{
		return("something went wrong");
	}
	//alert(loc);
	
}