import React from 'react'

const MatchupRightTeam = (props) => {

    var LogoURL = 'url(http://195.22.157.230:5000/' + props.file.filePath.toString() + ')'

    console.log(LogoURL)

    return (
        <div className="rightTeam" style={{ backgroundColor: props.panelData.currentMatchupColor2 }}>
            <div className="RightTeamLogo" style={{ backgroundImage: LogoURL }} />
            <div className="RightTeamName">
                <h1 className="RightTeamNameText">{props.panelData.currentMatchupName2}</h1>
            </div>
        </div>
    )
}

export default MatchupRightTeam