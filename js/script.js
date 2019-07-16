var white = true;

function lightswitch() {
    header = document.getElementById("headerr");
    links = document.getElementsByTagName('a');
    if(white) {
        document.body.style.background = '#1a1a1a';
        document.body.style.color = 'white';
        header.style.color = '#fc9494';
        for(var i=0;i<links.length;i++) {
            links[i].style.color = 'white';
        }
    } else {
        document.body.style.background = 'white';
        document.body.style.color = 'black';
        header.style.color = '#aa2d1d';
        for(var i=0;i<links.length;i++) {
            links[i].style.color = 'black';
        }
    }
    white = !white;
}
