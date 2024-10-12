// async function getData(){
//     // Simulate getting data from a server
//     return new Promise((resolve,reject) => {
//         setTimeout(() => {
//             resolve(455)
//         }, 3500);
//     })
// }

// settle means resolve or reject 
// resolve means promise has settled sucessfully
// reject means promise has not settled sucessfully

async function getData() {
    //    let x = await fetch('https://jsonplaceholder.typicode.com/todos/1')
   let x = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
            title: 'foo',
            body: 'bar',
            userId: 1,
        }),
        headers: {
            'Content-type': 'application/json; charset=UTF-8',
        },
    })
    let data = await x.json()
    // .then(response => response.json())
    // .then(json => console.log(json))
    // console.log(data)
    return data
}
async function main() {
    console.log("Loading modules")

    console.log("Do somthing else")

    console.log("Load data")

    let data = await getData()

    console.log(data)

    console.log("process data")

    console.log("task 2")

}

main()


// async function postData(url = "",data = {}) {
// const response = await fetch(url,{
// method: "POST",
// headers: {
//    "Content-Type":"application/json",
// },
//   body: JSON.stringify(data),
//   });
//   return response.json();
// }

//   postData("https://example.com/answer", { answer: 42}).then((data) => {
//  console.log(data);
// });


// data.then((v) => {
//     console.log("data");

//     console.log("process data");

//     console.log("task 2");

// })