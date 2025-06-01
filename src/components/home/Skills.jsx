import './Skills.css';

export function Skills() {
    return (
        <div className="skills">
            <div className="grid">
            <div className="skills_t" id="skills">
                    <p>Skills</p>
                </div>
                <div className="big_c" id='html'>
                    <p className="top">HTML</p>
                    <p className="bottom">100%</p>
                </div>
                <div className="small_c" id='figma'>
                    <p className="top">Figma</p>
                    <p className="bottom">95%</p>
                </div>
                <div className="big_c" id='procreate'>
                    <p className="top">Procreate</p>
                    <p className="bottom">100%</p>
                </div>
                <div className="small_c" id='js'>
                    <p className="top">Javascript</p>
                    <p className="bottom">95%</p>
                </div>
                <div className="small_c" id='excel'>
                    <p className="top">Excel</p>
                    <p className="bottom">95%</p>
                </div>
                <div className="big_c" id='css'>
                    <p className="top">CSS</p>
                    <p className="bottom">100%</p>
                </div>
                <div className="big_c" id='canva'>
                    <p className="top">Canva</p>
                    <p className="bottom">100%</p>
                </div>
                <div className="small_c" id='react'>
                    <p className="top">React</p>
                    <p className="bottom">95%</p>
                </div>
            </div>
        </div>
    );
}

export default Skills;