![](https://img.shields.io/badge/Code%20Style-Standard-yellow.svg)
![](https://img.shields.io/badge/Dependencies-Express-green.svg)
![](https://img.shields.io/badge/License-Beerware-yellowgreen.svg)

# Totalin -Point of Sales Application-
---

## Table of Contents

- [Introduction](#introduction)
- [Configuration](#configuration)
- [Installation](#installation)
- [Other Dependencies](#Other_Dependencies)
- [License](#license)

---

## Introduction
Point Of Sale (POS) is an application that used to handle transcation on retail bussiness.

The application is written in Javascript language with MySQL (or MariaDB) ad the database. 

---


## Configuration
<ol>
  <li>Basic Configuration</li>
  - Node.js - Download and Install [Node.js](https://nodejs.org/en/)
</ol>

---

## Installation
### Clone
```bash
$ git clone https://github.com/wahyukhairina/poss_app
$ npm init
$ npm install express
$ npm install nodemon
$ npm install morgan
$ npm install body-parser
$ npm install mysql
$ npm install dotenv
$ npm install jsonwebtoken
$ npm install cors
```
### Create Environment Variable
```bash
$ cp .env.example .env
$ nano .env
```
```bash
DB_HOST = "YOUR HOST"
DB_USER = "YOUR USER"
DB_PASSWORD = "YOUR PASSWORD"
DB_NAME = "YOUR DATABASE NAME"

JWT_KEY = "secret key"
HEADERS_SECRET = ""
REDIS_KEY=""
PORT = Your Port
```
### Start Development Server
```bash
$ npm start
```
---

## Other_Dependencies

- [mysql](#)
- [crypto](#)
- [nodemon](#)
- [morgan](#)
- [body-parser](#)
- [dotenv](#)
- [jsonwebtoken](#)

---

## License

© [Wahyu Khairina](https://github.com/wahyukhairina/ " Wahyu Khairina")

---
