//step-01: Add event listener to deposit Button

document.getElementById("btn-deposit").addEventListener("click", function(){

    // step-2:get deposit amount from deposit field 
    const depositField = document.getElementById('deposite-field');
    const newDepositAmountString = depositField.value;
    //step-2-5: string to float
    const newDepositAmount = parseFloat(newDepositAmountString);
    //step-3: reset deposite input field
    depositField.value ="";
    //step-4: update deposite total/previous total deposit
    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotalString = depositTotalElement.innerText;
    previousDepositTotal = parseFloat(previousDepositTotalString);

    //step-5: Calculate new deposit total 
    const newDepositTotal = previousDepositTotal + newDepositAmount;
    //step-6: set total 
    depositTotalElement.innerText = newDepositTotal;
    //step-7: balance calculation get the previous value from balance-total
    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    //step-7: calculate new balance total and set it to balance 
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceElement.innerText = newBalanceTotal;
})
