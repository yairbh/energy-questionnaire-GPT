function goToSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show the selected section
    const selectedSection = document.getElementById('section' + sectionId);
    if (selectedSection) {
        selectedSection.classList.add('active');
    }
}

// Initialize by showing the first section
document.getElementById('section1').classList.add('active');
