//Task 1: Use jQuery to make the text "The jQuery Site" be green.
$("h1").css("color", "green");

//Task 2: Use jQuery to append the text "This site was made almost entirely using jQuery!" to the id info.
$("#info").append("This site was made almost entriely using jQuery!");

//Task 3: Use jQuery to change the text in the div cool to say "jQuery is AWESOME!"
    //hint: this needs to be done using the action .html
$("#cool").html("jQuery is AWESOME!");

//Task 4: Use jQuery to change the source attribute in the ID pic to this link --> "https://cdn.meme.am/instances/57092433.jpg"
    //hint: you will need to use a selector found on page 6 of the reference table
    $("#pic").attr("src", "https://cdn.meme.am/instances/57092433.jpg");


//Bonus: Use jQuery to make it so that when you click on the h1 tag the text changes to your name
 $("h1").click(function(){
        $("h1").append("Andrew Martinez");
    });