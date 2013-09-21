$(document).ready(function(){
    $('#site-header-navigation .dropdown').each(function(){
        if($.trim($(this).text()).length == 0)
            $(this).remove() /* TODO: prune via Diazo */
    })

    var setDropdownSpacer = function(){
        if(!isFloated())
            return;

        var visible = $('#site-header-navigation .dropdown:visible')
        if(visible.length)
            $('#site-header-navigation').css('height', (visible.height()+30+26)+'px')
        else
            $('#site-header-navigation').css('height', 26+'px')

    }

    var isFloated = function(){
        var floatVal = $('#site-header-navigation > ul > li').css('float')
        return floatVal == 'left' || floatVal == 'right';
    }

    var checkDropdownSpacing = function(){
        if(!isFloated())
            $('#site-header-navigation').css('height','auto')
        else{
            $('#site-header-navigation').css('height', 26+'px')
            setDropdownSpacer()
        }
    }

    checkDropdownSpacing()
    $(window).resize(checkDropdownSpacing)

    $('#site-header-navigation h1 a').click(function(e){

        var liEle = $(this).closest('li'),
            dropdownEle = liEle.children('.dropdown'),
            show = !liEle.hasClass('active')

        if(!dropdownEle.length) /* TODO: remove once pruned in Diazo */
            return;

        e.preventDefault()

        $('#site-header-navigation > ul > li').removeClass('active')

        if(show){
            liEle.addClass('active')
        }
        setDropdownSpacer();
    })

    $('#site-header-navigation .dropdown').prepend('<div class="close"><a href="#">(x) Close</a></div>')
    $('#site-header-navigation .dropdown .close a').click(function(e){
        e.preventDefault();
        $(this).closest('li').find('h1 a').click()
    })
})