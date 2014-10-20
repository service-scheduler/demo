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

//attach click handler
$('.serviceInstallation').on('click', function(event) {
    clickedId = $(this).prev().attr('href');
    console.log(clickedRedirect);
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
