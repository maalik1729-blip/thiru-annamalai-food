// Using placeholder images - replace with actual product images
import greenDhal from "@/assets/hero-laddus.jpg";
import multigrain from "@/assets/product-besan.jpg";
import multiMillet from "@/assets/product-millet.jpg";
import blackUrad from "@/assets/product-dryfruit.jpg";
import peanutLaddu from "@/assets/product-coconut.jpg";
import gingelly from "@/assets/product-besan.jpg";
import rye from "@/assets/product-millet.jpg";
import ragi from "@/assets/product-dryfruit.jpg";
import thinnai from "@/assets/product-coconut.jpg";
import wheat from "@/assets/product-besan.jpg";

export type Product = {
  id: string;
  name: string;
  tagline: string;
  price: number;
  weight: string;
  ingredients: string;
  shelfLife: string;
  rating: number;
  reviews: number;
  image: string;
  badge?: string;
};

export type CartItem = Product & { qty: number };

export const products: Product[] = [
  {
    id: "green-dhal",
    name: "Green Dhal Ghee Laddu",
    tagline: "பாசிப்பருப்பு நெய் லட்டு — Protein-rich & nutritious",
    price: 350,
    weight: "500 g",
    ingredients: "Green dhal, A2 ghee, jaggery, cardamom",
    shelfLife: "30 days",
    rating: 4.9,
    reviews: 45,
    image: greenDhal,
    badge: "Bestseller",
  },
  {
    id: "multigrain",
    name: "Multigrain Ghee Laddu",
    tagline: "நவதானிய நெய் லட்டு — Nine grains for complete nutrition",
    price: 400,
    weight: "500 g",
    ingredients: "Nine grains, A2 ghee, jaggery, nuts",
    shelfLife: "45 days",
    rating: 4.8,
    reviews: 38,
    image: multigrain,
    badge: "High Protein",
  },
  {
    id: "multi-millet",
    name: "Multi Millet Ghee Laddu",
    tagline: "சிறுதானிய நெய் லட்டு — Ancient millets for wellness",
    price: 380,
    weight: "500 g",
    ingredients: "Mixed millets, A2 ghee, jaggery, cardamom",
    shelfLife: "45 days",
    rating: 4.9,
    reviews: 52,
    image: multiMillet,
  },
  {
    id: "black-urad",
    name: "Black Urad Dal Ghee Laddu",
    tagline: "கருப்பு உளுந்து நெய் லட்டு — Strength & energy booster",
    price: 420,
    weight: "500 g",
    ingredients: "Black urad dal, A2 ghee, jaggery, dry fruits",
    shelfLife: "30 days",
    rating: 5.0,
    reviews: 41,
    image: blackUrad,
    badge: "Energy Boost",
  },
  {
    id: "peanut-laddu",
    name: "Peanut Ghee Laddu",
    tagline: "கடலை நெய் லட்டு — Crunchy & protein-packed",
    price: 320,
    weight: "500 g",
    ingredients: "Roasted peanuts, A2 ghee, jaggery",
    shelfLife: "45 days",
    rating: 4.7,
    reviews: 33,
    image: peanutLaddu,
  },
  {
    id: "gingelly",
    name: "Gingelly Ghee Laddu",
    tagline: "எள்ளு நெய் லட்டு — Rich in calcium & iron",
    price: 360,
    weight: "500 g",
    ingredients: "Sesame seeds, A2 ghee, jaggery, cardamom",
    shelfLife: "40 days",
    rating: 4.8,
    reviews: 29,
    image: gingelly,
  },
  {
    id: "rye",
    name: "Rye Ghee Laddu",
    tagline: "கம்பு நெய் லட்டு — Traditional millet goodness",
    price: 340,
    weight: "500 g",
    ingredients: "Pearl millet, A2 ghee, jaggery, nuts",
    shelfLife: "45 days",
    rating: 4.7,
    reviews: 25,
    image: rye,
  },
  {
    id: "ragi",
    name: "Ragi Ghee Laddu",
    tagline: "கேழ்வரகு நெய் லட்டு — Finger millet for bone health",
    price: 360,
    weight: "500 g",
    ingredients: "Ragi flour, A2 ghee, jaggery, cardamom",
    shelfLife: "45 days",
    rating: 4.9,
    reviews: 48,
    image: ragi,
    badge: "Calcium Rich",
  },
  {
    id: "thinnai",
    name: "Thinnai Ghee Laddu",
    tagline: "தினை நெய் லட்டு — Foxtail millet for digestion",
    price: 350,
    weight: "500 g",
    ingredients: "Foxtail millet, A2 ghee, jaggery",
    shelfLife: "45 days",
    rating: 4.8,
    reviews: 31,
    image: thinnai,
  },
  {
    id: "wheat",
    name: "Wheat Ghee Laddu",
    tagline: "கோதுமை நெய் லட்டு — Classic wholesome taste",
    price: 330,
    weight: "500 g",
    ingredients: "Wheat flour, A2 ghee, jaggery, cardamom",
    shelfLife: "30 days",
    rating: 4.7,
    reviews: 36,
    image: wheat,
  },
];
