import TeamInfo from "../models/teamInfo.js";

export const getTeams = async (req, res) => {
    try {
        const allTeamInfo = await TeamInfo.find();
        res.status(200).json(allTeamInfo);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createTeam = async (req, res) => {
    const team = req.body;
    const newTeam = new TeamInfo(team);
    try {
        await newTeam.save();

        res.status(201).json(newTeam);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}