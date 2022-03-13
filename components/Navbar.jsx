import Link from "next/link";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  Flex,
  Box,
  Spacer,
} from "@chakra-ui/react";
import { FcMenu } from "react-icons/fc";
import { BsSearch } from "react-icons/bs";
import { FiKey } from "react-icons/fi";
import { AiOutlineHome } from "react-icons/ai";
import { CgShoppingBag } from "react-icons/cg";

const Navbar = () => (
  <Flex p="2" borderBottom="1px" borderColor="gray.200">
    <Box fontSize="3xl" color="blue.400" fontWeight="bold">
      <Link href="/" paddingLeft="2">
        RealState
      </Link>
    </Box>
    <Spacer />
    <Box>
      <Menu>
        <MenuButton
          as={IconButton}
          icon={<FcMenu />}
          variant="outline"
          color="red.400"
        />
        <MenuList>
          <Link href="/" passHref>
            <MenuItem icon={<AiOutlineHome size="20px" color="#3182ce" />}>
              Home
            </MenuItem>
          </Link>
          <Link href="/search" passHref>
            <MenuItem icon={<BsSearch size="20px" color="#3182ce" />}>
              Search
            </MenuItem>
          </Link>
          <Link href="/search?purpose=for-sale" passHref>
            <MenuItem icon={<CgShoppingBag size="20px" color="#3182ce" />}>
              Buy Property
            </MenuItem>
          </Link>
          <Link href="/search?purpose=for-rent" passHref>
            <MenuItem icon={<FiKey size="20px" color="#3182ce" />}>
              Rent Property
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
);

export default Navbar;
