import React, {Component} from 'react';
import {Editor as ClassicEditor} from 'ckeditor5-custom-build/build/ckeditor';
import {CKEditor} from '@ckeditor/ckeditor5-react'
import './custom.css';

const editorConfiguration = {
    // toolbar: ['bold', 'italic']
    uiColor: '#AADC6E',
    toolbarLocation: 'bottom',
    ckfinder: {
        uploadUrl: 'https://example.com/ckfinder/core/connector/php/connector.php?command=QuickUpload&type=Images&responseType=json'
    }

};

class Editors extends Component {
    render() {
        return (
            <div className="App">
                <CKEditor
                    editor={ClassicEditor}
                    config={editorConfiguration}
                    data="<p>Hello from CKEditor 5!</p>"
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
        );
    }
}

export default Editors;
