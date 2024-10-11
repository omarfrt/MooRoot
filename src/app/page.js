"use client"
import Image from "next/image";
import Styled from "styled-components";
import moorootSvg from "./mooroot.svg";
import studioSvg from "./studio.svg";
import greenTorusSvg from "./green.svg";
import orangeTorusSvg from "./orange.svg";
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
const GreenTorus = Styled(Image)`
  position: absolute;
  bottom: -120px;
  right: -120px;
  z-index: 0;
  @media (max-width: 1056px){
    display: none;
  }
`;
const OrangeTorus = Styled(Image)`
  position: absolute;
  top: -120px;
  left: -45px;
  z-index: 0;
  @media (max-width: 1056px){
    display: none;
  }
`;
//LINE
const HorizontalLine = Styled.div`
  width: 100%;
  height: 3px;
  background-color: black;
`;
const ColumnContainer = Styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  width: 100%;
  margin-top: 5px;
  margin-bottom: 15px;
`;

const Column = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: ${props => props.alignItems || 'flex-start'};
  width: 30%; // Adjust this value as needed
`;

const TextComponent = Styled.div`
  font-family: 'Space Grotesk', sans-serif;
  font-weight: ${props => props.fontWeight || 'medium'};
  font-size: ${props => props.fontSize || '18px'};
  text-align: left;
  z-index:4
`;

const FooterContainer = Styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  
  padding: 0 47px 20px 47px;
`;

const FooterColumn = Styled.div`
  display: flex;
  flex-direction: column;
`;
const FooterLine = Styled.div`
  width: 301px;
  height: 2px;
  background-color: black;
  margin-bottom: 10px;
`;


export default function Home() {
  return (
    <>
      <PageWrapper>
        <OrangeTorus src={orangeTorusSvg} alt="orange torus" />
      <GreenTorus src={greenTorusSvg} alt="green torus" />
      <MainContent>
      <LogoContainer>
        <MoorootLogo src={moorootSvg} alt="mooroot" />
        <StudioLogo src={studioSvg} alt="studio" />
      </LogoContainer>
      <HorizontalLine />
      <ColumnContainer>
        <Column>
          <TextComponent fontWeight="bold" fontSize="40px"><ShuffleType text={"Omar Fertat"} link={"https://www.omarfertat.com/"}/></TextComponent>
        </Column>
        <Column>
          <TextComponent fontWeight="bold"><ShuffleType text={"Tangier,"}/></TextComponent>
          <TextComponent fontWeight="bold"><ShuffleType text={"Morocco"}/></TextComponent>
        </Column>
        <Column >
          <TextComponent fontWeight="bold"><ShuffleType text={"omarfertat.com,"} link={"https://www.omarfertat.com/"}/></TextComponent>
          <TextComponent fontWeight="bold"><ShuffleType text={"omarfertat96@gmail.com"} link={"mailto:omarfertat96@gmail.com"}/></TextComponent>
        </Column>
      </ColumnContainer>
      <HorizontalLine />
      <ColumnContainer>
        <Column>
          <TextComponent><ShuffleType text={"Full Stack /"}/></TextComponent>
          <TextComponent> <ShuffleType text={"Creative Developer"}/></TextComponent>
        </Column>
        <Column>
          <TextComponent><ShuffleType text={"ReactJs, NextJs,"}/></TextComponent>
          <TextComponent><ShuffleType text={"R3F"}/></TextComponent>
        </Column>
        <Column>
          <TextComponent><ShuffleType text={"NodeJs, Express,"}/></TextComponent>
          <TextComponent><ShuffleType text={"MongoDB"}/></TextComponent>
        </Column>
      </ColumnContainer>
      <HorizontalLine />
      <ColumnContainer>
        <Column>
          <TextComponent><ShuffleType text={"MexiqueBookShop.com -2022"} link={"https://www.mexiquebookshop.com/"}/></TextComponent>
        </Column>
        <Column>
          <TextComponent><ShuffleType text={"Homylius.lu -2023"} link={"https://www.homylius.lu/"}/></TextComponent>
        </Column>
        <Column>
          <TextComponent><ShuffleType text={"MooRoot.studio -?"}link={"https://www.mooroot.studio/"}/></TextComponent>
        </Column>
      </ColumnContainer>
      
      </MainContent>
      <div style={{ width: '100%', height: '50vh' }}>
        <Experience />
      </div>
      <FooterContainer>
        <FooterColumn>
          <FooterLine />
          <TextComponent fontSize="16px"><ShuffleType text={"Other demos 👉🏽"}/></TextComponent>
        </FooterColumn>
        <FooterColumn>
          <FooterLine />
          <TextComponent fontSize="16px"><ShuffleType text={"⚽Rolling Ball Game 👷🏽‍♂️"} link={"https://ball-game-zeta.vercel.app/"}/></TextComponent>
          <TextComponent fontSize="16px"><ShuffleType text={"🔮Hologram Shader ✅"} link={"https://hologram-shader-flax.vercel.app/"}/></TextComponent>
        </FooterColumn>
        <FooterColumn>
          <FooterLine />
          <TextComponent fontSize="16px"><ShuffleType text={"♾️Morph Shader ✅"} link={"https://morph-shader.vercel.app/"}/></TextComponent>
          <TextComponent fontSize="16px"><ShuffleType text={"🧑🏽‍💻Decode Effect ✅"} link={"https://decode-effect.vercel.app/"}/></TextComponent>
        </FooterColumn>
        <FooterColumn>
          <FooterLine />
          <TextComponent fontSize="16px"><ShuffleType text={"🌌Galaxy ✅"} link={"https://omarfrt-galaxy.vercel.app/"}/></TextComponent>
          <TextComponent fontSize="16px"><ShuffleType text={"🍩3D Text ✅"} link={"https://omarfertat3dtext.vercel.app/"}/></TextComponent>
        </FooterColumn>
      </FooterContainer>
    </PageWrapper>
    </>
  );  
}