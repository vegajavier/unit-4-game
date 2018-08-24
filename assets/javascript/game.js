$(document).ready(function () {

    let images = ["joe.png", "brady.png","elway.png","manning.png"];
    
    $('img[alt="montana"]').on("click",function(){
        $(".qb-choice").append("<img src='assets/images/joe.png' />")

        // $(this).attr("src", "assets/images/joe.png"
        //     ).appendTo(".qb-choice")
    })
    $('img[alt="brady"]').on("click",function(){
        $(".qb-choice").append("<img src='assets/images/brady.png' />")

        // $(this).attr("src", "assets/images/joe.png"
        //     ).appendTo(".qb-choice")
    })
    $('img[alt="elway"]').on("click",function(){
        $(".qb-choice").append("<img src='assets/images/elway.png' />")

        // $(this).attr("src", "assets/images/joe.png"
        //     ).appendTo(".qb-choice")
    })
    $('img[alt="manning"]').on("click",function(){
        $(".qb-choice").append("<img src='assets/images/manning.png' />")

        // $(this).attr("src", "assets/images/joe.png"
        //     ).appendTo(".qb-choice")
    })

})
