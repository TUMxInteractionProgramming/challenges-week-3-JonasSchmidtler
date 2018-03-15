console.log('app is live')

function switchChannel(channelName) {
    console.log('tuning into channel', channelName);
    document.getElementById('chat-name').innerHTML=channelName;
    document.getElementById('chat-location').innerHTML='upgrading.never.helps';
    $('#starred').attr('src','http://ip.lfe.mw.tum.de/sections/star-o.png');
    $('ul li').addClass=('li.selected');
}



function appBarStarfill() {
    $('#starred').attr('src','http://ip.lfe.mw.tum.de/sections/star.png');
}

function selectTab(selectedButton) {
    $( "button" ).removeClass( "selected" );
    $(selectedButton).addClass("selected");
    $(selectedButton).addClass("selected");
    $(selectedButton).addClass("selected");
}