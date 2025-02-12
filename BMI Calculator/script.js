function calBMI() {
    let weight = Number(document.getElementById("weight").value);
    let height = Number(document.getElementById("height").value);

    let BMI = (weight / (height ** 2)).toFixed(2);
    let result;

    if (BMI < 18.5) {
        result = "Underweight";
    } else if (BMI >= 18.5 && BMI < 25) {
        result = "Normal";
    } else if (BMI >= 25 && BMI < 30) {
        result = "Overweight";
    } else if (BMI >= 30) {
        result = "Obese";
    } else {
        result = "Alien"
    }

    document.getElementById("finalResult").innerText = `Your BMI is ${BMI} and you are ${result}`;

    document.getElementById("container").style.height = "341px";
    document.getElementById("result").style.display = "block";
}
