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


const SoftDrinks = () => {
  const [lists, setLists] = useState([]);
  const [cart, setCart] = useState([])

  const handleClick = (list) => {
    cart.push(list);
    console.log(cart);

  }

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
                  <CardImg top width="100%" src={list.image} />
                  {list.status}
                  <CardBody>
                    <CardTitle>{list.name} </CardTitle>
                    <CardTitle> {list.price} VND </CardTitle>
                    <Button onClick={() =>handleClick(list) }>
                      ADD
                    </Button>
                  </CardBody>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    </>
  );
};
export default SoftDrinks;
