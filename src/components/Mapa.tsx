// src/components/Mapa.tsx

import React, { useEffect, useState } from 'react';

interface Coordenadas {
  lat: number;
  lng: number;
}

interface MapaProps {
  endereco: string;
}

const Mapa: React.FC<MapaProps> = ({ endereco }) => {
  const [coordenadas, setCoordenadas] = useState<Coordenadas>({ lat: -21.9372332, lng: -50.5303807 });

  useEffect(() => {
    if (window.google && window.google.maps) {  // Verifique se a API do Google Maps está disponível
      const geocoder = new window.google.maps.Geocoder();
      geocoder.geocode({ address: endereco }, (resultados, status) => {
        if (status === 'OK' && resultados && resultados.length > 0) {
          const localizacao = resultados[0].geometry.location;
          setCoordenadas({ lat: localizacao.lat(), lng: localizacao.lng() });
        } else {
          console.log('Geocodificação não foi bem-sucedida: ' + status);
        }
      });
    }
  }, [endereco]);

  useEffect(() => {
    if (window.google && window.google.maps) {
      const mapElement = document.getElementById('map') as HTMLElement;
      const mapInstance = new window.google.maps.Map(mapElement, {
        center: coordenadas,
        zoom: 15,
      });

      new window.google.maps.Marker({
        position: coordenadas,
        map: mapInstance,
      });
    }
  }, [coordenadas]);

  return <div id="map" style={{ height: '400px', width: '100%' }} />;
};

export default Mapa;
