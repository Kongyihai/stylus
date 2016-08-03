$.ajax({
	url : "http://www.ikindness.cn/api/info/test",
}).done(function(data){
	data.code || $(".banner").banner({
		setting : data.data,
		type : "tab",
		indicator : 1
	});
});