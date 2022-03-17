import { useRouter } from "next/router";
import Image from "next/image";
import {
  Box,
  Flex,
  Text,
  Icon,
  Collapse,
  Button,
  Center,
} from "@chakra-ui/react";
import { useDisclosure } from "@chakra-ui/react";
import noResult from "../assets/images/noresult.svg";
import { BsSearch } from "react-icons/bs";
//Api
import { fetchApi } from "../utils/fetchApi";
//components
import SearchFilters from "../components/SearchFilters";
import Property from "../components/Property";

const Search = ({ properties }) => {
  const { isOpen, onToggle } = useDisclosure();
  const router = useRouter();
  return (
    <Box className="container" mt="50px">
      <Center width="full">
        <Button
          rightIcon={<BsSearch />}
          onClick={onToggle}
          boxShadow="xl"
          bg="blue.600"
          color="#fdfdfd"
          border="2px solid #2b6cb0"
          size="lg"
          _hover={{
            bg: "transparent",
            border: "2px solid #2b6cb0",
            color: "#2b6cb0",
          }}
          _focus={{}}
        >
          Search Property By Filters
        </Button>
      </Center>
      <Collapse in={isOpen} animateOpacity>
        <SearchFilters />
      </Collapse>
      <Text fontSize="2xl" p="4" fontWeight="bold">
        Property {router.query.purpose}
      </Text>
      <Flex flexWrap="wrap">
        {properties.map((property) => (
          <Property key={property.id} property={property} />
        ))}
      </Flex>
      {properties.length === 0 && (
        <Flex
          justifyContent="center"
          alignItems="center"
          flexDirection="column"
        >
          <Image alt="no result" src={noResult} />
          <Text fontSize="2xl" marginTop="3">
            No Result Found
          </Text>
        </Flex>
      )}
    </Box>
  );
};

export async function getServerSideProps({ query }) {
  const purpose = query.purpose || "for-rent";
  const rentFrequency = query.rentFrequency || "yearly";
  const minPrice = query.minPrice || "0";
  const maxPrice = query.maxPrice || "1000000";
  const roomsMin = query.roomsMin || "0";
  const bathsMin = query.bathsMin || "0";
  const sort = query.sort || "price-desc";
  const areaMax = query.areaMax || "35000";
  const locationExternalIDs = query.locationExternalIDs || "5002";
  const categoryExternalID = query.categoryExternalID || "4";

  const data = await fetchApi(
    `/properties/list?locationExternalIDs=${locationExternalIDs}&purpose=${purpose}&categoryExternalID=${categoryExternalID}&bathsMin=${bathsMin}&rentFrequency=${rentFrequency}&priceMin=${minPrice}&priceMax=${maxPrice}&roomsMin=${roomsMin}&sort=${sort}&areaMax=${areaMax}`
  );

  return {
    props: {
      properties: data?.hits,
    },
  };
}

export default Search;
