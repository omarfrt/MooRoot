"use client"
import Image from "next/image";
import Styled from "styled-components";
import moorootSvg from "./mooroot.svg";
import studioSvg from "./studio.svg";
import Experience from "./R3F/Sphere/Experience";

const PageWrapper = Styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  padding: 0 47px 0 47px ;
`;

// Add this new styled component for the main content
const MainContent = Styled.main`
  flex: 1;
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
`;

const FooterContainer = Styled.footer`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0;
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
    <PageWrapper>
      <MainContent>
      <LogoContainer>
        <MoorootLogo src={moorootSvg} alt="mooroot" />
        <StudioLogo src={studioSvg} alt="studio" />
      </LogoContainer>
      <HorizontalLine />
      <ColumnContainer>
        <Column>
          <TextComponent fontWeight="bold" fontSize="40px">Omar Fertat</TextComponent>
        </Column>
        <Column>
          <TextComponent fontWeight="bold">Tangier,</TextComponent>
          <TextComponent fontWeight="bold">Morocco</TextComponent>
        </Column>
        <Column >
          <TextComponent fontWeight="bold">omarfertat.com,</TextComponent>
          <TextComponent fontWeight="bold">omarfertat96@gmail.com</TextComponent>
        </Column>
      </ColumnContainer>
      <HorizontalLine />
      <ColumnContainer>
        <Column>
          <TextComponent>Full Stack /</TextComponent>
          <TextComponent>Creative Developer</TextComponent>
        </Column>
        <Column>
          <TextComponent>ReactJs, NextJs,</TextComponent>
          <TextComponent>R3F</TextComponent>
        </Column>
        <Column>
          <TextComponent>NodeJs, Express,</TextComponent>
          <TextComponent>MongoDB</TextComponent>
        </Column>
      </ColumnContainer>
      <HorizontalLine />
      <ColumnContainer>
        <Column>
          <TextComponent>MexiqueBookShop.com -2022</TextComponent>
        </Column>
        <Column>
          <TextComponent>Homylius.lu -2023</TextComponent>
        </Column>
        <Column>
          <TextComponent>MooRoot.com -?</TextComponent>
        </Column>
      </ColumnContainer>
      <div style={{ width: '100%', height: '50vh' }}>
        <Experience />
      </div>
      </MainContent>
      
      <FooterContainer>
        <FooterColumn>
          <FooterLine />
          <TextComponent fontSize="16px">omarfertat.com</TextComponent>
        </FooterColumn>
        <FooterColumn>
          <FooterLine />
          <TextComponent fontSize="16px">demo1.com</TextComponent>
          <TextComponent fontSize="16px">demo2.com</TextComponent>
        </FooterColumn>
        <FooterColumn>
          <FooterLine />
          <TextComponent fontSize="16px">demo1.com</TextComponent>
          <TextComponent fontSize="16px">demo2.com</TextComponent>
        </FooterColumn>
        <FooterColumn>
          <FooterLine />
          <TextComponent fontSize="16px">demo1.com</TextComponent>
          <TextComponent fontSize="16px">demo2.com</TextComponent>
        </FooterColumn>
      </FooterContainer>
    </PageWrapper>
  );  
}