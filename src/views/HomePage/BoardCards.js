import * as React from 'react';
import {styled} from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Collapse from '@mui/material/Collapse';
import Avatar from '@mui/material/Avatar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import {red} from '@mui/material/colors';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import {useSelector} from "react-redux";
import {boardSelector} from "../../features/BoardsSlice";
import Grid from "@mui/material/Grid";
import {CardActionArea} from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';

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

const CardContainer = styled("Card")(({theme}) => ({
    width: 240,
    minHeight: 320,
    // maxHeight: 300,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // backgroundColor: 'grey',
    // color: theme.palette.text.primary,
    marginBottom: '10%'
}));


export default function BoardCards() {
    const [expanded, setExpanded] = React.useState(false);
    const data = useSelector(boardSelector);
    const boards = data.userBoards
    console.log("boards", boards)
    const handleExpandClick = () => {
        setExpanded(!expanded);
    };

    return (
        <div style={{width: '100%', marginTop: '2%'}}>
            <Grid container spacing={3}>
                {boards.map((board, index) => (
                    // xs={12} sm={6} md={4}
                    <Grid item key={index}>
                        <Card sx={{maxWidth: 300, display: 'flex', flexDirection: 'column'}} style={{minWidth: 280,
                           justifyContent: 'space-between', display: 'flex',
                            flexDirection: 'column',
                        }}>
                            {/*<Link to="/Blog" component={CardActionArea} style={{textDecoration:'none'}}>*/}
                                <CardHeader

                                action={
                                    <IconButton aria-label="settings">
                                        <MoreVertIcon/>
                                    </IconButton>
                                }
                                title={board.title}
                                subheader={board.time_stamp}
                                titleTypographyProps={{variant:'h8' }}
                                />
                            {/*<CardMedia*/}
                            {/*    component="img"*/}
                            {/*    height="194"*/}
                            {/*    image="/static/images/cards/paella.jpg"*/}
                            {/*    alt="Paella dish"*/}
                            {/*/>*/}
                            <CardActionArea component={RouterLink} to={`/board/2`}>
                            <CardContent style={{backgroundColor: board.color, overflow: "hidden"}}>
                                <div style={{
                                    color: "salmon",
                                    position: 'relative',
                                    width: '119px',
                                    height: '150px'
                                }}>
                                    <span style={{
                                        fontWeight: "bold",
                                        fontSize: '16em',
                                        display: "inline",
                                        color: "lavenderblush",
                                        position: "absolute",
                                        marginTop: '-48%'
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
                                <ExpandMore
                                    expand={expanded}
                                    onClick={handleExpandClick}
                                    aria-expanded={expanded}
                                    aria-label="show more"
                                >
                                    <ExpandMoreIcon/>
                                </ExpandMore>
                            </CardActions>
                            <Collapse in={expanded} timeout="auto" unmountOnExit>
                                <CardContent>
                                    <Typography paragraph>Method:</Typography>
                                    <Typography paragraph>
                                        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set
                                        aside for 10 minutes.
                                    </Typography>
                                    <Typography paragraph>
                                        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over
                                        medium-high heat. Add chicken, shrimp and chorizo, and cook, stirring
                                        occasionally until lightly browned, 6 to 8 minutes. Transfer shrimp to a
                                        large plate and set aside, leaving chicken and chorizo in the pan. Add
                                        pimentón, bay leaves, garlic, tomatoes, onion, salt and pepper, and cook,
                                        stirring often until thickened and fragrant, about 10 minutes. Add
                                        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
                                    </Typography>
                                    <Typography paragraph>
                                        Add rice and stir very gently to distribute. Top with artichokes and
                                        peppers, and cook without stirring, until most of the liquid is absorbed,
                                        15 to 18 minutes. Reduce heat to medium-low, add reserved shrimp and
                                        mussels, tucking them down into the rice, and cook again without
                                        stirring, until mussels have opened and rice is just tender, 5 to 7
                                        minutes more. (Discard any mussels that don&apos;t open.)
                                    </Typography>
                                    <Typography>
                                        Set aside off of the heat to let rest for 10 minutes, and then serve.
                                    </Typography>
                                </CardContent>
                            </Collapse>
                        </Card>
                    </Grid>
                ))}
            </Grid>
        </div>
    );
}
