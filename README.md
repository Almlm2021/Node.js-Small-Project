<h1 align="center">Hacker News Scraper API 📰</h1>
<p>
  <img alt="Version" src="https://img.shields.io/badge/version-1.0.0-blue.svg?cacheSeconds=2592000" />
  <a href="#" target="_blank">
    <img alt="License: ISC" src="https://img.shields.io/badge/License-ISC-yellow.svg" />
  </a>
  <img alt="Node.js" src="https://img.shields.io/badge/Node.js-20.5.0-green.svg" />
  <img alt="Express" src="https://img.shields.io/badge/Express-5.1.0-lightgrey.svg" />
</p>

> A powerful Node.js web scraper that fetches the top 30 articles from Hacker News and provides filtering capabilities with a REST API and interactive frontend.

### 🏠 [Homepage](https://github.com/Almlm2021/Node.js-Small-Project)

## 🚀 Features

- **Web Scraping**: Automatically scrapes the latest top 30 articles from Hacker News
- **REST API**: Provides clean JSON endpoints for accessing the data
- **Smart Filtering**: Filter articles by title length with intelligent sorting
- **Interactive Frontend**: Web interface to view and filter articles in real-time
- **Comprehensive Testing**: Full test suite with Jest for reliability
- **Real-time Data**: Always get the most current articles from Hacker News

## 📋 API Endpoints

| Endpoint | Description |
|----------|-------------|
| `GET /` | Welcome message and interactive frontend interface |
| `GET /api/all` | Get all 30 articles with rank, title, points, and comments |
| `GET /api/filter/long_title` | Get articles with titles > 5 words (sorted by comments) |
| `GET /api/filter/short_title` | Get articles with titles ≤ 5 words (sorted by points) |

## 🛠️ Install

### Quick Install (All Dependencies)
```sh
npm install
```

### Individual Library Installation
```sh
# Production dependencies
npm install axios cheerio express

# Development dependencies  
npm install --save-dev jest readme-md-generator
```

### What Each Library Does
- **axios** - HTTP client for fetching Hacker News data
- **cheerio** - HTML parsing and web scraping (jQuery-like server-side)
- **express** - Web framework for creating REST API endpoints
- **jest** - Testing framework for running automated tests
- **readme-md-generator** - Tool for generating professional README files

## 🚀 Usage

Start the server:
```sh
npm run start
```

The API will be available at `http://localhost:3000`

### Example API Response

```json
[
  {
    "rank": 1,
    "title": "Introduction to Ada: a project-based exploration with rosettas",
    "comments": 14,
    "points": 68
  },
  {
    "rank": 2,
    "title": "<template>: The Content Template element",
    "comments": 19,
    "points": 58
  }
]
```

## 🧪 Run tests

```sh
npm test
```

## 🏗️ Project Structure

```
├── index.js          # Express server and API routes
├── scraper.js        # Web scraping logic using Cheerio
├── utils.js          # Filtering functions for title length
├── frontend/         # HTML frontend interface
│   └── index.html
├── tests/            # Jest test files
│   ├── scraper.test.js
│   └── utils.test.js
└── package.json
```

## 📊 Data Structure

Each article entry contains:

- **Number (rank)**: Position on Hacker News front page
- **Title**: Article headline
- **Points**: Number of upvotes
- **Comments**: Number of comments

## 🔧 Filtering Operations

### Long Titles Filter
- **Criteria**: Articles with titles containing more than 5 words
- **Sorting**: Ordered by number of comments (descending)
- **Use Case**: Find discussion-heavy articles

### Short Titles Filter
- **Criteria**: Articles with titles containing 5 words or fewer
- **Sorting**: Ordered by points (descending)
- **Use Case**: Find highly upvoted, concise articles

## 🛠️ Built With

- **Node.js** - Runtime environment
- **Express** - Web framework for API endpoints
- **Cheerio** - HTML parsing and web scraping
- **Axios** - HTTP client for fetching Hacker News
- **Jest** - Testing framework for quality assurance

## 📝 License

This project is licensed under the ISC License.

## Author

👤 **Alma Allaimouni**

* Website: https://github.com/Almlm2021
* Github: [@Almlm2021](https://github.com/Almlm2021)
* LinkedIn: [@Alma Allaimouni](https://www.linkedin.com/in/alma-allaimouni/)

## Show your support

Give a ⭐️ if this project helped you!

***
_This README was generated with ❤️ by [readme-md-generator](https://github.com/kefranabg/readme-md-generator)_