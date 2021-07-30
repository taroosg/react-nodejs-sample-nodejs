import admin from 'firebase-admin';

import { createRequire } from 'module'
const require = createRequire(import.meta.url)
const serviceAccount = require('./chat-app-test-4e1e4-firebase-adminsdk-gqqfq-7df5937351.json')

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});

export default admin;