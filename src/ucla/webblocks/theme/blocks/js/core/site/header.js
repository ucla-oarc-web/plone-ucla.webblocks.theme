$(document).ready(function(){
    
    /**
     * SITE NAVS VISIBILITY ON TOGGLE
     */
    
    // Hide navs at small breakpoint, except for screen readers
    $('#site-header-search, #site-header-navigation').addClass('hide-accessible-small')
    
    // Add button, hidden to screen readers, to toggle nav visibility below small breakpoint
    $('#site-header > .container').prepend('<div id="site-header-expand" aria-hidden="true"><a href="#"><div class="icon-menu-white"></div></a></div>')
    
    // On click of toggle button, toggle menu visibility with .hide-accessible-small
    $('#site-header-expand a').click(function(e){
        e.preventDefault()
        $('#site-header-search, #site-header-navigation').each(function(){
            if($(this).hasClass('hide-accessible-small'))
                $(this).removeClass('hide-accessible-small')
            else
                $(this).addClass('hide-accessible-small')
        })
    })
})
