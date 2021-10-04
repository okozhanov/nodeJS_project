const fs = require('fs')
const path = require('path')
const users = require(path.join(__dirname, 'users.js'))

const menOldFolder = path.join(__dirname, 'menOlderThen20')
const womenOldFolder = path.join(__dirname, 'womenOlderThen20')
const menYoungFolder = path.join(__dirname, 'menYoungerThen20')
const womenYoungFolder = path.join(__dirname, 'womenYoungerThen20')

const writer = (destination, user) => {
    let name = user.name + '.txt'

    fs.writeFile(
        path.join(destination, name),
        JSON.stringify(user),
        err => {
            if (err) {
                console.log(err)
            }
        }
    )
}

const judge = (users) => {
    users.forEach(user => {
        if (user.gender === 'female') {
            if (user.age >= 20) {
                writer(womenOldFolder, user)
            }
            if (user.age < 20) {
                writer(womenYoungFolder, user)
            }
        }

        if (user.gender === 'male') {
            if (user.age >= 20) {
                writer(menOldFolder, user)
            }
            if (user.age < 20) {
                writer(menYoungFolder, user)
            }
        }
    })
}

judge(users)