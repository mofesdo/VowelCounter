console.log("connected")
document.querySelector("#submitBtn").addEventListener('click', vowels);

function vowels(){
    console.log("there are x vowels in this string")
    let string = document.querySelector("#sentence").value;
    console.log(string)
    let count = 0;
    for(let i = 0; i < string.length; i++){
        if(string[i] == "a" || string[i] == "e" ||string[i] == "i" ||string[i] == "o" ||string[i] == "u" || string[i] == "A" || string[i] == "E" ||string[i] == "I" ||string[i] == "O" ||string[i] == "U"){
            count++
        }
    }
    alert(count)
}