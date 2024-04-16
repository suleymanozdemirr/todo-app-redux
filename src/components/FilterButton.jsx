import { useDispatch, useSelector } from "react-redux"
import { filterTodos, markAllCompleted } from "../redux/actions"

export default function FilterButton() {
  const dispatch = useDispatch()
  const currentFilter = useSelector((state) => state.filter)

  const handleFilter = (filter) => {
    dispatch(filterTodos(filter))
  }
  return (
    <div className="flex space-x-4 items-center">
      <select
        className="text-sm px-2 py-1 rounded border border-gray-300 focus:outline-none"
        value={currentFilter}
        onChange={(e) => handleFilter(e.target.value)}
      >
        <option value="ALL">Default</option>
        <option value="COMPLETED">completed</option>
        <option value="INCOMPLETE">Incomplete</option>
      </select>
      <button onClick={()=>dispatch(markAllCompleted())} className="text-sm px-2 py-1 bg-purple-500 text-white ml-2 rounded">
        Mark All Complete
      </button>
    </div>
  )
}
