// Global variables
// vars not defined from imported js
var isTrain = 0;
var isTest = 0;
var moveLast = 0;
function endTime(){
return 160;
}
var currProbe = 1;

//Global Variables
const L_KEY = 122;
const R_KEY = 109;
const ONE_KEY = 49;
const TWO_KEY = 50;
const THREE_KEY = 51;
const FOUR_KEY = 52;
const FIVE_KEY = 53;
const SIX_KEY = 54;

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

 //var gallery = [NEW_1, NEW_2, NEW_3, NEW_4, NEW_5, NEW_6, NEW_7, NEW_8, NEW_9, NEW_10, NEW_11, NEW_12, NEW_13, NEW_14, NEW_15, NEW_16, NEW_17,
 //    NEW_18, NEW_19, NEW_20, NEW_21, NEW_22, OLD_1, OLD_2, OLD_3, OLD_4, OLD_5, OLD_6, OLD_7, OLD_8, OLD_9, OLD_10, OLD_11, OLD_12, OLD_13, OLD_14,
  //   OLD_15, OLD_16, OLD_17, OLD_18, OLD_19, OLD_20, OLD_21, OLD_22];
//for testing use:
var gallery = [NEW_1, NEW_2, NEW_10, NEW_11]

var imgWrap = [];
function preloadImg(arr) {
    for (var i = 0; i < arr.length; i++) {
        imgWrap[i] = new Image();
        imgWrap[i].src = arr[i];
    }
}

preloadImg(gallery);

var createdTime = 0;
var imageTime = 0;
var confidenceTime = 0;

var controller = false;
function showImage(src) {
    controller = false;
    var img = document.createElement("img");
    img.src = src;
    img.style = "position: absolute; top: 150px; left: 470px; height: 450px; width: 450px;";
    // This next line will just add it to the <div id='pic'> tag
    var pic_div = document.getElementById('pic');
    pic_div.appendChild(img);
    createdTime = Date.now();
    controller = true;
}


function cleanImage() {
    var div = document.getElementById('pic');
    while (div.firstChild) {
        div.removeChild(div.firstChild);
    }
}



function getValueFromSurvey(str) {
    var radio = document.getElementsByName(str);
    for (i = 0; i < radio.length; i++) {
        if (radio[i].checked) {
            return (radio[i].value)
        }
    }
}

var inUseArray = [];

/**
 * Shuffles array in place.
 * @param {Array} a items An array containing the items.
 */
function shuffle(array) {
    var j, temp, i;
    for (i = array.length - 1; i > 0; i--) {
        j = Math.floor(Math.random() * (i + 1));
        temp = array[i];
        array[i] = array[j];
        array[j] = temp;
    }
    return array;
}
inUseArray = shuffle(gallery);


function tutorialStart() {
    if ($(window).width() >= 600 & screen.width * .8 < $(window).width()) {
        $('#instructions').hide();
        $('#introduction').show();
        // Begin
        $(document).on("keypress.trialWait", PressedKey);
        function PressedKey(evt) {
            evt.preventDefault();
            if (evt.which == 32) {
                startTrialFace();
            }
        }
    }
}


function transformRating(value) {
    if (value == ONE_KEY) {
        return 1;
    }
    if (value == TWO_KEY) {
        return 2;
    }
    if (value == THREE_KEY) {
        return 3;
    }
    if (value == FOUR_KEY) {
        return 4;
    }
    if (value == FIVE_KEY) {
        return 5;
    }
    if (value == SIX_KEY) {
        return 6;
    }
}

function subtraction(array1, array2) {

}


var imageIndex = 0;
var oldNewResult = []; //data to be saved
var rateResult = []; // data to be saved 
var resultChoiceTime = []; //data to be saved -- time user on making choice
var resultRateTime = [] //data to be saved -- time user spends on rating confidency level
var controller = false;

async function startTrialFace() {
    $(document).off("keypress.trialWait");
    $('#introduction').hide();
    $('#pic').show();
    $('#old_new').show();
    $('#confidence').hide();

    showImage( inUseArray[imageIndex] );
    console.log(imageIndex);
    console.log(inUseArray[imageIndex]);

    document.getElementById('trialNumber').innerHTML = trialNumber++;

    $(document).on("keypress.trialWait", pressKey0);

    function pressKey0(evt) {
        evt.preventDefault();

        if (controller && (evt.which == L_KEY | evt.which == R_KEY)) {
            $(document).off("keypress.trialWait");
            saveDataChoice(evt);
            $('#old_new').hide();
            $('#confidence').show();

            $(document).on("keypress.trialWait", pressKey1);

            function pressKey1(evt) {
                evt.preventDefault();

                if (controller && (evt.which == ONE_KEY | evt.which == TWO_KEY | evt.which == THREE_KEY | evt.which == FOUR_KEY | evt.which == FIVE_KEY | evt.which == SIX_KEY)) {
                    $(document).off("keypress.trialWait");
                    saveDataRate(evt);
                    imageIndex++;

                    if (imageIndex != inUseArray.length) {
                        startTrialFace();
                    }
                    else{
                        showSurvey();
                    }
                }
            }
        }
    }

    
    function saveDataChoice(evt) {
        old_or_new = evt.which == R_KEY ? "New" : "Old";
        imageTime = Date.now();
        let time = imageTime - createdTime;
        console.log("choice time: " + imageTime + " - created time: "+ createdTime + " = " + time)
        resultChoiceTime.push(time);
        oldNewResult.push(old_or_new);
    }

    function saveDataRate(evt) {
        rate = transformRating(evt.which);
        confidenceTime = Date.now();
        let time = confidenceTime - imageTime;
        console.log("confidence time: " + confidenceTime + " - chose time: "+ imageTime + " = " + time)

        resultRateTime.push(time);
        rateResult.push(rate);
    }
}

async function showSurvey() {
    $(document).off("keypress.trialWait");
    cleanImage();
    $('#confidence').hide();
    // $('#progressReport').hide();
    $('#Survey').show();
}



    function checkSurveyValue() {
        v1 = getValueFromSurvey("Gender");
        v2 = getValueFromSurvey("Ethnicity");
        v3 = getValueFromSurvey("Race");
        v4 = document.getElementById('initials').value;
        v5 = document.getElementById('ageNumber').value;

        let t1 = $("input:radio[name='Gender']").is(":checked");
        let t2 = $("input:radio[name='Ethnicity']").is(":checked");
        let t3 = $("input:radio[name='Race']").is(":checked");
        let t4 = !(document.getElementById("initials").value == "" || v4 == "");
        let t5 = !(isNaN(v5) || v5 == "");

        if (t1 && t2 && t3 && t4 && t5) {
            endAndSend();
        }
        else {
            alert("Please fill all forms.");
        }
    }



function endAndSend() {
    cleanImage();
    $('#submitButton').hide();
    $('#Survey').hide();
    $('#done').show();
    SendToServer();
}


/* Send the data to the server as JSON: */
function SendToServer() {
    var curr_date = new Date();
    var curID = getParameterByName("id");
    dataToServer = {
        'date': curr_date,
        'choice': JSON.stringify(oldNewResult),
        'confidence_rate': JSON.stringify(rateResult),
        'choice_time': JSON.stringify(resultChoiceTime),
        'confidence_rate_time': JSON.stringify(resultRateTime),
        //'display_info': JSON.stringify(displayInfo),
        //'canvas_info': JSON.stringify(canvasInfo.unshift("no_canvas_at_beginning")),
        'gender': v1,
        'ethnicity': v2,
        'race': v3,
        'initials': v4,
        'age': v5,
        'curID': curID,
    };
    var d = {
        'id': getParameterByName("id"),
        'experimenter': 'Kirsten',
        'experimentName': 'Face-Recognition',
        'curData': JSON.stringify(dataToServer)
    };
    // $.post("http://serenceslab.ucsd.edu/experiments/RT_Exp/save.php",
    //   d,
    //   function(data) {
    // 	/* Get this from SONA by looking for the Completion URL (client-side) on SONA after creating an online SONA study: */
    // 	window.location = "https://ucsd.sona-systems.com/webstudy_credit.aspx?experiment_id=1661&credit_token=ab4560d23b684ec89438a7ec6fcee9b5&survey_code=" + getParameterByName("id");
    // 	console.log("Saved!");
    //   }
    // ).fail(function(data) {
    // 	/* Get this from SONA by looking for the Completion URL (client-side) on SONA after creating an online SONA study: */
    // 	window.location = "https://ucsd.sona-systems.com/webstudy_credit.aspx?experiment_id=1661&credit_token=ab4560d23b684ec89438a7ec6fcee9b5&survey_code=" + getParameterByName("id");
    // 	console.log("not saved!");
    // });

    //test logging
    console.log(d);
}

function getParameterByName(name, url) {
    if (!url) url = window.location.href;
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2]);
}