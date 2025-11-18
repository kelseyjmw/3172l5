

function ProjectCard({ project }) {
    return (
        <div className="col col-sm-12 col-md-6 col-lg-3">
            <div className="card shadow" style={{ width: '18rem' }}>
                {project.image && (
                <img src={project.image} className="card-img-top" alt={project.title} />
                )}
                <div className="card-body">
                    <h5 className="card-title">{project.title}</h5>
                    <p className="card-text"><strong>Problem:</strong> {project.problem}</p>
                    <p className="card-text"><strong>Tech Used:</strong> {project.tech}</p>
                    <p className="card-text"><strong>Role:</strong> {project.role}</p>
                    <a href={project.link} className="btn btn-primary" target="_blank" rel="noopener noreferrer">GitHub</a>
                </div>
            </div>
        </div>
    );
}

export default ProjectCard;