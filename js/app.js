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

//function for dispalying money amount
function displayMoneyAmount(idName, amount) {
    document.getElementById(idName).innerText = amount;
}

document.getElementById("calculate-btn").addEventListener("click", function () {
    // console.log(incomeInput.value, foodCostInput.value, rentCostInput.value, clothCostInput.value);
    // console.log(getInputValue("income-input"));
    displayMoneyAmount("total-expense", 3444);
    displayMoneyAmount("balance", 3884);
    displayMoneyAmount("saving-amount", 3444);
    displayMoneyAmount("remaining-balance", 3444);
})