import React, { useState, useEffect } from "react";
import "./WetterApp.css";

import luftfeuchtigkeit_icon from "../Assets/luftfeuchtigkeit.png";
import sonne_icon from "../Assets/sonne.png";
import leichterRegen_icon from "../Assets/leichterRegen.png";
import regen_icon from "../Assets/regen.png";
import schnee_icon from "../Assets/schnee.png";
import suche_icon from "../Assets/suche.png";
import wind_icon from "../Assets/wind.png";
import wolke_icon from "../Assets/wolke.png";

const API_URL = import.meta.env.VITE_WETTER_URL;
const API_KEY = import.meta.env.VITE_API_KEY;

export const WetterApp = () => {
  const [luftfeuchtigkeitsprozent, setLuftfeuchtigkeitsprozent] = useState(0);
  const [windgeschwindigkeit, setWindgeschwindigkeit] = useState(0);
  const [temperaturgrad, setTemperaturgrad] = useState(0);
  const [ortname, setOrtname] = useState("");

  const suche = async () => {
    const element = document.getElementsByClassName("stadtInput")[0];
    const ort = element.value;

    if (!ort) {
      return;
    }

    const response = await fetch(`${API_URL}?q=${ort}&units=Metric&appid=${API_KEY}`);
    const jsonWeatherData = await response.json();
    console.log(jsonWeatherData)

    setLuftfeuchtigkeitsprozent(jsonWeatherData.main.humidity);
    setWindgeschwindigkeit(jsonWeatherData.wind.speed);
    setTemperaturgrad(jsonWeatherData.main.temp);
    setOrtname(jsonWeatherData.name);
  };

  useEffect(() => {
    suche();
  }, []);

  return (
    <div className="container">
      <div className="such-bar">
        <input type="text" className="stadtInput" placeholder="Suche" />
        <div
          className="suche-icon"
          onClick={() => {
            suche();
          }}
        >
          <img src={suche_icon} alt="Bild von Lupe" />
        </div>
      </div>
      <div className="wetter-bild">
        <img src={wolke_icon} alt="Bild einer Wolke" />
      </div>
      <div className="wetter-temperatur">{temperaturgrad}°C</div>
      <div className="wetter-ort">{ortname}</div>
      <div className="daten-container">
        <div className="element">
          <img
            src={luftfeuchtigkeit_icon}
            alt="Bild von Luftfeuchtigkeit"
            className="icon"
          />
          <div className="daten">
            <div className="luftfeuchtigkeit">{luftfeuchtigkeitsprozent}%</div>
            <div className="text">Luftfeuchtigkeit</div>
          </div>
        </div>
        <div className="element">
          <img src={wind_icon} alt="Bild von Wind" className="icon" />
          <div className="daten">
            <div className="wind">{windgeschwindigkeit} km/h</div>
            <div className="text">Windgeschwindigkeit</div>
          </div>
        </div>
      </div>
    </div>
  );
};
