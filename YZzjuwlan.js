$(document).ready(function(){
	if (!window.localStorage.yzzjuwlan){
		alert("【第一次提示】第一次登录需要输入登录信息，然后确认保存密码选项已被选中。(如果已经输入过，请忽略)");
		alert("【第一次提示】下次连上ZJUWLAN后，打开任意页面，插件会使您的电脑自动登录到ZJUWLAN。");
		window.localStorage.yzzjuwlan="1";
	}
	//init
	var info_text = $("<p></p>").text("第一次登录需要输入登录信息，然后确认 保存密码 选项已被选中。下次连上ZJUWLAN后，打开任意页面，插件会使您的电脑自动登录到ZJUWLAN。");
	info_text.css({
		"width":"500",
		"text-indent":"2em",
		"margin-top":"-16px"
	});

	var additon_text = $("<div></div>").text("(插件利用ZJUWLAN自带的保存密码功能，不会记录您的登录信息，请放心使用。)");
	additon_text.css({
		"font-style":"italic",
		"font-size":"12px",
		"margin-top":"14px"
	});
	additon_text.addClass("grid");

	$(".grid-block:first").append(info_text);
	$("#matter").append(additon_text);

	if($("#username").val() && $("#password").val()){
		$("#login_button").click();
		return;
	}
});