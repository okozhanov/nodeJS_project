const fs = require('fs')
const path = require('path')

const boysPath = path.join(__dirname, 'boys')
const girlsPath = path.join(__dirname, 'girls')

const mover = (folder, file, fileName) => {
    let destination;
    if (folder === boysPath) {
        destination = girlsPath
    }
    if (folder === girlsPath) {
        destination = boysPath
    }

    fs.rename(
        file,
        path.join(destination, fileName),
        (err) => {
            if (err) {
                console.log(err)
            }
        }
    )
}


const myFunction = (pathForDirectory) => {
    fs.readdir(pathForDirectory, (err, data) => {
        if (err) {
            console.log(err)
            return;
        }

        data.forEach(fileName => {
            let thisFile = path.join(pathForDirectory, fileName)

            fs.readFile(thisFile, ((err, data) => {
                if (err) {
                    console.log(err);
                    return
                }

                object = JSON.parse(data.toString())

                if (pathForDirectory === boysPath) {
                    if (object.gender === 'female') {
                        mover(pathForDirectory, thisFile, fileName)
                    }
                }

                if (pathForDirectory === girlsPath) {
                    if (object.gender === 'male') {
                        mover(pathForDirectory, thisFile, fileName)
                    }
                }
            }))
        })
    })
}

myFunction(boysPath);
myFunction(girlsPath)