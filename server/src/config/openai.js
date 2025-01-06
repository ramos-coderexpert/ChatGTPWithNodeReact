import OpenAI from 'openai';

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
      response_format: {
        type: 'text',
      },
      temperature: 0,
      max_completion_tokens: 2048,
      top_p: 1,
      frequency_penalty: 0,
      presence_penalty: 0,
    };
  }
};
