import React, { Component } from 'react';
import AngryEmoticon from './img/angry-emoticon.svg';
import HappyEmoticon from './img/happy-emoticon.svg';
import NormalEmoticon from './img/normal-emoticon.svg';

class InfoBar  extends Component {
    render() {
        return (
            <div id="MainContainer">
                <div id="date">
                    <div>Date of survey: 00.00.0000 to 00.00.0000</div>
                    <div>Already 10k person participated</div>
                </div>
                <div id="DataContainer">
                    <div className="data">
                        <div>10k</div>
                        <div className="block">12 to 14 years old</div>
                        <div className="block">Male</div>
                        <div className="block">Bac</div>
                    </div>
                    <div className="data">
                        <div>1000000</div>
                        <div className="block">12 to 14 years old</div>
                        <div className="block">Male</div>
                        <div className="block">Bac</div>
                    </div>
                    <div className="data">
                        <div>10k</div>
                        <div className="block">12 t</div>
                        <div className="block">Male</div>
                        <div className="block">Bac</div>
                    </div>
                    <div className="data">
                        <div>10k</div>
                        <div className="block">12 to 14 years old</div>
                        <div className="block">Male</div>
                        <div className="block">Bac</div>
                    </div>
                    <div className="data">
                        <div>10k</div>
                        <div className="block">12 to 14 years old</div>
                        <div className="block">Male</div>
                        <div className="block">Bac</div>
                    </div>
                    <div className="data">
                        <div>10k</div>
                        <div className="block">12 to 14 years old</div>
                        <div className="block">Male</div>
                        <div className="block">Bac</div>
                    </div>
                    <div className="data">
                        <div>10k</div>
                        <div className="block">12 to 14 years old</div>
                        <div className="block">Male</div>
                        <div className="block">Bac</div>
                    </div>
                    <div className="data">
                        <div>10k</div>
                        <div className="block">12 to 14 years old</div>
                        <div className="block">Male</div>
                        <div className="block">Bac</div>
                    </div>
                    <div className="data">
                        <div>10k</div>
                        <div className="block">12 to 14 years old</div>
                        <div className="block">Male</div>
                        <div className="block">Bac</div>
                    </div>
                    <div className="data">
                        <div>10k</div>
                        <div className="block">12 to 14 years old</div>
                        <div className="block">Male</div>
                        <div className="block">Bac</div>
                    </div>
                    <div className="data">
                        <div>10k</div>
                        <div className="block">12 to 14 years old</div>
                        <div className="block">Male</div>
                        <div className="block">Bac</div>
                    </div>
                    <div className="data">
                        <div>10k</div>
                        <div className="block">12 to 14 years old</div>
                        <div className="block">Male</div>
                        <div className="block">Bac</div>
                    </div>
                    <div className="data">
                        <div>10k</div>
                        <div className="block">12 to 14 years old</div>
                        <div className="block">Male</div>
                        <div className="block">Bac</div>
                    </div>
                    <div className="data">
                        <div>10k</div>
                        <div className="block">12 to 14 years old</div>
                        <div className="block">Male</div>
                        <div className="block">Bac</div>
                    </div>
                </div>
                <div id="MoodContainer">
                    <div className="mood"><a href="#"><img alt="" src={AngryEmoticon}/></a></div>
                    <div className="mood"><a href="#"><img alt="" src={NormalEmoticon}/></a></div>
                    <div className="mood"><a href="#"><img alt="" src={HappyEmoticon}/></a></div>
                </div>
            </div>
        );
    }
}
export default InfoBar;
