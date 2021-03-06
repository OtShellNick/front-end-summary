declare module '@';
declare module '@/*';
declare module '@components';
declare module '@components/*';
declare module 'classnames';
declare module "react-router-dom";
declare module "@reduxjs/toolkit";
declare module "@types/redux";
declare module "axios";
declare module "moment";

declare module "*.svg?tsx" {
    const content: any;
    export default content;
}