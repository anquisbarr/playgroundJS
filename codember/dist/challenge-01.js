import fs from 'fs';
const input = fs.readFileSync('src/files/users.txt', 'utf-8');
const fields = {
    usr: "usr",
    eme: "eme",
    psw: "psw",
    age: "age",
    loc: "loc",
    fll: "fll",
};
const users = input.split('\n');
let validUsrs = 0;
const validUsrsArr = {};
const usersObj = users.map((user) => {
    const userFields = user.split(' ');
    const usrObj = {};
    userFields.forEach((field) => {
        const [key, value] = field.split(':');
        usrObj[fields[key]] = value;
    });
    if (usrObj[fields.usr] && usrObj[fields.eme] && usrObj[fields.psw] && usrObj[fields.age] && usrObj[fields.loc] && usrObj[fields.fll]) {
        validUsrsArr[validUsrs] = usrObj;
        validUsrs++;
    }
    return validUsrsArr;
});
export function print() {
    const arr = usersObj;
    fs.writeFile('src/files/validUsers.json', JSON.stringify(arr), (err) => {
        if (err)
            throw err;
        console.log('The file has been saved!');
    });
    console.log(validUsrs);
}
//# sourceMappingURL=challenge-01.js.map