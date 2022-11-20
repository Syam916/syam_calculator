let butt=document.getElementsByTagName("button");
let result=document.getElementById("result")

for(let i=0;i<butt.length;i++){
    butt[i].onclick=function(){
        let input=this.innerHTML;
        updateDisplay(input);
    }
}
document.addEventListener("keypress",function(event){
    let dis=event.key;
    const arr=["1","2","3","4","5","6","7","8","9","0","+","-","*","%","C","="]
    let che=arr.includes(dis)
    if (che){
        console.log(dis)
        updateDisplay(dis)

    }
    

})



function updateDisplay(input){
    let currentDisplay=result.innerHTML;
    console.log(currentDisplay)
    if (currentDisplay=="0"){
        if (input!="C" && input!='DEL' && input!="="){
            result.innerHTML="";
            result.innerHTML=input;
        }
    }
    else{
        if (input=="C"){
            result.innerHTML="0"
        }
        if (input!="C" && input!='DEL' && input!="="){
            result.innerHTML+=input
        }
        if (input=="DEL"){
            result.innerHTML=currentDisplay.substring(0,currentDisplay.length-1)
        }
        if (input=="="){
            result.innerHTML=eval(result.innerHTML)
        }
    }
     
}

// butt.addEventListener("click",change)
// function change (){
//     alert("button clicked")
//     console.log("hi button clicked ")
// };

// alert("hi welcome")