// Get reference to the button and section
const toggleButton = document.getElementById('builds-btn');
const sectionToToggle = document.getElementById('sectionToToggle');

// Add click event listener to the button
toggleButton.addEventListener('click', function() {
    // Toggle the visibility of the section
    sectionToToggle.classList.toggle('hidden');
});
