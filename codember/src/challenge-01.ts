import fs from 'fs';

const input = fs.readFileSync('src/files/users.txt', 'utf-8');

const fields = {
    usr: "usr",
    eme: "eme",
    psw: "psw",
    age: "age",
    loc: "loc",
    fll: "fll",
}

const users = input.split('\n');

let validUsrs = 0;
const validUsrsArr = {}


export function print(): void {
    const arr = validUsrsArr;
    fs.writeFile('src/files/validUsers.json', JSON.stringify(arr), (err) => {
        if (err) throw err;
        console.log('The file has been saved!');
    });
    console.log(validUsrs);
}