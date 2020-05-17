/*adding close button to do list and making it responsive*/
var todolist = document.getElementsByTagName("LI");
var i;
for (i = 0; i < todolist.length; i++) {
  var span = document.createElement("SPAN");
  var txt = document.createTextNode("\u00D7");//unicode for close button
  span.className = "close";
  span.appendChild(txt);
  todolist[i].appendChild(span);
}
var close = document.getElementsByClassName("close");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  }
}
var count=3;
var work_done=0;

var counter=document.getElementById("cnt");
var counter1=document.getElementById("cnt1");
var list = document.querySelector('ul');
/*for marking the completed work*/
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('checked');
    if(count>0)
    count=count-1;
    work_done+=1;
    counter.innerText=count;
    counter1.innerText=work_done;

  }
}, false);
/*adding input from search box*/
function newElement() {
    var li = document.createElement("li");
    var inputValue = document.getElementById("myInput").value;
    var t = document.createTextNode(inputValue);
    li.appendChild(t);
    if (inputValue === '') {
      alert("Enter your work in the search box");
    } else {
      document.getElementById("myUL").appendChild(li);
      count=count+1;
    counter.innerText=count;
   
    }
    document.getElementById("myInput").value = "";
  
    var span = document.createElement("SPAN");
    var txt = document.createTextNode("\u00D7");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
  
    for (i = 0; i < close.length; i++) {
      close[i].onclick = function() {
        var div = this.parentElement;
        div.style.display = "none";
      }
    }
}