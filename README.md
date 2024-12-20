## Live-länk: https://u04-webshop-team-5.netlify.app/

## Reflektion
### Styrkor och svagheter
 I team-anda satt vi tillsammans och fick till designen på webbshoppen ganska så fint. Utmaning där var när vi skulle tekniskt lösa utformningen designmässigt av kategori-delen i vår produkts - card. Men vi löste det fint!

### Händelsespårning
I händelsespårning har vi möjlighet att spåra besökarens interaktion med sidan. T.ex lägg-i-varukorgen klick. Det kan också vara passiva händelsespårning, som hur länge besökare stannar på en viss sida. Inställningar av händelsespårning baserat på oss-väljare är inte det mest pålitliga sättet. Hela händelseinställningen kommer att sluta fungera om sec-väljare inte fungerar. En onclick händelsehanterare till element, är de som rekommenderas.

## **Webshoppen del 1**

Det här ett spännande och praktiskt uppdrag där vi ska skapa en enkel men funktionell webbshop! I detta projekt kommer ni att bygga en webbplats för en fiktiv butik som säljer ett urval av produkter. Målet är att ge er praktisk erfarenhet av webbutveckling och att använda JavaScript för att manipulera data och skapa en interaktiv användarupplevelse.

![](https://github.com/chasacademy-sandra-larsson/boilerroom-webshoppen/blob/main/inspo.png)

## **Instruktioner** 👋

*Teamet:*
* Alla i teamet ska vara med och implementera och diskutera. Föredra mobbprogrammering, men använd gärna Git :-)

*Vad ni ska göra:*
- Utveckla en enkel webbshop där besökarna kan se och interagera med ett urval av produkter. Den behöver bara innehålla en HTML-sida men får innehålla fler.
- Använd arraymetoder som **`map`**, **`filter`**, **`sort`** och **`reduce`** för att hantera produktdatan.
- Ni ska visa produkter baserat på produktdata, det ska gå att filtrera mellan kategorier, sortera efter pris, det ska gå att lägga till produkter i en varukorg och även beräkna totalpriset av produkterna som lagts till i varukorgen. Ni får addera mer funktionalitet om ni hinner.
    - **`map`:** för att rendera ut produkterna från början och i kundvagnen.
    - **`filter`:** för att filtrera kategorierna.
    - **`reduce`:** för att slå ihop totalpriset.
- Byt ut varukorgen till en separat sida och använd **`localStorage`** för att spara innehållet i varukorgen över sessioner.
- Om behov finns, dela upp js i moduler
- Använd regelbunden versionshantering och tydliga commitmeddelanden. 
- Prioritera funktionalitet, men glöm inte att webbplatsen ska vara responsiv och användarvänlig.
- Ni får utgå från exemplen nedan eller koda allt från scratch!

*Exempel på HTML och JS*
```
/* 
Ni väljer om ni använder produktdatan i js eller json och om ni vill lägga till 
fler properties som bilder etc.

Ni fetchar från ett api  som t.ex. https://fakestoreapi.com/ för att generara
ut fiktiva produkter därifrån istället för från en lokal js/json.
*/

const products = [
    { id: 1, name: 'T-shirt', category: 'kläder', price: 100 },
    { id: 2, name: 'Hörlurar', category: 'elektronik', price: 250 },
    { id: 3, name: 'Keps', category: 'kläder', price: 50 },
    { id: 4, name: 'Mobiltelefon', category: 'elektronik', price: 500 }
];

const cart = [];
```
```
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <title>Enkel Webbshop</title>
  <link rel="stylesheet" href="style.css">
</head>

<body>
  <h1>Välkommen till vår Webbshop!</h1>
	  
  <h2>Våra produkter</h2>
  <!-- filter knappar för produkt kategorier här -->
  <!-- Visa era produkter innuti product-container -->
  <div id="product-container"></div>

  <h2>Din Varukorg</h2>
  <!-- visa produkter som lagts till i kundvagnen och totalsumman innuti cart -->
  <div id="cart"></div>
	
  <!-- alert, eller sida som säger produkterna är på väg -->
  <button id="checkout">Gå till kassan</button>
	
  <script src="script.js" type="module"></script>
</body>

</html>
```
## **Design**

Ni har full kreativ frihet att designa webbshoppen. Ta en titt på några befintliga e-handelsplattformar eller använd en enkel design som nedan.

![](https://github.com/chasacademy-sandra-larsson/boilerroom-webshoppen/blob/main/inspo2.png)
![](https://github.com/chasacademy-sandra-larsson/boilerroom-webshoppen/blob/main/inspo3.png)

## **Inlämning**

Detta är del 1 av uppgift Webbshoppen och ni har på-plats-dag 5 december och kommande vecka att arbeta på. 
Del 2 av uppgiften kommer handlar om händelsespårning med Google Analytics och där har ni på-plats-dag 19 december att arbeta med. 
Lämna in slutgiltigt repo med live-länk samt projektbeskrivning i Canvas senast 20 december.
 
 💫🚀
# webbshoppen-fjs24
