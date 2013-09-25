$(document).ready(function(){
    
    // Remove the .dropdown created for a menu item's sub-items if there are 
    // no sub-items. This is required for the NAVIGATION SUB-MENU TOGGLE, as
    // it will allow the default (linking) behavior if no .dropdown is present.
    $('#site-header-navigation .dropdown').each(function(){
        if($.trim($(this).text()).length == 0)
            $(this).remove() /* TODO: prune via Diazo */
    })

    /**
     * This function sets the height of #site-header-navigation to the height 
     * of the menu items plus the height of the dropdown. This is required 
     * because dropdown list items are floated and thus do not affect the 
     * height of #site-header-navigation.
     * 
     * @todo compute height rather than assume 26px (known from CSS)
     * @returns null
     */
    var setDropdownSpacer = function(){
        
        // Don't do anything if dropdown is not floated, as height already
        // considers dropdown list items
        if(!isFloated())
            return;

        // Selects the currently open sub-menu
        var visible = $('#site-header-navigation .dropdown:visible')
        
        if(visible.length) // if open sub-menu, set height as sum of sub-menu and top-level menu
            $('#site-header-navigation').css('height', (visible.height()+30+26)+'px')
        else // if no sub-menu open, set height to height of top-level menu
            $('#site-header-navigation').css('height', 26+'px')

    }

    /**
     * This fuction returns true if navigation items are floated. A true value 
     * implies that sub-menu list items do not affect the height of 
     * #site-header-navigation and thus setDropdownSpacer() should be called to 
     * define an explicit height for #site-header-navigation.
     * 
     * @returns bool
     */
    var isFloated = function(){
        var floatVal = $('#site-header-navigation > ul > li').css('float')
        return floatVal == 'left' || floatVal == 'right';
    }

    /**
     * This function sets an explicit height if the dropdown sub-menu is
     * floated, or else the height is part of auto computation, so it sets
     * height to auto.
     * 
     * @todo compute height rather than assume 26px (known from CSS)
     * @returns null
     */
    var handleDropdownSpacing = function(){
        if(!isFloated()) // auto height if list items are not floated
            $('#site-header-navigation').css('height','auto')
        else{ // compute height if list items are floated
            $('#site-header-navigation').css('height', 26+'px')
            setDropdownSpacer()
        }
    }

    /**
     * NAVIGATION SUB-MENU STATE MANAGEMENT
     * 
     * Two state changes in browser when height should be computed (if need be):
     * (1) when document is ready, as this is a ready handler, and (2) when 
     * window is resized, as the nature of the sub-menu may change.
     */
    
    handleDropdownSpacing()
    $(window).resize(handleDropdownSpacing)

    /**
     * NAVIGATION SUB-MENU TOGGLE
     * 
     * When a link in the navigation is clicked, it should cause the associated
     * sub-menu to be toggled.
     */

    $('#site-header-navigation h1 a').click(function(e){

        var liEle = $(this).closest('li'), // clicked menu item
            dropdownEle = liEle.children('.dropdown'), // associated sub-menu dropdown
            show = !liEle.hasClass('active') // whether sub-menu is already showing

        if(!dropdownEle.length) // if no sub-menu, exit early to allow click
            return;

        e.preventDefault()

        // hide any open submenus
        $('#site-header-navigation > ul > li').removeClass('active')

        // if sub-menu was not already showing, show it
        if(show)
            liEle.addClass('active')
        
        // recompute dropdown spacer if need be
        setDropdownSpacer();
    })

    /**
     * NAVIGATION SUB-MENU DROPDOWN CLOSE BUTTON
     * 
     * A close button should be associated with each dropdown that, when 
     * pressed, causes the sub-menu to close.
     */

    // Add a close button to each sub-menu
    $('#site-header-navigation .dropdown').prepend('<div class="close"><a href="#">(x) Close</a></div>')
    
    // When clicked, trigger a click of the associated top-level item to cause 
    // it to toggle shut
    $('#site-header-navigation .dropdown .close a').click(function(e){
        e.preventDefault();
        $(this).closest('li').find('h1 a').click()
    })
})