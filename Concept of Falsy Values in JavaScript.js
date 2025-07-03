//Falsy values are important because they can unintentionally cause conditions to fail or code to run differently than expected.
// Example = [0] Zero is falsy because it represents no numeric value so if (0) is false.
 if (0) {
  console.log("This will not run, because 0 is falsy.");
 }
// [""] empty string An empty string is falsy because it has no characters so if ("") is false.
if ("") {
  console.log("This will not run, because an empty string is falsy.");
}
// null means no value so if (null) is false.
if (null) {
  console.log("This will not run, because null is falsy.");
}
