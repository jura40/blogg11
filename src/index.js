import React from 'react';
import reactDOM from 'react-dom';
import './index.css'

const firstFilm = {
   bild :'https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_UY209_CR0,0,140,209_AL_.jpg',
   Title : 'Joker',
   Director : 'Todd Phillips'

};
const andraFilm = {
   bild :'https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_UY209_CR0,0,140,209_AL_.jpg',
   Title : 'Avengers: Endgame',
   Director : 'Anthony Russo'

};


function FilmList() {
  return (
    <section className='FilmList'>
     <Film  
     bild={firstFilm.bild} 
     Title ={firstFilm.Title} 
     Director = {firstFilm.Director}
     />
     <Film  betyg ='bra' number ={10} kat= 'drama'
     bild={andraFilm.bild}
     Title={andraFilm.Title}
     Director={andraFilm.Director}/>
     <Film  Title='Nån title' number ={9}/>
     <Film />
     <Film kat='roman'/>
     
    </section>  
  );
}
const Film = (props) => {
  return ( 
  <article className='film'>
     <img src ={props.bild} alt =''/>
     <h1>{props.Title}</h1>
    <h3>{props.Director}</h3>
    <h1>{props.kat}</h1>
    </article>
  );
 };
  

      
reactDOM.render(<FilmList />, document.
  getElementById('root'));