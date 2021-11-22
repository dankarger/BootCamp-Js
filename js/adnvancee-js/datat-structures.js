function solution(S) {
    let stacks = [];

    let openingTags = ['[','{','('];
    let closingTags =  [']','}',')'];
    for(let i=0;i<S.length;i++) {
        if(openingTags.includes(S[i])) {
            stacks.push(S[i])

        }
        if(closingTags.includes(S[i])) {
            stacks.push(S[i])

        }
    }
    let sortedTags = stacks.sort();
    return sortedTags
}
// console.log('1',solution('{[()()]}'));




function solution2(S) {
    let stacks = [];
    let Sarr = S.split('')
    let openingTags = ['[','{','('];
    let closingTags =  [']','}',')'];
    let obj = {
        '[':']',
        '(':')',
        '{':'}'
    }
    let stacksOrder = []
    for(let i=0;i<Sarr.length;i++) {
        if(openingTags.includes(S[i])) {
            stacks.push(S[i])
        }
        if(closingTags.includes(S[i])) {
            stacks.push(S[i])
        }
    }
    // console.log(stacks)
    for(let i=0;i<S.length;i++) {
        let temp=[]
        if(openingTags.includes(S[i])){
            temp.push(i);
            for(let j=S.length-1;j>i;j--){
                if(S[j]===obj[S[i]]) {
                    console.log('o',obj[S[i]],Object.values(obj[S[i]]))
                    temp.push(j)
                    Sarr[i]='*'
                    Sarr[j]='*'
                    stacksOrder.push(S.substr(temp[0],temp[1]+1));
                    console.log('s',stacksOrder)
                }
            }
        }
        console.log(temp)
        console.log(Sarr)


    }
    console.log('order',stacksOrder)
    console.log('arr',Sarr)



}
// console.log('2:',solution2('{{[[()()]}'))
//
//
// function solution3(S) {
//     let stacks = [];
//     let openingTags = ['[', '{', '('];
//     let closingTags = [']', '}', ')'];
//     let obj = {
//         '[': ']',
//         '(': ')',
//         '{': '}'
//     }
//
//
//
// }
//
// console.log('2:',solution3('{[()()]}'))

function solution4(S) {
    let sArr= S.split('')
    let stacksOpen = [];
    let stacksClosed = [];
    let openingTags = ['[', '{', '('];
    let closingTags = [']', '}', ')'];
    let obj = {
        '[': ']',
        '(': ')',
        '{': '}'
    }
    let valid = true;
    sArr.forEach(el=>{
         openingTags.includes(el)?stacksOpen.push(el):stacksClosed.push(el);
    })
    let stackClose2= stacksClosed.reverse();
    if(stacksClosed.length!==stacksOpen.length){
        console.log('f')
        return false
    }
    stacksOpen.forEach((el,index)=>{
        // console.log(el,index)
        // console.log(stackClose2)
        if(obj[el]===stacksClosed[index]){
            // console.log('el',obj[el],stacksClosed[index])
        }else {
            valid=false
        }
    })
    return valid;
}

console.log('4:',solution4('{[[{([])}]]}'))
