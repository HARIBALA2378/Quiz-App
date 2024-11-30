// let p = new Promise((resolve,reject) =>{
//     let a = 3;
//     if(a == 2){
//         resolve("TRUE")
//     }else{
//         reject("FALSE")
//     }
// })
// p.then(msg => {
//     console.log("This is in the then " + msg)
// }).catch(msg =>{
//     console.log("This is in catch" + msg)
// })

// const userLeft = false
// const userWatchingCatMeme = true
// function watchTutorialCallback(callback, errorCallback) {
//     if (userLeft) {
//         errorCallback({
//         name: 'User Left',
//         message: ': ('
//     })
//     } else if (userWatchingCatMeme) {
//     errorCallback({
//         name: 'User Watching Cat Meme',
//         message: 'WebDevSimplified < Cat'
//     })
//     } else {
//         callback('Thumbs up and Subscribe')
//     }
// }

// watchTutorialCallback(message =>{
//     console.log("Success " + message)
// },(error =>{
//     console.log(error.message)
// }
// )
// )

// const userLeft = false
// const userWatchingCatMeme = false
// function watchTutorialPromise(){
//     return new Promise((resolve,reject) => {
//         if (userLeft) {
//             reject({
//             name: 'User Left',
//             message: ': ('
//         })
//         } else if (userWatchingCatMeme) {
//           reject({
//             name: 'User Watching Cat Meme',
//             message: 'WebDevSimplified < Cat'
//           })
//         } else {
//             resolve('Thumbs up and Subscribe')
//         }
//     }) 
// }

// watchTutorialPromise().then((message) => {
//     console.log("This is in then " + message)
// }).catch((error) => {
//     console.log("This is in catch " + error.message)
// })


const recordVideoOne = new Promise((resolve, reject) => {
    resolve('Video 1 Recorded')
    })
    const recordVideoTwo = new Promise((resolve, reject) => {
    resolve('Video 2 Recorded')
    })
    const recordVideoThree = new Promise((resolve, reject) => {
    resolve('Video 3 Recorded')
    })
    Promise.all([
    recordVideoOne,
    recordVideoTwo,
    recordVideoThree
    ]).then((msg) => {
    console.log(msg)
})
