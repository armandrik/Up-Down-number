let myBtn1 = document.getElementById('btn1');
let myBtn2 = document.getElementById('btn2');

myBtn1.addEventListener('click', Up);
myBtn2.addEventListener('click', Down);

function Up() {
    var value = parseInt(document.getElementById('number').value, 10); // value ro be int tabdil kardim
    value = isNaN(value) ? 0 : value;
    value++;
    document.getElementById('number').value = value;

    let myIcon = document.getElementById('icon1');
    myIcon.style.color = "white";
}

function Down() {
    var value = parseInt(document.getElementById('number').value, 10);
    value = isNaN(value) ? 0 : value;
    value--;
    document.getElementById('number').value = value;

    let myIcon2 = document.getElementById('icon2');
    myIcon2.style.color = "white";
}