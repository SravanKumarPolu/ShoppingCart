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
      </Card>
    </>
  );
}
