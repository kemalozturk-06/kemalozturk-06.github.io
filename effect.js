$(window).load(function(){
	$('.loading').fadeOut('fast');
	$('.container').fadeIn('fast');
});
$('document').ready(function(){
		var vw;
		$(window).resize(function(){
			 vw = $(window).width()/2;
			$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
			$('#b11').animate({top:240, left: vw-350},500);
			$('#b22').animate({top:240, left: vw-250},500);
			$('#b33').animate({top:240, left: vw-150},500);
			$('#b44').animate({top:240, left: vw-50},500);
			$('#b55').animate({top:240, left: vw+50},500);
			$('#b66').animate({top:240, left: vw+150},500);
			$('#b77').animate({top:240, left: vw+250},500);
		});

		$('#turn_on').click(function(){
			$('#bulb_yellow').addClass('bulb-glow-yellow');
			$('#bulb_red').addClass('bulb-glow-red');
			$('#bulb_blue').addClass('bulb-glow-blue');
			$('#bulb_green').addClass('bulb-glow-green');
			$('#bulb_pink').addClass('bulb-glow-pink');
			$('#bulb_orange').addClass('bulb-glow-orange');
			$('body').addClass('peach');
			$(this).fadeOut('slow').delay(4000).promise().done(function(){
				$('#play').fadeIn('slow');
			});
			konfettiEffect();
		});
		
		// Konfeti efekti fonksiyonu
		function konfettiEffect() {
			// Konfeti animasyonu
			confetti({
				particleCount: 100,
				spread: 70,
				origin: { y: 0.6 }
			});
		}
		$('#play').click(function(){
			var audio = $('.song')[0];
			audio.play();
		
			$('.balloon-photo').remove(); // Önceki fotoğrafları kaldır
		
			var maxPhotos = 16; // Oluşturulacak maksimum fotoğraf sayısı
			var photoWidth = 200; // Fotoğraf genişliği
			var photoHeight = 200; // Fotoğraf yüksekliği
		
			// Fotoğrafları oluştur
			for (var i = 1; i <= maxPhotos; i++) {
				var $photo = $('<div class="balloon-photo"></div>'); // Fotoğraf elementi oluştur
				var randLeft, randTop;
				var maxAttempts = 150; // Rastgele konum bulma denemeleri için bir sınır belirle
				var attempts = 1;
		
				// Rastgele konum bulma
				do {
					randLeft = Math.random() * ($(window).width() - photoWidth);
					randTop = Math.random() * ($(window).height() - photoHeight);
					attempts++;
				} while (attempts < maxAttempts && isOverlapping(randLeft, randTop, photoWidth, photoHeight));
		
				// Fotoğrafın stili ve pozisyonu ayarla
				$photo.css({
					left: randLeft + 'px',
					top: randTop + 'px',
					opacity: 1,
					width: photoWidth + 'px',
					height: photoHeight + 'px',
					borderRadius: '50%', // Yuvarlak köşeler
					backgroundImage: 'url(photo' + i + '.jpg)', // Fotoğrafın yolunu belirtin
					backgroundSize: 'cover',
					position: 'absolute'
				});
		
				// Fotoğrafı sayfaya ekle
				$photo.appendTo('body').show().animate({
					left: randLeft + Math.random() * 400 - 200 + 'px',
					top: randTop + Math.random() * 400 - 200 + 'px',
					opacity: 0.1 // Uçuş sırasında opaklık
				}, {
					duration: 8000 + Math.random() * 5000, // Rastgele süre ekleyin
					easing: 'swing',
					complete: function() {
						// Kaybolma animasyonu
						$(this).animate({
							opacity: 0
						}, 2000, function() {
							$(this).remove().click('#balloons_flying'); // Öğe kaldır
						});
					}
				});
			}
		
			// Diğer işlemler buraya eklenebilir
			$('#bulb_yellow').addClass('bulb-glow-yellow-after');
			$('#bulb_red').addClass('bulb-glow-red-after');
			$('#bulb_blue').addClass('bulb-glow-blue-after');
			$('#bulb_green').addClass('bulb-glow-green-after');
			$('#bulb_pink').addClass('bulb-glow-pink-after');
			$('#bulb_orange').addClass('bulb-glow-orange-after');
			$('body').css('background-color', '#FFF'); // Arka plan rengi
			$('body').addClass('peach-after');
			$(this).fadeOut('slow').delay(4000).promise().done(function(){
				$('#bannar_coming').fadeIn('slow');
			});
		});
		
		// Üst üste binme kontrolü
		function isOverlapping(left, top, width, height) {
			var overlapping = false;
			$('.balloon-photo').each(function(){
				var pos = $(this).position();
				var thisLeft = pos.left;
				var thisTop = pos.top;
				var thisWidth = $(this).width();
				var thisHeight = $(this).height();
		
				// Çakışma kontrolü
				if (!(left + width < thisLeft || left > thisLeft + thisWidth ||
					top + height < thisTop || top > thisTop + thisHeight)) {
					overlapping = true;
					return false; // Döngüyü sonlandır
				}
			});
			return overlapping;
		}
		
		
	$('#bannar_coming').click(function(){
		$('.bannar').addClass('bannar-come');
		$(this).fadeOut('slow').delay(4000).promise().done(function(){
			$('#balloons_flying').fadeIn('slow');
		});
	});


	function loopOne() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b1').animate({left:randleft,bottom:randtop},10000,function(){
			loopOne();
		});
	}
	function loopTwo() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b2').animate({left:randleft,bottom:randtop},10000,function(){
			loopTwo();
		});
	}
	function loopThree() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b3').animate({left:randleft,bottom:randtop},10000,function(){
			loopThree();
		});
	}
	function loopFour() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b4').animate({left:randleft,bottom:randtop},10000,function(){
			loopFour();
		});
	}
	function loopFive() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b5').animate({left:randleft,bottom:randtop},10000,function(){
			loopFive();
		});
	}

	function loopSix() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b6').animate({left:randleft,bottom:randtop},10000,function(){
			loopSix();
		});
	}
	function loopSeven() {
		var randleft = 1000*Math.random();
		var randtop = 500*Math.random();
		$('#b7').animate({left:randleft,bottom:randtop},10000,function(){
			loopSeven();
		});
	}

	$('#balloons_flying').click(function(){
		$('.balloon-border').animate({top:-500},8000);
		$('#b1,#b4,#b5,#b7').addClass('balloons-rotate-behaviour-one');
		$('#b2,#b3,#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b3').addClass('balloons-rotate-behaviour-two');
		// $('#b4').addClass('balloons-rotate-behaviour-one');
		// $('#b5').addClass('balloons-rotate-behaviour-one');
		// $('#b6').addClass('balloons-rotate-behaviour-two');
		// $('#b7').addClass('balloons-rotate-behaviour-one');
		loopOne();
		loopTwo();
		loopThree();
		loopFour();
		loopFive();
		loopSix();
		loopSeven();
		
		$(this).fadeOut('slow').delay(5000).promise().done(function(){
			$('#wish_message').fadeIn('slow');
		});
	});	



		
	$('#wish_message').click(function(){
		 vw = $(window).width()/2;

		$('#b1,#b2,#b3,#b4,#b5,#b6,#b7').stop();
		$('#b1').attr('id','b11');
		$('#b2').attr('id','b22')
		$('#b3').attr('id','b33')
		$('#b4').attr('id','b44')
		$('#b5').attr('id','b55')
		$('#b6').attr('id','b66')
		$('#b7').attr('id','b77')
		$('#b11').animate({top:240, left: vw-350},500);
		$('#b22').animate({top:240, left: vw-250},500);
		$('#b33').animate({top:240, left: vw-150},500);
		$('#b44').animate({top:240, left: vw-50},500);
		$('#b55').animate({top:240, left: vw+50},500);
		$('#b66').animate({top:240, left: vw+150},500);
		$('#b77').animate({top:240, left: vw+250},500);
		$('.balloons').css('opacity','0.9');
		$('.balloons h2').fadeIn(3000);
		$(this).fadeOut('slow').delay(3000).promise().done(function(){
			$('#story').fadeIn('slow');
		});
	});
	
	$('#story').click(function(){
		$(this).fadeOut('slow');
		$('.cake').fadeOut('fast').promise().done(function(){
			$('.message').fadeIn('slow');
		});
		
		var i;

		function msgLoop (i) {
			$("p:nth-child("+i+")").fadeOut('slow').delay(800).promise().done(function(){
			i=i+1;
			$("p:nth-child("+i+")").fadeIn('slow').delay(1000);
			if(i==50){
				$("p:nth-child(49)").fadeOut('slow').promise().done(function () {
					$('.cake').fadeIn('fast');
				});
				
			}
			else{
				msgLoop(i);
			}			

		});
			// body...
		}
		
		msgLoop(0);
		
	});



});
