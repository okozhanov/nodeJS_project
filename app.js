const fs = require('fs')                                     // TODO додай ";"
const path = require('path')                                 // TODO додай ";"

const boysPath = path.join(__dirname, 'boys')                // TODO додай ";"
const girlsPath = path.join(__dirname, 'girls')              // TODO додай ";"

const mover = (folder, file, fileName) => {
    let destination;                                         // TODO додай ентер після цього рядка
    if (folder === boysPath) {
        destination = girlsPath                              // TODO додай ";"
    }                                                        // TODO додай ентер після цього рядка
    if (folder === girlsPath) {
        destination = boysPath                               // TODO додай ";"
    }

    fs.rename(
        file,
        path.join(destination, fileName),
        (err) => {
            if (err) {
                console.log(err)                                                  // TODO додай ";"
            }
        }
    )                                                                             // TODO додай ";"
}
                                                                                  // TODO більше ніж один ентер підряд не став

const myFunction = (pathForDirectory) => {
    fs.readdir(pathForDirectory, (err, data) => {
        if (err) {
            console.log(err)                                                      // TODO додай ";"
            return;
        }

        data.forEach(fileName => {
            let thisFile = path.join(pathForDirectory, fileName)                  // TODO додай ";"        також let -> const

            fs.readFile(thisFile, ((err, data) => {
                if (err) {
                    console.log(err);
                    return                                                        // TODO додай ";"
                }

                object = JSON.parse(data.toString())                              // TODO додай ";"        const напиши перед змінною

                if (pathForDirectory === boysPath) {                              // TODO   умова може виглядати так, щоб не робити дві іфки -->  (pathForDirectory === boysPath && object.gender === 'female')
                    if (object.gender === 'female') {
                        mover(pathForDirectory, thisFile, fileName)               // TODO додай ";"
                    }                                                             // TODO після цього рядка додай return щоб у разі коли ти зайшов в if код далі не виконувався (почитай про early return pattern)
                }

                if (pathForDirectory === girlsPath) {
                    if (object.gender === 'male') {
                        mover(pathForDirectory, thisFile, fileName)              // TODO додай ";"
                    }
                }
            }))                                                                  // TODO додай ";"
        })                                                                       // TODO додай ";"
    })                                                                           // TODO додай ";"
}

myFunction(boysPath);
myFunction(girlsPath)                                                            // TODO додай ";"
