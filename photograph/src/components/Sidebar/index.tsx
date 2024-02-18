import { Flex, Image } from "@chakra-ui/react";
import Logo from "../../assets/img/logo.png";
import Links from "./components/Links";

const Sidebar = () => {
  return (
    <Flex
      backgroundColor={"gray.300"}
      w={"350px"}
      h={"100vh"}
      flexDir={"column"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      padding={"40px 16px"}
      gap={"60px"}
    >
      <Flex>
        <Image src={Logo} />
      </Flex>

      <Flex flexDir={"column"} w="100%" textAlign={"center"} gap={"24px"}>
        <Links label="Home" />
        <Links label="portifólio" />
        <Links label="Contatos" />
      </Flex>
    </Flex>
  );
};

export default Sidebar;
