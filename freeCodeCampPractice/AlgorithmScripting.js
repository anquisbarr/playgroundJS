function  confirmEndingString(str, target) {
    const letters = str.split("");
    if (target.length > 1) {
        let i = target.length > 1 ? target.length : 1;
        console.log(i)
        let latest = letters.splice(str.length - i, i + 1);
        let latestStr = latest.join('');
        if (latestStr !== target ) {
            return false;
        }else {
            return true;
        }
        
    }
    else { 
        let latest = letters.splice(str.length - 1, str.length +1);
        let latestStr = latest.join('');
        if (target !== latestStr) {
            return false;
        }
        return true;
    }
}

//confirmEndingString('Bastian', 'an');

function titleCase(str) {
    const letters = str.split(" ");
    for (let i=0; i < letters.length; i++) {
        if (letters[i] !== 'the' || letters[i] !== 'of') {
            let char = letters[i][0];
            const replaced = letters[i].replace(char,char.toUpperCase());
            letters[i] = replaced;
            for (let j=1; j < letters[i].length; j++) {
                let char1 = letters[i].substring(j,letters[i].length);
                const substr = letters[i].replace(char1,char1.toLowerCase());
                letters[i] = substr;
            }
            console.log(letters[i]);
        }
    }
    return letters.join(" ");
}

// titleCase("I'm a little tea pot");
// titleCase("HERE IS MY HANDLE HERE IS MY SPOUT")

function frankenSplice(arr1, arr2, n) {
    let temp = arr2.slice();
    arr1
    arr2
    const v1 = temp.slice(0,n);
    const v2 = temp.splice(n,temp.length+1);
    let result = v1.concat(arr1).concat(v2);
    console.log(result);
    return result;
}

// frankenSplice([1, 2, 3], [4, 5], 1);
// frankenSplice(["claw", "tentancle"] , ["head","shoulders", "knees", "toes"], 2)

function bounce(arr) {
    let arrSize = arr.length;
    let result = [];
    for (let i=0; i<arrSize; i++) {
        if (arr[i]) {
            result.push(arr[i]);
        }
        else
            continue;
    }
    console.log(result);
    return result;
}

// bounce([7,"ate","",false,9]);

function getIndexToIns(arr, num) {
    if (arr.length === 0) {
        return 0;
    }

    let temp = arr.slice().sort();
    let prevIndex = 0;
    
    for (let i=0; i<temp.length; i++) {
        if (temp[i] < num){
            prevIndex = i;
        }else {
            continue;
        }
    }

    if (prevIndex === 0) {
        return temp.length + 1;
    }

    console.log(prevIndex+1);
    return prevIndex+1;
}

// getIndexToIns([10,20,30,40,50],35);
getIndexToIns([3,10,5],3);