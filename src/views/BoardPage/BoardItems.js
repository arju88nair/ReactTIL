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
import {clearState, loginUser, userSelector} from "../../features/UserSlice";
import {useDispatch, useSelector} from "react-redux";
import {boardSelector, ByBoard} from "../../features/BoardsSlice";
import { useParams } from 'react-router-dom'
import {error, success} from "../../features/AlertSlice";

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


function CardsComponent() {

    return (
        <Grid item>
            <Card sx={{maxWidth: 260, display: 'flex',}} style={{
                minWidth: 200,
                justifyContent: 'space-between', display: 'flex',
                flexDirection: 'column', padding: '2%', boxShadow: "5px 5px 11px 0px rgba(0,0,0,0.75)",
                WebkitBoxShadow: "5px 5px 11px 0px rgba(0,0,0,0.75)",
                MozBoxShadow: "5px 5px 11px 0px rgba(0,0,0,0.75)",
            }}
            >
                <CardActionArea onClick={handleDrawerToggle}>

                    <CardHeader
                        // action={
                        //     <IconButton aria-label="settings">
                        //         <MoreVertIcon/>
                        //     </IconButton>
                        // }
                        titleTypographyProps={{variant: 'h7'}}
                        title="Shrimp and Chorizo Paella"
                        subheader="September 14, 2016"
                    />

                    <CardContent>
                        <Typography variant="body2" color="text.secondary">
                            This impressive paella is a perfect party dish and a fun meal to cook
                            together with your guests. Add 1 cup of frozen peas along with the mussels,
                            if you like.
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
    )
}

export default function BoardItems(props) {

    const [expanded, setExpanded] = React.useState(false);
    const dispatch = useDispatch();
    const { boardId } = useParams()
    const [data, setData] = useState([]);
    const {isByBoardGetError, isByBoardGetSuccess, isByBoardFetching,errorMessage} = useSelector(
        boardSelector
    );
    useEffect(() => {
        dispatch(openSpinner())
        dispatch(clearState());
        dispatch(ByBoard(boardId));
        if (isByBoardGetSuccess) {
            dispatch(clearState());
            dispatch(success(errorMessage))
            dispatch(closeSpinner())
            // this.props.history.push('/');
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
        <Grid container
              direction="row"
              justifyContent="center"
              alignItems="center" spacing={3}>

            {[...Array(12)].map((e, i) => <CardsComponent key={i}/>)}

        </Grid>
    );
}
