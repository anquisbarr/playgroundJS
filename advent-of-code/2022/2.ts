const decoder = new TextDecoder("utf-8");

const input = decoder.decode(Deno.readFileSync("./files/day2_input.txt"))
  .split(
    "\n",
  );

// a = rock , b = paper , c = scissors
// x = rock,  y = paper,  z= scissors
function play1(p1: string, p2: string) {
  let result = 0;
  if (p1 === "A" && p2 === "X") {
    // console.log("draw");
    result = 3 + 1;
  } else if (p1 === "A" && p2 === "Y") {
    // console.log("p2 wins");
    result = 6 + 2;
  } else if (p1 === "A" && p2 === "Z") {
    // console.log("loss");
    result = 0 + 3;
  }

  if (p1 === "B" && p2 === "X") {
    // console.log("loss");
    result = 0 + 1;
  } else if (p1 === "B" && p2 === "Y") {
    // console.log("draw");
    result = 3 + 2;
  } else if (p1 === "B" && p2 === "Z") {
    // console.log("p1 wins");
    result = 6 + 3;
  }

  if (p1 === "C" && p2 === "X") {
    // console.log("p1 wins");
    result = 6 + 1;
  } else if (p1 === "C" && p2 === "Y") {
    // console.log("loss");
    result = 0 + 2;
  } else if (p1 === "C" && p2 === "Z") {
    // console.log("draw");
    result = 3 + 3;
  }
  return result;
}

// x = loss, y = draw, z=win
// a = rock , b = paper , c = scissors
function play2(p1: string, p2: string) {
  let result = 0;
  if (p1 === "A" && p2 === "X") {
    result = 3 + 0;
  } else if (p1 === "A" && p2 === "Y") {
    result = 1 + 3;
  } else if (p1 === "A" && p2 === "Z") {
    result = 2 + 6;
  }

  if (p1 === "B" && p2 === "X") {
    result = 1 + 0;
  } else if (p1 === "B" && p2 === "Y") {
    result = 2 + 3;
  } else if (p1 === "B" && p2 === "Z") {
    result = 3 + 6;
  }

  if (p1 === "C" && p2 === "X") {
    result = 2 + 0;
  } else if (p1 === "C" && p2 === "Y") {
    result = 3 + 3;
  } else if (p1 === "C" && p2 === "Z") {
    result = 1 + 6;
  }

  return result;
}

let totalResult1 = 0;
let totalResult2 = 0;
input.forEach((line) => {
  const [p1, p2] = line.split(" ");
  totalResult1 += play1(p1, p2);
  totalResult2 += play2(p1, p2);
});

// // console.log(input);
console.log("Part 1: ", totalResult1);
console.log("Part 2: ", totalResult2);
