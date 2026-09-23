export interface Product {
  id: string;
  title: string;
  category: string;
  image: string;
  href: string;
  price: string;
  priceNote: string;
  fabrics: string[];
  gsm: string[];
  sizes: string[];
  printTypes: string[];
  colors: string[];
}

export interface GolfPattern {
  id: string;
  name: string;
  image: string;
  colors: string[];
  description: string;
  fabric: string;
  weight: string;
  features: string[];
}

export interface GiftSet {
  id: string;
  title: string;
  subtitle: string;
  image: string;
  items: string[];
  basePrice: string;
  moq: string;
  leadTime: string;
}

export interface BrandFamilyItem {
  name: string;
  tagline: string;
  description: string;
  badge: string;
  accent: string;
}

export const PRODUCTS: Product[] = [
  {
    "id": "round-neck-tshirt",
    "title": "Round Neck T-Shirt",
    "category": "Apparel",
    "image": "/products/round-neck-tshirt-yellow-front.webp",
    "href": "/products/apparel/round-neck-tshirt/",
    "price": "\u20b975 \u00b7 \u20b9200 \u00b7 \u20b9300",
    "priceNote": "Exact option confirmed with your requirement.",
    "fabrics": [
      "100% Combed Bio-Wash Cotton",
      "Poly-Cotton Blend (65/35)",
      "Performance Micro Polyester",
      "Heavyweight French Terry"
    ],
    "gsm": [
      "160 GSM",
      "180 GSM",
      "220 GSM",
      "260 GSM",
      "320 GSM"
    ],
    "sizes": [
      "S (38)",
      "M (40)",
      "L (42)",
      "XL (44)",
      "2XL (46)",
      "3XL (48)"
    ],
    "printTypes": [
      "Screen Printing",
      "DTF Print",
      "Computerized Embroidery",
      "HD High Density"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "collar-tshirt",
    "title": "Collar T-Shirt",
    "category": "Apparel",
    "image": "/products/collar-tshirt-front.webp",
    "href": "/products/apparel/collar-tshirt/",
    "price": "\u20b9150 \u00b7 \u20b9220 \u00b7 \u20b9450",
    "priceNote": "Exact option confirmed with your requirement.",
    "fabrics": [
      "100% Combed Bio-Wash Cotton",
      "Poly-Cotton Blend (65/35)",
      "Performance Micro Polyester",
      "Heavyweight French Terry"
    ],
    "gsm": [
      "160 GSM",
      "180 GSM",
      "220 GSM",
      "260 GSM",
      "320 GSM"
    ],
    "sizes": [
      "S (38)",
      "M (40)",
      "L (42)",
      "XL (44)",
      "2XL (46)",
      "3XL (48)"
    ],
    "printTypes": [
      "Screen Printing",
      "DTF Print",
      "Computerized Embroidery",
      "HD High Density"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "sweat-shirts",
    "title": "Sweat Shirts",
    "category": "Apparel",
    "image": "/products/sweat-shirts-front.png",
    "href": "/products/apparel/sweat-shirts/",
    "price": "\u20b9400 \u00b7 \u20b9450",
    "priceNote": "Exact option confirmed with your requirement.",
    "fabrics": [
      "100% Combed Bio-Wash Cotton",
      "Poly-Cotton Blend (65/35)",
      "Performance Micro Polyester",
      "Heavyweight French Terry"
    ],
    "gsm": [
      "160 GSM",
      "180 GSM",
      "220 GSM",
      "260 GSM",
      "320 GSM"
    ],
    "sizes": [
      "S (38)",
      "M (40)",
      "L (42)",
      "XL (44)",
      "2XL (46)",
      "3XL (48)"
    ],
    "printTypes": [
      "Screen Printing",
      "DTF Print",
      "Computerized Embroidery",
      "HD High Density"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "hoodies",
    "title": "Hoodies",
    "category": "Apparel",
    "image": "/products/hoodie-front.webp",
    "href": "/products/apparel/hoodies/",
    "price": "\u20b9450 \u00b7 \u20b9550 \u00b7 \u20b9650",
    "priceNote": "Exact option confirmed with your requirement.",
    "fabrics": [
      "100% Combed Bio-Wash Cotton",
      "Poly-Cotton Blend (65/35)",
      "Performance Micro Polyester",
      "Heavyweight French Terry"
    ],
    "gsm": [
      "160 GSM",
      "180 GSM",
      "220 GSM",
      "260 GSM",
      "320 GSM"
    ],
    "sizes": [
      "S (38)",
      "M (40)",
      "L (42)",
      "XL (44)",
      "2XL (46)",
      "3XL (48)"
    ],
    "printTypes": [
      "Screen Printing",
      "DTF Print",
      "Computerized Embroidery",
      "HD High Density"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "pants",
    "title": "Pants",
    "category": "Apparel",
    "image": "/products/pants-navy-lifestyle.webp",
    "href": "/products/apparel/pants/",
    "price": "\u20b9495",
    "priceNote": "",
    "fabrics": [
      "100% Combed Bio-Wash Cotton",
      "Poly-Cotton Blend (65/35)",
      "Performance Micro Polyester",
      "Heavyweight French Terry"
    ],
    "gsm": [
      "160 GSM",
      "180 GSM",
      "220 GSM",
      "260 GSM",
      "320 GSM"
    ],
    "sizes": [
      "S (38)",
      "M (40)",
      "L (42)",
      "XL (44)",
      "2XL (46)",
      "3XL (48)"
    ],
    "printTypes": [
      "Screen Printing",
      "DTF Print",
      "Computerized Embroidery",
      "HD High Density"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "jacket",
    "title": "Utility Vest Jacket",
    "category": "Apparel",
    "image": "/products/jacket-olive.png",
    "href": "/products/apparel/jacket/",
    "price": "Custom Quote (on request)",
    "priceNote": "Sleeveless Utility Vest",
    "fabrics": [
      "100% Combed Bio-Wash Cotton",
      "Poly-Cotton Blend (65/35)",
      "Performance Micro Polyester",
      "Heavyweight French Terry"
    ],
    "gsm": [
      "160 GSM",
      "180 GSM",
      "220 GSM",
      "260 GSM",
      "320 GSM"
    ],
    "sizes": [
      "S (38)",
      "M (40)",
      "L (42)",
      "XL (44)",
      "2XL (46)",
      "3XL (48)"
    ],
    "printTypes": [
      "Screen Printing",
      "DTF Print",
      "Computerized Embroidery",
      "HD High Density"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "smart-caps",
    "title": "Smart Caps",
    "category": "Caps",
    "image": "/products/smart-cap-black-front.webp",
    "href": "/products/caps/smart-caps/",
    "price": "\u20b965",
    "priceNote": "",
    "fabrics": [
      "100% Cotton Twill",
      "Quick-Dry Breathable Polyester",
      "Flexible Structured Mesh"
    ],
    "gsm": [
      "Structured 6-Panel",
      "Unstructured Dad Hat",
      "Foldable Lightweight"
    ],
    "sizes": [
      "Adjustable Velcro / Brass Buckle (Free Size)"
    ],
    "printTypes": [
      "3D Raised Embroidery",
      "Flat Embroidery",
      "DTF Print Patch"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "flexible-caps",
    "title": "Flexible Caps",
    "category": "Caps",
    "image": "/products/flexible-cap-red-front.webp",
    "href": "/products/caps/flexible-caps/",
    "price": "\u20b985",
    "priceNote": "",
    "fabrics": [
      "100% Cotton Twill",
      "Quick-Dry Breathable Polyester",
      "Flexible Structured Mesh"
    ],
    "gsm": [
      "Structured 6-Panel",
      "Unstructured Dad Hat",
      "Foldable Lightweight"
    ],
    "sizes": [
      "Adjustable Velcro / Brass Buckle (Free Size)"
    ],
    "printTypes": [
      "3D Raised Embroidery",
      "Flat Embroidery",
      "DTF Print Patch"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "foldable-caps",
    "title": "Foldable Caps",
    "category": "Caps",
    "image": "/products/foldable-cap-navy-angle.webp",
    "href": "/products/caps/foldable-caps/",
    "price": "\u20b9250",
    "priceNote": "",
    "fabrics": [
      "100% Cotton Twill",
      "Quick-Dry Breathable Polyester",
      "Flexible Structured Mesh"
    ],
    "gsm": [
      "Structured 6-Panel",
      "Unstructured Dad Hat",
      "Foldable Lightweight"
    ],
    "sizes": [
      "Adjustable Velcro / Brass Buckle (Free Size)"
    ],
    "printTypes": [
      "3D Raised Embroidery",
      "Flat Embroidery",
      "DTF Print Patch"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "button-fridge-magnet",
    "title": "Button Fridge Magnet",
    "category": "Fridge Magnets",
    "image": "/products/button-fridge-magnet.webp",
    "href": "/products/fridge-magnets/button-fridge-magnet/",
    "price": "\u20b945",
    "priceNote": "",
    "fabrics": [
      "Hard Cast Acrylic with Neodymium Magnet",
      "Metallic Button Magnet",
      "Embossed Vegan Leather"
    ],
    "gsm": [
      "Super Strong Magnetic Grip",
      "Gloss Laminated Photo Quality"
    ],
    "sizes": [
      "Round 58mm",
      "Custom Die Cut (Approx 3x3 inch)"
    ],
    "printTypes": [
      "High-Def Photo Print",
      "Laser Cut UV Print"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "leather-magnet",
    "title": "Leather Magnet",
    "category": "Fridge Magnets",
    "image": "/products/leather-magnet.png",
    "href": "/products/fridge-magnets/leather-magnet/",
    "price": "\u20b960",
    "priceNote": "",
    "fabrics": [
      "Hard Cast Acrylic with Neodymium Magnet",
      "Metallic Button Magnet",
      "Embossed Vegan Leather"
    ],
    "gsm": [
      "Super Strong Magnetic Grip",
      "Gloss Laminated Photo Quality"
    ],
    "sizes": [
      "Round 58mm",
      "Custom Die Cut (Approx 3x3 inch)"
    ],
    "printTypes": [
      "High-Def Photo Print",
      "Laser Cut UV Print"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "acrylic-fridge-magnet",
    "title": "Acrylic Fridge Magnet",
    "category": "Fridge Magnets",
    "image": "/products/acrylic-fridge-magnet.webp",
    "href": "/products/fridge-magnets/acrylic-fridge-magnet/",
    "price": "\u20b965",
    "priceNote": "",
    "fabrics": [
      "Hard Cast Acrylic with Neodymium Magnet",
      "Metallic Button Magnet",
      "Embossed Vegan Leather"
    ],
    "gsm": [
      "Super Strong Magnetic Grip",
      "Gloss Laminated Photo Quality"
    ],
    "sizes": [
      "Round 58mm",
      "Custom Die Cut (Approx 3x3 inch)"
    ],
    "printTypes": [
      "High-Def Photo Print",
      "Laser Cut UV Print"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "satin-keychain",
    "title": "Satin Keychain",
    "category": "Keychains & Gifts",
    "image": "/products/satin-keychain-lanyards.webp",
    "href": "/products/keychains-gifts/satin-keychain/",
    "price": "\u20b915",
    "priceNote": "MOQ 500",
    "fabrics": [
      "Clear Cast Acrylic (3mm / 5mm)",
      "Solid Wood Oak/Pine",
      "Genuine PU Leather",
      "Woven Satin Ribbons"
    ],
    "gsm": [
      "Precision Laser Cut",
      "Die Cut",
      "Stitched Edges"
    ],
    "sizes": [
      "Custom Cut Shapes",
      "Standard 2.5 inch",
      "Round 58mm"
    ],
    "printTypes": [
      "UV Direct Color Print",
      "Laser Engraved",
      "Dome Epoxy"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "wooden-keychain",
    "title": "Wooden Keychain",
    "category": "Keychains & Gifts",
    "image": "/products/wooden-keychain.png",
    "href": "/products/keychains-gifts/wooden-keychain/",
    "price": "\u20b955",
    "priceNote": "MOQ 50",
    "fabrics": [
      "Clear Cast Acrylic (3mm / 5mm)",
      "Solid Wood Oak/Pine",
      "Genuine PU Leather",
      "Woven Satin Ribbons"
    ],
    "gsm": [
      "Precision Laser Cut",
      "Die Cut",
      "Stitched Edges"
    ],
    "sizes": [
      "Custom Cut Shapes",
      "Standard 2.5 inch",
      "Round 58mm"
    ],
    "printTypes": [
      "UV Direct Color Print",
      "Laser Engraved",
      "Dome Epoxy"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "leather-keychain",
    "title": "Leather Keychain",
    "category": "Keychains & Gifts",
    "image": "/products/leather-keychain.png",
    "href": "/products/keychains-gifts/leather-keychain/",
    "price": "\u20b955",
    "priceNote": "",
    "fabrics": [
      "Clear Cast Acrylic (3mm / 5mm)",
      "Solid Wood Oak/Pine",
      "Genuine PU Leather",
      "Woven Satin Ribbons"
    ],
    "gsm": [
      "Precision Laser Cut",
      "Die Cut",
      "Stitched Edges"
    ],
    "sizes": [
      "Custom Cut Shapes",
      "Standard 2.5 inch",
      "Round 58mm"
    ],
    "printTypes": [
      "UV Direct Color Print",
      "Laser Engraved",
      "Dome Epoxy"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "button-keychain",
    "title": "Button Keychain",
    "category": "Keychains & Gifts",
    "image": "/products/button-keychain.png",
    "href": "/products/keychains-gifts/button-keychain/",
    "price": "\u20b935",
    "priceNote": "MOQ 50",
    "fabrics": [
      "Clear Cast Acrylic (3mm / 5mm)",
      "Solid Wood Oak/Pine",
      "Genuine PU Leather",
      "Woven Satin Ribbons"
    ],
    "gsm": [
      "Precision Laser Cut",
      "Die Cut",
      "Stitched Edges"
    ],
    "sizes": [
      "Custom Cut Shapes",
      "Standard 2.5 inch",
      "Round 58mm"
    ],
    "printTypes": [
      "UV Direct Color Print",
      "Laser Engraved",
      "Dome Epoxy"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "acrylic-keychain",
    "title": "Acrylic Keychain",
    "category": "Keychains & Gifts",
    "image": "/products/acrylic-keychain.png",
    "href": "/products/keychains-gifts/acrylic-keychain/",
    "price": "\u20b945",
    "priceNote": "MOQ 50",
    "fabrics": [
      "Clear Cast Acrylic (3mm / 5mm)",
      "Solid Wood Oak/Pine",
      "Genuine PU Leather",
      "Woven Satin Ribbons"
    ],
    "gsm": [
      "Precision Laser Cut",
      "Die Cut",
      "Stitched Edges"
    ],
    "sizes": [
      "Custom Cut Shapes",
      "Standard 2.5 inch",
      "Round 58mm"
    ],
    "printTypes": [
      "UV Direct Color Print",
      "Laser Engraved",
      "Dome Epoxy"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "mementoes",
    "title": "Mementoes",
    "category": "Keychains & Gifts",
    "image": "/products/mementoes-elephant-display.webp",
    "href": "/products/keychains-gifts/mementoes/",
    "price": "\u20b9899",
    "priceNote": "",
    "fabrics": [
      "Clear Cast Acrylic (3mm / 5mm)",
      "Solid Wood Oak/Pine",
      "Genuine PU Leather",
      "Woven Satin Ribbons"
    ],
    "gsm": [
      "Precision Laser Cut",
      "Die Cut",
      "Stitched Edges"
    ],
    "sizes": [
      "Custom Cut Shapes",
      "Standard 2.5 inch",
      "Round 58mm"
    ],
    "printTypes": [
      "UV Direct Color Print",
      "Laser Engraved",
      "Dome Epoxy"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "mug",
    "title": "Mug",
    "category": "Drinkware",
    "image": "/products/mug.webp",
    "href": "/products/drinkware/mug/",
    "price": "\u20b9160",
    "priceNote": "",
    "fabrics": [
      "Food-Grade SS 304 Stainless Steel",
      "Premium Ceramic Ceramic",
      "BPA-Free Polymer"
    ],
    "gsm": [
      "Double Wall Vacuum Insulated",
      "Sublimation Gloss Coated",
      "UV Resistant Finish"
    ],
    "sizes": [
      "500 ml",
      "750 ml",
      "1 Litre"
    ],
    "printTypes": [
      "UV Digital Printing",
      "Laser Engraving",
      "Ceramic Sublimation"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "uv-bottle-500ml",
    "title": "UV Bottle \u2014 500 ml",
    "category": "Drinkware",
    "image": "/products/uv-bottle-white-pair.png",
    "href": "/products/drinkware/uv-bottle-500ml/",
    "price": "\u20b9260",
    "priceNote": "",
    "fabrics": [
      "Food-Grade SS 304 Stainless Steel",
      "Premium Ceramic Ceramic",
      "BPA-Free Polymer"
    ],
    "gsm": [
      "Double Wall Vacuum Insulated",
      "Sublimation Gloss Coated",
      "UV Resistant Finish"
    ],
    "sizes": [
      "500 ml",
      "750 ml",
      "1 Litre"
    ],
    "printTypes": [
      "UV Digital Printing",
      "Laser Engraving",
      "Ceramic Sublimation"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "uv-bottle-750ml",
    "title": "UV Bottle \u2014 750 ml",
    "category": "Drinkware",
    "image": "/products/corporate-gift-black-bottle.png",
    "href": "/products/drinkware/uv-bottle-750ml/",
    "price": "\u20b9280",
    "priceNote": "",
    "fabrics": [
      "Food-Grade SS 304 Stainless Steel",
      "Premium Ceramic Ceramic",
      "BPA-Free Polymer"
    ],
    "gsm": [
      "Double Wall Vacuum Insulated",
      "Sublimation Gloss Coated",
      "UV Resistant Finish"
    ],
    "sizes": [
      "500 ml",
      "750 ml",
      "1 Litre"
    ],
    "printTypes": [
      "UV Digital Printing",
      "Laser Engraving",
      "Ceramic Sublimation"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "uv-bottle-1-litre",
    "title": "UV Bottle \u2014 1 Litre",
    "category": "Drinkware",
    "image": "/products/bottle.png",
    "href": "/products/drinkware/uv-bottle-1-litre/",
    "price": "\u20b9320",
    "priceNote": "",
    "fabrics": [
      "Food-Grade SS 304 Stainless Steel",
      "Premium Ceramic Ceramic",
      "BPA-Free Polymer"
    ],
    "gsm": [
      "Double Wall Vacuum Insulated",
      "Sublimation Gloss Coated",
      "UV Resistant Finish"
    ],
    "sizes": [
      "500 ml",
      "750 ml",
      "1 Litre"
    ],
    "printTypes": [
      "UV Digital Printing",
      "Laser Engraving",
      "Ceramic Sublimation"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "diary",
    "title": "Diary",
    "category": "Stickers, Badges & Stationery",
    "image": "/products/diary.webp",
    "href": "/products/stationery/diary/",
    "price": "\u20b9150",
    "priceNote": "MOQ 10",
    "fabrics": [
      "Hardbound Leatherette Diary",
      "Metallic Matte Pen",
      "Waterproof Vinyl Decal",
      "Tear-Proof Tyvek / Satin Wristband"
    ],
    "gsm": [
      "80 GSM Cream Paper / 192 Pages",
      "Laminated Waterproof Vinyl"
    ],
    "sizes": [
      "A5 Standard Notebook",
      "58mm Pin Badge",
      "A5 Sticker Sheet"
    ],
    "printTypes": [
      "Embossing / Debossing",
      "UV DTF Transfers",
      "Laser Engraving",
      "Offset Printing"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "metal-pen",
    "title": "Custom Metal Pen",
    "category": "Stickers, Badges & Stationery",
    "image": "/products/metal-pen.webp",
    "href": "/products/stationery/metal-pen/",
    "price": "\u20b965",
    "priceNote": "MOQ 50",
    "fabrics": [
      "Hardbound Leatherette Diary",
      "Metallic Matte Pen",
      "Waterproof Vinyl Decal",
      "Tear-Proof Tyvek / Satin Wristband"
    ],
    "gsm": [
      "80 GSM Cream Paper / 192 Pages",
      "Laminated Waterproof Vinyl"
    ],
    "sizes": [
      "A5 Standard Notebook",
      "58mm Pin Badge",
      "A5 Sticker Sheet"
    ],
    "printTypes": [
      "Embossing / Debossing",
      "UV DTF Transfers",
      "Laser Engraving",
      "Offset Printing"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "uv-stickers",
    "title": "UV Stickers",
    "category": "Stickers, Badges & Stationery",
    "image": "/products/uv-stickers-custom-colour.webp",
    "href": "/products/stationery/uv-stickers/",
    "price": "\u20b930",
    "priceNote": "",
    "fabrics": [
      "Hardbound Leatherette Diary",
      "Metallic Matte Pen",
      "Waterproof Vinyl Decal",
      "Tear-Proof Tyvek / Satin Wristband"
    ],
    "gsm": [
      "80 GSM Cream Paper / 192 Pages",
      "Laminated Waterproof Vinyl"
    ],
    "sizes": [
      "A5 Standard Notebook",
      "58mm Pin Badge",
      "A5 Sticker Sheet"
    ],
    "printTypes": [
      "Embossing / Debossing",
      "UV DTF Transfers",
      "Laser Engraving",
      "Offset Printing"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "bookmark",
    "title": "Bookmark",
    "category": "Stickers, Badges & Stationery",
    "image": "/products/bookmark-collection.png",
    "href": "/products/stationery/bookmark/",
    "price": "\u20b94.50",
    "priceNote": "",
    "fabrics": [
      "Hardbound Leatherette Diary",
      "Metallic Matte Pen",
      "Waterproof Vinyl Decal",
      "Tear-Proof Tyvek / Satin Wristband"
    ],
    "gsm": [
      "80 GSM Cream Paper / 192 Pages",
      "Laminated Waterproof Vinyl"
    ],
    "sizes": [
      "A5 Standard Notebook",
      "58mm Pin Badge",
      "A5 Sticker Sheet"
    ],
    "printTypes": [
      "Embossing / Debossing",
      "UV DTF Transfers",
      "Laser Engraving",
      "Offset Printing"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "leather-wrist-band",
    "title": "Leather Wrist Band",
    "category": "Stickers, Badges & Stationery",
    "image": "/products/leather-wrist-band.png",
    "href": "/products/stationery/leather-wrist-band/",
    "price": "\u20b940",
    "priceNote": "",
    "fabrics": [
      "Hardbound Leatherette Diary",
      "Metallic Matte Pen",
      "Waterproof Vinyl Decal",
      "Tear-Proof Tyvek / Satin Wristband"
    ],
    "gsm": [
      "80 GSM Cream Paper / 192 Pages",
      "Laminated Waterproof Vinyl"
    ],
    "sizes": [
      "A5 Standard Notebook",
      "58mm Pin Badge",
      "A5 Sticker Sheet"
    ],
    "printTypes": [
      "Embossing / Debossing",
      "UV DTF Transfers",
      "Laser Engraving",
      "Offset Printing"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "paper-wrist-band",
    "title": "Paper Wrist Band",
    "category": "Stickers, Badges & Stationery",
    "image": "/products/paper-wrist-band.png",
    "href": "/products/stationery/paper-wrist-band/",
    "price": "\u20b95.50",
    "priceNote": "",
    "fabrics": [
      "Hardbound Leatherette Diary",
      "Metallic Matte Pen",
      "Waterproof Vinyl Decal",
      "Tear-Proof Tyvek / Satin Wristband"
    ],
    "gsm": [
      "80 GSM Cream Paper / 192 Pages",
      "Laminated Waterproof Vinyl"
    ],
    "sizes": [
      "A5 Standard Notebook",
      "58mm Pin Badge",
      "A5 Sticker Sheet"
    ],
    "printTypes": [
      "Embossing / Debossing",
      "UV DTF Transfers",
      "Laser Engraving",
      "Offset Printing"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "fabric-wrist-band",
    "title": "Fabric Wrist Band",
    "category": "Stickers, Badges & Stationery",
    "image": "/products/fabric-wrist-band.png",
    "href": "/products/stationery/fabric-wrist-band/",
    "price": "\u20b98.50",
    "priceNote": "",
    "fabrics": [
      "Hardbound Leatherette Diary",
      "Metallic Matte Pen",
      "Waterproof Vinyl Decal",
      "Tear-Proof Tyvek / Satin Wristband"
    ],
    "gsm": [
      "80 GSM Cream Paper / 192 Pages",
      "Laminated Waterproof Vinyl"
    ],
    "sizes": [
      "A5 Standard Notebook",
      "58mm Pin Badge",
      "A5 Sticker Sheet"
    ],
    "printTypes": [
      "Embossing / Debossing",
      "UV DTF Transfers",
      "Laser Engraving",
      "Offset Printing"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "button-badge",
    "title": "Button Badge",
    "category": "Stickers, Badges & Stationery",
    "image": "/products/button-badge.webp",
    "href": "/products/stationery/button-badge/",
    "price": "\u20b920 \u00b7 \u20b925",
    "priceNote": "Exact option confirmed with your requirement.",
    "fabrics": [
      "Hardbound Leatherette Diary",
      "Metallic Matte Pen",
      "Waterproof Vinyl Decal",
      "Tear-Proof Tyvek / Satin Wristband"
    ],
    "gsm": [
      "80 GSM Cream Paper / 192 Pages",
      "Laminated Waterproof Vinyl"
    ],
    "sizes": [
      "A5 Standard Notebook",
      "58mm Pin Badge",
      "A5 Sticker Sheet"
    ],
    "printTypes": [
      "Embossing / Debossing",
      "UV DTF Transfers",
      "Laser Engraving",
      "Offset Printing"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "sticker-a5-custom-cut",
    "title": "Custom-Cut Stickers \u2014 A5",
    "category": "Stickers, Badges & Stationery",
    "image": "/products/custom-cut-stickers.png",
    "href": "/products/stationery/sticker-a5-custom-cut/",
    "price": "\u20b940",
    "priceNote": "MOQ 100",
    "fabrics": [
      "Hardbound Leatherette Diary",
      "Metallic Matte Pen",
      "Waterproof Vinyl Decal",
      "Tear-Proof Tyvek / Satin Wristband"
    ],
    "gsm": [
      "80 GSM Cream Paper / 192 Pages",
      "Laminated Waterproof Vinyl"
    ],
    "sizes": [
      "A5 Standard Notebook",
      "58mm Pin Badge",
      "A5 Sticker Sheet"
    ],
    "printTypes": [
      "Embossing / Debossing",
      "UV DTF Transfers",
      "Laser Engraving",
      "Offset Printing"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "lanyard-tag",
    "title": "Laneyard Tag",
    "category": "Stickers, Badges & Stationery",
    "image": "/products/lanyard-tag.png",
    "href": "/products/stationery/lanyard-tag/",
    "price": "\u20b935",
    "priceNote": "",
    "fabrics": [
      "Hardbound Leatherette Diary",
      "Metallic Matte Pen",
      "Waterproof Vinyl Decal",
      "Tear-Proof Tyvek / Satin Wristband"
    ],
    "gsm": [
      "80 GSM Cream Paper / 192 Pages",
      "Laminated Waterproof Vinyl"
    ],
    "sizes": [
      "A5 Standard Notebook",
      "58mm Pin Badge",
      "A5 Sticker Sheet"
    ],
    "printTypes": [
      "Embossing / Debossing",
      "UV DTF Transfers",
      "Laser Engraving",
      "Offset Printing"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "miss-india-sachet",
    "title": "Miss India Sachet",
    "category": "Sachets & Sashes",
    "image": "/products/miss-india-sachet.webp",
    "href": "/products/sachets/miss-india-sachet/",
    "price": "\u20b9160",
    "priceNote": "",
    "fabrics": [
      "Premium Gloss Satin Fabric",
      "Gold & Silver Fringed Border"
    ],
    "gsm": [
      "Double layered satin with reinforced backing"
    ],
    "sizes": [
      "Standard Pageant / Event Size (72 inch length)"
    ],
    "printTypes": [
      "Gold Glitter Foil Print",
      "Sublimation",
      "Metallic Vinyl Cut"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "tote-bag",
    "title": "Tote Bag",
    "category": "Bags & Accessories",
    "image": "/products/tote-bag.webp",
    "href": "/products/bags-accessories/tote-bag/",
    "price": "\u20b912.50 \u00b7 \u20b916.50 \u00b7 \u20b955 \u00b7 \u20b975 \u00b7 \u20b9125 \u00b7 \u20b9170",
    "priceNote": "Exact option confirmed with your requirement.",
    "fabrics": [
      "100% Natural Cotton Canvas",
      "Laminated Eco Jute",
      "Water-Resistant 600D Poly Canvas",
      "Heavy-Duty Ballistic Nylon"
    ],
    "gsm": [
      "180 GSM Cotton",
      "280 GSM Heavy Canvas",
      "Laminated Jute Weave"
    ],
    "sizes": [
      "Standard 14x16 inch",
      "Large 16x18 inch",
      "Custom Dimensions"
    ],
    "printTypes": [
      "Screen Print",
      "Multi-Colour Heat Transfer",
      "Sublimation"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "jute-bag",
    "title": "Jute Bag",
    "category": "Bags & Accessories",
    "image": "/products/jute-bag-structured.png",
    "href": "/products/bags-accessories/jute-bag/",
    "price": "\u20b960 \u00b7 \u20b990 \u00b7 \u20b9110 \u00b7 \u20b9160",
    "priceNote": "Exact option confirmed with your requirement.",
    "fabrics": [
      "100% Natural Cotton Canvas",
      "Laminated Eco Jute",
      "Water-Resistant 600D Poly Canvas",
      "Heavy-Duty Ballistic Nylon"
    ],
    "gsm": [
      "180 GSM Cotton",
      "280 GSM Heavy Canvas",
      "Laminated Jute Weave"
    ],
    "sizes": [
      "Standard 14x16 inch",
      "Large 16x18 inch",
      "Custom Dimensions"
    ],
    "printTypes": [
      "Screen Print",
      "Multi-Colour Heat Transfer",
      "Sublimation"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "jute-pouch",
    "title": "Jute Pouches",
    "category": "Bags & Accessories",
    "image": "/products/jute-pouches-colours.png",
    "href": "/products/bags-accessories/jute-pouch/",
    "price": "\u20b98.50 \u00b7 \u20b912.50 \u00b7 \u20b914.50",
    "priceNote": "Exact option confirmed with your requirement.",
    "fabrics": [
      "100% Natural Cotton Canvas",
      "Laminated Eco Jute",
      "Water-Resistant 600D Poly Canvas",
      "Heavy-Duty Ballistic Nylon"
    ],
    "gsm": [
      "180 GSM Cotton",
      "280 GSM Heavy Canvas",
      "Laminated Jute Weave"
    ],
    "sizes": [
      "Standard 14x16 inch",
      "Large 16x18 inch",
      "Custom Dimensions"
    ],
    "printTypes": [
      "Screen Print",
      "Multi-Colour Heat Transfer",
      "Sublimation"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "backpack",
    "title": "Backpack",
    "category": "Bags & Accessories",
    "image": "/products/backpack.webp",
    "href": "/products/bags-accessories/backpack/",
    "price": "\u20b9430",
    "priceNote": "",
    "fabrics": [
      "100% Natural Cotton Canvas",
      "Laminated Eco Jute",
      "Water-Resistant 600D Poly Canvas",
      "Heavy-Duty Ballistic Nylon"
    ],
    "gsm": [
      "180 GSM Cotton",
      "280 GSM Heavy Canvas",
      "Laminated Jute Weave"
    ],
    "sizes": [
      "Standard 14x16 inch",
      "Large 16x18 inch",
      "Custom Dimensions"
    ],
    "printTypes": [
      "Screen Print",
      "Multi-Colour Heat Transfer",
      "Sublimation"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "laptop-bag",
    "title": "Laptop Bag",
    "category": "Bags & Accessories",
    "image": "/products/laptop-bag-black.png",
    "href": "/products/bags-accessories/laptop-bag/",
    "price": "\u20b9999",
    "priceNote": "",
    "fabrics": [
      "100% Natural Cotton Canvas",
      "Laminated Eco Jute",
      "Water-Resistant 600D Poly Canvas",
      "Heavy-Duty Ballistic Nylon"
    ],
    "gsm": [
      "180 GSM Cotton",
      "280 GSM Heavy Canvas",
      "Laminated Jute Weave"
    ],
    "sizes": [
      "Standard 14x16 inch",
      "Large 16x18 inch",
      "Custom Dimensions"
    ],
    "printTypes": [
      "Screen Print",
      "Multi-Colour Heat Transfer",
      "Sublimation"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "trolley",
    "title": "Trolley",
    "category": "Bags & Accessories",
    "image": "/products/trolley.png",
    "href": "/products/bags-accessories/trolley/",
    "price": "\u20b93500",
    "priceNote": "",
    "fabrics": [
      "100% Natural Cotton Canvas",
      "Laminated Eco Jute",
      "Water-Resistant 600D Poly Canvas",
      "Heavy-Duty Ballistic Nylon"
    ],
    "gsm": [
      "180 GSM Cotton",
      "280 GSM Heavy Canvas",
      "Laminated Jute Weave"
    ],
    "sizes": [
      "Standard 14x16 inch",
      "Large 16x18 inch",
      "Custom Dimensions"
    ],
    "printTypes": [
      "Screen Print",
      "Multi-Colour Heat Transfer",
      "Sublimation"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "custom-flags",
    "title": "Custom Flags",
    "category": "Other Products",
    "image": "/products/custom-flags-new.png",
    "href": "/products/other-products/custom-flags/",
    "price": "\u20b960 \u00b7 \u20b9400 \u00b7 \u20b9600",
    "priceNote": "Exact option confirmed with your requirement.",
    "fabrics": [
      "Knitted Polyester Flag Fabric",
      "Traditional Mysuru Zari Border Cotton",
      "Waterproof Pongee Fabric"
    ],
    "gsm": [
      "Weather Resistant Outdoor Grade",
      "Double Stitched Edges"
    ],
    "sizes": [
      "Custom Flag Sizes",
      "Standard Mysuru Shalya",
      "23-inch Windproof Canopy"
    ],
    "printTypes": [
      "Sublimation Printing",
      "Screen Printing",
      "Gold Zari Weaving"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "umbrella",
    "title": "Umbrella",
    "category": "Other Products",
    "image": "/products/umbrella-black.png",
    "href": "/products/other-products/umbrella/",
    "price": "\u20b9600",
    "priceNote": "",
    "fabrics": [
      "Knitted Polyester Flag Fabric",
      "Traditional Mysuru Zari Border Cotton",
      "Waterproof Pongee Fabric"
    ],
    "gsm": [
      "Weather Resistant Outdoor Grade",
      "Double Stitched Edges"
    ],
    "sizes": [
      "Custom Flag Sizes",
      "Standard Mysuru Shalya",
      "23-inch Windproof Canopy"
    ],
    "printTypes": [
      "Sublimation Printing",
      "Screen Printing",
      "Gold Zari Weaving"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  },
  {
    "id": "mysuru-shalya",
    "title": "Mysuru Shalya",
    "category": "Other Products",
    "image": "/products/mysuru-shalya.png",
    "href": "/products/other-products/mysuru-shalya/",
    "price": "\u20b9110",
    "priceNote": "",
    "fabrics": [
      "Knitted Polyester Flag Fabric",
      "Traditional Mysuru Zari Border Cotton",
      "Waterproof Pongee Fabric"
    ],
    "gsm": [
      "Weather Resistant Outdoor Grade",
      "Double Stitched Edges"
    ],
    "sizes": [
      "Custom Flag Sizes",
      "Standard Mysuru Shalya",
      "23-inch Windproof Canopy"
    ],
    "printTypes": [
      "Sublimation Printing",
      "Screen Printing",
      "Gold Zari Weaving"
    ],
    "colors": [
      "Jet Black",
      "Pure White",
      "Navy Blue",
      "Royal Blue",
      "Maroon Red",
      "Bottle Green",
      "Heather Grey",
      "Mustard Yellow"
    ]
  }
];

export const GOLF_PATTERNS: GolfPattern[] = [
  {
    "id": "aqua-chevron",
    "name": "Aqua Chevron",
    "image": "/products/golf/aqua-chevron.jpg",
    "colors": [
      "Aqua Blue",
      "Navy Blue",
      "Crisp White"
    ],
    "description": "Dynamic chevron geometry in energetic ocean hues, engineered for high-energy play and maximum breathability.",
    "fabric": "93% Micro Polyester, 7% Spandex",
    "weight": "190 GSM High Elasticity",
    "features": [
      "UV50+ Protection",
      "Quick Dry Moisture Wicking",
      "4-Way Ergonomic Stretch",
      "Anti-Odor Microbial Treatment"
    ]
  },
  {
    "id": "geometric-teal",
    "name": "Geometric Teal",
    "image": "/products/golf/geometric-teal.jpg",
    "colors": [
      "Deep Teal",
      "Cyan",
      "Charcoal"
    ],
    "description": "Modern polygon grid design with balanced contrast, offering athletic distinction on and off the fairways.",
    "fabric": "93% Micro Polyester, 7% Spandex",
    "weight": "190 GSM High Elasticity",
    "features": [
      "UV50+ Protection",
      "Quick Dry Moisture Wicking",
      "4-Way Ergonomic Stretch",
      "Laser Perforated Side Panels"
    ]
  },
  {
    "id": "mosaic-red",
    "name": "Mosaic Red",
    "image": "/products/golf/mosaic-red.jpg",
    "colors": [
      "Crimson Red",
      "Burgundy",
      "Graphite"
    ],
    "description": "Bold micro-mosaic tessellation designed to stand out in corporate tournaments and club tournaments alike.",
    "fabric": "93% Micro Polyester, 7% Spandex",
    "weight": "190 GSM High Elasticity",
    "features": [
      "UV50+ Protection",
      "Quick Dry Moisture Wicking",
      "4-Way Ergonomic Stretch",
      "Reinforced Collar Stay"
    ]
  },
  {
    "id": "botanical-yellow",
    "name": "Botanical Yellow",
    "image": "/products/golf/botanical-yellow.jpg",
    "colors": [
      "Solar Yellow",
      "Midnight Slate",
      "Ivory"
    ],
    "description": "Subtle foliage motif paired with vibrant yellow contrast accents, delivering contemporary golf resort style.",
    "fabric": "93% Micro Polyester, 7% Spandex",
    "weight": "190 GSM High Elasticity",
    "features": [
      "UV50+ Protection",
      "Quick Dry Moisture Wicking",
      "4-Way Ergonomic Stretch",
      "Wrinkle & Pilling Resistant"
    ]
  },
  {
    "id": "linear-white",
    "name": "Linear White",
    "image": "/products/golf/linear-white.jpg",
    "colors": [
      "Ice White",
      "Steel Grey",
      "Azure Blue"
    ],
    "description": "Clean, refined horizontal bar micro-texture that matches effortlessly with club trousers and casual golf shorts.",
    "fabric": "93% Micro Polyester, 7% Spandex",
    "weight": "190 GSM High Elasticity",
    "features": [
      "UV50+ Protection",
      "Quick Dry Moisture Wicking",
      "4-Way Ergonomic Stretch",
      "Sun-Deflecting White Microfibre"
    ]
  },
  {
    "id": "cobalt-chevron",
    "name": "Cobalt Chevron",
    "image": "/products/golf/cobalt-chevron.jpg",
    "colors": [
      "Cobalt Blue",
      "Indigo",
      "Silver Grey"
    ],
    "description": "A commanding deep cobalt chevron weave giving an athletic silhouette and authoritative team presence.",
    "fabric": "93% Micro Polyester, 7% Spandex",
    "weight": "190 GSM High Elasticity",
    "features": [
      "UV50+ Protection",
      "Quick Dry Moisture Wicking",
      "4-Way Ergonomic Stretch",
      "Anti-Chafe Flatlock Seams"
    ]
  },
  {
    "id": "leaf-mint",
    "name": "Leaf Mint",
    "image": "/products/golf/leaf-mint.jpg",
    "colors": [
      "Mint Sage",
      "Pine Green",
      "Soft Cream"
    ],
    "description": "Soothing organic botanic print with summer-ready cool mint tone, ideal for humid climates and warm days.",
    "fabric": "93% Micro Polyester, 7% Spandex",
    "weight": "190 GSM High Elasticity",
    "features": [
      "UV50+ Protection",
      "Quick Dry Moisture Wicking",
      "4-Way Ergonomic Stretch",
      "Instant Evaporation Weave"
    ]
  }
];

export const GIFT_SETS: GiftSet[] = [
  {
    "id": "executive-welcome-kit",
    "title": "Wild Collective Luxury Welcome Hamper",
    "subtitle": "Complete premium onboarding kit in custom molded foam presentation box.",
    "image": "/products/corporate-gift-black-bottle.png",
    "items": [
      "Navy Bio-Wash Cotton T-Shirt",
      "Navy Insulated Thermal Flask (750ml)",
      "Ceramic Coffee Desk Mug",
      "Full-Grain Tan Leather Strap Keychain",
      "Executive Engraved Chrome Metal Pen",
      "Hardbound Executive Notebook Diary",
      "Gold Foil Welcome & Appreciation Card",
      "Custom Molded Rigid Luxury Gift Box"
    ],
    "basePrice": "₹750",
    "moq": "25 sets",
    "leadTime": "4-6 business days"
  },
  {
    "id": "onboarding-champion-pack",
    "title": "Employee Onboarding Pack",
    "subtitle": "Everything a new team member needs on Day 1 to feel connected and proud of the brand.",
    "image": "/products/round-neck-tshirt-yellow-front.webp",
    "items": [
      "Bio-Wash Cotton Round Neck T-Shirt",
      "Eco Cotton Canvas Tote Bag",
      "Custom Ceramic Desk Mug",
      "Lanyard & ID Holder",
      "Custom Laptop Stickers Pack"
    ],
    "basePrice": "\u20b9420",
    "moq": "50 sets",
    "leadTime": "3-5 business days"
  },
  {
    "id": "sports-tournament-kit",
    "title": "Corporate Golf & Sports Kit",
    "subtitle": "Premium performance merchandise for corporate tournaments, sports days and retreats.",
    "image": "/products/golf/geometric-teal.jpg",
    "items": [
      "Swing Style Performance Golf T-Shirt",
      "UV Bottle (500ml)",
      "Flexible Sports Cap",
      "Microfibre Sports Towel",
      "Drawstring Gym Sack"
    ],
    "basePrice": "\u20b9780",
    "moq": "30 sets",
    "leadTime": "5-7 business days"
  },
  {
    "id": "eco-friendly-summit-set",
    "title": "Eco-Conscious Conference Set",
    "subtitle": "Sustainable, plastic-free conference and seminar essentials.",
    "image": "/products/jute-bag-structured.png",
    "items": [
      "Laminated Structured Jute Bag",
      "Eco Kraft Notebook",
      "Recycled Bamboo Pen",
      "Custom Button Badge",
      "Fabric Wristband"
    ],
    "basePrice": "\u20b9245",
    "moq": "100 sets",
    "leadTime": "3-5 business days"
  }
];

export const BRAND_FAMILY: BrandFamilyItem[] = [
  {
    "name": "Swing Style",
    "tagline": "Classic golf style with a clean, sporting identity.",
    "description": "Engineered golf T-shirts and active performance gear built with 93% micro polyester and 7% spandex. UV50+ protection with quick-dry moisture management.",
    "badge": "Golf & Active",
    "accent": "#65d9ca"
  },
  {
    "name": "TEON",
    "tagline": "A bold contemporary mark with a strong, minimal presence.",
    "description": "Modern streetwear cuts, oversized drops, and heavy bio-washed cotton fabrics (220-280 GSM) crafted for urban brands and campus communities.",
    "badge": "Contemporary Streetwear",
    "accent": "#ff6948"
  },
  {
    "name": "London Tailor",
    "tagline": "Heritage-inspired tailoring with an unmistakable signature.",
    "description": "Formal corporate shirting, tailored collar polos, and structured blazers designed for hospitality, corporate enterprises, and institutions.",
    "badge": "Heritage Corporate",
    "accent": "#1f1b64"
  }
];

export const COMPANY_INFO = {
  "name": "Wild Collective",
  "legalName": "Wild Collective",
  "tagline": "Your Brand. Made Wearable.",
  "subTagline": "Custom Printing \u00b7 Merchandise \u00b7 Corporate Gifts",
  "address": "830/A, 11th Cross, Ramanuja Road, Fort Mohalla, Mysuru, Karnataka 570004",
  "phone": "+91 99454 21777",
  "phoneRaw": "+919945421777",
  "whatsapp": "+91 99454 21777",
  "whatsappRaw": "919945421777",
  "emails": [
    "contact@wildcollective.store",
    "shop@wildcollective.store"
  ],
  "gstin": "29AAJCK3522F1ZK",
  "instagram": "https://www.instagram.com/wildcollective.store/",
  "website": "https://wildcollective.store/",
  "priceSource": "Wild Collective"
};

export const CATEGORIES = [
  'All Products',
  'Apparel',
  'Golf T-Shirts',
  'Drinkware',
  'Bags & Accessories',
  'Keychains & Gifts',
  'Caps',
  'Stickers, Badges & Stationery',
  'Fridge Magnets',
  'Other Products',
  'Sachets & Sashes'
];

export const PRINTING_TECHNIQUES = [
  {
    name: 'DTF Printing (Direct to Film)',
    tag: 'Full Colour Photographic',
    description: 'High-definition digital heat transfers with vibrant colours, crisp micro-details, and exceptional stretchability on any fabric.',
    bestFor: 'Multicolor logos, gradients, photo prints, small to medium runs',
    durability: '50+ washes with zero cracking'
  },
  {
    name: 'Screen Printing (Plastisol & Water-Based)',
    tag: 'Cost-Effective Bulk Standard',
    description: 'The golden standard of apparel decoration. Yields rich, opaque colours with sharp edges and unbeatable economy for orders of 50+ units.',
    bestFor: 'Team t-shirts, event merch, bulk corporate orders, uniform apparel',
    durability: 'Industry-standard high longevity'
  },
  {
    name: 'High-Precision Computerized Embroidery',
    tag: 'Premium Textured Finish',
    description: 'High-density German thread stitching that delivers an upscale, tactile corporate look on polos, jackets, hoodies, and structured caps.',
    bestFor: 'Collar T-shirts, corporate jackets, executive caps, backpacks',
    durability: 'Permanent — lasts the entire lifespan of the garment'
  },
  {
    name: 'UV Digital Flatbed Printing',
    tag: 'Ultra-Sharp Rigid Objects',
    description: 'Instant UV light-cured inks printing directly onto stainless steel bottles, ceramic mugs, acrylic keychains, and diaries.',
    bestFor: 'Drinkware, metal pens, acrylic awards, diaries, tech gifts',
    durability: 'Scratch-resistant, waterproof and chemical-resistant'
  },
  {
    name: 'Sublimation Printing',
    tag: 'All-Over Breathable Infusion',
    description: 'Dye permanently fuses into the polyester fibres so the fabric remains completely soft, flexible, and 100% breathable with zero ink feel.',
    bestFor: 'Swing Style Golf T-shirts, athletic jerseys, lanyards, flags',
    durability: 'Zero fade — will never crack, peel or wash off'
  }
];
