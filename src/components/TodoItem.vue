<template>
    <!-- Contenedor principal del ítem de tarea -->
    <div class="d-flex justify-content-between align-items-center border p-3 mb-2 rounded">
        <!-- Contenedor del título y el estado de la tarea -->
        <div>
            <!-- Muestra el título de la tarea y aplica un estilo tachado si la tarea está completada -->
            <h5 :style="{ textDecoration: completed ? 'line-through' : 'none', color: completed ? '#28a745' : '#dc3545' }">
                {{ title }}
            </h5>

            <!-- Muestra si la tarea está Completada o Pendiente -->
            <span :class="{'text-success': completed, 'text-danger': !completed}">
                {{ completed ? 'Completada' : 'Pendiente' }}
            </span>
        </div>

        <!-- Contenedor de botones de acción -->
        <div class="d-flex gap-2">
            <!-- Botón para marcar la tarea como completada o pendiente -->
            <button class="btn btn-outline-primary btn-sm" @click="$emit('toggle-completion')">
                {{ completed ? 'Marcar como Pendiente' : 'Marcar como Completada' }}
            </button>

            <!-- Botón para eliminar la tarea de la lista -->
            <button class="btn btn-outline-danger btn-sm" @click="$emit('delTodo')">
                <i class="bi bi-trash"></i> Eliminar
            </button>
        </div>
    </div>
</template>

<script>
export default {
    // Define el nombre del componente
    name: 'TodoItem',

    // Define las propiedades que este componente recibirá del componente padre
    props: {
        title: {
            type: String,
            required: true,  // Aseguramos que el título sea obligatorio
        },
        completed: {
            type: Boolean,
            required: true, // Aseguramos que el estado de completado sea obligatorio
        },
    },
}
</script>

<style scoped>
/* Estilo para tareas completadas */
.text-success {
    font-weight: bold;
    color: #28a745 !important;
}

/* Estilo para tareas pendientes */
.text-danger {
    font-weight: bold;
    color: #dc3545 !important;
}

button {
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #f1f1f1;
}
</style>