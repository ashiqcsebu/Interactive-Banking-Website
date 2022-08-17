document.getElementById('btn-withdraw').addEventListener('click', function(){
   
    //step-2 get the new deposit amount from input field
    const newWithdrawAmount = document.getElementById('new-Withdraw');
    const newWithdrawString = newWithdrawAmount.value ;
    const newWithdraw = parseFloat(newWithdrawString);
    console.log(newWithdraw);
    // clear the deposit field
    newWithdrawAmount.value ='' ; 
    if(isNaN(newWithdraw)){
      alert("provide a valid amount");
      return;
    }


    
  
    // step-3 get the previous amount from the previous deposit text
   const withdrawTotal = document.getElementById('total-withdraw');
   const previousWithdrawTotalAmountString = withdrawTotal.innerText;
   const previousWithdraw = parseFloat(previousWithdrawTotalAmountString);

  
  

    //step -5 get the previous balance from the previous deposit text
   const balanceTotal = document.getElementById('total-balance');
   const previousBalanceTotalAmountString =balanceTotal.innerText;
   const previousBalance = parseFloat(previousBalanceTotalAmountString);

   if(newWithdraw>previousBalance){
    alert("haha, nahid naki?");
    return;

   }

    // step -4 Total withdraw
    const currentWithdrawTotal = previousWithdraw + newWithdraw ;
    withdrawTotal.innerText= currentWithdrawTotal;

     // step -6 Total Balance
   const currentBalanceTotal = previousBalance - newWithdraw ;
   balanceTotal.innerText= currentBalanceTotal;
   
})