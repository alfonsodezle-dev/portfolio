const g = x => document.getElementById(x); 
const c = x => document.createElement(x);

// Datos de los proyectos
const projects = [
  {
    title: "Gestor de Tareas",
    description: "Aplicación CRUD con persistencia en localStorage.",
    technologies: ["HTML", "CSS", "JavaScript"]
  },
  {
    title: "App del Clima",
    description: "Consumo de API externa y renderizado dinámico.",
    technologies: ["JavaScript", "Fetch API"]
  }
];

// Contenedor donde se renderizan los proyectos
const projectsContainer = g("contenedorProyectos");

// Renderizado de proyectos
projects.forEach((project) => {
  // Crear tarjeta
  const article = c("article");
  article.classList.add("project-card");

  // Título
  const title = c("h3");
  title.textContent = project.title;

  // Descripción
  const description = c("p");
  description.textContent = project.description;

  // Tecnologías
  const technologies = c("span");
  technologies.textContent = project.technologies.join(" · ");

  // Ensamblar tarjeta
  article.append(title, description, technologies);

  //Enlace a proyecto Gestor de Tareas
  if (project.title === "Gestor de Tareas") {
    article.style.cursor = "pointer"; // cambiar cursor para indicar clicable
    article.addEventListener("click", () => {
      window.open("https://alfonsodezle-dev.github.io/gestor-de-tareas/", "_blank");
    });
  }

  // Insertar en el DOM
  projectsContainer.appendChild(article);
});

//modo oscuro
const toggleButton = g("dark-mode-toggle");
const body = document.body;

toggleButton.addEventListener("click", () => {
  body.classList.toggle("dark-mode");
  toggleButton.textContent = body.classList.contains("dark-mode") ? "Modo Claro" : "Modo Oscuro";

});
