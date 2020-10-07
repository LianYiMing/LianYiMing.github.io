	(function() {
			const loaded = function() {
				setTimeout(function() {
					const loader = document.getElementById("loading-container");
					loader.className = "fadeout"; //使用渐隐的方法淡出loading page
					// document.getElementById("body-wrap").style.display="flex";
					setTimeout(function() {
						loader.style.display = "none";
					}, 1000);
				}, 1000); //强制显示loading page 1s  
			};
			loaded();
		})()