import logoImage from "/image/Logo.png";
import aniImage from "/image/ani-maid.png";

function createAboutPage(contentDiv) {
  const logo = document.createElement('img');
  logo.src = logoImage;
  logo.alt = 'Logo';
  logo.className = 'logo';

  const aboutPage = document.createElement('div');
  aboutPage.innerHTML = `
    <h1 class="about-us">About Us</h1>
    <p class="about-text">
🐰  Welcome to Usagi House! 🌸<br>

Okaerinasaimase, Goshujin-sama!<br>
Welcome home to Usagi House, where fluffy ears, frilly aprons, and sweet smiles await you in a world of pure kawaii magic!<br>

Nestled in the heart of Little Tokyo in Los Angeles California, our bunny-themed maid café<br> 
is a cozy, whimsical escape from the everyday. Inspired by<br>
 the beloved traditions of Akihabara's iconic maid cafés, we've added our own twist—with adorable bunny maids hopping at your<br> 
 service to make every visit unforgettable!<br>

Whether you're here for a relaxing cup of tea, a heart-shaped omurice with a cute ketchup drawing, or a magical moment with our<br>
 hopping hostesses, we're here to brighten your day with joy, laughter, and just a touch of mischief~!🐾<br>
🎀 What Makes Us Special:<br>

    🐇 Bunny Maids-Our maids wear charming bunny ears and bring a playful spirit to every table.<br>

    🍰 Deliciously Cute Menu-Enjoy themed sweets, custom latte art, and dishes that look almost too cute to eat!<br>

    🎲 Fun & Games-From table games to live performances, there's always something to make you smile.<br>

    📸 Magical Memories-Capture your experience with photo sessions and personalized souvenirs.<br>

At Usagi House, you're not just a guest—you're family. Let us pamper you in a fluffy, feel-good fantasy where every moment is<br> 
a little celebration.<br>

Hop on in, Master & Princess! Your bunny maids are waiting~ 💕</br>

    <img class="ani-img" src="${aniImage}">
    `;
  contentDiv.appendChild(aboutPage);
}

export { createAboutPage };