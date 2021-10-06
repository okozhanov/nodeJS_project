const fs = require('fs');
const path = require('path');

const boysPath = path.join(__dirname, 'boys');
const girlsPath = path.join(__dirname, 'girls');

const mover = (folder, file, fileName, destination) => {

    fs.rename(
        file,
        path.join(destination, fileName),
        (err) => {
            if (err) {
                console.log(err);
            }
        }
    );
}

const myFunction = (pathForDirectory) => {
    fs.readdir(pathForDirectory, (err, data) => {
        if (err) {
            console.log(err);
            return;
        }

        data.forEach(fileName => {
            const thisFile = path.join(pathForDirectory, fileName)

            fs.readFile(thisFile, ((err, data) => {
                if (err) {
                    console.log(err);
                    return;
                }

                const object = JSON.parse(data.toString());

                if (pathForDirectory === boysPath && object.gender === 'female') {
                    mover(pathForDirectory, thisFile, fileName, girlsPath);
                    return;
                }

                if (pathForDirectory === girlsPath && object.gender === 'male') {
                    mover(pathForDirectory, thisFile, fileName, boysPath);
                }
            }));
        });
    });
}

myFunction(boysPath);
myFunction(girlsPath);