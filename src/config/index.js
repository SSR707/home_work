import db from './db.js'
import email from './email.js'
import port from './port.js'
import client from './client.js'
import jwt from './jwt.js'
export const config = {
    ...db,
    ...email,
    ...port,
    ...client,
    ...jwt
}