import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import logo from "../../resources/images/Complex dashboard.png";
import Typography from "@material-ui/core/Typography";


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
        maxWidth: '90%',
        background: 'transparent'
    },
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
                <Grid item xs={8} justify="flex-start" alignItems="flex-start">
                    <img className={classes.img} alt="complex" src={logo}/>
                </Grid>
                <Grid item xs={4} alignItems="center">
                    <div>
                        <Typography variant="h2" noWrap style={{fontWeight: "bold"}}>
                            Savel.
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="h2" noWrap style={{fontWeight: "bold"}}>
                            Organise.
                        </Typography>
                    </div>
                    <div>
                        <Typography variant="h2" noWrap style={{fontWeight: "bold"}}>
                            Grow.
                        </Typography>
                    </div>
                </Grid>
            </Grid>
        </Container>
    );
}
