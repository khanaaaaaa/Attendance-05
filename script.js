const title = "Attendance : 05";
const academy = "KISARAGI ACADEMY";
const subtitle = "Student Information Portal";

let i = 0;

function typeTitle() {
    if (i < title.length) {
        document.getElementById("title").textContent += title[i];
        i++;
        setTimeout(typeTitle, 100);
    } else {
        setTimeout(typeAcademy, 500);
    }
}

let j = 0;

function typeAcademy() {
    if (j < academy.length) {
        document.getElementById("academy").textContent += academy[j];
        j++;
        setTimeout(typeAcademy, 60);
    } else {
        setTimeout(typeSubtitle, 500);
    }
}

let k = 0;

function typeSubtitle() {
    if (k < subtitle.length) {
        document.getElementById("subtitle").textContent += subtitle[k];
        k++;
        setTimeout(typeSubtitle, 50);
    } else {
        document.getElementById("enter").style.opacity = "1";
    }
}

document.getElementById("enter").style.opacity = "0";

typeTitle();