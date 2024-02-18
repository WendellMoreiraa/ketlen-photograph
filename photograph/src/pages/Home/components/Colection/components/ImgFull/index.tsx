import { Box, Image } from "@chakra-ui/react";
import { IimgFull } from "./type";

const ImgFull: IimgFull = ({ img }) => {
  return (
    <Box w={"full"}>
      <Image w={"full"} src={img} />
    </Box>
  );
};

export default ImgFull;
