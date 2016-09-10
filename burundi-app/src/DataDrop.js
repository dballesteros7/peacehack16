import React, {Component} from 'react'
import Dropzone from 'react-dropzone'
import _ from 'lodash'

class DataDrop extends Component {

    constructor(props) {
        super(props)

        if (!window.FileReader) {
            alert('Please use modern browser.')
        }

        // deferred object
        DataDrop.data = new Promise((res, rej) => {
            DataDrop.resolve = res
            DataDrop.reject = rej
        })
    }

    static onDrop(files) {
        let reader = new FileReader()
        reader.readAsText(files[0])
        reader.onload = DataDrop.loadHandler
        reader.onerror = DataDrop.errorHandler
    }

    // ISO 3166-1 country code,FIPS 5-2 subdivision code, GNS FD, GNS UFI,ISO 639-1 language code, language script, name, latitude, longitude
    static loadHandler(event) {
        let allData = event.target.result.split(/\r\n|\n/)

        // drop header
        allData.shift()

        DataDrop.resolve(allData
            .map(r =>
                // here should be ;
                r.split(',')
            ).map(r => ({
                count: _.parseInt(r[1]),
                name: r[6],
                lat: Number(r[7]),
                lng: Number(r[8])
            })))
    }

    static errorHandler(evt) {
        if ("NotReadableError" === evt.target.error.name) {
            return alert("File not redable")
        }
        return alert(evt.target.error)
    }

    static getData() {
        return DataDrop.data
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