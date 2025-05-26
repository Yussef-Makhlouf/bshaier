// AMP Component Type Definitions
import React from 'react';

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'amp-sidebar': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        id?: string;
        layout?: string;
        side?: 'left' | 'right';
      }, HTMLElement>;
      
      'amp-accordion': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      
      'amp-carousel': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        id?: string;
        width?: string | number;
        height?: string | number;
        layout?: string;
        type?: string;
        autoplay?: boolean | string;
        delay?: string | number;
        loop?: boolean | string;
      }, HTMLElement>;
      
      'amp-analytics': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        type?: string;
        'data-credentials'?: string;
      }, HTMLElement>;
      
      'amp-form': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement>, HTMLElement>;
      
      'amp-img': React.DetailedHTMLProps<React.HTMLAttributes<HTMLElement> & {
        alt?: string;
        src?: string;
        width?: string | number;
        height?: string | number;
        layout?: string;
      }, HTMLElement>;
    }
  }
}

// Extend HTML button element to include AMP-specific attributes
declare module 'react' {
  interface ButtonHTMLAttributes<T> extends HTMLAttributes<T> {
    on?: string;
  }
  
  interface HTMLAttributes<T> extends AriaAttributes, DOMAttributes<T> {
    'submit-success'?: boolean;
    'submit-error'?: boolean;
    'action-xhr'?: string;
  }
  
  interface DetailedHTMLProps<A, B> {
    type?: string;
  }
}
