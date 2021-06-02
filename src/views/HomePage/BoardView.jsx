import Typography from "@material-ui/core/Typography";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Grid from "@material-ui/core/Grid";
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import MenuItem from "@material-ui/core/MenuItem";
import ControlPointIcon from "@material-ui/icons/ControlPoint";
import Drawer from "@material-ui/core/Drawer";
import {Box} from "@material-ui/core";
import FacebookIcon from "@material-ui/icons/Facebook";
import TwitterIcon from "@material-ui/icons/Twitter";
import Button from "@material-ui/core/Button";
import Divider from "@material-ui/core/Divider";
import {Board} from "./Boards";
import {miscActions} from "../../_actions";
import {useDispatch} from "react-redux";
import {BoardSkeleton} from "../Components/BoardSkeleton";

const useStyles = makeStyles((theme) => ({
    // necessary for content to be below app bar
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.secondary.main,
        padding: theme.spacing(3),
    },
    formControl: {
        margin: theme.spacing(1),
        minWidth: 200,
        backgroundColor: 'white'
    },
    createNew: {},
    addButtonTop: {
        color: '#333333',
        fontWeight: 'bold',
        height: 45,
        width: 45,
        paddingBottom: '6%',
        alignSelf: "center"
    },
    button: {
        background: theme.palette.button.secondary,
        color: 'white',
        borderColor: theme.palette.button.secondary,
        borderRadius: '26px',
        textTransform: 'capitalize',
        fontWeight: 900,
        padding:'0.85em',
        '&:hover': {
            background: theme.palette.button.hover,
        },

    }
}));

export function BoardView() {
    const classes = useStyles();
    const [age, setAge] = React.useState('');
    const handleChange = (event) => {
        setAge(event.target.value);
    };
    const dispatch = useDispatch();

    const handleBoardModal = () => {
        dispatch(miscActions.openBoardModal(true));
    };


    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <Grid container spacing={3} style={{marginBottom:'1em'}}>
                <Grid item xs={12} sm={6}>
                    <Typography style={{marginBottom: '1%',fontWeight:"bold"}} variant="h5" gutterBottom>Your Boards</Typography>

                    {/*<FormControl variant="outlined" className={classes.formControl}>*/}
                    {/*    <InputLabel id="board-sort">Recent Boards</InputLabel>*/}
                    {/*    <Select*/}
                    {/*        labelId="board-sort"*/}
                    {/*        id="board-sort"*/}
                    {/*        onChange={handleChange}*/}
                    {/*        label="Recent Boards"*/}
                    {/*    >*/}
                    {/*        <MenuItem value="">*/}
                    {/*            <em>None</em>*/}
                    {/*        </MenuItem>*/}
                    {/*        <MenuItem value={10}>Ten</MenuItem>*/}
                    {/*        <MenuItem value={20}>Twenty</MenuItem>*/}
                    {/*        <MenuItem value={30}>Thirty</MenuItem>*/}
                    {/*    </Select>*/}
                    {/*</FormControl>*/}
                </Grid>
                <Grid item xs={12} sm={6} container
                      direction="row"
                      justify="flex-end"
                      alignItems="center">
                    <Button
                        className={classes.button}
                        startIcon={<ControlPointIcon/>}
                        onClick={handleBoardModal}
                    >
                        Create new board
                    </Button>
                </Grid>
            </Grid>
            <Divider/>
            {/*<BoardSkeleton/>*/}
            <Board/>
        </main>

    )
}