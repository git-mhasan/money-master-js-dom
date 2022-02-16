
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

    //Error hndelling: the input value must be number and greater then or equal to zero.
    if (incomeInputValue >= 0 && foodCostInputValue >= 0 && rentCostInputValue >= 0 && clothCostInputValue >= 0) {
        const totalExpenses = totalExpense(foodCostInputValue, rentCostInputValue, clothCostInputValue);
        const balanceAmount = incomeInputValue - totalExpenses;
        if (balanceAmount < 0) {
            alert('\nOpps..!\nYour Expenses exceeds your Income.');
        } else {
            displayMoneyAmount("total-expense", totalExpenses.toFixed(2));
            displayMoneyAmount("balance", balanceAmount.toFixed(2));
        }
    }
    else if (isNaN(incomeInputValue) || incomeInputValue < 0) {
        if (incomeInputValue < 0) {
            alert('\n Please insert only positive amount as Income.');
        } else {
            alert('\n Please do not insert any text as Income or do not leave it empty.');
        }
    }
    else if (isNaN(foodCostInputValue) || foodCostInputValue < 0) {
        if (foodCostInputValue < 0) {
            alert('\n Food expenses must be a non negative amount.');
        } else {
            alert('\n Please do not insert any text as Food Expense or do not leave it empty.');
        }
    }
    else if (isNaN(rentCostInputValue) || rentCostInputValue < 0) {

        if (rentCostInputValue < 0) {
            alert('\n Rent should be a positive amount.');
        } else {
            alert('\n Please do not insert any text as Rent or do not leave it empty.');
        }
    }
    else if (isNaN(clothCostInputValue) || clothCostInputValue < 0) {
        if (clothCostInputValue < 0) {
            alert('\n Please insert only positive amount for clothing expense.');
        } else {
            alert('\n Please do not insert any text as Clothing Expense or do not leave it empty.');
        }
    }
})

//Save button click event handelled.
document.getElementById("save-btn").addEventListener("click", function () {
    const incomeInputValue = getInputValue("income-input");
    const saveInputValue = getInputValue("save-input");
    const balanceAmount = parseFloat(document.getElementById("balance").innerText);

    //Error hndelling: the value must be number and greater then or equal to zero.
    if (incomeInputValue >= 0 && saveInputValue >= 0 && balanceAmount >= 0) {
        const savingAmount = incomeInputValue * (saveInputValue / 100);
        if (balanceAmount >= savingAmount) {
            const remainingAmount = balanceAmount - savingAmount;
            displayMoneyAmount("saving-amount", savingAmount.toFixed(2));
            displayMoneyAmount("remaining-balance", remainingAmount.toFixed(2));
        }
        else {
            alert('\n Saving amount should be at least equal to current balance');
        }
    }
    else {
        alert('\n Income amount and saving percentage should be a positive value.');
    }

})