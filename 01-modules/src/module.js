export function valid(email) {
	var succeed = '^[a-zA-Z]+\.[a-z]{3}-[bm][0-9]{4}@fh-salzburg.ac.at';
	var ergebnis = email.match(succeed);
	if (ergebnis){
		return true;
	}
	return false;
}

export function degreeProgram(email) {
	if (valid(email)){
		var chopped = email.split('.');
		var degree = chopped[1].split('-');
		return degree[0].toUpperCase();
	}
}

export function level(email) {
	if (valid(email)){
		var level = '[bm][0-9]{4}';
		var ergebnis = email.match(level);
		if (ergebnis[0]=='m') {
			return "MA";
		}
		return "BA";
	}
}

export function graduationYear(email) {
	var year = '[0-9]{4}';
	var gradyear = email.match(year);
	if (level(email)=="BA"){
		return parseInt(gradyear[0]) + 3;
	}
	return parseInt(gradyear[0]) + 2;
	
}
