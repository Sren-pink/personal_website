import Skills from "../components/home/Skills";
import Aboutme from "../components/home/AboutMe";
import ImageCarousel from "../components/home/ImageCarousel";
import "../components/home/ImageCarousel.css"; // <--- this must be therenpm

export function Home() {

  const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="home">
      <Aboutme onContactClick={scrollToFooter}/>
      <Skills />
      <ImageCarousel />
    </div>
  );
}

export default Home;
