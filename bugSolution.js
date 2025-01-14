function foo(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.'); // Handle null values by throwing an error
  }
  return a + b;
}

console.log(foo(1, 2)); // Output: 3

//Example of Error handling
try{
    console.log(foo(1, null));
}catch(e){
    console.error("Error:", e.message);
}
// Output: Error: Null values are not allowed.