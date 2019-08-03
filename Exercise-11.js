function tentukanDeretAritmatika(arr) {
var selisih=[]
var selisih2=[]
    for (i=arr.length-1;i>1;i--){
        var banding2 = arr[i]
        var banding1 = arr[i-1]
        var banding = arr[i-2]
        selisih[i] = banding2-banding1
        selisih2[i] = banding1-banding
        if (selisih[i] !== selisih2[i]){
            return false;
        } 
    }
    return true;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false