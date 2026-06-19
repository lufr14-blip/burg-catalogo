/* ============================================================
   Burg · Catálogo comercial — dados
   Todo o conteúdo do site vive aqui (fácil de editar).
   Cada produto tem 3 fotos: {slug}-1.jpg, -2.jpg, -3.jpg
   "cover" = índice (0-2) da foto usada como capa do card.
   ============================================================ */

const HEROES = {
  hero:    "881116-picanha-peca-burg-1.jpg",      // picanha em peça, tábua
  company: "890015-picanha-fatiada-tuche-2.jpg",  // picanha na grelha
  cta:     "881180-ancho-220g-2.jpg"              // ancho na churrasqueira
};

const DIFERENCIAIS = [
  { icon: "spark",  title: "Qualidade & Tecnologia",
    text: "Tecnologia de processo e seleção criteriosa da matéria-prima para garantir <strong>maciez sempre</strong>, com os melhores insumos." },
  { icon: "grid",   title: "Padronização dos cortes",
    text: "Cortes uniformes, no peso certo, que <strong>dispensam mão de obra qualificada</strong> na cozinha do restaurante." },
  { icon: "leaf",   title: "Eficiência · Zero perdas",
    text: "<strong>Sem perdas</strong> no fatiamento e na limpeza de peças dentro da sua operação. O que chega, vira prato." },
  { icon: "chart",  title: "Previsibilidade & rentabilidade",
    text: "Número de porções previsível e <strong>CMV sob controle</strong> — você sabe exatamente quanto rende cada caixa." },
  { icon: "sliders",title: "Personalização",
    text: "Gramaturas, cortes, temperos e injeção <strong>sob medida</strong> — e novos cortes para ampliar o seu cardápio." }
];

const CATEGORIES = [
  { id: "todos",      label: "Todos" },
  { id: "Bovinos",    label: "Bovinos" },
  { id: "Aves",       label: "Aves" },
  { id: "Suínos",     label: "Suínos" },
  { id: "Hambúrguer", label: "Hambúrguer" }
];

/* order = ordem de exibição no grid (agrupado por corte) */
const PRODUCTS = [
  /* ---------- PICANHA ---------- */
  { code:"881116", name:"Picanha em Peça", cat:"Bovinos", cut:"Picanha", weight:"Peça inteira", prep:"In natura", brand:"Burg", featured:true,
    slug:"881116-picanha-peca-burg", cover:0,
    desc:"Picanha inteira selecionada, com capa de gordura uniforme. A estrela do salão para o corte na frente do cliente.",
    tags:["Peça inteira","Capa de gordura","Corte nobre"] },
  { code:"881193", name:"Picanha em Peça 1kg", cat:"Bovinos", cut:"Picanha", weight:"± 1 kg", prep:"In natura", brand:"Burg",
    slug:"881193-picanha-peca-1kg-burg", cover:2,
    desc:"Picanha em peça padronizada em torno de 1 kg, prática para porcionar com regularidade e controlar o rendimento.",
    tags:["Peça padronizada","Rendimento","Corte nobre"] },
  { code:"881179", name:"Picanha Filetada", cat:"Bovinos", cut:"Picanha", weight:"Fatiada", prep:"In natura", brand:"Burg",
    slug:"881179-picanha-filetada-burg", cover:1,
    desc:"Picanha já filetada em fatias regulares, prontas para a chapa ou a grelha. Praticidade total, sem perda no corte.",
    tags:["Fatias regulares","Praticidade","Zero perdas"] },
  { code:"881115", name:"Picanha Fatiada 1kg", cat:"Bovinos", cut:"Picanha", weight:"1 kg", prep:"In natura", brand:"Burg",
    slug:"881115-picanha-fatiada-burg-1-kg", cover:2,
    desc:"Picanha fatiada em embalagem de 1 kg, ideal para alta saída no rodízio e no buffet com porção uniforme.",
    tags:["Alta saída","Porção uniforme","Praticidade"] },
  { code:"890015", name:"Picanha Fatiada Tuchê", cat:"Bovinos", cut:"Picanha", weight:"Fatiada", prep:"In natura", brand:"Tuchê",
    slug:"890015-picanha-fatiada-tuche", cover:1,
    desc:"Picanha fatiada da linha Tuchê, o equilíbrio entre qualidade e custo para o dia a dia do restaurante. Pronta para a grelha e com bom rendimento.",
    tags:["Linha dia a dia","Ótimo custo","Pronta para a grelha"] },
  { code:"881105", name:"Picanha em Bifes 170g", cat:"Bovinos", cut:"Picanha", weight:"170 g", prep:"In natura", brand:"Burg",
    slug:"881105-picanha-170g", cover:2,
    desc:"Bifes nobres de picanha de 170 g, corte alto e suculento — o clássico do churrasco com peso garantido.",
    tags:["Corte nobre","Suculência","Padronizado"] },
  { code:"881177", name:"Picanha em Bifes 220g", cat:"Bovinos", cut:"Picanha", weight:"220 g", prep:"In natura", brand:"Burg",
    slug:"881177-picanha-burg-220g", cover:1,
    desc:"Bife de picanha alto de 220 g, a porção generosa do steakhouse. Suculência e padrão em cada unidade.",
    tags:["Porção generosa","Steakhouse","Padronizado"] },
  { code:"881104", name:"Picanha em Bifes 100g", cat:"Bovinos", cut:"Picanha", weight:"100 g", prep:"In natura", brand:"Burg",
    slug:"881104-picanha-100g", cover:2,
    desc:"Bifes de picanha de 100 g com a capa de gordura na medida. Porção individual perfeita para o à la carte.",
    tags:["Capa de gordura","Porção individual","Padronizado"] },

  /* ---------- ANCHO ---------- */
  { code:"881180a", name:"Bife Ancho 220g", cat:"Bovinos", cut:"Ancho", weight:"220 g", prep:"In natura", brand:"Burg",
    slug:"881180-ancho-220g", cover:1,
    desc:"O badalado bife ancho de 220 g, com marmoreio que derrete na grelha. Sabor intenso para cardápios de steakhouse.",
    tags:["Marmoreio","Sabor intenso","Steakhouse"] },

  /* ---------- FILÉ MIGNON ---------- */
  { code:"881194", name:"Filé Mignon Tornedor", cat:"Bovinos", cut:"Filé Mignon", weight:"Tornedor", prep:"In natura", brand:"Burg",
    slug:"881194-file-mignon-tornedor-burg", cover:2,
    desc:"Tornedor de filé mignon, o corte mais macio do boi, limpo e pronto para o prato principal mais nobre da casa.",
    tags:["Máxima maciez","Corte premium","Pronto para uso"] },
  { code:"881180m", name:"Mignon Medalhão 80g", cat:"Bovinos", cut:"Filé Mignon", weight:"80 g", prep:"In natura", brand:"Burg",
    slug:"881180-mignon-medalhao-80g", cover:1,
    desc:"Medalhões de mignon de 80 g, padronizados e amarrados, prontos para grelhar. Elegância e maciez na porção certa.",
    tags:["Máxima maciez","Porção padronizada","Pronto para uso"] },
  { code:"881181", name:"Mignon Steak 120g", cat:"Bovinos", cut:"Filé Mignon", weight:"120 g", prep:"In natura", brand:"Burg",
    slug:"881181-mignon-steak-120g", cover:2,
    desc:"Steak de filé mignon de 120 g, espesso e uniforme. O prato nobre que valoriza o ticket médio do salão.",
    tags:["Máxima maciez","Ticket alto","Padronizado"] },
  { code:"881209", name:"Tiras de Filé Mignon", cat:"Bovinos", cut:"Filé Mignon", weight:"Tiras", prep:"In natura", brand:"Burg",
    slug:"881209-tiras-de-file-mignon", cover:2,
    desc:"Tiras de filé mignon limpas, ideais para strogonoff, medalhões e pratos executivos premium de rápido preparo.",
    tags:["Máxima maciez","Versátil","Praticidade"] },

  /* ---------- CONTRA FILÉ ---------- */
  { code:"881112", name:"Contra Filé Porcionado", cat:"Bovinos", cut:"Contra Filé", weight:"Porcionado", prep:"In natura", brand:"Burg",
    slug:"881112-contra-file-porcionado-am-burg", cover:2,
    desc:"Contra filé porcionado e limpo, pronto para grelhar. Cortes uniformes que eliminam perdas e padronizam o prato.",
    tags:["Porcionado","Zero perdas","Padronizado"] },
  { code:"881203", name:"Contra Filé em Bifes 400g", cat:"Bovinos", cut:"Contra Filé", weight:"400 g (pct)", prep:"In natura", brand:"Burg",
    slug:"881203-contra-file-bifes-am-400g-burg", cover:1,
    desc:"Bifes de contra filé em prática embalagem de 400 g. Espessura constante para uma chapa sempre no ponto.",
    tags:["Embalagem prática","Espessura constante","Padronizado"] },
  { code:"881101", name:"Contra Filé Marinado 150g", cat:"Bovinos", cut:"Contra Filé", weight:"150 g", prep:"Marinado", brand:"Burg",
    slug:"881101-contra-file-150-g-marinado-burg", cover:1,
    desc:"Bifes de contra filé marinados em 150 g, prontos para a chapa. Sabor e maciez consistentes, sem trabalho de tempero.",
    tags:["Pronto para a chapa","Marinado","Maciez garantida"] },

  /* ---------- ALCATRA ---------- */
  { code:"881204", name:"Alcatra em Bifes 400g", cat:"Bovinos", cut:"Alcatra", weight:"400 g (pct)", prep:"In natura", brand:"Burg",
    slug:"881204-alcatra-bifes-am-400g-burg", cover:1,
    desc:"Bifes de alcatra em embalagem de 400 g, macios e uniformes. Versatilidade para pratos executivos de alta saída.",
    tags:["Embalagem prática","Versátil","Padronizado"] },
  { code:"881208", name:"Alcatra em Bifes 120g", cat:"Bovinos", cut:"Alcatra", weight:"120 g", prep:"In natura", brand:"Burg",
    slug:"881208-alcatra-bifes-120g-burg", cover:1,
    desc:"Bifes de alcatra de 120 g, no ponto certo para o prato executivo. Padrão de peso que protege a sua margem.",
    tags:["Prato executivo","Margem protegida","Padronizado"] },
  { code:"000000", name:"Alcatra em Bifes 90g", cat:"Bovinos", cut:"Alcatra", weight:"90 g", prep:"In natura", brand:"Burg",
    slug:"000000-alcatra-bifes-90g-burg", cover:1,
    desc:"Bifes de alcatra porcionados em 90 g, ideais para pratos executivos e lanches com porção controlada.",
    tags:["Porção controlada","Maciez garantida","Padronizado"] },
  { code:"881210", name:"Alcatra em Bifes 90g", cat:"Bovinos", cut:"Alcatra", weight:"90 g", prep:"In natura", brand:"Burg",
    slug:"881210-alcatra-bifes-burg-90g", cover:2,
    desc:"Alcatra em bifes de 90 g, corte magro e saboroso. Excelente custo-benefício para o cardápio do dia a dia.",
    tags:["Ótimo custo","Corte magro","Padronizado"] },
  { code:"881183", name:"Alcatra Lanche 120g", cat:"Bovinos", cut:"Alcatra", weight:"120 g", prep:"In natura", brand:"Burg",
    slug:"881183-alcatra-lanche-120g", cover:2,
    desc:"Bife de alcatra de 120 g desenhado para o hambúrguer artesanal e o sanduíche premium. Maciez na mordida.",
    tags:["Para lanches","Maciez garantida","Padronizado"] },

  /* ---------- FRALDINHA / VAZIO ---------- */
  { code:"881198", name:"Bife do Vazio (Fraldinha)", cat:"Bovinos", cut:"Fraldinha", weight:"± 1,2 kg", prep:"In natura", brand:"Burg",
    slug:"881198-bife-do-vazio-burg", cover:2,
    desc:"Bife do vazio, corte de fibras longas e sabor marcante, queridinho das casas de carne. Excelente na grelha alta.",
    tags:["Sabor marcante","Tendência","Corte especial"] },

  /* ---------- LAGARTO ---------- */
  { code:"881150", name:"Lagarto Red", cat:"Bovinos", cut:"Lagarto", weight:"Peça", prep:"In natura", brand:"Burg",
    slug:"881150-lagarto-red-burg", cover:2,
    desc:"Peça de lagarto in natura, magra e de excelente rendimento. Perfeita para rosbife, carpaccio e cortes finos.",
    tags:["Carne magra","Rendimento","Versátil"] },
  { code:"881113", name:"Lagarto em Bifes", cat:"Bovinos", cut:"Lagarto", weight:"Bifes", prep:"Marinado", brand:"Burg",
    slug:"881113-lagarto-bifes-burg", cover:1,
    desc:"Bifes de lagarto de espessura uniforme, marinados e amaciados. Ideais para milanesa e pratos de forno.",
    tags:["Fatia uniforme","Amaciado","Versátil"] },

  /* ---------- COXÃO DURO ---------- */
  { code:"881111", name:"Coxão Duro em Bifes", cat:"Bovinos", cut:"Coxão Duro", weight:"110 g", prep:"Marinado", brand:"Burg",
    slug:"881111-coxao-duro-bifes-burg", cover:2,
    desc:"Bifes de coxão duro marinados e amaciados por processo controlado. Sabor de carne a um custo que protege o CMV.",
    tags:["Amaciado","CMV protegido","Ótimo custo"] },

  /* ---------- TOP SIDE ---------- */
  { code:"881108", name:"Top Side Marinado 120g", cat:"Bovinos", cut:"Top Side", weight:"120 g", prep:"Marinado", brand:"Burg",
    slug:"881108-top-side-marinado-120g", cover:1,
    desc:"Bifes de top side (coxão mole) marinados em 120 g. Opção econômica e saborosa para o prato executivo.",
    tags:["Marinado","Ótimo custo","Rentabilidade"] },
  { code:"881184", name:"Top Side Steak 150g", cat:"Bovinos", cut:"Top Side", weight:"150 g", prep:"In natura", brand:"Burg",
    slug:"881184-top-side-steak-150g", cover:1,
    desc:"Steak de top side de 150 g, alternativa nobre e acessível ao contra filé. Maciez surpreendente na grelha.",
    tags:["Custo-benefício","Maciez garantida","Padronizado"] },

  /* ---------- TIRAS ---------- */
  { code:"881106", name:"Tiras Bovinas", cat:"Bovinos", cut:"Tiras", weight:"In natura", prep:"In natura", brand:"Burg",
    slug:"881106-tiras-bovinas", cover:2,
    desc:"Tiras bovinas selecionadas, prontas para salteados, strogonoff e pratos rápidos. Cortes que cozinham por igual.",
    tags:["Corte uniforme","Versátil","Praticidade"] },
  { code:"881107", name:"Tiras Bovinas Marinadas", cat:"Bovinos", cut:"Tiras", weight:"Marinada", prep:"Marinado", brand:"Burg",
    slug:"881107-tiras-bovinas-marinada", cover:1,
    desc:"Tiras bovinas já marinadas, prontas para o fogo. Sabor pronto e textura macia para pratos ágeis de alta saída.",
    tags:["Marinado","Alta saída","Maciez garantida"] },

  /* ---------- CARNE MOÍDA ---------- */
  { code:"881102", name:"Carne Moída 5kg", cat:"Bovinos", cut:"Carne Moída", weight:"5 kg", prep:"In natura", brand:"Burg",
    slug:"881102-carne-moida-burg-5kg", cover:2,
    desc:"Carne moída bovina em embalagem de 5 kg para alto volume. Moagem uniforme para hambúrgueres, molhos e recheios.",
    tags:["Alto volume","Moagem uniforme","Rendimento"] },
  { code:"881103", name:"Carne Moída Extra Limpa 1,5kg", cat:"Bovinos", cut:"Carne Moída", weight:"1,5 kg", prep:"In natura", brand:"Burg",
    slug:"881103-carne-moida-extra-limpa-burg-1-5kg", cover:1,
    desc:"Carne moída extra limpa, com baixo teor de gordura, em embalagem de 1,5 kg. Ideal para pratos magros de bom rendimento.",
    tags:["Extra limpa","Baixa gordura","Rendimento"] },
  { code:"881201", name:"Carne Moída 400g", cat:"Bovinos", cut:"Carne Moída", weight:"400 g", prep:"In natura", brand:"Burg",
    slug:"881201-carne-moida-400g-burg", cover:2,
    desc:"Carne moída em porção de 400 g, prática para o preparo na medida certa e sem desperdício na operação.",
    tags:["Porção prática","Sem desperdício","Rendimento"] },

  /* ---------- AVES ---------- */
  { code:"881301", name:"Filé de Coxa Tradicional", cat:"Aves", cut:"Frango", weight:"Filé de coxa", prep:"In natura", brand:"Burg",
    slug:"881301-file-de-coxa-tradicional", cover:2,
    desc:"Filé de coxa de frango desossado, suculento e saboroso. A base perfeita para grelhados e pratos do dia.",
    tags:["Suculência","Versátil","Sem osso"] },
  { code:"881327", name:"Filé de Frango 120g In Natura", cat:"Aves", cut:"Frango", weight:"120 g", prep:"In natura", brand:"Burg",
    slug:"881327-file-de-frango-120g-in-natura-burg", cover:1,
    desc:"Filé de peito de frango de 120 g in natura, magro e padronizado. Porção exata para o prato fit e o executivo.",
    tags:["Magro","Porção exata","Padronizado"] },
  { code:"881308", name:"Filé de Frango 120g Marinado", cat:"Aves", cut:"Frango", weight:"120 g", prep:"Marinado", brand:"Burg",
    slug:"881308-file-de-frango-120g-mrd-burg", cover:1,
    desc:"Filé de frango de 120 g marinado, pronto para a chapa. Sabor uniforme e preparo rápido em horário de pico.",
    tags:["Marinado","Preparo rápido","Padronizado"] },
  { code:"881302", name:"Filé de Frango Marinado 120g", cat:"Aves", cut:"Frango", weight:"120 g", prep:"Marinado", brand:"Burg",
    slug:"881302-file-marinado-120g", cover:2,
    desc:"Filé de frango marinado de 120 g, macio e temperado na medida. Ideal para sanduíches e pratos executivos.",
    tags:["Marinado","Maciez garantida","Para lanches"] },
  { code:"881303", name:"Filé de Frango Marinado 130g", cat:"Aves", cut:"Frango", weight:"130 g", prep:"Marinado", brand:"Burg",
    slug:"881303-file-de-frango-marinado-130g", cover:1,
    desc:"Filé de frango marinado de 130 g, suculento e pronto para grelhar. Porção generosa para o prato principal.",
    tags:["Marinado","Suculência","Padronizado"] },
  { code:"881304", name:"Filé de Frango Marinado 170g", cat:"Aves", cut:"Frango", weight:"170 g", prep:"Marinado", brand:"Burg",
    slug:"881304-file-de-frango-170g-marinado-tradicional-burg", cover:1,
    desc:"Filé de peito de frango marinado de 170 g, tempero tradicional. Suculência garantida mesmo no alto volume.",
    tags:["Marinado","Suculência","Alto volume"] },
  { code:"881306", name:"Filé de Frango Marinado 300g", cat:"Aves", cut:"Frango", weight:"300 g", prep:"Marinado", brand:"Burg",
    slug:"881306-file-de-frango-300g-marinado-tradicional-burg", cover:1,
    desc:"Filé de frango marinado de 300 g, porção dupla para pratos fartos e marmitas. Praticidade e padrão de sabor.",
    tags:["Porção farta","Marinado","Praticidade"] },
  { code:"881307", name:"Tiras de Frango Marinadas", cat:"Aves", cut:"Frango", weight:"1,8 kg", prep:"Marinado", brand:"Burg",
    slug:"881307-tiras-de-frango-marinado-tradicional-burg", cover:1,
    desc:"Tiras de frango marinadas, prontas para salteados, wraps e saladas. Agilidade total no preparo de alta saída.",
    tags:["Marinado","Versátil","Alta saída"] },

  /* ---------- SUÍNOS ---------- */
  { code:"881502", name:"Costela Suína Temperada", cat:"Suínos", cut:"Costela", weight:"± 1,8 kg", prep:"Temperado", brand:"Burg",
    slug:"881502-costela-suina-temperada-burg", cover:2,
    desc:"Costela suína temperada, macia e suculenta, pronta para o forno lento ou a defumação. Sucesso garantido no cardápio.",
    tags:["Temperada","Suculência","Pronta para o forno"] },
  { code:"881505", name:"Lombo Suíno Temperado", cat:"Suínos", cut:"Lombo", weight:"± 1 kg", prep:"Temperado", brand:"Burg",
    slug:"881505-lombo-temperado-burg", cover:2,
    desc:"Lombo suíno temperado, magro e versátil, pronto para assar e fatiar. Excelente rendimento para o buffet.",
    tags:["Temperado","Rendimento","Versátil"] },

  /* ---------- HAMBÚRGUER ---------- */
  { code:"881404", name:"Hambúrguer Bovino", cat:"Hambúrguer", cut:"Hambúrguer", weight:"90 g", prep:"Temperado", brand:"Burg",
    slug:"881404-habmgurguer", cover:2,
    desc:"Hambúrguer bovino temperado, moldado e padronizado. Suculência e ponto uniforme em cada disco — do executivo ao artesanal.",
    tags:["Padronizado","Suculência","Alta saída"] }
];
