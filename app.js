const fs = require('fs')
const path = require('path')
const users = require(path.join(__dirname, 'users.js'))

const menOldFolder = 'menOlderThen20'
const womenOldFolder = 'womenOlderThen20'
const menYoungFolder = 'menYoungerThen20'
const womenYoungFolder = 'womenYoungerThen20'

async function writer(destination, user) {
    let name = user.name + '.txt'

    await fs.writeFile(
        path.join(destination, name),
        JSON.stringify(user),
        err => {
            if (err) {
                console.log(err)
            }
        }
    )
}

async function dirCreator(name) {
    await fs.mkdir(path.join(__dirname, name),
        {recursive: true},
        (err) => {
            if (err) {
                console.log(err);
            }
        })
    return path.join(__dirname, name)
}

async function judge(users) {
    await users.forEach(user => {
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
}

judge(users)