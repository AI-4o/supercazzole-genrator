# Supercazzole Generator

Un generatore di supercazzole nello stile del Conte Lello Mascetti del film "Amici Miei".

## Configurazione dell'ambiente

### Requisiti
- Node.js
- pnpm (o npm/yarn)
- API key di OpenAI

### Configurazione API Key

1. Crea un file `.env.local` nella root del progetto
2. Aggiungi la tua API key di OpenAI nel seguente formato:
   ```
   OPENAI_API_KEY=your_openai_api_key_here
   ```
3. Sostituisci `your_openai_api_key_here` con la tua API key personale di OpenAI

### Installazione e avvio

```bash
# Installa le dipendenze
pnpm install

# Avvia il server di sviluppo
pnpm dev
```

Il server sarà disponibile all'indirizzo [http://localhost:3000](http://localhost:3000).

## Note sulla sicurezza

- Non condividere mai il tuo file `.env.local` o la tua API key
- Il file `.env.local` è già escluso dal controllo di versione tramite `.gitignore`
- In ambienti di produzione, configura le variabili d'ambiente nel provider di hosting 