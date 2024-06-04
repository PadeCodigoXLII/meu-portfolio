document.addEventListener("DOMContentLoaded", function() {
    // Função para carregar projetos dinamicamente
    function loadProjects() {
        const projectsContainer = document.querySelector(".project-list");

        // Array de objetos de projetos
        const projects = [
            {
                title: "Aplicação de Gestão de Estoque em Java",
                description: "Desenvolvimento de uma aplicação em Java usando Spring Boot e Hibernate para gestão de estoque, com funcionalidades de cadastro, atualização, remoção e visualização de produtos.",
                link: "https://github.com/allancaldeira/projeto-java"
            },
            {
                title: "API RESTful em Python",
                description: "Criação de uma API RESTful utilizando Django Rest Framework, permitindo operações CRUD em uma base de dados de produtos.",
                link: "https://github.com/allancaldeira/projeto-django"
            },
            {
                title: "Aplicação Web com Flask",
                description: "Desenvolvimento de uma aplicação web simples em Python utilizando Flask, com funcionalidades de login, cadastro e gerenciamento de usuários.",
                link: "https://github.com/allancaldeira/projeto-flask"
            }
        ];

        // Criar elementos HTML para cada projeto e adicioná-los ao container
        projects.forEach(function(project) {
            const projectItem = document.createElement("div");
            projectItem.classList.add("project-item");

            const projectTitle = document.createElement("h3");
            projectTitle.textContent = project.title;

            const projectDescription = document.createElement("p");
            projectDescription.textContent = project.description;

            const projectLink = document.createElement("a");
            projectLink.textContent = "Ver Projeto";
            projectLink.href = project.link;
            projectLink.classList.add("btn");

            projectItem.appendChild(projectTitle);
            projectItem            .appendChild(projectDescription);
            projectItem.appendChild(projectLink);

            projectsContainer.appendChild(projectItem);
        });
    }

    // Adicione um ouvinte de eventos para o envio do formulário de contato
    const contactForm = document.getElementById("contact-form");

    contactForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        // Simples validação dos campos (pode ser melhorado)
        if (name && email && message) {
            // Enviar dados do formulário para o servidor (pode ser substituído por uma solicitação AJAX)
            console.log("Nome:", name);
            console.log("Email:", email);
            console.log("Mensagem:", message);

            // Exibir uma mensagem de sucesso para o usuário
            alert("Mensagem enviada com sucesso!");
            // Ou você pode redirecionar o usuário para outra página após o envio bem-sucedido
            // window.location.href = "pagina-de-agradecimento.html";
        } else {
            alert("Por favor, preencha todos os campos do formulário.");
        }
    });

    // Carregar projetos quando a página for carregada
    loadProjects();
});

