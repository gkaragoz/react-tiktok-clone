import React, { useState, useEffect } from "react";
import Video from "./Video";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app_videos">
        <Video
          url="../videos/1.mp4"
          channel={"nysfddrillteams"}
          description={
            "Fire department racing ladder run#fyp #foryourpage #foryoupage #racing #drillteam #newyork"
          }
          song={"Woah - KRYPTO9095"}
          favoritedCount={293}
          messages={93}
          shares={15}
        />

        <Video
          url="../videos/2.mp4"
          channel={"jadenthekingsley"}
          description={
            "Yes, I taught my dog to do the woah. #fyp #dog #puppy #viral #funny #woah #woahchallenge #aw"
          }
          song={"Woah - KRYPTO9095"}
          favoritedCount={177}
          messages={44}
          shares={10}
        />

        <Video
          url="../videos/3.mp4"
          channel={"joebottherobot"}
          description={
            "Axel F on a Midi Guitar #jamstik #guitar #fyp #80s #synthesizer"
          }
          song={"original sound - joebottherobot"}
          favoritedCount={2650}
          messages={427}
          shares={19}
        />
      </div>
    </div>
  );
}

export default App;
