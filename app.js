const async = require('async')
const fs = require('fs')
const path = require('path')
const users = require(path.join(__dirname, 'users.js'))

// const dirCreator = (name) => {
//
// }


fs.mkdir(path.join(__dirname, 'menOlderThen20'),
    {recursive: true},
    (err) => {
    if (err) {
        console.log(err);
    }
})



// dirCreator('menOlderThen20')
// dirCreator('womenOlderThen20')
// dirCreator('menYoungerThen20')
// dirCreator('womenYoungerThen20')
//
// const menOldFolder = path.join(__dirname, 'menOlderThen20')
// const womenOldFolder = path.join(__dirname, 'womenOlderThen20')
// const menYoungFolder = path.join(__dirname, 'menYoungerThen20')
// const womenYoungFolder = path.join(__dirname, 'womenYoungerThen20')
//
// const writer = (destination, user) => {
//     let name = user.name + '.txt'
//
//     fs.writeFile(
//         path.join(destination, name),
//         JSON.stringify(user),
//         err => {
//             if (err) {
//                 console.log(err)
//             }
//         }
//     )
// }
//
//
// const judge = (users) => {
//     users.forEach(user => {
//         if (user.gender === 'female') {
//             if (user.age >= 20) {
//                 writer(womenOldFolder, user)
//             }
//             if (user.age < 20) {
//                 writer(womenYoungFolder, user)
//             }
//         }
//
//         if (user.gender === 'male') {
//             if (user.age >= 20) {
//                 writer(menOldFolder, user)
//             }
//             if (user.age < 20) {
//                 writer(menYoungFolder, user)
//             }
//         }
//     })
// }
//
// judge(users)