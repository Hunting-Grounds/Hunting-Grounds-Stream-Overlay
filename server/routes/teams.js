import express from 'express';

import { getTeams, getTeam, createTeam, updateTeam, addScore, subScore, deleteTeam } from '../controllers/teams.js';

const router = express.Router();

router.get('/', getTeams);
router.post('/', createTeam);
router.get('/:id', getTeam);
router.patch('/:id', updateTeam);
router.delete('/:id', deleteTeam);
router.patch('/:id/addscore', addScore);
router.patch('/:id/subscore', subScore);

export default router;