# AI Insurance policy recommendation assistant

This project is an AI-powered chatbot designed to assist users with insurance-related queries. It uses natural language processing to understand and respond to user inputs.

# Insurance Client 

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Installation

To get started with the project, clone the repository and install the dependencies:

```bash
git clone https://github.com/hamzagodme/ai-insurance-policy-agent.git
cd insurance-client
npm install
```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.


The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


# Insurance Server (Google geminin AI)

This is Insurance Server for a Gen-AI Mock Interview Chatbot. It provides an API endpoint for policy assistance using google gen AI

## Prerequisites

- Node.js
- npm (Node Package Manager)
- express
- Google Generative AI account and API key

## Setup

1. Clone the repository:
    ```bash
    git clone https://github.com/hamzagodme/ai-insurance-policy-agent.git
    cd insurance-server
    ```

2. Install dependencies:
    ```sh
    npm install cors -dotenv -express
    ```

3. Create a `.env` file in the root directory and add the necessary environment variables:
    ```env
    PORT=4000
    GEMINI_API_KEY=your_google_generative_ai_api_key
    ```

## Running the Server

To start the server, run:
```sh
npm start
```

The server will be live at `http://localhost:4000`.

## API Endpoints

### Policy Assistant

- **URL:** `/api/policy-assistant`
- **Method:** `POST`
- **Description:** Endpoint for policy assistance.
- **Request Body:** 
    ```json
    {
        "query": "Your query here"
    }
    ```
- **Response:**
    ```json
    {
        "response": "Response from the policy assistant"
    }
    ```

## Error Handling

The server includes error handling middleware to manage errors gracefully.

## Usage

After starting the development server, you can interact with the chatbot by typing your insurance-related questions into the chat interface. The chatbot will respond with relevant information based on its training data.

## Contributing

If you would like to contribute to the project, please fork the repository and create a pull request with your changes. We welcome all contributions!

## License

This project is licensed under the MIT License.
