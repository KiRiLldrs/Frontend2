let rowCounter = 0;
let id = 5

function addStudent(){
    const fio = document.getElementById("fio").value
    const book_number = document.getElementById("book_number").value
    const group_number = document.getElementById("group_number").value
    const sex = document.getElementById("sex").value
    const age = document.getElementById("age").value
    const ed_form = document.getElementById("ed_form").value
    const direction = document.getElementById("direction").value

    if (fio && book_number && group_number && sex && age && ed_form && direction && sex != "None" && ed_form != "None" && direction != "None"){
        const table = document.getElementById("table").getElementsByTagName("tbody")[0]
        const newRow = table.insertRow(table.rows.length)
        newRow.className = "row";

        if (rowCounter%2 == 0){
            newRow.style.backgroundColor = "#FFCCCC";
        }
        else{
            newRow.style.backgroundColor = "#FFCCFF";
        }

        rowCounter++
        id ++

        const cell1 = newRow.insertCell(0)
        const cell2 = newRow.insertCell(1)
        const cell3 = newRow.insertCell(2)
        const cell4 = newRow.insertCell(3)
        const cell5 = newRow.insertCell(4)
        const cell6 = newRow.insertCell(5)
        const cell7 = newRow.insertCell(6)
        const cell8 = newRow.insertCell(7)

        cell1.innerHTML = id
        cell2.innerHTML = fio
        cell3.innerHTML = book_number
        cell4.innerHTML = group_number
        cell5.innerHTML = sex
        cell6.innerHTML = age
        cell7.innerHTML = ed_form
        cell8.innerHTML = direction

        document.getElementById("addStudentForm").reset()

    }
    else{
        alert("Не все поля заполнены")
    }
}
