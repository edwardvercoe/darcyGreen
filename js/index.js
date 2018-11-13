/* ------------------------------------------
  NAV
--------------------------------------------- 

$('a').click(function(e){
    e.preventDefault();
    $('body, html').animate({
        scrollTop: $( $(this).attr('href') ).offset().top - 120
    }, 1000);
});

/* ------------------------------------------
  NAV END
--------------------------------------------- */

/* ------------------------------------------
  CAROUSEL
--------------------------------------------- */

$(function(){
	
	  setInterval(function(){ 
 			current++;
		  	var prev = current-1;
		  var next =current;
    setSlide(prev, next, current);  
  },15000);
	
  $('.carousel-item').eq(0).addClass('active');
  var total = $('.carousel-item').length;
  var current = 0;

	
  $('#moveRight').on('click', function(){
    var next=current;
    current= current+1;
    setSlide(next, current);
  });
  $('#moveLeft').on('click', function(){
    var prev=current;
    current = current- 1;
    setSlide(prev, current);
  });
  function setSlide(prev, next){
    var slide= current;
    if(next>total-1){
     slide=0;
      current=0;
    }
    if(next<0){
      slide=total - 1;
      current=total - 1;
    }
           $('.carousel-item').eq(prev).removeClass('active');
           $('.carousel-item').eq(slide).addClass('active');
      setTimeout(function(){

      },800);
    
  // auto transition

    
    console.log('current '+current);
    console.log('prev '+prev);
  }
});

/* ------------------------------------------
  CAROUSEL END
--------------------------------------------- */

/* ------------------------------------------
  GALLERY
--------------------------------------------- */

$('.gallery-inner').isotope({
  itemSelector: '.item',
  masonry: {
    columnWidth: '.grid-sizer',
    gutter: 1
  }
}).isotope('layout');



$('.gallery-inner .item').on('click', function(event){
  event.stopPropagation();
  
  var nbrArticles = $('.item').length;
  var clickedArticle = $(this);
  var thisIndex = $(this).index();
  var clickedArticleNext = $(this).next('.item');
  var clickedArticlePrev = $(this).prev('.item');
  
  console.log('The article : ');
  console.log(clickedArticle);
  
  imgToShow = clickedArticle.find('img').attr('src');
  articleLink = clickedArticle.data('article');
  articleData = $('#article-contents').find('.article-html[data-article="'+articleLink+'"]').html();
  articleTitle = clickedArticle.find('.desc h4').html();
  i = clickedArticle.index()+1;
  var n=1;
  

  
  changeArticle();
  
  $('.next-btn').click(function(event){
      event.stopPropagation();
        

 
        var clickedArticle = $('.item:eq('+(i)+')');

        console.log('New article ' + i + ' : ');
        console.log(clickedArticle);
        imgToShow = clickedArticle.find('img').attr('src');
        articleLink = clickedArticle.data('article');
        articleData = $('#article-contents').find('.article-html[data-article="'+articleLink+'"]').html();
        articleTitle = clickedArticle.find('.desc h4').html();

      if(i>= $('.item').length-1){
       
        i=0;
      }else{
        
        i++;
      }
    

        
      changeArticle();
    
     
  });

  $('.prev-btn').click(function(event){
      event.stopPropagation();
   
        
        var clickedArticle = $('.item:eq('+i+')');
        console.log('New article ' + i + ' : ');
        console.log(clickedArticle);
        imgToShow = clickedArticle.find('img').attr('src');
        articleLink = clickedArticle.data('article');
        articleData = $('#article-contents').find('.article-html[data-article="'+articleLink+'"]').html();
        articleTitle = clickedArticle.find('.desc h4').html();

      if(i < 1){
        i= ($('.item').length);
      }else{
        i --;
      }
        
      changeArticle();
  });  
  

 function changeArticle() {
    
    $('.project-container').hide();
   
    $('.project-view .project-article-header').css({
      'background' : 'url('+imgToShow+') no-repeat top fixed'
    });

    $('.project-view .project-article-content').html('<div class="appended-data">'+articleData+'</div>');
    $('.project-article-header').html('<div class="project-article-title"><h1>'+articleTitle+'</h1></div>'); 
   
    $('.project-container').fadeIn(500);
 }

  

  
  if(!$('body').hasClass('article-opened')){
      
    $('body').addClass('article-opened');


    
  }else{
    
    $('body').removeClass('article-opened');
   
  }
  
  
});

$('.project-view').on('click', function(event){
  event.stopPropagation();
});


$('html, body, .overlay, .close').on('click', function(){
  $('body').removeClass('article-opened');
  var i = 0;
});

/* ------------------------------------------
  GALLERY END
--------------------------------------------- */
