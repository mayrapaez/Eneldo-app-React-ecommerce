import { Card, Button, } from "react-bootstrap";

const ItemListContainer = (props) => {

    return(

    <Card style={{ width: '18rem' }}>
       <Card.Img variant="top" src="./components/images/mantequilla.jpg" /> 
        <Card.Body>
            <Card.Title><p>{props.product}</p> </Card.Title>
            <Card.Text>

              <p>{props.productDescription}</p> 

            </Card.Text>

            <Card.Text>
                <p>{props.price}</p>
            </Card.Text>

            <Button variant="primary">Comprar</Button>
        </Card.Body>
    </Card>

    )



}

export default ItemListContainer;