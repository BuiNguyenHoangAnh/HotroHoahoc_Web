function openNav() {
    document.getElementById("mySideNav").style.width = "250px";
    var dis = document.getElementsByClassName("zoom-in");
    for(i = 0; i < dis.length; i++){
        dis[i].style.display = "none";
    }
}

function closeNav() {
    document.getElementById("mySideNav").style.width = "0";
    var dis = document.getElementsByClassName("zoom-in");
    for(i = 0; i < dis.length; i++){
        dis[i].style.display = "block";
    }
}