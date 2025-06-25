const Tarea = require('../modelo/tarea');

exports.getTareas = async (req, res) => {
    const tareas = await Tarea.find();
    console.log(tareas.length);
    res.json(tareas);
};

exports.addTarea = async (req, res) => {
    let { nombre, completed } = req.body;
    let nuevo = new Tarea({ id: Date.now(), nombre, completed }); 
    await nuevo.save()
    res.status(201).json(nuevo);
};

exports.deleteTarea = async (req, res) => {
    try {
        const id = req.params.id;
        const tareaEliminada = await Tarea.findByIdAndDelete(id);
        if (!tareaEliminada) {
            return res.status(404).json({ message: "Tarea no encontrada" });
        }
        res.json({ 
            message: "Tarea eliminada exitosamente",
            tarea: tareaEliminada 
        });

    } catch (err) {
        res.status(500).json({ message: "Error al eliminar la tarea", error: err.message });
    }
};

exports.editTarea = async (req, res) => {
    let id = Number(req.params.id);
    let tareaExistente = await Tarea.findByIdAndUpdate(id)
    let { nombre, completed } = req.body;

    if (!tareaExistente) {
        return res.status(404).json({ error: "Tarea no encontrada" });
    }

    if (nombre !== undefined) {
        tareaExistente.nombre = nombre;
    }
    if (completed !== undefined) {
        tareaExistente.completed = completed;
    }

    res.status(200).json(tareaExistente);
};