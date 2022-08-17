document.getElementById('btn-deposit').addEventListener('click', function(){
   
    //step-2 get the new deposit amount from input field
    const newDepositAmount = document.getElementById('new-deposit');
    const newDepositString = newDepositAmount.value ;
    const newDeposit = parseFloat(newDepositString);
    // clear the deposit field
    newDepositAmount.value ='' ; 

    if(isNaN(newDeposit)){
      alert("provide a valid amount");
      return;
    }

  
    // step-3 get the previous amount from the previous deposit text
   const depositTotal = document.getElementById('total-deposit');
   const previousDepositTotalAmountString =depositTotal.innerText;
   const previousDeposit = parseFloat(previousDepositTotalAmountString);

   // step -4 Total Deposit 
   const currentDepositTotal = previousDeposit + newDeposit ;
   depositTotal.innerText= currentDepositTotal;
   //console.log(depositTotalAmount);

    //step -5 get the previous balance from the previous deposit text
   const balanceTotal = document.getElementById('total-balance');
   const previousBalanceTotalAmountString =balanceTotal.innerText;
   const previousBalance = parseFloat(previousBalanceTotalAmountString);

     // step -6 Total Balance
   const currentBalanceTotal = previousBalance + newDeposit ;
   balanceTotal.innerText= currentBalanceTotal;

 
   
})