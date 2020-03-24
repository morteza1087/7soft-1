function addItem() {
    var inputData;
    inputData = document.getElementById("input").value;

    if (inputData == "") {
        alert("لطفا لیست کار های روزانه را وارد کنید");
    } else {
        document.getElementById("input").value = "";

        var pTag = document.createElement("p");

        var taskTag = document.createElement("span");

        var task = document.createTextNode(inputData);

        taskTag.appendChild(task);

        pTag.appendChild(taskTag);

        var result = document.getElementById("result");

        result.appendChild(pTag);

        var remTag = document.createElement("span");

        var remText = document.createTextNode("*");

        remTag.appendChild(remText);

        pTag.appendChild(remTag);

        pTag.addEventListener("click", taskDone);

        function taskDone() {
            taskTag.style.textDecoration = "line-through";
        }

        var remove = document.createAttribute("onclick");

        remove.value = "this.parentNode.remove();";

        remTag.setAttributeNode(remove);
    }
}