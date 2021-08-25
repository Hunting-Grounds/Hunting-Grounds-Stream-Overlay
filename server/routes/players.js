import express from 'express';

import { getPlayers, getPlayer, createPlayer, updatePlayer, addScore, subScore, deletePlayer } from '../controllers/players';

const router = express.Router();

router.get('/', getPlayers);
router.post('/', createPlayer);
router.get('/:id', getPlayer);
router.patch('/:id', updatePlayer);
router.delete('/:id', deletePlayer);
router.patch('/:id/addscore', addScore);
router.patch('/:id/subscore', subScore);

export default router;