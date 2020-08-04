// pin generate section
document.getElementById("pin-generatorBtn").addEventListener('click', function(){
    function randomFixedInteger (length) {
        return Math.round(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1)); //Formula for 4 digit: 1000 + math.random()*(10000 - 1000 -1) or 8999;
    }
    const randomNumber = randomFixedInteger(6);
    document.getElementById('pin-inputArea').value = randomNumber ;
})