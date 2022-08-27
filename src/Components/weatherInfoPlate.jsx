import React from 'react';
import styles from "../Home/homeCss.module.css";
import Card from 'react-bootstrap/Card'
const WeatherInfoPlate = (props) => {
    switch(props.value) {
        case 'Temperature':
            return (
                <Card className={styles.cards}>
                    <Card.Title className={styles.cardTitle}>{props.value}</Card.Title>
                    <Card.Text className={styles.cardTextBody}>{props.data ? <p className={styles.cardText}>{ props.data.toFixed()}°C</p> : null}</Card.Text>
                </Card>
        );
        case 'Feels like':
            return (
                <Card className={styles.cards}>
                    <Card.Title className={styles.cardTitle}>{props.value}</Card.Title>
                    <Card.Text className={styles.cardTextBody}>{props.data ? <p className={styles.cardText}>{ props.data.toFixed()}°C</p> : null}</Card.Text>
                </Card>
            );
        case 'Humidity':
            return (
                <Card className={styles.cards}>
                    <Card.Title className={styles.cardTitle}>{props.value}</Card.Title>
                    <Card.Text className={styles.cardTextBody}>{props.data ? <p className={styles.cardText}>{ props.data}%</p> : null}</Card.Text>
                </Card>
            );

        case 'Pressure':
            let pressure = props.data * 100 * 0.00750062;
            return (
                <Card className={styles.cards}>
                    <Card.Title className={styles.cardTitle}>{props.value}</Card.Title>
                    <Card.Text className={styles.cardTextBody}>{props.data ? <p className={styles.cardText}>{ pressure.toFixed()} mmHg</p> : null}</Card.Text>
                </Card>
            );

        case 'Wind':
            return (
                <Card className={styles.cards}>
                    <Card.Title className={styles.cardTitle}>{props.value}</Card.Title>
                    <Card.Text className={styles.cardTextBody}>{props.data ? <p className={styles.cardText}>{ props.data} m/s</p> : null}</Card.Text>
                </Card>
            );

        case 'descr':
            return (
                <Card className={styles.cards}>
                    <Card.Title className={styles.cardTitle}></Card.Title>
                    <Card.Text className={styles.cardTextBody}>{props.data ? <p className={styles.cardText}>{ props.data}</p> : null}</Card.Text>
                </Card>
            );

        case 'Sunrise':
            let unix_timestamp = props.data
            let date = new Date(unix_timestamp * 1000);
            let hours = date.getHours();
            let minutes = "0" + date.getMinutes();
            let formattedTime = hours + ':' + minutes.substr(-2);
               return (
                <Card className={styles.cards}>
                    <Card.Title className={styles.cardTitle}>{props.value}</Card.Title>
                    <Card.Text className={styles.cardTextBody}>{props.data ? <p className={styles.cardText}>{ formattedTime}</p> : null}</Card.Text>
                </Card>
            );
        case 'Sunset':
            let unix_timestamp2 = props.data
            let date2 = new Date(unix_timestamp2 * 1000);
            let hours2 = date2.getHours();
            let minutes2 = "0" + date2.getMinutes();
            let formattedTime2 = hours2 + ':' + minutes2.substr(-2);
            return (
                <Card className={styles.cards}>
                    <Card.Title className={styles.cardTitle}>{props.value}</Card.Title>
                    <Card.Text className={styles.cardTextBody}>{props.data ? <p className={styles.cardText}>{ formattedTime2}</p> : null}</Card.Text>
                </Card>
            );
            default:
               return (
                <Card className={styles.cards}>
                    <Card.Title className={styles.cardTitle}>{props.value}</Card.Title>
                    <Card.Text className={styles.cardTextBody}>{props.data ? <p className={styles.cardText}>{props.data}</p> : null}</Card.Text>
                </Card>
            );
    }
}

export default WeatherInfoPlate;