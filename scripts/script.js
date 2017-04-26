//Tworzenie funkcji
var text = "Nieprawidłowe dane";


function getTriangleArea(a, h) {
	if(a > 0 || h > 0) {
		return a*h/2		
	}
	else if (a < 0 || h < 0) {
		return text;
	}	
}

//getTriangleArea(a, h);

console.log(getTriangleArea(10, 6))

// Zmienne posiadające pole trójkąta
var triangle1Area = getTriangleArea(10 ,15);
var triangle2Area = getTriangleArea(2, 5);
var triangle3Area = getTriangleArea(20, 60);

console.log(triangle1Area);
console.log(triangle2Area);
console.log(triangle3Area);

var triangle4Area = getTriangleArea(-1, -5);

console.log(triangle4Area);