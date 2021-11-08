function winnerTeam(a,b) {
    function average(arr) {
        return Math.round((arr[0]+arr[1]+arr[2])/3);
    }

    if(average(a)===average(b)) return `Its a Draw`;
    if(average(a)>average(b)) return `A Team Win with ${average(a)} average score`;
    if(average(a)<average(b)) return `B Team Win with ${average(b)} average score`;
}

//-----------------------------------------------------------------------
console.log(winnerTeam(Jhon=[89,120,103],Myke=[116,94,123]));

function winnerTeam2(a,b,c) {
    function average(arr) {
        return Math.round((arr[0]+arr[1]+arr[2])/3);
    }
    if(average(a)===average(b)&&average(c)===average(a)) return `Its a Draw`;
    if((average(a)>average(b))&&(average(a)>average(c))) return `A Team Win with ${average(a)} average score`;
    if((average(b)>average(a))&&(average(b)>average(c))) return `B Team Win with ${average(b)} average score`;
    if((average(c)>average(a))&&(average(c)>average(b))) return `C Team Win with ${average(c)} average score`;
}

console.log(winnerTeam2(Jhon=[189,120,103],Myke=[116,94,123],Marry=[97,134,105]));