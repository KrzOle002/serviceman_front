import { Wrapper, Data, StyledButton } from "./OrderItem.styles";

const OrderItem = ({
  hardwareBrand,
  hardwareModel,
  orderId,
  orderDate,
  client,
  handleChangeOpen,
  status,
}) => {
  return (
    <Wrapper className={status}>
      <Data>{hardwareBrand + " " + hardwareModel}</Data>
      <Data>{client}</Data>
      <StyledButton
        onClick={() => handleChangeOpen(orderId)}
        className="primary"
      >
        Szczegóły
      </StyledButton>
    </Wrapper>
  );
};

export default OrderItem;
