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