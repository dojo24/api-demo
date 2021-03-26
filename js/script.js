
$(document).ready(function() {
    $('.programming').click(function() {
        console.log("Programming button clicked")
        $.get('https://official-joke-api.appspot.com/jokes/programming/random', function(res) {
            console.log(res)
            for (var i = 0; i < res.length; i++) {
                var htmlStr = "";
                htmlStr += "<div class='joke'>"
                htmlStr += "<h3>Programming Joke</h3>"
                htmlStr += "<p>" + res[i].setup + "</p>"
                htmlStr += "<p>" + res[i].punchline + "</p>"
                htmlStr += "</div>"
            }
            $('.jokes').html(htmlStr)
        }, "json")
    })
    $('.general').click(function() {
        console.log("General button clicked")
        $.get('https://official-joke-api.appspot.com/jokes/general/random', function(res) {
            console.log(res)
            for (var i = 0; i < res.length; i++) {
                var htmlStr = "";
                htmlStr += "<div class='joke'>"
                htmlStr += "<h3>General Joke</h3>"
                htmlStr += "<p>" + res[i].setup + "</p>"
                htmlStr += "<p>" + res[i].punchline + "</p>"
                htmlStr += "</div>"
            }
            $('.jokes').html(htmlStr)
        }, "json")
    })
    $('.knock-knock').click(function() {
        console.log("Knock-Knock button clicked")
        $.get('https://official-joke-api.appspot.com/jokes/knock-knock/random', function(res) {
            console.log(res)
            for (var i = 0; i < res.length; i++) {
                var htmlStr = "";
                htmlStr += "<div class='joke'>"
                htmlStr += "<h3>Knock-Knock Joke</h3>"
                htmlStr += "<p>" + res[i].setup + "</p>"
                htmlStr += "<p>" + res[i].punchline + "</p>"
                htmlStr += "</div>"
            }
            $('.jokes').html(htmlStr)
        }, "json")
    })
})
