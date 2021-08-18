import mongoose from "mongoose";
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

export const updateTeam = async (req, res) => {
    const { id: _id } = req.params;
    const team = req.body;

    if(!mongoose.Types.ObjectId.isValid(_id)) return res.status(404).send('No team with that id');

    const updatedTeam = await TeamInfo.findByIdAndUpdate(_id, team, { new: true });

    res.json(updatedTeam);
}

export const updateTeam = async (req, res) => {
    const { id } = req.params;
    const { fullName, displayName, tag, themeColour, players, points, record } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No post with id: ${id}`);

    const updatedPost = { fullName, displayName, tag, themeColour, players, points, record, _id: id };

    await PostMessage.findByIdAndUpdate(id, updatedTeam, { new: true });

    res.json(updatedTeam);
}