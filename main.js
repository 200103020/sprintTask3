function convertCurrency() {
    let amount = document.getElementById('amount').value;
    let currency = document.getElementById('currency').value;
    let resultElement = document.getElementById('result');

    sellUSD = 431;
    buyUSD = 429;
    buyEuro = 507;
    sellEuro = 509;

    if (currency === 'usd') {
        let convertedKZT = parseInt(amount * buyUSD).toFixed(2);
        let convertedEUR =parseInt(amount * 0.92).toFixed(2);
        resultElement.innerHTML = convertedKZT + ' KZT (tenge),  ' + convertedEUR + ' EUR (euro)';
    } else if (currency === 'eur') {
        let convertedKZT = parseInt(amount * buyEuro).toFixed(2);
        let convertedUSD = parseInt(amount * 1.09).toFixed(2);
        resultElement.innerHTML = convertedKZT + ' KZT (tenge),  ' + convertedUSD + ' USD (dollar)';
    } else if (currency === 'kzt') {
        let convertedUSD = (amount / buyUSD).toFixed(2);
        let convertedEUR = (amount / buyEuro).toFixed(2);
        resultElement.innerHTML = convertedUSD + ' USD (dollar),  ' + convertedEUR + ' EUR (euro)';
    }

}