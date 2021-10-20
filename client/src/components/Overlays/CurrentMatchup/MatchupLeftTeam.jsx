import React from 'react'

import DBImage from '../Components/DBImage/DBImage';

const MatchupLeftTeam = (props) => {

    return (
        <div className="leftTeam" style={{ backgroundColor: props.panelData.currentMatchupColor1 }}>
            <DBImage bgColor='inherit' cName="LeftTeamLogo" file={props.file}/>
            <div className="LeftTeamName">
                <h1 className="LeftTeamNameText">{props.panelData.currentMatchupName1}</h1>
            </div>
        </div>
    )
}

export default MatchupLeftTeam
