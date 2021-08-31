import express from 'express';
import mongoose from 'mongoose';

import Player from '../models/Player.js';

const router = express.Router();

export const getPlayers = async (req, res) => { 
    try {
        const Players = await Player.find();
                
        res.status(200).json(Players);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const getPlayer = async (req, res) => { 
    const { id } = req.params;

    try {
        const player = await Player.findById(id);
        
        res.status(200).json(player);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createPlayer = async (req, res) => {
    const { name, rating, kd, entry, maps, kost, kpr, srv, clutchwins, plant, disable, hs, atk, def, selectedFile } = req.body;

    const newPlayer = new Player({ name, rating, kd, entry, maps, kost, kpr, srv, clutchwins, plant, disable, hs, atk, def, selectedFile })

    try {
        await newPlayer.save();

        res.status(201).json(newPlayer );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePlayer = async (req, res) => {
    const { id } = req.params;
    const { name, rating, kd, entry, maps, kost, kpr, srv, clutchwins, plant, disable, hs, atk, def, selectedFile } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No player with id: ${id}`);

    const updatedPlayer = { name, rating, kd, entry, maps, kost, kpr, srv, clutchwins, plant, disable, hs, atk, def, selectedFile, _id: id };

    await Player.findByIdAndUpdate(id, updatedPlayer, { new: true });

    res.json(updatedPlayer);
}

export const deletePlayer = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No player with id: ${id}`);

    await Player.findByIdAndRemove(id);

    res.json({ message: "Player deleted successfully." });
}

export default router;