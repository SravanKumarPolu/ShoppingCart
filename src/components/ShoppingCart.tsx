import { Offcanvas, OffcanvasHeader } from "react-bootstrap";

export function ShoppingCart() {
  return (
    <Offcanvas show="true" placement="end">
      <Offcanvas.Header>cart</Offcanvas.Header>
    </Offcanvas>
  );
}
