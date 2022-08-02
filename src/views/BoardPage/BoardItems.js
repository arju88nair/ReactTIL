import * as React from 'react';
import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import Grid from "@mui/material/Grid";
import {CardActionArea} from "@mui/material";
import {useEffect, useState} from "react";
import {closeSpinner, openSpinner} from "../../features/MiscSlice";
import {useDispatch, useSelector} from "react-redux";
import {useParams} from 'react-router-dom'
import {ByBoard, byBoardSelector} from "../../features/ByBoardSilce";
import {error} from "../../features/AlertSlice";
import {clearByBoardState} from "../../features/ByBoardSilce";
import {boardSelector, getBoards} from "../../features/BoardsSlice";
import {BoardSkeleton} from "../Components/BoardSkeleton";
import BoardCards from "../HomePage/BoardCards";
import Button from "@mui/material/Button";
import CachedIcon from "@mui/icons-material/Cached";

const ExpandMore = styled((props) => {
    const {expand, ...other} = props;
    return <IconButton {...other} />;
})(({theme, expand}) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
    }),
}));

const handleDrawerToggle = (event) => {

    // you can do all sorts of Css change by this way
    event.target.element.class = "newGreenColor";
};

function ErrorRefresh() {
    const dispatch = useDispatch();
    const handleErrorRefresh = (event) => {
        dispatch(ByBoard());
    };

    // TODO Fix error refresh rendering
    return (
        <Grid container
              direction="column"
              justify="center"
              alignItems="center" style={{marginTop: '20%'}}>
            <Typography gutterBottom variant="h7">
                Something went wrong.Please Try again
            </Typography>
            <Button variant="contained"
                    startIcon={<CachedIcon/>}
                    onClick={handleErrorRefresh}>Retry</Button>
        </Grid>
    )
}


function CardsComponent() {
    const data = useSelector(byBoardSelector);
    const boardItems = data.byBoardItems

    return (
        <Grid container
              direction="row"
              alignItems="center" spacing={3}>
            {boardItems.map((board, index) => (
                <Grid item>
                    <Card sx={{maxWidth: 280, minWidth: 280, minHeight: 320, maxHeight: 320, display: 'flex',}} style={{
                        minWidth: 260,
                        justifyContent: 'space-between', display: 'flex',
                        flexDirection: 'column', padding: '2%', boxShadow: "5px 5px 11px 0px rgba(0,0,0,0.75)",
                        WebkitBoxShadow: "5px 5px 11px 0px rgba(0,0,0,0.75)",
                        MozBoxShadow: "5px 5px 11px 0px rgba(0,0,0,0.75)",
                    }}>

                        <CardActionArea onClick={handleDrawerToggle}>

                            <CardHeader
                                // action={
                                //     <IconButton aria-label="settings">
                                //         <MoreVertIcon/>
                                //     </IconButton>
                                // }
                                titleTypographyProps={{variant: 'h7'}}
                                title={board.title}
                                subheader="September 14, 2016"
                            />

                            <CardContent>
                                <Typography variant="body2" color="text.secondary">
                                    {board.content}
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        {/*<CardMedia*/}
                        {/*    component="img"*/}
                        {/*    height="194"*/}
                        {/*    image="/static/images/cards/paella.jpg"*/}
                        {/*    alt="Paella dish"*/}
                        {/*/>*/}
                        <CardActions disableSpacing>
                            <IconButton aria-label="add to favorites">
                                <FavoriteIcon/>
                            </IconButton>
                            <IconButton aria-label="share">
                                <ShareIcon/>
                            </IconButton>
                        </CardActions>
                    </Card>
                </Grid>
            ))
            }
        </Grid>
    )
}

export default function BoardItems(props) {

    const [expanded, setExpanded] = React.useState(false);
    const dispatch = useDispatch();
    const {boardId} = useParams()


    const {isByBoardGetError, isByBoardGetSuccess, isByBoardFetching, errorMessage, byBoardItems} = useSelector(
        byBoardSelector
    );

    useEffect(() => {
        dispatch(openSpinner())
        dispatch(ByBoard(boardId));
        if (isByBoardGetSuccess) {
            dispatch(closeSpinner())
            console.log(byBoardItems)
        }
        if (isByBoardGetError) {
            dispatch(error(errorMessage))
            dispatch(closeSpinner())
        }
    }, [isByBoardGetError, isByBoardGetSuccess]);

    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (

        <div>
            {isByBoardFetching && [...Array(3)].map((e, i) => <BoardSkeleton key={i}/>)}
            {isByBoardGetError && <ErrorRefresh/>}
            {isByBoardGetSuccess && <CardsComponent/>}
            {/*{[...Array(12)].map((e, i) => <CardsComponent key={i}/>)}*/}
        </div>

    );
}
