$('head').append('<link href="http://cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.4/css/jquery.ui.datepicker.min.css" rel="stylesheet" />');
$('head').append('<link href="//cdnjs.cloudflare.com/ajax/libs/jqueryui/1.10.4/css/jquery-ui.min.css" rel="stylesheet" />');
var button = '<button class="shopNow serviceInstallation" style="float:right; margin-right: -50px; border:0">Schedule Installation</button>"';

//add button
$('.shopNow').parent().after(button);
$('.weather').css( "padding-bottom", "10px" );

//attach click handler
$('.serviceInstallation').on('click', function(event) {
    clickedId = $(this).prev().attr('href');
    clickedId = clickedId.split("/")[clickedId.split("/").length - 1];
    WALMART.quicklook.LoadQuickView(clickedId);
	productID = clickedId.substr(-8);
	console.log("ProductID: " + productID);
    loadDatePickerInModal(clickedId);
    $('.ui-dialog .wm-widget-sprite').css('background','none');
    $('.ui-dialog .qlSpecific .ui-dialog-titlebar').css('display','none');
});

//load date picker
function loadDatePickerInModal(clickedId) {
    $('.wm-widget-overlay-closeBox').ready(function(){
        $('.ui-dialog').append('<input value="Set Date and Checkout" class="shopNow" style="position: relative; top: -132px; right: -575px; background:linear-gradient(to bottom, #f6962a 50%, #f2671e 50%) no-repeat scroll 0 0 #f6962a; border-radius: 5px; color: white; size:15px; font-weight: bold; font-size: 16px; padding: 8px 20px; border:0;" type="button" id="datepicker" />')
        $( "#datepicker" ).datepicker({minDate: '+7'});
        $('#datepicker').on('change', function(event) {
            $(this).attr('value', "Set Date and Checkout");
            sendToCart(productID);
            return false;
        });
    });
};

//redirect to checkout
function sendToCart(id) {
	var urlA = "http://www.walmart.com/catalog/select_product.do?product_id=";
	var urlB = "&seller_id=0&path=&bti=&item_page=new&originURL=originURL%28%29%3B&matureContentAccepted=false&isAccItem=false&pcpSellerId=0&store_id=-1&product_put_price=0&hasCarePlans=false&hasHomeInstallation=false&carePlanOverlaySwitch=true&homeInstallationSwitch=true&itemOCCType=A&checksum=-1&qty_C1I194735350=4&ship_to_store.x=47&ship_to_store.y=13&buyNow=false&qty=4&path=&bti=&S2S_zip=Enter+ZIP+code&qty_C1I194735350SOI=1&zip=Enter+ZIP+code";
	window.location.href = urlA + "" + id + "" + urlB;
};

function wait(waitsecs){
setTimeout(donothing(), 'waitsecs');
};

function donothing() {

};
