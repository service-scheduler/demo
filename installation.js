var button = '<button class="shopNow serviceInstallation" style="float:right; margin-right: -50px; border:0">Schedule Installation</button>"';

//add button
$('.shopNow').parent().after(button);

//attach click handler
$('.serviceInstallation').on('click', function(event) {
    clickedId = $(this).prev().attr('href');
    clickedId = clickedId.split("/")[clickedId.split("/").length - 1];
    WALMART.quicklook.LoadQuickView(clickedId);
});
//load date picker
//redirect to checkout
