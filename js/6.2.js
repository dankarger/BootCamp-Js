const people = ["Greg", "Mary", "Devon", "James"];

for(let name of people) {
    // console.log(name);
}

people.shift();
people.pop();
people.unshift('Matt');
people.push('Dan');

console.log(people)
for(let name of people){
    if(name==='Mary') {
         break;
    }else{
        console.log(name);
    }
}

const people2 = people.slice(2)
console.log(people2)

console.log(people.indexOf('Mary'))  //8

console.log(people.indexOf('foo')) //9

console.log(people)
people[0] = 'Greg';               //10
people[people.length-1]='James';
console.log(people)
people.splice(2, 1,'Elizabeth' ,'Artie')

console.log(people)

const withBob = people.concat('Bob'); //11