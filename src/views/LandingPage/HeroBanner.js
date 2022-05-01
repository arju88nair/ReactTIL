import React from 'react';
import logo from "../../resources/images/The Infinite BookShelf(1).png";
import {Link} from "react-router-dom";
import {Button, Container, Grid} from "@mui/material";
import Typography from "@mui/material/Typography";
import {styled} from '@mui/material/styles';

const BannerImage = styled("img")(({theme}) => ({
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    background: 'transparent'
}));

const HeroButtons = styled("div")(({theme}) => ({
    marginTop: theme.spacing(4),
}));

export function HeroBanner() {
    return (
        <Container maxWidth="lg">
            <Grid
                container
                direction="row"
                justify="center"
                alignItems="center"
            >
                <Grid item xs={12} sm={8} justify="flex-start" alignItems="flex-start">
                    <BannerImage alt="complex" src={logo}/>
                </Grid>
                <Grid item xs={12} sm={4} alignItems="center" justify="center">
                    <div>
                        <Typography variant="h2" noWrap style={{fontWeight: "bold"}}>
                            Save.
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
                    <div>
                        <p style={{fontWeight: "bold", color: 'var(--color-text)'}}>
                            Shelved helps in becoming a powerful knowledge repository and a centralised bookmark tool.
                        </p>
                    </div>
                </Grid>
            </Grid>
            <Grid container spacing={4}
                  direction="row"
                  justifyContent="center"
                  alignItems="center"
            >
                <Grid item>
                    <Button variant="contained"
                            style={{
                                textDecoration: 'none', textTransform: "none",
                                fontWeight: "600", fontSize: '1.2em'
                            }}
                            component={Link} to="/register">
                        Start Shelving
                    </Button>
                </Grid>
                <Grid item>
                    <Button variant="contained"
                            style={{
                                fontWeight: "600", textDecoration: 'none', textTransform: "none",
                                fontSize: '1.2em'
                            }}
                            component={Link}
                            to="/register">
                        Learn More
                    </Button>
                </Grid>
            </Grid>
        </Container>
    );
}
