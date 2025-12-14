function showDept(deptId, element) {

    document.querySelectorAll('.content').forEach(content => {
        content.classList.remove('active');
    });

    // Remove active class from tabs
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });

    // Show selected department
    document.getElementById(deptId).classList.add('active');

    // Activate clicked tab
    element.classList.add('active');
}

// Toggle the dropdown for a specific department
function toggleDropdown(department) {
    var content = document.getElementById('dropdown-' + department);
    content.classList.toggle('show');
}

// Function to switch between tabs (departments)
function showDept(department, element) {
    // Hide all department contents
    var contents = document.querySelectorAll('.content');
    contents.forEach(function(content) {
        content.classList.remove('active');
    });

    // Remove 'active' class from all tabs
    var tabs = document.querySelectorAll('.tab');
    tabs.forEach(function(tab) {
        tab.classList.remove('active');
    });

    // Show the selected department content
    document.getElementById(department).classList.add('active');

    // Add 'active' class to the clicked tab
    element.classList.add('active');
}
