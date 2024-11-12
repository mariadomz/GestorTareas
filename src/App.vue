<template>
  <div id="app">
    <!-- Barra de navegación con enlaces a diferentes rutas -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <!-- Logo o imagen de marca -->
      <img src="./assets/logo.png" alt="Logo" class="logo" />

      <div class="navbar-nav">
        <!-- Enlaces de navegación con active-class para resaltar el enlace activo -->
        <router-link to="/" class="nav-item nav-link" active-class="active-link">Home</router-link>
        <router-link to="/about" class="nav-item nav-link" active-class="active-link">About</router-link>
        <router-link to="/addtask" class="nav-item nav-link" active-class="active-link">Agregar Tarea</router-link>
        <router-link to="/tasklist" class="nav-item nav-link" active-class="active-link">Lista de Tareas</router-link>
        <router-link to="/combinedview" class="nav-item nav-link" active-class="active-link">Vista Combinada</router-link>
      </div>
    </nav>

    <!-- Aquí se cargará el componente correspondiente a la ruta seleccionada -->
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App',
}
</script>

<style>
#app {
  background-color: #ffc0cb; /* Fondo rosa */
  min-height: 100vh; /* Asegurar que cubra toda la pantalla */
}

nav {
  padding: 20px;
}

nav .logo {
  height: 40px;
  margin-right: 15px;
}

nav .nav-link {
  font-weight: bold;
  color: #8b2694;
}

nav .active-link {
  color: #8a2a8d;  /* Resaltar el enlace activo */
  font-weight: bold;
}

nav .navbar-nav {
  display: flex;
  gap: 15px;
}

@media (max-width: 767px) {
  /* Estilo para la versión móvil */
  nav .navbar-nav {
    flex-direction: column;
    align-items: center;
  }
}
button {
  background-color: #d14774; /* Botón rosa oscuro */
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
}

button:hover {
  background-color: #b03b63; /* Más oscuro al pasar el cursor */
}
</style>