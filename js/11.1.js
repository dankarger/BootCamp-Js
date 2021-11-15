const newReleases = [ {
    id: 70111470,
    title: "Die Hard",
    boxart: "http://cdn-0.nflximg.com/images/2891/DieHard.jpg", uri: "http://api.netflix.com/catalog/titles/movies/70111470", rating: [4.0],
    bookmark: [],
}, {
    id: 654356453,
    title: "Bad Boys",
    boxart: "http://cdn-0.nflximg.com/images/2891/BadBoys.jpg", uri: "http://api.netflix.com/catalog/titles/movies/70111470", rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
}, {
    id: 65432445,
    title: "The Chamber",
    boxart: "http://cdn-0.nflximg.com/images/2891/TheChamber.jpg", uri: "http://api.netflix.com/catalog/titles/movies/70111470", rating: [4.0],
    bookmark: [],
}, {
    id: 675465,
    title: "Fracture",
    boxart: "http://cdn-0.nflximg.com/images/2891/Fracture.jpg", uri: "http://api.netflix.com/catalog/titles/movies/70111470", rating: [5.0],
    bookmark: [{ id: 432534, time: 65876586 }],
}, ];


function findIdAndName1(arr){
    let result = []
    arr.forEach(el=>{
        result.push({id:el.id, name:el.title});
    })
    return result;
}

console.log(findIdAndName1(newReleases));

const result2= newReleases.map(function(el){
        return {
            id:el.id,
            name:el.title
        }
});
console.log(result2);