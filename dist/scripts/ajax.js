
$.ajax({
	url: "https://cdn.syndication.twimg.com/widgets/followbutton/info.json?screen_names=4_m_1_",
	dataType: 'jsonp',
	crossDomain: true
}).done((data) => {
	console.log(data[0]);
});