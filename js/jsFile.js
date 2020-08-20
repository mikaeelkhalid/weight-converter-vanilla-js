// setting the visibilty of output to hidden
document.getElementById("output").style.visibility = "hidden";

document.getElementById("lbsInput").addEventListener("input", function (e) {
  // setting the visibilty of output to visible
  document.getElementById("output").style.visibility = "visible";

  // setting the user input value to varaible pounds
  let pounds = e.target.value;

  // converting pounds to Grams
  document.getElementById("gramsOutput").innerHTML = pounds / 0.0022046;

  // converting pounds to Kilograms
  document.getElementById("kgOutput").innerHTML = pounds / 2.2046;

  // converting pounds to Ounces
  document.getElementById("ounceOutput").innerHTML = pounds * 16;
});
