import bannerImage from "../assets/images/banner.jpg";
import { Box, Flex } from "@chakra-ui/react";
//components
import Banner from "../components/Banner";
import Property from "../components/Property";
//Api
import { fetchApi } from "../utils/fetchApi";

export default function Home({ propertiesForRent, propertiesForSale }) {
  console.log(propertiesForRent, propertiesForSale);
  return (
    <Box>
      <Banner
        content="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1=" Explore from Apartments, builder floors, villas"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl={bannerImage}
      />
      <Flex flexWrap="wrap" justifyContent="center">
        {propertiesForRent.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
      <Banner
        content="BUY A HOME"
        title1=" Find, Buy & Own Your"
        title2="Dream Home"
        desc1=" Explore from Apartments, land, builder floors,"
        desc2=" villas and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl={bannerImage}
      />
      <Flex flexWrap="wrap" justifyContent="center">
        {propertiesForSale.map((property) => (
          <Property property={property} key={property.id} />
        ))}
      </Flex>
    </Box>
  );
}

export async function getStaticProps() {
  const propertyForSale = await fetchApi(
    "/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=6"
  );
  const propertyForRent = await fetchApi(
    "/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=6"
  );

  return {
    props: {
      propertiesForSale: propertyForSale?.hits,
      propertiesForRent: propertyForRent?.hits,
    },
  };
}
