import {useDispatch, useSelector} from "react-redux";
import React, {useEffect} from "react";
import {boardActions} from "../../_actions/boardActions";
import Grid from "@material-ui/core/Grid";
import {BoardSkeleton} from "../Components/BoardSkeleton";
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
    const boardState = useSelector(state => state.boards);
    let boards = boardState.boards.data;
    const [expanded, setExpanded] = React.useState(false);
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    const colorSet= ['#E0BBE4','#957DAD', '#D291BC' ,'#FEC8D8' ,'#FFDFD3' , '#EF4056' , '#00CB77' ,'#1CB0A8']
    return (
        <div style={{width: '100%'}}>
            <Grid container style={{width: '100%'}}>
                {boards.map((board) => (
                    <Grid item key={board} xs={12} sm={6} lg={3} xl={2}>
                        <Card className={classes.card}>
                            <CardActionArea
                                onClick={(evt) => {
                                    console.log(evt.target);
                                }}
                            >
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
                            <CardContent style={{backgroundColor: colorSet[Math.floor(Math.random() * colorSet.length)], overflow:"hidden"}}>
                                <div style={{color: "salmon", position: 'relative', width: '119px', height: '150px'}}>
                                    <span style={{
                                        fontWeight: "bold",
                                        fontSize: '16em',
                                        display: "inline",
                                        color: "lavenderblush",
                                        position:"absolute",
                                        marginTop:'-18%'
                                    }}>
                                        {board.title.charAt(0)}
                                    </span>
                                </div>
                            </CardContent>
                            </CardActionArea>
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
