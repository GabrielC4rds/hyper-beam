import HyperCard from "../HyperCard/hyperCard";
import {
  Content,
  Banner,
  FeaturedPodcastInfo,
  PlayButton,
  PodcastTheme,
  BigImg,
  ListHomeBanner,
  HyperCardGroup,
  HyperText,
  LeftArrow,
  RightArrow,
  DivToCentralizeListHomeBanner,
  OverlayDiv
} from "./styles";
import Slider from "react-slick";
import { useRouter } from "next/router";
import { TitleInsideComponent } from "@styles/globalStyles";
import React, { useEffect, useRef } from "react";
import { ConnectContent } from "../../ConfigContent";
import { useState } from "react";
import { TitleInsideComponentGray } from "../Header/styles";

// function SamplePrevArrow(props) {
//   const { className, onClick } = props;
//   return (
//     <LeftArrow
//       className={className}
//       src="./icon/blueArrowLeft.svg"
//       onClick={onClick}
//     />
//   );
// }

// function SampleNextArrow(props) {
//   const { className, onClick } = props;
//   return (
//     <RightArrow
//       className={className}
//       src="./icon/purpleArrowRight.svg"
//       onClick={onClick}
//     />
//   );
// }

export default function HomeBanner() {
  const [all, setAll] = useState([]);
  const sliderRef = useRef();
  const [activeSlide, setActiveSlide] = useState(0);
  const [lastPodcast, setLastPodcast] = useState([]);
  useEffect(() => {
    async function FetchMyApi() {
      let items = await ConnectContent();
      let allContent = await items.filter(
        (x) => x.sys.contentType.sys.id == "podcast"
      );
      setLastPodcast(allContent[allContent.length - 1]);
      setAll(allContent.reverse());
    }
    // sliderRef.current.slickGoTo(5)
    FetchMyApi();
  }, []);

  useEffect(() => {
    if (window.innerWidth > 1100 && activeSlide > 5) {
      sliderRef.current.slickGoTo(3)
    }
  }, [activeSlide, sliderRef.current])

  var slider = ".slider";

  var settings = {
    dots: false,
    infinite: false,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    initialSlide: 0,
    mobileFirst: true,
    // nextArrow: <SampleNextArrow />,
    // prevArrow: <SamplePrevArrow />,
    slickGoTo: 5,
    transformEnabled: false,
    responsive: [
      {
        breakpoint: 1365,
        settings: {
          // initialSlide: 0,
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: slider.length > 1 ? true : false,
        },
      },
      {
        breakpoint: 1100,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 6,
          infinite: slider.length > 1 ? true : false,
        },
      },
      {
        breakpoint: 767,
        settings: {
          initialSlide: 6,
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: slider.length > 1 ? true : false,
        },
      },
      {
        breakpoint: 568,
        settings: {
          initialSlide: 5,
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          slickGoTo: 5,
        },
      },
    ],
  };

  const router = useRouter();

  const handleClick = (link) => {
    router.push(`/podcasts/${link}`);
  };

  return (
    <Content>
      <Banner image={`url(${lastPodcast.fields?.bigImage?.fields.file.url})`}>
          <OverlayDiv>
        <FeaturedPodcastInfo>
          <TitleInsideComponent
            width="210px"
            widthTablet="250px"
            fontSize="2.5rem"
            fontSizeTablet="3rem"
            margin="12px 0"
            widthCircle="7px"
            heightCircle="7px"
            widthCircleTablet="8px"
            heightCircleTablet="8px"
            number={lastPodcast.fields?.number}
            />
          <PodcastTheme>{lastPodcast.fields?.title}</PodcastTheme>
          <PlayButton onClick={() => handleClick(lastPodcast.fields?.pathUrl)}>
            Play
          </PlayButton>
        </FeaturedPodcastInfo>
        <BigImg
          image={`url(${lastPodcast.fields?.detachedImage?.fields.file.url})`}
        />

        <DivToCentralizeListHomeBanner>
          <ListHomeBanner>
            <Slider {...settings}>
              {all.slice(1, 10).map((res, index) => {
                return (
                  // eslint-disable-next-line react/jsx-key
                  // <React.Fragment key={index}>
                    <HyperCardGroup
                    key={index}
                      onClick={() => handleClick(res.fields?.pathUrl)}
                    >
                      <HyperCard
                        hyperCardImg={`url(${res.fields?.littleImage?.fields?.file.url})`}
                        width={"196px"}
                        height={"196px"}
                        widthTablet="168px"
                        heightTablet="168px"
                        widthLaptop={"196px"}
                        heightLaptop={"196px"}
                      />
                      <TitleInsideComponentGray
                        width="145px"
                        widthTablet="148px"
                        widthCircle="6px"
                        heightCircle="6px"
                        number={res.fields?.number}
                      />
                    </HyperCardGroup>
                  // </React.Fragment>
                );
              })}
            </Slider>
          </ListHomeBanner>
        </DivToCentralizeListHomeBanner>
        </OverlayDiv>
      </Banner>
    </Content>
  );
}
