import dotenv from "dotenv";
import Anthropic from "@anthropic-ai/sdk";

dotenv.config();


const client = new Anthropic({
    apiKey: process.env.ANTHROPIC_API_KEY,
})
const documents: string[] = [
    "Python is a programming language.",
    "Claude is developed by Anthropic.",
    "Revit API is used for plugin development.",
    "RAG retrieves relevant documents before generating answers.",
    "TypeScript is commonly used for backend development."
];


function searchDocument(question: string): string {

    const keyword = question.toLowerCase();

    for (const document of documents) {

        if (document.toLowerCase().includes(keyword)) {
            return document;
        }

    }

    return documents[0];
}


async function ask(
    question: string,
    context: string
): Promise<string> {

    const message = await client.messages.create({

        model: "claude-opus-4-8",

        max_tokens: 1024,

        system: `
Answer ONLY using the provided context.
If the answer is not available in the context, say that you do not know.
`,

        messages: [
            {
                role: "user",
                content: `
Context:
${context}

Question:
${question}
`
            }
        ]
    });

    return message.content[0].text;
}


async function main(): Promise<void> {

    const question = "What is Python?";

    const context = searchDocument(question);

    const answer = await ask(question, context);

    console.log("\nAnswer:\n");

    console.log(answer);
}


main();