import express from 'express';

import { getTeams, createTeam, updateTeam } from '../controllers/teams.js';

const router = express.Router();

router.get('/', getTeams);
router.post('/', createTeam);
router.patch('/:id', updateTeam);

export default router;