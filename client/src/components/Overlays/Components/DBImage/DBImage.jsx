import React from 'react'

const DBImage = (props) => {

    var LogoURL = 'url(http://195.22.157.230:5000/' + props.file.filePath.toString() + ')'

    return (
        <div className={props.cName} style={{ backgroundImage: LogoURL}}/>
    )
}

export default DBImage
