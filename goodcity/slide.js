// Slide out

changePickupStoreMenu();

function assignSlideoutToTrigger(trigger, slideoutSelector){
    trigger.addEventListener( "click", function(){
        $(slideoutSelector).css("right", 0);
        // make it bold
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
    var body1 = $('body'),
    mask = $('<div class="mask"></div>');
    $('body').append(mask);

    // ICON/TRIGGER
    var tent = document.querySelector( "#tent" ),
    mountain = document.querySelector( "#mountain" );
    
    // SLIDEOUTs
    var celebrateOne =  "#celebrate-one",
    publicPlaces =  "#public-places";
 

    /* slide menu right */
    assignSlideoutToTrigger(tent, celebrateOne);
    assignSlideoutToTrigger(mountain, publicPlaces);


    var allSlideouts = [celebrateOne, publicPlaces]

    addHidingAbilityToSlideout(allSlideouts)
    /* hide active menu if close menu button is clicked */

 
}