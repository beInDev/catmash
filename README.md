This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, populate your .env.local files with the following parameters and according values:

```ini
MONGO_URI=mongodb://localhost:27017/
MONGO_AUTH_SOURCE=admin
MONGO_USER=admin
MONGO_PASSWORD=admin
MONGO_DB=catmash
```

Then, run the server

```bash
npm i
npm run dev
# or
yarn
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Context

This is a project done in 48 hours to illustrate technical skills on a Node.js stack.

### Content

The aim is to elect the cutest cat by voting between two cats each time.

Rating system is based on the famous [ELO rating system](https://en.wikipedia.org/wiki/Elo_rating_system).
