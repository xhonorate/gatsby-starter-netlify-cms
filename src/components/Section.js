import * as React from "react";
import { MDBScrollspySection, MDBContainer, MDBRow, MDBCol } from 'mdb-react-ui-kit';
import PropTypes from "prop-types"
import Lottie from './Lottie';
import PreviewCompatibleImage from './PreviewCompatibleImage';
import MDRenderer from './MDRenderer';
import { Grid, GridItem, Center, Container, VStack, Heading, Box } from "@chakra-ui/react";
import { StaticImage } from 'gatsby-plugin-image';

const MagicGrid = (props) => {
    const {
        align,
        graphic,
        heading,
        subheading,
        content = "",        
    } = props;

    const paragraphs = (content.replaceAll("\\\n","\n").replaceAll("\n<Tooltip","<Tooltip").replaceAll("</Tooltip>\n","</Tooltip>").split("\n\n")).filter(paragraph => { return paragraph.replaceAll("\\","").length > 0 });
    const pos = (graphic && graphic.length > 0) ? graphic[0].position : "none";

    const left = pos.includes("left");
    const right = pos.includes("right");
    const top = pos.includes("top"); 
    const bottom = pos.includes("bottom");

    const gridItems = []
    const paragraphHeights = [];
    const paragraphBreakpoints = {md: 0, lg: 0}

    const graphicHeight = {md: 300, lg: 460};

    const lengthToHeight = (strlen) => {
        // xxl (1160px+) ~ 80-85 per line
        // does not matter for smaller sizes, since we will wrap image to top/bottom of text
        const charsPerLine = 74
        const bottomMargin = 8
        const spaceBetween = 8
        const heightPerLine = 25.59

        return (Math.ceil(strlen/charsPerLine))*heightPerLine + bottomMargin + spaceBetween;
    }

    for (let i = 0; i < paragraphs.length; i++) {
        // loop backwards for bottom aligned graphic
        const j = bottom ? paragraphs.length - 1 - i : i
        paragraphHeights.push(lengthToHeight(paragraphs[j].length));

        let currentLen = paragraphHeights.reduce((a, b) => a + b, 0)
        if (currentLen > graphicHeight.md && paragraphBreakpoints.md == 0) paragraphBreakpoints.md = i;
        if (currentLen > graphicHeight.lg && paragraphBreakpoints.lg == 0) paragraphBreakpoints.lg = i;
    }

    const headingItem = (
        <GridItem colSpan={left || right ? {base:12, md:7} : 12} colStart={left ? {base:1, md:6} : 1} key="heading-item">
            <VStack align={left || right ? "start" : "center"} pb={left || right ? 3 : 8} className={`text-${align} section-title`}>
                <Heading as='h2'>{heading}</Heading>
                {subheading && <p className="pb-4"><em>{subheading}</em></p>}
            </VStack>
        </GridItem>
    );

    const graphicItem = (rowStart = 0, colStart = 0, rowSpan = 1, colSpan = 12) => {
        return (
            <GridItem
                key="graphic-item"
                colStart={colStart}
                rowStart={rowStart}
                rowSpan={rowSpan}
                colSpan={colSpan}>
            <Center h='100%' p={3} mt={((left || right) && (!top && !bottom)) ? - 8 : 0}>
                { graphic[0].type == "image-object" ?
                <PreviewCompatibleImage imageInfo={{  
                    image: graphic[0].image,
                    alt: "section-image",
                    options: {
                        style: { 
                            maxWidth: "100%", 
                            maxHeight: Math.min(460, paragraphHeights.reduce((a, b) => a + b, 0) - 28) 
                        },
                        objectFit: "contain",
                        placeholder: "blurred",
                    }
                }} /> 
                :
                <Lottie {...graphic[0]} src={graphic[0].lottie} /> }
            </Center>
            </GridItem>
        )
    }

    const gridItem = (content, colSpan=12, colStart=0) => {
        return (
            <GridItem colStart={colStart} colSpan={colSpan} key={`griditem-${gridItems.length}`}>
                <MDRenderer>{content}</MDRenderer>
            </GridItem>
        )
    }

    // place heading item
    gridItems.push(headingItem)
    
    // loop through each "paragraph" element from markdown
    for (let i = 0; i < paragraphs.length; i++) {
        const j = bottom ? paragraphs.length - 1 - i : i
        let size = 10;
        if (left || right) {
            if (top || bottom) {
                size = { base: 12, md: i > paragraphBreakpoints.md ? 12 : 7, lg: i > paragraphBreakpoints.lg ? 12 : 7 }
            }
            else {
                size = { base: 12, md: 7}
            }
        }

        if (bottom) {
            gridItems.splice(1,0,gridItem(paragraphs[j], size, 2));

        } else {
            gridItems.push(gridItem(paragraphs[j], size, 2));
        }
    }

    if (pos !== "none") {
        const rowSpan = {
            base: 1, 
            md: (left || right) ? (top || bottom ? paragraphBreakpoints.md + 1 : paragraphs.length) : 1,
            lg: (left || right) ? (top || bottom ? paragraphBreakpoints.lg + 1 : paragraphs.length) : 1
        }

        // 1 = above heading
        // 2 = above text
        const getRowStart = (key) => {
            if (left || right) {
                return bottom ? gridItems.length - rowSpan[key] + 1 : 2
            }
            if (pos == "above content") return 2
            if (pos == "below content") return gridItems.length + 1
            return 1
        }
        const rowStart = {
            base: pos == "above heading" ? 1 : (pos == "below content" ? gridItems.length + 1 : 2), 
            md: getRowStart('md'),
            lg: getRowStart('lg'),
        };

        const colSpan = {base: 12, md: left || right ? 5 : 12}
        const colStart = {base: 0, md: right ? 8 : 0}

        gridItems.push(graphicItem(rowStart, colStart, rowSpan, colSpan));
    }

    return (
        <Grid
            autoColumns='true'
            templateColumns='repeat(12, 1fr)'
            gap={2}
            children={gridItems}
        />
    )
}

export default function Section(props) {
    const {
      id = ""
    } = props;

    console.log(props.heading);
    
    return (
        <Box as='section' id={id} bg={(props.heading == "WhiteStar Patents") ? 'gray.100' : 'none' } >
            <Container maxW={'6xl'} py={6}>
                <VStack spacing={2} align='stretch'>
                    <MagicGrid {...props}/>
                </VStack>
            </Container>
        </Box>
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