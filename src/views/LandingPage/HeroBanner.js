import React from 'react';
import {makeStyles, useTheme} from '@material-ui/core/styles';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import logo from "../../resources/images/The Infinite BookShelf(1).png";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import {Link} from "react-router-dom";


const useStyles = makeStyles((theme) => ({
    img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        background: 'transparent'
    },
    typography: {
        textAlign: "center"
    },
    heroButtons: {
        marginTop: theme.spacing(4),
    },
}));

export function HeroBanner() {
    const classes = useStyles();
    const theme = useTheme();

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
                        <p style={{fontWeight: "bold", color: 'var(--color-text)'}}>
                            Shelved helps in becoming a powerful knowledge repository and a centralised bookmark tool.
                        </p>
                    </div>
                </Grid>
            </Grid>
            <div className={classes.heroButtons}>
                <Grid container spacing={2} justify="center">
                    <Grid item>
                        <Button variant="contained"
                                style={{
                                    background: theme.palette.button.primary,
                                    color: theme.palette.text.primary,textDecoration: 'none',textTransform: "none",
                                     fontWeight: "600", fontSize: '1.2em'
                                }}
                                component={Link} to="/register">
                            Start Shelving
                        </Button>
                    </Grid>
                    <Grid item>
                        <Button variant="contained"
                                style={{fontWeight: "600", textDecoration: 'none',textTransform: "none",background: theme.palette.text.primary,
                                    color: theme.palette.button.primary, fontSize: '1.2em'}}
                                component={Link}
                                to="/register">
                            Learn More
                        </Button>
                    </Grid>
                </Grid>
            </div>
        </Container>
    );
}
