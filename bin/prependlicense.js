const fs = require("fs");
const pathlib = require("path");
const args = process.argv.splice(2);
if (args.length == 0) {
    console.log("No arguments provided. No GPL 3.0 license has been prepended. Please revise the source code and compile again.");
    process.exit();
}
const arg = decodeURI(args[0]);
if (arg.startsWith("--file='") && arg.endsWith("'")) {
    try {
        const path = arg.substring(8, arg.length - 1);
        const previous = fs.readFileSync(path, 'utf-8');
        const license = fs.readFileSync("jslicense.template", 'utf-8').replace("!YEAR!", new Date().getFullYear()).replace("// !THE FILE RELATIVE TO PROJECT ORIGIN!\r\n\r\n", "");
        fs.writeFileSync(path, license + "\r\n" + previous);
    } catch(e) {
        console.log("GPL 3.0 license could not be prepended to a file. Please check the source code and compile again. Error Message: " + e.message);
    }
} else {
    if (arg.startsWith("--dir='") && arg.endsWith("'")) {
        try {
            const license = fs.readFileSync("jslicense.template", 'utf-8').replace("!YEAR!", new Date().getFullYear()).replace("// !THE FILE RELATIVE TO PROJECT ORIGIN!\r\n\r\n", "");
            const path = arg.substring(7, arg.length - 1);
            fs.readdirSync(path, { encoding: "utf-8" }).forEach(function(file) {
                fs.writeFileSync(pathlib.join(path, file), license + "\r\n" + fs.readFileSync(pathlib.join(path, file), 'utf-8'));
            });
        } catch(e) {
            console.log("GPL 3.0 license could not be prepended to a file. Please check the source code and compile again. Error Message: " + e.message);
        }
    } else {
        console.log("GPL 3.0 license could not be prepended to a file. Please check the source code and compile again");
        process.exit();
    }
}