"use client"
import Image from "next/image";
import Styled from "styled-components";
import moorootSvg from "./mooroot.svg";
import studioSvg from "./studio.svg";
import Torus from "./component/Svg/Torus"
import Experience from "./R3F/Sphere/Experience";
import ShuffleType from "./component/TypeShuffle";

const PageWrapper = Styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
   min-height: 100vh;
 justify-content: space-between;
   overflow: hidden;
`;

// Add this new styled component for the main content
const MainContent = Styled.div`
   padding: 30px 47px 0 47px;
    @media (max-width: 428px) and (max-height: 926px){
     padding: 30px 20px 0 20px;
  }
`;

//LOGO
const LogoContainer = Styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
 
`;

const MoorootLogo = Styled(Image)`
 
`;
const StudioLogo = Styled(Image)`
  
`;
const GreenTorus = Styled.div`
  position: absolute;
  bottom: -120px;
  right: -120px;
  z-index: 0;
  @media (max-width: 1056px){
    position: absolute;
  top: 437px;
  right: -120px;
  z-index: 0;
  }
`;
const OrangeTorus = Styled.div`
  position: absolute;
  top: -120px;
  left: -45px;
  z-index: 0;
  @media (max-width: 1056px){
  position: absolute;
  top: 437px;
  left: -128px;
  z-index: 0;
  }
`;
//LINE
const HorizontalLine = Styled.div`
  width: 100%;
  height: 3px;
  background-color: black;
  @media (max-width: 428px) and (max-height: 926px){
    height: 2px;
  }
`;
const ColumnContainer = Styled.div`
  display: grid;
  // justify-content: space-between;
  // align-items: flex-start;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 15px;
  grid-template-rows:    repeat(1, 1fr);
  grid-template-columns: repeat(12, 1fr);
  @media (max-width: 428px) and (max-height: 926px){
  grid-gap: 6px;
     grid-template-rows:    repeat(3, 1fr);
  grid-template-columns: repeat(1, 1fr);
  }
`;

const Column = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignItems || 'flex-start'};
  //width: 30%; // Adjust this value as needed
  grid-column-start: ${props=> props.columnStart};
  grid-column-end:   ${props => props.columnStart +4};
   @media (max-width: 428px) and (max-height: 926px){
    grid-column-start:1;
  grid-column-end:   auto;
  justify-self: start !important;
  }
`;

const TextComponent = Styled.div`
  font-family: 'Space Grotesk', sans-serif;
  font-weight: ${props => props.fontWeight || 'medium'};
  font-size: ${props => props.fontSize || '18px'};
 
  text-align: left;
  z-index:4;
   @media (max-width: 428px) and (max-height: 926px){
    font-size: ${props => props.phoneSize || '14px'};
  }
`;

const FooterContainer = Styled.div`
  display: grid;
 // justify-content: space-between;
  
  grid-template-rows:    repeat(1, 1fr);
  grid-template-columns: repeat(12, 1fr);
   padding: 0 47px 20px 47px;
  @media (max-width: 428px) and (max-height: 926px){
  grid-gap: 6px;
     grid-template-rows:    repeat(3, 1fr);
  grid-template-columns:  repeat(2, 1fr);
  }
`;

const FooterColumn = Styled.div`
  display: flex;
  flex-direction: column;
  grid-column-start: ${props=> props.columnStart};
  grid-column-end:   ${props => props.columnStart +3};
   @media (max-width: 428px) and (max-height: 926px){
  grid-column-start:auto;
  grid-column-end: auto;
  grid-gap: 6px;
  justify-self: start !important;
  &:nth-child(1) {
      grid-column: 1 / 2;  /* Item 1 in column 1 */
      grid-row: 1 / 3;     /* Spans 2 rows */
    }
    &:nth-child(2) {
      grid-column: 2 / 3;  /* Item 2 in column 2 */
      grid-row: 1 / 2;     /* In row 1 */
    }
    &:nth-child(3) {
      grid-column: 2 / 3;  /* Item 3 in column 2 */
      grid-row: 2 / 3;     /* In row 2 */
    }
    &:nth-child(4) {
      grid-column: 2 / 3;  /* Item 4 in column 2 */
      grid-row: 3 / 4;     /* In row 3 */
    }
  }
`;
const ExperienceContainer = Styled.div`
  position: relative; // Ensure it can be positioned
  z-index: 10; // Set a higher z-index for the Experience component
  width: 100%; 
  height: 50vh;

`;


export default function Home() {
  return (
    <>
      <PageWrapper>
      <OrangeTorus> <Torus color="#E4620A"/> </OrangeTorus>
      <GreenTorus> <Torus color="#51AF95"/> </GreenTorus>
      <MainContent>
      <LogoContainer>
        <MoorootLogo src={moorootSvg} alt="mooroot" />
        <StudioLogo src={studioSvg} alt="studio" />
      </LogoContainer>
      <HorizontalLine />
      <ColumnContainer>
        <Column columnStart={1}>
          <TextComponent fontWeight="bold" fontSize="40px" phoneSize="20px"><ShuffleType text={"Omar Fertat"} link={"https://www.omarfertat.com/"}/></TextComponent>
        </Column>
        <Column columnStart={6} style={{justifySelf:"start"}}>
          <TextComponent fontWeight="bold"><ShuffleType text={"Tangier,"}/></TextComponent>
          <TextComponent fontWeight="bold"><ShuffleType text={"Morocco"}/></TextComponent>
        </Column>
        <Column columnStart={11} style={{justifySelf:"start"}} >
      
          <TextComponent fontWeight="bold"><ShuffleType text={"omarfertat.com,"} link={"https://www.omarfertat.com/"}/></TextComponent>
          <TextComponent fontWeight="bold" ><ShuffleType text={"omarfertat96@gmail.com"} link={"mailto:omarfertat96@gmail.com"}/></TextComponent>

        </Column>
      </ColumnContainer>
      <HorizontalLine />
      <ColumnContainer>
        <Column columnStart={1}>
          <TextComponent><ShuffleType text={"Full Stack /"}/></TextComponent>
          <TextComponent> <ShuffleType text={"Creative Developer"}/></TextComponent>
        </Column>
        <Column columnStart={6} style={{justifySelf:"start"}}>
          <TextComponent><ShuffleType text={"ReactJs, NextJs,"}/></TextComponent>
          <TextComponent><ShuffleType text={"R3F"}/></TextComponent>
        </Column>
        <Column columnStart={11} style={{justifySelf:"start"}}>
          <TextComponent><ShuffleType text={"NodeJs, Express,"}/></TextComponent>
          <TextComponent><ShuffleType text={"MongoDB"}/></TextComponent>
        </Column>
      </ColumnContainer>
      <HorizontalLine />
      <ColumnContainer>
        <Column columnStart={1}>
          <TextComponent><ShuffleType text={"MexiqueBookShop.com -2022"} link={"https://www.mexiquebookshop.com/"}/></TextComponent>
        </Column>
        <Column columnStart={6} style={{justifySelf:"start"}}>
          <TextComponent><ShuffleType text={"Homylius.lu -2023"} link={"https://www.homylius.lu/"}/></TextComponent>
        </Column>
        <Column columnStart={11} style={{justifySelf:"start"}}>
          <TextComponent><ShuffleType text={"MooRoot.studio -?"}link={"https://www.mooroot.studio/"}/></TextComponent>
        </Column>
      </ColumnContainer>
      
      </MainContent>
      {/* <div style={{ width: '100%', height: '50vh' }}>
        <Experience />
      </div> */}
      <ExperienceContainer>
        <Experience/>
        </ExperienceContainer>       
      <FooterContainer >
        <FooterColumn columnStart={1}>
          {/* <FooterLine /> */}
          <TextComponent fontSize="16px"><ShuffleType text={"Other demos 👉🏽"}/></TextComponent>
        </FooterColumn>
        <FooterColumn columnStart={4}>
          {/* <FooterLine /> */}
          <TextComponent fontSize="16px"><ShuffleType text={"⚽ Rolling Ball Game "} link={"https://ball-game-zeta.vercel.app/"}/></TextComponent>
          <TextComponent fontSize="16px"><ShuffleType text={"🔮 Hologram Shader "} link={"https://hologram-shader-flax.vercel.app/"}/></TextComponent>
        </FooterColumn>
        <FooterColumn columnStart={8}>
          {/* <FooterLine /> */}
          <TextComponent fontSize="16px"><ShuffleType text={"♾️ Morph Shader "} link={"https://morph-shader.vercel.app/"}/></TextComponent>
          <TextComponent fontSize="16px"><ShuffleType text={"💻 Decode Effect "} link={"https://decode-effect.vercel.app/"}/></TextComponent>
        </FooterColumn>
        <FooterColumn columnStart={11}>
          {/* <FooterLine /> */}
          <TextComponent fontSize="16px"><ShuffleType text={"🌌 Galaxy "} link={"https://omarfrt-galaxy.vercel.app/"}/></TextComponent>
          <TextComponent fontSize="16px"><ShuffleType text={"🍩 3D Text "} link={"https://omarfertat3dtext.vercel.app/"}/></TextComponent>
        </FooterColumn>
      </FooterContainer>
    </PageWrapper>
    </>
  );  
}