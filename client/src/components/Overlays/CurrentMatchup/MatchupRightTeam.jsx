import React from 'react'

import DBImage from '../Components/DBImage/DBImage'

const MatchupRightTeam = (props) => {

    return (
        <div className="rightTeam" style={{ backgroundColor: props.panelData.currentMatchupColor2 }}>
            {console.log(props.file)}
            <DBImage className="RightTeamLogo" logoUrl={props.file}/>
            <div className="RightTeamName">
                <h1 className="RightTeamNameText">{props.panelData.currentMatchupName2}</h1>
            </div>
        </div>
    )
}

export default MatchupRightTeam
