import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import {CKEditor} from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import {Container, CssBaseline, FormGroup, Paper, TextField, withStyles} from "@material-ui/core";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import SortIcon from '@material-ui/icons/Sort';
import IconButton from "@material-ui/core/IconButton";
import {Autocomplete} from "@material-ui/lab";
import FilterListIcon from '@material-ui/icons/FilterList';
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.secondary.main,
        padding: theme.spacing(3),
    },

    editorDiv: {
        marginTop: "2%"
    },
    fixedWidthContainer: {
        maxWidth: "100px",
    },
    titleSpacing: {
        marginRight: theme.spacing(2)
    },
    container: {
        display: "flex",
        "&>div": {
            flexGrow: "1"
        }
    },
    submit: {
        background: theme.palette.action.primary,
        color: theme.palette.text.light,
        borderColor: theme.palette.action.secondary,
        borderRadius: '25px',
        height: '35px',
        fontWeight: "600",
        '&:hover': {
            background: theme.palette.action.hover,
        }
    },
}));


export function NewEditor() {
    const classes = useStyles();
    return (
        <main className={classes.content}>
            <div className={classes.toolbar}/>
            <div className={classes.editorDiv}>
                <CKEditor
                    editor={ClassicEditor}
                    data="<p>Start adding a note</p>"
                    onReady={editor => {
                        // You can store the "editor" and use when it is needed.
                        console.log('Editor is ready to use!', editor);
                    }}
                    onChange={(event, editor) => {
                        const data = editor.getData();
                        console.log({event, editor, data});
                    }}
                    onBlur={(event, editor) => {
                        console.log('Blur.', editor);
                    }}
                    onFocus={(event, editor) => {
                        console.log('Focus.', editor);
                    }}
                />
            </div>
        </main>
    );
}
