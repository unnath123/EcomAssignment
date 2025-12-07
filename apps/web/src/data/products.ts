export interface Product {
    id: string;
    name: string;
    price: number;
    category: string;
    image: string;
    specs: string;
}

export const products: Product[] = [
    // Mobiles
    {
        id: '1',
        name: 'iPhone 15 Pro',
        price: 999,
        category: 'Mobiles',
        image: 'https://images.unsplash.com/photo-1696446701796-da61225697cc?w=500&q=80',
        specs: '256GB, Titanium'
    },
    {
        id: '2',
        name: 'Samsung Galaxy S24',
        price: 899,
        category: 'Mobiles',
        image: 'https://images.unsplash.com/photo-1610945415295-d9bbf067e59c?w=500&q=80',
        specs: '128GB, AI Features'
    },
    // Laptops
    {
        id: '3',
        name: 'MacBook Air M3',
        price: 1099,
        category: 'Laptops',
        image: 'https://images.unsplash.com/photo-1517336714731-489689fd1ca4?w=500&q=80',
        specs: '13-inch, 8GB RAM'
    },
    {
        id: '4',
        name: 'Dell XPS 13',
        price: 1299,
        category: 'Laptops',
        image: 'https://images.unsplash.com/photo-1593642632823-8f78536788c6?w=500&q=80',
        specs: 'OLED, 16GB RAM'
    },
    // Headphones
    {
        id: '5',
        name: 'Sony WH-1000XM5',
        price: 349,
        category: 'Headphones',
        image: 'https://images.unsplash.com/photo-1618366712010-f4ae9c647dcb?w=500&q=80',
        specs: 'Noise Cancelling'
    },
    // Watches
    {
        id: '6',
        name: 'Apple Watch Series 9',
        price: 399,
        category: 'Watches',
        image: 'https://images.unsplash.com/photo-1546868871-7041f2a55e12?w=500&q=80',
        specs: 'GPS, 45mm'
    },
    // Accessories
    {
        id: '7',
        name: 'Logitech MX Master 3S',
        price: 99,
        category: 'Accessories',
        image: 'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=500&q=80',
        specs: 'Wireless Mouse'
    },
    // Gaming
    {
        id: '8',
        name: 'PS5 Console',
        price: 499,
        category: 'Gaming',
        image: 'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?w=500&q=80',
        specs: 'Digital Edition'
    }
];
