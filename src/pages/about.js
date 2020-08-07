import React from "react";
import WithSideBar from "../components/with-sidebar";

export default function About() {
  return (
    <WithSideBar showMore={true}>
      <h1>Hi, I'm Aaron!</h1>
      <p>
        I'm an undergraduate student at Brigham Young University studying Computer Science and Statistics.  
        I used to compete in programming competitions and teach Competitive Coding at BYU.
        I've done research in ML (handwriting) and security (Signal protocol).
        I also play the piano, cello and a bit of percussion.
        There's more, but you'll have to ask to find out!
      </p>

      <p>I love talking to people about their experiences, and I love sharing my experiences and advice to those who want to listen and benefit.  I'm nice, reach out and say hi!</p>
      <p>
        I'm exceptionally good at solving software engineering problems thoroughly, then clearly explaining the problem and the solution so that we all benefit.  I love collaborating on projects!
      </p>
      <p>
        <a href="https://drive.google.com/uc?export=download&id=15Eug7ThFA9UjFSvCY23JMV-w2yV7fTDm" className="text-blue-600" rel="noopener noreferrer" target="_blank">
          Here's my resume in case you're looking to hire.
        </a>
      </p>
    </WithSideBar>
  )
}