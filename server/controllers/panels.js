import express from 'express';
import mongoose from 'mongoose';

import Panel from '../models/Panels.js';

const router = express.Router();

export const getPanels = async (req, res) => { 
    try {
        const Panels = await Panel.find();
                
        res.status(200).json(Panels);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPanel = async (req, res) => { 
    const { id } = req.params;

    try {
        const panel = await Panel.findById(id);
        
        res.status(200).json(panel);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPanel = async (req, res) => {
    const { webcamCasterName1, webcamCasterName2, upperThirdTitle, upperThirdSubtitle, 
        lowerThirdTitle, lowerThirdSubtitle, lowerThirdTeamName1, lowerThirdTeamLogo1, 
        lowerThirdTeamColor1, lowerThirdTeamName2, lowerThirdTeamLogo2, lowerThirdTeamColor2, 
        hudLeftText, hudRightText, hudLeftOperatorIcon1,hudLeftOperatorIcon2, hudRightOperatorIcon1, 
        hudRightOperatorIcon2, hudLeftTeamLogo, hudRightTeamLogo,
        vetoMap1Icon, vetoMap2Icon, vetoMap3Icon,
        vetoMap4Icon, vetoMap5Icon, vetoMap6Icon,
        currentMatchupLogo1, currentMatchupName1, currentMatchupColor1,
        currentMatchupLogo2, currentMatchupName2, currentMatchupColor2,
        upcomingMatchesName1Row1, upcomingMatchesLogo1Row1, upcomingMatchesName2Row1, upcomingMatchesLogo2Row1,
        upcomingMatchesName1Row2, upcomingMatchesLogo1Row2, upcomingMatchesName2Row2, upcomingMatchesLogo2Row2,
        upcomingMatchesName1Row3, upcomingMatchesLogo1Row3, upcomingMatchesName2Row3, upcomingMatchesLogo2Row3,
        upcomingMatchesName1Row4, upcomingMatchesLogo1Row4, upcomingMatchesName2Row4, upcomingMatchesLogo2Row4,
        leagueTableNameRow1, leagueTableWLRow1, leagueTablePTSRow1,
        leagueTableNameRow2, leagueTableWLRow2, leagueTablePTSRow2,
        leagueTableNameRow3, leagueTableWLRow3, leagueTablePTSRow3,
        leagueTableNameRow4, leagueTableWLRow4, leagueTablePTSRow4,
        leagueTableNameRow5, leagueTableWLRow5, leagueTablePTSRow5,
        leagueTableNameRow6, leagueTableWLRow6, leagueTablePTSRow6,
        leagueTableNameRow7, leagueTableWLRow7, leagueTablePTSRow7,
        leagueTableNameRow8, leagueTableWLRow8, leagueTablePTSRow8} = req.body;

    const newPanel = new Panel({ webcamCasterName1, webcamCasterName2, upperThirdTitle, upperThirdSubtitle, 
        lowerThirdTitle, lowerThirdSubtitle, lowerThirdTeamName1, lowerThirdTeamLogo1, 
        lowerThirdTeamColor1, lowerThirdTeamName2, lowerThirdTeamLogo2, lowerThirdTeamColor2, 
        hudLeftText, hudRightText, hudLeftOperatorIcon1,hudLeftOperatorIcon2, hudRightOperatorIcon1, 
        hudRightOperatorIcon2, hudLeftTeamLogo, hudRightTeamLogo,
        vetoMap1Icon, vetoMap2Icon, vetoMap3Icon,
        vetoMap4Icon, vetoMap5Icon, vetoMap6Icon,
        currentMatchupLogo1, currentMatchupName1, currentMatchupColor1,
        currentMatchupLogo2, currentMatchupName2, currentMatchupColor2,
        upcomingMatchesName1Row1, upcomingMatchesLogo1Row1, upcomingMatchesName2Row1, upcomingMatchesLogo2Row1,
        upcomingMatchesName1Row2, upcomingMatchesLogo1Row2, upcomingMatchesName2Row2, upcomingMatchesLogo2Row2,
        upcomingMatchesName1Row3, upcomingMatchesLogo1Row3, upcomingMatchesName2Row3, upcomingMatchesLogo2Row3,
        upcomingMatchesName1Row4, upcomingMatchesLogo1Row4, upcomingMatchesName2Row4, upcomingMatchesLogo2Row4,
        leagueTableNameRow1, leagueTableWLRow1, leagueTablePTSRow1,
        leagueTableNameRow2, leagueTableWLRow2, leagueTablePTSRow2,
        leagueTableNameRow3, leagueTableWLRow3, leagueTablePTSRow3,
        leagueTableNameRow4, leagueTableWLRow4, leagueTablePTSRow4,
        leagueTableNameRow5, leagueTableWLRow5, leagueTablePTSRow5,
        leagueTableNameRow6, leagueTableWLRow6, leagueTablePTSRow6,
        leagueTableNameRow7, leagueTableWLRow7, leagueTablePTSRow7,
        leagueTableNameRow8, leagueTableWLRow8, leagueTablePTSRow8 })

    try {
        await newPanel.save();

        res.status(201).json(newPanel );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePanel = async (req, res) => {
    const { id } = req.params;
    const { webcamCasterName1, webcamCasterName2, upperThirdTitle, upperThirdSubtitle, 
        lowerThirdTitle, lowerThirdSubtitle, lowerThirdTeamName1, lowerThirdTeamLogo1, 
        lowerThirdTeamColor1, lowerThirdTeamName2, lowerThirdTeamLogo2, lowerThirdTeamColor2, 
        hudLeftText, hudRightText, hudLeftOperatorIcon1,hudLeftOperatorIcon2, hudRightOperatorIcon1, 
        hudRightOperatorIcon2, hudLeftTeamLogo, hudRightTeamLogo,
        vetoMap1Icon, vetoMap2Icon, vetoMap3Icon,
        vetoMap4Icon, vetoMap5Icon, vetoMap6Icon,
        currentMatchupLogo1, currentMatchupName1, currentMatchupColor1,
        currentMatchupLogo2, currentMatchupName2, currentMatchupColor2,
        upcomingMatchesName1Row1, upcomingMatchesLogo1Row1, upcomingMatchesName2Row1, upcomingMatchesLogo2Row1,
        upcomingMatchesName1Row2, upcomingMatchesLogo1Row2, upcomingMatchesName2Row2, upcomingMatchesLogo2Row2,
        upcomingMatchesName1Row3, upcomingMatchesLogo1Row3, upcomingMatchesName2Row3, upcomingMatchesLogo2Row3,
        upcomingMatchesName1Row4, upcomingMatchesLogo1Row4, upcomingMatchesName2Row4, upcomingMatchesLogo2Row4,
        leagueTableNameRow1, leagueTableWLRow1, leagueTablePTSRow1,
        leagueTableNameRow2, leagueTableWLRow2, leagueTablePTSRow2,
        leagueTableNameRow3, leagueTableWLRow3, leagueTablePTSRow3,
        leagueTableNameRow4, leagueTableWLRow4, leagueTablePTSRow4,
        leagueTableNameRow5, leagueTableWLRow5, leagueTablePTSRow5,
        leagueTableNameRow6, leagueTableWLRow6, leagueTablePTSRow6,
        leagueTableNameRow7, leagueTableWLRow7, leagueTablePTSRow7,
        leagueTableNameRow8, leagueTableWLRow8, leagueTablePTSRow8 } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No panel with id: ${id}`);

    const updatedPanel = { webcamCasterName1, webcamCasterName2, upperThirdTitle, upperThirdSubtitle, 
        lowerThirdTitle, lowerThirdSubtitle, lowerThirdTeamName1, lowerThirdTeamLogo1, 
        lowerThirdTeamColor1, lowerThirdTeamName2, lowerThirdTeamLogo2, lowerThirdTeamColor2, 
        hudLeftText, hudRightText, hudLeftOperatorIcon1,hudLeftOperatorIcon2, hudRightOperatorIcon1, 
        hudRightOperatorIcon2, hudLeftTeamLogo, hudRightTeamLogo,
        vetoMap1Icon, vetoMap2Icon, vetoMap3Icon,
        vetoMap4Icon, vetoMap5Icon, vetoMap6Icon,
        currentMatchupLogo1, currentMatchupName1, currentMatchupColor1,
        currentMatchupLogo2, currentMatchupName2, currentMatchupColor2,
        upcomingMatchesName1Row1, upcomingMatchesLogo1Row1, upcomingMatchesName2Row1, upcomingMatchesLogo2Row1,
        upcomingMatchesName1Row2, upcomingMatchesLogo1Row2, upcomingMatchesName2Row2, upcomingMatchesLogo2Row2,
        upcomingMatchesName1Row3, upcomingMatchesLogo1Row3, upcomingMatchesName2Row3, upcomingMatchesLogo2Row3,
        upcomingMatchesName1Row4, upcomingMatchesLogo1Row4, upcomingMatchesName2Row4, upcomingMatchesLogo2Row4,
        leagueTableNameRow1, leagueTableWLRow1, leagueTablePTSRow1,
        leagueTableNameRow2, leagueTableWLRow2, leagueTablePTSRow2,
        leagueTableNameRow3, leagueTableWLRow3, leagueTablePTSRow3,
        leagueTableNameRow4, leagueTableWLRow4, leagueTablePTSRow4,
        leagueTableNameRow5, leagueTableWLRow5, leagueTablePTSRow5,
        leagueTableNameRow6, leagueTableWLRow6, leagueTablePTSRow6,
        leagueTableNameRow7, leagueTableWLRow7, leagueTablePTSRow7,
        leagueTableNameRow8, leagueTableWLRow8, leagueTablePTSRow8, _id: id };

    await Panel.findByIdAndUpdate(id, updatedPanel, { new: true });

    res.json(updatedPanel);
}

export const deletePanel = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No panel with id: ${id}`);

    await Panel.findByIdAndRemove(id);

    res.json({ message: "Panel deleted successfully." });
}

export default router;