import React from "react";

import Card from "../Card/Card";
const Comments = () => {
  const bgImage =
    "https://plus.unsplash.com/premium_photo-1674729243673-0b5e871a8a24?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NXx8YmFja2dyb3VuZHxlbnwwfHwwfHx8MA%3D%3D";
  const comments = [
    {
      title: "Aveleen",
      img: bgImage,
      content:
        '"I loved how I could control Dot the robot moving backwards and forwards. I also made Dot a coat. I want to learn more about robots."',
      grade: "Grade 3",
    },
    {
      title: "River",
      img: bgImage,
      content:
        '"The Bugbox design is really amazing. I would like to have my own. Dylan taught us how to start coding."',
      grade: "Grade 3",
    },
    {
      title: "Isabella",
      img: bgImage,
      content:
        '"Instead of only seeing the robots on the screen, we also got to interact with in real life. I like how Polly moves and you can see the components inside her."',
      grade: "Grade 4",
    },
    {
      title: "Abel",
      img: bgImage,
      content:
        '"I love fiddling with all the wires that made Dot spin, go forward and reverse"',
      grade: "Grade 4",
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 p-8 lg:px-16 bg-white">
      {comments.map((comment, index) => (
        <Card
          img={comment.img}
          title={comment.title}
          content={comment.content}
          grade={comment.grade}
        />
      ))}
    </div>
  );
};

export default Comments;
