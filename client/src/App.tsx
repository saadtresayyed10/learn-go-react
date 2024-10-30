import { Container, Stack } from "@chakra-ui/react";
import Navbar from "./_components/Navbar";

const App = () => {
  return (
    <Stack h="100vh">
      <Navbar />
      <Container></Container>
    </Stack>
  );
};

export default App;
