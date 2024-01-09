const fs = require('fs');
const fsPrms = require('fs/promises');

const targetDir = './artifacts/contracts/interfaces'

const destDir = './artifacts/built'


const makeDirIfNotExists = (path) => {
    return new Promise((resolve, reject) => {
        try {
            if (!fs.existsSync(`${path}`)) {
                fs.mkdirSync(`${path}`);
            }
            resolve(true);
        } catch (err) {
            reject(err);
        }
    });
};

const run = async () => {

    let jsonLists = await fsPrms.readdir(targetDir)

    let _promise = [];

    await fs.rmSync(destDir, { recursive: true, force: true });

    await makeDirIfNotExists(destDir)

    let mainAbi = []
    jsonLists.forEach((e, index) => {
        let jsonFile = e.split(".sol")[0]
        let selectedJSON = require(`${targetDir}/${e}/${jsonFile}.json`)
        let inputOnly = selectedJSON["abi"]
        mainAbi.push(...inputOnly)
    })
    let data = JSON.stringify(mainAbi, null, 4)
    await fsPrms.writeFile(`${destDir}/abi.json`, data, (err) => {
        if (err) {
            reject(err)
        }
        console.log("JSON data is saved.");
        resolve(1)
    });
}

run()