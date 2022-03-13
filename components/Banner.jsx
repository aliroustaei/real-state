import Image from "next/image";
import { Flex, Box, Text, Button } from "@chakra-ui/react";
import Link from "next/link";

const Banner = ({
  content,
  imageUrl,
  title1,
  title2,
  desc1,
  linkName,
  buttonText,
}) => {
  return (
    <Flex
      flexWrap="wrap"
      justifyContent="center"
      alignItems="center"
      m="10"
      p="10"
      bg="gray.200"
      rounded="20"
    >
      <Box rounded="20" overflow="hidden">
        <Image src={imageUrl} width={500} height={300} alt="banner" />
      </Box>
      <Box p="5">
        <Text color="grey.500" fontSize="sm" fontWeight="medium">
          {content}
        </Text>
        <Text fontSize="3xl" fontWeight="bold">
          {title1} <br /> {title2}
        </Text>
        <Text fontSize="lg" paddingBottom="3" paddingTop="3" color="grey.700">
          {desc1}
        </Text>
        <Button fontSize="xl" colorScheme="blue">
          <Link href={linkName}>{buttonText}</Link>
        </Button>
      </Box>
    </Flex>
  );
};

export default Banner;
