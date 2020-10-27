import http from 'k6/http';
import { check, sleep } from 'k6';

export const options = {
  stages: [
    { duration: '30s', target: 200 },
    { duration: '1m', target: 500 },
    { duration: '2m', target: 1000 },
    { duration: '1m', target: 500 },
    { duration: '30s', target: 200 },
  ],
};

export default function() {
  // GET a random gallery from the server
  const id = Math.ceil(Math.random() * 8000000);
  const url = `http://localhost:3004/api/restaurants/${id}/photos`;

  const resp = http.get(url);
  sleep(.03);
}