import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button } from 'react-bootstrap';
import { SearchTag } from '../atoms/SearchTag';
import { TwitterTweetEmbed } from 'react-twitter-embed';
import styles from './Templates.module.css';

export const TagSearchList = () => {
  return (
    <>
      <div className={styles.headerSearchTag}>
        <label>Default:</label>
        <SearchTag tagName="全て" />
        <br />
        <label className="m-1">主体:</label>
        <Button variant="outline-info" size="sm" className="m-1">
          {'ウクライナ'}
        </Button>
        <Button variant="outline-info" size="sm" className="m-1">
          {'ロシア'}
        </Button>
        <br />
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
        <br />
        <label>場所:</label>
        <Button variant="outline-info" size="sm" className="m-1">
          {'工場'}
        </Button>
        <Button variant="outline-info" size="sm" className="m-1">
          {'行政施設'}
        </Button>
        <br />
        <label className="">兵器:</label>
        <Button variant="outline-info" size="sm" className="m-1">
          {'S-300'}
        </Button>
        <br />
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
      </div>
    </>
  );
};
