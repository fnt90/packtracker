export default function OrderStatus({ orderStatus }) {
    return (
        <span>
            {orderStatus === "order-info-received" && <span>Order information received</span>}
            {orderStatus === "on-the-way" && <span>On the way</span>}
            {orderStatus === "delivered" && <span>Delivered</span>}
            {orderStatus === "ready-for-pickup" && <span>Ready for pickup</span>}
        </span>
    );
}