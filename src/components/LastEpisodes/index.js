import { Title, Desc, MoreInfs, TextInsideIcon } from "@styles/globalStyles";
import HyperCard from "../HyperCard/hyperCard";
import { Icon } from "@styles/globalStyles";
import {
  Content,
  ListPodcasts,
  Background,
  Block,
  CardAndText,
  TextsDivEp,
  IconAndButtons,
  ButtonsEp,
  ButtonSeeAll,
  LeftArrow,
  RightArrow,
  Dots,
  LittleDots,
  TextBox,
  OverlayDiv,
} from "./styles";
import { useRouter } from "next/router";
import Slider from "react-slick";
import React, { useEffect, useState } from "react";
import { ControlWithCircle } from "@icon/ControlWithCircle";
import { Control } from "@icon/Control";
import { TitleInsideComponent } from "@styles/globalStyles";
import { ConnectContent } from "src/ConfigContent";

function SamplePrevArrow(props) {
  const { className, onClick } = props;
  return (
    <LeftArrow
      className={className}
      src="./icon/blueArrowLeft.svg"
      onClick={onClick}
    />
  );
}

function SampleNextArrow(props) {
  const { className, onClick } = props;
  return (
    <RightArrow
      className={className}
      src="./icon/purpleArrowRight.svg"
      onClick={onClick}
    />
  );
}

export default function LastEpisodes() {
  const [all, setAll] = useState([]);

  useEffect(() => {
    async function FetchMyApi() {
      let items = await ConnectContent();
      let allContent = await items.filter(
        (x) => x.sys.contentType.sys.id == "podcast"
      );
      setAll(allContent.reverse());
    }
    FetchMyApi();
  }, []);

  const router = useRouter();

  const handleClick = (e) => {
    e.preventDefault();
    router.push("/podcasts");
  };

  const slider = ".slider";

  const settings = {
    appendDots: (dots) => (
      <Dots>
        <ul
          style={{
            margin: "0px",
            width: "100%",
            display: "flex",
            paddingInlineStart: "0",
          }}
        >
          {dots}
        </ul>
      </Dots>
    ),
    customPaging: (pagi, i, dots) => <LittleDots />,
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    // autoplay: true,
    // autoplaySpeed: 4000,
    responsive: [
      {
        breakpoint: 480,
        settings: {
          rows: 1,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: slider.length > 3 ? true : false,
        },
      },
    ],
  };

  return (
    <Content>
      <TextBox>
        <Title margin="0">Episódios Recentes</Title>
        <Desc margin="0">Acompanhe nosso podcast e seus episódios</Desc>
      </TextBox>
      <ListPodcasts>
        <Slider {...settings}>
          {all.slice(0, 5).map((res, index) => {
            return (
              <React.Fragment key={index}>
                <Background
                  image={`url(${res.fields?.bigImage?.fields.file.url})`}
                >
                  <OverlayDiv>
                    <Block>
                      <CardAndText>
                        <a href={`/podcasts/${res.fields?.pathUrl}`}>
                          <HyperCard
                            hyperCardImg={`url(${res.fields?.littleImage?.fields?.file.url})`}
                            width={"253px"}
                            height={"253px"}
                            widthTablet="337px"
                            heightTablet="337px"
                            widthLaptop={"253px"}
                            heightLaptop={"253px"}
                            position={"relative"}
                            top={"-20px"}
                            widthLaptopLarge={"337px"}
                            heightLaptopLarge={"337px"}
                          />
                        </a>
                        <TextsDivEp>
                          <a href={`/podcasts/${res.fields?.pathUrl}`}>
                            <TitleInsideComponent
                              number={res.fields?.number}
                              title={res.fields?.title}
                              // width="240px"
                              // widthTablet="310px"
                              fontSize="2.8rem"
                              fontSizeTablet="3.8rem"
                              cursor="pointer"
                              widthCircle="8px"
                              heightCircle="8px"
                              widthCircleTablet="10px"
                              heightCircleTablet="10px"
                              maxChars={14}
                            />
                          </a>
                          <MoreInfs
                            textOverflow="ellipsis"
                            overflow="hidden"
                            display="-webkit-box !important"
                            wbkLineClamp={4}
                            wbkLineClampLaptop={5}
                            wbkBoxOrient="vertical"
                            whiteSpace="normal"
                            fontSize="1.8rem"
                            fontSizeLaptopLarge="2.5rem"
                            width="694px"
                          >
                            {res.fields.description}
                          </MoreInfs>
                        </TextsDivEp>
                      </CardAndText>
                      <IconAndButtons
                        gap="8px"
                        widthLaptop="580px"
                        heightLaptop="auto"
                        flexDLaptop="row"
                        margin="25px 0 90px 0"
                      >
                        <Icon
                          height="40px"
                          widthIconLaptop="53px"
                          heightIconLaptop="53px"
                        >
                          <Control className="control" />
                          <TextInsideIcon>
                            Assuntos desse episódio
                          </TextInsideIcon>
                          <ControlWithCircle className="controlWithCircle" />
                        </Icon>
                        {res.fields.gameTags?.map((res, index) => (
                          <ButtonsEp
                            key={index}
                            width="auto"
                            height="40px"
                            widthLaptop="auto"
                            heightLaptop="49px"
                            fontSizeLaptop="2rem"
                          >
                            {res}
                          </ButtonsEp>
                        ))}
                      </IconAndButtons>
                    </Block>
                  </OverlayDiv>
                </Background>
              </React.Fragment>
            );
          })}
        </Slider>
      </ListPodcasts>
      <ButtonSeeAll onClick={handleClick}>Ver todos</ButtonSeeAll>
    </Content>
  );
}
