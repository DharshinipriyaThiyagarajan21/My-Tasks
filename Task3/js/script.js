$(document).ready(function(){
   $("button").click(function(){
      var value1=$('#wid').val();
      var value2=$('#high').val();
      var widthvalue= "width:" +value1;
      var heightvalue= "height:" +value2;
      var item='';
      var $grid = $('.grid').masonry({
          columnWidth: 100,
          itemSelector: '.grid-item'
      });

      var elem = document.createElement('div');
      var wRand = Math.random();
      var hRand = Math.random();
      var widthClass = wRand > 0.8 ? 'grid-item--width3' : wRand > 0.6 ? 'grid-item--width2' : '';
      var heightClass = hRand > 0.85 ? 'grid-item--height4' : hRand > 0.6 ? 'grid-item--height3' : hRand > 0.35 ? 'grid-item--height2' : '';     
       item=$('<div class=grid-item ' +widthClass+' '+heightClass+' style=' +widthvalue+ ";" +heightvalue+'><span><button id=close>x</button></span></div>');
      var $item=$(item);
      $(".grid").append(item).masonry('appended',$item);
    });

      var $grid = $('.grid').masonry({
          columnWidth: 160,
          itemSelector: '.grid-item'
      });

      $grid.on( 'click', '.grid-item', function( event ) {
        $grid.masonry( 'remove', event.currentTarget ).masonry();
      });
})


       
