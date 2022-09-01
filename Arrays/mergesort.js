function mergeSorted(array1, array2) {
    const mergedArray = [];
    let i = 0;
    let j = 0;
    if (array1.length === 0)
        return array2;
    if (array2.length === 0)
        return array1;

    while (array1[i] || array2[j]) {
        if (!array2[j] || array1[i] < array2[j]) {
            mergedArray.push(array1[i]);
            i++;
        } else {
            mergedArray.push(array2[j]);   
            j++;          
        }                   
    } 
    return mergedArray;   
}
console.log(mergeSorted([0,3,4,31], [4,6,30]));