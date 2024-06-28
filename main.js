
const Calculate = ()=>{
    //Constants
    const principal = Number(document.getElementById("principalLabel").value);
    const duration = Number(document.getElementById("durationLabel").value);
    const rate = Number(document.getElementById("rateLabel").value);
    const interest = document.getElementById("interestSpan");
    const amount = document.getElementById("amountSpan");
    const monthlyRadio = document.getElementById("monthlyRadio");
    const annuallyRadio = document.getElementById("annuallyRadio");

    

    if(monthlyRadio.checked){
       let Money = (principal*(1+(rate/100))**(duration/12))
        amount.innerHTML = (Math.round(Money*100)/100).toFixed(2)
        interest.innerHTML =  (Math.round((Money-principal)*100)/100).toFixed(2)
    }
    else if(annuallyRadio.checked){
       let Money = (principal*(1+(rate/100))**duration)
        amount.innerHTML = (Math.round(Money*100)/100).toFixed(2)
        interest.innerHTML =  (Math.round((Money-principal)*100)/100).toFixed(2)
    }
}

