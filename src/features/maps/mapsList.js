import React from 'react';
import { useSelector } from 'react-redux';
import { AddMapForm } from './AddMapForm';
import { Link, Outlet } from 'react-router-dom';

export const MapsList = () => {
  const maps = useSelector((state) => state.maps);

  const renderedMaps = maps.map((map) => (
    <article className="border rounded mb-1" key={map.id}>
      <h3>{map.twitterId}</h3>
      <p className="">{map.explanation.substring(0, 10)}</p>
      {/* <Link
        className="button muted-button"
        to={`/posts/${map.id}`}
        key={map.id}>
        View Post
      </Link>{' '}
      |{' '} */}
      <Link
        className="button muted-button"
        to={`/editMapForm/${map.id}`}
        key={map.id}>
        edit Post
      </Link>
    </article>
  ));

  return (
    <>
      <nav
        style={{
          borderBottom: 'solid 1px',
          paddingBottom: '1rem',
        }}>
        <Link to="/addMapForm">addMapForm</Link> |{' '}
        <Link to="/expenses">Expenses</Link>
      </nav>
      <AddMapForm />
      <section className="">
        <h2>一覧</h2>
        {renderedMaps}
      </section>
      <Outlet />
    </>
  );
};
