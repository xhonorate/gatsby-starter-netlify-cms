import { extendTheme, ChakraProvider } from "@chakra-ui/react"
import React from 'react'
import { graphql, StaticQuery } from 'gatsby'

function shadeColor(R, G, B, val) {
  //0 = white = 255, 255, 255
  //1000 = black = 0, 0, 0

  // 2 = white
  // 1 = neutral
  // 0 = black
  let multiplier = val/500;

  R = parseInt(255 - (multiplier*(255-R)));
  G = parseInt(255 - (multiplier*(255-G)));
  B = parseInt(255 - (multiplier*(255-B)));

  R = (R>0)?R:0;
  G = (G>0)?G:0;
  B = (B>0)?B:0;

  R = (R<255)?R:255;
  G = (G<255)?G:255;
  B = (B<255)?B:255;

  const RR = ((R.toString(16).length==1)?"0"+R.toString(16):R.toString(16));
  const GG = ((G.toString(16).length==1)?"0"+G.toString(16):G.toString(16));
  const BB = ((B.toString(16).length==1)?"0"+B.toString(16):B.toString(16));
  
  return "#"+RR+GG+BB;
}

function colorToShades(color) {
  const R = parseInt(color.substring(1,3),16);
  const G = parseInt(color.substring(3,5),16);
  const B = parseInt(color.substring(5,7),16);

  const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900]

  let colorShades = {}
  shades.forEach(shade => {
    //500 is default color shade, normalize by 25%
    colorShades[shade] = shadeColor(R,G,B,shade);
  });

  return {
    ...colorShades
  }
}

class ThemeWrapperTemplate extends React.Component {
  render() {
    const data = this.props.data.markdownRemark.frontmatter

    const theme = {
        colors: {
            primary: colorToShades(data.primary),
            secondary: { 500: data.secondary },
            success: { 500: data.success },
            info: { 500: data.info },
            warning: { 500: data.warning },
            danger: { 500: data.danger },
        },
        
        fonts: {
          body: "Open Sans, system-ui, sans-serif",
          heading: "Raleway, serif",
          mono: "Menlo, monospace",
        },

        fontSizes: {
          xs: "0.75rem",
          sm: "0.875rem",
          md: "1rem",
          lg: "1.125rem",
          xl: "1.25rem",
          "2xl": "1.5rem",
          "3xl": "1.875rem",
          "4xl": "2.25rem",
          "5xl": "3rem",
          "6xl": "3.75rem",
          "7xl": "4.5rem",
          "8xl": "6rem",
          "9xl": "8rem",
        },
        
        lineHeights: {
          normal: "normal",
          none: 1.25,
          shorter: 1.375,
          short: 1.5,
          base: 1.625,
          tall: 2,
          taller: "2.5",
          "1": "0.5rem",
          "2": ".75rem",
          "3": "1rem",
          "4": "1.25rem",
          "5": "1.5rem",
          "6": "1.75rem",
          "7": "2rem",
          "8": "2.25rem",
          "9": "2.5rem",
          "10": "2.75rem",
        },
    }

    return (
        <div>
            <style type="text/css" dangerouslySetInnerHTML={{__html: `
                :root { 
                    --theme-color-primary: ${data.primary};
                    --theme-color-secondary: ${data.secondary};
                    --theme-color-success: ${data.success};
                    --theme-color-info: ${data.info};
                    --theme-color-warning: ${data.warning};
                    --theme-color-danger: ${data.danger};
                }
            `}} />
            <ChakraProvider theme={extendTheme(theme)}>
                {this.props.children}
            </ChakraProvider>
        </div>
    )
  }
}

export default function ThemeWrapper({children}) {
  return (
    <StaticQuery
      query={graphql`
        query ThemeStyleQuery {
          markdownRemark( fields: {slug: {eq: "/theme-colors/"}}) {
            frontmatter {
              primary
              secondary
              success
              info
              warning
              danger
            }
          }
        }
      `}
      render={(data) => <ThemeWrapperTemplate data={data} children={children} />}
    />
  );
}