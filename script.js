document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    alert("Thank you for your message!");
});

document.addEventListener("DOMContentLoaded", function() {
    const projects = [
        { name: "Project One", description: "A cool project using HTML, CSS, and JS." },
        { name: "Project Two", description: "Another awesome project with animations." }
    ];
    
    const projectList = document.getElementById("project-list");
    projects.forEach(project => {
        let div = document.createElement("div");
        div.innerHTML = `<h3>${project.name}</h3><p>${project.description}</p>`;
        div.style.border = "1px solid #ccc";
        div.style.margin = "10px";
        div.style.padding = "10px";
        div.style.borderRadius = "5px";
        projectList.appendChild(div);
    });
});