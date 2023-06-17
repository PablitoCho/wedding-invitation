import React from 'react';
import { Layout } from 'antd';
import './App.css';
import Title from './Components/Title';
import Gretting from './Components/Greeting';
import Gallery from './Components/Gallery';
import Location from './Components/Location';
import Map from './Components/Map';
import CongratulatoryMoney from './Components/CongratulatoryMoney';
import Share from './Components/Share';
import GroovePaper from './Assets/GroovePaper.png';

const { Footer } = Layout;

const App = () => {
  return (
    <>
      <Title />
      <Gretting />
      <Gallery />
      <Map />
      {/* <Location /> */}
      <CongratulatoryMoney />
      <Share />
      <Footer
        style={{
          background: '#D7CCC8',
          backgroundImage: `url(${GroovePaper})`,
          opacity: 0.6,
          textAlign: 'center',
        }}
      >

      </Footer>
    </>
  );
};

export default App;
