import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import Grid from "@material-ui/core/Grid";
import Card from "@material-ui/core/Card";
import CardHeader from "@material-ui/core/CardHeader";
import Avatar from "@material-ui/core/Avatar";
import IconButton from "@material-ui/core/IconButton";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CardActions from "@material-ui/core/CardActions";
import FavoriteIcon from "@material-ui/icons/Favorite";
import ShareIcon from "@material-ui/icons/Share";
import clsx from "clsx";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Collapse from "@material-ui/core/Collapse";
import {makeStyles} from "@material-ui/core/styles";
import {red} from "@material-ui/core/colors";
import {CardActionArea} from "@material-ui/core";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import {boardSelector} from "../../features/BoardsSlice";

const useStyles = makeStyles((theme) => ({
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
        marginBottom: '10%'
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

export function BoardCards() {
    const classes = useStyles();
    const data = useSelector(boardSelector);
    const boards= data.boards
    // const data = boardState.boards.data;
    console.log("blah",boards)
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div style={{width: '100%'}}>
            <Grid container style={{width: '100%'}}>
                {boards.map((board) => (
                    <Grid item key={board} xs={12} sm={6} lg={3} xl={2}>
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
                                title={board.title}
                                subheader={board.time_stamp}
                            />
                            <Link to={board.username +'/' + board.slug} component={CardActionArea}>
                            <CardContent style={{backgroundColor: board.color, overflow:"hidden"}}>
                                <div style={{color: "salmon", position: 'relative', width: '119px', height: '150px'}}>
                                    <span style={{
                                        fontWeight: "bold",
                                        fontSize: '16em',
                                        display: "inline",
                                        color: "lavenderblush",
                                        position:"absolute",
                                        marginTop:'-48%'
                                    }}>
                                        {board.title.charAt(0)}
                                    </span>
                                </div>
                            </CardContent>
                            </Link>
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
                                    <Typography paragraph>
                                        {board.description}
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}
