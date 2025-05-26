//your JS code here. If required.

// let year = Number(prompt("Enter random years between 1 - 9999"));

function daysOfAYear(year){
	if(year <= 1 && years >= 9999){
		return `Input valid year`
	}
	if(year % 4 == 0 ){
		return 366;
	}else{
		return 365;
	}
}

module.exports daysOfAYear