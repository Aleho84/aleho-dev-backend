# aleho-dev-backend

## 📑 Table of Contents

- [aleho-dev-backend](#aleho-dev-backend)
  - [📑 Table of Contents](#-table-of-contents)
  - [🧐 About](#-about)
  - [🚀 Getting Started](#-getting-started)
    - [Prerequisites](#prerequisites)
    - [Installing](#installing)
  - [🛠️ Usage](#️-usage)
  - [📞 Contact](#-contact)
  - [🤝 Contributing](#-contributing)

## 🧐 About

Welcome to the foundation of your digital world! This backend provides the essential building blocks for your applications. It's a template with a robust and scalable architecture, ready to handle data management, user authentication, and much more. Get ready to bring your wildest ideas to life! 🚀

In essence, a backend is the behind-the-scenes engine that powers your applications. It handles data storage, processing, and communication with the frontend (the part your users see and interact with). This template provides you with a solid structure to build upon, ensuring your applications are performant and reliable.

## 🚀 Getting Started

Let's get this show on the road! Follow these steps to get your backend up and running in no time.

### Prerequisites

* **Node.js and npm:** Make sure you have the latest versions installed. If not, download them from [https://nodejs.org/](https://nodejs.org/).
* **A code editor:** Visual Studio Code, Sublime Text, or whatever you prefer. The important thing is that you feel comfortable!

### Installing

1.  **Clone the repository:**
    ```bash 
    git clone https://github.com/Aleho84/aleho-dev-backend.git
    ```

3.  **Install dependencies:** 
    ```bash 
    npm install
    ```

5.  **Configure environment variables:** Create a `.env` file and fill in the necessary data (don't forget the JWT secret!)
    ```bash
    # .env Example
    NODE_ENV = "development"
    PROTOCOL = "http"
    HOST = "localhost"
    PORT = 8080
    KEY = "./certificates/key.pem"
    CERT = "./certificates/cert.pem"

    COOKIE_SECRET = "cookiesecret-replaceme"
    JWT_SECRET = "jwtsecret-replaceme"

    CORS = { origin: "*", methods: ["GET, POST, PUT, DELETE, OPTIONS"] }

    DB_MODE = "mongoDB"
    MONGOOSE_URI = "mongodb://localhost:27017/dev"
    ```

6.  **Start the server:** 
    ```bash
    npm start
    ```

8.  **Enjoy the API!** 🎉

## 🛠️ Usage
This API uses Swagger. Swagger is a fantastic tool that makes working with APIs a breeze. It gives you interactive documentation and lets you test endpoints right in your browser.The Swagger UI shows you all the available API endpoints (the paths) and what you can do with them.

http://localhost:8080/api/v1/docs/

## 📞 Contact
If you have any questions or suggestions, don't hesitate to contact me.

*   **Email:** alejandro.r.abraham@gmail.com
*   **GitHub:** [Aleho84](https://github.com/Aleho84)

## 🤝 Contributing
If you want to contribute, you're welcome! Just fork the repository, make your changes, and create a pull request. And don't forget to follow the code of conduct!