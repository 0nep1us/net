const audio = document.getElementById('background-music');
audio.addEventListener('play', function () {
    console.log('Audio is playing');
});
audio.addEventListener('error', function () {
    console.log('Error occurred while loading the audio');
});
audio.addEventListener('canplaythrough', function () {
    console.log('Audio can play through');
});