
interface SubscriptionCreateDto{
    code: string;
    user_id: number;
    amount: number;
    cron: number;
}

interface SubscriptionUpdateDto{
    code: string;
    amount: number;
    cron: number;
}