const jwt = require('jsonwebtoken');


process.loadEnvFile('.env');


// Recuperiamo la chiave dal file .env (caricato all'avvio in test.js) [3]
const JWT_SECRET = process.env.JWT_SECRET;

if (!JWT_SECRET) {
  console.error("ERRORE: La chiave JWT_SECRET non è definita!");
  process.exit(1);
}

// Funzione standard per generare il token [7]
function generaToken(utente) {
  const payload = { 
    id: utente.id, 
    username: utente.username ,
    ruolo: utente.ruolo
  }; // [7, 8]
  
  // Firma il token usando la chiave segreta (scade in 1 ora) [7, 8]
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
}

// Middleware for JWT verification
const authenticateJWT = (req, res, next) => {
  // Get auth header - The Authorization header is commonly used to send authentication tokens
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    return res.status(401).json({ message: 'Authorization header missing' });
  }

  // Extract token from "Bearer <token>"
  const token = authHeader.split(' ')[1];

  if (!token) {
    return res.status(401).json({ message: 'Token missing' });
  }

  try {
    // Verify token
    const decoded = jwt.verify(token, JWT_SECRET);

    // Attach user to request
    req.user = decoded;

    next();
  } catch (error) {
    return res.status(403).json({ message: 'Invalid or expired token' });
  }
};

module.exports = {
  generaToken: generaToken,
  authenticateJWT: authenticateJWT
};