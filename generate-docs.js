import axios from "axios";
import fs from "fs/promises";
import puppeteer from "puppeteer";

const swaggerFilePath = "swagger/ADAD_Backend_API.json"; // Caminho para seu Swagger JSON
const outputMarkdown = "swagger/API_Documentation.md"; // Arquivo Markdown
const outputPDF = "swagger/API_Documentation.pdf"; // Arquivo PDF

(async () => {
    try {
        // Carregar o arquivo Swagger JSON
        const swaggerData = JSON.parse(await fs.readFile(swaggerFilePath, "utf8"));

        // Base URL da API
        const baseUrl = `${swaggerData.schemes[0]}://${swaggerData.host}`;

        // Lista para armazenar os detalhes dos endpoints
        const documentation = [`# ${swaggerData.info.title}`, swaggerData.info.description || ""];

        // Iterar pelos endpoints e fazer as requisições
        for (const [path, methods] of Object.entries(swaggerData.paths)) {
            for (const [method, details] of Object.entries(methods)) {
                const url = baseUrl + path;
                documentation.push(`\n## ${method.toUpperCase()} ${url}`);
                documentation.push(`**Summary**: ${details.summary || "N/A"}`);
                documentation.push(`**Description**: ${details.description || "N/A"}`);

                // Adicionar parâmetros
                if (details.parameters) {
                    documentation.push("\n### Parameters:");
                    details.parameters.forEach((param) => {
                        documentation.push(`- **${param.name}** (${param.in}): ${param.description || "N/A"}`);
                    });
                }

                // Fazer a requisição e capturar o response
                try {
                    const response = await axios({
                        method,
                        url,
                        params: details.parameters
                            ?.filter((param) => param.in === "query")
                            .reduce((acc, param) => {
                                acc[param.name] = param.default || "";
                                return acc;
                            }, {}),
                        data: details.parameters?.find((param) => param.in === "body")?.schema?.default || undefined,
                    });

                    documentation.push("\n### Response:");
                    documentation.push(`\`\`\`json\n${JSON.stringify(response.data, null, 2)}\n\`\`\``);
                } catch (error) {
                    documentation.push("\n### Response: Error");
                    documentation.push(`\`\`\`json\n${JSON.stringify(error.response?.data || error.message, null, 2)}\n\`\`\``);
                }
            }
        }

        // Salvar a documentação em Markdown
        await fs.writeFile(outputMarkdown, documentation.join("\n"), "utf8");

        console.log("Markdown documentation generated!");

        // Converter o Markdown para PDF
        const browser = await puppeteer.launch();
        const page = await browser.newPage();

        // Renderizar o Markdown em HTML para PDF
        const markdownHtml = `
      <html>
      <head><title>API Documentation</title></head>
      <body>
        ${documentation.join("<br>")}
      </body>
      </html>`;
        await page.setContent(markdownHtml, { waitUntil: "domcontentloaded" });
        await page.pdf({ path: outputPDF, format: "A4" });

        await browser.close();

        console.log("PDF documentation generated!");
    } catch (error) {
        console.error("Error generating documentation:", error.message);
    }
})();
