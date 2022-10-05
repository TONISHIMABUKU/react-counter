import React from 'react';
import Button from 'react-bootstrap/Button';
//import Jumbotron from 'react-bootstrap/Jumbotron';
//import Toast from 'react-bootstrap/Toast';

import Card from 'react-bootstrap/Card';

function Counter() {
    const [count, setCount] = React.useState(0);

    const handlePlusClick = () => {
        setCount(count + 1);
        console.log(count);
      };

    return (
        <div>


            <Card>
                <Card.Body>
                <Card.Title> <Button  variant="primary p-3" onClick={handlePlusClick}>+</Button></Card.Title>
               
                    
                    <Card.Subtitle className="mb-2 text-muted">Count: {count}</Card.Subtitle>
                </Card.Body>
            </Card>


        </div>)
  }
  
  export default Counter;