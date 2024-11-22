//problem 1 
let arr = [1, 2, 3, 4, 6, 9, 10]
// let newar = arr.map((x) => x * 2);
// console.log(newar);

// problem 2 
// let newar2 = arr.reduce((x, y) => x + y, 0)
// console.log(newar2);

//problem 3
// let newarr3 = arr.filter((x) => { return (x > 2) })
// console.log(newarr3);

//student object 
const students = [
    {
        name: "Priyanshi",
        score: 100
    }, {
        name: "Riya",
        score: 60
    }, {
        name: "Hiya",
        score: 50
    }
    , {
        name: "Siya",
        score: 70
    }

]

// let filteredStudents = students.filter((student) => student.score > 60)
//     .map((student) => student.score * 2)
//     .reduce((x, y) => x + y, 0);

// console.log(filteredStudents);


// console.log("start");
// setTimeout(() => {
//     console.log("hello from 1 timeout");
//     setTimeout(() => {
//         console.log("hello from 2 timeout");
//         setTimeout(() => {
//             console.log("hello from 3 timeout");
//         }, 3000);
//     }, 2000);
// }, 1000);
// console.log("end");

//problems - 
//1 code is not readable 
//2 callback hell


// const getPosts = () => {
//     fetch("https://catfact.ninja/fact")
//         .then(response => response.json())
//         .then(data => {
//             console.log(data)
//             return data;
//         })
//         .catch((err) => { console.log(err) });

// }
// getPosts();


// const myPromise = new Promise((resolve, reject) => {
//     const success = true;
//     if (success)
//         resolve("hello")
//     else
//         reject("failure")
// })

// myPromise.then((response) => {
//     console.log(response)

// })


const myData = () => {

    return new Promise((resolve, reject) => {
        resolve(students);


    })

}
myData().then((response) => console.log(response))