function getSelectOptions(){
    $('.SelectBox').click(function(){
        var _this   = $(this);

        if( _this.find('.showOptions').is(':visible') ){
            _this.find('.showOptions').slideUp('fast');
        } else{
            $('.showOptions').slideUp('fast').promise().done(function(){
                _this.find('.showOptions').slideDown('fast');
            });
        }
        return false;
    });

    $('.showOptions span').click(function(){
        var attr = $(this).closest('.showOptions').attr('method');
        var _txt = $(this).text();
        var _val = $(this).attr('value');

        if (typeof attr !== typeof undefined && attr == 'redirect')
            $(location).attr('href', $(this).attr('value'));

        $(this).closest('.boxInput').find('input[type="hidden"]').val(_val);
        $(this).closest('.boxInput').find('.inputText').html(_txt);
        $(this).closest('.showOptions').slideUp('fast');
    });
}

$(document).ready(function(){
    getSelectOptions();
});