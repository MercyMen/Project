let list = document.querySelector('ol');

list.addEventListener('dblclick', function (ev) {
    if(ev.target.tagName === "LI" && ev.value != "") {
       ev.target.classList.toggle('checked');
    } else if(ev.target.tagName === "SPAN") {
       let div = ev.target.parentNode;
       div.remove();
    }
}, false);

document.getElementById('toDoEl').addEventListener('keyup', function(e) {
   if (e.keyCode === 13) {
      newElement();
  }
});

function newElement() {
    let li = document.createElement('li');
    let inputValue = document.getElementById('toDoEl').value;
    let t = document.createTextNode(inputValue);
    li.appendChild(t);
    if(inputValue == "") {
       alert("Введите ваше дело!");
    } else {
       document.getElementById('list').appendChild(li); 
    }
    document.getElementById('toDoEl').value = "";
    var span = document.createElement('SPAN');
    span.onclick = deleteElement;
    var txt = document.createTextNode("X");
    span.className = "close";
    span.appendChild(txt);
    li.appendChild(span);
}

function deleteElement() { this.parentNode.remove(); }

liDelete = document.createElement('li');
liDelete.innerHTML = `<button class="idList">Удалить</button>`;






































