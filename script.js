// script.js - The Brain of the App
function calculate() {
    const amount = document.getElementById('amount').value;
    const currency = document.getElementById('currency').value;
    const resultDiv = document.getElementById('result');
    
    if(!amount) { alert("Please enter a value"); return; }
    
    // Simulate real-time conversion logic
    let rate = currency === 'USD' ? 1500 : 1600;
    let total = amount * rate;
    
    resultDiv.innerHTML = `Result: ${total.toLocaleString()} NGN`;
    
    // This is where you trigger an ad event
    console.log("Calculated! Show interstitial ad now.");
}