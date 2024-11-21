import { Button } from "../ui/button";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";

function TodoContainer() {
  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal></AddTodoModal>
        <TodoFilter></TodoFilter>
      </div>
      <div className="w-full bg-gradient-to-r from-indigo-500 to-cyan-500 h-full rounded-xl p-2">
        <div className="bg-white space-y-3 rounded-xl p-3">
        <TodoCard></TodoCard>
        <TodoCard></TodoCard>
        <TodoCard></TodoCard>   
        <TodoCard></TodoCard>
        <TodoCard></TodoCard>
        </div>

        {/* <div className="bg-white text-2xl font-semibold p-5 flex justify-center items-center rounded-xl">
          <p>There is no task pending!</p>
        </div> */}
      </div>
    </div>
  );
}

export default TodoContainer;
