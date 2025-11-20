let anchor = document.querySelector('#anchor');
document.querySelector('#menu-btn').onclick = () =>{
    anchor.classList.toggle('active');
}

let click = document.querySelector("#anchor1");
document.querySelector("#click-me").onclick = () =>{
    click.classList.toggle("active");
}