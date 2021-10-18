'use strict';
import mongoose from 'mongoose';
import SingleFile from '../models/singlefile.js';

export const singleFileUpload = async (req, res, next) => {
    try{
        const file = new SingleFile({
            fileName: req.file.originalname,
            filePath: req.file.path,
            fileType: req.file.mimetype,
            fileSize: fileSizeFormatter(req.file.size, 2), // 0.00
            fileParent: req.fileParent,
        });
        await file.save();
        res.status(201).send(file.fileName + ' Uploaded Successfully' + file._id);
    }catch(error) {
        res.status(400).send(error.message);
    }
}

export const getallSingleFiles = async (req, res, next) => {
    try{
        const files = await SingleFile.find();
        res.status(200).send(files);
    }catch(error) {
        res.status(400).send(error.message);
    }
}

export const getFile = async (req, res) => { 
    const { id } = req.params;

    try {
        const panel = await SingleFile.findById(id);
        
        res.status(200).json(panel);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

const fileSizeFormatter = (bytes, decimal) => {
    if(bytes === 0){
        return '0 Bytes';
    }
    const dm = decimal || 2;
    const sizes = ['Bytes', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'YB', 'ZB'];
    const index = Math.floor(Math.log(bytes) / Math.log(1000));
    return parseFloat((bytes / Math.pow(1000, index)).toFixed(dm)) + ' ' + sizes[index];

}

export const updateFile = async (req, res) => {
    const file = new SingleFile({
        fileName: req.file.originalname,
        filePath: req.file.path,
        fileType: req.file.mimetype,
        fileSize: fileSizeFormatter(req.file.size, 2) // 0.00
    });

    await File.findByIdAndUpdate(id, updatedFile, { new: true });
}

export const deleteFile = async (req, res) => {
    const { id } = req.params;

    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No file with id: ${id}`);

    await SingleFile.findByIdAndRemove(id);

    res.json({ message: "File deleted successfully." });
}