// row me kro pehle

function chamaktaSitara(){
    let inputNum = document.getElementById('inputNum').value;
    if(inputNum>=1 && inputNum<=5){
        for(let i = inputNum; i <= 5; i++){
            let sitara = document.getElementById(i);
            sitara.classList.add('active', 'fa-beat-fade');
        }
    }
    else{
        // alert("1 se 5 ke alawa Nahi Chamkega re burbak!!");
        alert("1 se 5 ke alawa Nahi Chamkunga!!");
        console.log("OKAY BRO :)");
    }
}


//column me kro ab

// function chamaktaSitara() {
//   let inputNum = document.getElementById("inputNum").value;
//   if (inputNum >= 1 && inputNum <= 5) {
//     for (let i = 1; i <= 5; i++) {
//       for (let j = 1; j <= inputNum; j++) {
//         let sitara = document.getElementById(j);
//         console.log(sitara);
//         sitara.classList.add("active", "fa-beat-fade");
//       }
//     }
//   } 
//   else {
//     alert("1 se 5 ke alawa Nahi Chamkunga!!");
//     console.log("OKAY BRO :)");
//   }
// }
