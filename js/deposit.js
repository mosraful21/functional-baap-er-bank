/*
1. add deposit button event handler
2. get deposit amount by using getInputFieldValueById function
3. get previous deposit amount by using getTextElementValueById function
4. calculate new deposit total and set the value
5. set new deposit total by using setTextElementValue function
6. get previous balance total by using getTextElementValueById function
7. set balance total using setTextElementValueById
*/

document.getElementById('btn-deposit').addEventListener('click', function(){

    const newDepositAmount = getInputFieldValueById('deposit-field');

    if(isNaN(newDepositAmount)){
        alert('Please provide a valid number');
        return;
    }
    
    const previousDepositTotal = getTextElementValueById('deposit-total'); 
    const previousBalanceTotal = getTextElementValueById('balance-total');

    const newDepositTotal = previousDepositTotal + newDepositAmount;
    setTextElementValueById('deposit-total', newDepositTotal);

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    setTextElementValueById('balance-total', newBalanceTotal);
});







/*
document.getElementById('btn-deposit').addEventListener('click', function(){

    const depositField = document.getElementById('deposit-field');
    const newDepositAmount = parseFloat(depositField.value);
    
    depositField.value = '';

    const depositTotalElement = document.getElementById('deposit-total');
    const previousDepositTotal = parseFloat(depositTotalElement.innerText);

    const newDepositTotal = previousDepositTotal + newDepositAmount;
    depositTotalElement.innerText = newDepositTotal;

    const balanceTotalElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(balanceTotalElement.innerText);

    const newBalanceTotal = previousBalanceTotal + newDepositAmount;
    balanceTotalElement.innerText = newBalanceTotal;
});
*/