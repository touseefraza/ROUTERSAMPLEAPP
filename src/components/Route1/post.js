import React from "react";
import { useLocation } from "react-router-dom";
import "../../post.css";
export default function Home(props) {
 const location = useLocation();
 console.log("ffffff", location.state.update);
 const postdata=location.state.update;
 return (
  <div>
   <div class="blog">
    <div class="post">
     <div class="blogHeader">
      <h1>{postdata.title.rendered}</h1>
     </div>
     <div class="blog-body">
      <p>
      <div dangerouslySetInnerHTML={{ __html: postdata.content.rendered }}
             ></div>
      </p>
     </div>
    </div>
    <div class="links">
    </div>
   </div>
  </div>
 );
}
