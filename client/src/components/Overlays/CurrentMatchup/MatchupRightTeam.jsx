import React from 'react'

const MatchupRightTeam = (props) => {

    const currentMacthupLogoURL = props.file.filePath

    return (
        <div className="rightTeam" style={{ backgroundColor: props.panelData.currentMatchupColor2 }}>
            <div className="RightTeamLogo" style={{ backgroundImage: `url(${currentMacthupLogoURL})` }} />
            <div className="RightTeamName">
                <h1 className="RightTeamNameText">{props.panelData.currentMatchupName2}</h1>
            </div>
        </div>
    )
}

export default MatchupRightTeam
