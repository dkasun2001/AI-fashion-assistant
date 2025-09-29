export interface Product {
  id: string;
  name: string;
  category: string;
  price: number;
  description: string;
  specifications: Record<string, string>;
  stock: number;
  bestsellerRank?: number;
  discount?: {
    percentage: number;
    description: string;
  };
  relatedProducts?: string[];
}

export interface Order {
  id:string;
  userId: string;
  items: { productId: string; quantity: number }[];
  status: 'Processing' | 'Shipped' | 'Delivered' | 'Cancelled';
  orderDate: string;
  estimatedDelivery: string;
  trackingNumber?: string;
}

export type Sender = 'user' | 'bot';

export interface Message {
  id: string;
  text: string;
  sender: Sender;
}
