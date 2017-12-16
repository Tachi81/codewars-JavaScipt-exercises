class SmallestIntegerFinder {
  findSmallestInt(args, j =0, f=(i, n=1)=>{(i==args.length-1||n==args.length-i)?j=i:(args[i]<args[i+n])?f(i,n+1):f(i+n);} ) {
       f(j); // f=support function; j=indexOfMinimum; i=indexThatIsChecked, n= whichIndexIsNext
       return args[j];
  }
}

// let args = [8, 35, 7, 21, 4, 8];
// let indexOfMin =0
// const findIndexOfMin = (i, n = 1) =>{
//  (i == args.length - 1 ||n == args.length-i) ?indexOfMin = i: (args[i] < args[i + n])?findIndexOfMin(i, n + 1) : findIndexOfMin(i+n); return args[indexOfMin];

//    if (i == args.length - 1 || n == args.length-i) {         
//       console.log(args[i]);
//      j=i ;
//       return Number(args[i]);
//    } else if (args[i] < args[i + n]) {
//       res(i, n + 1);
//    } else {
//       res(i+n)
//    }
//   return args[j];
//  };
// findIndexOfMin(indexOfMin);



// console.log(findIndexOfMin());


var sif = new SmallestIntegerFinder();
sif.findSmallestInt([78, 56, 232, 12, 8]);
console.log(sif.findSmallestInt([78, 56, 232, 12, 8]))
