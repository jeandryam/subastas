import { Box } from '@chakra-ui/react';

const Layout = ({ children }) => {
  return (
    <Box
   backgroundColor="#E9E9E9"
      //backgroundImage="url('https://i.postimg.cc/D0SdgpSk/Group-84.png')"
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight="100vh"
    >
      {children}
    </Box>
  );
};

export default Layout;