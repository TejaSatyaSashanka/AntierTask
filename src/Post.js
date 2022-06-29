import React, {useEffect, useState } from "react";
import {useParams} from "react-router-dom";
import { Container, Row, Col, Button } from 'react-bootstrap';
import './header.css';


function Post(){
    const allParams = useParams();
    console.log('POST ID::', allParams.postId);

    const [results, setResult] = useState([]);
    const [comments,setComments ] = useState([]);
    useEffect(()=> {
        callPostApi();
        callCommentsApi();

    }, []);
    function callPostApi(){
        let url= `https://gorest.co.in/public/v2/posts/${allParams.postId}`;
        fetch(url, {
            method: 'GET',
            headers: {
                Accept:'application/json' ,
                'Content-TYpe': 'application/json',
            },
        }).then((result) =>{
            result.json().then((resp) => {
                console.log('RESULTS::', resp);
                setResult(resp);
            });
        });

    }
    function callCommentsApi(){
        let url=  `https://gorest.co.in/public/v2/posts/${allParams.postId}/comments`;;
        fetch(url, {
            method: 'GET',
            headers: {
                Accept:'application/json' ,
                'Content-TYpe': 'application/json',
            },
        }).then((result) =>{
            result.json().then((resp) => {
                console.log('RESULTS::' , resp);
                setComments(resp);
            });
        });

    }
    return (
        <div className="Theme">
            <Container className="container">
                <Row>
                    <Col className="col" sm={3}>
                        <div className="Title">Users</div>
                        <div className="">
                            <Button variant="outline-primary">
                                <a href="/User-ID">User-ID</a>
                            </Button>
                        </div>
                        </Col>
                        <Col className="col1" sm={9}>
                        <div className="Title">{results.title}</div>
                        <div className="Body">{results.body}</div>

                        <div className="Comments">
                            <h3> Comments </h3>
                            {comments?.map((row, index) =>{
                                return (
                                    <div>
                                        <hr />
                                        <p>
                                                <strong>Name:</strong> {row.name}

                                        </p>
                                        <p>
                                            <strong>Comments:</strong> {row.body}
                                        </p>
                                    </div>
                                );
                            })}
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
    
}

export default Post;