const Book_32=({img, title, author})=>{
  return(
   <article className="book">
    <img src={img} alt="" />
    <h1>{title}</h1>
    <h4>{author} </h4>
   </article> 
  )
}
  
export default Book_32;