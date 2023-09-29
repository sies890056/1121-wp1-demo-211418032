import React from 'react'; // Import React
import './App.css';
import Book_32 from './components/Book_32'

// Functional component
const App = () => {
  return (
    <section className="booklist">
      <Book_32
        key='1'
        img='https://images-na.ssl-images-amazon.com/images/I/41taSJ24TYL._AC_SX184_.jpg'
        title='Dreamworks The Bad Guys: A Very Bad Holiday Novelization'
        author='Ms. Kate Howard'
      />

      <Book_32
        key='2'
        img='https://m.media-amazon.com/images/I/81um6F-a5kL._SL1500_.jpg'
        title='Build the Life You Want: The Art and Science of Getting Happier '
        author='Arthur C. Brooks'

      />

      <Book_32
        key='3'
        img='https://m.media-amazon.com/images/I/518+jXvFO6L._SY445_SX342_.jpg'
        title='The Covenant of Water '
        author='Abraham Verghese '
      />

      <Book_32
        key='4'
        img='https://m.media-amazon.com/images/I/91ke43dIxkL._SL1500_.jpg'
        title='Iron Flame (The Empyrean, 2) '
        author='Rebecca Yarros '
      />

      <Book_32
        key='5'
        img='https://m.media-amazon.com/images/I/914HWd0RxsL._SL1500_.jpg'
        title='Fourth Wing (The Empyrean Book 1) '
        author='Rebecca Yarros '
      />

      <Book_32
        key='6'
        img='https://m.media-amazon.com/images/I/81EwXBeJX+L._SL1500_.jpg'
        title='Percy Jackson and the Olympians: The Chalice of the Gods '
        author='Rick Riordan '
      />
     
      
    </section>
  );
}

const Book = () => {
  return (
    <article className="book">
      <img src="https://m.media-amazon.com/images/I/61sp+sMfrXL._SL1500_.jpg" alt="" />
      <h1>The Democrat Party Hates America</h1>
      <h4> Mark R. Levin</h4>
    </article>
  );
}

export default App; // Export the App component


