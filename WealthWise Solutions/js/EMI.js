function calculateEMI() {
    var loanAmount = parseFloat(document.getElementById("loanAmount").value);
    var interestRate = parseFloat(document.getElementById("interestRate").value) / 100 / 12;
    var loanTerm = parseFloat(document.getElementById("loanTerm").value);

    var monthlyPayment = (loanAmount * interestRate) / (1 - Math.pow(1 + interestRate, -loanTerm));
    var totalPayment = monthlyPayment * loanTerm;
    var totalInterest = totalPayment - loanAmount;

    document.getElementById("result").innerHTML = "Monthly EMI: " + monthlyPayment.toFixed(2) +
        "<br>Total Payment: " + totalPayment.toFixed(2) +
        "<br>Total Interest: " + totalInterest.toFixed(2);
}
