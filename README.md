# Evergreen Outdoor Co.

Concept project de portfólio para uma marca fictícia de Landscaping & Outdoor Living em Austin, Texas. Textos e estudos de projeto são ilustrativos; não representam uma empresa real, serviços disponíveis ou trabalhos de clientes.

React + Vite, CSS puro e fontes Inter/Cormorant Garamond servidas localmente via Fontsource. Sem backend, integrações externas ou imagens remotas.

## Desenvolvimento

Requer Node.js 22.12+ e npm.

```sh
npm install
npm run dev
npm run build
npm run preview
```

## Estrutura

- `src/App.jsx`: seções e conteúdo da página.
- `src/components/`: componentes reutilizáveis.
- `src/styles.css`: identidade visual e estilos responsivos.
- `public/images/`: fotografias locais em WebP, com versões responsivas, copiadas para o build.
- `image-mapping.json`: relação entre os arquivos de imagem originais e os nomes usados no site.

## Cloudflare Pages

Conecte o repositório à Cloudflare Pages e configure o comando de build `npm run build`, diretório de saída `dist` e variável `NODE_VERSION=22`. Nenhuma variável secreta ou função de servidor é necessária. O deploy não foi realizado.

As seis posições de fotografia usam imagens locais otimizadas. A interface simula um site comercial local, com CTAs para orçamento, menu mobile, navegação por âncoras e FAQ. O formulário valida os campos no navegador, mas não envia nem armazena dados e informa isso ao tentar enviar. Não há backend ou integração de leads.

Não há suíte automatizada de testes configurada. Verifique o build, o menu, as âncoras, o FAQ, a validação do formulário e os layouts desktop/mobile antes do deploy.
