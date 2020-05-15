function logout() {
    if(localStorage.getItem('name') !== null) {
        var html = '<input type="button" id="logout" value="logout" onclick="buttonClick()">';
        document.querySelector('#logout_box').innerHTML = html;
    }
}
function buttonClick() {
    localStorage.clear();
    window.location.reload();
}
logout();