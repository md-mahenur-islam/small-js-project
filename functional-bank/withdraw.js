
// step-1: add event listener to withdraw button 
document.getElementById('btn-withdraw').addEventListener('click', function(){
    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    const previousWithdrawAmount = getElementValueById('withdraw-total');
    const newWithdrawTotal = previousWithdrawAmount + newWithdrawAmount;
    setTotal('withdraw-total', newWithdrawTotal);


//step-5: balance calculation
const previousBalanceTotal = getElementValueById('balance-total');
const newBalanceTotal = previousBalanceTotal - newWithdrawTotal;
setTotal('balance-total', newBalanceTotal);
})