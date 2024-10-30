import { Container, Stack } from "@chakra-ui/react";
import Navbar from "./_components/Navbar";
import TodoForm from "./_components/TodoForm";
import TodoList from "./_components/TodoList";

const App = () => {
  return (
    <Stack h="100vh">
      <Navbar />
      <Container>
        <TodoForm />
        <TodoList />
      </Container>
    </Stack>
  );
};

export default App;
