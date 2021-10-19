'use strict';

import express from 'express';
import upload from '../helpers/filehelper.js';
import {singleFileUpload, getallSingleFiles, getFile, deleteFile, updateFile} from '../controllers/fileuploaderController.js';
const router = express.Router();


//router.post('/upload', upload.single('file'), singleFileUpload);
router.post('/upload', upload.single('file'), singleFileUpload);
router.get('/', getallSingleFiles);
router.get('/:id', getFile);
router.patch('/:id', updateFile)
router.delete('/:id', deleteFile)

var fileRoutes = { routes: router}

export default fileRoutes