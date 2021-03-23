// Slide out

changePickupStoreMenu();

function changePickupStoreMenu(){
 
    var body = $('body'),
        mask = $('<div class="mask"></div>'),
        toggleSlideRight = document.querySelector( "#button" ),
        slideMenuRight = document.querySelector( ".slide-menu-right" ),
        activeNav = '';
    ;
    $('body').append(mask);
 
    /* slide menu right */
    toggleSlideRight.addEventListener( "click", function(){
        $('body').addClass("smr-open");
        $('.mask').fadeIn();
        activeNav = "smr-open";
    } );
 
    /* hide active menu if close menu button is clicked */
    $(document).on('click', ".close-menu", function(el,i){
        $('body').removeClass(activeNav);
        activeNav = "";
        $('.mask').fadeOut();
    });
    $(document).on('click', ".mask", function(el,i){
        $('body').removeClass(activeNav);
        activeNav = "";
        $('.mask').fadeOut();
    });
 
}