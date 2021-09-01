const inputMessage = document.getElementById('voz');

function reconhecimentoVoz()
{
    window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

    const recognation = new SpeechRecognition();
    recognation.interimResults = true;

    recognation.addEventListener('result', e => {

        let text = Array.from(e.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('');

        inputMessage.value = text

    }); 
    recognation.start();
}

inputMessage.onclick = ()=> {
    reconhecimentoVoz();
}