const openai = require('../config/openai');

module.exports = {
  async sendText(req, res) {
    const openaiAPI = openai.configuration();

    try {
      const response = await openaiAPI.createCompletion(
        openai.textCompletion('me de nomes de artigos de node')
      );

      return res
        .status(200)
        .json({ sucess: true, data: response.data.choices[0].text });
    } catch (error) {
      return res.status(400).json({
        sucess: false,
        error: error.response
          ? error.response
          : 'there was an issue on the server',
      });
    }
  },
};
