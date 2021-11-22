// function decodingStr(str) {
//     console.log('begin:',str)
//    let regex=/\[.*?\]/g
//     let regex2=/\[[^\]]*\]/g
//     if(str.match(regex2)===null) {
//         return str
//     }
//     console.log('match',str.toString().match(regex))
//     let match = str.toString().match(regex[0])
//     let index = str.indexOf(str.match(regex)[0])-1
//     console.log('index',index)
//     console.log('num',str[index])
//     let number=str[index]
//     let brackets = str.match(regex)[0]
//     brackets = brackets.slice(1,brackets.length)
//     console.log('brackets' ,brackets)
//     let result = brackets.repeat(number)
//     let result2 = str.replace(match,result)
//
//     console.log('r',result2.split( ))
//
//     return decodingStr(result2)
//
// }
//
// console.log(decodingStr('3[a2[c]]'))
//
//
//
//
// function decodingString(str) {
//     let regex =  /\[[^\]]*\]/g
//     let match = str.match(regex)[0]
//     console.log('match',str.match(regex))
//     if(str.match( /\[[^\]]*\]/g)===null){
//         return str
//     }
//     let number = str.slice([str.indexOf(str.match(regex)[0])-1],1);
//     console.log(number)
//     let result =  match.repeat(number)
//     console.log(result)
//     let result2 = str.replace(match,result)
//     console.log('result2;', result2)
// }
//
// // console.log(decodingString('3[a2[c]]3[e]'))
// let regex =  /\[[^\]]*\]/g
// // console.log('3[a2[c]]'.split(''))
// \
// function decodingString3(str){
//     let regex =  /\[[^\]]*\]/g
//     let match = str.match(regex)
//     if(str.match(regex)===null){
//         return str
//     }
//     let number = str.indexOf(match[0])-1
//     console.log('match:',match, 'num',str[number])
//     let arrStr = str.split()
//     let result = match.map
//     console.log('reeee',result)
//     let t = str.replace(number,'')
//     console.log('t,',t)
//     let str2 = str.split(str[number]).join('')
//     let tt=result.replace(match,result)
//     console.log('re',str2)
//     let result2 = str2.split(match).join(result)
//     console.log('result2',result)
//     decodingString3(result)
// }
// console.log(decodingString3('3[a]2[bc]'))


function decodingString4(str) {
    let regex =  /\[[^\]]*\]/g


    if(str.match(regex)===null){
        return str
    }
    let match = str.match(regex)[0]
    console.log(match)
    let number = str.slice([str.indexOf(str.match(regex)[0])-1],1);
    console.log(number)
    let result =   match.slice(1,-1).repeat(number)
    console.log(result)
    let str2 = str.split(number).join('')
    let result2 = str2.replace(match,result)
    result[result.indexOf(number)]=''
    console.log('result2;', result2 )
    return decodingString4(result2)
}
console.log(decodingString4('3[a]2[b]'))
