const root = document.querySelector(":root");


const hueInput = document.getElementById("hue");
const hueOutput = document.getElementById("hueOutput");

hueInput.addEventListener("input", (e) => {
  hueOutput.textContent = hueInput.value;
  root.style.setProperty("--hue", hueInput.value);
});

const saturationInput = document.getElementById("saturation");
const saturationOutput = document.getElementById("saturationOutput");

saturationInput.addEventListener("input", (e) => {
  saturationOutput.textContent = saturationInput.value;
  root.style.setProperty("--saturation", saturationInput.value + "%");
}
);

const lightnessInput = document.getElementById("lightness");
const lightnessOutput = document.getElementById("lightnessOutput");

lightnessInput.addEventListener("input", (e) => {
  lightnessOutput.textContent = lightnessInput.value;
  root.style.setProperty("--lightness", lightnessInput.value + "%");
}
);

const clrBackgroundBtn = document.getElementById("colorToBg");
clrBackgroundBtn.addEventListener("click", () => {
  const color = `hsl(${hueInput.value}, ${saturationInput.value}%, ${lightnessInput.value}%)`;
  document.body.style.backgroundColor = color;
});

const clrRefreshBtn = document.getElementById("colorBack");
clrRefreshBtn.addEventListener("click", () => {
  hueInput.value = 180;
  saturationInput.value = 80;
  lightnessInput.value = 50;
  document.body.style.backgroundColor = `hsl(${hueInput.value}, ${saturationInput.value}%, ${lightnessInput.value}%)`;
  root.style.setProperty("--hue", hueInput.value);
  root.style.setProperty("--saturation", saturationInput.value + "%");
  root.style.setProperty("--lightness", lightnessInput.value + "%");
});

let scheme = document.querySelector("input[name='scheme']:checked").value;

let showUserScheme = `
  <div class="user-scheme">
    <h2>Your Scheme</h2>
    <p>Your main color: ${maincolor}</p>
    <p>Saturation: ${saturationInput.value}</p>
    <p>Lightness: ${lightnessInput.value}</p> 
    <div class="${scheme}">${scheme}</div> 
  </div>
`


scheme.addEventListener("click", (e) => {
  root.style.setProperty("color-scheme", scheme);
});
// Get the value of elements with corresponding data-attribute
inputContainer.addEventListener("input", (event) => {
	data[event.target.dataset.prop] = event.target.value;
});

// update dependants on input changes
const updateColors = () => {
	const setCSSVariable = (prop, value) =>
		document.documentElement.style.setProperty(prop, value);

	// change the values of the css-variables to values from input
	setCSSVariable("--base-hue", baseHue.value);
	setCSSVariable("--saturation", saturation.value + "%");
	setCSSVariable("--lightness", lightness.value + "%");
	setCSSVariable("--rotation", rotation.value);

// const setTheme = theme => {
//   document.body.className = theme;
//   localStorage.setItem("theme", theme);
// }

/*
const saturationInput = document.getElementById("sat-slider");
const outputValueSat = document.querySelector("#sat-value");

saturationInput.addEventListener("change", () => {
  outputValueSat.textContent = saturationInput.value;
  root.style.setProperty("--saturation", saturationInput.value + "%");
});

const lightInput = document.getElementById("light-slider");
const outputValueLight = document.querySelector("#light-value");

lightInput.addEventListener("change", () => {
  outputValueLight.textContent = lightInput.value;
  root.style.setProperty("--lightness", lightInput.value + "%");
});

*/