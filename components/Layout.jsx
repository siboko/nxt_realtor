import Footer from "./Footer";
import Navbar from "./Navbar";
const { Box } = require("@chakra-ui/react");
const { default: Head } = require("next/head");

export default function Layout({ children }) {
    return (
      <>
        <Head>
          <title>Real Estate</title>
        </Head>
        <Box maxWidth='1280px' m='auto'>
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
  }