import React from 'react'

const DBImage = (props) => {

    var LogoURL = 'url(http://195.22.157.230:5000/' + props.file.filePath.toString() + ')'

    return (
        <div style={{ backgroundImage: LogoURL}}/>
    )
}

export default DBImage