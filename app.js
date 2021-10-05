const fs = require('fs')
const path = require('path')

const boysPath = path.join(__dirname, 'boys')
const girlsPath = path.join(__dirname, 'girls')

const mover = (folder, file, fileName, destination) => {

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
                        mover(pathForDirectory, thisFile, fileName, girlsPath)
                    }
                }

                if (pathForDirectory === girlsPath) {
                    if (object.gender === 'male') {
                        mover(pathForDirectory, thisFile, fileName, boysPath)
                    }
                }
            }))
        })
    })
}

myFunction(boysPath);
myFunction(girlsPath)