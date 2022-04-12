import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { MainContent } from './MainContent';
import { SideBar } from './SideBar';
import styles from './Organisms.module.css';

export const mapContext = React.createContext();

export const Main = () => {
  const [map, setMap] = useState(null);
  return (
    <mapContext.Provider value={{ map, setMap }}>
      <Row>
        <Col sm={8} className={styles.mainContent}>
          <MainContent />
        </Col>
        <Col sm={4} className={styles.sidebar}>
          <SideBar />
        </Col>
      </Row>
    </mapContext.Provider>
  );
};
