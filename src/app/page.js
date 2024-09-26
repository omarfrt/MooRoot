"use client"
import Image from "next/image";
import styles from "./page.module.css";
import Styled from "styled-components";
import moorootSvg from "./mooroot.svg";
import studioSvg from "./studio.svg";
//LOGO
const LogoContainer = Styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 30px;
 
`;

const MoorootLogo = Styled(Image)`
  width: 198px;
  height: 36px;
`;
const StudioLogo = Styled(Image)`
  width: 44px;
  height: 13px;
`;
//LINE
const HorizontalLine = Styled.div`
  width: 100%;
  height: 3px;
  background-color: black;
`;
//COLUMN
const ColumnContainer = Styled.div`
display: flex;
justify-content: space-between;
align-items: left;
margin-top: 4px;  
margin-bottom: 10px;
`
//First column
const NameComponent = Styled.div`
  font-family: 'Space Grotesk', sans-serif;
  font-weight: ${props => props.fontWeight || 'bold'};
  font-size: ${props => props.fontSize || '40px'};
  text-align: left;
  margin-top: 0px;
`;
//Second column
const AddressContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 230px;
  text-align: left;
  
`;
const AddressComponent = Styled.div`
  font-family: 'Space Grotesk', sans-serif;
  font-weight: ${props => props.fontWeight || 'bold'};
  font-size: ${props => props.fontSize || '24px'};
  text-align: left;
  
  
`;
//third column
const WebsiteContainer = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
  width: 311px;
  height: 62px;
  text-align: left;
  
`;
const WebsiteComponent = Styled.div`
  font-family: 'Space Grotesk', sans-serif;
  font-weight: ${props => props.fontWeight || 'bold'};
  font-size: ${props => props.fontSize || '24px'};
   text-align: left;
   width: 311px;
  height: 62px;
`;

const ThirdColumn = Styled.div`
  display: flex;
  flex-direction: column;
  align-items: left;
 
  text-align: left;
`;

export default function Home() {
  return (
    <>
    <LogoContainer >
      <MoorootLogo src={moorootSvg} alt="mooroot" />
      <StudioLogo src={studioSvg} alt="studio" />
    </LogoContainer>
    <HorizontalLine />
    <ColumnContainer>
      <NameComponent>Omar Fertat</NameComponent>
    <AddressContainer>
      <AddressComponent>Tangier,</AddressComponent>
    <AddressComponent> Morocco</AddressComponent>
    </AddressContainer>
    <WebsiteContainer>
      <WebsiteComponent>omarfertat.com,</WebsiteComponent>
      <WebsiteComponent>omarfertat96@gmail.com</WebsiteComponent>
    </WebsiteContainer>
    </ColumnContainer>
    {/* //second column */}
    <HorizontalLine />
    <ColumnContainer>
      <AddressContainer>
        <AddressComponent fontWeight="medium" fontSize="24px" >Full Stack /</AddressComponent>
        <AddressComponent fontWeight="medium" fontSize="24px" >Creative Developer</AddressComponent>
      </AddressContainer>
      <AddressContainer>
        <AddressComponent fontWeight="medium" fontSize="24px" >ReactJs, NextJs,</AddressComponent>
      <AddressComponent fontWeight="medium" fontSize="24px" > R3F</AddressComponent>
    </AddressContainer>
    <WebsiteContainer>
      <WebsiteComponent fontWeight="medium" fontSize="24px" >NodeJs, Express,</WebsiteComponent>
      <WebsiteComponent fontWeight="medium" fontSize="24px" >MongoDB</WebsiteComponent>
    </WebsiteContainer>
    </ColumnContainer>
    {/* //third column */}
    <HorizontalLine />
    <ColumnContainer>
    <AddressComponent fontWeight="medium" fontSize="24px" >MexiqueBookShop.com -2022</AddressComponent>
    <AddressComponent fontWeight="medium" fontSize="24px" >Homylius.lu -2023</AddressComponent>
    <WebsiteComponent fontWeight="medium" fontSize="24px" >MooRoot.com -?</WebsiteComponent>
     
    </ColumnContainer>
    </>
  );  
}
