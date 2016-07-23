import React, {StyleSheet, Dimensions, PixelRatio} from "react-native";
const {width, height, scale} = Dimensions.get("window"),
    vw = width / 100,
    vh = height / 100,
    vmin = Math.min(vw, vh),
    vmax = Math.max(vw, vh);

export default StyleSheet.create({
    "wrapper": {
        "display": "flex",
        "flexDirection": "row",
        "alignItems": "center",
        "marginTop": 30,
        "flex": 1
    },
    "body": {
        "background": "#f4f4f4 !important"
    },
    "provider": {
        "width": 300,
        "flexDirection": "column",
        "alignItems": "center",
        "display": "flex",
        "marginTop": 30,
        "minHeight": 300,
        "paddingTop": 90,
        "paddingRight": 50,
        "paddingBottom": 90,
        "paddingLeft": 50,
        "marginLeft": 20,
        "background": "#fff",
        "borderRadius": 2,
        "boxShadow": "0 1px 2px rgba(0,0,0,0.07)"
    },
    "imgMap": {
        "textAlign": "center"
    },
    "weatherWrapper": {
        "display": "flex",
        "marginTop": 20,
        "marginRight": 100,
        "marginBottom": 20,
        "marginLeft": 100,
        "alignItems": "center",
        "width": 900,
        "height": 600,
        "position": "fixed",
        "background": "linear-gradient(rgba(0, 0, 0, 0.4), rgba(0, 0, 0, 0.4)), url('https://lh3.googleusercontent.com/-3a9tfucljDw/Vz9NILoSneI/AAAAAAAAFtM/Cs-_mjCo18s_J1jALti-cam5y9-Z67BxACLIB/s1600-w900/') no-repeat center center"
    },
    "imgweather": {
        "paddingTop": 10,
        "paddingRight": 10,
        "paddingBottom": 10,
        "paddingLeft": 10,
        "marginTop": 50,
        "marginRight": 70,
        "marginBottom": 50,
        "marginLeft": 70
    },
    "h2city": {
        "fontSize": 50,
        "fontFamily": "sans-serif",
        "fontWeight": "normal",
        "color": "#fff"
    },
    "spanstate": {
        "display": "flex",
        "flexDirection": "column",
        "fontSize": 70,
        "color": "#fff",
        "paddingTop": 20,
        "paddingRight": 20,
        "paddingBottom": 20,
        "paddingLeft": 20,
        "textShadow": "0 0 10px rgba(0, 0, 0, 0.33)"
    },
    "spanheader": {
        "display": "flex",
        "alignItems": "center",
        "flexDirection": "column",
        "width": 300,
        "position": "relative",
        "top": -140,
        "left": 90
    },
    "spanweatherText": {
        "display": "flex",
        "fontSize": 40,
        "position": "relative",
        "bottom": 270,
        "color": "aliceblue",
        "paddingLeft": 20,
        "fontWeight": "100"
    },
    "buttonrs-play": {
        "display": "none"
    },
    "overlay": {
        "paddingTop": 0,
        "backgroundColor": "rgba(0, 0, 0, 0.35)",
        "zIndex": 1300,
        "width": 900,
        "height": 200,
        "position": "fixed"
    },
    "img-style": {
        "paddingTop": 20
    },
    "card-style": {
        "textAlign": "left"
    },
    "header": {
        "flex": 2,
        "flexDirection": "row",
        "alignItems": "center",
        "textAlign": "center",
        "marginTop": 30
    },
    "section-map": {
        "marginTop": 50,
        "marginRight": "auto",
        "marginBottom": 50,
        "marginLeft": "auto",
        "height": 500,
        "flexDirection": "column",
        "alignItems": "center"
    },
    "map-widget": {
        "alignItems": "center"
    },
    "provider li": {
        "listStyle": "none",
        "fontSize": 100
    },
    "provider:hover": {
        "boxShadow": "2px 4px 2px rgba(0,0,0,0.09)"
    },
    "fa-newspaper-o": {
        "color": "#ed5635"
    },
    "fa-bolt": {
        "color": "#40A2F0"
    },
    "fa-car": {
        "color": "#b596CD"
    },
    "providerName": {
        "fontFamily": "sans-serif"
    },
    "a:hover": {
        "textDecoration": "none !important"
    }
});