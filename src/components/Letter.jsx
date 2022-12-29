import React,{useEffect,useState} from "react";
import { ListAllDogs } from "../functions/functiones";

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import Card from 'react-bootstrap/Card';

import grid from 'bootstrap/dist/css/bootstrap-grid.min.css';

const Letter = () =>{
    const [dogs,setDogs] =useState(null)
    let AllDogs;
    useEffect (()=>{
        ListAllDogs(setDogs)
    },[])
    
    if(dogs != null){
        AllDogs =Object.keys(dogs);
    }
    
    return (
        <Row className={grid}>{dogs != null ? AllDogs.map(
            DogName => (
                <Col md={3}>
                    <Card>
                        <Card.Body>
                            <Card.Title>{DogName}</Card.Title>
                        </Card.Body>
                    </Card>
                </Col>
            )
        ) : ("Cargando Nombres ...")}
        </Row>
    )
}
export default Letter

