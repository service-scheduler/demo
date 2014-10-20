var clickedRedirect = null;
//add button
var button = '<button class="shopNow serviceInstallation" style="float:right; margin-right: -50px; border:0">Schedule Installation</button>"';
$('.shopNow').parent().after(button);

//attach click handler
$('.serviceInstallation').on('click', function(event) {
    clickedId = $(this).prev().attr('href');
    console.log(clickedRedirect);
});
//load date picker
//redirect to checkout
