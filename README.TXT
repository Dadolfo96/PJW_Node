========================================================================
                      RESOCONTO TECNICO E STRUTTURA: PJW_NODE
========================================================================

Questo documento descrive l'architettura, le scelte tecnologiche e i
dettagli di configurazione dell'applicazione backend PJW_Node sviluppata
in Node.js con database relazionale SQL Server.

L'applicazione e' interamente strutturata per operare e poter essere
testata a livello di logica pura, svincolandola completamente dal layer
di trasporto (Express o framework HTTP).

------------------------------------------------------------------------
1. ARCHITETTURA DELL'APPLICAZIONE (3-TIER ARCHITECTURE)
------------------------------------------------------------------------
L'applicazione implementa un pattern a tre livelli (Controller-Service-
Repository) per garantire il disaccoppiamento e la manutenibilita':

- Models (Domain Layer):
  * User.js / Card.js
  * Rappresentano le entita' di business con campi privati (es. #password)
    e validazione rigida dei tipi direttamente nel costruttore.
  * L'accesso e la modifica dei campi privati avvengono esclusivamente
    tramite i getter e setter pubblici (es. getPassword(), setPassword()).

- Repositories (Data Access Layer):
  * UserRepository.js / CardRepository.js
  * Gestiscono l'interazione diretta con SQL Server caricando ed eseguendo
    le query definite centralmente in config/queries.json.
  * Convertono i record restituiti dal database in istanze dei relativi
    Model. Nota tecnica: Gestiscono l'indicizzazione array [0] sul
    recordset mssql per estrarre la singola riga corretta, gestendo i
    casi in cui la query restituisce un array vuoto [].

- Services (Business Logic Layer):
  * UserService.js / CardService.js
  * Contengono la logica di business applicativa e orchestrano le chiamate
    ai rispettivi repository.

- Controllers (Application Layer):
  * AuthController.js / UserControllerTest.js
  * Gestiscono il flusso applicativo e l'applicazione dei controlli di
    sicurezza (generazione e verifica dei token).

------------------------------------------------------------------------
2. AUTENTICAZIONE E SICUREZZA
------------------------------------------------------------------------
La sicurezza e' integrata a livello logico anziche' delegata a middleware
di rete (es. Express middleware):

- Password Hashing (Bcrypt):
  * Le password degli utenti non vengono mai salvate in chiaro.
  * In fase di registrazione, la password viene criptata in modo asincrono
    tramite bcrypt con un fattore di costo (salt rounds) pari a 10.
  * In fase di login, la password in chiaro fornita dal client viene
    verificata tramite bcrypt.compare contro l'hash memorizzato sul DB.

- Stateless Auth con JWT (JSON Web Tokens):
  * Login: Verifica delle credenziali e firma di un token d'accesso
    stateless contenente un payload (id, username, ruolo) con scadenza
    di 1 ora, cifrato usando la chiave JWT_SECRET.
  * Protezione CRUD: Ogni metodo del controller (lettura, aggiornamento,
    cancellazione) richiede il passaggio del token come parametro, che
    viene validato crittograficamente prima di accedere al database.

------------------------------------------------------------------------
3. GESTIONE DELLE VARIABILI D'AMBIENTE (.ENV)
------------------------------------------------------------------------
L'applicazione sfrutta le capacita' native di Node.js (v20.12+) per la
gestione dei file .env, azzerando le dipendenze esterne (es. dotenv):

- Metodo 1 (In codice):
  * Utilizzo di process.loadEnvFile() che carica nativamente il file .env
    nella root mappanandolo nell'oggetto globale process.env.

- Metodo 2 (Da linea di comando):
  * Avvio dello script iniettando l'ambiente prima dell'interpretazione:
    node --env-file=.env percorso/file.js
  * Questo approccio consente di avere zero righe di codice dedicate
    all'infrastruttura d'ambiente all'interno dell'applicazione.

------------------------------------------------------------------------
4. DATABASE & RELAZIONI (SQL SERVER)
------------------------------------------------------------------------
Il database relazionale Microsoft SQL Server ospita due tabelle principali:

- Tabella Users:
  * Contiene le informazioni di profilo e credenziali dei collaboratori.
  * Campo password dimensionato opportunamente (VARCHAR(60) o superiore)
    per evitare il troncamento dell'hash di bcrypt.

- Tabella Cards:
  * Campo 'stato' vincolato tramite un vincolo CHECK di tabella.
  * Campi 'data_creazione' (inserita automaticamente all'inserimento) e
    'data_aggiornamento' (gestita da trigger SQL Server ad ogni modifica).
  * Relazione Cards.id_user_esecutore -> Users.id gestita nativamente
    tramite vincolo di chiave esterna (Foreign Key).

- Query Esternalizzate:
  * Tutte le query SQL dell'applicazione sono dichiarate nel file JSON
    config/queries.json, permettendo modifiche veloci senza alterare il
    codice JavaScript dei Repository.

------------------------------------------------------------------------
5. ESECUZIONE DEI TEST
------------------------------------------------------------------------
Per verificare la corretta esecuzione di tutto il flusso in assenza del
layer HTTP o di Express, eseguire lo script di test integrato:

Comando di esecuzione consigliato:
node --env-file=.env src/main_test_user.js

Lo script esegue sequenzialmente:
1. Registrazione dell'utente con password cifrata (bcrypt.hash).
2. Login con verifica (bcrypt.compare) ed emissione del token JWT.
3. Accesso, modifica ed eliminazione dei record tramite chiamate CRUD
   protette (con convalida crittografica del token generato).
