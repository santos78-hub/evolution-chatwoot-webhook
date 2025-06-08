const express = require('express');
const axios = require('axios');
const app = express();

app.use(express.json());

app.post('/hooks/evolution', async (req, res) => {
  const payload = req.body;

  const {
    contact,
    message
  } = payload;

  try {
    await axios.post('https://elite1-chatwoot.tnt6ec.easypanel.host/api/v1/accounts/1/conversations', {
      inbox_id: 1,
      source_id: contact,
      contact: {
        name: contact,
        phone_number: contact
      },
      messages: [{
        content: message,
        message_type: 'incoming'
      }]
    }, {
      headers: {
        'api_access_token': 'FyccmUiHH2iLGbowSeWkgEBg',
        'Content-Type': 'application/json'
      }
    });

    res.status(200).send('Mensagem enviada com sucesso');
  } catch (error) {
    console.error('Erro ao enviar:', error.message);
    res.status(500).send('Erro ao enviar');
  }
});

app.listen(3000, () => {
  console.log('Ser
