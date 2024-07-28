
type Tarea = {
    tarea: string
    borrarTarea: () => void
}

export const Tarea = ({tarea, borrarTarea}: Tarea) => {
  return (
        <div className="task">
          <p>{tarea}</p>
          <button onClick={borrarTarea}>Borrar tarea</button>
        </div>
  )
}
