import express from 'express';
import mongoose from 'mongoose';

import Team from '../models/Team.js';

const router = express.Router();

export const getTeams = async (req, res) => { 
    try {
        const Teams = await Team.find();
                
        res.status(200).json(Teams);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getTeam = async (req, res) => { 
    const { id } = req.params;

    try {
        const team = await Team.findById(id);
        
        res.status(200).json(team);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createTeam = async (req, res) => {
    const { fullName, displayName, tag, themeColour, players, points, records, selectedFile } = req.body;

    const newTeam = new Team({ fullName, displayName, tag, themeColour, players, points, records, selectedFile })

    try {
        await newTeam.save();

        res.status(201).json(newTeam );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updateTeam = async (req, res) => {
    const { id } = req.params;
    const { fullName, displayName, tag, themeColour, players, points, records, selectedFile } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No team with id: ${id}`);

    const updatedTeam = { fullName, displayName, tag, themeColour, players, points, records, selectedFile, _id: id };

    await Team.findByIdAndUpdate(id, updatedTeam, { new: true });

    res.json(updatedTeam);
}

export const deleteTeam = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No team with id: ${id}`);

    await Team.findByIdAndRemove(id);

    res.json({ message: "Team deleted successfully." });
}

export const addScore = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No team with id: ${id}`);
    
    const team = await Team.findById(id);

    const updatedTeam = await Team.findByIdAndUpdate(id, { likeCount: team.likeCount + 1 }, { new: true });
    
    res.json(updatedTeam);
}

export const subScore = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No team with id: ${id}`);
    
    const team = await Team.findById(id);

    const updatedTeam = await Team.findByIdAndUpdate(id, { likeCount: team.likeCount - 1 }, { new: true });
    
    res.json(updatedTeam);
}

export default router;