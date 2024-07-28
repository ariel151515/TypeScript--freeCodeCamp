import { useState } from "react"
import { ListaTareas } from "./ListaTareas" 

export const TodoApp = () => {

  const [nuevaTarea, setnNuevaTarea] = useState<string>('')
  const [listaTareas, setListaTareas] = useState<string[]>([])

  const handleAddTask = () => {
    if(nuevaTarea.trim() == '') return
    setListaTareas(tareasAnteriores => [...tareasAnteriores, nuevaTarea])
    setnNuevaTarea('')
  }

  const handleBorrarTarea = (index:number) => {
    setListaTareas(tareas => tareas.filter((_,i)) => i !== index))
  }

  return (
    <div>
        <h1>Lista de Tareas</h1>
        <div>
            <input 
                type="text"
                value={nuevaTarea}
                onChange={(e) => setnNuevaTarea(e.target.value)}
                placeholder="Nueva Tarea"
             />
             <button onClick={handleAddTask}>Agregar Tarea</button>
        </div>
        <ListaTareas listaTareas={listaTareas} borrarTarea={() => handleBorrarTarea(index)}></ListaTareas>
    </div>
  )
}