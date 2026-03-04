let budgetValue = 0;
let totalExpensesValue = 0;
let balanceColor = "green";


let expenseEntries = [
  ["groceries", 33],
  ["restaurants", 50],
  ["transport", 12],
  ["home", 70],
  ["subscriptions", 14],
  ["groceries", 28],
  ["subscriptions", 12]
];

expenseEntries.forEach(function(entry) {
  totalExpensesValue += entry[1];
});

function calculateAverageExpense() {
  if (expenseEntries.length === 0) {
    return 0;
  }

  return totalExpensesValue / expenseEntries.length;
}

function calculateBalance() {
  return budgetValue - totalExpensesValue;
}

function updateBalanceColor() {
  const balance = calculateBalance();

  if (balance < 0) {
    balanceColor = "red";
  } else if (balance < budgetValue * 0.25) {
    balanceColor = "orange";
  } else {
    balanceColor = "green";
  }
}

function calculateCategoryExpenses(categoryName) {
  let categoryTotal = 0;

  expenseEntries.forEach(function(entry) {
    if (entry[0] === categoryName) {
      categoryTotal += entry[1];
    }
  });

  return categoryTotal;
}

const categories = [
  "groceries",
  "restaurants",
  "transport",
  "home",
  "subscriptions"
];

function calculateLargestCategory() {
  let categoriesTotals = [];

  categories.forEach(function(category) {
    const total = calculateCategoryExpenses(category);
    categoriesTotals.push([category, total]);
  });

  let largestCategory = "";
  let largestValue = 0;

  categoriesTotals.forEach(function(entry) {
    if (entry[1] > largestValue) {
      largestValue = entry[1];
      largestCategory = entry[0];
    }
  });

  return largestCategory;
}

function addExpenseEntry(newEntry) {
  expenseEntries.push(newEntry);
  totalExpensesValue += newEntry[1];
}