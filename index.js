"use strict";

/* PP 1.1 */
document.getElementById("pp-1-1").textContent = "An Emergency Broadcast";

/* PP 1.2 */
var fullName = "Johann Sebastian Bach";
var birthDate = new Date("March 21, 1685");
var occupation = "Professional musician and composer.";
var favBook = "The Bible";
var wifeName = "Maria Barbara Bach";
/* Like HTML, JavaScript ignores occurences of extra white space
between commands, so you can indent your code to make it easier
to read. However, unlike HTML, you must be careful about line breaks
within commands. A line break placed within the name of a JavaScript
command or within a quoted text string will cause an error when
the script is run. This, the following code will cause the program
to fail.

window.alert("Welcome
to Tulsa");

If you want to break a text string into several lines, use the 
backslash character.

window.alert("Welcome \
to Tulsa")

*/
document.getElementById("pp-1-3").innerHTML = 
"<table>\
    <tr>\
        <td>Full Name: </td>\
        <td>" + fullName + "</td>\
    </tr>\
    <tr>\
        <td>Birth Date: </td>\
        <td>" + birthDate + "</td>\
    </tr>\
    <tr>\
        <td>Occupation: </td>\
        <td>" + occupation + "</td>\
    <tr>\
    <tr>\
        <td>" + favBook + "</td>\
        <td>Favorite book: </td>\
    </tr>\
    <tr>\
        <td>Wife\'s name: </td>\
        <td>" + wifeName + "</td>\
    </tr>\
</table>";
    
    /*
    "Full name:" + fullName + "<br>" +
    "Birthdate:" + birthDate + "<br>" +
    "Occupation:" + occupation + "<br>" +
    "Favorite book:" + favBook + "<br>" +
    "Wife's name:" + wifeName; 
    */