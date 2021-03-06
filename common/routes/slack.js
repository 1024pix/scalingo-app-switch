const { verifySignatureAndParseBody } = require('../services/slack/security');
const slackbotController = require('../controllers/slack');

const slackConfig = {
  payload: {
    allow: ['application/json', 'application/x-www-form-urlencoded'],
    parse: false
  },
  pre: [
    { method: verifySignatureAndParseBody, assign: 'payload' }
  ]
};

module.exports = [
  {
    method: 'POST',
    path: '/slack/commands/create-and-deploy-pix-lcms-release',
    handler: slackbotController.createAndDeployPixLCMSRelease,
    config: slackConfig
  },
  {
    method: 'POST',
    path: '/slack/commands/create-and-deploy-pix-site-release',
    handler: slackbotController.createAndDeployPixSiteRelease,
    config: slackConfig
  },
  {
    method: 'POST',
    path: '/slack/commands/create-and-deploy-pix-ui-release',
    handler: slackbotController.createAndDeployPixUIRelease,
    config: slackConfig
  },
  {
    method: 'POST',
    path: '/slack/commands/create-and-deploy-pix-bot-release',
    handler: slackbotController.createAndDeployPixBotRelease,
    config: slackConfig
  },
  {
    method: 'POST',
    path: '/slack/commands/create-and-deploy-pix-datawarehouse-release',
    handler: slackbotController.createAndDeployPixDatawarehouseRelease,
    config: slackConfig
  },
  {
    method: 'POST',
    path: '/slack/commands/create-and-deploy-pix-hotfix',
    handler: slackbotController.createAndDeployPixHotfix,
    config: slackConfig
  },
  {
    method: 'POST',
    path: '/slack/commands/app-status',
    handler: slackbotController.getAppStatus,
    config: slackConfig
  },
  {
    method: 'POST',
    path: '/slack/commands/deploy-last-version',
    handler: slackbotController.deployLastVersion,
    config: slackConfig
  },
  {
    method: 'POST',
    path: '/slack/interactive-endpoint',
    handler: slackbotController.interactiveEndpoint,
    config: slackConfig
  },
];
