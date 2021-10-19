import React from 'react'

const MatchupRightTeam = (props) => {

    const currentMacthupLogoURL = `http://195.22.157.230:5000/${props.file.filePath}`

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
