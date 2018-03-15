console.log('app is live')

function switchChannel(channelName) {
    console.log('remove stars my ass')
    $('.selected').removeClass();
    console.log('tuning into channel', channelName);
    document.getElementById('chat-name').innerHTML=channelName;
    document.getElementById('chat-location').innerHTML='upgrading.never.helps';
    $(channelName).addClass('selected');
    $('.selected').find('.star').attr('src','http://ip.lfe.mw.tum.de/sections/star-o.png');
};



function appBarStarfill() {
    $('#starred').attr('src','http://ip.lfe.mw.tum.de/sections/star.png');
};

function selectTab(selectedButton) {
    $( "button" ).removeClass( "selected" );
    $(selectedButton).addClass("selected");
    $(selectedButton).addClass("selected");
    $(selectedButton).addClass("selected");
};