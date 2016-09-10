import React, {Component} from 'react'
import Dropzone from 'react-dropzone'
import Paper from 'material-ui/Paper'
import _ from 'lodash'

const styles = {
  container: {
    display: 'flex',
    flex: '0 0 auto',
    minHeight: '50px'
  },
  zone: {
    flex: '1 0 auto',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontSize: '14px'
  }
};

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
            return alert("File not readable")
        }
        return alert(evt.target.error)
    }

    static getData() {
        return DataDrop.data
    }

    render() {
        return (
            <Paper zDepth={2} style={styles.container}>
              <Dropzone style={styles.zone}
                  onDrop={DataDrop.onDrop}
                  accept={"text/csv"}>
                  <div>Drop your data, or click to select files to upload.</div>
              </Dropzone>
            </Paper>
        )
    }
}

export default DataDrop
