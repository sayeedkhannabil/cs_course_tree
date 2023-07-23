// src/components/Grid.js
import React from 'react';
import { Container, Row } from 'react-bootstrap';

const Grid = ({ items }) => {
  const itemStyle = {
    flexBasis: `${100 / items.length}%`,
    maxWidth: `${100 / items.length}%`,
  };

  return (
    <Container>
      <Row className="d-flex flex-nowrap">
        {items.map((item, index) => (
          <div className="col-sm" style={itemStyle} key={index}>
            <button className="btn btn-primary">{item}</button>
          </div>
        ))}
      </Row>
    </Container>
  );
};

export default Grid;
