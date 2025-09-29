import { Product, Order } from "../types";

export const products: Product[] = [
  {
    id: "classic-denim-jacket",
    name: "The Classic Denim Jacket",
    category: "jackets",
    price: 89.99,
    description:
      "A timeless denim jacket that belongs in every wardrobe. Perfect for layering.",
    specifications: {
      Material: "98% Cotton, 2% Elastane",
      Fit: "Regular",
      Sizes: "S, M, L, XL",
      Colors: "Vintage Blue, Black",
    },
    stock: 25,
    bestsellerRank: 3,
    relatedProducts: ["slim-fit-chino-pants", "white-crewneck-tshirt"],
  },
  {
    id: "floral-midi-dress",
    name: "Floral Print Midi Dress",
    category: "dresses",
    price: 129.5,
    description:
      "A beautiful and breezy midi dress with a vibrant floral pattern, perfect for sunny days.",
    specifications: {
      Material: "100% Viscose",
      Length: "Midi",
      Sizes: "XS, S, M, L",
      Pattern: "Floral",
    },
    stock: 12,
    bestsellerRank: 1,
    discount: { percentage: 15, description: "Spring Collection Sale!" },
  },
  {
    id: "slim-fit-chino-pants",
    name: "Slim-Fit Chino Pants",
    category: "pants",
    price: 64.0,
    description:
      "Versatile and comfortable chino pants that can be dressed up or down.",
    specifications: {
      Material: "97% Cotton, 3% Spandex",
      Fit: "Slim",
      Sizes: "28, 30, 32, 34, 36",
      Colors: "Khaki, Navy, Grey",
    },
    stock: 40,
    bestsellerRank: 2,
  },
  {
    id: "leather-tote-bag",
    name: "Leather Tote Bag",
    category: "accessories",
    price: 189.0,
    description:
      "A spacious and elegant tote bag crafted from genuine leather, perfect for work or weekend.",
    specifications: {
      Material: "100% Genuine Leather",
      Dimensions: '15" W x 12" H x 5" D',
      Colors: "Black, Cognac Brown",
    },
    stock: 8,
    relatedProducts: ["silk-scarf", "aviator-sunglasses"],
  },
  {
    id: "white-crewneck-tshirt",
    name: "White Crewneck T-shirt",
    category: "tops",
    price: 25.0,
    description:
      "A high-quality, essential white t-shirt made from premium Pima cotton.",
    specifications: {
      Material: "100% Pima Cotton",
      Fit: "Classic",
      Sizes: "S, M, L, XL",
    },
    stock: 100,
  },
  {
    id: "aviator-sunglasses",
    name: "Aviator Sunglasses",
    category: "accessories",
    price: 75.0,
    description:
      "Classic aviator sunglasses with polarized lenses for maximum sun protection.",
    specifications: {
      Frame: "Metal",
      Lenses: "Polarized UV400",
      Colors: "Gold, Silver",
    },
    stock: 0,
  },
  {
    id: "silk-scarf",
    name: "Printed Silk Scarf",
    category: "accessories",
    price: 49.5,
    description:
      "A luxurious silk scarf with a vibrant, artistic print to elevate any outfit.",
    specifications: { Material: "100% Silk", Dimensions: '35" x 35"' },
    stock: 30,
  },
  {
    id: "high-waisted-jeans",
    name: "High-Waisted Skinny Jeans",
    category: "jeans",
    price: 98.0,
    description:
      "Flattering high-waisted skinny jeans with a comfortable stretch.",
    specifications: {
      Material: "85% Cotton, 13% Polyester, 2% Elastane",
      Fit: "Skinny",
      Sizes: "24, 25, 26, 27, 28, 29, 30",
    },
    stock: 50,
  },
  {
    id: "athletic-running-shoes",
    name: "Athletic Running Shoes",
    category: "shoes",
    price: 120.0,
    description:
      "Lightweight and breathable running shoes designed for optimal performance.",
    specifications: {
      Material: "Mesh Upper, Rubber Sole",
      Sizes: "7, 8, 9, 10, 11, 12",
      Colors: "Black, White, Blue",
    },
    stock: 20,
  },
  {
    id: "cashmere-sweater",
    name: "Cashmere V-Neck Sweater",
    category: "sweaters",
    price: 150.0,
    description:
      "Soft and luxurious cashmere sweater with a classic V-neck design.",
    specifications: {
      Material: "100% Cashmere",
      Fit: "Regular",
      Sizes: "S, M, L, XL",
      Colors: "Beige, Grey, Navy",
    },
    stock: 15,
    bestsellerRank: 5,
  },
  {
    id: "leather-belt",
    name: "Classic Leather Belt",
    category: "accessories",
    price: 45.0,
    description:
      "A durable and stylish leather belt with a sleek metal buckle.",
    specifications: {
      Material: "100% Leather",
      Width: "1.5 inches",
      Sizes: "S, M, L, XL",
      Colors: "Brown, Black",
    },
    stock: 60,
  },
  {
    id: "summer-hat",
    name: "Wide-Brim Summer Hat",
    category: "accessories",
    price: 39.99,
    description:
      "A chic wide-brim hat to protect you from the sun while keeping you stylish.",
    specifications: {
      Material: "Straw",
      Sizes: "One Size Fits All",
      Colors: "Natural, Black",
    },
    stock: 22,
  },
];

export const orders: Order[] = [
  {
    id: "CHIC1001",
    userId: "user-001",
    items: [
      { productId: "floral-midi-dress", quantity: 1 },
      { productId: "leather-tote-bag", quantity: 1 },
    ],
    status: "Shipped",
    orderDate: "2023-10-25T10:00:00Z",
    estimatedDelivery: "2023-10-29",
    trackingNumber: "1Z999AA1012345CHIC",
  },
  {
    id: "CHIC1002",
    userId: "user-002",
    items: [{ productId: "classic-denim-jacket", quantity: 1 }],
    status: "Processing",
    orderDate: "2023-10-27T14:30:00Z",
    estimatedDelivery: "2023-11-02",
  },
];
