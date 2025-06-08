Ventixe - Eventhanteringssystem (Frontend)

Detta projekt utgör frontend-delen av ett MVP-system för hantering av event, utvecklat som en del av kursen Molntjänster och distribuerade system.

🌐 Deployment

Frontend: http://localhost:3000

Backend (exempel): http://localhost:5001

🚀 Funktioner

Inloggning och registrering (JWT-baserad)

Skyddade sidor ("Protected Route")

Hämtning och listning av events via Axios

TailwindCSS-baserad UI

React Router för navigering mellan sidor

📁 Struktur

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

🔧 Installation

Klona repo:

git clone <REPO-URL>
cd ventixe-frontend

Installera beroenden:

npm install

Starta utvecklingsservern:

npm start

🔍 Exempel: Hämta events

axios.get<Event[]>("http://localhost:5001/api/events")
  .then(res => setEvents(res.data))
  .catch(err => console.error(err));

🌈 TailwindCSS

Tailwind är integrerat via CRACO. Du kan använda utility-klasser direkt:

<div className="bg-blue-500 text-white p-6 rounded-xl">
  Tailwind fungerar!
</div>

✅ Att göra (vidareutveckling)

Validering av formulär

Användarprofil

Deployment till Azure Static Web Apps

Responsiv design enligt Figma-prototyp

📄 Licens

MIT

Skapad av Zeba för EDU-projektet Ventixe • 2025

