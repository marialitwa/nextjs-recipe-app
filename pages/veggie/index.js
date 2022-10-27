import Image from "next/image";

export default function Veggie() {
  return (
    <>
      <h1>Veggie Page</h1>
      <p>Veggie Menu</p>;
      <Background>
        <Image
          src="/images/pizza-photo-by-laure-noverraz.jpg"
          alt="Leckere
      Pizza"
          width={2400}
          height={1800}
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
