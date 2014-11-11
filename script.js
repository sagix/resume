window.onload= function(){
	var siteNav = document.getElementById('side-nav');
	var btnMenu = document.getElementById('btn-menu');

    function reverseMenu(){
        if(siteNav.className.indexOf('close') !== -1){
            siteNav.className=siteNav.className.replace('close', '');
        }else{
            siteNav.className+=' close';
        }
    }
        
    
    var links = siteNav.getElementsByTagName('a');
    for(index = 0 ; index < links.length ; index++){
        links[index].addEventListener('click', function(evt){
            if(evt.target === evt.currentTarget){
                   reverseMenu();
            }
        });
    }
    
	btnMenu.addEventListener('click', function(evt){
		if(evt.target === evt.currentTarget){
			reverseMenu();
			return false;
		}else{
			return true;
		}
	}, false);
};