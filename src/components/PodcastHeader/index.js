import { Content, BackBanner, ItensBanner, BannerInfos, Topic } from "./styles";
import HyperCard from "../../components/HyperCard/hyperCard";
import { TitleInsideComponent, MoreInfs } from "@styles/globalStyles";
import {
  IconAndButtons,
  ButtonsEp,
} from "../../components/LastEpisodes/styles";
import { Control } from "@icon/IconComTag";

export default function PodcastHeader(props) {
  return (
    <Content>
      <BackBanner>
        <ItensBanner>
          <HyperCard
            width={"275px"}
            height={"275px"}
            widthLaptop={"340px"}
            heightLaptop={"340px"}
          />
          <BannerInfos>
            <TitleInsideComponent number={props.number} />
            <IconAndButtons
              height="150px"
              margin="0"
              alignItems="center"
              widthLaptop="90%"
              heightLaptop="182px"
              heightLaptopLarge="100px"
              flexDLaptopLarge="row"
            >
              <Control />
              {props.gameTags[0]?.map((res) => (
                <ButtonsEp
                  key=""
                  widthLaptop="auto"
                  width="auto"
                  heightLaptop="49px"
                  fontSizeLaptop="2rem"
                >
                  {res}
                </ButtonsEp>
              ))}
            </IconAndButtons>
          </BannerInfos>
        </ItensBanner>
      </BackBanner>
      <Topic>
        <MoreInfs fontSize="1.5rem">
          {props.desc}
        </MoreInfs>
      </Topic>
    </Content>
  );
}