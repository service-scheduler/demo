var clickedRedirect = null;
var dialogHtml = '\
<div id="dialog-form" title="Create new user">\
<p class="validateTips">All form fields are required.</p>\
<form>\
<fieldset>\
<label for="name">Name</label>\
<input type="text" name="name" id="name" value="Jane Smith" class="text ui-widget-content ui-corner-all">\
<label for="email">Email</label>\
<input type="text" name="email" id="email" value="jane@smith.com" class="text ui-widget-content ui-corner-all">\
<!-- Allow form submission with keyboard without duplicating the dialog button -->\
<input type="submit" tabindex="-1" style="position:absolute; top:-1000px">\
</fieldset>\
</form>\
</div>\
';
var button = '<button class="shopNow serviceInstallation" style="float:right; margin-right: -50px; border:0">Schedule Installation</button>"';

//add button
$('.shopNow').parent().after(button);
$('.weather').css( "padding-bottom", "10px" );

//attach click handler
$('.serviceInstallation').on('click', function(event) {
    clickedId = $(this).prev().attr('href');
	productID = clickedId.substr(-8);
	console.log("ProductID: " + productID);
	//sendToCart(productID)
    var dialog = $(dialogHtml).dialog({
        autoOpen: false,
        height: 300,
        width: 350,
        modal: true,
        buttons: {
            "Continue": function() {
                console.log("account created");
            },
            Cancel: function() {
                dialog.dialog( "close" );
            }
        }
    });
    dialog.dialog("open");
    var $dialogContainer = $('.ui-dialog');
    $dialogContainer.css('top', $dialogContainer.css('top').split('px')[0] - 200);
    $dialogContainer.css('background', 'white');
});
//load date picker
//redirect to checkout


function sendToCart(id) {
	var urlA = "http://www.walmart.com/catalog/select_product.do?product_id=";
	var urlB = "&seller_id=0&path=&bti=&item_page=new&originURL=originURL%28%29%3B&matureContentAccepted=false&isAccItem=false&pcpSellerId=0&store_id=-1&product_put_price=0&hasCarePlans=false&hasHomeInstallation=false&carePlanOverlaySwitch=true&homeInstallationSwitch=true&itemOCCType=A&checksum=-1&qty_C1I194735350=4&ship_to_store.x=47&ship_to_store.y=13&buyNow=false&qty=4&path=&bti=&S2S_zip=Enter+ZIP+code&qty_C1I194735350SOI=1&zip=Enter+ZIP+code";
	window.location.href = urlA + "" + id + "" + urlB;
}

function wait(waitsecs){
setTimeout(donothing(), 'waitsecs');
}

function donothing() {

}
