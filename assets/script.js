var name = "John"

var greetings = "Hello! My name is " + name + ". Greetings!";
// Hello! My name is John. Greetings! (example from tutoring).

//current Time
var currentTime = moment().format("H");
console.log(currentTime)
var currentDate = moment().format("MMMM Do, YYYY");
var dateP = $("#date");
dateP.text(currentDate)

for (let i = 9; i <= 17; i++) {
    var text = $("#hour-" + i + " > textarea") // string concatenation
    //  text = $("hour-11 > textarea")

    console.log(text)
    var button = $("#hour-" + i + " > button")
    console.log(button)

    button.on("click", function () {
        var text = $("#hour-" + i + " > textarea")
        localStorage.setItem("hour-" + i, text.val())
    })

    var saveText = localStorage.getItem("hour-" + i)
    text.val(saveText)

    // if the the time block is less than the current time
    if(i < currentTime ) {
        text.addClass("past")
    } else if( i == currentTime) {
        text.addClass("present")
    } else if (i > currentTime) {
        text.addClass("future")
    }

}