const express =require('express');
const router = express.Router();
const controller = require('../controller/Cmain');

router.get('/', controller.main);
router.get('/players', controller.getAllPlayer);
router.get('/players/playerId',controller.getPlayer);
router.post('/players',controller.postPlayer);
router.patch('/players:playerId/team', controller.patchPlayer);

//delete
router.delete('/players/:playerId', controller.deletePlayer);

//get teams
router.get('/teams', controller.getTeams);

//get teams/:teamId
router.get('/teams/:teamId', controller.getTeam);

//get teams/:teamId/teamPlayers
router.get("/teams/:teamId/players",controller.getTeamPlayers);

router.get('/teamgames', controller.getAllGame);

module.exports = router;