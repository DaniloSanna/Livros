
try{
    let parametro = window.location.href.split('=')[1].split('&');

    document.getElementById('login_item_dropdown_ancor').innerHTML = parametro;
    document.getElementById('login_item_dropdown').style.display= "block";
    document.getElementById('login_item').style.display= "none";

}catch(e){
}

