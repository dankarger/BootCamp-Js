// 1
function isString(str, func) {
    if(typeof str==='string'){
        return func(str);
    }
}
function call(str) {
   console.log('1: '+str);
   // return str
}
isString('test',call)


// 2
function firstWordUpperCase(str,func) {
        let result = str.substr(0,1).toUpperCase()+str.substr(1)
        return func(result)
}
function callback2(str){
    return str.replace(/[\' \']/g,'-')
}
console.log('2: '+firstWordUpperCase('test is a test',callback2));

//3

function capitalize(str) {
    return str.toUpperCase();
}
console.log('3: '+firstWordUpperCase('testing again bla bla ',capitalize));

//4

function ownFunc(str,func,func2){
    let result = func(str);
    return func2(result);
}
console.log('4: '+ ownFunc('this is another test',callback2,capitalize))


const ownfunc2 = (callback,str) => {
    console.log(str)
    return callback()
}

const test3 =(callback3, str)=>{
    console.log(str)
   return (callback3());
}
console.log(ownfunc2(()=>capitalize('hgfghf'),'hihihi'));
console.log(test3(()=>capitalize('t-est-6'),'j'))