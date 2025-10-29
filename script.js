const addBtn = document.getElementById('addBtn');
const tableBody = document.querySelector('#studentTable tbody');

let editRow = null;

addBtn.addEventListener('click', () => {
    const name = document.getElementById('name').value;
    const id = document.getElementById('id').value;
    const studentClass = document.getElementById('class').value;
    const roll = document.getElementById('roll').value;

    if (!name || !id || !studentClass || !roll) {
        alert("Please fill all fields!");
        return;
    }

    if (editRow) {
        editRow.children[0].textContent = name;
        editRow.children[1].textContent = id;
        editRow.children[2].textContent = studentClass;
        editRow.children[3].textContent = roll;
        editRow = null;
        addBtn.textContent = "Add";
    } else {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${name}</td>
            <td>${id}</td>
            <td>${studentClass}</td>
            <td>${roll}</td>
            <td>
                <button class="editBtn">Edit</button>
                <button class="deleteBtn">Delete</button>
            </td>
        `;
        tableBody.appendChild(row);
    }

    document.getElementById('name').value = "";
    document.getElementById('id').value = "";
    document.getElementById('class').value = "";
    document.getElementById('roll').value = "";
});

tableBody.addEventListener('click', (e) => {
    if (e.target.classList.contains('deleteBtn')) {
        e.target.closest('tr').remove();
    }

    if (e.target.classList.contains('editBtn')) {
        editRow = e.target.closest('tr');
        document.getElementById('name').value = editRow.children[0].textContent;
        document.getElementById('id').value = editRow.children[1].textContent;
        document.getElementById('class').value = editRow.children[2].textContent;
        document.getElementById('roll').value = editRow.children[3].textContent;
        addBtn.textContent = "Update";
    }
});
