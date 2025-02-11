document.getElementById("addButton").addEventListener("click", function () {
    let transactionText = document.getElementById("transactionInput").value;
    let amount = parseFloat(document.getElementById("amountInput").value);
    let type = document.getElementById("typeInput").value;

    if (!transactionText || isNaN(amount) || amount <= 0) {
        alert("Please enter valid details.");
        return;
    }

    let transactionList = document.getElementById("transactionList");
    let newTransaction = document.createElement("div");
    newTransaction.classList.add("transaction-item");
    newTransaction.innerHTML = `${transactionText}: ₹${amount} (${type})`;

    transactionList.insertBefore(newTransaction, transactionList.firstChild);

    let balanceAmount = parseFloat(document.getElementById("balanceAmount").innerText.slice(1));
    let incomeAmount = parseFloat(document.getElementById("incomeAmount").innerText.slice(1));
    let expenseAmount = parseFloat(document.getElementById("expenseAmount").innerText.slice(1));

    if (type === "income") {
        incomeAmount += amount;
    } else {
        expenseAmount += amount;
    }

    balanceAmount = incomeAmount - expenseAmount;

    document.getElementById("incomeAmount").innerText = `₹${incomeAmount}`;
    document.getElementById("expenseAmount").innerText = `₹${expenseAmount}`;
    document.getElementById("balanceAmount").innerText = `₹${balanceAmount}`;

    document.getElementById("transactionInput").value = "";
    document.getElementById("amountInput").value = "";
});
