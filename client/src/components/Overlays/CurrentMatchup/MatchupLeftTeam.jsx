import React from 'react'

const MatchupLeftTeam = (props) => {

    console.log(props.file.filePath)
    const currentMacthupLogoURL = `http://195.22.157.230:5000/${props.file.filePath}`

    return (
        <div className="leftTeam" style={{ backgroundColor: props.panelData.currentMatchupColor1 }}>
            <div className="LeftTeamLogo" style={{ backgroundImage: `url(${currentMacthupLogoURL})` }} />
            <div className="LeftTeamName">
                <h1 className="LeftTeamNameText">{props.panelData.currentMatchupName1}</h1>
            </div>
        </div>
    )
}

export default MatchupLeftTeam
