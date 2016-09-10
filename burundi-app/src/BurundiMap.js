import React, { Component } from 'react';
import {geoPath, geoMercator} from 'd3-geo';
const burundiTopo = require('./burundi.json');
const burundiCommunes = require('./burundi-communes.json');
import {interpolateCubehelixLong} from 'd3-interpolate';
import './BurundiMap.css';

const interpolator = interpolateCubehelixLong('#F44336', '#4CAF50');

class BurundiMap extends Component {

  constructor() {
    super();
    this.proj = geoMercator().fitSize([400, 400], burundiTopo[0]);
    this.geoGen = geoPath().projection(this.proj);
    this.burundiCommunesList = burundiCommunes.features;
  }

  render() {
    return (
        <div className="map-container">
          <svg viewBox="0 0 400 400" preserveAspectRatio="xMidYMid meet">
            {this.burundiCommunesList.map((feature) => {
              return (<path stroke="black" key={feature.properties.OBJECTID}
                            fill={interpolator(Math.random())}
                            d={this.geoGen(feature)}></path>);
            })}
          </svg>
        </div>
    );
  }
}

export default BurundiMap;
