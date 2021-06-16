import React, {useState} from 'react';
import {createMuiTheme, makeStyles, ThemeProvider} from '@material-ui/core/styles';

import {useDispatch, useSelector} from "react-redux";
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import {green} from "@material-ui/core/colors/green";
import {withStyles} from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Grid from "@material-ui/core/Grid";
import {Spinner} from "../Components/Spinner";
import {closeModal, openSpinner} from "../../features/MiscSlice";

const useStyles = makeStyles((theme) => ({
    modal: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },

    root: { },
    paper: {
        backgroundColor: theme.palette.background.paper,
        // border: '2px solid #000',
        borderRadius:'16px',
        boxShadow: theme.shadows[5],
        // padding: theme.spacing(2, 4, 3),
    },
    form: {
        width: '100%', // Fix IE 11 issue.
        paddingBottom: theme.spacing(2),

    },
    modalWindow: {
        bottom: '35%',
        borderRadius:'2em'
    },
    modelTopBottom: {
        backgroundColor: theme.palette.primary.main,
    },
    modelBody: {
        backgroundColor: theme.palette.secondary.main,
    },
    notchedOutline: {
        borderWidth: '1px',
        borderColor: theme.palette.text.primary,
        color: 'rgb(61, 158, 116)',
    },
    cssLabel: {
        color : theme.palette.text.primary
    },
    submit: {
        background: theme.palette.action.primary,
        color: theme.palette.text.light,
        borderColor: theme.palette.action.secondary,
        borderRadius: '26px',
        height: '50px',
        fontWeight: "600",
        '&:hover': {
            background: theme.palette.action.hover,
        },
        alignSelf: 'right'
    },

}));

const styles = (theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(2),
    },
    closeButton: {
        position: 'absolute',
        right: theme.spacing(1),
        top: theme.spacing(1),
        color: theme.palette.grey[500],
    },
});
const themer = createMuiTheme({
    palette: {
        text:'white',
        type:'dark'
    },
});


const DialogTitle = withStyles(styles)((props) => {
    const {children, classes, onClose, ...other} = props;
    return (
        <MuiDialogTitle disableTypography className={classes.root} {...other}>
            <Typography variant="h6">{children}</Typography>
            {onClose ? (
                <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </MuiDialogTitle>
    );
});

const DialogContent = withStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
    },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
    root: {
        margin: 0,
        padding: theme.spacing(1),
    },
}))(MuiDialogActions);


export function BoardModal() {
    const classes = useStyles();
    const modalOpen = useSelector(state => state.misc.boardModal);
    const dispatch = useDispatch();
    const [newBoard, setBoard] = useState({title: '', description: ''});

    const handleClose = () => {
        dispatch(closeModal());
    };

    const handleAddBoard = (e) => {
        e.preventDefault();
        dispatch(openSpinner())
        // dispatch(boardActions.add(newBoard))
    }

    function handleChange(e) {
        const {name, value} = e.target;
        setBoard(newBoard => ({...newBoard, [event.target.name]: event.target.value}));
    }

    return (
        <div>
            <Spinner/>
            <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={modalOpen}
                    className={classes.modalWindow} classes={{
                root: classes.root,
                paper: classes.paper
            }}>
                <form onSubmit={handleAddBoard}>
                    <DialogTitle id="customized-dialog-title" onClose={handleClose} className={classes.modelTopBottom}>
                        <Typography variant="h6" style={{fontWeight:"bold"}}>Add a new Board</Typography>
                    </DialogTitle>
                    <DialogContent dividers className={classes.modelBody}>
                        <Typography gutterBottom>
                            Boards help you to categorise your items
                        </Typography>
                        <Grid container>
                            <Grid item xs={12}>
                                <ThemeProvider theme={themer}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="title"
                                    label="Title"
                                    name="title"
                                    onChange={handleChange}
                                    margin="normal"
                                    type="text"
                                />
                                </ThemeProvider>
                            </Grid> <Grid item xs={12}>
                            <ThemeProvider theme={themer}>
                            <TextField
                                id="Description"
                                label="Description"
                                name="description"
                                multiline
                                fullWidth
                                rows={4}
                                variant="outlined"
                                onChange={handleChange}
                            />
                            </ThemeProvider>
                        </Grid>
                        </Grid>
                    </DialogContent>
                    <DialogActions className={classes.modelTopBottom}>
                        <Button autoFocus type="submit"    type="submit"
                                variant="outlined" color="primary" className={classes.submit}>
                            Save changes
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
        </div>
    );
}
