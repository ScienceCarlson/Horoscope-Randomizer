var zodiacsigns = ["Aries", "Taurus", "Gemini", "Cancer", "Leo", "Virgo", "Libra", "Scorpio", "Sagittarius", "Capricorn", "Aquarius", "Pisces"];
var allhoroscopes = [];
//This is a dummy setlist to make entry faster. When the code is live, this variable will be commented out
//var allhoroscopes = ["This is the Aries Horoscope", "This is the Taurus Horoscope", "This is the Gemini Horoscope", "This is the Cancer Horoscope", "This is the Leo Horoscope", "This is the Virgo Horoscope", "This is the Libra Horoscope", "This is the Scorpio Horoscope", "This is the Sagittarius Horoscope", "This is the Capricorn Horoscope", "This is the Aquarius Horoscope", "This is the Pisces Horoscope"];
var i = 0;
var text = "";
var j = 0;
var selected = "";
var userssign = "";
var horoscopeguess = "";

function submitHoroscope() {
    if (allhoroscopes.length < 11) {
        //Assign the first input to the first array entry:
        allhoroscopes[i] = document.getElementById("inputtext").value;
        //Print out the current list of horoscopes:
        document.getElementById("listofsigns").innerHTML = allhoroscopes;
        //Increment the counter:
        i++;
        //Update the counter listed at the top
        document.getElementById("spannumber").innerHTML = i + 1;
        //Set the input to the next in line of the zodiac signs:
        document.getElementById("all-signs").innerHTML = zodiacsigns[i];
        //Clear the text box upon submission
        document.getElementById("inputtext").value = "";
    } else {
        //Clear the existing page info
        document.getElementById("inputter").className = "hidden";
        //Unhide the sign entering
        document.getElementById("enteryoursign").className = "";
    }
}

function submitOwnZodiacSign() {
    //Clear the existing page info
    document.getElementById("enteryoursign").className = "hidden";
    //Unhide the next section of text, allowing you to select your horoscope
    document.getElementById("findyourhoroscope").className = "";
    //Assign each horoscope entry to the radio input buttons (including a break). Radio input buttons should still be hidden at this point in time. 
    document.getElementById("Aries").innerHTML = allhoroscopes[0] + "<br>";
    document.getElementById("Taurus").innerHTML = allhoroscopes[1] + "<br>";
    document.getElementById("Gemini").innerHTML = allhoroscopes[2] + "<br>";
    document.getElementById("Cancer").innerHTML = allhoroscopes[3] + "<br>";
    document.getElementById("Leo").innerHTML = allhoroscopes[4] + "<br>";
    document.getElementById("Virgo").innerHTML = allhoroscopes[5] + "<br>";
    document.getElementById("Libra").innerHTML = allhoroscopes[6] + "<br>";
    document.getElementById("Scorpio").innerHTML = allhoroscopes[7] + "<br>";
    document.getElementById("Sagittarius").innerHTML = allhoroscopes[8] + "<br>";
    document.getElementById("Capricorn").innerHTML = allhoroscopes[9] + "<br>";
    document.getElementById("Aquarius").innerHTML = allhoroscopes[10] + "<br>";
    document.getElementById("Pisces").innerHTML = allhoroscopes[11] + "<br>";
    //Get value of the selected sign
    selected = document.getElementById("selectedsign");
    userssign = selected.options[selected.selectedIndex].value;
    //Add in their own selection to the prompt to identify their own horoscope
    document.getElementById("yourentry").innerHTML = userssign;
}

function checkAnswer() {
    //Hide previous section
    document.getElementById("findyourhoroscope").className = "hidden";
    //Unhide current section
    document.getElementById("checkanswer").className = "";
    //Get what they chose as their horoscopeguess
    horoscopeguess = document.querySelector('input[name="sign"]:checked').value;
    //Display what their sign is that they stated plus what their guess is from the list
    document.getElementById("displayresults").innerHTML = "Your sign is " + userssign + ".<br> You selected " + horoscopeguess + ".<br>";
    //if they are correct
    if (horoscopeguess === userssign) {
        document.getElementById("displayrightorwrong").innerHTML = "Congratulations! You were able to find your sign!";
        //Add in the green background
        document.getElementById("checkanswer").className = "correct";
    //if they are not correct
    } else {
        document.getElementById("displayrightorwrong").innerHTML = "Too bad. You were unable to find your horoscope in the list.";
        //Change the background color to red
        document.getElementById("checkanswer").className = "incorrect";
    }
}
