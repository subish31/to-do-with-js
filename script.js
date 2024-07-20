function add(){
    var msg=document.getElementById("to").value;
    if(msg.trim() !== '')
    {
        var li=document.createElement('li');
        li.textContent=msg;
        document.getElementById("todo").appendChild(li);
        document.getElementById("to").vlaue='';
    }
}
function rem(){
    var msg=document.getElementById("todo");
    msg.remove();
}
