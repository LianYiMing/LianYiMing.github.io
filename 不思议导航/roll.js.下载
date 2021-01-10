$(function(){let extra_X=0
let extra_Y=0
function alignContent(){let height=$(window).height()
let width=$(window).width()
for(height,e=document.querySelectorAll(".full_page"),i=0;i<e.length;i++)
e[i].style.height=height+"px"
let extra_h=$(".extra_logo").height()
let extra_w=$(".extra_logo").width()
extra_Y=(height-extra_h)/2
extra_X=(width-extra_w)/2
$('.extra_logo').css({"transform":`translate(${extra_X}px, ${extra_Y}px)`,'opacity':'1'})
let logo_w=$('.logo_box').width()
let logo_h=$('.logo_box').height()
let hot_w=$('.hot_site').width()
$('.logo_box').css({'transform':`translate(${(width-logo_w)/2}px, ${extra_Y-logo_h}px)`,'opacity':'1'})
$('.hot_site').css({'transform':`translate(${(width-hot_w)/2}px, ${extra_Y+extra_h}px)`,'opacity':'1'})}
alignContent()
function alignContent_fixed(){let width=$(window).width()
let extra_w=$('.extra_logo').width()
$('.extra_logo').css("transform",`translateX(${(width-extra_w)/2}px)`)}
if(/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)){let height=$(window).height()
$("#search_sth").on('click',function(){if(!$('.extra_logo').hasClass('extra_logo_fixed')){$("html,body").animate({scrollTop:$('.container').offset().top-$('.extra_logo').height()},500)}})
$(".fa-remove-logo").on('click',function(){if(!$('.extra_logo').hasClass('extra_logo_fixed')){$("html,body").animate({scrollTop:$('.container').offset().top-$('.extra_logo').height()},500)}})
$(window).bind("resize",function(){if($('.extra_logo').hasClass('extra_logo_fixed')&&$(window).height()==height){$('#search_result').css('display','none')}})}else{$(window).bind("resize",throttle(function(){alignContent()
if($('.extra_logo').hasClass('extra_logo_fixed')){alignContent_fixed()}},50,100))}
$(window).scroll(throttle(function(){var currentTop=$(this).scrollTop()
let extra_top=$('.nav_title').offset().top-currentTop
let logo_extra_logo=$('.logo_box .logo').offset().top+$('.logo_box .logo').height()-$('.nav_title').offset().top
if($(".toggle-menu").hasClass("open")){if($('#rightside').css('opacity')==='0'){$('#rightside').animate({},function(){$('#rightside').css({'opacity':'1','transform':'translateX(-38px)'})})}
if(currentTop>56){$('#page-header').hasClass('visible')?console:$('#page-header').addClass('visible')
$('#page-header').addClass('fixed')
if($('.go-up-wrap').css('opacity')==='0'){$('.go-up-wrap').animate({},function(){$('.go-up-wrap').css({'opacity':'1','transform':'translateX(0) rotateZ(360deg)'})})}
if(extra_top<30){$('.extra_logo').hasClass('extra_logo_fixed')?console:$('.extra_logo').addClass('extra_logo_fixed')
if($('#page-header').hasClass('fixed')){$('#page-header').removeClass('fixed').addClass('another_fixed')}
alignContent_fixed()}
if(logo_extra_logo>-29&&$('.extra_logo').hasClass('extra_logo_fixed')){$('.extra_logo').removeClass('extra_logo_fixed')
$('.extra_logo').css("transform",`translate(${extra_X}px, ${extra_Y}px)`)
if($('#page-header').hasClass('another_fixed')){$('#page-header').removeClass('another_fixed').addClass('fixed')}}}else{if(currentTop===0){if($('.extra_logo').hasClass('extra_logo_fixed')){$('.extra_logo').removeClass('extra_logo_fixed')
$('.extra_logo').css("transform",`translate(${extra_X}px, ${extra_Y}px)`)
if($('#page-header').hasClass('another_fixed')){$('#page-header').removeClass('another_fixed').addClass('fixed')}}
$('#page-header').removeClass('fixed').removeClass('visible')}
$('.go-up-wrap').animate({},function(){$('.go-up-wrap').css({'opacity':'0','transform':'translateX(0) rotateZ(180deg) '})})}}},50,100))
$('.go-up-wrap').on('click',function(){scrollTo('body')})
$(".scroll-down").on("click",function(){$("html,body").animate({scrollTop:$('.container').offset().top-$('.extra_logo').height()},300)})});