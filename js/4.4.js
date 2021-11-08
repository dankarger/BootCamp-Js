function boom(n){
    let result =[];
    for(let i=1;i<=n;i++){
        if(i%7===0&&i.toString().includes('7')){
            result.push('Boom-Boom');
        }
        else if (i%7===0){
            result.push('Boom');
        }else {
            result.push(i);
        }
    }
    return result.join(',');
}

console.log(boom(100))