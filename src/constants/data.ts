import { Ingredient, Sauce, SpiceLevel } from "../types/game";

// ─── 재료 ─────────────────────────────────────────────────────────────────────
export const MEATS: Ingredient[] = [
  { id: "beef",    name: "소고기", emoji: "🥩", image: "/img/meet.png",    type: "meat" },
  { id: "spam",    name: "스팸",   emoji: "🥫", image: "/img/spam.png",    type: "meat" },
  { id: "sausage", name: "소세지", emoji: "🌭", image: "/img/sausage.png", type: "meat" },
];

export const VEGGIES: Ingredient[] = [
  { id: "bokchoy", name: "청경채", emoji: "🥬", image: "/img/vege.png",    type: "veggie" },
  { id: "sprouts", name: "숙주",   emoji: "🌱", image: "/img/sprouts.png", type: "veggie" },
  { id: "cabbage", name: "배추",   emoji: "🥗", image: "/img/cabbage.png", type: "veggie" },
];

export const NOODLES: Ingredient[] = [
  { id: "bunmoja",  name: "분모자",   emoji: "🍢", image: "/img/bunmoja.png", type: "noodle" },
  { id: "dangmyun", name: "중국당면", emoji: "🍜", image: "/img/china.png",   type: "noodle" },
  { id: "corn",     name: "옥수수면", emoji: "🌽", image: "/img/cone.png",    type: "noodle" },
];

export const OTHERS: Ingredient[] = [
  { id: "sweetrice",   name: "고구마떡", emoji: "🍡", image: "/img/noodle.png", type: "other" },
  { id: "cheesetteok", name: "치즈떡",   emoji: "🧀", image: "/img/fuzu.png",   type: "other" },
  { id: "tofu",        name: "두부",     emoji: "⬜", image: "/img/tofu.png",   type: "other" },
];

export const TRAPS: Ingredient[] = [
  { id: "mintchoco", name: "민트초코", emoji: "🍫", image: "/img/mint.png",     type: "trap" },
  { id: "mushroom",  name: "팽이버섯", emoji: "🍄", image: "/img/mushroom.png", type: "trap" },
];

export const ALL_ITEMS: Ingredient[] = [
  ...MEATS,
  ...VEGGIES,
  ...NOODLES,
  ...OTHERS,
  ...TRAPS,
];

// ─── 소스 ─────────────────────────────────────────────────────────────────────
export const SAUCES: Sauce[] = [
  { id: "peanut",     name: "땅콩소스", emoji: "🥜", image: "/img/egg.png"      },
  { id: "chilioil",   name: "고추기름", emoji: "🌶️", image: "/img/spicy.png"    },
  { id: "sugar",      name: "설탕",     emoji: "🍬", image: "/img/gum.png"      },
  { id: "vinegar",    name: "식초",     emoji: "🍶", image: "/img/fish.png"     },
  { id: "cilantro",   name: "고수",     emoji: "🌿", image: "/img/vege.png"     },
  { id: "greenonion", name: "파",       emoji: "🧅", image: "/img/sprouts.png"  },
];

// ─── 맵기 단계 ────────────────────────────────────────────────────────────────
export const SPICE_LEVELS: SpiceLevel[] = [
  { level: 0, label: "0단계", desc: "순한맛",      peppers: 0, face: "😊" },
  { level: 1, label: "1단계", desc: "약간 매운맛", peppers: 1, face: "🙂" },
  { level: 2, label: "2단계", desc: "보통 매운맛", peppers: 2, face: "😅" },
  { level: 3, label: "3단계", desc: "많이 매운맛", peppers: 3, face: "😰" },
  { level: 4, label: "4단계", desc: "불지옥맛",    peppers: 4, face: "🔥" },
];
