$(document).ready(function(){
	settings();
	
	$(window).on('resize',function(){
		settings();
	});
	
	$(this).on('scroll',function(){
		topper($(this).scrollTop());
	});
	
	$(this).on('click','.select-text,.select .icon svg',function(){
		$(this).closest('.select').find('.select-list').show();
	}).on('mouseleave','.select',function(){
		$('.select-list').hide();
	});
	
	$(this).on('click','.select-list span',function(){
		var parent=$(this).closest('.select');
		parent.find('input').val($(this).find('.value').html());
		parent.find('.select-text').html($(this).html());
		$('.select-list').hide();
	});
	
	$(this).on('mouseover','.select-list',function(){
		$(this).show();
	}).on('mouseout','.select-list',function(){
		$(this).hide();
	});

	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	
	$(".tool").on('mousemove',function(){
		set.tool=1;
	}).on('mouseout',function(){
		set.tool=0;
	});
	
	$(".tool-btn").on('mousemove',function(){
		set.btn=1;
	}).on('mouseout',function(){
		set.btn=0;
	});
	
	$('body').on('click',function(){
		if(set.tool==0){
			if(set.btn==0)$('.tool-block').removeClass('open');
		}
	});
	
	$(this).on('click','.tool-btn',function(){
		var parent=$(this).closest('.tool-block');
		var close=0;
		
		if(parent.attr('class').match('open'))close=1;
		
		$('.tool-block').removeClass('open');
		if(close==0)parent.addClass('open');
	});
	
	$(this).on('click','.tool .close',function(){
		$('.tool-block').removeClass('open');
	});

	$(this).on('click','.plus-info',function(){
		$(this).toggleClass('open');
		$(this).closest('.info-block').find('.hide-block').slideToggle('medium');
	});
	
	$(this).on('click blur','.search .input svg,.search .input input',function(){
		if(set.search==0){
			set.search=1;
			
			var obj=$(this).closest('.input');
			$(obj).toggleClass('open');
			$(obj).find('input').focus();
			
			setTimeout(function(){set.search=0;},200);
		}
	});
	
	$(this).on('click','.colt',function(){
		var id=$(this).attr('class').match(/to-([^\s]+)/)[1];
		
		$('.colt').removeClass('current');
		$(this).addClass('current');
		
		$('.user-list').removeClass('show');
		$('.'+id).addClass('show');
	});
	
	$(this).on('click','.jobs-link',function(){
		if(set.jobs==0){
			set.jobs=1;
			var id=$(this).attr('class').match(/to-([^\s]+)/)[1];
			
			$('.jobs-link').removeClass('current');
			$(this).addClass('current');
			
			$('.jobhide.show').animate({opacity:0},400,function(){
				$(this).removeClass('show');
				
				$('#'+id).css({opacity:0}).addClass('show').animate({opacity:1},400,function(){
					set.jobs=0;
				});
			});
		}
	});
	
	$(this).on('click','.add-tag span',function(){
		$(this).closest('.add-tag').addClass('open').find('input').val('').focus();
	});
	
	$(this).on('blur','.add-tag input',function(){
		$(this).closest('.add-tag').removeClass('open');
	});
});
function settings(){
	set={
		"search":0,
		"jobs":0,
		"tool":0,
		"btn":0,
		"height":$(window).height()
	}
}
function topper(t){
	if(set.user<=t)$('.columns').addClass('fix');
	else $('.columns').removeClass('fix');
	
	return false;
}
