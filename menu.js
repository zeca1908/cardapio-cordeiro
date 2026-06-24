/*
  CARDÁPIO DO CORDEIRO — arquivo de edição fácil.

  Como mexer (sem medo):
  - Cada item é uma linha:  { n: "NOME", p: "00,00" }
    n = nome do produto      p = preço (só o número, ex.: "32,00")
    >> No preço escreva SÓ o número (ex.: "32,00"). NÃO ponha "R$" —
       o site já coloca o "R$" sozinho.
  - Pra descrição embaixo do nome, acrescente  d: "texto"
    Ex.:  { n: "FRITAS", p: "32,00", d: "Acompanha molho" }
  - Pra MUDAR um preço: troque só o número entre aspas do p.
  - Pra TIRAR um item: apague a linha inteira dele.
  - Pra ADICIONAR: copie uma linha de item e troque nome/preço.
  - NÃO mexa nos sinais  { } , : "  — eles são a "cola" que segura tudo.

  Dúvida? Me chama que eu altero pra você.
*/

const MENU = {
  nome: "CORDEIRO",
  subtitulo: "BAR & ARMAZÉM",
  instagram: "cordeiro.bar",

  grupos: [
    {
      titulo: "PRA COMER",
      categorias: [
        {
          id: "espetos",
          nome: "ESPETOS",
          itens: [
            { n: "ALCATRA", p: "15,00" },
            { n: "KAFTA COM QUEIJO", p: "15,00" },
            { n: "MEDALHÃO DE FRANGO", p: "15,00" },
            { n: "MEDALHÃO DE BATATA", p: "15,00" },
            { n: "MEDALHÃO DE MUÇARELA", p: "15,00" },
            { n: "MUÇARELA", p: "15,00" },
            { n: "PÃO DE ALHO", p: "15,00" },
            { n: "SALSICHÃO", p: "15,00" }
          ]
        },
        {
          id: "porcoes",
          nome: "PORÇÕES",
          itens: [
            { n: "FRITAS", p: "32,00" },
            { n: "COM QUEIJO", p: "38,00" },
            { n: "COM QUEIJO E BACON", p: "42,00" },
            { n: "PASTÉIS SORTIDOS", p: "39,00", d: "Pastéis fritos de queijo e carne. 8 unidades" },
            { n: "CORAÇÃO NA CHAPA", p: "39,00", d: "Aproximadamente 300g. Acompanha farofa" },
            { n: "FRANGO COM REQUEIJÃO", p: "42,00", d: "Aproximadamente 300g de frango em cubos com requeijão. Acompanha fritas." },
            { n: "FRANGO EMPANADO", p: "46,00", d: "Tiras de frango empanadas no panko, acompanha molho de queijo." },
            { n: "CARNE DE SOL", p: "69,00", d: "Aproximadamente 300g de carne. Acompanha fritas ou mandioca." },
            { n: "TILÁPIA CROCANTE", p: "79,00", d: "Aproximadamente 300g de iscas de filé de tilápia empanada no panko. Acompanha fritas" },
            { n: "CONTRA FILÉ", p: "89,00", d: "Aproximadamente 300g de carne. Acompanha fritas ou mandioca." },
            { n: "PICANHA NA CHAPA", p: "119,00", d: "Aproximadamente 300g de carne. Acompanha fritas ou mandioca." }
          ]
        },
        {
          id: "estufa",
          nome: "ESTUFA",
          nota: "Aproximadamente 150g de carne",
          itens: [
            { n: "CARNE DE PANELA", p: "36,00", d: "Acompanha batata e pão de sal" },
            { n: "TORRESMO DE BARRIGA", p: "29,00", d: "Com limão" },
            { n: "ALMÔNDEGAS ARTESANAIS", p: "29,00", d: "Acompanha pão de sal" },
            { n: "MOELA", p: "28,00", d: "Acompanha pão de sal" },
            { n: "LÍNGUA COM MOLHO", p: "28,00", d: "Acompanha pão de sal" }
          ],
          acrescimos: {
            titulo: "ACRÉSCIMOS",
            itens: [
              { n: "PÃO DE SAL", p: "4,00" },
              { n: "BATATA COZIDA", p: "4,00" }
            ]
          }
        },
        {
          id: "sem-alcool",
          nome: "BEBIDAS SEM ÁLCOOL",
          itens: [
            { n: "ÁGUA LATA SEM GÁS", p: "5,00" },
            { n: "ÁGUA COM GÁS", p: "5,00" },
            { n: "REFRIGERANTE MINI", p: "6,00" },
            { n: "REFRIGERANTE / TÔNICA / KS", p: "8,00" },
            { n: "SUCO NATURAL", p: "12,00" },
            { n: "RED BULL", p: "15,00" },
            { n: "ROLHA VINHO", p: "30,00" },
            { n: "SHOT DE LIMÃO", p: "3,00" }
          ]
        }
      ]
    },
    {
      titulo: "PRA BEBER",
      categorias: [
        {
          id: "chopp",
          nome: "CHOPP 500ML",
          itens: [
            { n: "PILSEN", p: "13,00", d: "ABV 4,8%" }
          ]
        },
        {
          id: "cervejas",
          nome: "CERVEJAS 600ML",
          itens: [
            { n: "AMSTEL", p: "14,00" },
            { n: "ORIGINAL", p: "18,00" },
            { n: "STELLA ARTOIS", p: "19,00" },
            { n: "HEINEKEN", p: "20,00" }
          ]
        },
        {
          id: "especiais",
          nome: "CERVEJAS ESPECIAIS",
          itens: [
            { n: "GERMAN PILSNER", p: "16,00", d: "Pilsen · ABV 5,2%" },
            { n: "RANCOR IPA", p: "25,00", d: "American IPA · ABV 3,9%" },
            { n: "SUBMISSÃO (SEM GLÚTEN)", p: "25,00", d: "Session IPA · ABV 3,9%" },
            { n: "CALÚNIA APA", p: "25,00", d: "American Pale Ale · ABV 5,4%" },
            { n: "IGNORÂNCIA DIPA", p: "25,00", d: "Double IPA · ABV 10%" }
          ]
        },
        {
          id: "long-necks",
          nome: "LONG NECKS",
          itens: [
            { n: "PRAYA", p: "13,00" },
            { n: "HEINEKEN", p: "14,00" },
            { n: "HEINEKEN ZERO", p: "14,00" },
            { n: "HEINEKEN ULTIMATE (SEM GLÚTEN)", p: "14,00" }
          ]
        },
        {
          id: "drinks",
          nome: "DRINKS",
          itens: [
            { n: "CAIPIRINHA SELETA OU BOAZINHA", p: "22,00" },
            { n: "CUBA LIBRE", p: "20,00" },
            { n: "CAIPIVODKA NACIONAL", p: "24,00" },
            { n: "CAIPIVODKA IMPORTADA", p: "24,00" },
            { n: "GIN TÔNICA", p: "24,00" },
            { n: "GIN MELANCITA", p: "32,00" },
            { n: "GIN TROPICAL", p: "32,00" },
            { n: "JACK N COKE", p: "35,00" },
            { n: "APEROL SPRITZ", p: "35,00" },
            { n: "NEGRONI", p: "35,00" },
            { n: "MOSCOW MULE", p: "35,00" }
          ]
        },
        {
          id: "latas",
          nome: "DRINKS PRONTOS · LATA",
          itens: [
            { n: "XEQUE MATE / MASCATE", p: "18,00" },
            { n: "VENETA", p: "18,00" },
            { n: "LAMBE LAMBE", p: "18,00" }
          ]
        },
        {
          id: "doses",
          nome: "DOSES",
          itens: [
            { n: "CACHAÇA", p: "10,00" },
            { n: "RUM BACARDI", p: "13,00" },
            { n: "CAMPARI", p: "13,00" },
            { n: "GIN NACIONAL", p: "18,00" },
            { n: "VODKA NACIONAL", p: "15,00" },
            { n: "VODKA IMPORTADA", p: "20,00" },
            { n: "TEQUILA", p: "28,00" },
            { n: "LICOR 43", p: "28,00" },
            { n: "RED LABEL", p: "25,00" },
            { n: "JACK DANIELS", p: "28,00" }
          ]
        }
      ]
    }
  ]
};
