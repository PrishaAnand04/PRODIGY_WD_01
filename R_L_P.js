const inputTextArea = document.getElementById('ita');
    const outputTextArea = document.getElementById('ota');
    const bn=document.getElementById('btn');
    bn.addEventListener('click', () =>{
    const upperCaseText = inputTextArea.value.toUpperCase();
      outputTextArea.value = upperCaseText;
    });