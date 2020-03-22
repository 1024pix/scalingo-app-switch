module.exports = (triggerId) => {
  return {
    "trigger_id": `${triggerId}`,
    "view": {
      "type": "modal",
      "callback_id": "release-number-selection",
      "title": {
        "type": "plain_text",
        "text": "Déployer une release",
        "emoji": true
      },
      "submit": {
        "type": "plain_text",
        "text": "Déployer",
        "emoji": true
      },
      "close": {
        "type": "plain_text",
        "text": "Annuler",
        "emoji": true
      },
      "blocks": [
        {
          "type": "section",
          "text": {
            "type": "mrkdwn",
            "text": "A message *with some bold text* and _some italicized text_."
          }
        },
        {
          "type": "input",
          "block_id": "deploy-release-number",
          "label": {
            "type": "plain_text",
            "text": " Numéro de release",
            "emoji": true
          },
          "element": {
            "type": "plain_text_input",
            "action_id": "release-number-value",
            "placeholder": {
              "type": "plain_text",
              "text": "Ex : v2.130.0",
              "emoji": true
            }
          }
        },
      ]
    }
  }
};