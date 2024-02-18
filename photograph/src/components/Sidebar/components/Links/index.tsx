import { Box, Flex } from "@chakra-ui/react";
import { Ilinks } from "./types";

const Links: Ilinks = ({ label }) => {
  return (
    <Flex
      w={"100%"}
      justifyContent={"flex-start"}
      alignItems={"center"}
      textTransform={"uppercase"}
      h={"53px"}
      _hover={{ backgroundColor: "primary.100" }}
      paddingLeft={"18px"}
      cursor={"pointer"}
    >
      {label}
    </Flex>
  );
};

export default Links;
