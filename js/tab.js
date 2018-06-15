function openTab(tabName, element, tabID) {
    var i, tabContent, tab, tabTitle, tab404;
    tab404 = document.getElementById("tab404");
    tab404.style.display = "none";

    tabContent = document.getElementsByClassName("tabContent");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    var div = document.getElementById(tabName);
    div.style.display = "block";
    div.style.opacity = 0.0;

    tabTitle = document.getElementsByClassName("tablinks");
    for (i = 0; i < tabTitle.length; i++) {
        tabTitle[i].style.backgroundColor = "white";
        tabTitle[i].style.color = "#1B8BF9";
    }

    tab = document.getElementById(tabID);
    tab.style.backgroundColor = "#1B8BF9";
    tab.style.color = "white";

    var id = setInterval(frame, 15);
    var temp = 0.0;

    function frame() {
        if (temp >= 1.0)
            clearInterval(id);
        else {
            temp += 0.01;
            div.style.opacity = temp;
        }
    }

}

function disableScrolling() {
    $('html, body').css({
        'overflow': 'hidden'
    });
}

function enableScrolling() {
    $('html, body').css({
        'overflow': 'auto'
    });
    $('html, body').removeAttr('style');
}
