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
    const { name, rating, kd, entry, maps, kost, kpr, srv, clutchwins, plant, disable, hs, atk, def, selectedFile } = req.body;

    const newPanel = new Panel({ name, rating, kd, entry, maps, kost, kpr, srv, clutchwins, plant, disable, hs, atk, def, selectedFile })

    try {
        await newPanel.save();

        res.status(201).json(newPanel );
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

export const updatePanel = async (req, res) => {
    const { id } = req.params;
    const { name, rating, kd, entry, maps, kost, kpr, srv, clutchwins, plant, disable, hs, atk, def, selectedFile } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No panel with id: ${id}`);

    const updatedPanel = { name, rating, kd, entry, maps, kost, kpr, srv, clutchwins, plant, disable, hs, atk, def, selectedFile, _id: id };

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