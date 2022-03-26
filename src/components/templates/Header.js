import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Row } from 'react-bootstrap';
import { SearchTag } from '../atoms/SearchTag';
import styles from './Templates.module.css';

export const Header = () => {
  return (
    <div className={styles.headerSearchTag}>
      <Row>
        <header className="header border border-3 py-2">
          <label className="m-1">主体:</label>
          <Button variant="outline-info" size="sm" className="m-1">
            {'ウクライナ'}
          </Button>
          <Button variant="outline-info" size="sm" className="m-1">
            {'ロシア'}
          </Button>
          <label>地域:</label>
          <Button variant="outline-info" size="sm" className="m-1">
            {'キーウ'}
          </Button>
          <Button variant="outline-info" size="sm" className="m-1">
            {'ベラルーシ'}
          </Button>
          <Button variant="outline-info" size="sm" className="m-1">
            {'北朝鮮'}
          </Button>
          <label>場所:</label>
          <Button variant="outline-info" size="sm" className="m-1">
            {'工場'}
          </Button>
          <Button variant="outline-info" size="sm" className="m-1">
            {'行政施設'}
          </Button>
          <label className="">兵器:</label>
          <Button variant="outline-info" size="sm" className="m-1">
            {'S-300'}
          </Button>
          <label>状況:</label>
          <Button variant="outline-info" size="sm" className="m-1">
            {'略奪'}
          </Button>
          <Button variant="outline-info" size="sm" className="m-1">
            {'奪還'}
          </Button>
          <Button variant="outline-info" size="sm" className="m-1">
            {'破壊'}
          </Button>
          <label>Default:</label>
          <SearchTag tagName="全て" />* ボタンはダミー、後で不要な処理を削除
        </header>
      </Row>
    </div>
  );
};
