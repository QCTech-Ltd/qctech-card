# Scheda di Contatto Digitale - Quantum Code Technologies Ltd.

Questo progetto contiene i file per creare una **scheda di contatto digitale interattiva (business card)** per Quantum Code Technologies Ltd.
È progettata per essere caricata online (es. su un server web, GitHub Pages, o Firebase Hosting) e collegata a **codici QR** o **tag NFC** per consentire a clienti e collaboratori di scansionarla o avvicinarla ai loro cellulari per salvare istantaneamente le informazioni.

## Contenuto del Progetto

1. **`quantum_code_contact.vcf`**: Il file vCard statico standard. Può essere importato direttamente nei contatti di qualsiasi dispositivo iOS o Android.
2. **`index.html`**: Pagina web per la scheda contatto digitale, ottimizzata per dispositivi mobili con design moderno "glassmorphism", neon ed elementi interattivi.
3. **`style.css`**: Il foglio di stile con una palette scura premium, gradienti fluidi, ed animazioni per un effetto hi-tech.
4. **`script.js`**: Gestisce il download dinamico del vCard, la generazione locale del codice QR, e l'integrazione con la funzionalità nativa di condivisione dello smartphone (Web Share API).

---

## Come Usarla in Digitale

### 1. Hosting (Caricamento Online)
Per funzionare tramite tag NFC o codici QR, la pagina deve essere pubblicata online. Alcuni metodi gratuiti e immediati:
- **GitHub Pages**: Carica questa cartella su una repository GitHub e attiva "GitHub Pages" nelle impostazioni.
- **Netlify / Vercel**: Trascina e rilascia la cartella del progetto per avere un link pubblico in 10 secondi.
- **Hosting Proprietario**: Carica i file nello spazio web del vostro dominio principale (es. `https://qc-tech.co.uk/contatti/`).

Una volta caricata, avrai un link del tipo: `https://tuo-dominio.com/quantum-card`.

---

## Come Abbinarla ai Metodi di Condivisione Fisici

### A. Scannerizzazione tramite Codice QR
- Il codice QR viene generato automaticamente in fondo alla pagina web interattiva.
- Puoi stampare quel codice QR su biglietti da visita fisici, brochure, o esporlo su uno schermo.
- Chiunque lo inquadri con la fotocamera del telefono aprirà la scheda di contatto e potrà salvare le informazioni con un tocco.

### B. Tag NFC (Passaggio sotto al Cellulare)
I tag NFC (disponibili come adesivi, tessere in plastica o portachiavi a pochissimo prezzo) possono essere programmati per aprire il link della scheda contatto quando vengono avvicinati a uno smartphone.

#### Istruzioni per programmare un Tag NFC:
1. **Acquista i Tag NFC**: Assicurati di acquistare tag di tipo **NTAG213** o **NTAG215** (i più compatibili con tutti i cellulari).
2. **Scarica un'App di Scrittura**:
   - Cerca ed installa l'applicazione gratuita **NFC Tools** (disponibile sia su [Apple App Store](https://apps.apple.com/it/app/nfc-tools/id1252962749) che su [Google Play Store](https://play.google.com/store/apps/details?id=com.wakdev.wdnfc)).
3. **Scrivi il Link sul Tag**:
   - Apri **NFC Tools** sul tuo smartphone.
   - Vai alla scheda **Scrivi** (Write) -> **Aggiungi record** (Add a record).
   - Seleziona **URL / URI**.
   - Inserisci l'indirizzo web dove hai caricato la scheda contatto (es. `https://qc-tech.co.uk/contatti/`).
   - Clicca su **Scrivi** (Write) e avvicina il tag NFC sul retro del telefono per completare la scrittura.
4. **Pronto all'Uso!**
   - Ora, basterà avvicinare il tag NFC alla parte superiore di un iPhone o al retro di un telefono Android (con NFC attivo) per far apparire una notifica che apre direttamente la vostra scheda di contatto digitale.
