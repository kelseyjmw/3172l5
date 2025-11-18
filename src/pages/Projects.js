import ProjectList from "../components/ProjectList";

export default function Projects() {
  return (
    <section>
      <h1 className="mb-3">Projects</h1>
      <p>
        Have a look below at some of the projects I have worked on!
      </p>

    <div>
        <ProjectList />
    </div>
    </section>
  );
}