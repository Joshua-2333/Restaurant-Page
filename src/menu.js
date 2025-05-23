import logoImage from "/image/Logo.png";

export function createMenuPage(contentDiv) {
  const menuPage = document.createElement('div');
  menuPage.className = 'menu-page';
  menuPage.innerHTML = `
  
  <h2 class="menu-header">Our Menu</h2>
   <section id="entrees">
     <h2 class="menu-category">Entrees</h2>
     <ul>
       <li>Omurice ($16)</li>
       <li>Karaage ($15)</li>
       <li>Katsu Curry($20)</li>
       <li>American Cheeseburger ($18)</li>
     </ul>
   </section>
   <section id="sides">
     <h2 class="menu-category">Sides</h2>
     <ul>
       <li>French Fries ($3)</li>
       <li>Takoyaki ($6)</li>
       <li>Crispy Pork Gyoza ($8)</li>
       <li>Edamame ($4)</li>
       <li>Heart-shaped Onigiri ($5)</li>
     </ul>
   </section>
   <section id="desserts">
     <h2 class="menu-category">Desserts</h2>
     <ul>
       <li>Chocolate Parfait ($10)</li>
       <li>Vanilla Parfait ($10)</li>
       <li>Strawberry Parfait ($10)</li>
       <li>Maid's Ribbon Cake ($15)</li>
       <li>Ice Cream Sundae ($12)</li>
     </ul>
   </section>
   <section id="hot-drinks">
     <h2 class="menu-category">Hot Drinks</h2>
     <ul>
       <li>Coffee ($3)</li>
       <li>Hot Chocolate ($3)</li>
       <li>Matcha Latte ($5)</li>
       <li>Jasmine Tea ($3)</li>
       <li>Oolong Tea ($4)</li>
     </ul>
   </section>
   <section id="cold-drinks">
     <h2 class="menu-category">Cold Drinks</h2>
     <ul>
       <li>Fountain Drinks ($4)</li>
       <li>Ice Coffee ($4)</li>
       <li>Caramel Latte ($5)</li>
       <li>Matcha Latte ($5)</li>
     </ul>
   </section>
   <section id="cheki">
     <h2 class="menu-category">Cheki(Polaroid Service)</h2>
     <p class="menu-description">Get a polaroid photo with one of our maids for a special memory!</p>
     <ul>
       <li>One shot Checki ($10) <p class="menu-item-description">Decorated Polaroid of a maid of your choice</p></li>
       <li>Two shot Checki ($15) <p class="menu-item-description">Decorated Polaroid of you and a maid of your choice</p></li>
       <li>Dekai Checki ($20) <p class="menu-item-description">Decorated Polaroid of two maids of your choice (*$5 for each additional maid)</p></li>
     </ul>
   </section>
 `;
  contentDiv.appendChild(menuPage);
}