import React, { useState, useEffect } from "react";
import Video from "./Video";

import "./App.css";

function App() {
  return (
    <div className="app">
      <div className="app_videos">
        <Video
          url={
            "https://v16m.tiktokcdn.com/6d359c32243075f5cee273003893679c/5f2ad6a9/video/tos/useast2a/tos-useast2a-ve-0068c004/f341f36257744bb5a0af5190339c27bd/?a=1233&br=6454&bt=3227&cr=0&cs=0&dr=0&ds=3&er=&l=202008031556250101880612242720F7C3&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M2Rsd2VlOGszdjMzNTczM0ApMzNkNTs2aWRlN2hpOGk3N2dlc2BpMi5qZ2RfLS02MTZzcy5eY2A1Yi0wMV4yYDMxYF86Yw%3D%3D&vl=&vr="
          }
          channel={"gkaragoz"}
          description={"Seni seviyorum React xd #react"}
          song={"Plain White T's - Hey There Delilah"}
          favoritedCount={293}
          messages={93}
          shares={15}
        />

        <Video
          url={
            "https://v16m.tiktokcdn.com/6cdf68e366df0d760a29eb390ef30090/5f2ad6a9/video/tos/useast2a/tos-useast2a-pve-0068/690b68ab5f13445e9decee52ab4e323a/?a=1233&br=1748&bt=874&cr=0&cs=0&dr=0&ds=3&er=&l=202008031556250101880612242720F7C3&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=M3l3ZzNmdGt0djMzPDczM0ApOWlnZDQ1Njs4Nzw3Z2c3Zmc1YG0uLWAuM2ZfLS1iMTZzczA2L2EvYDVgNmAzLjFiNi46Yw%3D%3D&vl=&vr="
          }
          channel={"tiebowtie"}
          description={"Best view ever 🎈 "}
          song={"No-no-way Cappadocia <3"}
          favoritedCount={177}
          messages={44}
          shares={10}
        />

        <Video
          url={
            "https://v16m.tiktokcdn.com/15456d7e435c0df5f4cf4fc2bd90509d/5f2ad6a9/video/tos/useast2a/tos-useast2a-ve-0068c003/aade3c56e9b84a9eab9e5383e9e76d78/?a=1233&br=2058&bt=1029&cr=0&cs=0&dr=0&ds=3&er=&l=202008031556250101880612242720F7C3&lr=tiktok_m&mime_type=video_mp4&qs=0&rc=ajZld3h0OWhodjMzZTczM0ApOjg0OWY7O2U1NzloM2U2O2deaV4vbGpvc2NfLS1iMTZzczVhYDIuYzYyNDJjXjJjYTE6Yw%3D%3D&vl=&vr="
          }
          channel={"hurkangultekin"}
          description={"#bayramharçlığı #keşfet #siziniçin #beniöneçıkart"}
          song={"orijinal ses - hurkangultekin"}
          favoritedCount={2650}
          messages={427}
          shares={19}
        />
      </div>
    </div>
  );
}

export default App;
