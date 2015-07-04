/**
 * Module dependencies
 */
var express = require('express'),
    controllers = require('../controllers')
    inviteController = require('../controllers/invite'),
    roomController = require('../controllers/room');

/**
 * the new Router exposed in express 4
 * the indexRouter handles all requests to the `/` path
 */
var indexRouter = express.Router();

/**
 * this accepts all request methods to the `/` path
 */
indexRouter.route('/')
  .all(controllers.index);

indexRouter.route('/invite').get(inviteController.getInvite);
indexRouter.route('/invite').post(inviteController.postInvite);

indexRouter.route('/room/:roomRef').get(roomController.getRoom);

exports.indexRouter = indexRouter;
