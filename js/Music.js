
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