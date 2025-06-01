import AboutmeComponent from "../components/home/AboutMe"
import SkillsComponent from "../components/home/Skills"

export function Aboutme() {

    const scrollToFooter = () => {
    const footer = document.getElementById("footer");
    if (footer) {
      footer.scrollIntoView({ behavior: "smooth" });
    }
    };

    return (
        <div className="aboutme">
            <AboutmeComponent onContactClick={scrollToFooter}/>
            <SkillsComponent />
        </div>
    )
}

export default Aboutme