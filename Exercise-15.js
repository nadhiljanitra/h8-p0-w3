function groupAnimals(animals) {
  var hurufDepanUnikArr=[]
  var hasil=[]
  animals.sort()
  
  for (i=0;i<animals.length;i++){
    //CHECK HURUF DEPAN UNIK ENGGA
   if(hurufDepanUnikArr.length < 1) {
     hurufDepanUnikArr.push(animals[i][0])
     hasil.push([animals[i]])
   } else {
     var check = true
    //  var index 
     for (j=0; j < hurufDepanUnikArr.length;j++){
       if (hurufDepanUnikArr[j] === animals[i][0]) {
        //  hasil[j].push([animals[i]])
          var index = j
         check = false
        }
      }
    if(check) {
      hurufDepanUnikArr.push(animals[i][0])
      hasil.push([animals[i]])
    } else {
      hasil[index].push(animals[i])
    }



   }

   
  }
  
   console.log(hurufDepanUnikArr)
   return hasil;
   
}


// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam','asa','mokok','dadas', 'kuda', 'anoa', 'kancil', 'unta', 'cicak']));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]