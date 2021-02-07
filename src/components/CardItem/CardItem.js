import { Card, Button, FormControl, InputGroup,} from "react-bootstrap";




const CardCounter = (props) => {

    return(

    <Card style={{ width: '18rem' }}>
       
        <Card.Body>
            <Card.Title><p>{props.product}</p> </Card.Title>
            <Card.Text>

              <p>{props.productDescription}</p> 

            </Card.Text>

            <Card.Text>
                <p>{props.price}</p>
            </Card.Text>
            <InputGroup>
        <FormControl
            placeholder=""
            aria-label=""
            aria-describedby="basic-addon2"
            />
            <InputGroup.Append>
                <Button variant="outline-secondary">+</Button>
                <Button variant="outline-secondary">-</Button>
            </InputGroup.Append>
            </InputGroup>
            
            <Button variant="primary">Comprar</Button>
        </Card.Body>
    </Card>

    )



}

export default CardCounter;