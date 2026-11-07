# 💼 Portfolio Personale v2.0

Pagina portfolio personale realizzata con **HTML, CSS e JavaScript vanilla**.
Presenta il mio percorso, le competenze che sto approfondendo, le esperienze e i progetti svolti, con un modulo di contatto in finestra modale.

> 🔁 **VERSIONE 2.0.** Questo progetto riprende e sviluppa il lavoro svolto per il primo progetto settimanale del Master in Full-Stack AI Developer di EPICODE.
> La versione originale è disponibile qui: [epicode-progetto-settimana-1](https://github.com/francescamorrone/progetto-settimana-1).

## Anteprima

🔗 **Demo live:** (https://francescamorrone.github.io/portfolio-flex/)

## Sezioni

| Sezione | Contenuto |
| --- | --- |
| **Chi Sono** | Foto profilo e presentazione, con capolettera decorativo |
| **Competenze** | Tecnologie in studio mostrate come "pillole" cliccabili (checkbox stilizzate) |
| **Esperienze** | Tabella con percorso formativo e lavorativo, scorrevole in orizzontale su schermi piccoli |
| **Progetti** | Card dei lavori svolti, con link ai repository GitHub e badge "NEW" sull'ultimo |
| **Contatti** | Pulsante "Scrivimi" che apre un modulo di contatto in modale |

## Funzionalità

- **Header sticky dinamico:** dopo 50px di scroll diventa più compatto e la tagline scompare con una transizione.
- **Navigazione con icone** (Font Awesome) e scroll fluido verso le sezioni.
- **Competenze interattive:** le pillole usano checkbox nascoste e il selettore CSS `:checked`, senza JavaScript.
- **Card progetto** con effetto hover, stili alternati e badge animato.
- **Modale di contatto** con campi nome, email, motivo, data preferita, messaggio e consenso. Si chiude con il pulsante ×, con il tasto `Esc` o cliccando sullo sfondo scuro.
- **Pulsante "Torna in cima"** fisso in basso a destra, con animazione al passaggio del mouse.
- **Scrollbar personalizzata** e palette coordinata in blu e oro.
- **Design responsive** con layout che passa da colonna a riga sopra i 768px.
- **Accessibilità:** `aria-label` sul pulsante "Torna in cima", `alt` sull'immagine, etichette associate ai campi del form, rispetto di `prefers-reduced-motion`.

## Tecnologie

| Tecnologia | Uso |
| --- | --- |
| HTML5 | Struttura semantica, tabella, form |
| CSS3 | Flexbox, `clamp()`, `position: sticky`, `@keyframes`, pseudo-elementi, media query |
| JavaScript (ES6) | Header allo scroll, apertura e chiusura del modale |
| [Font Awesome 6.5](https://fontawesome.com/) | Icone, caricate da CDN |
| [Google Fonts](https://fonts.google.com/) | Playfair Display per titoli e intestazioni |

## Struttura del progetto

```
portfolio/
├── index.html
├── tutti-i-progetti.html
├── README.md
└── assets/
    ├── CSS/
    │   └── style.css
    ├── IMG/
    │   ├── avatar.png
    │   └── header-bg.jpg
    └── JS/
        └── script.js
```

## Come avviarlo

Non servono installazioni né build.

1. Clona il repository:
   ```bash
   git clone https://github.com/francescamorrone/<nome-repo>.git
   ```
2. Apri `index.html` nel browser, oppure usa un server locale (ad esempio l'estensione **Live Server** di VS Code).

## Palette

| Colore | Valore |
| --- | --- |
| Blu principale | `#193366` |
| Oro (accenti) | `hsl(45, 90%, 60%)` |
| Sfondo pagina | `#f4f1ec` |
| Sfondo modale | `#ECE6D8` |
| Footer | `#172136` |
