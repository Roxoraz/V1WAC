var y = "";
  function myIntervalFunction() {
	var x = document.getElementById("myTextarea").value;
	
	if (x != y)
	{
		console.log(x);
		document.getElementById("demo").innerHTML = "";
		y = x;
	}
	else
	{
		document.getElementById("demo").innerHTML = "No change detected";
	}
  }
  
var intervalID = setInterval(myIntervalFunction , 5000);