
document.getElementById('btn-deposit').addEventListener('click', function(){
    const newDepositAmount = getInputFieldValueById('deposit-field');
    const prevDepositAmount = getElementValueById('deposit-total');
    const newDepositTotalAmount = prevDepositAmount + newDepositAmount;

    setTotal('deposit-total', newDepositTotalAmount);

//balance calculation for deposit amount
    const previousBalanceTotal = getElementValueById('balance-total');
    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTotal('balance-total', newBalanceTotal);
});