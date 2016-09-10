import React, {Component} from 'react';
import DemoChip from './DemoChip';
import GenderChips from './GenderChips';
import ThemeChip from './ThemeChip';
import './InfoBar.css';
import moment from 'moment';

const demoBrackets = [
  {
    id: 0,
    age: [15, 18],
    count: 30
  },
  {
    id: 1,
    age: [19, 22],
    count: 25
  },
  {
    id: 2,
    age: [23, 26],
    count: 40
  },
  {
    id: 3,
    age: [27, 30],
    count: 5
  }
];

const femaleCount = 60;
const maleCount = 40;

const themes = [
  {
    theme: 'Education',
    sentiment: Math.random()
  },
  {
    theme: 'Crime',
    sentiment: Math.random()
  },
  {
    theme: 'Unemployment',
    sentiment: Math.random()
  },
  {
    theme: 'Healthcare',
    sentiment: Math.random()
  },
  {
    theme: 'Inequality',
    sentiment: Math.random()
  }
];

class InfoBar extends Component {
  render() {
    const demoChips = demoBrackets.map(demoBracket => {
      return (<DemoChip className="demoChip"
                        key={demoBracket.id} bracket={demoBracket} />);
    });
    const genderChips = (<GenderChips female={femaleCount} male={maleCount} />);

    const themeChips = themes.map(theme => {
      return (<ThemeChip className="themeChip"
                         key={theme.theme} theme={theme} />);
    });
    return (
        <div className="infoBar">
          <div className="headlineRow">
            <span className="headline-left">
              Date of survey: {moment().format('LL')}
            </span>
            <span>
              Already 10k person participated
            </span>
          </div>
          <div className="demoGenderRow">
            <span className="demoLabel">
              Age participation:
            </span>
            <div className="demoColumn">
              {demoChips}
            </div>
            <span className="genderLabel">
              Gender participation:
            </span>
            <div className="genderColumn">
              {genderChips}
            </div>
          </div>
          <div className="moodRow">
            <span className="themeLabel">
              Themes:
            </span>
            {themeChips}
          </div>
        </div>
    );
  }
}
export default InfoBar;
