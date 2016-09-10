import React, {Component} from 'react';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import {interpolateCubehelixLong} from 'd3-interpolate';

const styles = {
  icon: {
    color: '#FFF',
    fontSize: '14px',
    paddingRight: '16px'
  }
};
const interpolator = interpolateCubehelixLong('#F44336', '#4CAF50');

class ThemeChip extends Component {

  render() {
    const color = interpolator(this.props.theme.sentiment);
    return (
        <Chip style={{backgroundColor: color}}>
          <span style={{color: '#FFF'}}>
            {this.getIcon(this.props.theme.sentiment)}
            {this.props.theme.theme}
          </span>
        </Chip>
    )
  }

  getIcon(sentiment) {
    if (sentiment < 0.4) {
      return (<FontIcon style={styles.icon} className="fa fa-frown-o" />);
    } else if (sentiment < 0.7) {
      return (<FontIcon style={styles.icon} className="fa fa-meh-o" />);
    } else {
      return (<FontIcon style={styles.icon} className="fa fa-smile-o" />);
    }
  }

}

export default ThemeChip;
