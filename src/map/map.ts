import * as L from "leaflet";
import "./map.scss";

const app = document.getElementById("map");
if (app) {
  const map = L.map("map").setView([26.8206, 30.8025], 6); // Coordenadas de Egipto

  L.tileLayer("https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png", {
    maxZoom: 18,
    attribution:
      '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
  }).addTo(map);
}
