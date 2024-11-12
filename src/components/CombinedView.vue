<template>
    <div class="container mt-5 combined-view">
      <h1 class="text-center mb-4 text-primary">Gestión de Tareas</h1>
  
      <!-- Formulario para añadir tareas -->
      <div class="input-group mb-3">
        <input
          v-model="newTask"
          @keyup.enter="addTask"
          placeholder="Añadir nueva tarea"
          class="form-control"
          aria-label="Nueva tarea"
        />
        <button @click="addTask" class="btn btn-primary">
          <i class="bi bi-plus-circle"></i> Añadir
        </button>
      </div>
  
      <!-- Botón para cargar tareas desde la API -->
      <div class="text-center mb-4">
        <button @click="fetchTasks" class="btn btn-secondary">
          <i class="bi bi-cloud-download"></i> Cargar Tareas
        </button>
      </div>
  
      <!-- Lista de tareas -->
      <div v-if="tasks.length > 0" class="list-group">
        <div
          v-for="task in tasks"
          :key="task.id"
          class="list-group-item d-flex justify-content-between align-items-center"
        >
          <span :class="{ 'text-decoration-line-through text-muted': task.completed }">
            {{ task.todo }}
          </span>
          <div class="btn-group">
            <button
              @click="toggleTaskCompletion(task)"
              class="btn btn-outline-success btn-sm"
              :title="task.completed ? 'Marcar como pendiente' : 'Marcar como completada'"
            >
              <i :class="task.completed ? 'bi bi-check-circle-fill' : 'bi bi-circle'"></i>
            </button>
            <button
              @click="deleteTask(task)"
              class="btn btn-outline-danger btn-sm"
              title="Eliminar tarea"
            >
              <i class="bi bi-trash-fill"></i>
            </button>
          </div>
        </div>
      </div>
  
      <!-- Mensaje si no hay tareas -->
      <div v-else class="alert alert-info text-center">
        No hay tareas aún. ¡Agrega una nueva tarea o cárgalas desde la API!
      </div>
    </div>
  </template>
  
  <script>
  import axios from "axios";
  
  export default {
    name: "CombinedView",
    data() {
      return {
        newTask: "", // Campo de entrada para la nueva tarea
        tasks: [], // Lista de tareas locales
      };
    },
    methods: {
      async fetchTasks() {
        try {
          const response = await axios.get("https://dummyjson.com/todos");
          this.tasks = response.data.todos.map((task) => ({
            id: task.id,
            todo: task.todo,
            completed: task.completed,
          }));
        } catch (error) {
          console.error("Error al cargar tareas desde la API:", error);
        }
      },
  
      addTask() {
        if (this.newTask.trim() === "") return;
  
        const newTask = {
          todo: this.newTask,
          completed: false,
          id: Date.now(),
        };
  
        this.tasks.unshift(newTask);
        this.newTask = ""; 
      },
  
      toggleTaskCompletion(task) {
        task.completed = !task.completed;
      },
  
      deleteTask(task) {
        this.tasks = this.tasks.filter((t) => t.id !== task.id);
      },
    },
  };
  </script>
  
  <style scoped>
  .combined-view {
    max-width: 800px;
    margin: 0 auto;
    background-color: #f8f9fa; 
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }
  
  .text-primary {
    color: #d14774 !important; 
  }
  
  .btn-primary {
    background-color: #d14774;
    border-color: #d14774;
  }
  
  .btn-primary:hover {
    background-color: #a83459;
    border-color: #a83459;
  }
  
  .list-group-item {
    border: none;
  }
  
  .text-decoration-line-through {
    font-style: italic;
  }
  </style>