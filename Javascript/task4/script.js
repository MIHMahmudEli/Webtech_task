const form = document.getElementById('studentForm');
const nameInput = document.getElementById('nameInput');
const rollInput = document.getElementById('rollInput');
const deptInput = document.getElementById('deptInput');

const tbody = document.getElementById('studentTable').getElementsByTagName('tbody')[0];

form.addEventListener('submit', function(event) {
  event.preventDefault();

  const name = nameInput.value.trim();
  const roll = rollInput.value.trim();
  const dept = deptInput.value.trim();

  if (!name || !roll || !dept) {
    alert('Please fill in all fields.');
    return;
  }

  const tr = document.createElement('tr');

  const tdName = document.createElement('td');
  tdName.textContent = name;
  tr.appendChild(tdName);

  const tdRoll = document.createElement('td');
  tdRoll.textContent = roll;
  tr.appendChild(tdRoll);

  const tdDept = document.createElement('td');
  tdDept.textContent = dept;
  tr.appendChild(tdDept);

  const tdAction = document.createElement('td');
  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete-btn';
  deleteBtn.addEventListener('click', function() {
    tbody.removeChild(tr);
  });
  tdAction.appendChild(deleteBtn);
  tr.appendChild(tdAction);

  tbody.appendChild(tr);

  nameInput.value = '';
  rollInput.value = '';
  deptInput.value = '';
});
