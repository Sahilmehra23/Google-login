import React from "react";
import { posts } from "../data";
import Card from "../components/Card";
function Home() {
  return (
    <div className="home">


      {posts.map((post) =>             //post is function 
                                       //post is variable using as props in card.js {post } is function
        (<Card key={post.id} post={post} />))}    
    
                              

    </div>
  );
}

export default Home;

// const names = ["fgh", "gjjhg", "vhjhg"]

// names.map(() ={})