console.log('app is live')

function switchChannel(channelName) {
    console.log('tuning into channel', channelName);
    document.getElementById('chat-name').innerHTML=channelName;
    document.getElementById('chat-location').innerHTML='upgrading.never.helps';
}

function appBarStar() {
    $('#starred').attr('src','http://ip.lfe.mw.tum.de/sections/star-o.png');
}