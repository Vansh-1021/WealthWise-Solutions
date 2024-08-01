function calculate() {
    var profession = document.getElementById("profession").value;
    var income = parseFloat(document.getElementById("income").value);
    var savings = 0;
    var investment = 0;

    // Define rules for savings and investment based on profession type
    if (profession == "1") { // Student
        savings = income * 0.1;
        investment = income * 0.05;
    } else if (profession == "2") { // Entry Level
        savings = income * 0.15;
        investment = income * 0.1;
    } else if (profession == "3") { // Mid-Level
        savings = income * 0.2;
        investment = income * 0.15;
    } else if (profession == "4") { // Senior Level
        savings = income * 0.25;
        investment = income * 0.2;
    }

    // Display the result
    document.getElementById("result").innerHTML = "<h3>We Suggest That:</h3>" +
        "<p>You Should Save: " + savings.toFixed(2) + "</p>" +
        "<p>You Should Invest: " + investment.toFixed(2) + "</p>";
}