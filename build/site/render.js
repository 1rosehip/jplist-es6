const fs = require('fs');
const path = require('path');

//https://github.com/jprichardson/node-fs-extra
const fse = require('fs-extra');

//https://github.com/cstivers78/bliss
const Bliss = require('bliss');
const bliss = new Bliss({
    context: {
        node: this
    }
});

/**
 * render static content recursive helper
 * @param {string} folderPath
 * @param {string} relativeFolderPath
 * @param {Object} data
 */
const renderStaticHelper = (folderPath, relativeFolderPath, data) => {

    const items = fs.readdirSync(folderPath);

    //loop through all the nested files and folders
    items.forEach(function(item){

        //get the absolute file / folder path
        const sourceItemPath = path.join(folderPath, item);
        const stat = fs.statSync(sourceItemPath);

        //in case it's a file
        if(stat.isFile()){

            if(path.parse(item).ext === '.html') {

                //render the HTML using bliss
                let output = bliss.render(sourceItemPath, data).trim();

                const targetFilePath = path.join(process.cwd(), relativeFolderPath, item);

                //create all the needed nested folders at destination path
                fse.ensureFileSync(targetFilePath);

                //write the output HTML to the destination
                fs.writeFileSync(targetFilePath, output, 'utf8');
            }
        }
        //in case it's a folder
        else{

            //get nested folder absolute path
            const nestedFolder = path.join(folderPath, item);

            //generate relative nested folder path
            const target = relativeFolderPath + item + '/';

            renderStaticHelper(nestedFolder, target, data);
        }
    });

};

renderStaticHelper(process.cwd() + '/build/site/templates', '', {});