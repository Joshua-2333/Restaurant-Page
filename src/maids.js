import maid1Image from "/image/maid-1.png";
import maid2Image from "/image/maid-2.png";
import maid3Image from "/image/maid-3.png";
import maid4Image from "/image/maid-4.png";
import maid5Image from "/image/maid-5.png";
import maid6Image from "/image/maid-6.png";
import logoImage from "/image/Logo.png";

export function createMaidsPage(contentDiv) {
  const maidsPage = document.createElement('div');
maidsPage.innerHTML = `
  
  <h1 class="maids-title">Our Maids</h1>
  <div class="maids-container">
      <div class="maid">
        <img src="${maid1Image}" alt="Maid 1" class="maid-image">
        <h2 class="maid-name">Sui</h2>
        <p class="maid-description">"Always ready with a bandage and a kind word, Sui swears she used to care for bunnies<br>
         at a magical forest clinic. Her soothing voice is the cure for any bad day."</br></p>
      </div>
      <div class="maid">
        <img src="${maid2Image}" alt="Maid 2" class="maid-image">
        <h2 class="maid-name">Yuna</h2>
        <p class="maid-description">"A bunny who washed ashore from a seaside shrine. Yuna brings the calm of the sea<br>
         and serves her dishes with flowing, graceful movements—like waves in a teacup."</br></p>
      </div>
      <div class="maid">
        <img src="${maid3Image}" alt="Maid 3" class="maid-image">
        <h2 class="maid-name">Koko</h2>
        <p class="maid-description">"Once a carrot bandit in the moonlit fields, Koko now “steals hearts” at Usagi House.<br> 
        Quick with jokes, playful with guests, and always up to something sneaky-cute."</br></p>
      </div>
      <div class="maid">
        <img src="${maid4Image}" alt="Maid 4" class="maid-image">
        <h2 class="maid-name">Nanase</h2>
        <p class="maid-description">"A shy scholar who brews the café's special potions (a.k.a. herbal teas).<br> 
        Always seen with a spellbook and glasses slightly askew."</br></p>
      </div>
      <div class="maid">
        <img src="${maid5Image}" alt="Maid 5" class="maid-image">
        <h2 class="maid-name">Yui</h2>
        <p class="maid-description">"Straight from the countryside, Yui brings homemade charm and warm smiles. Her specialty?<br> 
        Heart-shaped onigiri with extra love."</br></p>
      </div>
      <div class="maid">
        <img src="${maid6Image}" alt="Maid 6" class="maid-image">
        <h2 class="maid-name">Arana</h2>
        <p class="maid-description">"She says she crash-landed from Planet Moemoe-chan and is learning Earth's customs—starting with omurice.<br>
         Don't be surprised if she greets you in alien-speak!"</br></p>
      </div>
    </div>
  `;

  contentDiv.appendChild(maidsPage);
}