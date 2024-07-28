import { Tarea } from "./Tarea"

type LiustaTareas = {
    listaTareas: string[]
    borrarTarea: (index:number) => void
}

export const ListaTareas = ({listaTareas, borrarTarea}: LiustaTareas) => {
  return (
    <div className="tasklist">
        {listaTareas.map((tarea, index) => (
           <Tarea key={index} tarea={tarea} borrarTarea={() => borrarTarea(index)}>Agregar tarea</Tarea>
        ))}
    </div>
  )
}