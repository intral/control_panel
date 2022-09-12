import React, { Component } from 'react';
import { AppBar } from '@mui/material';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import { Link } from "react-router-dom";
import SvgIcon from '@mui/material/SvgIcon';
class Home extends Component {
    constructor(props) {
        super(props);
    };

    render() {
        return (
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        <IconButton
                            size="large"
                            edge="start"
                            color="inherit"
                            aria-label="menu"
                            component={Link}
                            to='/'
                            sx={{ mr: 2 }}
                        >
                            <SvgIcon>
                                <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                            </SvgIcon>
                        </IconButton>
                        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                            <Button component={Link} to="/Service" color="inherit">Сервисы</Button>
                        </Typography>

                    </Toolbar>
                </AppBar>
            </Box>
        );
    }
}
export default Home;