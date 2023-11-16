import { Box } from '@chakra-ui/react';

const Layout = ({ children }) => {
  return (
    <Box
  backgroundColor="FFF"
      //backgroundImage="url('https://i.postimg.cc/Zn6ppkhq/Group-1.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight="100vh"
    >
      {children}
    </Box>
  );
};

export default Layout;