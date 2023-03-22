// step-1: Add event listener to withdraw button 
document.getElementById("btn-withdraw").addEventListener('click',function(){
    //step-2: get value from withdraw field and parse to float
    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmountString = withdrawField.value;
    const newWithdrawAmount = parseFloat(newWithdrawAmountString);
    //step-3: reset input field
    withdrawField.value = '';
    //step-4: get previous withdraw value
    const withdrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawAmountString = withdrawTotalElement.innerText;
    const previousWithdrawAmount = parseFloat(previousWithdrawAmountString);
    //step-5: set to total 
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    withdrawTotalElement.innerHTML = newWithdrawTotal;
    // step-6: calculate balance
    const balanceElement = document.getElementById('balance-total');
    const previousBalanceTotalString = balanceElement.innerText;
    const previousBalanceTotal = parseFloat(previousBalanceTotalString);
    //step-7: calculate new balance total and set it to balance 
    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    balanceElement.innerText = newBalanceTotal;
})