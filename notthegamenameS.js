function openForm4() {
    document.getElementById("setpop").style.display = "block";
    document.getElementById("htppop").style.display = "none";
    document.getElementById("randrpop").style.display = "none";
    document.getElementById("tntpop").style.display = "none";
}
function closeForm4() {
    document.getElementById("setpop").style.display = "none";
}
function openForm2() {
    document.getElementById("htppop").style.display = "block";
    document.getElementById("randrpop").style.display = "none";
    document.getElementById("tntpop").style.display = "none";
    document.getElementById("setpop").style.display = "none";
}
function closeForm2() {
    document.getElementById("htppop").style.display = "none";
}
function openForm1() {
    document.getElementById("randrpop").style.display = "block";
    document.getElementById("setpop").style.display = "none";
    document.getElementById("tntpop").style.display = "none";
    document.getElementById("htppop").style.display = "none";
}  
function closeForm1() {
    document.getElementById("randrpop").style.display = "none";
}
function openForm3() {
    document.getElementById("tntpop").style.display = "block";
    document.getElementById("htppop").style.display = "none";
    document.getElementById("randrpop").style.display = "none";
    document.getElementById("setpop").style.display = "none";
}
function closeForm3() {
    document.getElementById("tntpop").style.display = "none";
}
function magic() {
    document.getElementById('pause').innerHTML = 'PAUSE';
    document.getElementById("tetrisscreen").style.opacity = 1
}
