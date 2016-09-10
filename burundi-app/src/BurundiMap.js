import React, { Component } from 'react';
import {geoPath, geoMercator} from 'd3-geo';
import * as topojson from 'topojson';

const burundiTopo = require('./burundi-topo.json');

class BurundiMap extends Component {

  constructor() {
    super();
    this.state = {
      burundiPath: null
    };
  }

  render() {
    const style = {
      width: '500px',
      height: '500px'
    };
    return (
        <div style={style}>
          <svg width="500px" height="500px"
               viewBox="0 0 500 500" preserveAspectRatio="xMidYMid meet">
            <path stroke="black" d={this.state.burundiPath}></path>
          </svg>
        </div>
    );
  }

  componentDidMount() {
    this.setState({
      burundiPath: geoPath().projection(geoMercator().scale(500))(
          topojson.feature(burundiTopo, burundiTopo.objects.burundi))
    });
  }
}

export default BurundiMap;
