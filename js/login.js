document.getElementById('btn-submit').addEventListener('click', function(){
    const userEmail = document.getElementById('user-email');
    const email = userEmail.value ;
    const userPassword = document.getElementById('user-password');
    const password = userPassword.value;
    console.log(email, password);
    if((email === "ashiq@gmail.com") && ( password === "54321")){
        window.location.href =' bank.html';
    }
    else{
        alert("invalid User");
    }

})