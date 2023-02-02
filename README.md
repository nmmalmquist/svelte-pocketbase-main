
# Svelte + Vite + TypeScript + PocketBase + Docker

This project utilizes Docker to run containers that run Svelte (A JS framework) and PocketBase (A BaaS executable).

## Getting started

### Install Node Dependencies
If you have just copied this code from Github or another service, just this command to get all node_module dependencies
```
npm i
```
### For Development
You need to get Pocketbase running in the docker container.
```
npm run docker-db
```
Then, start the Svelte front end using Vite
```
npm run dev
```
Both commands should tell you where the code is running locally

### For Deployment
You want to run both docker containers. In doing so, the Svelte frontend will run a 'build' and host on NGNIX inside the docker container

```
npm run docker-all
```
