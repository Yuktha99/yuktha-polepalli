import { rank_certificate, spot_award_2022, spot_award_may_2022, top_impactor_preview } from "../../constants/constants";
import { GoldMedalIcon, ImpactIcon, SpotAward } from "../../images";
import { SpotAwardMay22Photo, SpotAwardPhoto, TopImpactorAward, VTUGoldMedalPhoto } from "./photos";

export const achievementsData = [
  {
    image: GoldMedalIcon,
    year: "2016-2020",
    header: "University First Rank and Gold Medal",
    subheader: "Visveswaraya Technological University, Belgavi",
    description:
      "Received 4 Gold medals for securing university first rank in Bachelor of Engineering(BE) in Information Science and Engineering(ISE).",
    photo: VTUGoldMedalPhoto,
    video: "https://www.youtube.com/embed/9GYlExvNI8I",
    certificate: rank_certificate
  },
  {
    image: ImpactIcon,
    year: "July - Dec 2021",
    header: "Top Impactor Award",
    subheader: "Deloitte",
    description: "I received the Top Impactor Award for consistant performance and accomplishment of goals above and beyond",
    photo: TopImpactorAward,
    photoHeight: '250px',
    certificate: top_impactor_preview
  },
  {
    image: SpotAward,
    year: "May 2022",
    header: "Spot Award",
    subheader: "Deloitte",
    description: "I received the Spot Award in recognition of my contributions to the success of U.S. firms. This is an Excellence Award.",
    photo: SpotAwardMay22Photo,
    photoHeight: '250px',
    certificate: spot_award_may_2022
  },
  {
    image: SpotAward,
    year: "December 2022",
    header: "Spot Award",
    subheader: "Deloitte",
    description: "I received the Spot Award in recognition of my contributions to the success of U.S. firms. This is an Excellence Award.",
    photo: SpotAwardPhoto,
    photoHeight: '250px',
    certificate: spot_award_2022
  },
];
