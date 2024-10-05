<div align="center">
  <img src="https://github.com/carolprotasio/cypress-actions/raw/main/.github/github_cy.ico" alt="web" width="400"/>
</div>

# Cypress Actions - Pipeline de Testes Contínuos com GitHub Actions

Este repositório faz parte do curso da QA Xperience na Udemy, que aborda a construção de pipelines de testes contínuos em Cypress usando o GitHub Actions. O objetivo deste projeto é criar um workflow de testes contínuos, melhorando a eficiência dos testes de regressão e integrando ferramentas como o Cypress Dashboard e Tesults para geração de relatórios, screenshots e métricas de execução.

## 🚀 Objetivo do Projeto

O projeto visa automatizar a execução dos testes de regressão através do GitHub Actions. Com isso, os testes não precisam ser executados localmente, facilitando a detecção precoce de defeitos no ciclo de desenvolvimento, além de aumentar a confiabilidade do código. 

Ao final, o workflow implementado permitirá:

- **Execução automática** de testes contínuos a cada alteração no código.
- **Geração de relatórios** detalhados dos testes através do Cypress Dashboard e Tesults.
- **Armazenamento de evidências** como screenshots e métricas para facilitar a análise e rastreamento de falhas.        

## 🛠️ Tecnologias Utilizadas

- **Cypress**: Framework de testes end-to-end.
- **GitHub Actions**: Serviço de integração contínua para automatizar pipelines de testes.
- **Cypress Dashboard**: Ferramenta para visualização e armazenamento de resultados de testes.
- **Tesults**: Plataforma para armazenar resultados de testes, evidências e métricas.
- **Git**: Versionamento de código.

## 📊 Estrutura do Workflow

O workflow configurado no GitHub Actions realiza as seguintes etapas:

1. **Instalação de Dependências**: Instala o Cypress e outras dependências do projeto.
2. **Execução dos Testes**: Roda os testes automatizados em um ambiente de CI.
3. **Coleta de Evidências**: Captura screenshots e logs dos testes.
4. **Integração com Cypress Dashboard e Tesults**: Envia os resultados para o Cypress Dashboard e Tesults para análise.

## 🔧 Funcionalidades

- **Automatização de testes de regressão**: Garantindo que o código continue funcionando corretamente após cada alteração.
- **Integração com Cypress Dashboard e Tesults**: Geração de históricos detalhados sobre a execução dos testes, incluindo métricas e relatórios.
- **GitHub Actions Workflow**: Pipelines automatizados para execução de testes em ambiente de CI/CD.

## 💻 Como Executar Localmente

Para executar os testes localmente, siga os passos abaixo:

1. Clone o repositório:
    ```bash
    git clone https://github.com/carolprotasio/cypress-actions.git
    ```
   
2. Instale as dependências:
    ```bash
    npm install
    ```

3. Execute os testes:
    ```bash
    npx cypress run
    ```

## ⚙️ Como Funciona o Pipeline

O pipeline de testes contínuos é disparado sempre que há uma alteração no código, seja em um push ou pull request. O workflow do GitHub Actions é responsável por:

- Instalar o Cypress e dependências necessárias.
- Executar os testes de regressão.
- Enviar relatórios e evidências para o Cypress Dashboard e Tesults.

### 📋 Configuração do Workflow

O arquivo `.github/workflows/cypress.yml` define o pipeline de CI para este projeto. Abaixo está um exemplo da configuração:

```yaml
name: Cypress Tests

on: [push, pull_request]

jobs:
  cypress-run:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v2
      - name: Setup Node.js
        uses: actions/setup-node@v2
        with:
          node-version: '14'
      - run: npm install
      - run: npx cypress run
      - name: Cypress Dashboard
        run: npx cypress run --record --key YOUR_CYPRESS_DASHBOARD_KEY
      - name: Tesults Upload
        run: npx tesults uploader -target YOUR_TESULTS_TOKEN
```

### 📈 Cypress Dashboard e Tesults
Os resultados dos testes podem ser visualizados diretamente no Cypress Dashboard e no Tesults. Esses painéis oferecem uma visão detalhada de cada execução de teste, incluindo:

* Relatórios de sucesso/falha.
* Screenshots e vídeos dos testes.
* Métricas como tempo de execução e histórico de testes.

### ✅ Conclusão do Projeto:
O projeto demonstrou a eficiência dos pipelines de testes contínuos ao integrar Cypress, GitHub Actions, Cypress Dashboard e Tesults. A automação dos testes de regressão garante uma maior confiabilidade e facilita a identificação de problemas no ciclo de desenvolvimento, promovendo uma entrega de software mais ágil e com qualidade. A experiência de configurar workflows automatizados também amplia as habilidades DevOps para analistas de testes, contribuindo para o crescimento profissional na área.

<img src="https://github.com/carolprotasio/cypress-actions/blob/main/.github/github_actions.png" alt="web" width="1000"/>
