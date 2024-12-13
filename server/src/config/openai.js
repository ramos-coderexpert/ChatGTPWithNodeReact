const OpenAI = require('openai');

module.exports = class openai {
  static configuration() {
    const openai = new OpenAI({
      apiKey: process.env.OPENAI_API_KEY,
    });

    return openai;
  }

  static textCompletion({ prompt }) {
    return {
      model: 'gpt-4o-mini',
      prompt: `${prompt}`,
      temperature: 0,
      max_tokens: 3500,
      top_p: 1,
      frequency_penalty: 0.5,
      presence_penalty: 0,
    };
  }
};
