function generatePassword(numberOfChars, ContainsNumbers, containsUppercase, containsLowercase, ContainsSymbols) {
    let numberChars = "1234567890";
    let uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    let symbolChars = "!@#$%^&*()_-+=/";
    let containingChars = "";
    let generatedPassword = "";

    containingChars += ContainsNumbers ? numberChars : "";
    containingChars += containsUppercase ? uppercaseChars : "";
    containingChars += containsLowercase ? lowercaseChars : "";
    containingChars += ContainsSymbols ? symbolChars : "";

    if (numberOfChars < 4) {
        return `EEROR! The number of characters must be greater <span class="nowrap">than 3</span>`;
    }
    if (containingChars.length === 0) {
        return `ERROR! You MUST select atleast on character set to <span class="nowrap">continue</span>`;
    }
    for (let i = 0; i < numberOfChars; i++) {
        let randomIndex = Math.floor(Math.random() * containingChars.length);
        generatedPassword += containingChars[randomIndex];
    }

    return generatedPassword;
}


function generate() {
    let numberOfChars = document.getElementById("numberTextbox").value;
    let ContainsNumbers = document.getElementById("numbers").checked;
    let containsUppercase = document.getElementById("uppercase").checked;
    let containsLowercase = document.getElementById("lowercase").checked;
    let ContainsSymbols = document.getElementById("symbols").checked;

    let result = generatePassword(numberOfChars, ContainsNumbers, containsUppercase, containsLowercase, ContainsSymbols);
    document.getElementById("generatedPassword").innerHTML = result;

}
