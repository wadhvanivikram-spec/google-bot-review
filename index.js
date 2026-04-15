const { generateReply } = require("./ai");
const { sendTelegram } = require("./telegram");

async function run() {
  console.log("Running review bot...");

  const review = {
    rating: 5,
    comment: "Great service for GST filing"
  };

  const reply = await generateReply(review);

  await sendTelegram(`
New Review ⭐${review.rating}

${review.comment}

Reply:
${reply}
`);

  console.log("Done");
}

run();
