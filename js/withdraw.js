/*
1. add withdraw button event handler
2. get withdraw amount by using getInputFieldValueById function
3. get previous withdraw amount by using getTextElementValueById function
4. calculate new withwraw total and set the value
5. set new withdraw total by using setTextElementValue function
6. get previous balance total by using getTextElementValueById function
7. set balance total using setTextElementValueById
*/

document.getElementById('btn-withdraw').addEventListener('click', function(){

    const newWithdrawAmount = getInputFieldValueById('withdraw-field');
    
    if(isNaN(newWithdrawAmount)){
        alert('Please provide a valid number');
        return;
    }

    const previousWithdrawTotal = getTextElementValueById('withdraw-total');
    const previousBalanceTotal = getTextElementValueById('balance-total');

    if(newWithdrawAmount > previousBalanceTotal){
        alert('Baap er Bank e Taka Nai!!');
        return;
    }
    else{
        const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
        setTextElementValueById('withdraw-total', newWithdrawTotal);
        const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
        setTextElementValueById('balance-total', newBalanceTotal);
    }

});







/*
document.getElementById('btn-withdraw').addEventListener('click', function(){

    const withdrawField = document.getElementById('withdraw-field');
    const newWithdrawAmount = parseFloat(withdrawField.value);

    withdrawField.value = '';

    const withwrawTotalElement = document.getElementById('withdraw-total');
    const previousWithdrawTotal = parseFloat(withwrawTotalElement.innerText);

    const newWithdrawTotal = previousWithdrawTotal + newWithdrawAmount;
    withwrawTotalElement.innerText = newWithdrawTotal;

    const totalBalanceElement = document.getElementById('balance-total');
    const previousBalanceTotal = parseFloat(totalBalanceElement.innerText);

    const newBalanceTotal = previousBalanceTotal - newWithdrawAmount;
    totalBalanceElement.innerText = newBalanceTotal;
})*/