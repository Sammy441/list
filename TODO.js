document.querySelector('#push').onclick = function(){
    if(document.queryselector('#newtask input').
    value.length == 0
    ){
        alert("please a enter a task");
    }
    else{
        document.querySelector('#tasks').innerHTML += `<div class="task">
<span id="taskname">${document.querySelector('#newtask input').value}

</span>
  <button class="delete">X

  </button>
</div>; `

var_task = document.querySelector ('.delete');
for (var i = 0; i < current_tasks.length; i++ ){
current_tasks[i].onclick = function (){
    this.parentNode.remove();
        

    } 

}
var_current = document.querySelectorAll ('#taskname');
for (var i = 0; i < current_tasks.length; i++ ){
tasks[i].onclick = function (){
    this.classlist.toggle('completed')
}
}
document.querySelector('#newtask input').value = "";
}
}