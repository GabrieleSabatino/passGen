//Character set - http://www.net-comber.com/charset.html

//function getRandomLetters() {
//    const password = Math.random().toString(30).substring(2) + Math.random().toString(18).substring(2);
//
//
//    document.getElementById('result').innerHTML = password
//}

const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"£$%&/()=?^*]}]-_.:,;';
var nePSS = generateString(16);

//get random values
function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result


}

//encode in base64
function utf8_to_b64(str) {
    return window.btoa(unescape(encodeURIComponent(str)));
}

//show base64
function showW() {
    document.getElementById('result').innerHTML = utf8_to_b64(nePSS);
    document.getElementById('result-ne').innerHTML = nePSS;

}

//show random values
function randomValues() {
   document.getElementById('result-ne').innerHTML = nePSS
   document.getElementById('result').innerHTML = ""
}

//hex encoder
function toHex(s) {
    var s = unescape(encodeURIComponent(s))
    var hexPass = ''
    for (var i = 0; i < s.length; i++) {
        hexPass += s.charCodeAt(i).toString(16)
    }
    return hexPass
}

function showHex() {
    document.getElementById('result').innerHTML = toHex(nePSS)
    document.getElementById('result-ne').innerHTML = nePSS;
 
}

//binary
function binary() {
    var input = nePSS;
    output = "";
    for (var i = 0; i < input.length; i++) {
        output += input[i].charCodeAt(0).toString(2) + " ";
    }

    return output

}


function showBin() {
    document.getElementById('result').innerHTML = binary(nePSS);
    document.getElementById('result-ne').innerHTML = nePSS;
}



//copy encoded
function copy() {

    var copyText = document.getElementById("result");
    var textArea = document.createElement('textarea');

    textArea.value = copyText.textContent;

    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();

    alert('Copied in the clipboard')
}

//copy NE
function copyNE() {

    var copyText = document.getElementById("result-ne");
    var textArea = document.createElement('textarea');

    textArea.value = copyText.textContent;

    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    textArea.remove();

    alert('Copied in the clipboard')
}

//clear data
function clearData() {
    document.getElementById('result').innerHTML = "";
    document.getElementById('result-ne').innerHTML = "";
    location.reload()
}





