$(document).ready(function () {
//// IMAGES CLICKED AND MOVEED TO A DIFFERENT DIV(STADIUM)
    let images = ["joe.png", "brady.png","elway.png","manning.png"];
    
    $('img[alt="montana"]').on("click",function(){
        $(".qb-choice").append("<img src='assets/images/joe.png' class='card-img-top joe'/>")

        // $(this).attr("src", "assets/images/joe.png"
        //     ).appendTo(".qb-choice")
    })
    $('img[alt="brady"]').on("click",function(){
        $(".opponentqb").append("<img src='assets/images/brady.png' class ='card-img-top tom'/>")

        // $(this).attr("src", "assets/images/joe.png"
        //     ).appendTo(".qb-choice")
    })
    $('img[alt="elway"]').on("click",function(){
        $(".opponentqb").append("<img src='assets/images/elway.png' class='card-img-top jon' />")

        // $(this).attr("src", "assets/images/joe.png"
        //     ).appendTo(".qb-choice")
    })
    $('img[alt="manning"]').on("click",function(){
        $(".opponentqb").append("<img src='assets/images/manning.png' class='card-img-top man' />")

        // $(this).attr("src", "assets/images/joe.png"
        //     ).appendTo(".qb-choice")
    })

})
///// IF LOGIC? SELECTED CHARACTER WILL MOVE TO USER QB, AND THE REMAINING PHOTO WILL GOTO THE STADIUM//// 