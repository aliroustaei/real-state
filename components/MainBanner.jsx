import { Box, Heading, Flex, Text, Button, Show } from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import banner from "../assets/images/banner2.jpg";

const MainBanner = () => {
  return (
    <Box bg="#1f1f24" mt="-62px" mb="100px">
      <Flex
        className="container"
        height="100vh"
        justifyContent="center"
        alignItems="center"
        position="relative"
      >
        <Box textAlign="center">
          <Heading as="h1" size="xl" color="#fdfdfd">
            Find Real Estate and Get Your Dream Space
          </Heading>
          <Text color="gray.400" mt="8" fontSize="lg" fontWeight="500">
            Buy or Rent comfortabel and beautiful houses in many place
          </Text>
          <Flex justifyContent="center" mt="8" gap="5" flexWrap="wrap">
            <Link href="/search?purpose=for-sale" passHref>
              <Button
                bg="blue.600"
                color="#fdfdfd"
                border="2px solid #2b6cb0"
                size="lg"
                _hover={{ bg: "transparent", border: "2px solid #fdfdfd" }}
              >
                Buy Property
              </Button>
            </Link>
            <Link href="/search?purpose=for-rent" passHref>
              <Button
                bg="transparent"
                border="2px solid #fdfdfd"
                color="#fdfdfd"
                size="lg"
                _hover={{ bg: "#2b6cb0", border: "2px solid #2b6cb0" }}
              >
                Rent Property
              </Button>
            </Link>
          </Flex>
        </Box>
        <Show above="sm">
          <Box
            position="absolute"
            bottom="-58"
            left="5%"
            rounded="20"
            overflow="hidden"
            boxShadow="2xl"
            maxHeight="250px"
          >
            <Image alt="" src={banner} width={350} height={250} />
          </Box>
        </Show>
      </Flex>
    </Box>
  );
};

export default MainBanner;
