import React, {Component} from 'react'
import Dropzone from 'react-dropzone'

class DataDrop extends Component {

    constructor(props) {
        super(props)
    }

    static onDrop(files) {
        console.log('Received files: ', files)

    }

    getData() {
        return [
            {
                lat: 47.0525,
                long: 4.3837,
                count: 2
            },
            {
                lat: 47.1525,
                long: 4.5837,
                count: 8
            }
        ]
    }

    render() {
        return (
            <div>
                <Dropzone
                    onDrop={DataDrop.onDrop}
                    accept={"text/csv"}>
                    <div>Drop your data, or click to select files to upload.</div>
                </Dropzone>
            </div>
        )
    }
}

export default DataDrop