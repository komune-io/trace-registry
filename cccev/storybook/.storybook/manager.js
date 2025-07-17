import { addons } from '@storybook/addons';
import {create} from "@storybook/theming";
import logo from "../assets/logo.png";

addons.setConfig({
  theme: create({
    base: 'light',
    brandTitle: 'SmartB CCCEV',
    brandUrl: 'https://docs.smartb.city/cccev',
    brandImage: logo,
  }),
});
