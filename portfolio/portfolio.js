const skills = [
    { 
        category: 'Programming Languages', 
        items: ['HTML', 'CSS', 'JavaScript', 'Python', 'C++', 'Java'] 
    },
    { 
        category: 'Web Technologies', 
        items: ['React.js', 'Node.js', 'GitHub', 'Frontend Development', 'DBMS', 'MYSQL'] 
    },
    { 
        category: 'Cybersecurity', 
        items: ['Network Security', 'Packet Tracer', 'Security Essentials', 'Cloud Security'] 
    },
    { 
        category: 'Tools & Others', 
        items: ['Power BI', 'Data Analysis', 'Pygame', 'Blockchain Basics'] 
    }
];

const projects = [
    {
        title: 'coffee website-landing page',
        description: 'A landing page that has been created using html and css.',
        image: 'https://tse2.mm.bing.net/th?id=OIP._badybVgE4OPYKgYVgHQRwHaE8&pid=Api&P=0&h=180',
        technologies: ['HTML', 'CSS'],
        githubUrl: 'https://github.com/parkavi817/Codsoft-/blob/main/codsoft/task2.html',
        liveUrl: 'coffee.jpg'
    },
    {
        title: 'Maze Game Application',
        description: 'An interactive maze game',
        image: 'https://tse1.mm.bing.net/th?id=OIP.Q5EAbFVGtvinSItiAIvgiAHaD3&pid=Api&P=0&h=180',
        technologies: ['HTML', 'CSS', 'Javascript', 'Node.js'],
        githubUrl: 'https://github.com/parkavi817/mazeproj',
        liveUrl: 'https://splendid-salamander-535f21.netlify.app/'
    },

    {
        title: 'Calculator Application.',
        description: 'A calculator application that performs basic arithmetic operations ',
        image: 'https://tse4.mm.bing.net/th?id=OIP.iirGNqsIvtGIhGMeOpisyQHaEK&pid=Api&P=0&h=180',
        technologies: ['HTML', 'CSS', 'Javascript'],
        githubUrl: 'https://github.com/parkavi817/Codsoft-/blob/main/codsoft/task3.html',
        liveUrl: 'https://glowing-licorice-a1da3e.netlify.app/'
    }
];

// DOM Elements
const navbar = document.getElementById('navbar');
const menuButton = document.getElementById('menuButton');
const mobileMenu = document.getElementById('mobileMenu');
const menuIcon = document.getElementById('menuIcon');
const skillsGrid = document.getElementById('skillsGrid');
const projectsGrid = document.getElementById('projectsGrid');
const contactForm = document.getElementById('contactForm');

// Navbar Scroll Effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 0) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});

// Mobile Menu Toggle
menuButton.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    menuIcon.textContent = mobileMenu.classList.contains('hidden') ? '☰' : '✕';
});

// Populate Skills Section
function populateSkills() {
    skills.forEach(skillSet => {
        const skillDiv = document.createElement('div');
        skillDiv.className = 'skill-card';
        skillDiv.innerHTML = `
            <h3>${skillSet.category}</h3>
            <ul>
                ${skillSet.items.map(skill => `
                    <li>
                        <span class="skill-dot"></span>
                        ${skill}
                    </li>
                `).join('')}
            </ul>
        `;
        skillsGrid.appendChild(skillDiv);
    });
}

// Populate Projects Section
function populateProjects() {
    projects.forEach(project => {
        const projectDiv = document.createElement('div');
        projectDiv.className = 'project-card';
        projectDiv.innerHTML = `
            <img src="${project.image}" alt="${project.title}">
            <div class="project-content">
                <h3>${project.title}</h3>
                <p>${project.description}</p>
                <div class="tech-stack">
                    ${project.technologies.map(tech => `
                        <span class="tech-tag">${tech}</span>
                    `).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.githubUrl}" target="_blank">View Code</a>
                    <a href="${project.liveUrl}" target="_blank">Live Demo</a>
                </div>
            </div>
        `;
        projectsGrid.appendChild(projectDiv);
    });
}

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    populateSkills();
    populateProjects();
});

