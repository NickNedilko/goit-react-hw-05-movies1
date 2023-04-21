import FilmInfo from 'components/FilmInfo/FilmInfo';
import React, { useState, useEffect } from 'react';
import { useParams, Outlet, useLocation } from 'react-router-dom';
import { apiFilmById } from 'services/ApiFilms';

const MovieDetails = () => {
  const [filmInfo, setFilmInfo] = useState(null);
  const { filmId } = useParams();
  const location = useLocation();

  useEffect(() => {
    if (!filmId) {
      return;
    }
    apiFilmById(filmId).then(({ data }) => {
      setFilmInfo(data);
    });
  }, []);

  return (
    filmInfo && (
      <>
        <FilmInfo filmInfo={filmInfo} location={location} />
        <Outlet />
      </>
    )
  );
};

export default MovieDetails;
