import { addons } from '@storybook/addons';
import {create} from "@storybook/theming";
import logo from "../assets/logo.svg";

addons.setConfig({
    theme: create({
        base: 'light',
        brandTitle: 'Trace Registry',
        brandUrl: "https://komune-io.github.io/trace-registry/",
        brandImage: logo,
        brandTarget: "_self",
        appBg: "#FFFEFB",
        fontBase: '"Montserrat", sans-serif',
        colorPrimary: "#353945",
        colorSecondary: "#353945",
    }),
    showToolbar: false
});
