// This code is check the marks and decide pass/fail.

function checkResult() {
    var resultDiv = document.getElementById('result-status');
    var nameInput = document.getElementById('student');
    var jsInput = document.getElementById('JavaScript');
    var javaInput = document.getElementById('Java');
    var netInput = document.getElementById('Net');
    // var avrMarks = document.getElementById("average");
    // var grade = document.getElementById("grade");

    var name = nameInput.value;
    var js = parseInt(jsInput.value);
    var java = parseInt(javaInput.value);
    var net = parseInt(netInput.value);
    var avrResult = avgMarksCalc([js,java,net]);

    var nameDisplay = document.getElementById('st-name');
    var jsResultDisplay = document.getElementById('jsresult');
    var javaResultDisplay = document.getElementById('javaresult');
    // console.log(avrResult);
    var netResultDisplay = document.getElementById('netresult');
    var avrResultDisplay = document.getElementById("average");
    var gradeDisplay = document.getElementById("grade"); 
    avrResultDisplay.innerHTML = avrResult;
    gradeCalculator();
    // display result section
    resultDiv.style.display='block';

    if (name !== "") {
        nameDisplay.innerHTML = `Hi ${name}, Please check below Result:`;
    }

    function updateResultDisplay(result, displayElement) {
        displayElement.innerHTML = result >= 35 ? "Pass" : "Fail";
        displayElement.style.color = result >= 35 ? "green" : "red";
    }

    function gradeCalculator(){
        if(avrResult >= 35 && avrResult < 50){
            gradeDisplay.innerHTML = "C Grade"
        }else if(avrResult >= 50 && avrResult < 70){
            gradeDisplay.innerHTML = "B Grade"    
        }else if(avrResult >= 70 && avrResult < 95){
            gradeDisplay.innerHTML = "A Grade"
        }else{
            gradeDisplay.innerHTML = "A+ Grade"
        }
    }

    updateResultDisplay(js, jsResultDisplay);
    updateResultDisplay(java, javaResultDisplay);
    updateResultDisplay(net, netResultDisplay);
}

const avgMarksCalc = result =>{
    const [js,java,dotnet]= result;
    return (js + java + dotnet)/3;
}

var button = document.getElementById('showResult');
button.addEventListener('click', checkResult);
