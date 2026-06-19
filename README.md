# Catálogo Burg · Delly's Meat Solutions

Site de catálogo de produtos (vitrine, **não** e-commerce) para usar em visitas a clientes — interativo, rápido e responsivo (desktop, tablet e celular). Construído em HTML/CSS/JavaScript puro, **sem dependências** e funciona **offline**.

O site entregável está na pasta [`site/`](site/).

---

## Como usar

### 1. Testar rápido no computador
Dê **duplo clique** em `site/index.html`. Abre no navegador direto do arquivo.

### 2. Como ficará hospedado (servidor local)
Para ver exatamente como ficará na web (recomendado antes de publicar):
```powershell
powershell -ExecutionPolicy Bypass -File _build\serve.ps1
```
Depois abra **http://localhost:8123** no navegador. (Pare com `Ctrl+C`.)

### 3. Publicar para usar nas visitas (recomendado) 📱
Para acessar pelo celular/tablet do vendedor via um link, hospede a pasta `site/`. A forma mais simples e gratuita:

1. Acesse **https://app.netlify.com/drop**
2. **Arraste a pasta `site/`** para a página
3. Pronto — você recebe uma URL pública (ex: `https://burg-catalogo.netlify.app`)

Outras opções gratuitas: Cloudflare Pages, Vercel, GitHub Pages. Basta publicar o **conteúdo da pasta `site/`**.

> Ao compartilhar o link no WhatsApp, aparece um preview com a foto da picanha (tags Open Graph já configuradas).

---

## Recursos

- **Hero cinematográfico** e seção institucional da Delly's (números, "Parceiro do Ano 2025").
- **Diferenciais de venda** (qualidade, padronização, zero perdas, rentabilidade, personalização).
- **Catálogo de 43 produtos** com busca e filtros por categoria (Bovinos, Aves, Suínos, Hambúrguer).
- **Lightbox** por produto: galeria das 3 fotos + descrição + argumentos.
- **Modo apresentação em tela cheia** (ótimo para tablet na visita) — setas do teclado, toque/swipe e clique nos pontos.
- **Contato** com botão de WhatsApp.

---

## Estrutura

```
site/                         ← publique ESTA pasta
├── index.html                ← página
├── assets/
│   ├── css/styles.css        ← estilos (cores, fontes, layout)
│   ├── js/data.js            ← TODO o conteúdo: produtos, textos, contatos
│   ├── js/app.js             ← interatividade
│   ├── fonts/                ← fontes (offline)
│   ├── favicon.svg
│   └── img/
│       ├── thumb/            ← fotos dos cards (640px)
│       └── large/            ← fotos do lightbox/apresentação (1600px)
│
_build/                       ← utilitários (não precisa publicar)
├── process-images.ps1        ← otimiza/redimensiona as fotos originais
├── contact-sheet.ps1         ← gera folhas de contato para conferência
├── serve.ps1                 ← servidor local de teste
└── image-map.json            ← mapa fotos → produtos
```

---

## Editar conteúdo

Quase tudo (nomes, descrições, argumentos de venda, contatos, números) está em **`site/assets/js/data.js`** — é só editar o texto e salvar.

### Adicionar novos produtos / fotos
1. Coloque as novas fotos `.JPG` na pasta raiz (`Fotos/`), seguindo o padrão de nome `Codigo Nome do produto-1.JPG`, `-2`, `-3`.
2. Rode o otimizador:
   ```powershell
   powershell -ExecutionPolicy Bypass -File _build\process-images.ps1
   ```
   Isso gera as versões `thumb/` e `large/` e atualiza o `image-map.json`.
3. Adicione o produto em `data.js` (copie um bloco existente, ajuste `name`, `cut`, `weight`, `prep`, `slug`, `cover`, `desc`, `tags`).

> `slug` é o nome do arquivo sem o `-1.jpg`. `cover` é qual das 3 fotos (0, 1 ou 2) aparece como capa.

---

*Imagens meramente ilustrativas. Catálogo comercial — disponibilidade de itens sujeita a consulta.*
