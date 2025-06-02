import { Wrapper } from "./OrderList.styles";
import OrderItem from "../OrderItem/OrderItem";

const OrderList = ({ handleChangeOpen, orders }) => {

  return (
    <Wrapper>
      {orders.length > 0 ? (
        orders.map((item, key) => (
          <OrderItem
            key={key}
            handleChangeOpen={handleChangeOpen}
            hardwareBrand={item.hardwareBrand}
            hardwareModel={item.hardwareModel}
            orderId={item._id}
            orderDate={item.orderDate}
            client={item.name + " " + item.surname}
            status={item.status}
          />
        ))
      ) : (
        <h4>Brak zleceń</h4>
      )}
    </Wrapper>
  );
};

export default OrderList;
