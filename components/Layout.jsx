import Head from "next/head";
import { Box } from "@chakra-ui/react";
//component
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }) => {
  return (
    <>
      <Head>
        <title>Real State App</title>
      </Head>
      <Box m="auto" position="relative">
        <header>
          <Navbar />
        </header>
        <main>{children}</main>
        <footer>
          <Footer />
        </footer>
      </Box>
    </>
  );
};

export default Layout;
