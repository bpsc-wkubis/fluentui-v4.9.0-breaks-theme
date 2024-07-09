import {
    accentBaseColor,
    SwatchRGB,
    fillColor,
    neutralLayer3,
    bodyFont,
    density
} from "/_content/Microsoft.FluentUI.AspNetCore.Components/Microsoft.FluentUI.AspNetCore.Components.lib.module.js";

const defaultAccentBaseColor = SwatchRGB.create(33, 183, 179);
const defaultDensity = 2;

function initializeTheme() {
    accentBaseColor.withDefault(defaultAccentBaseColor);
    fillColor.withDefault(neutralLayer3);
    density.withDefault(defaultDensity);
};

initializeTheme();
