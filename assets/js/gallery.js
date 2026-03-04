const artworks = [
  {
    image: "assets/images/drawings/drawing-01.jpg",
    title: "Whispering Bridge",
    year: "2023",
    description: `This painting captures a quiet moment in nature where architecture and landscape exist in harmony. A small countryside house rests peacefully behind dense greenery, while an old stone bridge curves gently over a flowing stream.

The movement of the water contrasts with the stillness of the house and the calm blue sky, creating a balanced and serene atmosphere.

I focused on the richness of the vegetation and the natural textures of stone, water, and foliage to give the scene a sense of life and depth. The bridge acts as a visual center, guiding the eye through the composition.

This artwork reflects my appreciation for peaceful rural environments and the simple beauty found in nature. Through color, light, and layered greenery, I wanted to create a scene that feels calm, timeless, and quietly alive.

`
  },

  {
    image: "assets/images/drawings/drawing-02.jpg",
    title: "Blossom Reflections",
    year: "2023",
    description: `This painting captures a peaceful moment where nature feels both vibrant and calm. At the center of the scene stands a blooming pink tree beside a gently flowing stream.

The petals fall softly into the water, creating delicate reflections that blend the colors of the blossoms with the movement of the river.

Behind the tree, distant mountains and a sky filled with soft clouds create depth and balance in the landscape.

Through this artwork, I wanted to express the quiet beauty of nature and the fleeting moment of a tree in full bloom.

`
  },

  {
    image: "assets/images/drawings/drawing-03.png",
    title: "Golden Desert Harmony",
    year: "2024",
    description: `This triptych artwork brings together three complementary compositions that explore balance, nature, and abstract form.

Each panel presents a different visual story while sharing a warm color palette dominated by earthy tones and vibrant oranges.

Together, the three paintings create a harmonious dialogue between abstraction and nature.

`
  },

  {
    image: "assets/images/drawings/drawing-04.png",
    title: "Eyes of Serenity",
    year: "2022",
    description: `This pencil drawing focuses on the expressive power of the eyes.

The portrait represents a woman wearing a traditional veil, with only her gaze visible.

Through simple lines and soft shading, the artwork emphasizes emotion, mystery, and quiet strength.

`
  },

  {
    image: "assets/images/drawings/drawing-05.png",
    title: "The Silent Door",
    year: "2022",
    description: `This pencil drawing represents a quiet architectural scene centered around a wooden door framed by stone bricks.

Through careful shading and line work, the textures of wood, stone, and shadow bring the structure to life.

The closed door invites the viewer to imagine what lies beyond it.

`
  },

  {
    image: "assets/images/drawings/drawing-06.jpg",
    title: "Golden Stillness",
    year: "2023",
    description: `This artwork presents a quiet still-life composition centered on a bouquet of bright yellow flowers arranged in a soft blue vase.

The flowers stand out vividly against the dark background, capturing warmth and elegance.

`
  },

  {
    image: "assets/images/drawings/drawing-07.jpg",
    title: "Mouna",
    year: "2023",
    description: `This artwork features the name Mouna written in elegant Arabic calligraphy at the center of a circular composition.

Delicate floral patterns and flowing vines create harmony between calligraphy and nature.

`
  },

  {
    image: "assets/images/drawings/drawing-08.jpg",
    title: "Siraj",
    year: "2023",
    description: `This artwork features the name Siraj in bold lettering at the center of a vibrant circular design.

The composition is playful and colorful, decorated with animated characters and floral details.

`
  },

  {
    image: "assets/images/drawings/drawing-09.jpg",
    title: "Rayan",
    year: "2023",
    description: `This colorful artwork features the name Rayan surrounded by playful cartoon characters and floral elements.

The bright background creates a joyful and lively atmosphere.

`
  },

  {
    image: "assets/images/drawings/drawing-10.png",
    title: "Blooming Harmony",
    year: "2024",
    description: `This painting presents a vibrant field of blooming roses in deep pink and soft cream tones.

The contrast between dark green leaves and luminous blossoms brings life and movement.

`
  },

  {
    image: "assets/images/drawings/drawing-11.jpg",
    title: "Hind",
    year: "2023",
    description: `This artwork features the name Hind written in elegant Arabic calligraphy at the center of a soft blue circular background.

Floral branches and blossoms create a harmonious decorative frame.

`
  },

  {
    image: "assets/images/drawings/drawing-12.jpg",
    title: "Abstract Nature Balance",
    year: "2024",
    description: `This artwork explores harmony between geometric forms and natural elements.

Soft abstract shapes in earthy tones combine with delicate botanical lines.

`
  },

  {
    image: "assets/images/drawings/drawing-13.jpg",
    title: "Moroccan Serenity",
    year: "2022",
    description: `This pencil drawing depicts a traditional Moroccan architectural scene centered around a mosque tower surrounded by palm trees.

The fine lines reflect Islamic architectural elegance.

`
  },

  {
    image: "assets/images/drawings/drawing-14.jpg",
    title: "Abstract Silhouette",
    year: "2024",
    description: `This artwork blends abstract shapes with natural elements to create a modern expressive composition.

A face silhouette emerges subtly between vases and botanical forms.

`
  }
];

const grid = document.getElementById("gallery-grid");
const modal = document.getElementById("modal");
const closeBtn = document.getElementById("close");
const modalImg = document.getElementById("modal-img");
const modalTitle = document.getElementById("modal-title");
const modalYear = document.getElementById("modal-year");
const modalDesc = document.getElementById("modal-desc");

artworks.forEach(art => {
  const card = document.createElement("div");
  card.className = "art-card";
  card.innerHTML = `<img src="${art.image}" alt="${art.title}">`;
  grid.appendChild(card);

  card.addEventListener("click", () => {
    modal.classList.add("active");
    modalImg.src = art.image;
    modalTitle.textContent = art.title;
    modalYear.textContent = art.year;
    modalDesc.textContent = art.description;
  });
});

closeBtn.addEventListener("click", () => {
  modal.classList.remove("active");
});

modal.addEventListener("click", (e) => {
  if (e.target === modal) {
    modal.classList.remove("active");
  }
});