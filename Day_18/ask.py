import os

from dotenv import load_dotenv
from anthropic import Anthropic


# Load Environment Variables
load_dotenv()


# Create Claude Client
client = Anthropic(
    api_key=os.environ.get("ANTHROPIC_API_KEY")
)


documents = [
    "Python is a programming language.",
    "Claude is developed by Anthropic.",
    "Revit API is used for plugin development.",
    "RAG retrieves relevant documents before generating answers.",
    "TypeScript is commonly used for backend development."
]


# Search Function
def search_document(question: str) -> str:

    question = question.lower()

    for document in documents:

        if question in document.lower():
            return document

    return documents[0]


# Ask Claude
def ask(question: str, context: str) -> str:

    message = client.messages.create(

        model="claude-opus-4-8",

        max_tokens=1024,

        system="""
Answer ONLY using the provided context.
If the answer is not available in the context, say that you do not know.
""",

        messages=[
            {
                "role": "user",
                "content": f"""
Context:
{context}

Question:
{question}
"""
            }
        ]
    )

    return message.content[0].text


# Main Function
def main():

    question = input("Enter your question: ")

    context = search_document(question)

    answer = ask(question, context)

    print("\nAnswer:\n")

    print(answer)


# Program Entry Point
if __name__ == "__main__":
    main()