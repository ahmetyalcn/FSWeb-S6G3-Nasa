
import  CarouselCard  from "./CarouselCard";
import styled from "styled-components";
const CardDiv = styled.div`
width: 100%;
background: url(https://w0.peakpx.com/wallpaper/56/359/HD-wallpaper-nasa-logo-sky-with-stars-blue-background-nasa-national-aeronautics-and-space-administration-nasa-emblem.jpg);
padding-top: 5vh;
`;
const Iframe = styled.iframe`
width: 80%;
margin: 0 auto;
height: 40vh;
border-radius: 25px;
`;
const Wrapper = styled.div`
width: 80%;
margin: 10px auto;
padding: 10px;
color: black;
background-color: white;
opacity: 0.7;
border-radius: 25px;
`;
const Screen = styled.img`
width:80%;
margin: 0 auto;
max-height: 50vh;
border-radius: 25px;
`;

const Card = ({arr,data}) => {
console.log(data)
  return (
    <CardDiv>
      {data.media_type=== "image" ?  <Screen src={data.url} alt={data.title} /> : <Iframe title={data.id} src={data.url} frameborder="0"></Iframe>
      }
       
        <Wrapper>
        <h2>{data.title}</h2>
            <p>{data.copyright}</p>
            <p>{data.date}</p>
            <p>{data.explanation}</p>
        </Wrapper>
        <CarouselCard items={arr} />
    </CardDiv>
  )
}

export default Card; 