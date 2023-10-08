const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-contaier");

function addTask() {
    if (inputBox.value === "") {
        alert("You must write something!");
    } else {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let button = document.createElement("button");
        button.innerHTML = inputBox.value;
    
      
    }
    inputBox.value = "";
    saveData();
}
listContainer.addEventListener("click", function(e) {
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }


});
