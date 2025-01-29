const taskForm = document.getElementById('new-task-form');
const shortTermTasks = document.querySelector('#short-term-tasks .task-list');
const longTermTasks = document.querySelector('#long-term-tasks .task-list');

const tasks = JSON.parse(localStorage.getItem('tasks')) || [];

function saveTasks() {
    localStorage.setItem('tasks', JSON.stringify(tasks));
}

function renderTasks() {
    shortTermTasks.innerHTML = '';
    longTermTasks.innerHTML = '';
    
    tasks.forEach(task => {
        const taskElement = document.createElement('div');
        taskElement.className = 'task';
        taskElement.innerHTML = `
            <span>${task.name} - <em>${task.category}</em> - ${getRemainingTime(task.dueDate)}</span>
            <div>
                <button onclick="editTask(${task.id})">Edit</button>
                <button onclick="deleteTask(${task.id})">Delete</button>
            </div>
        `;

        if (task.completed) {
            taskElement.classList.add('completed');
        } else if (new Date(task.dueDate) < new Date()) {
            taskElement.classList.add('overdue');
        }

        if (task.category === '1-Day to 7-Day') {
            shortTermTasks.appendChild(taskElement);
        } else {
            longTermTasks.appendChild(taskElement);
        }
    });
}

function addTask(event) {
    event.preventDefault();
    const name = document.getElementById('task-name').value;
    const category = document.getElementById('task-category').value;
    const dueDate = document.getElementById('task-due-date').value;
    const notes = document.getElementById('task-notes').value;

    const newTask = {
        id: Date.now(),
        name,
        category,
        dueDate,
        notes,
        completed: false
    };

    tasks.push(newTask);
    saveTasks();
    renderTasks();
    taskForm.reset();
}

function deleteTask(id) {
    const index = tasks.findIndex(task => task.id === id);
    tasks.splice(index, 1);
    saveTasks();
    renderTasks();
}

function editTask(id) {
    const task = tasks.find(task => task.id === id);
    document.getElementById('task-name').value = task.name;
    document.getElementById('task-category').value = task.category;
    document.getElementById('task-due-date').value = task.dueDate;
    document.getElementById('task-notes').value = task.notes;

    deleteTask(id);
}

function getRemainingTime(dueDate) {
    const now = new Date();
    const due = new Date(dueDate);
    const diff = due - now;

    if (diff <= 0) return 'Overdue';

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    if (days > 0) return `${days} days left`;

    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    return `${hours} hours left`;
}

taskForm.addEventListener('submit', addTask);

renderTasks();