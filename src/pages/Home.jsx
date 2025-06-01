import Skills from "../components/home/Skills";
import Aboutme from "../components/home/AboutMe";

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
    </div>
  );
}

export default Home;
