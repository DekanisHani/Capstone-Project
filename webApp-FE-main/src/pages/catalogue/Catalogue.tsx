import React, {useEffect, useState} from "react";
import {
    Badge,
    Button,
    Card,
    Col,
    Container,
    FormControl,
    FormLabel,
    ListGroup,
    Row,
    Toast,
    ToastContainer
} from "react-bootstrap";
import axios from "axios";
import {useAuthUser} from "react-auth-kit";
import "./Catalogue.css"


interface Product {
    id: number;
    price: number;
    name: string;
    description: string;
    type: string;
}

interface Order {
    quantity: number;
    product: Product;
}

function Catalogue() {
    const getUser = useAuthUser();

    const [products, setProducts] = useState<Product[]>([]);
    const [orders, setOrders] = useState<Order[]>([]);
    const [total, setTotal] = useState<number>(0);
    const [reset, setReset] = useState<boolean>(false);
    const [showSuccessToast, setShowSuccessToast] = useState<boolean>(false);

    // Fetch products data from the API
    useEffect(() => {
        axios.get('/materials')
            .then(response => {
                function compare(a: Product, b: Product) {
                    const nameA = a.type.toUpperCase(); // Convert names to uppercase for case-insensitive comparison
                    const nameB = b.type.toUpperCase();

                    if (nameA < nameB) {
                        return -1;
                    }
                    if (nameA > nameB) {
                        return 1;
                    }
                    return 0;
                }

                setProducts(response.data.sort(compare));
            })
    }, [reset]);

    // Compute the total amount each time we add to the order
    useEffect(() => {
        const sum = orders.reduce((total, order) => {
            const {quantity, product} = order;
            const totalAmountForOrder = quantity * product.price;
            return total + totalAmountForOrder;
        }, 0);
        setTotal(Number(sum.toFixed(2)));
    }, [orders])


    const handleQuantityChange = (event: any, selectedProduct: Product) => {
        const newQuantityValue = parseInt(event.target.value);

        if (orders.length === 0 && newQuantityValue > 0) {
            setOrders([{quantity: newQuantityValue, product: selectedProduct}]);
            return;
        }

        setOrders(prevOrders => {
            const newOrders: Order[] = [];

            prevOrders.forEach(order => {
                if (order.product.id !== selectedProduct.id) {
                    newOrders.push(order);
                }
            })
            if (newQuantityValue > 0) {
                newOrders.push({quantity: newQuantityValue, product: selectedProduct});
            }

            return newOrders;
        })
    }

    const handleOrder = () => {
        const payload = orders.map(item => ({quantity: item.quantity, material: item.product}));
        if (payload.length === 0) {
            alert('You should add items to the rent request')
            return;
        }
        axios.post(`/rent/${getUser()?.email}`, payload)
            .then(res => {
                console.log(res);
                setShowSuccessToast(true);
                setOrders([]);
                setProducts([]);
                setReset(prev => !prev);
            })
            .catch(err => {
                console.log(err);
                alert('An error has occurred, please contact your admin!')
            })

    }

    return (
        <>
        <Container className="my-3" fluid>
            <Row lg="2">
                {/* left part */}
                <Col lg="9">
                    <Row className="g-4" lg={4} md={2}>
                        {products.map((prod: Product) => (
                            <Col key={prod.id}>
                                <Card key={prod.id} className="mb-2 h-100 card123">
                                    <Card.Img variant="top" src={`categories/${prod.type}.jpeg`} className="h-50"/>
                                    <Card.Body>
                                        <Card.Title>{prod.name}</Card.Title>
                                        <Card.Subtitle
                                            className="mb-2 text-muted text-body-secondary">Category: {prod.type}</Card.Subtitle>
                                        <Card.Text>{prod.description}</Card.Text>
                                        <Card.Text>Prezzo: €{prod.price}</Card.Text>
                                    </Card.Body>
                                    <Card.Footer>
                                        <FormLabel>Seleziona la quantità</FormLabel>
                                        <FormControl
                                            size="sm"
                                            className="w-100 quantity"
                                            type="number"
                                            defaultValue={0}
                                            step="1"
                                            min={0}
                                            max={30}
                                            onChange={(event) => handleQuantityChange(event, prod)}
                                        />
                                    </Card.Footer>
                                </Card>
                            </Col>
                        ))}
                    </Row>
                </Col>

                {/*  right part  */}
                <Col lg="3">
                    <Card>
                        <Card.Body>
                            <Card.Title>Order Details</Card.Title>
                            <ListGroup variant="flush" as="ol" numbered className="my-3">
                                {
                                    orders.map((order, index) => {
                                        return (
                                            <ListGroup.Item
                                                as="li"
                                                key={index}
                                                className="d-flex justify-content-between align-items-start"
                                            >
                                                <div className="ms-2 me-auto">
                                                    <div className="fw-bold">{order.product.name}</div>
                                                    Price: ${order.product.price}
                                                </div>
                                                <Badge bg="primary" pill>
                                                    x{order.quantity}
                                                </Badge>
                                            </ListGroup.Item>
                                        )
                                    })
                                }
                            </ListGroup>
                            <Card.Text>Total price: €{total}</Card.Text>
                            <Button className="me-2" onClick={handleOrder}>Order</Button>
                            <Button variant="outline-danger" onClick={() => window.location.reload()}>Reset</Button>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
            <ToastContainer
                className="p-3"
                position="bottom-end"
                style={{zIndex: 1}}
            >
                <Toast show={showSuccessToast} onClose={() => setShowSuccessToast(false)} delay={3000} autohide>
                    <Toast.Header>
                        <strong className="me-auto">Success</strong>
                        <small>seconds ago</small>
                    </Toast.Header>
                    <Toast.Body>Rent request sent successfully!</Toast.Body>
                </Toast>
            </ToastContainer>
        </Container>
        <footer className="footer">
        <Container>
            <div>
                <Row> 
                    <h5>Contacts:</h5><br/>   
                    
                    <a href="tel:+061234567" className="text-decoration-none"><i className="bi bi-telephone-fill"></i> 061234567</a>
                    <a href="mailto:albaforniture@gmail.com" className="text-decoration-none"><i className="bi bi-envelope-fill"></i> Albaforniture@gmail.com</a>
                                   
                </Row>
            </div>
          <div className="social-icons">
            <a href={"#facebook"}>
              <i className="bi bi-facebook"></i>
            </a>
            <a href={"#twitter"}>
              <i className="bi bi-twitter"></i>
            </a>
            <a href={"#instagram"}>
              <i className="bi bi-instagram"></i>
            </a>
          </div>
          &copy; {new Date().getFullYear()} All rights reserved | Design by{" ALBA FORNITURE"}
        </Container>
      </footer>
      </>
    );

}

export default Catalogue;