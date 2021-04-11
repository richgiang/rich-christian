$(document).ready(function(){
    animateDiv('.logo');
    animateDiv('.search');
    animateDiv('.watch');
    animateDiv('.home');
    animateDiv('.marketplace');
    animateDiv('.groups');
    animateDiv('.gaming');
    animateDiv('.profile-grid');
    animateDiv('.create');
    animateDiv('.messaging');
    animateDiv('.notifications');
    animateDiv('.account');
});

    function makeNewPosition(){
    
        // Get viewport dimensions (remove the dimension of the div)
        var h = $(window).height() - 50;
        var w = $(window).width() - 50;
        
        var nh = Math.floor(Math.random() * h);
        var nw = Math.floor(Math.random() * w);
        
        return [nh,nw];    
        
    }
    
    function animateDiv(myclass){
        var newq = makeNewPosition();
        $(myclass).animate({ top: newq[0], left: newq[1] }, 1000,   function(){
          animateDiv(myclass);        
        });
        
    };

