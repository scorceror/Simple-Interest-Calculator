function compute()
{
    var principal = document.getElementById("principal").value;
    if (principal < 1){
        alert ("Please enter a positive number");
        document.getElementById("principal").focus();
    }
    
    /* obtain all the values from the input fields */
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    
    /*Calculate the total a person will receive after a given period of time */
    //var total = parseInt(interest) + parseInt(principal);

    document.getElementById("result").innerText = "If you deposit "+principal+" at an interest rate of "+rate+". You will receive an amount of "+interest+" in the year "+year
    
}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval;
}
 

