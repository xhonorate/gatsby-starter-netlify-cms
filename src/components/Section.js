import * as React from "react";
import { MDBScrollspySection, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import PropTypes from "prop-types"
import Lottie from './Lottie';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import MDRenderer from './MDRenderer';
import { Grid, GridItem } from "@chakra-ui/react";

export default function Section(props) {
    const {
      align,
      graphic,
      heading,
      subheading,
      content,
      id = ""
    } = props;
    const paragraphs = (content.replaceAll("\\","").split("\n")).filter(paragraph => { return paragraph.replaceAll("\\","").length > 0 });
    return (
        <MDBScrollspySection id={id} >
            <MDBContainer>
                <MDBRow className={ (graphic && graphic.length > 0) ? `section-graphic-${graphic[0].position}` : "section-graphic-none" }>
                    <MDBCol size="12" className={`text-${align} section-title`}>
                        <h2 className={(graphic && graphic.length > 0) ? "" : "text-center"}>{heading}</h2>
                        {subheading && <p className="pb-4"><em>{subheading}</em></p>}
                    </MDBCol>
<Grid
  h='200px'
  templateRows='repeat(2, 1fr)'
  templateColumns='repeat(12, 1fr)'
  gap={4}
>
  <GridItem rowSpan={2} colSpan={5} bg='tomato' />
  <GridItem colSpan={7} bg='papayawhip' />
  <GridItem colSpan={7} bg='papayawhip' />
</Grid>
                    { paragraphs.map((paragraph) => (
                        
                        <MDBCol className="section-content">
                            <MDRenderer>{paragraph}</MDRenderer>
                        </MDBCol>
                    ))}
                    { graphic && graphic.length > 0 &&
                        <MDBCol className="section-graphic">
                        { graphic[0].type == "image-object" ?
                        <PreviewCompatibleImage imageInfo={{  
                            image: graphic[0].image,
                            alt: "section-image",
                            options: {
                                objectFit: "contain",
                                placeholder: "blurred",
                            }
                        }} /> 
                        : 
                        <Lottie {...graphic[0]} src={graphic[0].lottie} /> } 
                        </MDBCol>
                    }
                </MDBRow>
            </MDBContainer>
        </MDBScrollspySection>
    )
}

Section.propTypes = {
    align: PropTypes.string,
    graphic: PropTypes.array,
    heading: PropTypes.string,
    subheading: PropTypes.string,
    content: PropTypes.any,
    id: PropTypes.string,
  };