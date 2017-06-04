
function toCelsius (number) 
{
	var celsius = ((number-32)/9)*5;
	getDiv = document.getElementById('answer');
	getDiv.value = celsius;
}

function toFahrenheit (number) 
{
	var fahrenheit = ((number*9)/5)+32;
	getDiv = document.getElementById('answer');
	getDiv.value = fahrenheit;
}

// toCelsius(temperature);
// toFahrenheit(temperature);
function searchKeyPress(e)
{
    // look for window.event in case event isn't passed in
    e = e || window.event;
    if (e.keyCode == 13)
    {
        document.getElementById('converter').click();
        console.log("i was here");
        return false;
    }
    return true;
}

function determineConverter(temperature)
{
	var temperature = document.getElementById('input').value;
	if(fahrenheit.checked === true)
	{
		toFahrenheit(temperature);
	}
	else
	{
		console.log(temperature);
		toCelsius(temperature);
	}
}
// document.getElementById('input').addEventListner('keyup', decide(event));