import { useAppSelector } from "@/redux/hook";
import AddTodoModal from "./AddTodoModal";
import TodoCard from "./TodoCard";
import TodoFilter from "./TodoFilter";
import { useGetTodosQuery } from "@/redux/api/api";
import { useState } from "react";

function TodoContainer() {
  const [priority, setPriority] = useState("");

  // From local state
  // const { todos } = useAppSelector((state) => state.todos);

  // from server state

  const { data: todos, isLoading, isError } = useGetTodosQuery(priority);

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div>
      <div className="flex justify-between mb-5">
        <AddTodoModal></AddTodoModal>
        <TodoFilter priority={priority} setPriority={setPriority}></TodoFilter>
      </div>
      <div className="w-full bg-gradient-to-r from-indigo-500 to-cyan-500 h-full rounded-xl p-2">
        <div className="bg-white space-y-3 rounded-xl p-3">
          {todos?.data?.map((item) => (
            <TodoCard {...item}></TodoCard>
          ))}
        </div>

        {/* <div className="bg-white text-2xl font-semibold p-5 flex justify-center items-center rounded-xl">
          <p>There is no task pending!</p>
        </div> */}
      </div>
    </div>
  );
}

export default TodoContainer;
