# Insurance Server

This project is an Insurance Server for a Gen-AI Mock Interview Chatbot. It provides an API endpoint for policy assistance.

## Prerequisites

- Node.js
- npm (Node Package Manager)
- Google Generative AI account and API key

## Setup

1. Clone the repository:
    ```sh
    git clone <repository-url>
    cd Insurance-Server
    ```

2. Install dependencies:
    ```sh
    npm install
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

## License

This project is licensed under the MIT License.