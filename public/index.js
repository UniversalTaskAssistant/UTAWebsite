$(document).ready(()=>{

    // change the navbar on scroll
    $(window).scroll(function (){
        let nav = $('.my-navbar')
        let cover = $('#cover')
        let navLink = $('.nav-link')
        // start scroll
        if (cover.offset().top - $(document).scrollTop() <= -100){
            nav.css({'width': '100%', 'height':'80px', 'position':'fixed', 'background':'white'})
            navLink.css({'color':'var(--font)', 'font-weight':'normal'})
            navLink.mouseover(function() {
                $(this).css({'color':'var(--font)'})
            }).mouseout(function (){
                $(this).css({'color':'var(--font)'})
            });

            if (cover.offset().top - $(document).scrollTop() <= -400){
                $('.main-page-nav').show()
            }
            else{
                $('.main-page-nav').hide()
            }
        }
        // back to the top
        else{
            nav.css({'width': '600px', 'height':'65px', 'position':'', 'background':''})
            navLink.css({'color':'var(--font)', 'font-weight':'normal'})
            navLink.mouseover(function() {
                $(this).css({'color':'var(--font)'})
            }).mouseout(function (){
                $(this).css({'color':'var(--font)'})
            });
        }
    })

    // click card to redirect
    // $('.module-card').click(function (){
    //     window.location.href = 'content.html'
    // })

    $('.contact-btn').click(function (){
        let contact = $('#contact-detail')
        contact.text($(this).attr('data-contact-id'))
        contact.slideDown()
    })

    $(window).on('scroll', function(){
        var scrollPosition = $(window).scrollTop() + $(window).height();
        $('.slide-up').each(function() {
            var $this = $(this);
            if($this.offset().top + $this.outerHeight() <= scrollPosition) {
                console.log($this.offset().top, $this.outerHeight(), scrollPosition)
                $this.addClass('active'); // Add 'active' class to the current element
            }
        });
    });
})