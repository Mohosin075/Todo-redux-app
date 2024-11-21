import TodoContainer from "@/components/todo/TodoContainer";
import Container from "@/components/ui/Container";

function Todo() {
  return (
    <Container>
      <h2 className="text-center text-3xl font-semibold my-10">My Todo</h2>
      <TodoContainer></TodoContainer>
    </Container>
  );
}

export default Todo;
