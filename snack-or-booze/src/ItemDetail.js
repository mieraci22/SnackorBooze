import React from "react";
import { Navigate, useParams } from "react-router-dom";
import { Card, CardBody, CardTitle, CardText } from "reactstrap";

function ItemDetail({ items, cantFind }) {
  const { id } = useParams();

  // Find the item (could be snack or drink) by id
  let item = items.find(item => item.id === id);
  if (!item) return <Navigate to={cantFind} />; // Redirect if item not found

  return (
    <section>
      <Card>
        <CardBody>
          <CardTitle className="font-weight-bold text-center">
            {item.name}
          </CardTitle>
          <CardText className="font-italic">{item.description}</CardText>
          <p>
            <b>Recipe:</b> {item.recipe}
          </p>
          <p>
            <b>Serve:</b> {item.serve}
          </p>
        </CardBody>
      </Card>
    </section>
  );
}

export default ItemDetail;