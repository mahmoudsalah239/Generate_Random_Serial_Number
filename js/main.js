

let serial = document.querySelector(".serial");

let character = "qwertyuiopssdfghjklxcvbnmsfghjklrtyuiop23457kjhgffhjERTYUIOPLKJHGFMNBVC";
function generateSerail() {
    let serialnumber = '';
    for (let i = 0; i < 12; i++) {
        serialnumber += character[Math.floor(Math.random() * character.length)];
        serial.innerHTML = serialnumber
    }
    let final = '';
    for (let i = 0; i < serialnumber.length; i++) {
        if (i == 4 || i == 8) {
            final += "-";
            final += serialnumber[i]
        }
        else {
            final += serialnumber[i]
        }
    }
    serial.innerHTML = final;

}
generateSerail()