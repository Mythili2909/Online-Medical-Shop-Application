import React, { useState } from 'react';
import { AppBar, Box, Button, CssBaseline, Divider, Drawer, IconButton, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate } from 'react-router-dom';
import '../Assets/Style/nav.css';
import logo from '../Assets/Image/medicalShopLogo1.png';

const drawerWidth = 240;

const navItems = [
    { name: "Home", path: "/" },
    { name: "Login", path: "/login" },
    { name: "Signup", path: "/Register" },
    { name: "About Us", path: "/about" },
    { name: "Products", path: "/product" },
    // { name: "Dashboard", path: "/Dashboard" },
];


const DrawerAppBar = (props) => {
    const { window } = props;
    const [mobileOpen, setMobileOpen] = useState(false);
    const navigate = useNavigate();

    const handleDrawerToggle = () => {
        setMobileOpen((prevState) => !prevState);
    };

    const drawer = (
        <Box onClick={handleDrawerToggle} sx={{ textAlign: 'center' }}>
            <Typography variant="h6" sx={{ my: 2 }}>
                MUI
            </Typography>
            <Divider />
            <List>
                {navItems.map((item, index) => (
                    <ListItem key={item.name} disablePadding>
                        <ListItemButton onClick={() => navigate(item.path)} sx={{ textAlign: 'center' }}>
                            <ListItemText primary={item.name} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    const container = window !== undefined ? () => window().document.body : undefined;

    return (
        <Box sx={{ display: 'flex' }}>
            <CssBaseline />
            <AppBar sx={{ backgroundColor: "rgb(8, 123, 123)" }} component="nav">
                <Toolbar>
                    <IconButton
                        color="inherit"
                        aria-label="open drawer"
                        edge="start"
                        onClick={handleDrawerToggle}
                        sx={{ mr: 2, display: { sm: 'none' } }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Typography
                        variant="h6"
                        component="div"
                        sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
                    >
                        <div className="image"></div>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={logo} alt="Logo" style={{ height: '80px' }} className="img" />
                            <p className="p">CureCart</p>
                        </div>
                    </Typography>
                    <Box sx={{ display: { xs: 'none', sm: 'block' } }}>
                        {navItems.map((item) => (
                            <Button onClick={() => navigate(item.path)} key={item} sx={{ color: '#fff' }}>
                                {item.name}
                            </Button>
                        ))}
                    </Box>
                </Toolbar>
            </AppBar>
            <nav>
                <Drawer
                    container={container}
                    variant="temporary"
                    open={mobileOpen}
                    onClose={handleDrawerToggle}
                    ModalProps={{
                        keepMounted: true,
                    }}
                    sx={{
                        display: { xs: 'block', sm: 'none' },
                        '& .MuiDrawer-paper': { boxSizing: 'border-box', width: drawerWidth },
                    }}
                >
                    {drawer}
                </Drawer>
            </nav>
            <Box component="main" sx={{ p: 3 }}>
                <Toolbar />
            </Box>
        </Box>
    );
};

export default DrawerAppBar;
