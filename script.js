function calculateSum() {
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    
    let result = Number(num1) + Number(num2)
    document.getElementById('result').textContent = 'Sum: ' + result;

}
function calculateMinus() {
    let num1 = document.getElementById('num1').value
    let num2 = document.getElementById('num2').value
    
    let result = Number(num1) - Number(num2)
    document.getElementById('result').textContent = 'Difference: ' + result;

}

function RandomNumber() {
    const random = Math.random() *100
    document.getElementById('result').textContent = 'random: ' + random;
}