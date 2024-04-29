import Content1 from "../../content/content1";
import NoGapSBS from "../../sbs/nogap";

export default function About2Section2() {
  const text =
    "Modern yoga consists of a range of techniques including asanas (postures) and meditation derived from some of the philosophies, teachings and practices of the Yoga school.Some versions of modern yoga contain reworkings of the ancient spiritual tradition, and practices vary from wholly secular, for exercise and relaxation, through.";
  return (
    <NoGapSBS
      left={
        <Content1
          image={"about2/section4-icon.png"}
          subheading={"What keeps pushing us"}
          heading={"Clear Mind & Body"}
          text={text}
        />
      }
      right={<img src="about2/section2.jpg" />}
    />
  );
}
