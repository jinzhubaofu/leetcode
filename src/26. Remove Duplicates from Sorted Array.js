function removeDuplicatesFromSortedArray(arr) {

    if (arr.length < 2) {
        return arr.length;
    }

    let currentNum = arr[0];
    let nextNumPos = 0;
    let isRepeating = false;
    let total = 1;

    for (let i = 1, len = arr.length; i < len; i++) {
        if (arr[i] === currentNum) {
            if (isRepeating) {
                continue;
            }
            isRepeating = true;
            nextNumPos = i;
            continue;
        }
        currentNum = arr[i];
        arr[nextNumPos++] = arr[i];
        total++;
    }

    return total;
}

const arr = [1, 1, 1, 2, 2, 2, 3, 4];
const total = removeDuplicatesFromSortedArray(arr);
console.log(total, arr.slice(0, total));

function quchong(arr) {
    if (arr.length == 0) return 0
    let result = 1
    let cur_num = arr[0]

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] != cur_num) {
            result ++
            cur_num = arr[i]
        }
    }

    return result
}

const cases = [
    {
        input: [1, 1, 1, 2, 2, 2, 3, 4],
        output: 4
    },
    {
        input: [1, 1, 2],
        output: 2
    },
    {
        input: [1, 1, 2, 3, 3],
        output: 3
    },
    {
        input: [1, 1, 2, 3, 3, 4, 5],
        output: 5
    },
    {
        input: [1, 2, 3, 4, 5],
        output: 5
    },
    {
        input: [1],
        output: 1
    },
    {
        input: [],
        output: 0
    },
]

cases.forEach(({input, output}) => {
    console.log(removeDuplicatesFromSortedArray(input.slice()), output);
    console.log(quchong(input.slice()), output);
});
