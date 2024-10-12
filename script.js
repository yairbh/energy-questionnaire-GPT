function goToSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });
    
    // Show the next section
    document.getElementById('section' + sectionId).classList.add('active');
}

// Initialize by showing the first section
document.getElementById('section1').classList.add('active');
