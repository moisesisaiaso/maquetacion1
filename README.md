# Integración de Google Maps en React

Este proyecto integra Google Maps utilizando la biblioteca `google-maps-react`.

## Requisitos

-   Node.js (versión 20.10.0)
-   npm o yarn

## Instalación

1. Clona el repositorio:

```bash
git clone https://github.com/tu-usuario/tu-repositorio.git
    cd tu-repositorio

```

2. Instala las dependencias:

```bash
npm install
```

o

```bash
yarn install
```

3. Instala las bibliotecas necesarias para Google Maps:

```bash
npm install google-maps-react
```

o

```bash
yarn add google-maps-react
```

## Obtener la Clave de API de Google Maps

1. Crea un proyecto en [Google Cloud Console](https://console.cloud.google.com/).
2. Habilita las APIs de Google Maps:
    - Ve a "APIs & Services" > "Library".
    - Habilita "Maps JavaScript API".
3. Obtén la clave de API:
    - Ve a "APIs & Services" > "Credentials".
    - Crea una nueva clave de API y cópiala.

## Configuración

1. Crea un archivo `.env` en la raíz del proyecto y agrega tu clave de API:

```plaintext
    REACT_APP_GOOGLE_MAPS_API_KEY=TU_API_KEY_DE_GOOGLE_MAPS
```

2. Crea el componente MapComponent:

```javascript
import React from "react";
import { Map, GoogleApiWrapper, Marker } from "google-maps-react";

const MapComponent = (props) => {
    return (
        <Map
            google={props.google}
            zoom={14}
            initialCenter={{
                lat: -1.2884,
                lng: 36.8233,
            }}
            style={{ height: "400px", width: "100%" }}
        >
            <Marker position={{ lat: -1.2884, lng: 36.8233 }} />
        </Map>
    );
};

export default GoogleApiWrapper({
    apiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
})(MapComponent);
```

3. Usa el componente `MapComponent` en tu aplicación.
