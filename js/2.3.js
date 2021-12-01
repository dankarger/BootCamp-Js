function calculateCircle(radius) {
    let pi= 3.14159265359;
    let circle = Math.PI * Math.pow(radius,2);
    console.log(circle);
    console.log((circle).toFixed(2));
}

console.log(calculateCircle(12))