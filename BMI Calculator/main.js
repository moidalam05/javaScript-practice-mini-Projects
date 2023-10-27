const form = document.querySelector("form");
const result = document.querySelector("#results");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  let height = Number(document.querySelector("#height").value);
  let weight = Number(document.querySelector("#weight").value);

  if (height === " " || height <= 0 || isNaN(height)) {
    result.innerHTML = `Give a valid height ${height}`;
  } else if (weight === " " || weight <= 0 || isNaN(weight)) {
    result.innerHTML = `Give a valid weight ${weight}`;
  } else {
      let bmi = (weight / ((height * height) / 10000)).toFixed(2);
      if (bmi < 18.6) {
          result.innerHTML = `Under Weight: ${bmi}`;
      }
      else if (bmi < 24.9) {
          result.innerHTML = `Normal Weight: ${bmi}`;
        } else {
          result.innerHTML = `Over Weight: ${bmi}`;
      }
  }
});
