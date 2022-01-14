import React from 'react';
import reactDOM from 'react-dom';
import './index.css';
import {database} from './films'
import Film from './Film'
import {greeting} from './test'

function FilmList() {

  return ( 
    <section className ='FilmList'>
    {database.map((film) => {
      return <Film key={film.id} {...film}></Film>;
        
    })}
</section>
  );  
}


reactDOM.render(<FilmList />, document.getElementById('root'));