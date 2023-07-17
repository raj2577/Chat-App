# React Chat App with Room System

This is a chat application built using React, Firebase, and JavaScript. It allows users to chat with each other in real-time using a room system. The app utilizes Firebase Authentication for user authentication and Firebase Firestore for storing and retrieving chat messages.
<hr>
## URL <a href="https://chat-app-raj.netlify.app/">https://chat-app-raj.netlify.app/ </a>

## Features

- User registration and login using Google authentication.
- Real-time chat functionality within different rooms.
- Displaying the list of online users in each room.
- Timestamps for messages.
- Responsive design for mobile and desktop devices.

## Technologies Used

- React for building the frontend user interface.
- Firebase Authentication for user authentication.
- Firebase Firestore for data storage and retrieval.
- Firebase Hosting for deployment.

## Prerequisites

To run this application locally, you need to have the following installed on your machine:

- Node.js and npm (Node Package Manager)

## Getting Started

1. Clone the repository:

```bash
git clone https://github.com/raj2577/Chat-App
```

2. Navigate to the project directory:

```bash
cd chat-app
```

3. Install the dependencies:

```bash
npm install
```

4. Create a `.env` file in the project root directory and add your Firebase configuration information. Use the `.env.example` file as a template.

5. Start the development server:

```bash
npm start
```

6. Open your browser and visit `http://localhost:3000` to see the application running.

## Deployment

To deploy the application to Firebase Hosting, follow these steps:

1. Create a Firebase project in the Firebase console.
2. Set up Firebase Authentication and Firestore in your Firebase project.
3. Update the Firebase configuration in the `.env` file with your Firebase project details.
4. Build the production-ready code:

```bash
npm run build
```

5. Deploy the application to Firebase Hosting:

```bash
firebase deploy
```

## Contributing

Contributions to the project are welcome. Here are a few ways you can contribute:

- Report bugs and issues.
- Suggest new features or improvements.
- Fix issues and submit pull requests.

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements

- The Firebase team for providing the Firebase SDKs and services.
- Open-source contributors for their valuable contributions.

