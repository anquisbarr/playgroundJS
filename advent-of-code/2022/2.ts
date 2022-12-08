const decoder = new TextDecoder('utf-8');

const file = Deno.readFileSync('./files/day2_input.txt');
const data = decoder.decode(file).split('\n');

const gameCases = (play: string)  => {
    if (play === "A X") { //draw
        return (1 + 1);
    }
    else if (play === "A Y") { //win
        return (2 + 6);
    }
    else if (play === "A Z") { //loss
        return (3 + 0);
    }
    else if (play === "B X") { //loss
        return (1 + 0);
    }
    else if (play === "B Y") { // draw
        return (2 + 3);
    }
    else if (play === "B Z") { // win
        return (3 + 6);
    }
    else if (play === "C X") { // win
        return (1 + 6);
    }
    else if (play === "C Y") { // loss  
        return (2 + 0);
    }
    else if (play === "C Z") { // draw
        return (3 + 3);
    }
}

let result = 0;
data.forEach((line: string)=> {
    result += gameCases(line);
})
console.log(result);