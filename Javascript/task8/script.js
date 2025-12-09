const userType = document.getElementById('userType');
const rollDiv = document.getElementById('rollNumberDiv');
const deptDiv = document.getElementById('departmentDiv');

userType.addEventListener('change', function() {
  if (this.value === 'student') {
    rollDiv.style.display = 'block';
    deptDiv.style.display = 'none';
  } else if (this.value === 'teacher') {
    rollDiv.style.display = 'none';
    deptDiv.style.display = 'block';
  } else {
    rollDiv.style.display = 'none';
    deptDiv.style.display = 'none';
  }
});
