const fs = require('fs')
const path = require('path')
const users = require(path.join(__dirname, 'users.js'))

const menOldFolder = 'menOlderThen20'
const womenOldFolder = 'womenOlderThen20'
const menYoungFolder = 'menYoungerThen20'
const womenYoungFolder = 'womenYoungerThen20'

function dirCreator(name) {

    try {
        fs.mkdir(path.join(__dirname, name),
            {recursive: true},
            (err) => {
                if (err) {
                    console.log(err);
                }
            })
        return path.join(__dirname, name)
    } catch (err) {
        console.log(err);
    }
}

function writer(destination, user) {
    let name = user.name + '.txt'

    try {
        fs.writeFile(
            path.join(destination, name),
            JSON.stringify(user),
            err => {
                if (err) {
                    console.log(err)
                }
            }
        )
    } catch (err) {
        console.log(err);
    }
}

function judge(users) {

    try {
        users.forEach(user => {
            if (user.gender === 'female') {
                if (user.age >= 20) {
                    writer(dirCreator(womenOldFolder), user)
                }
                if (user.age < 20) {
                    writer(dirCreator(womenYoungFolder), user)
                }
            }

            if (user.gender === 'male') {
                if (user.age >= 20) {
                    writer(dirCreator(menOldFolder), user)
                }
                if (user.age < 20) {
                    writer(dirCreator(menYoungFolder), user)
                }
            }
        })
    } catch (err) {
        console.log(err);
    }
}

try {
    judge(users)
} catch (err) {
    console.log(err);
}

