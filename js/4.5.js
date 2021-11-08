function leapYear(year) {
    if(year%4===0){
         if(year%100===0&&year%400!==0){
             return 'This is not a leap year'
             }else {
             return 'This is indeed a leap year **'}
    }else {
        return 'This is not a leap year'
    }
}

console.log(leapYear(2024))

//test
for(let i=2000;i<=2050;i++) {
    console.log(`${i}- ${leapYear(i)}`)
}