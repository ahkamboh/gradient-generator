// Select by id
let color1 = document.getElementById("color1");
let color2 = document.getElementById("color2");
let gradient_box = document.getElementById("gradient-box");
let  body = document.querySelector("html");
let color_code = document.getElementById("color-code");
let copyBtn = document.getElementById("copyBtn");
function changeGradient() {
  // get value of linear gradients
  gradient_box.style.background = `radial-gradient( circle, ${color1.value}, ${color2.value})`;
  color_code.value = `${gradient_box.style.background} ;`;
  body.style.background = `radial-gradient( circle, ${color1.value}, ${color2.value})`;
  color_code.value = `${body.style.background} ;`;
}
color1.addEventListener("input", changeGradient);
color2.addEventListener("input", changeGradient);

// Text Copy
function myFunction() {
  // Get the text field
  let copyText = document.getElementById("color-code");
  // Select the text field
  copyText.select();
  copyText.setSelectionRange(0, 99999); // For mobile devices
  // Copy the text inside the text field
  navigator.clipboard.writeText(copyText.value);
}
