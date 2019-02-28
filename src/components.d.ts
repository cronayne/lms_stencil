/* tslint:disable */
/**
 * This is an autogenerated file created by the Stencil compiler.
 * It contains typing information for all components that exist in this project.
 */


import '@stencil/core';

import '@stencil/router';
import '@stencil/state-tunnel';
import {
  RouterHistory,
} from '@stencil/router';


export namespace Components {

  interface AppAuth {
    'history': RouterHistory;
  }
  interface AppAuthAttributes extends StencilHTMLAttributes {
    'history'?: RouterHistory;
  }

  interface AppHome {}
  interface AppHomeAttributes extends StencilHTMLAttributes {}

  interface AppProfile {
    'history': RouterHistory;
  }
  interface AppProfileAttributes extends StencilHTMLAttributes {
    'history'?: RouterHistory;
  }

  interface AppRoot {}
  interface AppRootAttributes extends StencilHTMLAttributes {}
}

declare global {
  interface StencilElementInterfaces {
    'AppAuth': Components.AppAuth;
    'AppHome': Components.AppHome;
    'AppProfile': Components.AppProfile;
    'AppRoot': Components.AppRoot;
  }

  interface StencilIntrinsicElements {
    'app-auth': Components.AppAuthAttributes;
    'app-home': Components.AppHomeAttributes;
    'app-profile': Components.AppProfileAttributes;
    'app-root': Components.AppRootAttributes;
  }


  interface HTMLAppAuthElement extends Components.AppAuth, HTMLStencilElement {}
  var HTMLAppAuthElement: {
    prototype: HTMLAppAuthElement;
    new (): HTMLAppAuthElement;
  };

  interface HTMLAppHomeElement extends Components.AppHome, HTMLStencilElement {}
  var HTMLAppHomeElement: {
    prototype: HTMLAppHomeElement;
    new (): HTMLAppHomeElement;
  };

  interface HTMLAppProfileElement extends Components.AppProfile, HTMLStencilElement {}
  var HTMLAppProfileElement: {
    prototype: HTMLAppProfileElement;
    new (): HTMLAppProfileElement;
  };

  interface HTMLAppRootElement extends Components.AppRoot, HTMLStencilElement {}
  var HTMLAppRootElement: {
    prototype: HTMLAppRootElement;
    new (): HTMLAppRootElement;
  };

  interface HTMLElementTagNameMap {
    'app-auth': HTMLAppAuthElement
    'app-home': HTMLAppHomeElement
    'app-profile': HTMLAppProfileElement
    'app-root': HTMLAppRootElement
  }

  interface ElementTagNameMap {
    'app-auth': HTMLAppAuthElement;
    'app-home': HTMLAppHomeElement;
    'app-profile': HTMLAppProfileElement;
    'app-root': HTMLAppRootElement;
  }


  export namespace JSX {
    export interface Element {}
    export interface IntrinsicElements extends StencilIntrinsicElements {
      [tagName: string]: any;
    }
  }
  export interface HTMLAttributes extends StencilHTMLAttributes {}

}
