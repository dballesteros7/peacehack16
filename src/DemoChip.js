import React, {Component} from 'react';
import Chip from 'material-ui/Chip';
import './DemoChip.css';

class DemoChip extends Component {

  render() {
    return (
        <Chip>
            <span className="age-bracket">
              {this.formatAgeBracket(this.props.bracket.age)}:
            </span>
            {this.formatCount(this.props.bracket.count)}
        </Chip>
    )
  }

  formatAgeBracket(ageRange) {
    return ageRange.join('-');
  }

  formatCount(count) {
    return `${count.toFixed(0)}%`;
  }
}

export default DemoChip;
