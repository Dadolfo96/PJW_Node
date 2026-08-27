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
    username: utente.username 
  }; // [7, 8]
  
  // Firma il token usando la chiave segreta (scade in 1 ora) [7, 8]
  return jwt.sign(payload, JWT_SECRET, { expiresIn: '1h' });
}

// Funzione standard per verificare la validità del token [7]
function verificaToken(token) {
  if (!token) {
    throw new Error("Accesso negato: Token mancante."); // [7, 9]
  }
  try {
    // Decodifica e verifica l'integrità del token [7, 9]
    return jwt.verify(token, JWT_SECRET);
  } catch (error) {
    throw new Error("Accesso negato: Token non valido o scaduto."); // [7, 9]
  }
}

module.exports = {
  generaToken: generaToken,
  verificaToken: verificaToken
};