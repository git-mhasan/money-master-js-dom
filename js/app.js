// const incomeInput = getInputValue("income-input");
// const foodCostInput = getInputValue("food-cost-input");
// const rentCostInput = getInputValue("rent-cost-input");
// const clothCostInput = getInputValue("cloth-cost-input");

// function for getting the input field value in float point number.
function getInputValue(idName) {
    // const inputField = document.getElementById(idName);
    const inputFieldText = document.getElementById(idName).value;
    const inputValue = parseFloat(inputFieldText);
    // inputField.value = '';
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

//Calculate Button clicked event handelled.
document.getElementById("calculate-btn").addEventListener("click", function () {
    const incomeInputValue = getInputValue("income-input");
    const foodCostInputValue = getInputValue("food-cost-input");
    const rentCostInputValue = getInputValue("rent-cost-input");
    const clothCostInputValue = getInputValue("cloth-cost-input")

    if (incomeInputValue >= 0 && foodCostInputValue >= 0 && rentCostInputValue >= 0 && clothCostInputValue >= 0) {
        const totalExpenses = totalExpense(foodCostInputValue, rentCostInputValue, clothCostInputValue);
        const balanceAmount = incomeInputValue - totalExpenses;
        if (balanceAmount < 0) {
            alert('\nOpps..!\nYour Expenses exceeds your Income.');
        } else {
            displayMoneyAmount("total-expense", totalExpenses);
            displayMoneyAmount("balance", balanceAmount);
        }
    }
    else if (isNaN(incomeInputValue) || incomeInputValue < 0) {
        if (incomeInputValue < 0) {
            alert('\n Please insert only positive amount as Income.');
        } else {
            alert('\n Please do not insert any text as Income.');
        }
    }
    else if (isNaN(foodCostInputValue) || foodCostInputValue < 0) {
        if (foodCostInputValue < 0) {
            alert('\n Food expenses must be a non negative amount.');
        } else {
            alert('\n Please do not insert any text as Food Expense.');
        }
    }
    else if (isNaN(rentCostInputValue) || rentCostInputValue < 0) {

        if (rentCostInputValue < 0) {
            alert('\n Rent should be a positive amount.');
        } else {
            alert('\n Please do not insert any text as Rent.');
        }
    }
    else if (isNaN(clothCostInputValue) || clothCostInputValue < 0) {
        if (clothCostInputValue < 0) {
            alert('\n Please insert only positive amount for clothing expense.');
        } else {
            alert('\n Please do not insert any text as Clothing Expense.');
        }
    }
    // console.log(incomeInput.value, foodCostInput.value, rentCostInput.value, clothCostInput.value);
    // console.log(getInputValue("income-input"));
    // displayMoneyAmount("total-expense", 3444);
    // displayMoneyAmount("balance", 3884);
    // displayMoneyAmount("saving-amount", 3444);
    // displayMoneyAmount("remaining-balance", 3444);
})