Mitt webbshopprojekt

Installation

Klona projektet:

```bash
git clone https://github.com/KingSloth-glitch/react-webshop-2026.git
```

Gå till projektmappen:

```bash
cd react-webshop-2026/my-project-shop
```

Installera beroenden:

```bash
npm install
```

Starta utvecklingsservern:

```bash
npm run dev
```

Öppna sedan webbläsaren på:

```txt
http://localhost:5173
```

Debounce

Sökfunktionen använder debounce med `setTimeout()` och `clearTimeout()` för att minska antalet API-anrop när användaren skriver i sökfältet.

Exempel:

```javascript
const timer = setTimeout(() => {
  // API-anrop
}, 500);

return () => clearTimeout(timer);
```

Detta gör att sökningen endast skickas när användaren har slutat skriva i 500 ms.

Felhantering med try/catch

Alla API-anrop använder `try/catch` för att fånga fel och förhindra att applikationen kraschar vid nätverksproblem.

Exempel:

```javascript
try {
  const response = await fetch(url);
  const data = await response.json();
} catch (error) {
  console.error(error);
}
```


