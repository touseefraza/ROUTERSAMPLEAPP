import React, { useState, useEffect } from "react";
import { useParams, useHistory} from "react-router-dom";
import Home from "./post"
export default function Route1() {
 const [hasError, setErrors] = useState(false);
 const [posts, setPosts] = useState([]);
 const [pageNumber,setPage]=useState(1)
 const history=useHistory();
 useEffect(() => {
  console.log("here ");
  async function fetchData() {
	const limit = 2;
   const res = await fetch(
    `https://renemorozowich.com/wp-json/wp/v2/posts?per_page=5&page=${pageNumber}`
   );
   res
    .json()
    .then(res => {
     setPosts(res);
     console.log("here", res);
    })
    .catch(err => setErrors(err));
   console.log("setPlanets");
  }
  fetchData();
 }, [pageNumber]);

 function onPost(item){
	 history.push({
		pathname: '/Home',
		search: '?update=true',  // query string
		state: {  // location state
		  update: item, 
		},
	  }); 
 }
 function paginationPrev(pageNumber){
	if(pageNumber>1)
	setPage(pageNumber-1)
 }
 
 function paginationNext(pageNumber){
	if(pageNumber>1)
	setPage(pageNumber-1)
 }

 function pagination(pageNum){
	setPage(pageNum)
 }
 var postsData = posts;
 console.log("here", postsData);
 return (
  <div class="homePageBody"> 
   <div class="row">
   <div class="leftcolumn">
    {postsData != undefined
     ? postsData.map((item, k) => {
        return (
            <div class="card" onClick={()=>onPost(item)}>
             <h2>{item.title.rendered}</h2>
             <h5>Title description, {item.date}</h5>
             <div class="fakeimg" style={{ height: 200 }}>
              Image
             </div>
             {/* <p>Some text..</p> */}
             <div
              dangerouslySetInnerHTML={{ __html: item.excerpt.rendered }}
             ></div>
            </div>
        );
       })
	 : ""}
     <div class="pagination">
			<a href="#" onClick={()=>paginationPrev(pageNumber)}>&laquo;</a>
			<a href="#" onClick={()=>pagination(2)}>1</a>
			<a href="#" class="active" onClick={()=>pagination(1)} >2</a>
			<a href="#" onClick={()=>pagination(3)} >3</a>
			<a href="#" onClick={()=>pagination(4)} >4</a>
			<a href="#" onClick={()=>pagination(5)} >5</a>
			<a href="#" onClick={()=>pagination(6)}>6</a>
			<a href="#" onClick={()=>paginationNext(pageNumber)} >&raquo;</a>
	</div>
	</div>
    <div class="rightcolumn">
     <div class="card">
      <h2>About Me</h2>
      <div class="fakeimg" style={{ height: 100 }}>
       Image
      </div>
      <p>Some text about me in culpa qui officia deserunt mollit anim..</p>
     </div>
     <div class="card">
      <h3>Category</h3>
      <div class="fakeimg">Image</div>
      <div class="fakeimg">Image</div>
      <div class="fakeimg">Image</div>
     </div>
    </div>
   </div>
  </div>
 );
}
