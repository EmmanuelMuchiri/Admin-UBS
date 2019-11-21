export interface Bill {
    Revstreams: number;
    customer_name: string;
    customer_phone: number;
    customer_email: string;
    narration: string;
    quantity: number;
    due_date: Date;
    generated_by: string;
}

export interface Bills {
    id: number;
    Revstreams: number;
    customer_name: string;
    customer_email: string;
    narration: string;
    subtotal: number;
    quantity: number;
    status: string;
    bill_id: string;
}

export interface Merchant {
    id: number;
    Business_name: string;
    Email: string;
    Phone_number: number;
    merchant_id: string;
    Industry: string;
    Physical_address: string;
    Town: string;
    join_date: string;
}

export interface RevenueStreams {
    id: number;
    name: string;
    revenue_description: string;
    Merchant_Owner: number;
    price: number;
    Industrys: string;
}

export interface Payment {
    id: number;
    payers_name: string;
    payers_phone: number;
    narration: string;
    amount: number;
    pay_date: string;
    bill_number: string;
}