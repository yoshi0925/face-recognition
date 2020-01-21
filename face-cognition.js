

//Global Variables


//Images
const NEW_1 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/new1.JPG";
const NEW_2 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/new2.JPG";
const NEW_3 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/new3.JPG";
const NEW_4 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/new4.JPG";
const NEW_5 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/new5.JPG";
const NEW_6 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/new6.JPG";
const NEW_7 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/new7.JPG";
const NEW_8 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/new8.JPG";
const NEW_9 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/new9.JPG";
const NEW_10 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/new10.JPG";
const NEW_11 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/new11.JPG";
const NEW_12 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/new12.JPG";
const NEW_13 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/new13.JPG";
const NEW_14 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/new14.JPG";
const NEW_15 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/new15.JPG";
const NEW_16 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/new16.JPG";
const NEW_17 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/new17.JPG";
const NEW_18 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/new18.JPG";
const NEW_19 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/new19.JPG";
const NEW_20 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/new20.JPG";
const NEW_21 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/new21.JPG";
const NEW_22 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/new22.JPG";
const OLD_1 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/old1.JPG";
const OLD_2 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/old2.JPG";
const OLD_3 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/old3.JPG";
const OLD_4 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/old4.JPG";
const OLD_5 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/old5.JPG";
const OLD_6 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/old6.JPG";
const OLD_7 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/old7.JPG";
const OLD_8 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/old8.JPG";
const OLD_9 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/old9.JPG";
const OLD_10 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/old10.JPG";
const OLD_11 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/old11.JPG";
const OLD_12 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/old12.JPG";
const OLD_13 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/old13.JPG";
const OLD_14 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/old14.JPG";
const OLD_15 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/old15.JPG";
const OLD_16 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/old16.JPG";
const OLD_17 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/old17.JPG";
const OLD_18 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/old18.JPG";
const OLD_19 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/old19.JPG";
const OLD_20 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/old20.JPG";
const OLD_21 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/old21.JPG";
const OLD_22 = "https://raw.githubusercontent.com/yoshi0925/face-recognition/master/Images/old22.JPG";

const gallery = [NEW_1, NEW_2, NEW_3, NEW_4, NEW_5, NEW_6, NEW_7, NEW_8, NEW_9, NEW_10, NEW_11, NEW_12, NEW_13, NEW_14, NEW_15, NEW_16, NEW_17,
    NEW_18, NEW_19, NEW_20, NEW_21, NEW_22, OLD_1, OLD_2, OLD_3, OLD_4, OLD_5, OLD_6, OLD_7, OLD_8, OLD_9, OLD_10, OLD_11, OLD_12, OLD_13, OLD_14,
    OLD_15, OLD_16, OLD_17, OLD_18, OLD_19, OLD_20, OLD_21, OLD_22];


var imgWrap = [];
function preloadImg(arr) {
    for (var i = 0; i < arr.length; i++) {
        imgWrap[i] = new Image();
        imgWrap[i].src = arr[i];
    }
}

preloadImg(IMAGE_ARR);



function showImage(src) {
    var img = document.createElement("img");
    img.src = src;
    img.style = "position: absolute; top: 250px; left: 325px;";
    // This next line will just add it to the <div id='pic'> tag
    var pic_div = document.getElementById('pic');
    pic_div.appendChild(img);

}


function cleanImage() {
    var div = document.getElementById('pic');
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}

function displayImage() {
    for (i = 0; i < gallery.length; i++) {
        showImage(i);
    }
}