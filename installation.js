var clickedRedirect = null;
//add button
var button = '<button class="shopNow serviceInstallation" style="float:right; margin-right: -50px; border:0">Schedule Installation</button>"';
$('.shopNow').parent().after(button);
$('.weather').css( "padding-bottom", "10px" );

//attach click handler
$('.serviceInstallation').on('click', function(event) {
    clickedId = $(this).prev().attr('href');
	productID = clickedId.substr(-8);

	
	
	console.log("ProductID: " + productID);
	//sendToCart(productID)
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