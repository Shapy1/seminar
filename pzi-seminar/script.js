// JavaScript function to show/hide sections based on clicked link
function showSection(sectionId) {
    // Hide all sections
    var sections = document.querySelectorAll('main section');
    sections.forEach(function (section) {
        section.classList.add('hidden');
    });
    // Show the selected section
    var selectedSection = document.getElementById(sectionId);
    selectedSection.classList.remove('hidden');
}

function openPopup() {
    alert("Server Offline");
}

// JavaScript function to hide label::before when text is input
document.addEventListener('DOMContentLoaded', function () {
    var inputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');
    inputs.forEach(function (input) {
        input.addEventListener('input', function () {
            var label = this.parentNode.querySelector('label');
            label.classList.toggle('has-text', this.value.trim() !== '');
        });
    });
});

window.onload = function () {
    var inputs = document.querySelectorAll('input[type="text"], input[type="email"], textarea');
    inputs.forEach(function (input) {
        input.value = ''; // Set input value to an empty string
    });
};