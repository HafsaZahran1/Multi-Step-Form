var Form1 = document.getElementById("Form1");
 Form2 = document.getElementById("Form2"),
 Form3 = document.getElementById("Form3"),

 Next1 = document.getElementById("Next1"),
 Next2 = document.getElementById("Next2"),

 Back1 = document.getElementById("Back1"),
 Back2 = document.getElementById("Back2"),

 progress = document.getElementById("progress");

Next1.onclick = function(){
    Form1.style.left="-450px";
    Form2.style.left="40px";
    progress.style.width="240px";
}
Next2.onclick = function(){
    Form2.style.left="-450px";
    Form3.style.left="40px";
    progress.style.width="360px";

}

Back1.onclick = function(){
    Form1.style.left="40px";
    Form2.style.left="450px";
    progress.style.width="120px";

}
Back2.onclick = function(){
    Form2.style.left="40px";
    Form3.style.left="450px";
    progress.style.width="240px";

}
