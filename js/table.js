 (function(){
    ('div[class^="type-"]').mouseover(function(){
      var currentClass = (this).attr('class').split(' ')[0];
      if(currentClass != 'empty'){
      	('.main > div').addClass('deactivate');
      	('.' + currentClass).removeClass('deactivate');
      }
    });
   
    ('div[class^="cat-"]').mouseover(function(){
      var currentClass = (this).attr('class').split(' ')[0];
      	('.main > div').addClass('deactivate');
      	('.' + currentClass).removeClass('deactivate');
    }); 
    
    ('.main > div').mouseout(function(){
      var currentClass = (this).attr('class').split(' ')[0];
       ('.main > div').removeClass('deactivate');
    }); 
}); 