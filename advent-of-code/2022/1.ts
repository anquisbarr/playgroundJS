const decoder = new TextDecoder("utf-8");

const data = await Deno.readFile("files/day1_input.txt");

const lines = decoder.decode(data).split("\n");

const elfReport: {
    [key: number]: number;
} = {};


/*
    Part 1
*/

// Summing up the calories of each elf reported, and storing the result. Separated by an empty string.
let elfNumber = 0;
let caloriesSum = 0;
for (let i = 0; i < lines.length; i++) {
    if (lines[i] !== "") {
        caloriesSum = caloriesSum + parseInt(lines[i]);
    }
    else{
        elfReport[elfNumber] = caloriesSum;
        caloriesSum = 0;
        elfNumber++;
    }
}

// Sorting the elfReport to get on top the highest calorie values
for (let i = 0; i < Object.keys(elfReport).length; i++) {
    for (let j = 0; j < Object.keys(elfReport).length; j++) {
        if (elfReport[j] < elfReport[i]) {
            const temp = elfReport[i];
            elfReport[i] = elfReport[j];
            elfReport[j] = temp;
        }
    }
}

console.log(elfReport);

/*
    Part 2
*/

console.log("Top three calories", elfReport[0] + elfReport[1] +  elfReport[2]);