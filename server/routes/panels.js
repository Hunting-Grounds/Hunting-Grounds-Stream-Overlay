import express from 'express';

import { getPanels, getPanel, createPanel, updatePanel, deletePanel } from '../controllers/panels.js';

const router = express.Router();

router.get('/', getPanels);
router.post('/', createPanel);
router.get('/:id', getPanel);
router.patch('/:id', updatePanel);
router.delete('/:id', deletePanel);

export default router;