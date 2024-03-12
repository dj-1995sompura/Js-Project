// length handling function
const stringTrunkerHandler = () =>{
    let inputData = document.getElementById('InputText').value;
    // let Trucket= document.getElementById('trunket');
    let trunkSize = document.getElementById('limitLength').value;

    let res = inputData.substring(0,trunkSize);

    console.log(res);
    document.querySelector('.result').innerHTML=res;
}


document.getElementById('lenger').addEventListener('click', stringTrunkerHandler);

// word handling function
const wordLimitHandler = () =>{ 
    let inputData = document.getElementById('InputText').value;
    let wordCount = document.getElementById('limitWord').value;
    // str.trim().split(/\s+/).length;;
    let res = inputData.split(/\s+/,wordCount).toString().replaceAll(',', ' ');
    document.querySelector('.result').innerHTML=res;
}
document.getElementById('worder').addEventListener('click', wordLimitHandler);

// duplicate handler
const duplicateHandler = () =>{
    document.querySelector('.result').innerHTML = "";
    let inputData = document.getElementById('InputText').value;
    let copyCount = document.getElementById('copyTimes').value;

    for(let i=1; i<=copyCount; i++ ){
        document.querySelector('.result').innerHTML +=inputData
    }

}

document.getElementById('multiply').addEventListener('click', duplicateHandler);

// arrayMaker handler
const arrayHandler = () =>{
    let inputData = document.getElementById('InputText').value;
    let arrEleCount = document.getElementById('arrMaker').value;

    let madStr = inputData.replaceAll(' ','');
    console.log(madStr.length);
    var partIndex = Math.ceil(madStr.length/arrEleCount);
    console.log(partIndex); 

    
   // Split the string into parts
   let newStr = [];
   for (let i = 0; i < madStr.length; i += partIndex) {
       newStr.push(madStr.slice(i, i + partIndex));
   }

   // Join the parts with spaces
   let res = newStr.join(' ');
    document.querySelector('.result').innerHTML=res;
}

document.getElementById('Arrayer').addEventListener('click', arrayHandler);

// accordion manage 
let buttons = document.querySelectorAll('button');

buttons.forEach(button =>{
    button.addEventListener('click', function(){
        let siblings = this.nextElementSibling;
        if(siblings && siblings.classList.contains('trukValues')){
            siblings.style.display = "block";

            let remaineButtonList = allRemainButton(buttons, this);
            for(let i=0; i<remaineButtonList.length; i++){
                let ele = remaineButtonList[i].nextElementSibling;
                if(ele){
                ele.style.display = "none";
                }
                // console.log(remaineButtonList[i]);
            }
        }
    })

});

function allRemainButton(btns, curruntButton){
    return Array.from(btns).filter(button=>button !== curruntButton);
}