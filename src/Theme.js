import React, { useEffect, useState } from 'react';
import './header.css';

import { Container, Row, Col, Button } from 'react-bootstrap';

function Theme() {
  const [results, setResult] = useState([]);
  const [users, setUsers] = useState([]);
  useEffect(() => {
    callUserApi();
    callApi();
  }, []);

  function callUserApi() {
    console.log('hello');
    let url = 'https://gorest.co.in/public/v2/users';
    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-TYpe': 'application/json',
      },
    }).then((result) => {
      result.json().then((resp) => {
        console.log('results', resp);
        setUsers(resp);
      });
    });
  }

  function callApi() {
    console.log('hello');
    let url = 'https://gorest.co.in/public/v2/posts';
    fetch(url, {
      method: 'GET',
      headers: {
        Accept: 'application/json',
        'Content-TYpe': 'application/json',
      },
    }).then((result) => {
      result.json().then((resp) => {
        console.log('results', resp);
        setResult(resp);
      });
    });
  }

  return(
    <div className="Theme">
      <Row>
      <Container className="container">
      
          <Col className="col" sm={3} id="side-bar">
            <div className="header">All Users</div>

            {users?.map((row) => {
                return (
                   <a  href={`/user/${row.name}`}> {row.name}</a>
                
                );
              })}
          </Col>

          <Col className="col1" sm={9}>
            <div className="headingTitle">All Posts</div>

            <div className="user1">
              <h3>All Posts</h3>
              {results?.map((row, index) => {
                return (
                  <Button
                    className="buttonsCard"
                    key={index}
                    variant="outline-primary"
                  >
                    <a href={`/post/${row.id}`}>Post Id: {row.id}</a>
                    &nbsp;&nbsp;
                  </Button>
                );
              })}
            </div>
          </Col>
      </Container>
      </Row>
    </div>
  );
}

export default Theme;
