const OpenAI = require("openai");

const client = new OpenAI({
  apiKey: process.env.OPENAI_KEY,
});

async function generateReply(review) {
  const prompt = `
You are Wadhwani Associates (CA firm).

Services: GST, ITR, ROC.

Write a short professional reply:
Review: "${review.comment}"
Rating: ${review.rating}
`;

  const res = await client.chat.completions.create({
    model: "gpt-4.1-mini",
    messages: [{ role: "user", content: prompt }],
  });

  return res.choices[0].message.content;
}

module.exports = { generateReply };
