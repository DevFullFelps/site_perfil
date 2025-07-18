import { useState } from "react";
import "./Projects.css";

const projectsData = [
  {
    id: 1,
    title: "Formulário Cadastro",
    description: "Web | Front-end",
    image: "/pasta_projetos/p_formulario2.png",
    creator: "Felipe Adriano",
    technologies: "HTML, CSS",
    creationDate: "2025-01-15",
    vercelLink: "https://formulario-cadastro-ten.vercel.app/",
    githubLink: "https://github.com/DevFullFelps/formulario_cadastro",
  },
  {
    id: 2,
    title: "CETI Commerce",
    description: "Web | Front-end",
    image: "/pasta_projetos/p_ceti2.png",
    creator: "Felipe Adriano",
    technologies: "HTML, CSS, JS, React",
    creationDate: "2024-10-15",
    vercelLink: "https://ceti-devfullfelps-projects.vercel.app/",
    githubLink: "https://github.com/DevFullFelps/ceti",
  },
  {
    id: 3,
    title: "Goblin COC",
    description: "Web | Front-end",
    image: "/pasta_projetos/p_goblin2.png",
    creator: "Felipe Adriano",
    technologies: "HTML, CSS",
    creationDate: "2024-05-20",
    vercelLink: "https://goblin-site-tau.vercel.app/",
    githubLink: "https://github.com/DevFullFelps/goblin-site",
  },
  {
    id: 4,
    title: "Lista Tarefas",
    description: "Web | Front-end",
    image: "/pasta_projetos/p_tabela.PNG",
    creator: "Felipe Adriano",
    technologies: "HTML, CSS, JS, Banco de Dados",
    creationDate: "2025-01-30",
    vercelLink: "https://lista-tarefas-xi-lilac.vercel.app/",
    githubLink: "https://github.com/DevFullFelps/lista_tarefas",
  },
  {
    id: 5,
    title: "Projeto Android",
    description: "Web | Front-end",
    image: "/pasta_projetos/p_android.PNG",
    creator: "Felipe Adriano",
    technologies: "HTML e CSS",
    creationDate: "2025-02-19",
    vercelLink: "https://android-project-psi.vercel.app/",
    githubLink: "https://github.com/DevFullFelps/android-project",
  },
  {
    id: 6,
    title: "Projeto Cordel",
    description: "Web | Front-end",
    image: "/pasta_projetos/p_cordel.PNG",
    creator: "Felipe Adriano",
    technologies: "HTML e CSS",
    creationDate: "2025-02-23",
    vercelLink: "https://cordel-moderno-five.vercel.app/",
    githubLink: "http://github.com/DevFullFelps/cordel-moderno",
  },
  {
    id: 7,
    title: "Projeto Pizzaria",
    description: "Web | Front-end",
    image: "/pasta_projetos/p_pizza.PNG",
    creator: "Felipe Adriano",
    technologies: "HTML e CSS / Atualmente, somente para telas maiores",
    creationDate: "2025-07-15",
    vercelLink: "https://tutty-pizza.vercel.app/",
    githubLink: "https://github.com/DevFullFelps/tutty_pizza",
  },
];

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const handleCloseModal = () => {
    setSelectedProject(null);
  };

  return (
    <div className="projects-container" id="projects">
      <div className="projects-content">
        <h1 className="projects-title">Projects</h1>
        <div className="projects-hidden">
          <h1 className="projects-hidden-title">PROJECTS</h1>
        </div>
      </div>

      <div className="projects-grid">
        {projectsData.map((project) => (
          <div
            className="project-card"
            key={project.id}
            onClick={() => setSelectedProject(project)}
          >
            <img src={project.image} alt={project.title} />
            <div className="project-card-content">
              <h3 className="project-card-title">{project.title}</h3>
              <p className="project-card-description">{project.description}</p>
            </div>
          </div>
        ))}
      </div>

      {selectedProject && (
        <div className="project-modal">
          <div
            className="project-modal-overlay"
            onClick={handleCloseModal}
          ></div>
          <div className="project-modal-content">
            <button className="close-button" onClick={handleCloseModal}>
              ×
            </button>
            <h1 className="modal-title">{selectedProject.title}</h1>
            <img
              src={selectedProject.image}
              alt={selectedProject.title}
              className="modal-image"
            />
            <p className="modal-description">{selectedProject.description}</p>
            <div className="modal-details">
              <p>
                <strong>Criador:</strong> {selectedProject.creator}
              </p>
              <p>
                <strong>Tecnologias:</strong> {selectedProject.technologies}
              </p>
              <p>
                <strong>Data de Criação:</strong> {selectedProject.creationDate}
              </p>
              <p>
                <strong>Links:</strong>
                <a
                  href={selectedProject.vercelLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Site
                </a>{" "}
                |
                <a
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Projects;
