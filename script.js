function calculate_tip(){
let billAmount=document.getElementById("bill_input")
let numberGuest=document.getElementById("number_input")
let select=document.getElementById("select")
let message=document.getElementById("message")
let tipAmount=((billAmount.value*select.value)/(numberGuest.value)).toFixed(2)
message.innerHTML=`The tip for each guest:`+ tipAmount
billAmount.value=""
numberGuest.value=""
select.value=""
if (tipAmount==="Nan"){
    message.innerHTML='Tip $0 for each guest'
    showTipAmount()
}
else{
    message.innerHTML=`Tip ${tipAmount} for each guest`
    showTipAmount()
}
}
function showTipAmount(){
    let x=message
    x.className="show"
    setTimeout(function(){
        x.className=x.className.replace("show", "");}, 3000)
}
