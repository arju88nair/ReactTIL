import React, {useEffect} from 'react';
import {makeStyles} from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import {red} from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from "@material-ui/core/Grid";
import {BoardSkeleton} from "../Components/BoardSkeleton";
import {useDispatch, useSelector} from "react-redux";
import {boardActions} from "../../_actions/boardActions";
import Button from "@material-ui/core/Button";
import Container from "@material-ui/core/Container";

const useStyles = makeStyles((theme) => ({
    cateContainer: {
        marginTop: '1%',
        // display: 'flex',
        // verticalAlign: 'middle',
        // height:'100%'
    },
    media: {
        height: 0,
        paddingTop: '56.25%', // 16:9
    },
    expand: {
        transform: 'rotate(0deg)',
        marginLeft: 'auto',
        transition: theme.transitions.create('transform', {
            duration: theme.transitions.duration.shortest,
        }),
    },
    expandOpen: {
        transform: 'rotate(180deg)',
    },
    avatar: {
        backgroundColor: red[500],
    },
    card: {
        width: 240,
        minHeight: 320,
        // maxHeight: 300,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        backgroundColor: theme.palette.primary.main,
        color: theme.palette.text.primary,
        marginBottom:'10%'
    },
    button: {
        background: theme.palette.button.primary,
        color: theme.palette.text.primary,
        borderColor: theme.palette.button.secondary,
        borderRadius: '26px',
        textTransform: 'capitalize',
        fontWeight: 900,
        padding:'0.85em',
        '&:hover': {
            background: theme.palette.button.hover,
        },
    },
    cardMedia: {
        paddingTop: '56.25%', // 16:9
    },
    cardContent: {
        flexGrow: 1,
    },
    cardGrid: {
        paddingTop: theme.spacing(8),
        paddingBottom: theme.spacing(8),
    },
}));

function ErrorRefresh() {
    const classes = useStyles();
    const dispatch = useDispatch();
    let cards = [];
    const handleErrorRefresh = (event) => {
        cards = dispatch(boardActions.get());
    };
    console.log(cards)
    return (
        <Grid container
              direction="column"
              justify="center"
              alignItems="center" xs={12} style={{marginTop:'20%'}}>
            <Typography gutterBottom variant="body2">
                Something went wrong.Please Try again
            </Typography>
            <Button  className={classes.button}   onClick={handleErrorRefresh}>Retry</Button>
        </Grid>
    )
}
const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function BoardCards() {
    const classes = useStyles();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div>
            {/* End hero unit */}
            <Grid container style={{width:'100%'}}>
                {cards.map((card) => (
                    <Grid item key={card}  xs={12} sm={6} lg={3} xl={2}>
                        <Card className={classes.card}>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" className={classes.avatar}>
                                        R
                                    </Avatar>
                                }
                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon/>
                                    </IconButton>
                                }
                                title="Shrimp and Chorizo Paella"
                                subheader="September 14, 2016"
                            />

                            <CardContent>
                                <Typography variant="body2" component="p">
                                    This impressive paella is a perfect party dish and a fun meal to cook together with
                                    your
                                    guests. Add 1 cup of frozen peas along with the mussels, if you like.
                                </Typography>
                            </CardContent>
                            <CardActions disableSpacing>
                                <IconButton aria-label="add to favorites">
                                    <FavoriteIcon/>
                                </IconButton>
                                <IconButton aria-label="share">
                                    <ShareIcon/>
                                </IconButton>
                                <IconButton
                                    className={clsx(classes.expand, {
                                        [classes.expandOpen]: expanded,
                                    })}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon/>
                                </IconButton>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside
                                        for 10
                                        minutes.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>    )
}

export function Board() {
    const classes = useStyles();
    const boardState = useSelector(state => state.boards);
    const dispatch = useDispatch();
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };
    useEffect(() => {
        dispatch(boardActions.get());
    }, []);


    return (
        <div className={classes.cateContainer}>
            <Grid container direction="row"
                  justify="flex-start"
                  alignItems="center" spacing={3}>
                {boardState.loading && Array(6).fill(<BoardSkeleton/>)}
                {/*{boardState.error && <ErrorRefresh/>}*/}
                {boardState.boards && <BoardCards/>}
            </Grid>
        </div>
    );
}
