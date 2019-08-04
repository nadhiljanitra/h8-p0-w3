function groupAnimals(animals) {
  var satuan=[]
  var hasil=[]
  animals.sort()
  for (i=0;i<animals.length;i++){
    satuan[i]=animals[i][0]
  }
  for (i=0;i<animals.length-1;i++) {
    if (satuan[i]===satuan[i+1]){
      hasil.pop();
      hasil.push([animals[i],animals[i+1]])
    } else if (satuan[i]!==satuan[i+1]){
      hasil.push([animals[i+1]])
    }
  }
 return hasil; 
}


// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]