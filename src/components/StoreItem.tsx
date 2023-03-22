import { Card } from "react-bootstrap";

type StoreItemProps = {
  id: number;
  name: string;
  price: number;
  imgUrl: string;
};
export function StoreItem({ id, name, price, img }: StoreItemProps) {
  return (
    <>
      <Card>
        <Card.Img
          variant="top"
          src={img}
          height="200px"
          style={{ objectFit: "cover" }}
        />
        <Card.Body className=" d-flex flex-column">
          <Card.Title className="d-flex justify-content-between align-items-baseline md-4">
            <span className="fs-2">{name}</span>
            <span className="m-2 text-muted">{price}</span>
          </Card.Title>
        </Card.Body>
      </Card>
    </>
  );
}
