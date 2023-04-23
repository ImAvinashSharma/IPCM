## Kind request not to touch the main branch

# IPCS

## How to run

### Prerequisites

- docker
- docker-compose
- node js 14 and above
- nginx

### Run command

```bash
  docker run -d -p 9042:9042 cassandra:4.0.7
  cd server
  npm run dev
  cd ../client
  npm start
```
