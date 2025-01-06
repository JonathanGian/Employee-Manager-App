import { Outlet} from "react-router-dom";

import { Box } from '@mui/material';
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";



const Root = () => {


      return (
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100vh', 
          }}
        >
     
          <Header />
    
          {/* Main Content */}
          <Box
            component="main"
            sx={{
              flex: 1, 
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: 2,
              backgroundColor: '#f5f5f5',
            }}
          >
          <Outlet/>
          </Box>
    
          <Footer />
        </Box>
      );
    }

export default Root;