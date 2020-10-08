window.onload=function(){ 
	//为了避免报错
function playPause() {
	var music = document.getElementById('music');
	var music_btn = document.getElementById('music-btn');
	if (music.paused) {
		music.play();
		music_btn.src = '/img/second.png';
	} else {
		music.pause();
		music_btn.src = '/img/play.png';
	}
} //播放和暂停合一，默认是打开页面点击播放，点击后播放键就会变为暂停键
//这里只是我想二合一，其实可以分开的，原理一样，把两个判断分到两个按钮，写两个function就ok啦
var music1 = new Array();
music1 = ["/music/烤面筋.mp3",
	"/music/River is waiting.mp3",
	"/music/Despacito-2CELLOS-27182870.mp3",
	"/music/Girls_Like_You-Maroon_5_Cardi_B-91687612.mp3",
	"/music/I_Just_Wanna_Run-The_Downtown_Fiction-912516.mp3",
	"/music/Wake_Me_Up-Avicii-3398388.mp3",
	"/music/爱因为在心中-王力宏-4329844.mp3",
	"/music/哈尼宝贝-南征北战NZBZ-17084966.mp3",
	"/music/风想-王力宏-6871867.mp3",
	"/music/海阔天空-Beyond-5886682.mp3",
	"/music/红日-李克勤-1133143.mp3",
	"/music/树梢-王力宏-6871875.mp3",

]; //用数组存储所有歌曲的路径
//如果是本瘰音乐，就写本地的路径，如果你使用了云存储，就把url放在这里就好了
var num = 0;
var n = music1.length; //获取数组的长度
function lastmusic() {
	num = (num + n - 1) % n;
	music.src = music1[num];
	music.play();
} //切上一首歌
function nextmusic() {
	num = (num + 1) % n;
	music.src = music1[num];
	music.play();
} //切下一首歌
window.onload = function() {
	music.addEventListener('ended', function() {
		nextmusic();
	}, false)
} //自动连播功能，监听播放情况，结束之后就调用下一首歌的函数





window.onload = function() {

	//多首歌曲播放效果以及基本的按钮定义

	var bgm_echo = document.querySelector('.bgm_echo');

	var bgm_btn_play = document.querySelector('.bgm_btn_play');

	var bgm_btn_stop = document.querySelector('.bgm_btn_stop');

	var bgm_btn_next = document.querySelector('.bgm_btn_next');

	var bgm = document.getElementById('bgm');

	//播放开始

	bgm_btn_play.onclick = function() {

		bgm.play();

	}

	//播放暂停

	bg_btn_stop.onclick = function() {

		bgm.pause();

	}

	//初始化播放列表【如果有播放记录，则调用】

	if (localStorage.getItem('bgm_gds') != null) {

		bgm.setAttribute('value', localStorage.getItem('bgm_gds'));

		bgm.innerHTML = '<source src="bgm/' + localStorage.getItem('bgm_gds') + '.mp3" type="audio/mpeg">';

		bgm_echo.innerHTML = '当前播放第' + localStorage.getItem('bgm_gds') + '首歌曲';

	} else {

		bgm.setAttribute('value', 1);

		bgm.innerHTM = '<source src="bgm/1.mp3" type="audio/mpeg">';

		bgm_echo.innerHTML = '当前播放第1首歌曲';

	}

	//下一首歌曲切换

	bgm_btn_next.onclick = function() {

		var bgm_gds = bgm.getAttribute('value');

		if (bgm_gds < 4) {

			bgm_gds++;

		} else {

			bgm_gds = 1;

		}

		bgm.innerHTML = '<source src="bgm/' + bgm_gds + '.mp3" type="audio/mpeg">';

		bgm_echo.innerHTML = '当前播放第' + bgm_gds + '首歌曲';

		bgm.load();

		bgm.play();

		//切换歌曲后，写入代码

		bgm.setAttribute('value', bgm_gds);

		localStorage.setItem('bgm_gds', bgm_gds);

	}

	//音乐播放完成操作

	bgm.onended = function() {

		bgm_btn_next.click();

	};

	//重置所有音频记忆

	var bgm_btn_rest = document.querySelector('.bgm_btn_rest');

	bgm_btn_rest.onclick = function() {

		//停止音乐

		bgm.pause();

		setTimeout(function() {

			//删除记录

			localStorage.removeItem('bgm_gds');

			localStorage.removeItem('bgm_time');

			//重新启动

			bgm.setAttribute('value', 1);

			bgm.innerHTML = '<source src="bgm/1.mp3" type="audio/mpeg">';

			bgm_echo.innerHTML = '当前播放第1首歌曲';

			//重新播放

			bgm.load();

			bgm.play();

		}, 200);

	}

	//音轨补偿代码

	var _hmt = _hmt || [];
	(function() {
		var hm = document.createEement("script");
		hm.src = "https://hm.baidu.com/hm.js?55b841b7fc79462384573c80c4d890b9";
		var s = document.getElementsByTagName("script")[0];
		s.parentNode.insertBefore(hm, s)
	})();
	setTimeout(function() {

		//获取DOM

		var bgm = document.getElementById('bgm');

		//如果发现有本地存储，则进行音轨补偿

		if (localStorage.getItem('bgm_time') != null) {

			bgm.currentTime = localStorage.getItem('bgm_time');

			//启动播放音乐

			bgm.play();

		}

		//不断循环记录播放进度

		window.setInterval(function() {

			//检测是否支持本地存储

			if (typeof(Storage) !== 'undefined') {

				//写入BGM播放进度

				localStorage.setItem('bgm_time', bgm.currentTime);

			} else {

				//提示浏览器不支持

				var doc_body = document.querySelector('body');

				doc_body.innerHTML = '<h1>抱歉！您的浏览器过旧，请更换新的浏览器再试</h1>';

			}

		}, 100);

		//初始化启¨GM

		bgm.play();

	}, 1000);

}
}