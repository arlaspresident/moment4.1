# moment 4.1 – frontend

detta är frontend delen av moment 4 i kursen backend-baserad webbutveckling. webbplatsen är kopplad till en webbtjänst som hanterar registrering, inloggning och autentisering med json web tokens

## publicerad version

frontend: https://ubiquitous-kangaroo-91073e.netlify.app 
backend (api): https://moment4-sw08.onrender.com

## funktionalitet

- användare kan skapa konto (användarnamn och lösenord)
- inloggning returnerar en jwt token som sparas i localstorage
- en skyddad sida (protected.html) kräver giltig token för att kunna visas
- token skickas i authorization-headern som "bearer <token>"
- användaren kastas ut om token saknas eller är ogiltig

## testa lösningen

1. gå till register.html
2. skapa ett konto
3. du skickas vidare till login-sidan
4. logga in
5. vid lyckad inloggning sparas token och du skickas till protected.html
6. om token är giltig visas en välkomsttext
7. det går att logga ut via en knapp, vilket tar bort token och skickar användaren tillbaka

