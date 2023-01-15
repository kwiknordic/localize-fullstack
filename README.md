# Localize
Live-demo: https://localize.kwik.se

# Om projektet
Sammanställa flera källor av lokala nyheter, event och händelser i *Stockholm* och presentera det i en enkel upp-och-ner, vänster-till-höger, kortvy likt Reddit.

# Använda externa data-källor
- Brottsplatskartan API (öppen API, ingen auth)
- Ticketmaster API (API-nyckel som auth)
- Lokaltidningen Mitti (dekonstruerad RSS/XML)

# Höjdpunkter
- Full-stack App
- Serversidan är byggd med Express i Node.js och hanterar alla förfrågningar och gör om till ett fördefinerat format
- Serversidan ligger uppe på Railway för möjlighet att förfråga i Live-demo.
- Klientsidan är byggd med React och renderas hos användaren i webbläsaren (CSR)

# Kvar att göra: App
- Filtrera artiklar baserat på input
- Visa/dölj specifik källa genom en toggel i Sidomenyn
- Lägga till fler källor
- Lägga till bilder för varje artikel
- Lägga till fler taggar för varje artikel
