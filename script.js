$(document).ready(function(){
    $('#adlist').click(function(){
        const input = $('#taref').val();
            if(input !==''){
                $('#list').append('<li>' + input + '</li>');
                    $('#taref').val('');
            }
    })

    $('#list').on('click','li',function(){
        $(this).toggleClass('clicked');
        })
})