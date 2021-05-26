import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import MoreIcon from '@material-ui/icons/MoreVert';
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";
import Grid from "@material-ui/core/Grid";
import Divider from "@material-ui/core/Divider";
import {Spinner} from "./Spinner";

const useStyles = makeStyles((theme) => ({
    grow: {
        flexGrow: 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    sectionDesktop: {
        display: 'none',
        [theme.breakpoints.up('md')]: {
            display: 'flex',
        },
    },
    sectionMobile: {
        display: 'flex',
        [theme.breakpoints.up('md')]: {
            display: 'none',
        },
    },
    navBarText: {
        textDecoration: 'none',
        color: theme.palette.text.primary,
        textTransform: "none",
        '&:hover': {
            backgroundColor: '#fff',
            color: 'lightgrey',
        },
    },
    button: {

    }
}));

export function PreLoginAppbar() {
    const classes = useStyles();
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = React.useState(null);
    const theme = useTheme();

    const isMenuOpen = Boolean(anchorEl);
    const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

    const handleProfileMenuOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMobileMenuClose = () => {
        setMobileMoreAnchorEl(null);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
        handleMobileMenuClose();
    };

    const handleMobileMenuOpen = (event) => {
        setMobileMoreAnchorEl(event.currentTarget);
    };

    const menuId = 'primary-search-account-menu';
    const renderMenu = (
        <Menu
            anchorEl={anchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={menuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMenuOpen}
            onClose={handleMenuClose}
        >
            <MenuItem onClick={handleMenuClose}>Profile</MenuItem>
            <MenuItem onClick={handleMenuClose}>My account</MenuItem>
        </Menu>
    );

    const mobileMenuId = 'primary-search-account-menu-mobile';
    const renderMobileMenu = (
        <Menu
            anchorEl={mobileMoreAnchorEl}
            anchorOrigin={{vertical: 'top', horizontal: 'right'}}
            id={mobileMenuId}
            keepMounted
            transformOrigin={{vertical: 'top', horizontal: 'right'}}
            open={isMobileMenuOpen}
            onClose={handleMobileMenuClose}
        >
            <MenuItem>
                <Button className={classes.navBarText}
                        style={{fontWeight: "600", backgroundColor: 'transparent',justifyContent: "flex-start"}} component={Link}
                        to="/landing">
                    How it works
                </Button>
            </MenuItem>
            <MenuItem>
                <Button className={classes.navBarText}
                        style={{fontWeight: "600", backgroundColor: 'transparent',justifyContent: "flex-start"}} component={Link}
                        to="/landing">
                    Blog
                </Button>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <Button className={classes.navBarText}
                        style={{fontWeight: "600", backgroundColor: 'transparent',justifyContent: "flex-start"}} component={Link}
                        to="/landing">
                    Pricing
                </Button>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <Button className={classes.navBarText}
                        style={{fontWeight: "600", backgroundColor: 'transparent',justifyContent: "flex-start"}} component={Link}
                        to="/landing">
                    Contact
                </Button>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <Button className={classes.navBarText}
                        style={{fontWeight: "600", backgroundColor: 'transparent',justifyContent: "flex-start"}} component={Link}
                        to="/login">
                    Login
                </Button>
            </MenuItem>
            <MenuItem onClick={handleProfileMenuOpen}>
                <Button className={classes.navBarText}
                        style={{fontWeight: "600", background: theme.palette.button.primary,
                            color: theme.palette.text.primary, justifyContent: "flex-start"}} component={Link}
                        to="/login">
                    Sign Up
                </Button>
            </MenuItem>
        </Menu>
    );

    return (
        <div className={classes.grow}>
            <Spinner/>
            <AppBar position="static">
                <Container maxWidth="lg">
                <Toolbar>
                    <Typography variant="h6" noWrap style={{fontSize:"2em",fontWeight:"bold"}}>
                        Shelved
                    </Typography>
                    <div className={classes.grow}/>
                    <div className={classes.sectionDesktop}>
                        <Grid container alignItems="center" >
                            <Button className={classes.navBarText}
                                    style={{fontWeight: "600", backgroundColor: 'transparent'}} component={Link}
                                    to="/landing">
                                How it works
                            </Button>
                            <Button className={classes.navBarText}
                                    style={{fontWeight: "600", backgroundColor: 'transparent'}} component={Link}
                                    to="/landing">
                                Blog
                            </Button>
                            <Button className={classes.navBarText}
                                    style={{fontWeight: "600", backgroundColor: 'transparent'}} component={Link}
                                    to="/landing">
                                Pricing
                            </Button>
                            <Button className={classes.navBarText}
                                    style={{fontWeight: "600", backgroundColor: 'transparent'}} component={Link}
                                    to="/landing">
                                Contact
                            </Button>
                            <Divider orientation="vertical" flexItem />
                            <Button className={classes.navBarText}
                                    style={{fontWeight: "600", backgroundColor: 'transparent'}} component={Link}
                                    to="/login">
                                Login
                            </Button>
                            <Button variant="contained" className={classes.navBarText}
                                    style={{
                                        background: theme.palette.button.primary,
                                        color: theme.palette.text.primary, fontWeight: "600"
                                    }}
                                    component={Link} to="/register">
                                Sign Ups
                            </Button>
                        </Grid>
                    </div>
                    <div className={classes.sectionMobile}>
                        <IconButton
                            aria-label="show more"
                            aria-controls={mobileMenuId}
                            aria-haspopup="true"
                            onClick={handleMobileMenuOpen}
                            color="inherit"
                        >
                            <MoreIcon/>
                        </IconButton>
                    </div>
                </Toolbar>
                </Container>
            </AppBar>
            {renderMobileMenu}
            {renderMenu}
        </div>
    );
}
