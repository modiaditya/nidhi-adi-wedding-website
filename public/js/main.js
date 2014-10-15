/* ===================================================
                  preloader
=======================================================*/




$(document).ready(function() {

/* ===================================================
          RSVP form
=======================================================*/

    $(".border .row > div").click(function(){
                    
        var eventValue = $(this).find("h5").text();
        var theID = $(this).find("h5").attr('class');
        
        var eventParticipating = "<div class='eventTag'><label class='checkbox-inline' for='"+theID+"'><input type='checkbox' checked='checked' id='"+theID+"' name='event[]' value='"+eventValue+"'>"+eventValue+"</label><span class='remove'>x</span></div>";  

        var currentCheckbox = $('input#'+theID);
        var n = currentCheckbox.length;
        
        if (n == 0) {
           $( eventParticipating ).appendTo( $( "#thecheckboxes" ) );
        }  
                
        $('.remove').click(function(){
            $(this).parent().remove();
            
        });
    });


/* ===================================================
                  "collapse mobile menu after click"
=======================================================*/
if( device.tablet() && device.mobile() ) {
    $('.navbar-collapse a').click(function (e) {
        $('.navbar-collapse').collapse('toggle');
    });
}




/* ===================================================
            initialize the flexslider
======================================================= */  

  $('.flexslider').flexslider({
        animation: "fade",
        smoothHeight: false,
    });
  

/* ===================================================
            set the megafolio
======================================================= */ 

    var api=jQuery('.megafolio-container').megafoliopro(
    {
        filterChangeAnimation:"rotatescale",
        filterChangeSpeed:600,
        filterChangeRotate:99,
        filterChangeScale:0.6,          
        delay:20,
        paddingHorizontal:10,
        paddingVertical:10,
        layoutarray:[0]
     });

    var api2=jQuery('.megafolio-container2').megafoliopro(
    {
        filterChangeAnimation:"rotatescale",
        filterChangeSpeed:600,
        filterChangeRotate:99,
        filterChangeScale:0.6,          
        delay:20,
        paddingHorizontal:10,
        paddingVertical:10,
        layoutarray:[13]
     });

    var api3=jQuery('.megafolio-container3').megafoliopro(
    {
        filterChangeAnimation:"scale",          // fade, rotate, scale, rotatescale, pagetop, pagebottom,pagemiddle
        filterChangeSpeed:400,                  // Speed of Transition
        filterChangeRotate:99,                  // If you ue scalerotate or rotate you can set the rotation (99 = random !!)
        filterChangeScale:0.6,                  // Scale Animation Endparameter
        delay:20,
        defaultWidth:980,
        paddingHorizontal:10,
        paddingVertical:10,
        layoutarray:[2]      // Defines the Layout Types which can be used in the Gallery. 2-9 or "random". You can define more than one, like {5,2,6,4} where the first items will be orderd in layout 5, the next comming items in layout 2, the next comming items in layout 6 etc... You can use also simple {9} then all item ordered in Layout 9 type.
     });

      // CALL FILTER FUNCTION IF ANY FILTER HAS BEEN CLICKED
    $('#gallery1 .filter').click(function() {            
        api.megafilter(jQuery(this).data('category'));  
        $.waypoints('refresh');
    });

    // CALL FILTER FUNCTION IF ANY FILTER HAS BEEN CLICKED
    $('#blog1 .filter').click(function() {            
        api3.megafilter(jQuery(this).data('category'));  
        $.waypoints('refresh');
    });

    // THE FANCYBOX PLUGIN INITALISATION
    $(".fancybox").fancybox({
         openEffect  : 'none',
         closeEffect : 'none',
         helpers : {
                     media : {}
                    }
    });

    // ADD/REMOVE the class "selected" from the gallery filters
    $('.filter-list li').click(function(){
        $('.filter-list li').each(function() { 
            $(this).removeClass("selected")
        });
        $(this).addClass("selected");
    });


         
});

$(window).load(function(){



/* ===================================================
                  parallax effects
=======================================================*/

    if( !device.tablet() && !device.mobile() ) {
        $('#ourstoryphoto').parallax("50%", 0.1); 
        $('#thebridesidephoto').parallax("50%", 0.1); 
        $('#thegroomsidephoto').parallax("50%", 0.18);
        $('#weddinglocationphoto').parallax("50%", 0.1);
        $('#blog1photo').parallax("50%", 0.1);
        $('#blog2photo').parallax("50%", 0.1);
        $('#gallery1photo').parallax("50%", 0.1);
        $('#gallery2photo').parallax("50%", 0.1);
        $('#registryphoto').parallax("50%", 0.1);
        $('#guestbookphoto').parallax("50%", 0.1);
        $('#rsvpphoto').parallax("50%", 0.1);
        $('.parallax-elements').parallax("50%", 0.4);
    

    $('.parallax-hook').each(function(index, element) {
        $(this).addClass('bgfixed');
    });
    }


  

/* ===================================================
            initialize the one page scroll 
=======================================================*/
  
    $(".navbar-collapse ul li a[href^='#'], #home .col-md-12 a[href^='#']").on('click', function(e) {

       // prevent default anchor click behavior
       e.preventDefault();

       // store hash
       var hash = this.hash;

       // animate
       $('html, body').animate({
           scrollTop: $(this.hash).offset().top,

         }, 1000, 'easeInQuart', function(){

           // when done, add hash to url
           // (default click behaviour)
           window.location.hash = hash;
         });

    });


/* ===================================================
            set the waypoints
======================================================= */ 
  
    if( !device.tablet() && !device.mobile() ) {

        // waypoint to the slider names
        $('.navbar').waypoint(function(){
            $('.names').removeClass('hide');
            $('.names').addClass('animated fadeInUp');
        }, { offset: 60 });

        
            
    }else{

        $('header, div').removeClass('hide');
        $('div').removeClass('fakeheight');

    }

/* ===================================================
            TABS
======================================================= */ 
$('#myTab a').click(function (e) {
    e.preventDefault()
    $(this).tab('show')
})

/* ===================================================
            jquery for the RSVP form:
======================================================= */
    $('#send_message').click(function(e){
            
            //stop the form from being submitted
            e.preventDefault();
            
            /* declare the variables, var error is the variable that we use on the end
            to determine if there was an error or not */
            var error = false;
            var name = $('#rsvp-name').val();
            var email = $('#rsvp-email').val();
            
            var message = $('#rsvp-message').val();
            
            if(name.length == 0){
                var error = true;
                //$('#name_error').fadeIn(500);
                $('#rsvp-name').addClass('notcompleted');
                $('#rsvp-name').attr('placeholder', 'Name is required!');
                $('#rsvp-name').focus (function(){
                    $(this).removeClass('notcompleted');
                });
            }
            if(email.length == 0 || email.indexOf('@') == '-1'){
                var error = true;
               // $('#email_error').fadeIn(500);
                $('#rsvp-email').addClass('notcompleted');
                $('#rsvp-email').attr('placeholder', 'Email is required!');
                $('#rsvp-email').focus (function(){
                    $(this).removeClass('notcompleted');
                });
            }
            
            if(message.length == 0){
                var error = true;
                $('#rsvp-message').addClass('notcompleted');
                $('#rsvp-message').attr('placeholder', 'Please leave us a message!');
                $('#rsvp-message').focus (function(){
                    $(this).removeClass('notcompleted');
                });
            }
            
            //now when the validation is done we check if the error variable is false (no errors)
            if(error == false){
                //disable the submit button to avoid spamming
                //and change the button text to Sending...
                $('#send_message').attr({'value' : 'Sending...' });
                
                /* using the jquery's post(ajax) function and a lifesaver
                function serialize() which gets all the data from the form
                we submit it to send_email.php */
                $.post("send_rsvp.php", $("#rsvpform").serialize(),function(result){
                    //and after the ajax request ends we check the text returned
                    if(result == 'sent'){
                        //if the mail is sent remove the submit paragraph
                         $('#cf_submit_p').remove();
                        //and show the mail success div with fadeIn
                        $('#mail_success').fadeIn(500);
                    }else{
                        //show the mail failed div
                        $('#mail_fail').fadeIn(500);
                        //reenable the submit button by removing attribute disabled and change the text back to Send The Message
                        $('#send_message').removeAttr('disabled').attr('value', 'Send The Message');
                    }
                });
            }
        }); 


/* ===================================================
            jquery for the "contact us" form:
======================================================= */

    $('#send_contact_message').click(function(e){
        
        //stop the form from being submitted
        e.preventDefault();
        
        /* declare the variables, var error is the variable that we use on the end
        to determine if there was an error or not */
        var error = false;
        var name = $('#contactname').val();
        var email = $('#contactemail').val();
        
        var message = $('#contactmessage').val();
        
        if(name.length == 0){
            var error = true;
            //$('#name_error').fadeIn(500);
            $('#contactname').addClass('notcompleted');
            $('#contactname').attr('placeholder', 'Name is required!');
            $('#contactname').focus (function(){
                $(this).removeClass('notcompleted');
            });
        }
        if(email.length == 0 || email.indexOf('@') == '-1'){
            var error = true;
           // $('#email_error').fadeIn(500);
            $('#contactemail').addClass('notcompleted');
            $('#contactemail').attr('placeholder', 'Email is required!');
            $('#contactemail').focus (function(){
                $(this).removeClass('notcompleted');
            });
        }
        
        if(message.length == 0){
            var error = true;
            $('#contactmessage').addClass('notcompleted');
            $('#contactmessage').attr('placeholder', 'Please leave us a message!');
            $('#contactmessage').focus (function(){
                $(this).removeClass('notcompleted');
            });
        }
        
        //now when the validation is done we check if the error variable is false (no errors)
        if(error == false){
            //disable the submit button to avoid spamming
            //and change the button text to Sending...
            $('#send_contact_message').attr({'value' : 'Sending...' });
            
            /* using the jquery's post(ajax) function and a lifesaver
            function serialize() which gets all the data from the form
            we submit it to send_email.php */
            $.post("send_mail.php", $("#contactus").serialize(),function(result){
                //and after the ajax request ends we check the text returned
                if(result == 'sent'){
                    //if the mail is sent remove the submit paragraph
                     $('#cf_submit_m').remove();
                    //and show the mail success div with fadeIn
                    $('#contact_success').fadeIn(500);
                }else{
                    //show the mail failed div
                    $('#contact_fail').fadeIn(500);
                    //reenable the submit button by removing attribute disabled and change the text back to Send The Message
                    $('#send_contact_message').removeAttr('disabled').attr('value', 'Send The Message');
                }
            });
        }
    }); 

    /* ===================================================
            jquery for the "guest book" form:
======================================================= */

    $('#send_guestbook').click(function(e){
        
        //stop the form from being submitted
        e.preventDefault();
        
        /* declare the variables, var error is the variable that we use on the end
        to determine if there was an error or not */
        var guesterror = false;
        var guestname = $('#guestName').val();
        var guestemail = $('#guestEmail').val();
        var guestmessage = $('#guestMessage').val();
        
        if(guestname.length == 0){
            var guesterror = true;
            //$('#name_error').fadeIn(500);
            $('#guestName').addClass('notcompleted');
            $('#guestName').attr('placeholder', 'Name is required!');
            $('#guestName').focus (function(){
                $(this).removeClass('notcompleted');
            });
        }
        if(guestemail.length == 0 || guestemail.indexOf('@') == '-1'){
            var guesterror = true;
           // $('#email_error').fadeIn(500);
            $('#guestEmail').addClass('notcompleted');
            $('#guestEmail').attr('placeholder', 'Email is required!');
            $('#guestEmail').focus (function(){
                $(this).removeClass('notcompleted');
            });
        }
        
        if(guestmessage.length == 0){
            var guesterror = true;
            $('#guestMessage').addClass('notcompleted');
            $('#guestMessage').attr('placeholder', 'Please leave us a message!');
            $('#guestMessage').focus (function(){
                $(this).removeClass('notcompleted');
            });
        }
        
        
        //now when the validation is done we check if the error variable is false (no errors)
        if(guesterror == false){
            //disable the submit button to avoid spamming
            //and change the button text to Sending...
            $('#send_guestbook').attr({'value' : 'Sending...' });
            
            /* using the jquery's post(ajax) function and a lifesaver
            function serialize() which gets all the data from the form
            we submit it to send_email.php */
            $.post("submitGuestbook", $("#signguestbook").serialize(),function(response, status, xhr){
                //and after the ajax request ends we check the text returned
                console.log("amodi" )
                if(xhr.status == 200){
                    console.log("here")
                    //if the mail is sent remove the submit paragraph
                     $('#gb_submit_m').remove();
                    //and show the mail success div with fadeIn
                    $('#guestbook_success').fadeIn(500);
                }else{
                    //show the mail failed div
                    $('#guestbook_fail').fadeIn(500);
                    //reenable the submit button by removing attribute disabled and change the text back to Send The Message
                    $('#send_guestbook').removeAttr('disabled').attr('value', 'Send The Message');
                }
            });
        }
    });       
});






