// Slide out

changePickupStoreMenu();

function assignSlideoutToTrigger(trigger, slideoutSelector){
    trigger.addEventListener( "click", function(){
        $(slideoutSelector).css("right", 0);
        $('.mask').fadeIn();
    } );
}

function addHidingAbilityToSlideout(listOfSlideouts){
    $(document).on('click', ".close-menu", function(el,i){
        for (var i=0; i < listOfSlideouts.length; i++){
            $(listOfSlideouts[i]).css("right", "-50%");
        }
        $('.mask').fadeOut();
    });

    $(document).on('click', ".mask", function(el,i){
        for (var i=0; i < listOfSlideouts.length; i++){
            $(listOfSlideouts[i]).css("right", "-50%");
        }
        $('.mask').fadeOut();
    });
}

function changePickupStoreMenu(){
    var toggleSlideRight;
    var body = $('body'),
    mask = $('<div class="mask"></div>');
    $('body').append(mask);


        // ICON/TRIGGER
        var tent = document.querySelector("#tent"),
        mountain = document.querySelector("#mountain"),
        river = document.querySelector("#river");
        
        // SLIDEOUTs
        var celebrateOne =  "#celebrate-one",
        publicPlaces =  "#public-places",
        unemployment =  "#unemployment";
     
    
        /* slide menu right */
        assignSlideoutToTrigger(tent, celebrateOne);
        assignSlideoutToTrigger(mountain, publicPlaces);
        assignSlideoutToTrigger(river, unemployment);
    
    
        var allSlideouts = [celebrateOne, publicPlaces, unemployment]

    addHidingAbilityToSlideout(allSlideouts)
    /* hide active menu if close menu button is clicked */

 
}