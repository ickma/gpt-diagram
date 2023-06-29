# What is it?

The ChatGPT Diagram Creator is a project that utilizes OpenAI's GPT language model to automatically generate diagrams based on natural language descriptions or text. This tool is designed for engineers or anyone who needs to create diagrams quickly and easily.

# How do I run it?

To run the ChatGPT Diagram Creator, you will need to set up your environment by following these steps:

+ Set your OpenAI API key as an environment variable using the following command: 
`export REACT_APP_OPENAI_API_KEY=YOUR_API_KEY(required)`
+ (Optional) Set the GPT model you want to use by setting another environment variable REACT_APP_MODEL with the name of the model. If not specified, the default model gpt-3.5 will be used.
+ Run the project using `yarn start`.

# How do I generate a diagram?

You can generate a diagram by inputting either a natural language description of the chart you want,
 or  just provide a part of a document into the tool. The GPT language model will understand your request and generate a diagram accordingly. If the model fails to understand your request or determine that it is not related to a diagram, it will let you know.
 ![image](https://github.com/ickma/gpt-diagram/assets/9997461/4e4856fe-22f7-4b9f-8da8-326cb0cbbe52)


# Limitations

Please note that this project is still in its early stages, and there are lots of limitations to be aware of:

+ The generated diagram is not editable.
+ There is currently no way to save the diagram locally or to cloud storage.
+ Conversation history is not enabled yet, but will be added soon to improve AI understanding of context.
+ The UI is very basic at present and may be improved over time.
+ The GPT3.5 model may make mistakes when generating diagrams, but detailed prompts can help minimize errors. Further testing with newer models like GPT4 will be conducted in the future.

# Acknowledgments

This project is built on top of the following open source libraries:

+ [Langchain](https://github.com/hwchase17/langchainjs)
+ [Mermaid](https://github.com/mermaid-js/mermaid)
+ React
+ OpenAI
