// This code is check the marks and decide pass/fail.

function checkResult() {
    var resultDiv = document.getElementById('result-status');
    var nameInput = document.getElementById('student');
    var jsInput = document.getElementById('JavaScript');
    var javaInput = document.getElementById('Java');
    var netInput = document.getElementById('Net');
    var name = nameInput.value;
    var js = parseInt(jsInput.value);
    var java = parseInt(javaInput.value);
    var net = parseInt(netInput.value);
    var nameDisplay = document.getElementById('st-name');
    var jsResultDisplay = document.getElementById('jsresult');
    var javaResultDisplay = document.getElementById('javaresult');
    var netResultDisplay = document.getElementById('netresult');

    // display result section
    resultDiv.style.display='block';

    if (name !== "") {
        nameDisplay.innerHTML = `Hi ${name}, Please check below Result:`;
    }

    function updateResultDisplay(result, displayElement) {
        displayElement.innerHTML = result >= 35 ? "Pass" : "Fail";
        displayElement.style.color = result >= 35 ? "green" : "red";
    }

    updateResultDisplay(js, jsResultDisplay);
    updateResultDisplay(java, javaResultDisplay);
    updateResultDisplay(net, netResultDisplay);
}

var button = document.getElementById('showResult');
button.addEventListener('click', checkResult);
