import { Flex, Image } from "@chakra-ui/react";
import { IimgGroup } from "./types";

const ImgGroup: IimgGroup = ({ img1, img2, img3 }) => {
  return (
    <Flex gap={1}>
      <Image src={img1} />
      <Image src={img2} />
      <Image src={img3} />
    </Flex>
  );
};

export default ImgGroup;
