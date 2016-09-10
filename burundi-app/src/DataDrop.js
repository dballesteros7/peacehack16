import React, {Component} from 'react'
import Dropzone from 'react-dropzone'

class DataDrop extends Component {

    constructor(props) {
        super(props)
        this.data = props.data || []
        if (!window.FileReader) {
            alert('FileReader are not supported in this browser.')
        }
    }

    static onDrop(files) {
        let reader = new FileReader()
        reader.readAsText(files[0])
        reader.onload = DataDrop.loadHandler
        reader.onerror = DataDrop.errorHandler
    }

    static loadHandler(event) {
        let csv = event.target.result
        let allTextLines = csv.split(/\r\n|\n/)
        let lines = []
        for (let i = 0; i < allTextLines.length; i++) {
            // hope its not much data
            let data = allTextLines[i].split(';')
            let tarr = []
            for (let j = 0; j < data.length; j++) {
                tarr.push(data[j])
            }
            lines.push(tarr)
        }
        console.log(lines)
    }

    static errorHandler(evt) {
        if ("NotReadableError" === evt.target.error.name) {
            return alert("File not redable")
        }
        return alert(evt.target.error)

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