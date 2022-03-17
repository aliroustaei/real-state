import buyHome from "../assets/images/buyhome.jpg";
import rentHome from "../assets/images/renthome.jpg";
import { Box, Flex } from "@chakra-ui/react";
//components
import Banner from "../components/Banner";
import Property from "../components/Property";
import MainBanner from "../components/MainBanner";
//Api
import { fetchApi } from "../utils/fetchApi";

export default function Home({ propertiesForRent, propertiesForSale }) {
  return (
    <Box>
      <MainBanner />
      <Banner
        content="RENT A HOME"
        title1="Rental Homes for"
        title2="Everyone"
        desc1=" Explore from Apartments, builder floors, villas"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imageUrl={rentHome}
      />
      <div className="container">
        <Flex flexWrap="wrap" justifyContent="center">
          {propertiesForRent.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </Flex>
      </div>
      <Banner
        content="BUY A HOME"
        title1=" Find, Buy & Own Your"
        title2="Dream Home"
        desc1=" Explore from Apartments, land, builder floors,"
        desc2=" villas and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imageUrl={buyHome}
      />
      <div className="container">
        <Flex flexWrap="wrap" justifyContent="center">
          {propertiesForSale.map((property) => (
            <Property property={property} key={property.id} />
          ))}
        </Flex>
      </div>
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
