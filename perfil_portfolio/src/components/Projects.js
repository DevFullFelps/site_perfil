import './Projects.css';

const projectsData = [
    {
        id: 1,
        title: "Formulário Cadastro",
        description: "Sistema Web",
        image: "../pasta_projetos/p_formulario.png"
    },
    {
        id: 2,
        title: "CETI Commerce",
        description: "Sistema Web",
        image: "../pasta_projetos/p_ceti.png"
    },
    {
        id: 3,
        title: "Meu Projeto 3",
        description: "Descrição breve do projeto 3.",
        image: "url_da_imagem_3"
    },
];

const Projects = () => {
    return (
        <div className="projects-container" id="projects">
            <div className="projects-overlay"></div>
            <div className="projects-content">
                <h1 className="projects-title">Projects</h1>
                <div className="projects-hidden">
                    <h1 className="projects-hidden-title">PROJECTS</h1>
                </div>
            </div>
            <div className="projects-grid">
                {projectsData.map((project) => (
                    <div className="project-card" key={project.id}>
                        <img src={project.image} alt={project.title} />
                        <div className="project-card-content">
                            <h3 className="project-card-title">{project.title}</h3>
                            <p className="project-card-description">{project.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;
