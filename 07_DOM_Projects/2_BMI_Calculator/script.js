const form = document.querySelector('form');
// This use case will give you empty
// const weight = parseInt(document.querySelector('#weight').value);
form.addEventListener('submit', function (e) {
    e.preventDefault();

    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results'); // Corrected: Removed parseInt

    if (isNaN(height) || height <= 0) { // Corrected: Removed height === '' and changed height < 0 to height <= 0
        results.innerHTML = `Please give a valid height: ${height}`;
    } else if (isNaN(weight) || weight <= 0) { // Corrected: Removed height === '' and changed weight < 0 to weight <= 0
        results.innerHTML = `Please give a valid weight: ${weight}`;
    } else {
        const bmi = (weight / ((height / 100) * (height / 100))).toFixed(2); // Corrected: Adjusted BMI formula
        // Show the result
        results.innerHTML = `<span>${bmi}</span>`;
    }
});
