function timer() {
    var today = new Date();
    var time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

    document.querySelector('#time').innerHTML = time;

    setTimeout('timer()', 1000);
}
