import "./SoftDrinks.scss";
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardText,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
  Alert,
} from "reactstrap";
import { useState } from "react";
import { useEffect } from "react";
import Search from "../../Foods/Search/Search";
import { CartContext } from "../../../Contexts/Cart";

const SoftDrinks = ({ handleClick }) => {
  const [lists, setLists] = useState([]);

  useEffect(() => {
    fetch("https://order-foods.herokuapp.com/api/v1/foods/list")
      .then((res) => res.json())
      .then((lists) => {
        setLists(lists.Pageable.content);
      });
  }, []);

  return (
    <>
      <div id="soft-drinks">
        <Container>
          <div className="foods">
            <h1 className="title">Drinks</h1>
          </div>
          <Search />
          <Row>
            {lists.map((list) => (
              <Col sm="3" key={list.id}>
                <Card className="cart">
                  <CardImg width="100%" height="200" src={list.image} />
                  {list.status}
                  <CardBody>
                    <CardTitle>{list.name} </CardTitle>
                    <CardTitle> {list.price} VND </CardTitle>
                    <CartContext.Consumer>
                      {({ addToCart }) => (
                        <Button
                          onClick={() => {
                            handleClick(list);
                            addToCart(list);
                          }}
                        >
                          Add to cart
                        </Button>
                      )}
                    </CartContext.Consumer>
                    {/* <Button onClick={() =>handleClick(list) }>
                      ADD TO CARD
                    </Button> */}
                  </CardBody>
                </Card>
              </Col>
            ))}
            {/* {lists.map((product) => (
                <Col sm="3">
                  <Card className="cart">
                    <CardImg  width="100%" height="200" src={product.image} />
                    <CardBody>
                      <CardTitle>{product.name}</CardTitle>
                      <CardText>{product.description}</CardText>
                      <CartContext.Consumer>
                        {({ addToCart }) => (
                          <Button onClick={() => addToCart(product)}>
                            Add to cart
                          </Button>
                        )}
                        
                      </CartContext.Consumer>
                    </CardBody>
                  </Card>
                </Col>
              ))} */}
          </Row>
        </Container>
      </div>
    </>
  );
};
export default SoftDrinks;
