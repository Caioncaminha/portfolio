# Portfólio Pessoal de Caio Caminha

Este é o repositório do meu site de portfólio pessoal. Eu o criei para mostrar um pouco sobre mim, meus projetos e minha trajetória profissional e acadêmica.

## Visualização

Você pode ver o site no ar pelo link https://caio-caminha.vercel.app/ ou rodando em sua máquina.

## Recursos Principais

O site foi dividido em algumas seções principais para facilitar a navegação:

- **Sobre Mim:** Uma breve apresentação sobre meus interesses, foco de estudo e habilidades técnicas.
- **Experiência:** Uma linha do tempo interativa onde mostro minha experiência profissional e projetos acadêmicos relevantes.
- **Projetos:** Uma galeria com os projetos que desenvolvi. Você pode clicar em cada um para ver mais detalhes, imagens e o link para o código.
- **Formação:** Detalhes sobre minha formação acadêmica.
- **Contato:** Um formulário para quem quiser me enviar uma mensagem diretamente.

Além disso, o site também conta com:

- **Tradução:** Você pode alternar o idioma entre Português e Inglês.
- **Modo Claro/Escuro:** Para melhor conforto visual, você pode escolher o tema que preferir.

## O que foi usado?

Para construir este site, usei algumas ferramentas modernas de desenvolvimento web. Explicando de forma simples:

- **React (com TypeScript):** É a "fundação" do site. Pense nele como um conjunto de blocos de montar (componentes) que tornam o site rápido e interativo, quase como um aplicativo de celular. O TypeScript ajuda a encaixar esses blocos da maneira correta, evitando erros.
- **SCSS (Sass):** É o que dá estilo ao site. É uma forma mais organizada e poderosa de escrever o "CSS" (o código que define cores, fontes e layouts).
- **Material-UI (MUI):** É uma biblioteca de "peças" prontas. Em vez de criar botões, ícones e menus do zero, eu uso os modelos prontos e testados do MUI, o que agiliza o desenvolvimento.
- **EmailJS:** É o "carteiro" digital. É um serviço que pega a mensagem digitada no formulário de contato e a envia para o meu email de forma segura.
- **Vite:** É a ferramenta que "constrói" o site. Ele junta todo o código (React, SCSS, etc.) e o transforma em um site rápido e otimizado que seu navegador consegue ler.

## Como rodar este projeto

Se você quiser rodar este projeto na sua própria máquina (precisa ter o Node.js instalado), siga os passos:

1.  **Clone o repositório:**

    ```sh
    git clone https://github.com/Caioncaminha/portfolio.git
    cd portfolio
    ```

2.  **Instale as dependências:**
    (Isso vai baixar todas as "peças" que o projeto precisa para funcionar)

    ```sh
    npm install
    ```

3.  **Rode o projeto:**
    (Isso vai iniciar um servidor local, geralmente em `http://localhost:5173`)

    ```sh
    npm run dev
    ```

## 📄 Licença

Este projeto é distribuído sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes.
