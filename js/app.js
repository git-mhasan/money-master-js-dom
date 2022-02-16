const incomeInput = document.getElementById("income-input");
const foodCostInput = document.getElementById("food-cost-input");
const rentCostInput = document.getElementById("rent-cost-input");
const clothCostInput = document.getElementById("cloth-cost-input");

// function for getting the input field value in float point number.
function getInputValue(idName) {
    const inputFieldText = document.getElementById(idName).value;
    const inputValue = parseFloat(inputFieldText);
    return inputValue;
}

// function for calculating total expenses.
function totalExpense(foodExpense, rentExpense, clothExpense) {
    const totalExpense = foodExpense + rentExpense + clothExpense;
    return totalExpense;
}

document.getElementById("calculate-btn").addEventListener("click", function () {
    // console.log(incomeInput.value, foodCostInput.value, rentCostInput.value, clothCostInput.value);
    console.log(getInputValue("income-input"));
})