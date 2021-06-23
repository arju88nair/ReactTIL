import React from 'react';
import {makeStyles} from '@material-ui/core/styles';
import { CKEditor } from '@ckeditor/ckeditor5-react';
import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import Divider from "@material-ui/core/Divider";

const useStyles = makeStyles((theme) => ({
    toolbar: theme.mixins.toolbar,
    content: {
        flexGrow: 1,
        backgroundColor: theme.palette.secondary.main,
        padding: theme.spacing(3),
    },
    mainEditor:{

        border:"thin solid red",
        minHeight:'100vh'

    }

}));


export function Editor() {
    const classes = useStyles();
    return (

    <main className={classes.content}>
            <div className={classes.toolbar}/>
            <CKEditor
                editor={ ClassicEditor }
                data="<p>Hello from CKEditor 5!</p>"
                onReady={ editor => {
                    // You can store the "editor" and use when it is needed.
                    console.log( 'Editor is ready to use!', editor );
                } }
                onChange={ ( event, editor ) => {
                    const data = editor.getData();
                    console.log( { event, editor, data } );
                } }
                onBlur={ ( event, editor ) => {
                    console.log( 'Blur.', editor );
                } }
                onFocus={ ( event, editor ) => {
                    console.log( 'Focus.', editor );
                } }
                className={classes.mainEditor}
                onInit={(editor) => {
                    // You can store the "editor" and use when it is needed.
                    // console.log("Editor is ready to use!", editor);
                    editor.editing.view.change((writer) => {
                        writer.setStyle(
                            "height",
                            "200px",
                            editor.editing.view.document.getRoot()
                        );
                    });
                }}
            />
        </main>
    );
}
