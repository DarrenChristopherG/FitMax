document.getElementById('calorieForm').addEventListener('submit', function(e) {
    e.preventDefault();

    const age = document.getElementById('age').value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const height = document.getElementById('height').value;
    const weight = document.getElementById('weight').value;
    const activityRate = document.getElementById('activity-rate').value;

    let bmr;
    if (gender === 'male') {
        bmr = 88.362 + (13.397 * weight) + (4.799 * height) - (5.677 * age);
    } else {
        bmr = 447.593 + (9.247 * weight) + (3.098 * height) - (4.330 * age);
    }

    const totalCalories = bmr * activityRate;

    // Store the totalCalories in localStorage
    localStorage.setItem('totalCalories', totalCalories);

    // Optionally, redirect to the Recipes page
    window.location.href = 'Recipes.html';

    document.getElementById('result').textContent = `Your daily caloric intake should be approximately ${totalCalories.toFixed(2)} calories.`;
});
