import { Container } from "postcss";
import FinalAbout from "./components/AboutUs/FinalAbout";
import FinalForm from "./components/Form/FinalForm";
import Header from "./components/Header/Header";
import Landing from "./components/Home/Landing";
import FinalRooms from "./components/Rooms/FinalRooms";
import FinalServices from "./components/Services/FinalServices"
import FinalTrackRecord from "./components/TrackRecord/TrackRecordFinal"
import FinalMenu from "./components/Menu/FinalMenu";
import FinalFooter from "./components/Footer/FinalFooter";

export default function Home() {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <style>
          @import url('https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Work+Sans:ital@0;1&display=swap')
        </style>
        <title>Rayal Park | Book your hotel</title>
      </head>

      <body>
        <main className="content">
          <header>
            <Header />
          </header>
          <div id="home">
            <Landing />
          </div>
          <div>
            <FinalForm />
          </div>
          <div id="rooms">
            <FinalRooms />
          </div>
          <div id="services">
            <FinalServices />
          </div>
          <div id="about">
            <FinalAbout />
          </div>
          <div>
            <FinalTrackRecord />
          </div>
          <div id="explore">
        <FinalMenu />
          </div>
          <div>
            <FinalFooter />
          </div>


        </main>
      </body>
    </html >
  );
}
