let expenses = [];
let income = [];
let totalMoney = 0;

// Add expense
document.getElementById("add-expense").addEventListener("click", function() {
  let expenseName = document.getElementById("expense-name").value;
  let expenseAmount = document.getElementById("expense-amount").value;

  if(expenseName === "" || expenseAmount === ""){
    alert("Both fieldes must be filled")
    return
  }

  expenses.push({ name: expenseName, amount: expenseAmount });
  totalMoney -= parseInt(expenseAmount);
  updateExpenseList();
  updateTotalMoney();

  document.getElementById("expense-name").value = "";
  document.getElementById("expense-amount").value = "";
});

// Add income
document.getElementById("add-income").addEventListener("click", function() {
  let incomeName = document.getElementById("income-name").value;
  let incomeAmount = document.getElementById("income-amount").value;

  if(incomeName === "" || incomeAmount === ""){
    alert("Both fieldes must be filled")
    return
  }

  income.push({ name: incomeName, amount: incomeAmount });
  totalMoney += parseInt(incomeAmount);
  updateIncomeList();
  updateTotalMoney();

  document.getElementById("income-name").value = ""
  document.getElementById("income-amount").value = ""
});

// Update expense list
function updateExpenseList() {
  let expenseList = document.getElementById("expense-list");
  expenseList.innerHTML = "";

  for (let i = 0; i < expenses.length; i++) {
    let expense = expenses[i];
    expenseList.innerHTML += "<li>" + expense.name + ": $" + expense.amount + "</li>";
  }
}

// Update income list
function updateIncomeList() {
  let incomeList = document.getElementById("income-list");
  incomeList.innerHTML = "";

  for (let i = 0; i < income.length; i++) {
    let inc = income[i];
    incomeList.innerHTML += "<li>" + inc.name + ": $" + inc.amount + "</li>";
  }
}

// Update total money
function updateTotalMoney() {
  let totalMoneyElement = document.getElementById("total-money");
  totalMoneyElement.innerHTML = "$" + totalMoney;
}
