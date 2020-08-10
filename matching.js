// pin generate section
let generatedValue = '' ;

document.getElementById("pin-generatorBtn").addEventListener('click', function(){
    function randomFixedInteger (length) {
        return Math.round(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1)); //Formula for 4 digit: 1000 + math.random()*(10000 - 1000 -1) or 8999;
    }
    const randomNumber = randomFixedInteger(4);
    generatedValue = randomNumber ;
    
    document.getElementById('pin-inputArea').value = generatedValue ;
})

// numberButton functionality 

let buttonValue = '';

document.getElementById("sevenToZero").addEventListener('click', function(event){

    if (!event.target.classList.contains('button')) {
        return;
      }    
    const buttonPress = event.target.innerHTML ;
    buttonValue =  buttonValue + buttonPress ;

    document.getElementById("pin-matchingArea").value = buttonValue;
})

//BackSpace & cancel section

document.getElementById('backSpace').addEventListener('click', function(){
    let updatedValue = buttonValue.slice(0, buttonValue.length - 1);
    buttonValue = updatedValue;
    document.getElementById("pin-matchingArea").value = buttonValue;
})

document.getElementById('clear').addEventListener('click', function(){
    buttonValue = '';
    document.getElementById("pin-matchingArea").value = buttonValue;
})

//Pin matching section

let tryLeftValue = 2;

document.getElementById("submit").addEventListener('click', function(){
    if(generatedValue == ''){
        window.alert("Please Generate Pin First");
    }
    else if(buttonValue == ''){
        window.alert("Please Press The Keys");   
    }else{
        if (generatedValue == buttonValue){
            generatedValue = '' ;
            document.getElementById('pin-inputArea').value = generatedValue ;
            buttonValue = '' ;
            document.getElementById("pin-matchingArea").value = buttonValue ;
            document.getElementById("notify-right").style.display = 'block';
            document.getElementById("notify-wrong").style.display = 'none';
            tryLeftValue = 2;
            document.getElementById("tryLeft").innerHTML = tryLeftValue + 1 ;
        }else{
            document.getElementById("notify-wrong").style.display = 'block';
            document.getElementById("notify-right").style.display = 'none';
            if(tryLeftValue > 0){
                tryLeftValue-- ;
            document.getElementById("tryLeft").innerHTML = tryLeftValue + 1 ;
            }
            else if(tryLeftValue == 0){
                document.getElementById("tryLeft").innerHTML = tryLeftValue ;
                document.getElementById("submit").style.display = 'none';
                document.getElementById("notify-block").style.display = 'block';
                document.getElementById("notify-wrong").style.display = 'none';
            }
        }
    }
})