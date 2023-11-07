function verify() {
    console.log("a")
    let a = parseInt(elementA.value);
    console.log(a)
    let result
    if (a < 62) {
        result=a**2+9
    }
    else {
        result= 1/(a**2) + 4*a + 5
    }
    document.getElementsByName('result').innerText = result;
    document.getElementsByName('result')[0].value = result;
    check=true;
}


function send() {
    if (check) {
        let textCondition = document.getElementsByTagName('p')[0].innerText
        document.getElementsByName('formulation')[0].value = textCondition;
        document.getElementsByName('result')[0].value = result;
        document.getElementById("UserEnter").submit();
    } else {
        alert("Есть недостатки. Повторите ввод")
    }
}
function verify_send() {
    verify();
    send();
}

let messageText = document.getElementById("result").innerText
console.log(messageText)
let result;
let check = false;

const elementA = document.getElementById("a");
elementA.addEventListener('keyup', verify);

const elementVerify = document.getElementById("verify");
elementVerify.addEventListener('click', verify);

const elementSend = document.getElementById("send");
elementSend.addEventListener('click', send)
