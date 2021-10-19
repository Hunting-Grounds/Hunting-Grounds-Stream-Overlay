import React from 'react'

const MatchupLeftTeam = (props) => {

    var LogoURL = 'url(http://195.22.157.230:5000/' + props.file.filePath.toString() + ')'

    return (
        <div className="leftTeam" style={{ backgroundColor: props.panelData.currentMatchupColor1 }}>
            {console.log(props.file.filePath)}
            <div className="LeftTeamLogo" style={{ backgroundImage: LogoURL }} />
            <div className="LeftTeamName">
                <h1 className="LeftTeamNameText">{props.panelData.currentMatchupName1}</h1>
            </div>
        </div>
    )
}

export default MatchupLeftTeam
