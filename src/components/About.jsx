import { useState } from "react";
import ReadMore from "./general/ReadMore";

function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  function toggleExpanded() {
    setIsExpanded((prevState) => {
      return !prevState;
    });
  }

  return (
    <div className="container">
      <h2>About Me</h2>
      <hr />
      <h6>Software Development</h6>
      {isExpanded && (
        <p>
          I enjoying being able to create something from nothing. I've always
          enjoyed exploring creativity, but have never been good at any of your
          traditional "creative" activities. Software has allowed to me to
          reopen my mind and worlds views in a creative way by allowing me to
          use my stronger analytical and logical though process to create unique
          and exciting projects through software development.
        </p>
      )}
      <ReadMore toggleExpanded={toggleExpanded} />

      <h6>Esports</h6>
      <p>
        I started gaming relatively late in life, and never quite picked up on
        the typical Single Player experience. I was always drawn towards the
        more competitive aspect of multiplayer games, starting out with call of
        duty. It allowed me to explore my competitve side without having to
        spend months training. While i will state that becominga "god" gamer is
        by no means that simple, being thrown directlly int oa competitive
        envoronment from the get go, allowed me to pursue and chase grewatness
        in the titles i loved most. 12 years down the line i ahve nothing but
        loave and respect for all those who put themselves to the test and
        attempt to achieve greatness in their titles of choice. It is my dream
        to help the South African esports scene explode into the world.
      </p>

      <h6>Game Design</h6>
      <p>
        Game design is an intersting topic. It is a strange blend between what
        the developer wants versus what the palyers want. It is a careful art of
        telling your story, while making sure it is done so in an entertaing
        way.
      </p>

      <h6>Film and Animation</h6>
      <p>
        Animimation is one of the first avenues I explored when gearing up to
        leave school. I ended up letting my lack of "creative" and "artistic"
        ability get in the way of pursiing such a career, and there are some
        nights I wonder what would have happened if I ahd the courage to pursue
        it. Software development has helped show me that there are ways,
        especially with technological assistance, and through the use of
        collaboration, that with a will and desire there are always ways to
        cover for your own shortcommings, and use your strengths to create
        amgnificent things in theis world. Directing is another aspect of film I
        absolutely love, and I hope that one day I can have one piece of film
        out there, wheter it be a 120 minute YouTube video or a FUll length
        feature film, that I can be proud of and feel like I ahve shared my view
        of the world.
      </p>

      <h6>Story Telling / Role-play</h6>
    </div>
  );
}

export default About;
