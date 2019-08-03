function tentukanDeretGeometri(arr) {
    var beda=[]
    var beda2=[]
    for (i=arr.length-1;i>1;i--){
        var banding2 = arr[i]
        var banding1 = arr[i-1]
        var banding = arr[i-2]
        beda[i] = banding2/banding1
        beda2[i] = banding1/banding
        if (beda[i] !== beda2[i]){
            return false;
        } 
    }
    return true;
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false