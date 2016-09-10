import React, { Component } from 'react';
import {geoPath, geoMercator} from 'd3-geo';
const burundiTopo = require('./burundi.json');
const burundiCommunes = require('./burundi-communes.json');
import './BurundiMap.css';

class BurundiMap extends Component {

  constructor() {
    super();
    this.state = {
      communePath: null
    };
  }

  render() {
    return (
        <div className="map-container">
          <svg viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet">
            <path stroke="black" fill="none"
                  d={this.state.communePath}></path>
          </svg>
        </div>
    );
  }

  componentDidMount() {
    const proj = geoMercator().fitSize([500, 500], burundiTopo[0]);
    const geoGen = geoPath().projection(proj);
    this.setState({
      communePath: geoGen(burundiCommunes)
    });
  }
}

export default BurundiMap;
