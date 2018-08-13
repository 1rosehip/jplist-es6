const fs = require('fs');
const path = require('path');

//https://github.com/jprichardson/node-fs-extra
const fse = require('fs-extra');
const pjson = fs.readFileSync('./package.json', 'utf8');
const version = JSON.parse(pjson).version;

class CopyPlugin {

    apply(compiler) {
        compiler.hooks.done.tap(
            "CopyPlugin", stats => {

                try{
                    console.log();

                    console.log('Copying files to docs/js/' + version + '...');
                    const srcFolder = path.join(process.cwd(), 'dist/' + version);
                    const items = fs.readdirSync(srcFolder);

                    items.forEach((item) => {

                        let sourceItemPath = path.join(srcFolder, item);

                        //docs
                        let targetFilePath = path.join(process.cwd(), 'docs/js/' + version, item);
                        console.log(targetFilePath);
                        fse.ensureFileSync(targetFilePath);
                        fse.copySync(sourceItemPath, targetFilePath);

                        //test pages
                        targetFilePath = path.join(process.cwd(), 'test-pages/' + version + '/dist', item);
                        console.log(targetFilePath);
                        fse.ensureFileSync(targetFilePath);
                        fse.copySync(sourceItemPath, targetFilePath);
                    });
                }
                catch(err){
                    console.log(err);
                }

                console.log();
            }
        );
    }
}

module.exports = CopyPlugin;

/*

function CopyPlugin(options) {
    // Setup the plugin instance with options...
}


CopyPlugin.prototype.apply = (compiler) => {
    //compiler.hooks.someHook.tap(plugin, cb){
    compiler.plugin('done', function() {

        try{
            console.log('Copying files to docs/js...');
            const srcFolder = path.join(process.cwd(), 'dist');
            const items = fs.readdirSync(srcFolder);

            items.forEach((item) => {

                //get the absolute file / folder path
                const sourceItemPath = path.join(srcFolder, item);
                const targetFilePath = path.join(process.cwd(), 'docs/js', item);

                console.log(targetFilePath);
                //create all the needed nested folders at destination path
                fse.ensureFileSync(targetFilePath);

                //copy the file
                fse.copySync(sourceItemPath, targetFilePath);
            });
        }
        catch(err){
            console.log(err);
        }

        console.log();
    });
};

module.exports = CopyPlugin;
*/