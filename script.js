function compute()
{
    var principal = document.getElementById("principal").value;
    var rate = document.getElementById("rate").value;
    var years = document.getElementById("years").value;
    var interest = principal * years * rate / 100;
    var year = new Date().getFullYear()+parseInt(years);
    if (principal < 1){
        alert ("Please enter a positive number");
        document.getElementById("principal").focus();
        
    } else {
        document.getElementById("result").innerHTML = "If you deposit <span class='highlight'>"+principal+ "</span> at an interest rate of <span class='highlight'>"+rate+ "</span>, you will receive an amount of <span class='highlight'>"+interest+ "</span> in the year <span class='highlight'>"+year+ "</span>";
    }
}

function updateRate(){
    var rateval = document.getElementById("rate").value;
    document.getElementById("rate_val").innerText=rateval+"%";
}
 

