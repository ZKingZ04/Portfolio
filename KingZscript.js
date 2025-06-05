// Typing animation
document.addEventListener("DOMContentLoaded", () => {
  const text = "My Portfolio";
  const typingElement = document.getElementById("typing-name");
  let charIndex = 0;

  function type() {
    if (charIndex < text.length) {
      typingElement.textContent += text.charAt(charIndex);
      charIndex++;
      setTimeout(type, 100); // typing speed
    }
  }

  if (typingElement) type();

  // Project click to show details box
  const projects = document.querySelectorAll(".project");
  const detailsBoxes = document.querySelectorAll(".project-details");

  projects.forEach((project) => {
    project.addEventListener("click", () => {
      const detailId = project.getAttribute("data-detail");
      // Hide all details boxes
      detailsBoxes.forEach(box => box.style.display = "none");
      // Remove highlight from all projects
      projects.forEach(p => p.classList.remove("active-project"));
      // Show the details box corresponding to clicked project
      const detailsToShow = document.getElementById(detailId);
      if (detailsToShow) {
        detailsToShow.style.display = "block";
        // Highlight the clicked project
        project.classList.add("active-project");
        detailsToShow.scrollIntoView({ behavior: "smooth" });
      }
    });
  });

  // Project filter buttons (optional, keep existing functionality)
  const filterButtons = document.querySelectorAll("#filters button");
  filterButtons.forEach(button => {
    button.addEventListener("click", () => {
      const filter = button.getAttribute("data-filter");
      projects.forEach(project => {
        const category = project.getAttribute("data-category");
        if (filter === "all" || category === filter) {
          project.style.display = "block";
        } else {
          project.style.display = "none";
        }
      });
      // Hide all details boxes when filter changes
      detailsBoxes.forEach(box => box.style.display = "none");
      // Remove highlight from all projects
      projects.forEach(p => p.classList.remove("active-project"));
    });
  });
});
