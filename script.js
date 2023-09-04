//Tamanho da Fonte

const tamFonte = document.getElementById('conf-fonte');
const fonte = document.getElementById('fonte');

tamFonte.addEventListener('click', function(){
    console.log('inicio');

    if(tamFonte.classList.contains('fonte-mexer')){
        console.log('testeIf');
        tamFonte.classList.remove('fonte-mexer');
        tamFonte.innerHTML += `   
    <div class="fonte-mexer">
        <button id="aumentar" class="btn-fonte">+</button>
        <button id="diminuir" class="btn-fonte">-</button>
    </div>
    `
    document.getElementById('aumentar').addEventListener('click', function(){
        console.log('teste botao+');
        changeFontSize(5)}
        );
    document.getElementById('diminuir').addEventListener('click', function(){
        console.log('teste botao-');
        changeFontSize(-5)
    }
    );
    }else{
        console.log('testeElse')
        tamFonte.classList.add('fonte-mexer');
        tamFonte.innerHTML = `
        <div id="fonte" class="fonte">aA
                </div>
    `};
    

function changeFontSize(step){
    var fontSize = parseFloat(getComputedStyle(document.body).fontSize);

    //const h1 = document.querySelectorAll('h1')
    //var fontSizeh1 = parseFloat(h1.fontSize);

    var newFontSize = fontSize + step;
    //var newFontSize1 = fontSizeh1 + step;

    //h1.fontSize = newFontSize1 + 'px';
    document.body.style.fontSize = newFontSize + 'px';

}


});

//Player de Música

const audio = document.getElementById('audio');
const playpauseButton = document.getElementById('playPauseButton');
const backButton = document.getElementById('backButton');
const forwardButton = document.getElementById('forwardButton');
const downloadButton = document.getElementById('downloadButton');
const volumeSlider = document.getElementById('volumeSlider');


function loadSong(index) {
    audio.src = songs [index].src;
    downloadButton.href = songs[index].src;
    downloadButton.download = songs[index].download;
    audio.load();
    audio.play();
    playPauseButton.innerHTML = '<i class="fas fa-pause"></i>';
    }

playPauseButton.addEventListener('click', () => {
if (audio.paused) {
audio.play();
playPauseButton.innerHTML = '<i class="fas fa-pause"></i>'; 
} else {
        audio.pause();
        playPauseButton.innerHTML = '<i class="fas fa-play"></i>';
}
});
        backButton.addEventListener('click', () => { 
        audio.currentTime = 10;
});
        forwardButton.addEventListener('click', () => {
        audio.currentTime += 10;
});
        volumeSlider.addEventListener('input', () => { 
        audio.volume = volumeSlider.value;
});