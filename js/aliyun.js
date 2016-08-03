$(".index").click(function(){
	$index =$(this).index();
	$(this).addClass("current").siblings().removeClass("current");
	$(".bg div").eq($index).addClass("show").siblings().removeClass("show");
	$(".slider .item").eq($index).addClass("show").siblings().removeClass("show");
})
$(".index").eq(0).click();