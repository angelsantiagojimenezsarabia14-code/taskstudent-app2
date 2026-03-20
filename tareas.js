// 🔹 Pestañas
const tabs = document.querySelectorAll('.tab');
const sections = document.querySelectorAll('.section');

tabs.forEach(tab => {
    tab.addEventListener('click', () => {
        tabs.forEach(t => t.classList.remove('active'));
        sections.forEach(s => s.classList.remove('active'));
        tab.classList.add('active');
        document.getElementById(tab.dataset.tab).classList.add('active');
    });
});

// 🔹 Manejo de tareas
let tasks = [];

const taskNameInput = document.getElementById('taskName');
const taskDescInput = document.getElementById('taskDesc');
const addTaskBtn = document.getElementById('addTaskBtn');
const loading = document.getElementById('loading');
const pendingList = document.getElementById('pendingList');
const completedList = document.getElementById('completedList');

// Función para actualizar listas
function updateTasks() {
    pendingList.innerHTML = '';
    completedList.innerHTML = '';

    const now = new Date();
