import React, {Component} from 'react';
import Chip from 'material-ui/Chip';
import FontIcon from 'material-ui/FontIcon';
import './DemoChip.css';

const iconStyles = {
  'fontSize': '14px',
  'paddingRight': '16px'
};

class GenderChips extends Component {
  render() {
    return (
        <div className="genderChipColumn">
          <Chip>
            <FontIcon className="fa fa-female" style={iconStyles}></FontIcon>
            {this.formatCount(this.props.female)}
          </Chip>
          <Chip>
            <FontIcon className="fa fa-male" style={iconStyles}></FontIcon>
            {this.formatCount(this.props.male)}
          </Chip>
        </div>
    )
  }

  formatCount(count) {
    return `${count.toFixed(0)}%`;
  }
}

export default GenderChips;
