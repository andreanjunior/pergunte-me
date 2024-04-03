const elementoResposta = document.querySelector("#resposta");
const inputPergunta = document.querySelector("#inputPergunta");
const buttonPerguntar = document.querySelector("#buttonPerguntar");

// Mapeamento de palavras-chave para respostas relevantes
const respostasPorPalavraChave = {
    "tempo": ["Será que vai chover amanhã?", "Vai ser um dia ensolarado."],
    "emprego": ["Você deveria considerar aceitar o novo emprego.", "Não perca essa oportunidade."],
    "investir": ["Sim, é um bom momento para investir.", "Talvez seja melhor esperar um pouco."],
    "exame": ["Estude mais para aumentar suas chances de passar.", "Confie no seu esforço e estude bastante."],
    "convencer": ["Tente apresentar seus argumentos de forma clara e persuasiva.", "Respeite a decisão dos seus pais."],
    "carro": ["Pesquise bem antes de comprar.", "Considere fazer uma revisão detalhada antes de decidir."],
    "confiar": ["Confiança é fundamental, avalie bem antes de confiar completamente.", "Construa confiança com base em ações consistentes."],
    "estudar": ["Dedique tempo e esforço aos estudos, isso é fundamental para o sucesso.", "A persistência nos estudos traz resultados."],
    "persuadir": ["Conheça bem o seu público-alvo e adapte sua abordagem de acordo.", "Apresente argumentos sólidos e baseados em fatos."],
    "viagem": ["Viajar pode trazer novas experiências e crescimento pessoal.", "Pondere os prós e contras antes de decidir."],
    "aumento": ["Se você acredita que merece e tem argumentos sólidos, pode ser uma boa ideia pedir um aumento.", "Considere seu desempenho e contribuição para a empresa antes de solicitar um aumento."],
    "ações": ["Investir em ações pode ser lucrativo, mas também envolve riscos.", "Analise bem o mercado e busque orientação de especialistas antes de investir."],
    "mudar": ["Mudar pode trazer novas oportunidades e experiências enriquecedoras.", "Considere os prós e contras da mudança antes de tomar uma decisão."],
    "desculpas": ["Pedir desculpas é um sinal de maturidade e respeito.", "Se você errou, admita e peça desculpas sinceramente."],
    "hobby": ["Dedicar tempo ao seu hobby pode ser uma ótima maneira de relaxar e se divertir.", "Se o seu hobby te traz felicidade, vale a pena dedicar tempo a ele."],
    "curso": ["Fazer um curso avançado pode ajudá-lo a adquirir novas habilidades e avançar em sua carreira.", "Considere se o curso está alinhado com seus objetivos e interesses antes de se matricular."],
    "casa": ["Encontrar uma nova casa pode ser emocionante, mas certifique-se de considerar sua situação financeira e necessidades antes de decidir.", "Pondere a localização, o tamanho e o custo da casa antes de tomar uma decisão."],
    "emprestar": ["Emprestar dinheiro para um amigo pode afetar seu relacionamento, avalie se você está confortável com isso.", "Considere suas próprias necessidades financeiras antes de emprestar dinheiro para outras pessoas."],
    "confrontar": ["Confrontar seu chefe pode ser necessário em certas situações, mas avalie os possíveis impactos antes de agir.", "Escolha o momento e o local adequados para abordar o problema com seu chefe."],
    "previsões": ["As previsões do mercado financeiro podem fornecer insights, mas lembre-se de que nem sempre são precisas.", "Analise várias fontes de informação antes de tomar decisões com base em previsões de mercado."],
    "político": ["É importante questionar as promessas feitas por políticos e analisar suas ações passadas.", "Considere os valores e propostas do político antes de confiar em suas promessas."],
    "família": ["O apoio da família pode ser fundamental em momentos importantes da vida, mas lembre-se de que você é responsável por suas próprias decisões.", "Converse com sua família e compartilhe seus planos e preocupações antes de tomar uma decisão importante."],
    "sorte": ["A sorte pode desempenhar um papel, mas é importante trabalhar duro e se preparar para aproveitar as oportunidades.", "Acreditar em si mesmo e persistir pode ser mais importante do que depender apenas da sorte."],
    "saúde": ["Priorize sua saúde e bem-estar em todas as decisões que tomar.", "Consulte um profissional de saúde para obter orientação sobre questões relacionadas à sua saúde."],
    "amor": ["O amor é uma parte importante da vida, mas lembre-se de valorizar a si mesmo em primeiro lugar.", "Escolha relacionamentos que sejam saudáveis e te façam crescer como pessoa."],
    "viagem": ["Viajar pode expandir seus horizontes e proporcionar experiências inesquecíveis.", "Planeje sua viagem com antecedência para aproveitar ao máximo."],
  "saúde": ["Priorize sua saúde física e mental em todas as decisões que tomar.", "Cuide bem de si mesmo e procure ajuda profissional quando necessário."],
  "amor": ["O amor é um aspecto fundamental da vida humana e pode trazer grande felicidade.", "Valorize os relacionamentos significativos em sua vida."],
  "educação": ["A educação é a chave para o crescimento pessoal e profissional.", "Continue aprendendo e buscando conhecimento ao longo da vida."],
  "carreira": ["Invista em desenvolvimento profissional e busque oportunidades de crescimento.", "Encontre um equilíbrio saudável entre trabalho e vida pessoal."],
  "felicidade": ["Busque a felicidade nas pequenas coisas da vida e em conexões significativas com os outros.", "Cultive hábitos positivos que promovam seu bem-estar emocional."],
  "sucesso": ["Defina o sucesso de acordo com seus próprios valores e objetivos.", "Persista, aprenda com os fracassos e celebre suas conquistas."],
  "autoconfiança": ["Acredite em si mesmo e em suas habilidades para enfrentar desafios.", "Desenvolva uma mentalidade positiva e trabalhe para superar a autodúvida."],
  "resiliência": ["A resiliência é a capacidade de se adaptar e se recuperar diante das adversidades.", "Cultive a resiliência através da aceitação, do apoio social e do desenvolvimento de habilidades de enfrentamento."],
  "propósito": ["Descubra e siga seu propósito na vida, buscando significado e realização pessoal.", "Estabeleça metas alinhadas com seus valores e paixões."],
    "educar": ["A educação é um investimento valioso no seu futuro.", "Busque oportunidades de aprendizado ao longo da vida para continuar crescendo e se desenvolvendo."],
    // Adicione mais palavras-chave e respostas relevantes conforme necessário
  };
  

/// Função para selecionar uma resposta com base nas palavras-chave
function selecionarResposta(palavrasChave) {
    let respostasDisponiveis = [];
  
    // Iterar sobre todas as palavras-chave
    for (let palavraChave in respostasPorPalavraChave) {
      // Iterar sobre todas as palavras da pergunta
      for (let palavra of palavrasChave) {
        if (palavraChave.includes(palavra)) {
          respostasDisponiveis = respostasDisponiveis.concat(respostasPorPalavraChave[palavraChave]);
        }
      }
    }
  
    // Se houver respostas disponíveis com base nas palavras-chave
    if (respostasDisponiveis.length > 0) {
      const indice = Math.floor(Math.random() * respostasDisponiveis.length);
      return respostasDisponiveis[indice];
    } else {
      // Se não houver respostas disponíveis com base nas palavras-chave
      // Crie uma resposta genérica
      const respostasGenericas = [
        "Interessante, poderia explicar mais sobre isso?",
        "Fascinante! Você gostaria de expandir seu pensamento?",
        "Parece intrigante. Você tem alguma outra pergunta?",
        "Desculpe, não consigo responder a essa pergunta no momento."
      ];
      const indice = Math.floor(Math.random() * respostasGenericas.length);
      return respostasGenericas[indice];
    }
  }
  
// Clicar em fazer pergunta
function fazerPergunta() {
  const pergunta = inputPergunta.value.toLowerCase();
  if (pergunta === "") {
    alert("Digite sua pergunta");
    return;
  }

  buttonPerguntar.setAttribute("disabled", true);

  const palavrasChave = pergunta.split(" ");
  const resposta = selecionarResposta(palavrasChave);
  
  elementoResposta.innerHTML = pergunta + "<br>" + resposta;
  elementoResposta.style.opacity = 1;

  setTimeout(function () {
    elementoResposta.style.opacity = 0;
    buttonPerguntar.removeAttribute("disabled");
  }, 4000);
}
