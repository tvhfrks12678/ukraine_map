import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Row, Col } from 'react-bootstrap';
import { MainContent } from './MainContent';
import { SideBar } from './SideBar';
import styles from './Templates.module.css';

export const Main = () => {
  return (
    <>
      <Row>
        <Col sm={8} className={styles.mainContent}>
          <MainContent />
        </Col>
        <Col sm={4} className={styles.sidebar}>
          <SideBar />
        </Col>
      </Row>
    </>
  );
};
