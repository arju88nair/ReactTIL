import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import logo from "../../resources/images/The Infinite BookShelf(1).png";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    mainFeaturedPost: {
        position: 'relative',
        backgroundColor: theme.palette.grey[800],
        color: theme.palette.common.white,
        marginBottom: theme.spacing(4),
        backgroundImage: 'url(https://source.unsplash.com/random)',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
    },
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        background: 'transparent'
    },
    typography: {
        textAlign: "center"
    }
}));

export function HeroBanner() {
    const classes = useStyles();

    return (
        <Container maxWidth="lg">
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={12} sm={8} justify="flex-start" alignItems="flex-start">
                    <img className={classes.img} alt="complex" src={logo}/>
                </Grid>
                <Grid item xs={12} sm={4} alignItems="center" justify="center">
                    <div className={classes.typography}>
                        <Typography variant="h2" noWrap style={{fontWeight: "bold"}}>
                            Save.
                        </Typography>
                    </div>
                    <div className={classes.typography}>
                        <Typography variant="h2" noWrap style={{fontWeight: "bold"}}>
                            Organise.
                        </Typography>
                    </div>
                    <div className={classes.typography}>
                        <Typography variant="h2" noWrap style={{fontWeight: "bold"}}>
                            Grow.
                        </Typography>
                    </div>
                    <div className={classes.typography}>
                        <p   style={{fontWeight: "bold",color: 'var(--color-text)'}}>
                            Blahdiblah bakd djdndjn
                            Blahdiblah bakd djdndjn
                            Blahdiblah bakd djdndjn
                        </p>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={3}>
                <Grid item xs={12} sm={6} justify="flex-end" alignItems="flex-end">
                    <Button variant="contained"
                            style={{
                                background: 'var(--color-button)',
                                color: 'white', fontWeight: "600"
                            }}
                            component={Link} to="/register">
                        Start Shelving
                    </Button>
                </Grid>
                <Grid item xs={12} sm={6} justify="flex-end" alignItems="flex-end">
                    <Button variant="contained"
                            style={{
                                background: 'var(--color-button)',
                                color: 'white', fontWeight: "600"
                            }}
                            component={Link} to="/register">
                        Start Shelving
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}