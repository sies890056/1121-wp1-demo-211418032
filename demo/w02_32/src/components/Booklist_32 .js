import { useState } from 'react';
import { books_data } from "./books_data";
import Book_32 from "./Book_32";

const Booklist_32=()=>{
  console.log('books_data',books_data);
  const [books,setbooks] = useState(books_data);
  return(
    <section className="booklist">
      {
        books.map((book)=>{
          const {id ,img,title,author}=book
          return(
            <Book_32
            key={id}
            img={img}
            title={title}
            author={author}
            />
          )
        })
      }
   
    </section>
  )
}

export default Booklist_32;