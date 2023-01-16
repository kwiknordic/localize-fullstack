# Localize
- Live-demo: https://localize.kwik.se
- Backend-deployment på Railway: https://railway.app/project/59da9af0-7a54-4750-840a-5156939c3121

## Om projektet
Sammanställa flera källor av lokala nyheter, event och händelser i *Stockholm* och presentera det i en enkel upp-och-ner, vänster-till-höger, kortvy likt Reddit.

## Använda externa data-källor
- Brottsplatskartan API (öppen API, ingen auth)
- Ticketmaster API (API-nyckel som auth)
- Lokaltidningen Mitti (dekonstruerad RSS/XML)

## Höjdpunkter
- Full-stack App
- Serversidan är byggd med Express i Node.js och hanterar alla förfrågningar och gör om till ett fördefinerat format
- Serversidan ligger uppe på Railway för möjlighet att förfråga i Live-demo.
- Skriven i TypeScript
- Klientsidan är byggd med React och renderas hos användaren i webbläsaren (CSR)
- Klientsidan använder Vite som byggverktyg
- Klientsidan använder useContext och localStorage för att lagra och navigera mellan mörk/ljus-läge.

## Kvar att göra
- Filtrera artiklar baserat på input
- Visa/dölj specifik källa genom en toggel i Sidomenyn
- Lägga till fler källor
- Lägga till bilder för varje artikel
- Lägga till fler taggar för varje artikel

## Hur man testar lokalt
1. Bläddra till Client -> src -> api -> utils -> connectionConfig.ts och välj *false* som PROD-värde.
2. I root-mappen finns två script-filer. Den ena startar upp Server-instansen och den andra startar upp Client-instansen.
- Öppna upp terminalen.
- Starta serversidan genom att skriva in *./initServer.sh*
- Starta klientsidan genom att skriva in *./initClient.sh*
