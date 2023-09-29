
import './App.css';
import Booklist_32 from './components/Booklist_32 ';
import Book_32 from './components/Book_32';
import Booklist from './components/Booklist_32 ';
import Book from './components/Book_32';

const App=()=> {
  return (
<Booklist_32/>
  );
}

const Threebooks=()=>{
  return(
    <section className="booklist">
    <Book_32
    key='1'
    img="https://m.media-amazon.com/images/I/816epC1xQDS._SL1500_.jpg" alt="" 
    title="The Dog Encyclopedia for Kids"
    author=" Tammy Gagne"/>
    <Book_32
     key='2'
     img="https://m.media-amazon.com/images/I/81eD8dHXQ2L._SY342_.jpg" alt="" 
     title="Dog Man: Twenty Thousand Fleas Under the Sea: A Graphic Novel (Dog Man #11): From the Creator of Captain Underpants"
     author="作者 Dav Pilkey "/>
    <Book_32
     key='3'
     img="https://m.media-amazon.com/images/I/71S9kMPW89L._SY342_.jpg" alt="" 
     title="Chicken Soup for the Soul: Lessons Learned from My Dog"
     author=" Amy Newmark "/>
     <Book_32
     key='4'
     img="https://m.media-amazon.com/images/I/71yNgTMEcpL._SY466_.jpg" alt="" 
     title="Lessons in Chemistry: A Novel "
     author="  Bonnie Garmus "/>
     <Book_32
     key='5'
     img="https://m.media-amazon.com/images/I/91uo-LOHTcL._SY385_.jpg" alt="" 
     title="Come Hungry: Salads, Meals, and Sweets for People Who Live to Eat"
     author=" Melissa Ben-Ishay "/>
     <Book_32
     key='6'
     img="https://m.media-amazon.com/images/I/91uo-LOHTcL._SY385_.jpg" alt="" 
     title="Come Hungry: Salads, Meals, and Sweets for People Who Live to Eat Hardcover"
     author="  Melissa Ben-Ishay "/>
     
  </section>
    );
  
  }

export default App;
