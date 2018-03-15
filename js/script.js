console.log('app is live')

function switchChannel(channelName) {
    console.log('tuning into channel', channelName);
    document.getElementById('chat-name').innerHTML=channelName;
}