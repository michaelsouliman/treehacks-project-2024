var entire_website_text = document.body.innerText;
console.log(entire_website_text); // For demonstration; you'd likely want to send this data elsewhere

var url = "https://api.openai.com/v1/chat/completions";
var apiKey = "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";

var data = {
  model: "gpt-4", // You can replace this with "gpt-4" or any other available model
  prompt: "What is 2+2?", // Your prompt to the model
  temperature: 0.7,
  max_tokens: 150,
  top_p: 1.0,
  frequency_penalty: 0.0,
  presence_penalty: 0.0,
};

fetch(url, {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    Authorization: `Bearer ${apiKey}`,
  },
  body: JSON.stringify(data),
})
  .then((response) => response.json())
  .then((data) => {
    console.log("Response from the API:", data);
  })
  .catch((error) => {
    console.error("Error:", error);
  });
