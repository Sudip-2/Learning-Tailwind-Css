const randomColor = function () {
    const hex = '0123456789ABCDEF';
    let hexhash = '#';
    for (let i = 0; i < 6; i++) {
        hexhash += hex[Math.floor(Math.random() * 16)];
    }
    return hexhash;
}
const start = document.getElementById('start');
const stopbutton = document.getElementById('stop')
let startinterval;
let stopinterval;

// Function to start changing bg color
let changeDisplayColor = function () {
        if(!startinterval){
            startinterval = setInterval(() => {
            let color = randomColor()
            document.body.style.backgroundColor = color
            document.querySelector('#hexcode').innerHTML = color
        }, 1000);
        }
}
// Function to stop changing bg color
let stopInterval = function () {
    if(startinterval){
        clearInterval(startinterval)
        startinterval = null
    }
}

start.addEventListener('click', function (e) {
    changeDisplayColor()
})
stopbutton.addEventListener('click', function (e) {
    stopInterval()
})