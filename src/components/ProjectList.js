
import ProjectCard from "./ProjectCard";
//import sampleImage from "../assets/placeholder.jpg";
import trickster from "../assets/trickster.png";
import jump from "../assets/jump.png";
import oak from "../assets/oak.png";

const projects = [
    {
        id: 1,
        title: "Trickster Website",
        problem: "Create the front end website for an MMORPG private server.",
        tech: "PHP, CSS",
        role: "Front-End Developer",
        image: trickster,
        link: "https://github.com/kelseyjmw/Trickster-Website",
    },
    {
        id: 2,
        title: "Jump Over Mingos",
        problem: "Create a Javascript game with simple hit detection.",
        tech: "JavaScript, HTML, CSS",
        role: "Full-Stack Developer",
        image: jump,
        link: "https://github.com/kelseyjmw/JumpOverMingos",
    },
    {
        id: 3,
        title: "OakDB: Pokemon Database",
        problem: "Provide a UI to search for information about Pokemon using PokeAPI.",
        tech: "JavaScript, HTML, CSS",
        role: "Full-Stack Developer",
        image: oak,
        link: "https://github.com/kelseyjmw/kelseyjmw.github.io",
    }
];

function ProjectList() {
    return (
        <div className="row gx-2 gy-2">
            {projects.map((project) => (
                <ProjectCard key={project.id} project={project} />
            ))}
        </div>
    );
}

export default ProjectList;