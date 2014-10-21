var host = 'https://rawgit.com/service-scheduler/demo/master';
if (window.SS_ENV == 'dev') {
	host = 'http://localhost:8000';
}

var $serviceElement = $($('.js-product-image-zone')[1]);
$serviceElement.html('');
$('<iframe />', {
    name: 'serviceFram',
    id:   'serviceFrame',
    src: host + '/scheduler/step1.html',
	scrolling: 'no',
	frameborder: '0', 
	allowtransparency: 'true',
	marginheight: '0',
	style: "border: 0px none; vertical-align: bottom; height: 5000px; width: 100%;"
}).appendTo($serviceElement);
