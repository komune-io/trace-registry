import { addons } from '@storybook/addons';
import {create} from "@storybook/theming";
import logo from "../public/logo.svg";

addons.setConfig({
    theme:  create({
        base: "light",
        brandTitle: "SmartB Verified Emission Reduction",
        brandUrl: "https://api.registry.smartb.network/docs/ver",
        brandImage: logo,
        brandTarget: "_self",
        appBg: "#FFFEFB",
        fontBase: '"Montserrat", sans-serif',
        colorPrimary: "#353945",
        colorSecondary: "#353945",
    }),
    showToolbar: false,
});

