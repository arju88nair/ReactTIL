import * as React from 'react';
import {useEffect, useState} from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import {styled} from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import {useDispatch, useSelector} from "react-redux";
import {boardSelector, clearBoardState, getBoards, postBoard} from "../../features/BoardsSlice";
import {closeBoardModal, closeSpinner, openSpinner} from "../../features/MiscSlice";
import Grid from "@mui/material/Grid";
import {TextField} from "@mui/material";
import {Spinner} from "../Components/Spinner";

const BootstrapDialog = styled(Dialog)(({theme}) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

const BootstrapDialogTitle = (props) => {
    const {children, onClose, ...other} = props;

    return (
        <DialogTitle sx={{m: 0, p: 2}} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon/>
                </IconButton>
            ) : null}
        </DialogTitle>
    );
};

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function BoardModal() {
    const modalOpen = useSelector(state => state.misc.boardModal);
    console.log(modalOpen)
    const dispatch = useDispatch();
    const [newBoard, setBoard] = useState({title: '', description: ''});
    const {isBoardSuccess, isBoardError, errorMessage} = useSelector(
        boardSelector
    );
    const handleClose = () => {
        dispatch(closeBoardModal());
    };

    const handleAddBoard = (e) => {
        e.preventDefault();
        console.log(newBoard)
        dispatch(openSpinner())
        dispatch(clearBoardState())
        dispatch(postBoard(newBoard))
    }

    useEffect(() => {
        if (isBoardSuccess) {
            dispatch(closeBoardModal())
            dispatch(closeSpinner())
            dispatch(getBoards())
        }
        if (isBoardError) {
            console.log("SDd")
            dispatch(closeSpinner())
        }
    }, [isBoardError, isBoardSuccess]);

    function handleChange(e) {
        const {name, value} = e.target;
        setBoard(newBoard => ({...newBoard, [e.target.name]: e.target.value}));
    }


    return (
        <div>
            <Spinner/>
            <BootstrapDialog
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={modalOpen}
            >
                <form onSubmit={handleAddBoard}>

                    <BootstrapDialogTitle id="customized-dialog-title" onClose={handleClose}>
                        Add a new Board
                    </BootstrapDialogTitle>
                    <DialogContent dividers>
                        {/*<Typography gutterBottom>*/}
                        {/*    Boards help you to categorise your items*/}
                        {/*</Typography>*/}
                        <Grid container>
                            <Grid item xs={12}>
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
                            </Grid>
                            <Grid item xs={12}>
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
                            </Grid>
                        </Grid>

                    </DialogContent>
                    <DialogActions>
                        <Button autoFocus type="submit" type="submit"
                                variant="contained" color="primary">
                            Save changes
                        </Button>
                    </DialogActions>
                </form>
            </BootstrapDialog>
        </div>
    );
}
