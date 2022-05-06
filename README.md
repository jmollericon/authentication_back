
## This is the back end for an authentication app

## API Reference

#### Sign Up

```http
  POST /api/signup
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `firstname` | `string` | **Required**. Describe the name of the new user |
| `lastname` | `string` | **Required**. Describe the last name of the new user |
| `email` | `string` | **Required**. Must be a valid email |
| `password` | `string` | **Required**. This is the password, min 4 characters |

#### Sign In

```http
  POST /api/signin
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `email`      | `string` | **Required**. Email of the user |
| `password`      | `string` | **Required**. Password of the user |

#### Sign Out

```http
  GET /api/signout
```

#### Check if the user is authenticated

```http
  GET /api/secret
```
## Description

This project was developed with the following technologies.

![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)
![Express.js](https://img.shields.io/badge/express.js-%23404d59.svg?style=for-the-badge&logo=express&logoColor=%2361DAFB)
![MongoDB](https://img.shields.io/badge/MongoDB-%234ea94b.svg?style=for-the-badge&logo=mongodb&logoColor=white)

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file, also in the project you can find a .env.example file

`PORT`

`DATABASE_URL`

`JWT_SECRET`


## Installation

Installtion of the project

```bash
  git clone https://github.com/jmollericon/authentication_back.git
  cd authentication_back
  npm install
  npm start
```

## Authors

- [@jmollericon](https://www.github.com/jmollericon)
