import Link from "next/link";
import { useRef } from "react";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Button,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  DrawerHeader,
  DrawerBody,
  DrawerFooter,
  Text,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import { AiOutlineHome, AiOutlineMenu } from "react-icons/ai";
import { CgShoppingBag } from "react-icons/cg";

const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <Box className="container" zIndex="99">
      <Flex
        p="2"
        borderBottom="1px"
        borderColor="gray.300"
        justifyContent="space-between"
      >
        <Box fontSize="3xl" color="blue.400" fontWeight="bold">
          <Link href="/" paddingLeft="2">
            RealState
          </Link>
        </Box>

        <Box>
          <IconButton
            variant="unstyled"
            _focus={{}}
            ref={btnRef}
            onClick={onOpen}
            icon={<AiOutlineMenu size="large" color="#CBD5E0" />}
          />
          <Drawer
            isOpen={isOpen}
            placement="right"
            onClose={onClose}
            finalFocusRef={btnRef}
          >
            <DrawerOverlay />
            <DrawerContent>
              <DrawerCloseButton variant="unstyled" _focus={{}} />
              <DrawerHeader>Menu</DrawerHeader>

              <DrawerBody>
                <Link href="/" passHref>
                  <Flex
                    gap="5"
                    p="8px"
                    mb="15px"
                    rounded="5px"
                    alignItems="flex-start"
                    _hover={{ bg: "#E2E8F0" }}
                    cursor="pointer"
                  >
                    <AiOutlineHome size="25px" color="#3182ce" />

                    <Text fontSize="lg" fontWeight="medium">
                      Home
                    </Text>
                  </Flex>
                </Link>

                <Link href="/search" passHref>
                  <Flex
                    gap="5"
                    p="8px"
                    mb="15px"
                    rounded="5px"
                    alignItems="flex-start"
                    _hover={{ bg: "#E2E8F0" }}
                    cursor="pointer"
                  >
                    <BsSearch size="25px" color="#3182ce" />

                    <Text fontSize="lg" fontWeight="medium">
                      Search
                    </Text>
                  </Flex>
                </Link>

                <Link href="/search?purpose=for-sale" passHref>
                  <Flex
                    gap="5"
                    p="8px"
                    mb="15px"
                    rounded="5px"
                    alignItems="flex-start"
                    _hover={{ bg: "#E2E8F0" }}
                    cursor="pointer"
                  >
                    <CgShoppingBag size="25px" color="#3182ce" />

                    <Text fontSize="lg" fontWeight="medium">
                      Buy Property
                    </Text>
                  </Flex>
                </Link>

                <Link href="/search?purpose=for-rent" passHref>
                  <Flex
                    gap="5"
                    p="8px"
                    mb="15px"
                    rounded="5px"
                    alignItems="flex-start"
                    _hover={{ bg: "#E2E8F0" }}
                    cursor="pointer"
                  >
                    <FiKey size="25px" color="#3182ce" />

                    <Text fontSize="lg" fontWeight="medium">
                      Rent Property
                    </Text>
                  </Flex>
                </Link>
              </DrawerBody>
            </DrawerContent>
          </Drawer>
        </Box>
      </Flex>
    </Box>
  );
};

export default Navbar;
