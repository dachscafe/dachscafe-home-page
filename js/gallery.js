/*===========================================================*/
/* dropboxの画像データをhtmlリストに変換 */
/*===========================================================*/
function CreateImgLi() {
	var urlList = [
		'https://www.dropbox.com/s/2h7wbsxhivjsatk/%E3%81%86%E3%81%A1%E3%81%AE%E3%81%933.png?dl=0',
		'https://www.dropbox.com/s/5b54hm6sj7wjptv/%E3%81%86%E3%81%A1%E3%81%AE%E5%AD%902.png?dl=0',
		'https://www.dropbox.com/s/tvdygk1oljm9g7z/%E3%83%97%E3%83%AD%E3%83%88%E3%83%9E%E3%83%BC%E3%83%AA%E3%83%B3.png?dl=0',
		'https://www.dropbox.com/s/zohkku0jbfav623/%E3%83%9B%E3%83%BC%E3%83%B3%E3%81%AE%E3%82%AA%E3%83%AA%E3%82%AD%E3%83%A3%E3%83%A9.png?dl=0',
		'https://www.dropbox.com/s/pisocymimry8ar7/%E9%9B%BB%E8%A9%B1OL.png?dl=0',
		'https://www.dropbox.com/s/c8c3p9xlel6jxph/%E5%86%99%E7%9C%9F%202022-01-03%2022%2055%2059.png?dl=0',
		'https://www.dropbox.com/s/jwgcgqaktb75ycl/%E5%86%99%E7%9C%9F%202022-01-14%208%2040%2002.png?dl=0',
		'https://www.dropbox.com/s/ik7m2zivkna6bsg/%E5%86%99%E7%9C%9F%202022-01-21%207%2052%2040.png?dl=0',
		'https://www.dropbox.com/s/1qsyfqd1ivxzps9/%E5%86%99%E7%9C%9F%202022-01-31%2021%2013%2000.png?dl=0',
		'https://www.dropbox.com/s/b5iw656sckg599c/%E5%86%99%E7%9C%9F%202022-02-21%2022%2012%2051.png?dl=0',
		'https://www.dropbox.com/s/g23ch9xo7r0hrvr/%E5%86%99%E7%9C%9F%202022-02-25%2022%2043%2012.png?dl=0',
		'https://www.dropbox.com/s/a97ht70yayq1hju/%E5%86%99%E7%9C%9F%202022-03-11%2022%2045%2025.png?dl=0',
		'https://www.dropbox.com/s/dxfyszr098k0pue/%E5%86%99%E7%9C%9F%202022-03-11%2022%2046%2001.png?dl=0',
		'https://www.dropbox.com/s/d3eq33jph1whw2i/%E5%86%99%E7%9C%9F%202022-03-18%2023%2045%2023.png?dl=0',
		'https://www.dropbox.com/s/we7rvnz4icjwdke/%E5%86%99%E7%9C%9F%202022-05-16%2021%2046%2002.png?dl=0',
		'https://www.dropbox.com/s/abdlk3xj443c17m/%E5%86%99%E7%9C%9F%202022-06-07%208%2044%2019.png?dl=0',
		'https://www.dropbox.com/s/cw471b1smin5cvi/%E5%86%99%E7%9C%9F%202023-01-21%2010%2010%2041.png?dl=0',
		'https://www.dropbox.com/s/dgd6dvndvw5ta37/%E5%86%99%E7%9C%9F%202023-01-21%2010%2010%2059.png?dl=0',
		'https://www.dropbox.com/s/ub798hxcmkoi5bc/%E5%86%99%E7%9C%9F%202023-01-21%2010%2011%2009.png?dl=0',
		'https://www.dropbox.com/s/0t8o86x95eg5956/%E5%86%99%E7%9C%9F%202023-02-28%2021%2047%2003.jpg?dl=0'
	];
	// urlの変換
	urlList = urlList.map(element => element.replace('www.dropbox.com', 'dl.dropboxusercontent.com'));
	urlList = urlList.map(element => element.replace('?dl=0', ''));
	// 変数定義
	var galleryRightText = '';
	var galleryLeftText = '';
	var halfCount = Math.floor(urlList.length / 2);
	var counter = 0;
	for (let i = 0; i < urlList.length; ++i) {
		counter += 1;
		var url = urlList[i];
		var htmlLi = '<li class="bgextend bgLRextendTrigger zoomInRotate"><div class="bgappearTrigger"><a href="' + url + '" data-lightbox="gallery-group"><img src="' + url + '" alt=""></a></div></li>';
		if (counter <= halfCount) {
			galleryRightText += htmlLi;
		} else {
			galleryLeftText += htmlLi;
		}
		$(".gallery.right").html(galleryRightText);
		$(".gallery.left").html(galleryLeftText);
	}
} 

/*==================================================
/*関数をまとめる*/
/*===================================*/
// DOMツリー直後の動き
$(document).ready(function(){
	CreateImgLi()
});

// ページが読み込まれたらすぐに動かしたい場合の記述
$(window).on('load',function(){
    
    //機能編 4-1-5 ロゴアウトラインアニメーション
    $("#splash_logo").delay(1200).fadeOut('slow');//ロゴを1.2秒でフェードアウトする記述 
    
    //=====ここからローディングエリア（splashエリア）を1.5秒でフェードアウトした後に動かしたいJSをまとめる

    $("#splash").delay(1500).fadeOut('slow',function(){//ローディングエリア（splashエリア）を1.5秒でフェードアウトする記述
    
		$('body').addClass('appear');//フェードアウト後bodyにappearクラス付与 

	}); //=====ここまでローディングエリア（splashエリア）を0.8秒でフェードアウトした後に動かしたいJSをまとめる
    
});// ここまでページが読み込まれたらすぐに動かしたい場合の記述