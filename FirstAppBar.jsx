import React,{useState} from "react";
import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';

function FirstAppBar() {
    const [value, setValue] = useState()
  return (
    <>
      <AppBar>
        <Toolbar>
          <ShoppingCartCheckoutIcon />
          <Tabs sx={{margin:"auto"}} textColor="inherit" value={value} indicatorColor="secondary" onChange={(e,val)=>{
                setValue(val)
          }}>
            <Tab></Tab>
            <Tab label="Home"></Tab>
            <Tab label="About"></Tab>
            <Tab label="Register"></Tab>
            
          </Tabs>
          <Button sx={{background:"blue" }} variant="contained">login</Button>
        </Toolbar>
      </AppBar>
    </>     
  );
}

export default FirstAppBar;
