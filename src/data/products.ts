export type Product = {
  slug: string;
  name: string;
  category: "Keychains" | "Collectibles" | "Custom Prints" | "Decor";
  price: number;
  compareAtPrice?: number;
  description: string;
  specs: { label: string; value: string }[];
  images: string[]; // one or more photo paths, first is the main image
  tag?: "Sale" | "New" | "Bestseller";
};

// Edit this list to add, remove, or update products. Each product needs
// an image in /public/images (or an external URL). Prices are in INR.
export const products: Product[] = [
  {
    slug: "flexi-cat-fluffy-tail",
    name: "Flexi Cat Keychain — Fluffy Tail Edition (Pack of 2)",
    category: "Keychains",
    price: 299,
    compareAtPrice: 599,
    description:
      "A double-jointed cat keychain that flexes and curls like the real thing. Printed as one continuous articulated piece, no assembly required.",
    specs: [
      { label: "Material", value: "PLA+" },
      { label: "Articulation", value: "12-segment flexi joint" },
      { label: "Pack", value: "2 keychains" },
    ],
    images: ["/images/flexi-cat.jpg"],
    tag: "Sale",
  },
  {
    slug: "number-plate-keychain",
    name: "Personalized Vehicle Number Keychain",
    category: "Keychains",
    price: 249,
    compareAtPrice: 499,
    description:
      "Your vehicle's number plate, reproduced as a durable keychain tag. Send your registration number and we print it to match.",
    specs: [
      { label: "Material", value: "PETG" },
      { label: "Customization", value: "Any plate number" },
      { label: "Finish", value: "Matte black + white text" },
    ],
    images: ["/images/number-plate.jpg"],
    tag: "Sale",
  },
  {
    slug: "articulated-dragon",
    name: "Articulated Dragon — Flexi Print",
    category: "Collectibles",
    price: 449,
    description:
      "A fully posable dragon with interlocking scales that move independently. A desk companion with real presence.",
    specs: [
      { label: "Material", value: "PLA+" },
      { label: "Length", value: "~28 cm" },
      { label: "Colors", value: "6 available" },
    ],
    images: ["/images/dragon.jpg"],
    tag: "Bestseller",
  },
  {
    slug: "custom-name-keychain",
    name: "Custom Name Tag Keychain",
    category: "Keychains",
    price: 199,
    description:
      "Any name, any short phrase, printed in a bold layered typeface. A simple gift that always lands.",
    specs: [
      { label: "Material", value: "PLA+" },
      { label: "Characters", value: "Up to 12" },
      { label: "Colors", value: "10 available" },
    ],
    images: ["/images/name-keychain.jpg"],
    tag: "New",
  },
  {
    slug: "desk-organizer-monolith",
    name: "Monolith Desk Organizer",
    category: "Decor",
    price: 699,
    description:
      "A single-piece desk tray for pens, cards, and small tools. Printed in one pass with a brushed-line surface finish.",
    specs: [
      { label: "Material", value: "PETG" },
      { label: "Dimensions", value: "18 × 9 × 6 cm" },
    ],
    images: ["/images/desk-organizer.jpg"],
  },
  {
    slug: "articulated-fish",
    name: "Articulated Koi — Flexi Print",
    category: "Collectibles",
    price: 399,
    description:
      "A koi fish that swims through your fingers. Every scale is a moving joint, printed fused and ready on arrival.",
    specs: [
      { label: "Material", value: "PLA+" },
      { label: "Length", value: "~22 cm" },
    ],
    images: ["/images/koi.jpg"],
  },
  {
    slug: "geometric-planter",
    name: "Faceted Mini Planter",
    category: "Decor",
    price: 349,
    description:
      "A low-poly planter for succulents and small cuttings, with a hidden drainage tray underneath.",
    specs: [
      { label: "Material", value: "PETG" },
      { label: "Diameter", value: "9 cm" },
    ],
    images: ["/images/planter.jpg"],
  },
  {
    slug: "custom-figurine",
    name: "Custom 3D Figurine (Made to Order)",
    category: "Custom Prints",
    price: 1499,
    description:
      "Send us a design, character, or reference photo, and we'll model and print a one-off figurine. Message us on Instagram with your idea for a quote.",
    specs: [
      { label: "Material", value: "Resin or PLA+" },
      { label: "Turnaround", value: "5–8 days" },
    ],
    images: ["/images/custom-figurine.jpg"],
  },
  {
    slug: "phone-stand-arch",
    name: "Arch Phone Stand",
    category: "Decor",
    price: 279,
    description:
      "A minimal arch that holds your phone upright for calls, video, or your morning scroll.",
    specs: [
      { label: "Material", value: "PLA+" },
      { label: "Colors", value: "8 available" },
    ],
    images: ["/images/phone-stand.jpg"],
  },
  {
    slug: "articulated-dinosaur",
    name: "Articulated T-Rex — Flexi Print",
    category: "Collectibles",
    price: 449,
    description:
      "A grinning, fully articulated T-Rex that stomps and poses. A favorite gift for kids and desks alike.",
    specs: [
      { label: "Material", value: "PLA+" },
      { label: "Length", value: "~24 cm" },
    ],
    images: ["/images/trex.jpg"],
    tag: "Bestseller",
  },
  {
    slug: "wall-mounted-hooks",
    name: "Layered Wall Hook Set (3)",
    category: "Decor",
    price: 249,
    description:
      "Three sculptural wall hooks with a stepped, printed-layer texture left intentionally visible as the finish.",
    specs: [
      { label: "Material", value: "PETG" },
      { label: "Set", value: "3 hooks" },
    ],
    images: ["/images/hooks.jpg"],
  },
  {
    slug: "custom-logo-keychain",
    name: "Custom Logo / Brand Keychain",
    category: "Custom Prints",
    price: 349,
    description:
      "Turn your brand mark or a college logo into a keychain. Send your logo file on Instagram to get started.",
    specs: [
      { label: "Material", value: "PLA+" },
      { label: "Turnaround", value: "3–5 days" },
    ],
    images: ["/images/logo-keychain.jpg"],
  },
];

export const categories = Array.from(new Set(products.map((p) => p.category)));
