import Image from "next/image";
import styled from "styled-components";

export default function Dessert() {
  return (
    <>
      <h1>Dessert Page</h1>
      <p>Dessert Menu</p>

      <Background>
        <Image
          src="https://unsplash.com/photos/surQ2mkZNxw/download?ixid=MnwxMjA3fDB8MXxzZWFyY2h8Mzd8fGRlc3NlcnR8ZW58MHwwfHx8MTY1OTMzNzk1NQ&force=true&w=2400"
          alt="Superleckerer Kuchen"
          width={2400}
          height={1599}
        />
      </Background>
    </>
  );
}

const Background = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  overflow-y: hidden;
  top: 0;
  left: 0;
  z-index: -10;
  @media (max-width: 600px) {
    display: none;
  }
`;
