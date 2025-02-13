function generatePassword() {

    let strength = document.getElementById("strength").value;
    let length = document.getElementById("length").value;

    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const digits = "0123456789";
    const symbols = "!@#$%^&*()_+-=[]{}|;:',.<>?/";

    let charPool = "";

    if (strength === "weak") {
        charPool = lowercase;
    } else if (strength === "medium") {
        charPool = lowercase + uppercase + digits;
    } else if (strength === "strong") {
        charPool = lowercase + uppercase + digits + symbols;
    } else if (strength === "very strong") {
        charPool = lowercase + uppercase + digits + symbols;
        length = Math.max(12, length); 
    }

    let password = "";
    
    for (let i = 0; i < length; i++) {
    password += charPool.charAt(Math.floor(Math.random() * charPool.length));
    }
        

    document.getElementById("finalResult").innerText = `Password : ${password}`;

    document.getElementById("container").style.height = "311px";
    document.getElementById("result").style.display = "block";
}