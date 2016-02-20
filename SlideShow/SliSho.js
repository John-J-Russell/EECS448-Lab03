
var pic0;
var pic1;
var pic2;
var pic3;
var pic4;
var loc;
var picArray;

var initialize=function()
{
	pic0=document.getElementById("image0");
	pic1=document.getElementById("image1");
	pic2=document.getElementById("image2");
	pic3=document.getElementById("image3");
	pic4=document.getElementById("image4");
	picArray=[pic0,pic1,pic2,pic3,pic4];
}

var increment=function()
{
	findLoc();
	console.log(loc);
	if(loc<4)
	{
		picArray[loc].height="0";
		picArray[loc].width="0";
		picArray[loc+1].height="500";
		picArray[loc+1].width="500";
	}
	else
	{
		picArray[loc].height="0";
		picArray[loc].width="0";
		picArray[0].height="500";
		picArray[0].width="500";
	}
	
}

var decrement=function()
{
	findLoc();
	console.log(loc);
	if(loc>0)
	{
		picArray[loc].height="0";
		picArray[loc].width="0";
		picArray[loc-1].height="500";
		picArray[loc-1].width="500";
	}
	else
	{
		picArray[loc].height="0";
		picArray[loc].width="0";
		picArray[4].height="500";
		picArray[4].width="500";
	}
}

var findLoc=function()
{
	if(picArray[0].height=="500")
	{
		loc=0;
	}
	else if(picArray[1].height=="500")
	{
		loc=1;
	}
	else if(picArray[2].height=="500")
	{
		loc=2;
	}
	else if(picArray[3].height=="500")
	{
		loc=3;
	}
	else if(picArray[4].height=="500")
	{
		loc=4;
	}
	else
	{
		alert("something's wrong");
	}
}