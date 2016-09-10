import React, { Component } from 'react'
import Dropzone from 'react-dropzone'

class DataDrop extends Component {

    static onDrop(files) {
        console.log('Received files: ', files);
    }

    render() {
        return (
            <div>
                <Dropzone onDrop={DataDrop.onDrop}>
                    <div>Drop your data, or click to select files to upload.</div>
                </Dropzone>
            </div>
        );
    }
}

export default DataDrop