import { Flex } from "@chakra-ui/react";
import ImgGroup from "./components/ImgGroup";
import { imageGroup, ImageFull } from "../../../../utils/ImageImports";
import ImgFull from "./components/ImgFull";

const Colection = () => {
  return (
    <Flex flexDir={"column"} gap={1}>
      <ImgGroup
        img1={imageGroup.img1}
        img2={imageGroup.img2}
        img3={imageGroup.img3}
      />
      <ImgGroup
        img1={imageGroup.img4}
        img2={imageGroup.img5}
        img3={imageGroup.img6}
      />
      <ImgFull img={ImageFull.imgFull1} />
    </Flex>
  );
};
export default Colection;
