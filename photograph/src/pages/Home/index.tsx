import { Box, Flex } from "@chakra-ui/react";
import Sidebar from "../../components/Sidebar";
import Colection from "./components/Colection/colection";

const Home = () => {
  return (
    <Flex>
      <Sidebar />
      <Box w={"full"}>
        <Colection />
      </Box>
    </Flex>
  );
};

export default Home;
