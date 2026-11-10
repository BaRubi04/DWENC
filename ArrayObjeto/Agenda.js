let agenda = {
    nombre: "Eusebio", 
    tareas: [],

    agregarTarea: function(descripcion, prioridad) {
        let objTarea = {
            descripcion: descripcion,
            prioridad: prioridad,
            estado: "pendiente"
        };
        this.tareas.push(objTarea);
    },

    listarTareas: function() {
        this.tareas.forEach(element => {
            console.log("Descripcion: " + element.descripcion);
            console.log("Prioridad: " + element.prioridad);
            console.log("Estado: " + element.estado);
        });
    },

    marcarCompletada: function(indice) {
        if (isNaN(indice) || indice < 0 || indice >= this.tareas.length) {
            alert("Error, índice no válido");
        } else {
            this.tareas[indice].estado = "completada";
        }
    },

    eliminarTarea: function(indice) {
        if (isNaN(indice) || indice < 0 || indice >= this.tareas.length) {
            alert("Error, índice no válido");
        } else {
            this.tareas.splice(indice, 1);
        }
    },

    listarPendientes: function() {
        let pendientes = this.tareas.filter(element => element.estado == 'pendiente');
        pendientes.forEach(function(element) {
            console.log("Descripcion: " + element.descripcion);
            console.log("Prioridad: " + element.prioridad);
            console.log("Estado: " + element.estado);
        });
    },

    ordenarPorPrioridad: function(){
        this.tareas.sort(function(a,b){
            return a.prioridad - b.prioridad;
        });
    }
};