import { Col, Row } from "react-bootstrap";
import { StoreItem } from "../components/StoreItem";
import storeItems from "../data/items.json";
export function Store() {
  return (
    <>
      <h1>Store</h1>
      <Row lg={3} md={2} xs={1} className="g-4 ">
        {storeItems.map((item) => (
          //   <Col className="p-4">{JSON.stringify(item)}</Col>
          <Col key={item.id}>
            <StoreItem {...item} />
          </Col>
        ))}
      </Row>
    </>
  );
}
