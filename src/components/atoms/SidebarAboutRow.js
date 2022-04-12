import React from 'react';
import { Row, Col } from 'react-bootstrap';

const SEPALATOR = ':';
const URL_REG = '^https://';

export const AboutRow = (props) => {
  const aboutRow = props.aboutRow;
  const item = aboutRow.item;
  const content = aboutRow.content;

  const contentForDisplay = () => {
    const regex_url = new RegExp(URL_REG);
    if (regex_url.test(content)) {
      return <a href={content}>{content}</a>;
    }

    return content;
  };

  return (
    <Row className="pb-2 px-1">
      <Col sm={3} className="text-end">
        {item}
        {SEPALATOR}
      </Col>
      <Col sm={9}>{contentForDisplay()}</Col>
    </Row>
  );
};
