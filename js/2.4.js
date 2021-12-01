function whatsTheDate() {
    let currentDate = new Date();
    let day  = currentDate.toLocaleString('en-us', {weekday: 'long'});
    let dayOfMonth = currentDate.getDate();
    let month = currentDate.toLocaleString('en-us', { month: 'long' });
    let year = currentDate.getFullYear();
    return `Today is ${day} the ${dayOfMonth} of ${month}, ${year}.`
}

console.log(whatsTheDate())