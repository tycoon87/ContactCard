$('form').submit(function () {
    var firstN = $('#first').val();
    var lastN = $('#last').val();
    var disc = $('#discription').val();
    var stuff = "<h1>" + firstN + lastN + "</h1> <br> <br> <a>" +disc+ "</a>";
    $('#outputBoxes').append(stuff);
   
    console.log(firstN)
    console.log(lastN)
    console.log(disc)
    return false;
})