var display=document.getElementById("display");

function append(value){
    display.value+=value;
}
function clearDisplay(){
    display.value="";
}
function calculate(){
    try{
        display.value=eval(display.value);
    }
    catch(error){
        display.value="Invalid expression";
    }
}
document.addEventListener("keydown",function(event){
    const key=event.key;

    if((key>="0" && key<="9")||"*/-+".includes(key)){
        append(key);
    }
    else if(key=="Enter"){
        event.preventDefault();
        calculate();
    }
    else if(key=="Backspace"){
        display.value=display.value.slice(0,-1);
    }
    else if(key=="Escape"){
        clearDisplay();
    }
});