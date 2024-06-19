document.addEventListener('DOMContentLoaded', function() {
    const totalCalories = localStorage.getItem('totalCalories');
    
    if (totalCalories) {
        // Convert totalCalories to a number
        const totalCaloriesNumber = parseFloat(totalCalories);

        // Calculate different calorie values
        const maintainWeight = totalCaloriesNumber;
        const mildWeightLoss = totalCaloriesNumber - 500;
        const weightLoss = totalCaloriesNumber - 750;
        const extremeWeightLoss = totalCaloriesNumber - 1000;

        // Display the results
        document.querySelector('.result-item.maintain .result-value').textContent = `${maintainWeight.toFixed(2)} calories/day`;
        document.querySelector('.result-item.mild-loss .result-value').textContent = `${mildWeightLoss.toFixed(2)} calories/day`;
        document.querySelector('.result-item.loss .result-value').textContent = `${weightLoss.toFixed(2)} calories/day`;
        document.querySelector('.result-item.extreme-loss .result-value').textContent = `${(extremeWeightLoss > 0 ? extremeWeightLoss : 0).toFixed(2)} calories/day`; // Ensure no negative values

    }
});
