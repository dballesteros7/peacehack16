import React, {Component} from 'react';
import {geoPath, geoMercator} from 'd3-geo';
const burundiTopo = require('./burundi.json');
const burundiCommunes = require('./burundi-communes.json');
import {Card, CardHeader} from 'material-ui/Card';
import {interpolateCubehelixLong, quantize} from 'd3-interpolate';
import './BurundiMap.css';

const interpolator = interpolateCubehelixLong('#F44336', '#4CAF50');
const colorBlocks = quantize(interpolator, 50);

const styles = {
  text: {
    fontSize: '13px',
    fill: 'rgba(0, 0, 0, .87)',
    stroke: 'none'
  },
  commune: {
    opacity: 0.9,
    cursor: 'crosshair'
  },
  dataPoint: {
    cursor: 'pointer'
  }
};

class BurundiMap extends Component {

  constructor() {
    super();
    this.proj = geoMercator().fitSize([400, 400], burundiTopo[0]);
    this.geoGen = geoPath().projection(this.proj);
    this.burundiCommunesList = burundiCommunes.features;
  }

  highlight(properties, evt) {
    evt.target.style.opacity = 1;
  }

  unhighlight(evt) {
    evt.target.style.opacity = 0.9;
  }

  render() {
    return (
        <div className="map-container">
          <svg viewBox="0 0 500 400" preserveAspectRatio="xMidYMid meet">
            {this.burundiCommunesList.map((feature) => {
              return (<path stroke="black" key={feature.properties.OBJECTID}
                            fill={interpolator(Math.random())}
                            style={styles.commune}
                            onMouseOver={this.highlight.bind(this, feature.properties)}
                            onMouseOut={this.unhighlight.bind(this)}
                            d={this.geoGen(feature)}></path>);
            })}
            <g>
              <text x="425" y="390" style={styles.text}>Unhappy</text>
              <text x="420" y="200" style={styles.text}>Indifferent</text>
              <text x="440" y="10" style={styles.text}>Happy</text>
              <rect width="20" height="400" x="480" y="0"
                    stroke="black" fill="none">
              </rect>
              {colorBlocks.map((color, index) => {
                return (<rect stroke={color} fill={color} key={color}
                              width="20" height="8" x="480"
                              y={400 - (index + 1) * 8}></rect>)
              })}
            </g>
            <g>
              {this.props.cityData.map((datum, idx) => {
                const coords = this.proj([datum.lng, datum.lat]);
                return (<circle cx={coords[0]} cy={coords[1]} r="5"
                                key={idx} style={styles.dataPoint}
                                stroke="none" fill="#FFF"></circle>)
              })}
            </g>
          </svg>
        </div>
    );
  }
}
export default BurundiMap;
