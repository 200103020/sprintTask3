function convertCurrency() {
    var amount = document.getElementById('amount').value;
    var currency = document.getElementById('currency').value;
    var resultElement = document.getElementById('result');

    sellUSD = 431;
    buyUSD = 429;
    buyEuro = 507;
    sellEuro = 509;

    if (currency === 'usd') {
        var convertedKZT = (amount * buyUSD).toFixed(2);
        var convertedEUR = (amount * 0.92).toFixed(2);
        resultElement.innerHTML = convertedKZT + ' KZT (tenge),  ' + convertedEUR + ' EUR (euro)';
    } else if (currency === 'eur') {
        var convertedKZT = (amount * buyEuro).toFixed(2);
        var convertedUSD = (amount * 1.09).toFixed(2);
        resultElement.innerHTML = convertedKZT + ' KZT (tenge),  ' + convertedUSD + ' USD (dollar)';
    } else if (currency === 'kzt') {
        var convertedUSD = (amount / buyUSD).toFixed(2);
        var convertedEUR = (amount / buyEuro).toFixed(2);
        resultElement.innerHTML = convertedUSD + ' USD (dollar),  ' + convertedEUR + ' EUR (euro)';
    }

}