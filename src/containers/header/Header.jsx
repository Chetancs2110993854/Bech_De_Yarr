import React from 'react';
import people from '../../assets/people.png';
import ai from '../../assets/ai.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Beyond Textbooks : Empowering Students through Collective Wisdom</h1>
      <p>Discover & download verified study notes & materials from the best students around the world. Then supercharge your learning by generating quizzes, essays, examples and more..</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Search notes, schools & more" />
        <button type="button">Get Started</button>
      </div>

      <div className="gpt3__header-content__people">
        <img src={people} />
        <p>1,600 people requested access a visit in last 24 hours</p>
      </div>
    </div>

    <div className="gpt3__header-image">
      <img src={ai} />
    </div>
  </div>
);

export default Header;
