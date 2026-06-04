function calculate() {
    const amountInput = document.getElementById('amount');
    const currencySelect = document.getElementById('currency');
    const resultDiv = document.getElementById('result');
    const loader = document.getElementById('loader');
    
    const amount = parseFloat(amountInput.value);
    const currency = currencySelect.value;
    
    // Reset state
    resultDiv.style.opacity = "0";
    
    // Check for error without blocking the screen
    if (isNaN(amount) || amount <= 0) {
        resultDiv.innerHTML = '<span style="color: #f87171;">Please enter a valid amount</span>';
        resultDiv.style.opacity = "1";
        return; // Stop the function here
    }
    
    // Show loader
    loader.style.display = "block";
    
    // Simulate "calculating" delay
    setTimeout(() => {
        const rates = { 'USD': 1366.6652, 'EUR': 1585.0328, 'GBP': 1.3414 };
        let rate = rates[currency] || 1500;
        let total = amount * rate;
        
        loader.style.display = "none";
        resultDiv.innerHTML = `Result: ${total.toLocaleString()} NGN`;
        resultDiv.style.opacity = "1";
    }, 800);
}