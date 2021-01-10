let wallpaper_def='https://orxing-top.oss-cn-chengdu.aliyuncs.com/img/20200306005717.png?x-oss-process=style/base'
let wallpaper_custom=localStorage.getItem("custom_wallpaper")||""
if(wallpaper_custom==""){$('<img/>').attr('src',wallpaper_def).on('load',function(){$(this).remove()
$('.searchnav_bg').css({'opacity':1,'background-image':`url("${wallpaper_def}")`})})}else{$('.searchnav_bg').css({'opacity':1,'background-image':`url("${wallpaper_custom}")`})
let custom_fixed_bg=` <style type="text/css"> .extra_logo_fixed:after { background-image: url(${wallpaper_custom}); } </style> `
$('head').append(custom_fixed_bg)}
let logo_custom=localStorage.getItem("custom_logo")||""
if(logo_custom!=""){$('.logo_box .logo').css('background-image',`url("${logo_custom}")`)}
function loadScript(url){let scrs=document.getElementsByTagName('script');let last=scrs[scrs.length-1];let scr=document.createElement('script');scr.src=url;scr.async=true;last.parentNode.insertBefore(scr,last);}
loadScript("../js/search_nav/toast.js?"+Math.random())
loadScript("../js/search_nav/hanzi2pinyin.js")
loadScript('../js/search_nav/search.js')
loadScript('../js/search_nav/template.js')
loadScript("../js/search_nav/popper.min.js")
loadScript("../js/search_nav/index.all.min.js")
let searchbar=$('#search_sth')
let text=Cookies.get("lastkey")||""
let history_keys_json=Cookies.get("historykeys")||""
history_keys=history_keys_json.split(",")
let recentItems_json=Cookies.get("recent_items")||""
recentItems=recentItems_json.split(",")
let hot_item_json=localStorage.getItem("hot_items")||'{"v2ex":{"name":"V2EX","name_e":"v2ex","frequency":1},"zhihu":{"name":"知乎","name_e":"zhihu","frequency":1},"bilibili":{"name":"哔哩哔哩","name_e":"bilibili","frequency":1},"weibo":{"name":"微博","name_e":"weibo","frequency":1},"wanmeikankan":{"name":"完美看看","name_e":"wanmeikankan","frequency":1}}'
let hot_item_list=JSON.parse(hot_item_json)
let Array_hot_item_list=[]
let hot_item_list_sort={}
let on_edit=false
let custom_card_json=localStorage.getItem("custom_cards")||'{"zidingyi":{"name_e":"zidingyi","name":"自定义","card":true,"websites":[]}}'
let custom_card_list=JSON.parse(custom_card_json)
let clickToUp_json=Cookies.get("clickToUp")||""
let clickToDown_json=Cookies.get("clickToDown")||""
clickToDown=unique(clickToDown_json.split(","))
clickToUp=unique(clickToUp_json.split(","))
function unique(arr){let tmp=new Array();arr.reverse()
for(let i in arr){if(tmp.indexOf(arr[i])==-1&&arr[i]){tmp.push(arr[i]);}}
tmp.reverse()
return tmp;}
function rgb2rgba(rgb,opacity){let color=rgb.toString().match(/\d+/g);color=`rgba(${color[0]},${color[1]},${color[2]},${opacity})`
return color}
const scroll2sth=($this,time)=>{setTimeout(()=>{$("html,body").animate({scrollTop:$this.offset().top-$('.extra_logo').height()-10},500)},time)}
const custom_ajax=(json_url)=>{$.getJSON(json_url,function(result){custom_card_json=localStorage.getItem("custom_cards")||'{}'
custom_card_list=JSON.parse(custom_card_json)
searchURL=result
$.each(custom_card_list,function(index,value){if(value.card){searchURL[value.name_e]={'name_e':value.name_e,'name':value.name,'description':false,'websites':value.websites}}else{searchURL[value.name_e]={'name_e':value.name_e,'name':value.name,'home':value.home,'search':value.search,'description':value.description}}})})}
const recordHistory=(arr,item)=>{arr=arr.concat()
if($.isArray(arr)!=true){arr=arr.split(",")}
arr.unshift(item)
arr=unique(arr).slice(0,5)
arr=arr.join(",")
return arr}
const recentuse=(value)=>{if($(".recent .items").children().hasClass(value)==false){if($(".recent .items").children().length>=5){$(".recent .items").children(":last-child").remove()}
let recent_name=$(`.${value}:last`).children("a").text()
let items=` <div class="item ${value}"><a href="javascript:;"">${recent_name}</a></div> `
if($(".recent").length>0){$(".recent .items").prepend(items)}else{$(".container").prepend(recent_card)
$(".recent .items").prepend(items)}
boxRelocation()}}
const copyToClipboard=str=>{const el=document.createElement('textarea');el.value=str;el.setAttribute('readonly','');el.style.position='absolute';el.style.left='-9999px';document.body.appendChild(el);el.select();document.execCommand('copy');document.body.removeChild(el);}
function handleFilePath(node,callback){var path='',file=null;if(node){var ua=window.navigator.userAgent;if(ua.indexOf('MSIE')>-1){node.select();path=document.selection.createRange().text;}else{try{if(FileReader&&node.files&&node.files[0]){var reader=new FileReader();reader.onload=function(e){path=e.target.result;callback&&callback(path);};reader.readAsDataURL(node.files[0]);return;}else{if(node.files&&node.files[0]){file=node.files[0];}else if(node.files&&node.files.item(0)){file=node.files.item(0);}
try{path=file.getAsDataURL();}catch(e){path=window.URL.createObjectURL(file);}}}catch(e){console.log('无法获取！');}}}else{console.log('node为空！');}
callback&&callback(path);}
const downLoadFiles=(data,fileName)=>{if(typeof navigator!=="undefined"&&navigator.msSaveOrOpenBlob){var blob=new Blob([JSON.stringify(data)],{type:"data:application/json;charset=utf-8"});navigator.msSaveOrOpenBlob(blob,fileName);}else{const a=document.createElement("a");a.style.visibility="hidden";document.body.appendChild(a);var blobs=new Blob([JSON.stringify(data)],{type:"data:application/json;charset=utf-8"});var objurl=URL.createObjectURL(blobs);a.href=objurl;a.download=fileName;a.click();document.body.removeChild(a);}}
function throttle_reloaction(){if(windowWidth==$('.container').width()){boxRelocation();clearInterval(interval);interval=null;}}
function boxStyle(width,height,top,left){this.position="absolute";this.width=width;this.height=height;this.top=top;this.left=left;}
function boxArrBuild(boxStyleArr){var box=$(".card");var num=4;if($('.container').width()>460)num=2;if($('.container').width()<=460)num=1;if($('.container').width()>800)num=3;if($('.container').width()>1070)num=4;if($('.container').width()>1400)num=5;var boxWidth=$('.container').width()/num;var boxArr=[];box.each(function(index,value){$(value).css({"width":boxWidth,"height":"auto"});boxStyleArr[index]=new boxStyle();boxStyleArr[index].width=boxWidth;boxStyleArr[index].height=box.eq(index).height();if(index<num){boxArr[index]=boxStyleArr[index].height;boxStyleArr[index].left=Math.round(boxWidth*index);boxStyleArr[index].top=0;}else{var minboxHeight=Math.min.apply(null,boxArr);var minboxIndex=$.inArray(minboxHeight,boxArr);boxStyleArr[index].left=boxStyleArr[minboxIndex].left;boxStyleArr[index].top=minboxHeight;boxArr[minboxIndex]+=boxStyleArr[index].height;}})}
function boxLocation(){var box=$(".card");var boxStyleArr=[];boxArrBuild(boxStyleArr);box.each(function(index,value){$(value).css({"position":"absolute","top":0,"left":0,"width":0,"height":0})
$(value).animate({top:boxStyleArr[index].top,left:boxStyleArr[index].left,height:boxStyleArr[index].height,width:boxStyleArr[index].width},500);})
let box1=boxStyleArr[box.length-1].top+boxStyleArr[box.length-1].height
let box2=boxStyleArr[box.length-2].top+boxStyleArr[box.length-2].height
let box3=boxStyleArr[box.length-3].top+boxStyleArr[box.length-3].height
let max=box1>box2?box1:box2
max>box3?max:box3
$('footer').css('transform',`translateY(${max}px)`)}
function boxRelocation(){if($('.container').width()>460){var box=$(".card");var boxStyleArr=[];boxArrBuild(boxStyleArr);box.each(function(index,value){$(value).animate({top:boxStyleArr[index].top,left:boxStyleArr[index].left},500);})
let box1=boxStyleArr[box.length-1].top+boxStyleArr[box.length-1].height
let box2=boxStyleArr[box.length-2].top+boxStyleArr[box.length-2].height
let box3=boxStyleArr[box.length-3].top+boxStyleArr[box.length-3].height
let max=box1>box2?box1:box2
max>box3?max:box3
$('footer').css('transform',`translateY(${max}px)`)}}
let json_url='../link_data.json?'+Math.random()
custom_ajax(json_url)
if(/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)){$('.fa-chevron-left-wrap').css('display','inline')
$(document).on('click','.fa-chevron-left-wrap',function(){let flag=$(this).siblings('span').css('display')
if(flag=='inline'){$(this).css('transform','rotateZ(-90deg)')
$(this).siblings('span').css('display','none')
$(this).siblings('.hover-hidden').css('display','inline')}else{$(this).css('transform','rotateZ(0deg)')
$(this).siblings('span').css('display','inline')
$(this).siblings('.hover-hidden').css('display','none')}})}else{$('.fa-chevron-left-wrap').css('display','none')}
searchbar.focus()
text?$('.fa-remove-logo').css('display',"block"):$('.fa-remove-logo').css('display',"none")
if(/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)){text=""
$('.fa-remove-logo').css('display',"none")}else{searchbar.val(text)}
$.each(hot_item_list,(key,val)=>Array_hot_item_list.push(val))
Array_hot_item_list=Array_hot_item_list.sort((a,b)=>b.frequency-a.frequency).slice(0,10)
$.each($('.hot_item'),function(key){$(this).addClass(Array_hot_item_list[key].name_e)
$(this).children('a').text(Array_hot_item_list[key].name)
$(this).find('span').text(Array_hot_item_list[key].name.substr(0,1))})
$.getJSON("../tips_data.json?"+Math.random(),function(result){let placeholder_tip=result.placeholder||"点击任意网站即可一键搜索"
searchbar.attr('placeholder',placeholder_tip)
setTimeout(function(){searchbar.attr('placeholder','点击任意网站即可一键搜索')},5000)
let tips=result.head_tips
let index=0
const changeTip=()=>{index++
index=index%tips.length
$("#hitokoto").html(tips[index].tip)
$("#hitokoto").attr("href",tips[index].site)}
setInterval(()=>{changeTip()},3000)})
let recent_card=` <div class="card recent"><div class="wrap"><div class="catalog-title recent_item">最近使用</div><div class="items"></div></div></div> `
if(Cookies.get("recent_items")){$(".container").prepend(recent_card)
$.each(recentItems,function(key,value){if(custom_card_list.hasOwnProperty(value)){recent_name=custom_card_list[value].name
let items=` <div class="item ${value}"><a href="javascript:;">${recent_name}</a></div> `
$(".recent .items").append(items)}else if($('.card').not('.recent').find('.item').hasClass(value)){let recent_name=$(`.${value}:last`).children('a').text()
let items=` <div class="item ${value}"><a href="javascript:;">${recent_name}</a></div> `
$(".recent .items").append(items)}else{recentItems.splice(recentItems.indexOf(value),1)
recentItems_json=recentItems.join(",")
Cookies.set('recent_items',recentItems_json,{expires:10000,path:'/'})}})}
let card_items=custom_card_list
let custom_card=`
<div class="card custom" style="position: absolute"> <div class="wrap"> <div class="catalog-title custom_item"> <span>自定义</span> <i class="fa fa-plus hover-hidden" aria-hidden="true" title="添加"></i> <i class="fa fa-close hover-hidden" aria-hidden="true" title="删除"></i> <i class="fa fa-pencil hover-hidden" aria-hidden="true" title="编辑"></i> <i class="fa fa-search fa-search-card hover-hidden" aria-hidden="true" title="搜索/打开"></i> <i class="fa fa-chevron-left fa-chevron-left-wrap" aria-hidden="true" title="展开"></i> </div> <div class="items"> <div class="add_item"><a href="javascript:;"><i class="fa fa-plus-square" aria-hidden="true"></i></a></div> </div> </div> </div> `
let custom_card_m=`
<div class="card custom"> <div class="wrap"> <div class="catalog-title custom_item"> <span>自定义</span> <i class="fa fa-plus hover-hidden" aria-hidden="true" title="添加"></i> <i class="fa fa-close hover-hidden" aria-hidden="true" title="删除"></i> <i class="fa fa-pencil hover-hidden" aria-hidden="true" title="编辑"></i> <i class="fa fa-search fa-search-card hover-hidden" aria-hidden="true" title="搜索/打开"></i> <i class="fa fa-chevron-left fa-chevron-left-wrap" aria-hidden="true" title="展开"></i> </div> <div class="items"> <div class="add_item"><a href="javascript:;"><i class="fa fa-plus-square" aria-hidden="true"></i></a></div> </div> </div> </div>
`
if(custom_card_json!='{}'){$.each(custom_card_list,function(key,value){if(value.card){if($(window).width()>460){if($(".recent").length>0){$(".recent").after(custom_card)}else{$(".container").prepend(custom_card)}}else{if($(".recent").length>0){$(".recent").after(custom_card_m)}else{$(".container").prepend(custom_card_m)}}
$(".custom:first").addClass(value.name_e)
$('.custom:first').removeClass('custom')
$('.'+value.name_e).addClass('custom')
$(".custom:first").find('.catalog-title').children('span').html(value.name)
if(value.websites!=[]){for(i in value.websites){let card_info=card_items[value.websites[i]]
let item=` <div class="item ${card_info.name_e}"> <a href="javascript:;">${card_info.name}</a> </div> `
$('.'+value.name_e).find('.items').prepend(item)}}}})
if(/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)){}else{$('.fa-chevron-left-wrap').css('display','none')}}
if(Cookies.get("has_paied")){}else{let pay_item1='https://orxing-top.oss-cn-chengdu.aliyuncs.com/img/20200301133812.gif?x-oss-process=style/base'
let pay_item2='https://orxing-top.oss-cn-chengdu.aliyuncs.com/img/20200301133849.gif?x-oss-process=style/base'
let pay_card=`<div class="card pay"><div class="wrap"><div class="catalog-title pay_item"><span>小猫快饿死了</span> <i class="fa fa-remove fa-pay-remove hover-hidden" aria-hidden="true" title="删除"></i><i class="fa fa-chevron-left fa-chevron-left-wrap" aria-hidden="true" title="展开" ></i> </div><div class="other_items"><img src=${pay_item1} ><img src=${pay_item2} ></div></div></div>`
$(".container").prepend(pay_card)
if(/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)){}else{$('.fa-chevron-left-wrap').css('display','none')}}
$(document).on('click','.fa-pay-remove',function(){if(confirm("您的赞赏是对我最大的帮助和鼓励\n不思议导航承诺永远不会引入广告\n点击确定后卡片将不再显示")){Cookies.set("has_paied",1)
$('.pay').remove()
boxRelocation()}})
$.each(clickToUp,function(key,value){if($("."+value).length==1){let cardHtml=$("."+value).prop("outerHTML")
$("."+value).remove()
if(Cookies.get("recent_items")){if(custom_card_json!='{}'){$('.custom:last').after(cardHtml)}else{$(".recent").after(cardHtml)}}else if(custom_card_json!='{}'){$(".custom:last").after(cardHtml)}else{$(".container").prepend(cardHtml)}
$("."+value).find(".catalog-title").addClass('top_item')}else{clickToUp.splice(clickToUp.indexOf(value),1)
clickToUp_json=clickToUp.join(",")
Cookies.set('clickToUp',clickToUp_json,{expires:10000,path:'/'})}})
$.each(clickToDown,function(key,value){if($("."+value).length==1){let cardHtml=$("."+value).prop("outerHTML")
$("."+value).remove()
$(".container").append(cardHtml)
$(".container").children(":last-child").children().css("opacity","0.3")}else{clickToDown.splice(clickToDown.indexOf(value),1)
clickToDown_json=clickToDown.join(",")
Cookies.set('clickToDown',clickToDown_json,{expires:10000,path:'/'})}})
$.each($(".new"),function(){$(this).find('.catalog-title').hasClass('top_item')?console:$(this).find('.catalog-title').addClass('new_item')})
let windowWidth=0
let interval=null
$(window).on("load",function(){if($('.container').width()>460){boxLocation()
window.onresize=function(){windowWidth=$('.container').width()
if(interval==null){interval=setInterval("throttle_reloaction()",1000)}}}})
if(/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)){}else{$(document).on('mouseenter','.catalog-title',function(){let cardName=$(this).parents('.card').attr('class').split(' ')[1]
if(!$(this).parents('.card').hasClass("custom")&&!$(this).parents('.card').hasClass("recent")){if(searchURL[cardName].description){tippy(this,{content:searchURL[cardName].description,arrow:true,delay:[300,0],arrowType:'round',animation:'perspective',theme:'light-border',interactive:true})}}})
$(document).on('mouseenter','.item',function(){let itemName=$(this).attr('class').split(' ')[1]
if(searchURL[itemName].description){tippy(this,{content:searchURL[itemName].description,arrow:true,delay:[300,0],arrowType:'round',animation:'perspective',theme:'light',followCursor:true})}})}
if(/Android|webOS|iPhone|iPod|iPad|BlackBerry/i.test(navigator.userAgent)){}else{$(document).on('mouseenter','.catalog-title',function(){timer=setTimeout(()=>{$(this).children('span').css('display','none')
$(this).children('.hover-hidden').css('display','inline')},300)})
$(document).on('mouseleave','.catalog-title',function(){clearTimeout(timer)
$(this).children('span').css('display','inline')
$(this).children('.hover-hidden').css('display','none')})
$(document).on('mouseenter','.card .item',function(){timer=setTimeout(()=>{if(on_edit&&$(this).css('backgroundColor')=='rgb(153, 102, 140)'){}else{$(this).css({'background-color':'#f5f5f5'})}},300)})
$(document).on('mouseleave','.card .item',function(){clearTimeout(timer)
if(on_edit&&$(this).css('backgroundColor')=='rgb(153, 102, 140)'){}else{$(this).css({'background-color':'white'})}})}
$(document).on('click','.fa-pencil',function(){$(this).parent().parent().find('.item').css('backgroundColor','#99668c')
$(this).parent().parent().find('.item a').css('color','#fff')
on_edit=true
$(this).parents('.wrap').find('.add_item a').html('完成')
$(this).parents('.wrap').find('.add_item').addClass('edit_done').removeClass('add_item')
$(this).siblings('.fa-chevron-left-wrap').trigger('click')})
$(document).on('click','.edit_done',function(){$(this).siblings('.item').css('backgroundColor','#fff')
$(this).siblings('.item').children('a').css('color','#3c3a3a')
on_edit=false
$(this).children('a').html(`<i class="fa fa-plus-square" aria-hidden="true"></i>`)
$(this).addClass('add_item').removeClass('edit_done')})
const remove_items_all=(site_name)=>{if(recentItems[site_name]){recentItems.splice($.inArray(site_name,recentItems),1)
recentItems=recentItems.join(",")
Cookies.set('recent_items',recentItems,{expires:10000,path:'/'})}
if(hot_item_list[site_name]){delete hot_item_list[site_name]
hot_item_json=JSON.stringify(hot_item_list)
localStorage.setItem("hot_items",hot_item_json)}}
$(document).on('click','.item',function(){let item1=$(this).parents(".card").attr('class').split(' ')[1]
let item2=$(this).attr('class').split(' ')[1]
if(on_edit&&$(this).css('backgroundColor')=='rgb(153, 102, 140)'){let athis=$(this)
$.fancybox.open({type:'html',src:T_editsite,opts:{animationDuration:200,animationEffect:'material',modal:true,clickOutside:'close',baseTpl:T_base,}})
let old_card_name_e=athis.parents('.card').attr('class').split(' ')[1]
let old_site_name_e=athis.attr('class').split(' ')[1]
let name=custom_card_list[old_site_name_e].name
name[name.length-1]=='_'?name=name.substring(0,name.length-1):console
$('#diysite-name').val(name)
$('#diysite-address').val(custom_card_list[old_site_name_e].home)
$('#diysite-search').val(custom_card_list[old_site_name_e].search)
custom_card_list[old_site_name_e].description==false?console:$('#diysite-description').val(custom_card_list[old_site_name_e].description)
$('.diysite-delete').on('click',function(){if(confirm("确定删除？不可恢复")){remove_items_all(old_site_name_e)
delete custom_card_list[old_site_name_e]
$('.'+old_site_name_e).remove()
custom_card_list[old_card_name_e].websites.splice(custom_card_list[old_card_name_e].websites.indexOf(old_site_name_e),1)
custom_card_json=JSON.stringify(custom_card_list)
localStorage.setItem("custom_cards",custom_card_json)
boxRelocation()
custom_ajax(json_url)
$('.diysite-no').trigger('click')}})
$('.diysite-sure').on('click',function(){let new_site_name=$('#diysite-name').val().trim()
new_site_name==" "?console:new_site_name+='_'
new_site_name_e=Pinyin.convertToPinyin(new_site_name,"",true).toLowerCase()
let new_site_addr=$('#diysite-address').val().trim()
let new_site_search=$('#diysite-search').val().trim()
let new_site_desc=$('#diysite-description').val().trim()
if(new_site_name_e!=old_site_name_e){if(new_site_name==''||new_site_addr==''){alert('网站名称和地址必填！')}else{let flag=1
if($('.'+new_site_name_e).length>0){flag=0
alert('已经有同名网站或卡片，请修改网站名')}
if(!/^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-.,@?^=%&:\/~+#]*[\w\-@?^=%&\/~+#])?$/.test(new_site_search)||!/^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-.,@?^=%&:\/~+#]*[\w\-@?^=%&\/~+#])?$/.test(new_site_addr)){flag=0
alert("链接格式错误( 缺少http://或https:// )，请修改！")}
if(flag){$('.diysite-no').trigger('click')
new_site_search?console:new_site_search=new_site_addr
new_site_desc?console:new_site_desc=false
remove_items_all(old_site_name_e)
custom_card_list[old_card_name_e].websites.splice(custom_card_list[old_card_name_e].websites.indexOf('old_site_name_e'),1)
delete custom_card_list[old_site_name_e]
custom_card_list[old_card_name_e].websites.push(new_site_name_e)
custom_card_list[new_site_name_e]={'name_e':new_site_name_e,'name':new_site_name,'home':new_site_addr,'search':new_site_search,'description':new_site_desc,'card':false}
custom_card_json=JSON.stringify(custom_card_list)
localStorage.setItem("custom_cards",custom_card_json)
$('.'+old_site_name_e).children('a').text(new_site_name)
$('.'+old_site_name_e).addClass(new_site_name_e).removeClass(old_site_name_e)
custom_ajax(json_url)
boxRelocation()}}}else{if(!/^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-.,@?^=%&:\/~+#]*[\w\-@?^=%&\/~+#])?$/.test(new_site_search)||!/^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-.,@?^=%&:\/~+#]*[\w\-@?^=%&\/~+#])?$/.test(new_site_addr)){alert("链接格式错误( 缺少http://或https:// )，请修改！")}else{custom_card_list[new_site_name_e]={'name_e':new_site_name_e,'name':new_site_name,'home':new_site_addr,'search':new_site_search,'description':new_site_desc,'card':false}
custom_card_json=JSON.stringify(custom_card_list)
localStorage.setItem("custom_cards",custom_card_json)
custom_ajax(json_url)
$('.diysite-no').trigger('click')}}})}else{if(item1=="recent"){item1=$(`.${item2}`).last().parents(".card").attr('class').split(' ')[1]}
search_on_link(item2,text)}})
$(document).on('click','.hot_item',function(){let item2=$(this).attr('class').split(' ')[1]
search_on_link(item2,text)})
$(document).on('click','.fa-search-card',function(){let itemsClass=$(this).parents(".card").attr('class').split(' ')[1]
if(confirm("马上同时搜索/打开该板块下所有网站\n如果不能打开，请开启弹出式窗口权限")){search_all_on_link(itemsClass)}})
$(document).on('click','.fa-arrow-down',function(){$(this).siblings('.fa-chevron-left-wrap').trigger('click')
let thisCard=$(this).parents(".card")
let downClassname=thisCard.attr('class').split(' ')[1]
if($.inArray(downClassname,clickToUp)>=0){clickToUp=unique(clickToUp)
clickToUp.splice(clickToUp.indexOf(downClassname),1)
clickToUp_json=clickToUp.join(",")
Cookies.set('clickToUp',clickToUp_json,{expires:10000,path:'/'})
alert('置顶卡片再掉落则回到默认位置')
location.reload()}else{clickToDown.push(downClassname)
let cardHtml=thisCard.prop("outerHTML")
thisCard.remove();$(".container").append(cardHtml)
let bottom_item=$(".container").children(":last-child")
bottom_item.children().css("opacity","0.3")
boxRelocation()
$('.'+downClassname).hasClass('new')?$('.'+downClassname).find('.catalog-title').removeClass('new_item'):console
clickToDown_json=unique(clickToDown).join(",")
Cookies.set('clickToDown',clickToDown_json,{expires:10000,path:'/'})}})
$(document).on('click','.fa-arrow-up',function(){$(this).siblings('.fa-chevron-left-wrap').trigger('click')
let thisCard=$(this).parents(".card")
let upClassname=thisCard.attr('class').split(' ')[1]
if($.inArray(upClassname,clickToDown)>=0){clickToDown=unique(clickToDown)
clickToDown.splice(clickToDown.indexOf(upClassname),1)
clickToDown_json=clickToDown.join(",")
Cookies.set('clickToDown',clickToDown_json,{expires:10000,path:'/'})
alert('掉落卡片再置顶则回到默认位置')
location.reload()}else{clickToUp.push(upClassname)
let cardHtml=thisCard.prop("outerHTML")
thisCard.remove()
if($(".recent").length>0){if($('.custom').length>0){$(".custom:last").after(cardHtml)}else{$(".recent").after(cardHtml)}}else{if($('.custom').length>0){$(".custom:last").after(cardHtml)}else{$(".container").prepend(cardHtml)}}
let up_item=$('.'+upClassname)
up_item.children().css("opacity","1")
up_item.find(".catalog-title").addClass("top_item")
$('.'+upClassname).hasClass('new')?$('.'+upClassname).find('.catalog-title').removeClass('new_item'):console
boxRelocation()
scroll2sth($(up_item),500)
clickToUp_json=unique(clickToUp).join(",")
Cookies.set('clickToUp',clickToUp_json,{expires:10000,path:'/'})}})
$(document).on('click','.fa-plus',function(){let new_card_name=prompt("请输入卡片的名称")
let new_card_name_e=''
let flag=0
const unique_=(name)=>{if($('.'+name).length>0){flag=1}else flag=0}
if(new_card_name!=null&&new_card_name!=''){new_card_name=new_card_name.replace(/\s+/g,"")
new_card_name=new_card_name+'_'
new_card_name_e=Pinyin.convertToPinyin(new_card_name,"",true).toLowerCase()
unique_(new_card_name_e)}
while(flag){new_card_name=prompt("已存在同名卡片(或拼音相同)，请重新输入")
if(new_card_name!=null&&new_card_name!=''){new_card_name=new_card_name+'_'
new_card_name=new_card_name.replace(/\s+/g,"")
new_card_name_e=Pinyin.convertToPinyin(new_card_name,"",true).toLowerCase()
unique_(new_card_name_e)}else{break}}
if(new_card_name!=null&&new_card_name!=''){$(this).siblings('.fa-chevron-left-wrap').trigger("click")
if($(window).width()>460){if($(".recent").length>0){$(".recent").after(custom_card)}else{$(".container").prepend(custom_card)}
$('.fa-chevron-left-wrap').css('display','none')}else{if($(".recent").length>0){$(".recent").after(custom_card_m)}else{$(".container").prepend(custom_card_m)}}
$('.custom:first').find('.catalog-title').children('span').html(new_card_name)
$('.custom:first').addClass(new_card_name_e)
$('.custom:first').removeClass('custom')
$('.'+new_card_name_e).addClass('custom')
custom_card_list[new_card_name_e]={'name_e':new_card_name_e,'name':new_card_name,'card':true,'websites':[],}
custom_card_json=JSON.stringify(custom_card_list)
localStorage.setItem("custom_cards",custom_card_json)
custom_ajax(json_url)
$('.custom:first').addClass(new_card_name_e)
$('.custom:first').removeClass('custom')
$('.'+new_card_name_e).addClass('custom')
$(this).siblings('.fa-chevron-left-wrap').trigger('click')
boxRelocation()
scroll2sth($('.'+new_card_name_e),500)}})
$(document).on('click','.fa-close',function(){if(confirm('确定删除，不能恢复')){let card=$(this).parents('.card')
card.remove()
let card_name=card.attr('class').split(' ')[1]
let card_items=custom_card_list[card_name].websites
for(i in card_items){delete custom_card_list[card_items[i]]
remove_items_all(card_items[i])}
delete custom_card_list[card_name]
custom_card_json=JSON.stringify(custom_card_list)
localStorage.setItem("custom_cards",custom_card_json)
boxRelocation()
custom_ajax(json_url)}})
$(document).on('click','.add_item',function(){let athis=$(this)
$.fancybox.open({type:'html',src:T_addsite,opts:{animationDuration:200,animationEffect:'material',modal:true,clickOutside:'close',baseTpl:T_base,}})
$('.diysite-sure').on('click',function(){let new_card_name_e=athis.parents('.card').attr('class').split(' ')[1]
let new_site_name=$('#diysite-name').val().trim()
new_site_name==''?console:new_site_name+='_'
let new_site_addr=$('#diysite-address').val().trim()
let new_site_search=$('#diysite-search').val().trim()
let new_site_desc=$('#diysite-description').val().trim()
let new_site_name_e=Pinyin.convertToPinyin(new_site_name,"",true).toLowerCase()
if(new_site_name&&new_site_addr){new_site_name=new_site_name.replace(/\s+/g,"")
new_site_search?console:new_site_search=new_site_addr
let flag=1
if($('.'+new_site_name_e).length>0){flag=0
alert('已存在同名网站(或拼音相同)，请修改!')}
if(!/^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-.,@?^=%&:\/~+#]*[\w\-@?^=%&\/~+#])?$/.test(new_site_search)||!/^((ht|f)tps?):\/\/[\w\-]+(\.[\w\-]+)+([\w\-.,@?^=%&:\/~+#]*[\w\-@?^=%&\/~+#])?$/.test(new_site_addr)){flag=0
alert("链接格式错误( 缺少http://或https:// )，请修改！")}
if(flag){$('.diysite-no').trigger('click')
new_site_desc?console:new_site_desc=false
custom_card_list[new_card_name_e].websites.push(new_site_name_e)
custom_card_list[new_site_name_e]={'name_e':new_site_name_e,'name':new_site_name,'home':new_site_addr,'search':new_site_search,'description':new_site_desc,'card':false}
custom_card_json=JSON.stringify(custom_card_list)
localStorage.setItem("custom_cards",custom_card_json)
custom_ajax(json_url)
let items=` <div class="item ${new_site_name_e}"><a href="javascript:;">${new_site_name}</a></div>`
athis.parent().prepend(items)
boxRelocation()}}else{alert('网站名称和地址必填！')}})})
$('.logo,.nav_title span').on('click',function(){$.fancybox.open({type:'html',src:T_setting,opts:{animationDuration:350,animationEffect:'material',modal:true,clickOutside:'close',baseTpl:T_base}})
$('.setting_1').on('click',function(){if(confirm("确定还原布局？")){Cookies.remove('clickToDown')
Cookies.remove('clickToUp')
location.reload()}})
$('.setting_2').on('click',function(){if(confirm("确定清除搜索记录？")){Cookies.remove('historykeys')
location.reload()}})
$('.setting_3').on('click',function(){if(confirm("确定清除最近使用？")){Cookies.remove('recent_items')
location.reload()}})
let wallpaper_file=document.querySelector('#wallpaper_file')
let wallpaper_setting=document.querySelector('.wallpaper_setting .custom')
let logo_file=document.querySelector('#logo_file')
let logo_setting=document.querySelector('.logo_setting .custom')
wallpaper_setting.addEventListener("click",function(){if(wallpaper_file){wallpaper_file.click()}},false)
logo_setting.addEventListener("click",function(){if(logo_file){logo_file.click()}},false)
$('#wallpaper_file').change(function(){handleFilePath($(this)[0],function(imgPath){if(imgPath){localStorage.setItem("custom_wallpaper",imgPath)
location.reload()}else{alert('设置失败')}})})
$('#logo_file').change(function(){handleFilePath($(this)[0],function(imgPath){if(imgPath){localStorage.setItem("custom_logo",imgPath)
location.reload()}else{alert('设置失败')}})})
$('.wallpaper_setting .recover').on('click',function(){localStorage.removeItem("custom_wallpaper")
location.reload()})
$('.logo_setting .recover').on('click',function(){localStorage.removeItem("custom_logo")
location.reload()})
$('.all_conf').on('click',function(){let all_conf={"custom_cards":{"name":"custom_cards","item":custom_card_list},"hot_items":{"name":"hot_item","item":hot_item_list},"recent_items":{"name":"recent_items","item":recentItems_json},"clickToUp":{"name":"clickToUp","item":clickToUp_json},"clickToDown":{"name":"clickToDown","item":clickToDown_json},"history_keys":{"name":"history_keys","item":history_keys_json},"searchengine":{"name":"searchengine","item":searchengineNow},"has_paied":{"name":"has_paied","item":1},"first_use":{"name":"first_use","item":false}}
all_conf=JSON.stringify(all_conf)
copyToClipboard(all_conf)
alert('复制成功，快去粘贴吧')})
$('.card_conf').on('click',function(){let card_conf={"custom_cards":{"name":"custom_cards","item":custom_card_list}}
card_conf=JSON.stringify(card_conf)
copyToClipboard(card_conf)
alert('复制成功，快去粘贴吧')})
$('.config_in').on('click',function(){let conf=prompt("将配置粘贴进去即可，原有配置将被覆盖",'')
if(conf!=null&&conf!=""){conf=JSON.parse(conf)
if(conf.custom_cards!=undefined&&conf.custom_cards!=null){custom_card_json=JSON.stringify(conf.custom_cards.item)
localStorage.setItem("custom_cards",custom_card_json)}
if(conf.hot_items!=undefined&&conf.hot_items!=null){hot_item_json=JSON.stringify(conf.hot_items.item)
localStorage.setItem("hot_items",hot_item_json)}
if(conf.recent_items!=undefined&&conf.recent_items!=null){Cookies.set('recent_items',conf.recent_items.item,{expires:10000,path:'/'})}
if(conf.clickToUp!=undefined&&conf.clickToUp!=null){Cookies.set('clickToUp',conf.clickToUp.item,{expires:10000,path:'/'})}
if(conf.clickToDown!=undefined&&conf.clickToDown!=null){Cookies.set('clickToDown',conf.clickToDown.item,{expires:10000,path:'/'})}
if(conf.history_keys!=undefined&&conf.history_keys!=null){Cookies.set('historykeys',conf.history_keys.item,{expires:10000,path:'/'})}
if(conf.search_engine!=undefined&&conf.search_engine!=null){Cookies.set('searchengine',conf.searchengine.item,{expires:10000,path:'/'})}
if(conf.has_paied!=undefined&&conf.has_paied!=null){Cookies.set('has_paied',conf.has_paied.item,{expires:10000,path:'/'})}
if(conf.first_use!=undefined&&conf.first_use!=null){Cookies.set('firstuse',conf.first_use.item,{expires:10000,path:'/'})}
location.reload()}})})
$('.toggle-menu').on('click',function(){if($(".toggle-menu").hasClass("open")){$(".toggle-menu").removeClass("open").addClass("close")
$("#page-header #site-name,#page-header .search").css({'color':'#3b3a3a','text-shadow':'none'})
$(".toggle-menu *").css({'background-color':'#3b3a3a','text-shadow':'none'});$('body').addClass("is_hidden")
$('.menus').addClass("menu_open")}else{$(".toggle-menu").removeClass("close").addClass("open")
$("#page-header #site-name,#page-header .search").css({'color':'','text-shadow':''})
$(".toggle-menu *").css({'background-color':'','text-shadow':''})
$('body').removeClass("is_hidden")
$('.menus').removeClass("menu_open").addClass('menu_close')
setTimeout(function(){$('.menus').removeClass("menu_close")},300)}})
localStorage.setItem("custom_cards",custom_card_json)
setTimeout(function(){$.each(Array_hot_item_list,function(key,val){if($('.'+val.name_e).length>1){hot_item_list_sort[val.name_e]={"name_e":val.name_e,"name":val.name.trim(),"frequency":val.frequency}}})
hot_item_json=JSON.stringify(hot_item_list_sort)
localStorage.setItem("hot_items",hot_item_json)},2000)