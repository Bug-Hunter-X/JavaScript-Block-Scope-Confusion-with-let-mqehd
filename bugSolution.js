function myFunc() {
  let x = 10;
  if (true) {
    // Avoid redeclaring x
    x = 20; 
    console.log(x); // Output: 20
  }
  console.log(x); // Output: 20
}
myFunc();