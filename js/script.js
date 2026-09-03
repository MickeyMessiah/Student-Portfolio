document.addEventListener('DOMContentLoaded', () => {

    // ==========================================
    // 1. Academic Planner Task Management System
    // ==========================================
    const taskInput = document.getElementById('taskInput');
    const addTaskBtn = document.getElementById('addTaskBtn');
    const taskList = document.getElementById('taskList');

    // Only run if the planner elements exist on the current page
    if (addTaskBtn && taskInput && taskList) {

        // Function to Add Task
        const addTask = () => {
            const taskText = taskInput.value.trim();

            if (taskText === '') {
                alert('Please enter a valid task!');
                return;
            }

            // Create <li> element
            const li = document.createElement('li');

            // Create <span> for task text
            const span = document.createElement('span');
            span.textContent = taskText;

            // Toggle completed state on click
            span.addEventListener('click', () => {
                li.classList.toggle('completed');
            });

            // Create Delete button
            const deleteBtn = document.createElement('button');
            deleteBtn.textContent = 'Delete';
            deleteBtn.className = 'delete-btn';

            // Delete task on click
            deleteBtn.addEventListener('click', () => {
                taskList.removeChild(li);
            });

            // Append elements
            li.appendChild(span);
            li.appendChild(deleteBtn);
            taskList.appendChild(li);

            // Clear input field
            taskInput.value = '';
        };

        // Event Listeners for Planner
        addTaskBtn.addEventListener('click', addTask);
        taskInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') {
                addTask();
            }
        });
    }

    // ==========================================
    // 2. Contact Form JavaScript Validation
    // ==========================================
    const contactForm = document.getElementById('contactForm');

    if (contactForm) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault();

            const fullName = document.getElementById('fullName').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const message = document.getElementById('message').value.trim();
            const formFeedback = document.getElementById('formFeedback');

            // 1. Check for empty fields
            if (fullName === '' || email === '' || phone === '' || message === '') {
                formFeedback.style.color = '#ef4444';
                formFeedback.textContent = 'Error: All fields are required.';
                return;
            }

            // 2. Validate Email format using regular expression
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                formFeedback.style.color = '#ef4444';
                formFeedback.textContent = 'Error: Please enter a valid email address.';
                return;
            }

            // 3. Validate Phone number contains only digits
            const phoneRegex = /^\d+$/;
            if (!phoneRegex.test(phone)) {
                formFeedback.style.color = '#ef4444';
                formFeedback.textContent = 'Error: Phone number must contain digits only.';
                return;
            }

            // Success feedback
            formFeedback.style.color = '#10b981';
            formFeedback.textContent = 'Success! Your message has been sent.';

            // Reset form fields
            contactForm.reset();
        });
    }
});