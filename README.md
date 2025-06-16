# Ventixe - Eventhanteringssystem (Frontend)

Detta projekt utgör frontend-delen av ett MVP-system för hantering av event, utvecklat som en del av kursen *Molntjänster och distribuerade system*.

## 🌍 Publicerad MVP

👉 [https://black-pebble-0e114a103.6.azurestaticapps.net](https://black-pebble-0e114a103.6.azurestaticapps.net)

## 🌐 Deployment

* Frontend: [http://localhost:3000](http://localhost:3000)
* Backend (exempel): [http://localhost:5001](http://localhost:5001)

## 🚀 Funktioner

* Inloggning och registrering (JWT-baserad)
* Skyddade sidor ("Protected Route")
* Hämtning och listning av events via Axios
* TailwindCSS-baserad UI
* React Router för navigering mellan sidor

## 📁 Struktur

```
ventixe-frontend/
├── public/
├── src/
│   ├── components/
│   │   └── EventList.tsx
│   ├── Pages/
│   │   ├── Home.tsx
│   │   ├── Login.tsx
│   │   ├── Register.tsx
│   │   └── Protected.tsx
│   ├── index.tsx
│   ├── index.css
├── tailwind.config.js
├── postcss.config.js
├── craco.config.js
├── package.json
```

## 🔧 Installation

1. **Klona repo:**

   ```bash
   git clone <REPO-URL>
   cd ventixe-frontend
   ```

2. **Installera beroenden:**

   ```bash
   npm install
   ```

3. **Starta utvecklingsservern:**

   ```bash
   npm start
   ```

## 🔍 Exempel: Hämta events

```ts
axios.get<Event[]>("http://localhost:5001/api/events")
  .then(res => setEvents(res.data))
  .catch(err => console.error(err));
```

## 🌈 TailwindCSS

Tailwind är integrerat via `CRACO`. Du kan använda utility-klasser direkt:

```jsx
<div className="bg-blue-500 text-white p-6 rounded-xl">
  Tailwind fungerar!
</div>
```

## ✅ Att göra (vidareutveckling)

* Validering av formulär
* Användarprofil
* Deployment till Azure Static Web Apps
* Responsiv design enligt Figma-prototyp

## 📄 Licens

MIT

---

Skapad av **Zeba** för EDU-projektet Ventixe • 2025
