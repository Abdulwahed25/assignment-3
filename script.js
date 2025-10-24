alert("Welcome to my portfolio!");

const projectsData = [
    {
        id: 1,
        title: "Student Resource Hub",
        category: "Web Dev",
        description: "A conceptual design for a web app to help students organize academic resources. The goal is a user-friendly interface to centralize notes, links, and project materials.",
        image: "assets/images/Gemini_Generated_Image_z1vdwuz1vdwuz1vd.png",
        details: ["Main page for subjects.", "Note-saving tool.", "Link organizer."]
    },
    {
        id: 2,
        title: "Gamer's Guide",
        category: "Design",
        description: "This is my idea for a go-to website for gamers. It offers honest game reviews, recommendations for what to play next, and helpful guides with tips and tricks to help you get better and find new games.",
        image: "assets/images/Screenshot 1447-04-02 at 4.59.19 pm.png",
        details: ["Game search tool.", "Guides for hard levels.", "Player rating system."]
    },
    {
        id: 3,
        title: "Portfolio Website",
        category: "Web Dev",
        description: "This very website! Built with HTML, CSS, and JavaScript, focusing on interactivity, dark mode, and user feedback.",
        image: "assets/images/unnamed.jpg", 
        details: ["Dark mode toggle.", "Dynamic greeting.", "Form validation."]
    }
];

const projectsContainer = document.getElementById('projects-container');
const emptyState = document.getElementById('empty-state');
const filterControls = document.getElementById('filter-controls');


function createProjectCardHTML(project) {
    return `
        <div class="project-card">
            <img src="${project.image}" alt="${project.title} Image" width="300">
            <h3>${project.title} (${project.category})</h3>
            <p>${project.description}</p>
        </div>
    `;
}

function renderProjects(projects) {
    if (!projectsContainer) return;

    projectsContainer.innerHTML = ''; 
    
    if (projects.length === 0) {
        if (emptyState) emptyState.style.display = 'block';
    } else {
        if (emptyState) emptyState.style.display = 'none';
        
        projects.forEach(project => {
            projectsContainer.innerHTML += createProjectCardHTML(project);
        });
    }
}

if (filterControls) {
    filterControls.addEventListener('click', (e) => {
        if (e.target.tagName === 'BUTTON') {
            const filterCategory = e.target.getAttribute('data-filter');
            
            filterControls.querySelectorAll('button').forEach(btn => btn.classList.remove('active-filter'));
            e.target.classList.add('active-filter');
            
            let filteredProjects;
            if (filterCategory === 'all') {
                filteredProjects = projectsData; 
            } else {
                filteredProjects = projectsData.filter(project => project.category === filterCategory);
            }
            
            renderProjects(filteredProjects);
        }
    });
}


function applyTheme(theme) {
    if (theme === 'dark') {
        document.body.classList.add('dark-mode');
    } else {
        document.body.classList.remove('dark-mode');
    }
}

function loadTheme() {
    const savedTheme = localStorage.getItem('theme');
    
    if (savedTheme) {
        applyTheme(savedTheme);
    } else {
        applyTheme('light'); 
    }
}

let button = document.getElementById("theme-toggle");
if (button) {
    button.onclick = function() {
        const isDarkMode = document.body.classList.contains('dark-mode');
        let newTheme = isDarkMode ? 'light' : 'dark';
        
        applyTheme(newTheme);
        localStorage.setItem('theme', newTheme);
    };
}


const contactForm = document.getElementById('contact-form');
const formFeedback = document.getElementById('form-feedback');

function validateForm() {
    let isValid = true;
    const fields = [
        { id: 'name', errorId: 'name-error', message: 'Please enter your name.' },
        { id: 'email', errorId: 'email-error', message: 'A valid email is required.' },
        { id: 'message', errorId: 'message-error', message: 'Message cannot be empty.' }
    ];
    
    document.querySelectorAll('.error-message').forEach(el => el.style.display = 'none');

    fields.forEach(field => {
        const input = document.getElementById(field.id);
        const errorEl = document.getElementById(field.errorId);
        
        if (input.value.trim() === '') {
            errorEl.innerText = field.message;
            errorEl.style.display = 'block'; 
            isValid = false;
        } 
        else if (field.id === 'email' && !/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(input.value)) {
             errorEl.innerText = 'Please enter a valid email address (e.g., example@domain.com).';
             errorEl.style.display = 'block';
             isValid = false;
        }
    });

    return isValid;
}

if (contactForm) {
    contactForm.onsubmit = function(e) {
        e.preventDefault();
        
        if(formFeedback) formFeedback.style.opacity = '0';
        
        if (validateForm()) {
            if(formFeedback) {
                formFeedback.style.backgroundColor = '#d4edda'; 
                formFeedback.style.color = '#155724'; 
                formFeedback.innerHTML = '<strong>Success!</strong> Your message has been sent (simulated). Thank you!';
                formFeedback.style.display = 'block';
                setTimeout(() => { formFeedback.style.opacity = '1'; }, 10); 
            }
            contactForm.reset();
            
        } else {
            if(formFeedback) {
                formFeedback.style.backgroundColor = '#f8d7da'; 
                formFeedback.style.color = '#721c24'; 
                formFeedback.innerHTML = '<strong>Error!</strong> Please correct the highlighted fields.';
                formFeedback.style.display = 'block';
                setTimeout(() => { formFeedback.style.opacity = '1'; }, 10); 
            }
        }
    };
}

document.addEventListener('DOMContentLoaded', () => {
    loadTheme(); 
    
    renderProjects(projectsData);
    const initialFilterButton = filterControls ? filterControls.querySelector('[data-filter="all"]') : null;
    if (initialFilterButton) {
        initialFilterButton.classList.add('active-filter'); 
    }
    
    let hour = new Date().getHours();
    let message = "";
    if (hour < 12) {
      message = "Good Morning!";
    } else if (hour < 18) {
      message = "Good Afternoon!";
    } else {
      message = "Good Evening!";
    }
    const greetingElement = document.getElementById("greeting");
    if (greetingElement) greetingElement.innerText = message;
});