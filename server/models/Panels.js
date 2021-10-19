import mongoose from 'mongoose';

const panelSchema = mongoose.Schema({

    //WEBCAM

    webcamCasterName1: String,
    webcamCasterName2: String,

    //UPPER THRID
    upperThirdTitle: String,
    upperThirdSubtitle: String,

    //LOWER THIRD

    lowerThirdTitle: String,
    lowerThirdSubtitle: String,

    lowerThirdTeamName1: String,
    lowerThirdTeamColor1: String,

    lowerThirdTeamName2: String,
    lowerThirdTeamColor2: String,

    //HUD

    hudLeftText: String,
    hudRightText: String,

    //CURRENT MATCHUP

    currentMatchupName1: String,
    currentMatchupColor1: String,

    currentMatchupName2: String,
    currentMatchupColor2: String,

    //PLAYDAY UPCOMING MATCHES
    upcomingMatchesName1Row1: String,
    upcomingMatchesName2Row1: String,

    upcomingMatchesName1Row2: String,
    upcomingMatchesName2Row2: String,

    upcomingMatchesName1Row3: String,
    upcomingMatchesName2Row3: String,

    upcomingMatchesName1Row4: String,
    upcomingMatchesName2Row4: String,

    //LEAGUE TABLE

    leagueTableNameRow1: String,
    leagueTableWLRow1: String,
    leagueTablePTSRow1: String,

    leagueTableNameRow2: String,
    leagueTableWLRow2: String,
    leagueTablePTSRow2: String,
    
    leagueTableNameRow3: String,
    leagueTableWLRow3: String,
    leagueTablePTSRow3: String,

    leagueTableNameRow4: String,
    leagueTableWLRow4: String,
    leagueTablePTSRow4: String,

    leagueTableNameRow5: String,
    leagueTableWLRow5: String,
    leagueTablePTSRow5: String,

    leagueTableNameRow6: String,
    leagueTableWLRow6: String,
    leagueTablePTSRow6: String,

    leagueTableNameRow7: String,
    leagueTableWLRow7: String,
    leagueTablePTSRow7: String,

    leagueTableNameRow8: String,
    leagueTableWLRow8: String,
    leagueTablePTSRow8: String,

})

var Panel = mongoose.model('Panel', panelSchema);

export default Panel;