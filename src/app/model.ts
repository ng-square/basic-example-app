export interface Pizza {
    id?: number
    name?: string;
    description?: string;
    price?: number;
    image?: string;
}

export interface Order {
    pizzas?: Pizza[];
    name?: string;
    address?: string;
}