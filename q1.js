const fun = (arr) => {
    let dup = false;
    // edge case
    if (arr.length < 2) return arr[0]; 

    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr.length; j++) {
            console.log(`THe I vale = ${i}`)
            console.log(`THhe j vale = ${j}`)
            
            
            if (arr[i] == arr[j] && i == j ) continue;
            if (arr[i] == arr[j]) {
                console.log("The are duplicated");
                break;
            }


            if (j == arr.length-1) {
                console.log("Change the dup flag");
                dup = true;
            }

        }

        if (dup == true) return arr[i];
    }
    return arr[arr.length-1]

}

// Test Cases: 
// let nums = [2,2,1]; // 1
let nums = [5, 1, 3, 2, 1, 2, 3]; // 5
// let nums = [4]; // 4
console.log(fun(nums));