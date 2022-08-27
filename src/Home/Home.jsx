import React, {useState, useContext,useEffect} from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import styles from "./homeCss.module.css";
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import WeatherPlate from "../Components/weatherInfoPlate"
import {Card} from "react-bootstrap";

const Home = () => {
    const [data, setData] = useState({})
    const [location, setLocation] = useState('')
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=ccd690ffe4c00c782bf12b0a5a2ab30e`

    const searchLocation = (event) => {
        if (event.key === 'Enter') {
            fetch(url).then((response) => {
                return response.json();
            })
                .then((data)=>{
                setData(data)
                    console.log(data);
            });
        }
    }

   return(
       <div className={styles.homeWrapper}>
        <Container className={styles.home}>
           <Row>
                  <Col md={3}>
                      <h1>Enter the city name</h1>
                         <InputGroup>
                             <Form.Control
                                 onChange={event => setLocation(event.target.value)}
                                 onKeyPress={searchLocation}
                             />
                         </InputGroup>
                      {data.name ? <Card><Card.Title className={styles.cardTitle}> {data.name}</Card.Title></Card> : null}
                  </Col>
               <Col>
                   <Row>
                       <Col className={styles.plate}>{data.main ? <WeatherPlate data={data.main.temp}  value={'Temperature'}/> :null }</Col>
                       <Col className={styles.plate}>{data.main ? <WeatherPlate data={data.main.feels_like} value={'Feels like'}/> :null }</Col>
                       <Col className={styles.plate}>{data.main ? <WeatherPlate data={data.main.humidity} value={'Humidity'}/> :null }</Col>
                       <Col className={styles.plate}>{data.main ? <WeatherPlate data={data.main.pressure}  value={'Pressure'}/> :null }</Col>

                   </Row>
                   <Row className={styles.secondRow}>
                       <Col className={ styles.plate}>{data.wind ? <WeatherPlate data={data.wind.speed}  value={'Wind'}/> :null }</Col>
                       <Col className={ styles.plate}>{data.weather ? <WeatherPlate data={data.weather[0].description}  value={'descr'}/> : null}</Col>
                       <Col className={ styles.plate}>{data.sys ? <WeatherPlate data={data.sys.sunrise}  value={'Sunrise'}/> : null}</Col>
                       <Col className={ styles.plate}>{data.sys ? <WeatherPlate data={data.sys.sunset}  value={'Sunset'}/> : null}</Col>
                   </Row>
               </Col>
           </Row>
       </Container>
       </div>
   )
};

export default Home;