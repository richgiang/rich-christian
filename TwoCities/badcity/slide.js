// Slide out


changePickupStoreMenu();

function assignSlideoutToTrigger(trigger, slideoutSelector){
    trigger.addEventListener( "click", function(){
        $(slideoutSelector).css("right", 0);
        $('.mask').fadeIn();
    } );
}

function addHidingAbilityToSlideout(listOfSlideouts){
    $(document).on('click', ".close-menu-black", function(el,i){
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
    var blackMountain = document.querySelector("#black-mountain"),
    blackTent = document.querySelector("#black-tent"),
    blackRiver = document.querySelector("#black-river");
    
    // SLIDEOUTs
    var educationAttainment = "#education-attainment",
    blackPeople =  "#black-people",
    whitePeople =  "#white-people";
 

    /* slide menu right */
    assignSlideoutToTrigger(blackMountain, educationAttainment);
    assignSlideoutToTrigger(blackTent, blackPeople);
    assignSlideoutToTrigger(blackRiver, whitePeople);


    var allSlideouts = [blackPeople, educationAttainment, whitePeople]

    addHidingAbilityToSlideout(allSlideouts)
    /* hide active menu if close menu button is clicked */

 
}