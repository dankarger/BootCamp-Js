function calculateCircle(radius) {
    let pi= 3.14159265359;
    let circle = pi * Math.pow(radius,2);
    console.log(circle);
    console.log(Math.round(circle));
}

console.log(calculateCircle(12))