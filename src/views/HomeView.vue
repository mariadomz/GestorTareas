<template>
  <div class="container mt-5 home-view">
    <h1 class="text-center mb-4 text-primary">¡Bienvenido al Gestor de Tareas!</h1>
    <p class="text-center">
      Usa las opciones del menú para <b>agregar tareas</b>, <b>gestionar tu lista</b> o <b>cargar datos desde la API</b>.
    </p>
    <div class="text-center mt-4">
      <router-link to="/addtask" class="btn btn-primary me-2">
        <i class="bi bi-plus-circle"></i> Agregar Tarea
      </router-link>
      <router-link to="/tasklist" class="btn btn-secondary">
        <i class="bi bi-list-task"></i> Ver Lista
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.home-view {
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
</style>