function timer() {
    var today = new Date();
    var hour = today.getHours();

    var minute='';
    if(today.getMinutes()<10) {
        minute += '0'
    }
    minute += today.getMinutes();
    var second = '';
    if(today.getSeconds()<10) {
        second += '0';
    }
    second += today.getSeconds();

    var time = hour + ':' + minute + ':' + second;
    
    document.querySelector('#time').innerHTML = time;

    setTimeout('timer()', 1000);
}

timer();