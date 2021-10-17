import React from 'react'

import './LandingPage.css'

import { Button } from 'antd';

function LandingPage() {
    return (
        <div className="LandingPageBackground">
            <h1 className="LandingPageTitle">WELCOME<br /> TO <br />THE HUNTING GROUNDS BROADCAST ENGINE</h1>
            <a href="/db/teams">
            <Button className="LandingPageButton" type="primary" shape="round" size={'large'}>
                GET STARTED
            </Button>
            </a>
        </div>
    )
}

export default LandingPage
