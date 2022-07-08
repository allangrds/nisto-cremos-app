import { Creed as CreedEnum } from '../enum'

type BiblicalPassages = {
  label: string
  passage: string
}

export type Creed = {
  title: string
  description?: string
  parameter: string
  texts: string[]
  biblical_passages: BiblicalPassages[]
  youtubeIds: string[]
  tags: string[]
  numbering: number
}

export const creeds: Creed[] = [
  {
    title: 'As escrituras sagradas',
    description: '',
    parameter: CreedEnum.BIBLE,
    texts: [
      'As Escrituras Sagradas, o Antigo e o Novo Testamentos, são a Palavra de Deus escrita, dada por inspiração divina. Os autores inspirados falaram e escreveram ao serem movidos pelo Espírito Santo. Nesta Palavra, Deus transmitiu à humanidade o conhecimento necessário para a salvação. As Escrituras Sagradas são a revelação infalível, suprema e repleta de autoridade de sua vontade. Constituem o padrão de caráter, a prova da experiência, o revelador definitivo de doutrinas e o registro fidedigno dos atos de Deus na história.'
    ],
    youtubeIds: ['6kkc_ey__Gk'],
    biblical_passages: [
      {
        label: 'Sl 119:105',
        passage: 'Lâmpada para os meus pés é tua palavra, e luz para o meu caminho'
      },
      {
        label: 'Pv 30:5, 6',
        passage: 'Toda a Palavra de Deus é pura; escudo é para os que confiam nele. Nada acrescentes às suas palavras, para que não te repreenda e sejas achado mentiroso.',
      },
      {
        label: 'Is 8:20',
        passage: 'À lei e ao testemunho! Se eles não falarem segundo esta palavra, é porque não há luz neles.',
      },
      {
        label: 'Jo 17:17',
        passage: 'Santifica-os na tua verdade; a tua palavra é a verdade.',
      },
      {
        label: '1Ts 2:13',
        passage: 'Por isso também damos, sem cessar, graças a Deus, pois, havendo recebido de nós a palavra da pregação de Deus, a recebestes, não como palavra de homens, mas (segundo é, na verdade), como palavra de Deus, a qual também opera em vós, os que crestes.',
      },
      {
        label: '2Tm 3:16,17',
        passage: 'Toda a Escritura é divinamente inspirada, e proveitosa para ensinar, para redargüir, para corrigir, para instruir em justiça; Para que o homem de Deus seja perfeito, e perfeitamente instruído para toda a boa obra.',
      },
      {
        label: 'Hb 4:12',
        passage: 'Porque a palavra de Deus é viva e eficaz, e mais penetrante do que espada alguma de dois gumes, e penetra até à divisão da alma e do espírito, e das juntas e medulas, e é apta para discernir os pensamentos e intenções do coração.',
      },
      {
        label: '2Pe 1:20, 21',
        passage: 'Sabendo primeiramente isto: que nenhuma profecia da Escritura é de particular interpretação.Porque a profecia nunca foi produzida por vontade de homem algum, mas os homens santos de Deus falaram inspirados pelo Espírito Santo.',
      },
    ],
    tags: [
      'bíblia',
      'sagrada',
      'escrituras',
      'sagradas',
      '1',
    ],
    numbering: 1,
  },
  {
    title: 'A trindade',
    description: '',
    parameter: CreedEnum.THE_TRINITY,
    texts: [
      'Há um só Deus: Pai, Filho e Espírito Santo, uma unidade de três pessoas coeternas. Deus é imortal, onipotente, onisciente, acima de tudo e sempre presente. Ele é infinito e está além da compreensão humana, mas é conhecido por meio de sua autorrevelação. Deus, que é amor, para sempre é digno de culto, adoração e serviço por parte de toda a criação.'
    ],
    youtubeIds: ['KPqE4ho6pvA'],
    biblical_passages: [
      {
        label: 'Gn 1:26',
        passage: 'E disse Deus: Façamos o homem à nossa imagem, conforme a nossa semelhança; e domine sobre os peixes do mar, e sobre as aves dos céus, e sobre o gado, e sobre toda a terra, e sobre todo o réptil que se move sobre a terra.'
      },
      {
        label: 'Dt 6:4',
        passage: 'Ouve, Israel, o Senhor nosso Deus é o único Senhor.',
      },
      {
        label: 'Is 6:8',
        passage: 'Depois disto ouvi a voz do Senhor, que dizia: A quem enviarei, e quem há de ir por nós? Então disse eu: Eis-me aqui, envia-me a mim.',
      },
      {
        label: 'Mt 28:19',
        passage: 'Portanto ide, fazei discípulos de todas as nações, batizando-os em nome do Pai, e do Filho, e do Espírito Santo',
      },
      {
        label: 'Jo 3:16',
        passage: 'Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.',
      },
      {
        label: '2Co 1:21, 22',
        passage: 'Mas o que nos confirma convosco em Cristo, e o que nos ungiu, é Deus, O qual também nos selou e deu o penhor do Espírito em nossos corações.',
      },
      {
        label: 'Ef 4:4-6',
        passage: 'Há um só corpo e um só Espírito, como também fostes chamados em uma só esperança da vossa vocação; Um só Senhor, uma só fé, um só batismo; Um só Deus e Pai de todos, o qual é sobre todos, e por todos e em todos vós.',
      },
      {
        label: '1Pe 1:2',
        passage: 'Eleitos segundo a presciência de Deus Pai, em santificação do Espírito, para a obediência e aspersão do sangue de Jesus Cristo: Graça e paz vos sejam multiplicadas.',
      },
    ],
    tags: [
      'trindade',
      'deus',
      'jesus',
      'espírito santo',
      '2',
    ],
    numbering: 2,
  },
  {
    title: 'Deus pai',
    description: '',
    parameter: CreedEnum.GOD,
    texts: [
      'Deus, o eterno Pai, é o criador, o originador, o mantenedor e o soberano de toda a criação. Ele é justo e santo, compassivo e clemente, tardio em irar-se e grande em constante amor e fidelidade. As qualidades e os poderes manifestos no Filho e no Espírito Santo também são os mesmos do Pai.'
    ],
    youtubeIds: ['IqwkEwx0vno'],
    biblical_passages: [
      {
        label: 'Gn 1:1',
        passage: 'No princípio criou Deus o céu e a terra.'
      },
      {
        label: 'Dt 4:35',
        passage: 'A ti te foi mostrado para que soubesses que o Senhor é Deus; nenhum outro há senão ele.'
      },
      {
        label: 'Sl 110:1,4',
        passage: 'Disse o SENHOR ao meu Senhor: Assenta-te à minha mão direita, até que ponha os teus inimigos por escabelo dos teus pés. Jurou o Senhor, e não se arrependerá: tu és um sacerdote eterno, segundo a ordem de Melquisedeque.'
      },
      {
        label: 'Jo 3:16',
        passage: 'Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.'
      },
      {
        label: 'Jo 14:9',
        passage: 'Disse-lhe Jesus: Estou há tanto tempo convosco, e não me tendes conhecido, Filipe? Quem me vê a mim vê o Pai; e como dizes tu: Mostra-nos o Pai?'
      },
      {
        label: '1Co 15:28',
        passage: 'E, quando todas as coisas lhe estiverem sujeitas, então também o mesmo Filho se sujeitará àquele que todas as coisas lhe sujeitou, para que Deus seja tudo em todos.'
      },
      {
        label: '1Tm 1:17',
        passage: 'Ora, ao Rei dos séculos, imortal, invisível, ao único Deus sábio, seja honra e glória para todo o sempre. Amém.'
      },
      {
        label: '1Jo 4:8',
        passage: 'Aquele que não ama não conhece a Deus; porque Deus é amor.'
      },
      {
        label: 'Ap 4:11',
        passage: 'Digno és, Senhor, de receber glória, e honra, e poder; porque tu criaste todas as coisas, e por tua vontade são e foram criadas.'
      },
    ],
    tags: [
      'deus',
      'pai',
      '3',
    ],
    numbering: 3,
  },
  {
    title: 'Deus filho',
    description: '',
    parameter: CreedEnum.SON,
    texts: [
      'Deus, o Filho Eterno, encarnou-se como Jesus Cristo. Por meio dele foram criadas todas as coisas, é revelado o caráter de Deus, efetuada a salvação da humanidade e julgado o mundo. Sendo para sempre verdadeiramente Deus, Ele se tornou também verdadeiramente humano, Jesus, o Cristo. Foi concebido do Espírito Santo e nasceu da virgem Maria. Viveu e experimentou a tentação como ser humano, mas exemplificou perfeitamente a justiça e o amor de Deus. Por seus milagres manifestou o poder de Deus e atestou que era o Messias prometido por Deus. Sofreu e morreu voluntariamente na cruz por nossos pecados e em nosso lugar, foiressuscitado dentre os mortos e ascendeu ao Céu para ministrar no santuário celestial em nosso favor. Virá outra vez, em glória, para o livramento final de seu povo e a restauração de todas as coisas.'
    ],
    youtubeIds: ['geNa4qzDsfo', 'Y7UyJ70_j5E'],
    biblical_passages: [
      {
        label: 'Is 53:4-6',
        passage: 'Verdadeiramente ele tomou sobre si as nossas enfermidades, e as nossas dores levou sobre si; e nós o reputávamos por aflito, ferido de Deus, e oprimido. Mas ele foi ferido por causa das nossas transgressões, e moído por causa das nossas iniqüidades; o castigo que nos traz a paz estava sobre ele, e pelas suas pisaduras fomos sarados. Todos nós andávamos desgarrados como ovelhas; cada um se desviava pelo seu caminho; mas o Senhor fez cair sobre ele a iniqüidade de nós todos.'
      },
      {
        label: 'Dn 9:25-27',
        passage: 'Sabe e entende: desde a saída da ordem para restaurar, e para edificar a Jerusalém, até ao Messias, o Príncipe, haverá sete semanas, e sessenta e duas semanas; as ruas e o muro se reedificarão, mas em tempos angustiosos. E depois das sessenta e duas semanas será cortado o Messias, mas não para si mesmo; e o povo do príncipe, que há de vir, destruirá a cidade e o santuário, e o seu fim será com uma inundação; e até ao fim haverá guerra; estão determinadas as assolações. E ele firmará aliança com muitos por uma semana; e na metade da semana fará cessar o sacrifício e a oblação; e sobre a asa das abominações virá o assolador, e isso até à consumação; e o que está determinado será derramado sobre o assolador.'
      },
      {
        label: 'Lc 1:35',
        passage: 'E, respondendo o anjo, disse-lhe: Descerá sobre ti o Espírito Santo, e a virtude do Altíssimo te cobrirá com a sua sombra; por isso também o Santo, que de ti há de nascer, será chamado Filho de Deus.'
      },
      {
        label: 'Jo 1:1-3,14',
        passage: 'No princípio era o Verbo, e o Verbo estava com Deus, e o Verbo era Deus. Ele estava no princípio com Deus. Todas as coisas foram feitas por ele, e sem ele nada do que foi feito se fez.[...]E o Verbo se fez carne, e habitou entre nós, e vimos a sua glória, como a glória do unigênito do Pai, cheio de graça e de verdade.'
      },
      {
        label: 'Jo 5:22',
        passage: 'E também o Pai a ninguém julga, mas deu ao Filho todo o juízo;'
      },
      {
        label: 'Jo 10:30',
        passage: 'Eu e o Pai somos um.'
      },
      {
        label: 'Jo 14:1-3,9,13',
        passage: 'Não se turbe o vosso coração; credes em Deus, crede também em mim. Na casa de meu Pai há muitas moradas; se não fosse assim, eu vo-lo teria dito. Vou preparar-vos lugar. E quando eu for, e vos preparar lugar, virei outra vez, e vos levarei para mim mesmo, para que onde eu estiver estejais vós também. Disse-lhe Jesus: Estou há tanto tempo convosco, e não me tendes conhecido, Filipe? Quem me vê a mim vê o Pai; e como dizes tu: Mostra-nos o Pai? E tudo quanto pedirdes em meu nome eu o farei, para que o Pai seja glorificado no Filho.'
      },
      {
        label: 'Rm 6:23',
        passage: 'Porque o salário do pecado é a morte, mas o dom gratuito de Deus é a vida eterna, por Cristo Jesus nosso Senhor.'
      },
      {
        label: '1Co 15:3, 4',
        passage: 'Porque primeiramente vos entreguei o que também recebi: que Cristo morreu por nossos pecados, segundo as Escrituras, E que foi sepultado, e que ressuscitou ao terceiro dia, segundo as Escrituras.'
      },
      {
        label: '2Co 3:18',
        passage: 'Mas todos nós, com rosto descoberto, refletindo como um espelho a glória do Senhor, somos transformados de glória em glória na mesma imagem, como pelo Espírito do Senhor.'
      },
      {
        label: '2Co 5:17-19',
        passage: 'Assim que, se alguém está em Cristo, nova criatura é; as coisas velhas já passaram; eis que tudo se fez novo. E tudo isto provém de Deus, que nos reconciliou consigo mesmo por Jesus Cristo, e nos deu o ministério da reconciliação; Isto é, Deus estava em Cristo reconciliando consigo o mundo, não lhes imputando os seus pecados; e pôs em nós a palavra da reconciliação.'
      },
      {
        label: 'Fp 2:5-11',
        passage: 'De sorte que haja em vós o mesmo sentimento que houve também em Cristo Jesus, Que, sendo em forma de Deus, não teve por usurpação ser igual a Deus, Mas esvaziou-se a si mesmo, tomando a forma de servo, fazendo-se semelhante aos homens; E, achado na forma de homem, humilhou-se a si mesmo, sendo obediente até à morte, e morte de cruz. Por isso, também Deus o exaltou soberanamente, e lhe deu um nome que é sobre todo o nome; Para que ao nome de Jesus se dobre todo o joelho dos que estão nos céus, e na terra, e debaixo da terra, E toda a língua confesse que Jesus Cristo é o Senhor, para glória de Deus Pai.'
      },
      {
        label: 'Cl 1:15-19',
        passage: 'O qual é imagem do Deus invisível, o primogênito de toda a criação; Porque nele foram criadas todas as coisas que há nos céus e na terra, visíveis e invisíveis, sejam tronos, sejam dominações, sejam principados, sejam potestades. Tudo foi criado por ele e para ele. E ele é antes de todas as coisas, e todas as coisas subsistem por ele. E ele é a cabeça do corpo, da igreja; é o princípio e o primogênito dentre os mortos, para que em tudo tenha a preeminência. Porque foi do agrado do Pai que toda a plenitude nele habitasse,'
      },
      {
        label: 'Hb 2:9-18',
        passage: 'Vemos, porém, coroado de glória e de honra aquele Jesus que fora feito um pouco menor do que os anjos, por causa da paixão da morte, para que, pela graça de Deus, provasse a morte por todos. Porque convinha que aquele, para quem são todas as coisas, e mediante quem tudo existe, trazendo muitos filhos à glória, consagrasse pelas aflições o príncipe da salvação deles. Porque, assim o que santifica, como os que são santificados, são todos de um; por cuja causa não se envergonha de lhes chamar irmãos, Dizendo:Anunciarei o teu nome a meus irmãos,Cantar-te-ei louvores no meio da congregação. E outra vez: Porei nele a minha confiança. E outra vez: Eis-me aqui a mim, e aos filhos que Deus me deu. E, visto como os filhos participam da carne e do sangue, também ele participou das mesmas coisas, para que pela morte aniquilasse o que tinha o império da morte, isto é, o diabo; E livrasse todos os que, com medo da morte, estavam por toda a vida sujeitos à servidão. Porque, na verdade, ele não tomou os anjos, mas tomou a descendência de Abraão. Por isso convinha que em tudo fosse semelhante aos irmãos, para ser misericordioso e fiel sumo sacerdote naquilo que é de Deus, para expiar os pecados do povo. Porque naquilo que ele mesmo, sendo tentado, padeceu, pode socorrer aos que são tentados.'
      },
      {
        label: 'Hb 8:1,2',
        passage: 'Ora, a suma do que temos dito é que temos um sumo sacerdote tal, que está assentado nos céus à destra do trono da majestade, Ministro do santuário, e do verdadeiro tabernáculo, o qual o Senhor fundou, e não o homem.'
      },
    ],
    tags: [
      'deus',
      'filho',
      'jesus',
      'salvador',
      '4',
    ],
    numbering: 4,
  },
  {
    title: 'O Espírito Santo',
    description: '',
    parameter: CreedEnum.HOLY_SPIRIT,
    texts: [
      'Deus, o Espírito Santo, desempenhou uma parte ativa com o Pai e o Filho na criação, encarnação e redenção. Ele é uma pessoa tanto quanto o Pai e o Filho. Inspirou os escritores das Escrituras. Encheu de poder a vida de Cristo. Atrai e convence os seres humanos; e os que se mostram sensíveis são renovados e transformados por Ele à imagem de Deus. Enviado pelo Pai e pelo Filho para estar sempre com seus filhos, Ele concede dons espirituais à igreja, a habilita a dar testemunho de Cristo e, em harmonia com as Escrituras, guia-a em toda a verdade.'
    ],
    youtubeIds: ['YkKEpO_0g-o'],
    biblical_passages: [
      {
        label: 'Gn 1:1, 2',
        passage: 'No princípio criou Deus o céu e a terra. E a terra era sem forma e vazia; e havia trevas sobre a face do abismo; e o Espírito de Deus se movia sobre a face das águas.'
      },
      {
        label: '2Sm 23:2',
        passage: 'O Espírito do Senhor falou por mim, e a sua palavra está na minha boca.'
      },
      {
        label: 'Sl 51:11',
        passage: 'Não me lances fora da tua presença, e não retires de mim o teu Espírito Santo.'
      },
      {
        label: 'Is 61:1',
        passage: 'O espírito do Senhor DEUS está sobre mim; porque o SENHOR me ungiu, para pregar boas novas aos mansos; enviou-me a restaurar os contritos de coração, a proclamar liberdade aos cativos, e a abertura de prisão aos presos;'
      },
      {
        label: 'Lc 1:35, 4:18',
        passage: 'E, respondendo o anjo, disse-lhe: Descerá sobre ti o Espírito Santo, e a virtude do Altíssimo te cobrirá com a sua sombra; por isso também o Santo, que de ti há de nascer, será chamado Filho de Deus.[...]O Espírito do Senhor é sobre mim, Pois que me ungiu para evangelizar os pobres. Enviou-me a curar os quebrantados de coração,[...]'
      },
      {
        label: 'Jo 14:16-18,26',
        passage: 'Mas agora contas os meus passos; porventura não vigias sobre o meu pecado? A minha transgressão está selada num saco, e amontoas as minhas iniqüidades. E, na verdade, caindo a montanha, desfaz-se; e a rocha se remove do seu lugar.[...]Mas aquele Consolador, o Espírito Santo, que o Pai enviará em meu nome, esse vos ensinará todas as coisas, e vos fará lembrar de tudo quanto vos tenho dito.'
      },
      {
        label: 'Jo 15:26',
        passage: 'Mas, quando vier o Consolador, que eu da parte do Pai vos hei de enviar, aquele Espírito de verdade, que procede do Pai, ele testificará de mim.'
      },
      {
        label: 'Jo 16:7-13',
        passage: 'Todavia digo-vos a verdade, que vos convém que eu vá; porque, se eu não for, o Consolador não virá a vós; mas, quando eu for, vo-lo enviarei. E, quando ele vier, convencerá o mundo do pecado, e da justiça e do juízo. Do pecado, porque não crêem em mim; Da justiça, porque vou para meu Pai, e não me vereis mais; E do juízo, porque já o príncipe deste mundo está julgado. Ainda tenho muito que vos dizer, mas vós não o podeis suportar agora. Mas, quando vier aquele Espírito de verdade, ele vos guiará em toda a verdade; porque não falará de si mesmo, mas dirá tudo o que tiver ouvido, e vos anunciará o que há de vir.'
      },
      {
        label: 'At 1:8',
        passage: 'Mas recebereis a virtude do Espírito Santo, que há de vir sobre vós; e ser-me-eis testemunhas, tanto em Jerusalém como em toda a Judéia e Samaria, e até aos confins da terra.'
      },
      {
        label: 'At 5:3',
        passage: 'Disse então Pedro: Ananias, por que encheu Satanás o teu coração, para que mentisses ao Espírito Santo, e retivesses parte do preço da herdade?'
      },
      {
        label: 'At 10:38',
        passage: 'Como Deus ungiu a Jesus de Nazaré com o Espírito Santo e com virtude; o qual andou fazendo bem, e curando a todos os oprimidos do diabo, porque Deus era com ele.'
      },
      {
        label: 'Rm 5:5',
        passage: 'E a esperança não traz confusão, porquanto o amor de Deus está derramado em nossos corações pelo Espírito Santo que nos foi dado.'
      },
      {
        label: '1Co 12:7-11',
        passage: 'Mas a manifestação do Espírito é dada a cada um, para o que for útil. Porque a um pelo Espírito é dada a palavra da sabedoria; e a outro, pelo mesmo Espírito, a palavra da ciência; E a outro, pelo mesmo Espírito, a fé; e a outro, pelo mesmo Espírito, os dons de curar; E a outro a operação de maravilhas; e a outro a profecia; e a outro o dom de discernir os espíritos; e a outro a variedade de línguas; e a outro a interpretação das línguas. Mas um só e o mesmo Espírito opera todas estas coisas, repartindo particularmente a cada um como quer.'
      },
      {
        label: '2Co 3:18',
        passage: 'Mas todos nós, com rosto descoberto, refletindo como um espelho a glória do Senhor, somos transformados de glória em glória na mesma imagem, como pelo Espírito do Senhor.'
      },
      {
        label: '2Pe 1:21',
        passage: 'Porque a profecia nunca foi produzida por vontade de homem algum, mas os homens santos de Deus falaram inspirados pelo Espírito Santo.'
      },
    ],
    tags: [
      'espírito',
      'espírito santo',
      'consolador',
      '5',
    ],
    numbering: 5,
  },
  {
    title: 'A Criação',
    description: '',
    parameter: CreedEnum.THE_CREATION,
    texts: [
      'Deus comunica por meio das Escrituras o relato autêntico e histórico de sua atividade criadora. Ele criou o universo; e, em uma criação recente, que durou seis dias, o Senhor fez “os céus e a terra, o mar e tudo o que neles há” e descansou no sétimo dia. Assim Ele estabeleceu o sábado como memorial perpétuo da obra que Ele realizou e terminou em seis dias literais que, junto com o sábado, constituem a mesma unidade de tempo que hoje chamamos de semana. O primeiro homem e a primeira mulher foram formados à imagem de Deus como obra-prima da criação, foi-lhes dado domínio sobre o mundo e atribuiu-se-lhes a responsabilidade de cuidar dele. Quando o mundo foi concluído, ele era “muito bom”, proclamando a glória de Deus.'
    ],
    youtubeIds: ['R76ln9L7Alo'],
    biblical_passages: [
      {
        label: 'Gn 1',
        passage: 'No princípio criou Deus o céu e a terra. E a terra era sem forma e vazia; e havia trevas sobre a face do abismo; e o Espírito de Deus se movia sobre a face das águas. E disse Deus: Haja luz; e houve luz. E viu Deus que era boa a luz; e fez Deus separação entre a luz e as trevas. E Deus chamou à luz Dia; e às trevas chamou Noite. E foi a tarde e a manhã, o dia primeiro. E disse Deus: Haja uma expansão no meio das águas, e haja separação entre águas e águas. E fez Deus a expansão, e fez separação entre as águas que estavam debaixo da expansão e as águas que estavam sobre a expansão; e assim foi. E chamou Deus à expansão Céus, e foi a tarde e a manhã, o dia segundo. E disse Deus: Ajuntem-se as águas debaixo dos céus num lugar; e apareça a porção seca; e assim foi. E chamou Deus à porção seca Terra; e ao ajuntamento das águas chamou Mares; e viu Deus que era bom. E disse Deus: Produza a terra erva verde, erva que dê semente, árvore frutífera que dê fruto segundo a sua espécie, cuja semente está nela sobre a terra; e assim foi. E a terra produziu erva, erva dando semente conforme a sua espécie, e a árvore frutífera, cuja semente está nela conforme a sua espécie; e viu Deus que era bom. E foi a tarde e a manhã, o dia terceiro. E disse Deus: Haja luminares na expansão dos céus, para haver separação entre o dia e a noite; e sejam eles para sinais e para tempos determinados e para dias e anos. E sejam para luminares na expansão dos céus, para iluminar a terra; e assim foi. E fez Deus os dois grandes luminares: o luminar maior para governar o dia, e o luminar menor para governar a noite; e fez as estrelas. E Deus os pôs na expansão dos céus para iluminar a terra, E para governar o dia e a noite, e para fazer separação entre a luz e as trevas; e viu Deus que era bom. E foi a tarde e a manhã, o dia quarto. E disse Deus: Produzam as águas abundantemente répteis de alma vivente; e voem as aves sobre a face da expansão dos céus. E Deus criou as grandes baleias, e todo o réptil de alma vivente que as águas abundantemente produziram conforme as suas espécies; e toda a ave de asas conforme a sua espécie; e viu Deus que era bom. E Deus os abençoou, dizendo: Frutificai e multiplicai-vos, e enchei as águas nos mares; e as aves se multipliquem na terra. E foi a tarde e a manhã, o dia quinto. E disse Deus: Produza a terra alma vivente conforme a sua espécie; gado, e répteis e feras da terra conforme a sua espécie; e assim foi. E fez Deus as feras da terra conforme a sua espécie, e o gado conforme a sua espécie, e todo o réptil da terra conforme a sua espécie; e viu Deus que era bom. E disse Deus: Façamos o homem à nossa imagem, conforme a nossa semelhança; e domine sobre os peixes do mar, e sobre as aves dos céus, e sobre o gado, e sobre toda a terra, e sobre todo o réptil que se move sobre a terra. E criou Deus o homem à sua imagem; à imagem de Deus o criou; homem e mulher os criou. E Deus os abençoou, e Deus lhes disse: Frutificai e multiplicai-vos, e enchei a terra, e sujeitai-a; e dominai sobre os peixes do mar e sobre as aves dos céus, e sobre todo o animal que se move sobre a terra. E disse Deus: Eis que vos tenho dado toda a erva que dê semente, que está sobre a face de toda a terra; e toda a árvore, em que há fruto que dê semente, ser-vos-á para mantimento. E a todo o animal da terra, e a toda a ave dos céus, e a todo o réptil da terra, em que há alma vivente, toda a erva verde será para mantimento; e assim foi. E viu Deus tudo quanto tinha feito, e eis que era muito bom; e foi a tarde e a manhã, o dia sexto.'
      },
      {
        label: 'Gn 2',
        passage: 'Assim os céus, a terra e todo o seu exército foram acabados. E havendo Deus acabado no dia sétimo a obra que fizera, descansou no sétimo dia de toda a sua obra, que tinha feito. E abençoou Deus o dia sétimo, e o santificou; porque nele descansou de toda a sua obra que Deus criara e fizera. Estas são as origens dos céus e da terra, quando foram criados; no dia em que o Senhor Deus fez a terra e os céus, E toda a planta do campo que ainda não estava na terra, e toda a erva do campo que ainda não brotava; porque ainda o Senhor Deus não tinha feito chover sobre a terra, e não havia homem para lavrar a terra. Um vapor, porém, subia da terra, e regava toda a face da terra. E formou o Senhor Deus o homem do pó da terra, e soprou em suas narinas o fôlego da vida; e o homem foi feito alma vivente. E plantou o Senhor Deus um jardim no Éden, do lado oriental; e pôs ali o homem que tinha formado. E o Senhor Deus fez brotar da terra toda a árvore agradável à vista, e boa para comida; e a árvore da vida no meio do jardim, e a árvore do conhecimento do bem e do mal. E saía um rio do Éden para regar o jardim; e dali se dividia e se tornava em quatro braços. O nome do primeiro é Pisom; este é o que rodeia toda a terra de Havilá, onde há ouro. E o ouro dessa terra é bom; ali há o bdélio, e a pedra sardônica. E o nome do segundo rio é Giom; este é o que rodeia toda a terra de Cuxe. E o nome do terceiro rio é Tigre; este é o que vai para o lado oriental da Assíria; e o quarto rio é o Eufrates. E tomou o Senhor Deus o homem, e o pôs no jardim do Éden para o lavrar e o guardar. E ordenou o Senhor Deus ao homem, dizendo: De toda a árvore do jardim comerás livremente, Mas da árvore do conhecimento do bem e do mal, dela não comerás; porque no dia em que dela comeres, certamente morrerás. E disse o Senhor Deus: Não é bom que o homem esteja só; far-lhe-ei uma ajudadora idônea para ele. Havendo, pois, o Senhor Deus formado da terra todo o animal do campo, e toda a ave dos céus, os trouxe a Adão, para este ver como lhes chamaria; e tudo o que Adão chamou a toda a alma vivente, isso foi o seu nome. E Adão pôs os nomes a todo o gado, e às aves dos céus, e a todo o animal do campo; mas para o homem não se achava ajudadora idônea. Então o Senhor Deus fez cair um sono pesado sobre Adão, e este adormeceu; e tomou uma das suas costelas, e cerrou a carne em seu lugar; E da costela que o Senhor Deus tomou do homem, formou uma mulher, e trouxe-a a Adão. E disse Adão: Esta é agora osso dos meus ossos, e carne da minha carne; esta será chamada mulher, porquanto do homem foi tomada. Portanto deixará o homem o seu pai e a sua mãe, e apegar-se-á à sua mulher, e serão ambos uma carne. E ambos estavam nus, o homem e a sua mulher; e não se envergonhavam.'
      },
      {
        label: 'Gn 5',
        passage: 'Este é o livro das gerações de Adão. No dia em que Deus criou o homem, à semelhança de Deus o fez. Homem e mulher os criou; e os abençoou e chamou o seu nome Adão, no dia em que foram criados. E Adão viveu cento e trinta anos, e gerou um filho à sua semelhança, conforme a sua imagem, e pôs-lhe o nome de Sete. E foram os dias de Adão, depois que gerou a Sete, oitocentos anos, e gerou filhos e filhas. E foram todos os dias que Adão viveu, novecentos e trinta anos, e morreu. E viveu Sete cento e cinco anos, e gerou a Enos. E viveu Sete, depois que gerou a Enos, oitocentos e sete anos, e gerou filhos e filhas. E foram todos os dias de Sete novecentos e doze anos, e morreu. E viveu Enos noventa anos, e gerou a Cainã. E viveu Enos, depois que gerou a Cainã, oitocentos e quinze anos, e gerou filhos e filhas. E foram todos os dias de Enos novecentos e cinco anos, e morreu. E viveu Cainã setenta anos, e gerou a Maalaleel. E viveu Cainã, depois que gerou a Maalaleel, oitocentos e quarenta anos, e gerou filhos e filhas. E foram todos os dias de Cainã novecentos e dez anos, e morreu. E viveu Maalaleel sessenta e cinco anos, e gerou a Jerede. E viveu Maalaleel, depois que gerou a Jerede, oitocentos e trinta anos, e gerou filhos e filhas. E foram todos os dias de Maalaleel oitocentos e noventa e cinco anos, e morreu. E viveu Jerede cento e sessenta e dois anos, e gerou a Enoque. E viveu Jerede, depois que gerou a Enoque, oitocentos anos, e gerou filhos e filhas. E foram todos os dias de Jerede novecentos e sessenta e dois anos, e morreu. E viveu Enoque sessenta e cinco anos, e gerou a Matusalém. E andou Enoque com Deus, depois que gerou a Matusalém, trezentos anos, e gerou filhos e filhas. E foram todos os dias de Enoque trezentos e sessenta e cinco anos. E andou Enoque com Deus; e não apareceu mais, porquanto Deus para si o tomou. E viveu Matusalém cento e oitenta e sete anos, e gerou a Lameque. E viveu Matusalém, depois que gerou a Lameque, setecentos e oitenta e dois anos, e gerou filhos e filhas. E foram todos os dias de Matusalém novecentos e sessenta e nove anos, e morreu. E viveu Lameque cento e oitenta e dois anos, e gerou um filho, A quem chamou Noé, dizendo: Este nos consolará acerca de nossas obras e do trabalho de nossas mãos, por causa da terra que o Senhor amaldiçoou. E viveu Lameque, depois que gerou a Noé, quinhentos e noventa e cinco anos, e gerou filhos e filhas. E foram todos os dias de Lameque setecentos e setenta e sete anos, e morreu. E era Noé da idade de quinhentos anos, e gerou Noé a Sem, Cão e Jafé.'
      },
      {
        label: 'Gn 11',
        passage: 'E era toda a terra de uma mesma língua e de uma mesma fala. E aconteceu que, partindo eles do oriente, acharam um vale na terra de Sinar; e habitaram ali. E disseram uns aos outros: Eia, façamos tijolos e queimemo-los bem. E foi-lhes o tijolo por pedra, e o betume por cal. E disseram: Eia, edifiquemos nós uma cidade e uma torre cujo cume toque nos céus, e façamo-nos um nome, para que não sejamos espalhados sobre a face de toda a terra. Então desceu o Senhor para ver a cidade e a torre que os filhos dos homens edificavam; E o Senhor disse: Eis que o povo é um, e todos têm uma mesma língua; e isto é o que começam a fazer; e agora, não haverá restrição para tudo o que eles intentarem fazer. Eia, desçamos e confundamos ali a sua língua, para que não entenda um a língua do outro. Assim o Senhor os espalhou dali sobre a face de toda a terra; e cessaram de edificar a cidade. Por isso se chamou o seu nome Babel, porquanto ali confundiu o Senhor a língua de toda a terra, e dali os espalhou o Senhor sobre a face de toda a terra. Estas são as gerações de Sem: Sem era da idade de cem anos e gerou a Arfaxade, dois anos depois do dilúvio. E viveu Sem, depois que gerou a Arfaxade, quinhentos anos, e gerou filhos e filhas. E viveu Arfaxade trinta e cinco anos, e gerou a Selá. E viveu Arfaxade depois que gerou a Selá, quatrocentos e três anos, e gerou filhos e filhas. E viveu Selá trinta anos, e gerou a Éber; E viveu Selá, depois que gerou a Éber, quatrocentos e três anos, e gerou filhos e filhas. E viveu Éber trinta e quatro anos, e gerou a Pelegue. E viveu Éber, depois que gerou a Pelegue, quatrocentos e trinta anos, e gerou filhos e filhas. E viveu Pelegue trinta anos, e gerou a Reú. E viveu Pelegue, depois que gerou a Reú, duzentos e nove anos, e gerou filhos e filhas. E viveu Reú trinta e dois anos, e gerou a Serugue. E viveu Reú, depois que gerou a Serugue, duzentos e sete anos, e gerou filhos e filhas. E viveu Serugue trinta anos, e gerou a Naor. E viveu Serugue, depois que gerou a Naor, duzentos anos, e gerou filhos e filhas. E viveu Naor vinte e nove anos, e gerou a Terá. E viveu Naor, depois que gerou a Terá, cento e dezenove anos, e gerou filhos e filhas. E viveu Terá setenta anos, e gerou a Abrão, a Naor, e a Harã. E estas são as gerações de Terá: Terá gerou a Abrão, a Naor, e a Harã; e Harã gerou a Ló. E morreu Harã estando seu pai Terá ainda vivo, na terra do seu nascimento, em Ur dos caldeus. E tomaram Abrão e Naor mulheres para si: o nome da mulher de Abrão era Sarai, e o nome da mulher de Naor era Milca, filha de Harã, pai de Milca e pai de Iscá. E Sarai foi estéril, não tinha filhos. E tomou Terá a Abrão seu filho, e a Ló, filho de Harã, filho de seu filho, e a Sarai sua nora, mulher de seu filho Abrão, e saiu com eles de Ur dos caldeus, para ir à terra de Canaã; e vieram até Harã, e habitaram ali. E foram os dias de Terá duzentos e cinco anos, e morreu Terá em Harã.'
      },
      {
        label: 'Êx 20:8-11',
        passage: 'Lembra-te do dia do sábado, para o santificar. Seis dias trabalharás, e farás toda a tua obra. Mas o sétimo dia é o sábado do Senhor teu Deus; não farás nenhuma obra, nem tu, nem teu filho, nem tua filha, nem o teu servo, nem a tua serva, nem o teu animal, nem o teu estrangeiro, que está dentro das tuas portas. Porque em seis dias fez o Senhor os céus e a terra, o mar e tudo que neles há, e ao sétimo dia descansou; portanto abençoou o Senhor o dia do sábado, e o santificou.'
      },
      {
        label: 'Sl 19:1-6',
        passage: 'Os céus declaram a glória de Deus e o firmamento anuncia a obra das suas mãos. Um dia faz declaração a outro dia, e uma noite mostra sabedoria a outra noite. Não há linguagem nem fala onde não se ouça a sua voz. A sua linha se estende por toda a terra, e as suas palavras até ao fim do mundo. Neles pôs uma tenda para o sol, O qual é como um noivo que sai do seu tálamo, e se alegra como um herói, a correr o seu caminho. A sua saída é desde uma extremidade dos céus, e o seu curso até à outra extremidade, e nada se esconde ao seu calor.'
      },
      {
        label: 'Sl 33:6,9',
        passage: 'Pela palavra do Senhor foram feitos os céus, e todo o exército deles pelo espírito da sua boca.[...]Porque falou, e foi feito; mandou, e logo apareceu.'
      },
      {
        label: 'Sl 104',
        passage: 'Bendize, ó minha alma, ao SENHOR! SENHOR Deus meu, tu és magnificentíssimo; estás vestido de glória e de majestade. Ele se cobre de luz como de um vestido, estende os céus como uma cortina. Põe nas águas as vigas das suas câmaras; faz das nuvens o seu carro, anda sobre as asas do vento. Faz dos seus anjos espíritos, dos seus ministros um fogo abrasador. Lançou os fundamentos da terra; ela não vacilará em tempo algum. Tu a cobriste com o abismo, como com um vestido; as águas estavam sobre os montes. À tua repreensão fugiram; à voz do teu trovão se apressaram. Subiram aos montes, desceram aos vales, até ao lugar que para elas fundaste. Termo lhes puseste, que não ultrapassarão, para que não tornem mais a cobrir a terra. Tu, que fazes sair as fontes nos vales, as quais correm entre os montes. Dão de beber a todo o animal do campo; os jumentos monteses matam a sua sede. Junto delas as aves do céu terão a sua habitação, cantando entre os ramos. Ele rega os montes desde as suas câmaras; a terra farta-se do fruto das suas obras. Faz crescer a erva para o gado, e a verdura para o serviço do homem, para fazer sair da terra o pão, E o vinho que alegra o coração do homem, e o azeite que faz reluzir o seu rosto, e o pão que fortalece o coração do homem. As árvores do Senhor fartam-se de seiva, os cedros do Líbano que ele plantou, Onde as aves se aninham; quanto à cegonha, a sua casa é nas faias. Os altos montes são para as cabras monteses, e os rochedos são refúgio para os coelhos. Designou a lua para as estações; o sol conhece o seu ocaso. Ordenas a escuridão, e faz-se noite, na qual saem todos os animais da selva. Os leõezinhos bramam pela presa, e de Deus buscam o seu sustento. Nasce o sol e logo se acolhem, e se deitam nos seus covis. Então sai o homem à sua obra e ao seu trabalho, até à tarde. Ó Senhor, quão variadas são as tuas obras! Todas as coisas fizeste com sabedoria; cheia está a terra das tuas riquezas. Assim é este mar grande e muito espaçoso, onde há seres sem número, animais pequenos e grandes. Ali andam os navios; e o leviatã que formaste para nele folgar. Todos esperam de ti, que lhes dês o seu sustento em tempo oportuno. Dando-lho tu, eles o recolhem; abres a tua mão, e se enchem de bens. Escondes o teu rosto, e ficam perturbados; se lhes tiras o fôlego, morrem, e voltam para o seu pó. Envias o teu Espírito, e são criados, e assim renovas a face da terra. A glória do Senhor durará para sempre; o Senhor se alegrará nas suas obras. Olhando ele para a terra, ela treme; tocando nos montes, logo fumegam. Cantarei ao Senhor enquanto eu viver; cantarei louvores ao meu Deus, enquanto eu tiver existência. A minha meditação acerca dele será suave; eu me alegrarei no Senhor. Desapareçam da terra os pecadores, e os ímpios não sejam mais. Bendize, ó minha alma, ao Senhor. Louvai ao Senhor.'
      },
      {
        label: 'Is 45:12,18',
        passage: 'Eu fiz a terra, e criei nela o homem; eu o fiz; as minhas mãos estenderam os céus, e a todos os seus exércitos dei as minhas ordens. Porque assim diz o Senhor que tem criado os céus, o Deus que formou a terra, e a fez; ele a confirmou, não a criou vazia, mas a formou para que fosse habitada: Eu sou o Senhor e não há outro.'
      },
      {
        label: 'At 17:24',
        passage: 'O Deus que fez o mundo e tudo que nele há, sendo Senhor do céu e da terra, não habita em templos feitos por mãos de homens;'
      },
      {
        label: 'Cl 1:16',
        passage: 'Porque nele foram criadas todas as coisas que há nos céus e na terra, visíveis e invisíveis, sejam tronos, sejam dominações, sejam principados, sejam potestades. Tudo foi criado por ele e para ele.'
      },
      {
        label: 'Hb 1:2',
        passage: 'A quem constituiu herdeiro de tudo, por quem fez também o mundo.'
      },
      {
        label: 'Hb 11:3',
        passage: 'Pela fé entendemos que os mundos pela palavra de Deus foram criados; de maneira que aquilo que se vê não foi feito do que é aparente.'
      },
      {
        label: 'Ap 10:6',
        passage: 'E jurou por aquele que vive para todo o sempre, o qual criou o céu e o que nele há, e a terra e o que nela há, e o mar e o que nele há, que não haveria mais demora;'
      },
      {
        label: 'Ap 14:7',
        passage: 'Dizendo com grande voz: Temei a Deus, e dai-lhe glória; porque é vinda a hora do seu juízo. E adorai aquele que fez o céu, e a terra, e o mar, e as fontes das águas.'
      },
    ],
    //;
    tags: [
      'criação',
      'gênesis',
      'genesis',
      '6',
    ],
    numbering: 6,
  },
  {
    title: 'A natureza da humanidade',
    description: '',
    parameter: CreedEnum.NATURE_HUMANITY,
    texts: [
      'O homem e a mulher foram formados à imagem de Deus com individualidade, poder e liberdade de pensar e agir. Conquanto tenham sido criados como seres livres, cada um é uma unidade indivisível de corpo, mente e espírito, e dependente de Deus quanto à vida, respiração e tudo o mais. Quando nossos primeiros pais desobedeceram a Deus, negaram sua dependência dele e caíram de sua elevada posição. A imagem de Deus neles foi desfigurada, e tornaram-se sujeitos à morte. Seus descendentes partilham dessa natureza caída e de suas consequências. Nascem com fraquezas e tendências para o mal. Mas Deus, em Cristo, reconciliou consigo o mundo e por meio de seu Espírito restaura nos mortais penitentes a imagem de seu Criador. Criados para a glória de Deus, são chamados para amá-lo e amar uns aos outros, e para cuidar de seu ambiente.'
    ],
    youtubeIds: ['kxQM09sVaZk'],
    biblical_passages: [
      {
        label: 'Gn 1:26-28',
        passage: 'E disse Deus: Façamos o homem à nossa imagem, conforme a nossa semelhança; e domine sobre os peixes do mar, e sobre as aves dos céus, e sobre o gado, e sobre toda a terra, e sobre todo o réptil que se move sobre a terra. E criou Deus o homem à sua imagem; à imagem de Deus o criou; homem e mulher os criou. E Deus os abençoou, e Deus lhes disse: Frutificai e multiplicai-vos, e enchei a terra, e sujeitai-a; e dominai sobre os peixes do mar e sobre as aves dos céus, e sobre todo o animal que se move sobre a terra.'
      },
      {
        label: 'Gn 2:7,15',
        passage: 'E formou o Senhor Deus o homem do pó da terra, e soprou em suas narinas o fôlego da vida; e o homem foi feito alma vivente. E tomou o Senhor Deus o homem, e o pôs no jardim do Éden para o lavrar e o guardar.'
      },
      {
        label: 'Gn 3',
        passage: 'Ora, a serpente era mais astuta que todas as alimárias do campo que o SENHOR Deus tinha feito. E esta disse à mulher: É assim que Deus disse: Não comereis de toda a árvore do jardim? E disse a mulher à serpente: Do fruto das árvores do jardim comeremos, Mas do fruto da árvore que está no meio do jardim, disse Deus: Não comereis dele, nem nele tocareis para que não morrais. Então a serpente disse à mulher: Certamente não morrereis. Porque Deus sabe que no dia em que dele comerdes se abrirão os vossos olhos, e sereis como Deus, sabendo o bem e o mal. E viu a mulher que aquela árvore era boa para se comer, e agradável aos olhos, e árvore desejável para dar entendimento; tomou do seu fruto, e comeu, e deu também a seu marido, e ele comeu com ela. Então foram abertos os olhos de ambos, e conheceram que estavam nus; e coseram folhas de figueira, e fizeram para si aventais. E ouviram a voz do Senhor Deus, que passeava no jardim pela viração do dia; e esconderam-se Adão e sua mulher da presença do Senhor Deus, entre as árvores do jardim. E chamou o Senhor Deus a Adão, e disse-lhe: Onde estás? E ele disse: Ouvi a tua voz soar no jardim, e temi, porque estava nu, e escondi-me. E Deus disse: Quem te mostrou que estavas nu? Comeste tu da árvore de que te ordenei que não comesses? Então disse Adão: A mulher que me deste por companheira, ela me deu da árvore, e comi. E disse o Senhor Deus à mulher: Por que fizeste isto? E disse a mulher: A serpente me enganou, e eu comi. Então o Senhor Deus disse à serpente: Porquanto fizeste isto, maldita serás mais que toda a fera, e mais que todos os animais do campo; sobre o teu ventre andarás, e pó comerás todos os dias da tua vida. E porei inimizade entre ti e a mulher, e entre a tua semente e a sua semente; esta te ferirá a cabeça, e tu lhe ferirás o calcanhar. E à mulher disse: Multiplicarei grandemente a tua dor, e a tua conceição; com dor darás à luz filhos; e o teu desejo será para o teu marido, e ele te dominará. E a Adão disse: Porquanto deste ouvidos à voz de tua mulher, e comeste da árvore de que te ordenei, dizendo: Não comerás dela, maldita é a terra por causa de ti; com dor comerás dela todos os dias da tua vida. Espinhos, e cardos também, te produzirá; e comerás a erva do campo. No suor do teu rosto comerás o teu pão, até que te tornes à terra; porque dela foste tomado; porquanto és pó e em pó te tornarás. E chamou Adão o nome de sua mulher Eva; porquanto era a mãe de todos os viventes. E fez o Senhor Deus a Adão e à sua mulher túnicas de peles, e os vestiu. Então disse o Senhor Deus: Eis que o homem é como um de nós, sabendo o bem e o mal; ora, para que não estenda a sua mão, e tome também da árvore da vida, e coma e viva eternamente, O Senhor Deus, pois, o lançou fora do jardim do Éden, para lavrar a terra de que fora tomado. E havendo lançado fora o homem, pôs querubins ao oriente do jardim do Éden, e uma espada inflamada que andava ao redor, para guardar o caminho da árvore da vida.'
      },
      {
        label: 'Sl 8:4-8',
        passage: 'Que é o homem mortal para que te lembres dele? e o filho do homem, para que o visites? Pois pouco menor o fizeste do que os anjos, e de glória e de honra o coroaste. Fazes com que ele tenha domínio sobre as obras das tuas mãos; tudo puseste debaixo de seus pés: Todas as ovelhas e bois, assim como os animais do campo, As aves dos céus, e os peixes do mar, e tudo o que passa pelas veredas dos mares.'
      },
      {
        label: 'Sl 51:5,10',
        passage: 'Eis que em iniqüidade fui formado, e em pecado me concebeu minha mãe.[...]Cria em mim, ó Deus, um coração puro, e renova em mim um espírito reto.'
      },
      {
        label: 'Sl 58:3',
        passage: 'Alienam-se os ímpios desde a madre; andam errados desde que nasceram, falando mentiras.'
      },
      {
        label: 'Jr 17:9',
        passage: 'Enganoso é o coração, mais do que todas as coisas, e perverso; quem o conhecerá?'
      },
      {
        label: 'At 17:24-28',
        passage: 'O Deus que fez o mundo e tudo que nele há, sendo Senhor do céu e da terra, não habita em templos feitos por mãos de homens; Nem tampouco é servido por mãos de homens, como que necessitando de alguma coisa; pois ele mesmo é quem dá a todos a vida, e a respiração, e todas as coisas; E de um só sangue fez toda a geração dos homens, para habitar sobre toda a face da terra, determinando os tempos já dantes ordenados, e os limites da sua habitação; Para que buscassem ao Senhor, se porventura, tateando, o pudessem achar; ainda que não está longe de cada um de nós; Porque nele vivemos, e nos movemos, e existimos; como também alguns dos vossos poetas disseram: Pois somos também sua geração.'
      },
      {
        label: 'Rm 5:12-17',
        passage: 'Portanto, como por um homem entrou o pecado no mundo, e pelo pecado a morte, assim também a morte passou a todos os homens por isso que todos pecaram. Porque até à lei estava o pecado no mundo, mas o pecado não é imputado, não havendo lei. No entanto, a morte reinou desde Adão até Moisés, até sobre aqueles que não tinham pecado à semelhança da transgressão de Adão, o qual é a figura daquele que havia de vir. Mas não é assim o dom gratuito como a ofensa. Porque, se pela ofensa de um morreram muitos, muito mais a graça de Deus, e o dom pela graça, que é de um só homem, Jesus Cristo, abundou sobre muitos. E não foi assim o dom como a ofensa, por um só que pecou. Porque o juízo veio de uma só ofensa, na verdade, para condenação, mas o dom gratuito veio de muitas ofensas para justificação. Porque, se pela ofensa de um só, a morte reinou por esse, muito mais os que recebem a abundância da graça, e do dom da justiça, reinarão em vida por um só, Jesus Cristo.'
      },
      {
        label: '2Co 5:19, 20',
        passage: 'Isto é, Deus estava em Cristo reconciliando consigo o mundo, não lhes imputando os seus pecados; e pôs em nós a palavra da reconciliação. De sorte que somos embaixadores da parte de Cristo, como se Deus por nós rogasse. Rogamo-vos, pois, da parte de Cristo, que vos reconcilieis com Deus.'
      },
      {
        label: 'Ef 2:3',
        passage: 'Entre os quais todos nós também antes andávamos nos desejos da nossa carne, fazendo a vontade da carne e dos pensamentos; e éramos por natureza filhos da ira, como os outros também.'
      },
      {
        label: '1Ts 5:23',
        passage: 'E o mesmo Deus de paz vos santifique em tudo; e todo o vosso espírito, e alma, e corpo, sejam plenamente conservados irrepreensíveis para a vinda de nosso Senhor Jesus Cristo.'
      },
      {
        label: '1Jo 3:4',
        passage: 'Qualquer que comete pecado, também comete iniqüidade; porque o pecado é iniqüidade.'
      },
      {
        label: '1Jo 4:7,8,11,20',
        passage: 'Amados, amemo-nos uns aos outros; porque o amor é de Deus; e qualquer que ama é nascido de Deus e conhece a Deus.Aquele que não ama não conhece a Deus; porque Deus é amor.Amados, se Deus assim nos amou, também nòs devemos amar uns aos outros.Se alguém diz: Eu amo a Deus, e odeia a seu irmão, é mentiroso. Pois quem não ama a seu irmão, ao qual viu, como pode amar a Deus, a quem não viu?'
      },
    ],
    tags: [
      'pecado',
      'homem',
      'morte',
      'queda',
      '7',
    ],
    numbering: 7,
  },
  {
    title: 'O grande conflito',
    description: '',
    parameter: CreedEnum.GREAT_CONTROVERSY,
    texts: [
      'Toda a humanidade está agora envolvida no grande conflito entre Cristo e Satanás quanto ao caráter de Deus, sua lei e sua soberania sobre o universo. Esse conflito originou-se no Céu quando um ser criado, dotado de liberdade de escolha, por exaltação própria, tornou-se Satanás, o adversário de Deus, e conduziu à rebelião uma parte dos anjos. Ele introduziu o espírito de rebelião neste mundo, ao induzir Adão e Eva ao pecado. Esse pecado humano resultou na deformação da imagem de Deus na humanidade, no transtorno do mundo criado e em sua consequente devastação por ocasião do dilúvio global, conforme retratado no relato histórico de Gênesis 1 a 11. Observado por toda a criação, este mundo tornou-se o palco do conflito universal, dentro do qual será finalmente vindicado o Deus de amor. Para ajudar seu povo nesse conflito, Cristo envia o Espírito Santo e os anjos leais para os guiar, proteger e amparar no caminho da salvação.'
    ],
    youtubeIds: ['os44HHZukSs'],
    biblical_passages: [
      {
        label: 'Gn 3',
        passage: 'Ora, a serpente era mais astuta que todas as alimárias do campo que o SENHOR Deus tinha feito. E esta disse à mulher: É assim que Deus disse: Não comereis de toda a árvore do jardim? E disse a mulher à serpente: Do fruto das árvores do jardim comeremos, Mas do fruto da árvore que está no meio do jardim, disse Deus: Não comereis dele, nem nele tocareis para que não morrais. Então a serpente disse à mulher: Certamente não morrereis. Porque Deus sabe que no dia em que dele comerdes se abrirão os vossos olhos, e sereis como Deus, sabendo o bem e o mal. E viu a mulher que aquela árvore era boa para se comer, e agradável aos olhos, e árvore desejável para dar entendimento; tomou do seu fruto, e comeu, e deu também a seu marido, e ele comeu com ela. Então foram abertos os olhos de ambos, e conheceram que estavam nus; e coseram folhas de figueira, e fizeram para si aventais. E ouviram a voz do Senhor Deus, que passeava no jardim pela viração do dia; e esconderam-se Adão e sua mulher da presença do Senhor Deus, entre as árvores do jardim. E chamou o Senhor Deus a Adão, e disse-lhe: Onde estás? E ele disse: Ouvi a tua voz soar no jardim, e temi, porque estava nu, e escondi-me. E Deus disse: Quem te mostrou que estavas nu? Comeste tu da árvore de que te ordenei que não comesses? Então disse Adão: A mulher que me deste por companheira, ela me deu da árvore, e comi. E disse o Senhor Deus à mulher: Por que fizeste isto? E disse a mulher: A serpente me enganou, e eu comi. Então o Senhor Deus disse à serpente: Porquanto fizeste isto, maldita serás mais que toda a fera, e mais que todos os animais do campo; sobre o teu ventre andarás, e pó comerás todos os dias da tua vida. E porei inimizade entre ti e a mulher, e entre a tua semente e a sua semente; esta te ferirá a cabeça, e tu lhe ferirás o calcanhar. E à mulher disse: Multiplicarei grandemente a tua dor, e a tua conceição; com dor darás à luz filhos; e o teu desejo será para o teu marido, e ele te dominará. E a Adão disse: Porquanto deste ouvidos à voz de tua mulher, e comeste da árvore de que te ordenei, dizendo: Não comerás dela, maldita é a terra por causa de ti; com dor comerás dela todos os dias da tua vida. Espinhos, e cardos também, te produzirá; e comerás a erva do campo. No suor do teu rosto comerás o teu pão, até que te tornes à terra; porque dela foste tomado; porquanto és pó e em pó te tornarás. E chamou Adão o nome de sua mulher Eva; porquanto era a mãe de todos os viventes. E fez o Senhor Deus a Adão e à sua mulher túnicas de peles, e os vestiu. Então disse o Senhor Deus: Eis que o homem é como um de nós, sabendo o bem e o mal; ora, para que não estenda a sua mão, e tome também da árvore da vida, e coma e viva eternamente, O Senhor Deus, pois, o lançou fora do jardim do Éden, para lavrar a terra de que fora tomado. E havendo lançado fora o homem, pôs querubins ao oriente do jardim do Éden, e uma espada inflamada que andava ao redor, para guardar o caminho da árvore da vida.'
      },
      {
        label: 'Gn 6',
        passage: 'E aconteceu que, como os homens começaram a multiplicar-se sobre a face da terra, e lhes nasceram filhas, Viram os filhos de Deus que as filhas dos homens eram formosas; e tomaram para si mulheres de todas as que escolheram. Então disse o Senhor: Não contenderá o meu Espírito para sempre com o homem; porque ele também é carne; porém os seus dias serão cento e vinte anos. Havia naqueles dias gigantes na terra; e também depois, quando os filhos de Deus entraram às filhas dos homens e delas geraram filhos; estes eram os valentes que houve na antiguidade, os homens de fama. E viu o Senhor que a maldade do homem se multiplicara sobre a terra e que toda a imaginação dos pensamentos de seu coração era só má continuamente. Então arrependeu-se o Senhor de haver feito o homem sobre a terra e pesou-lhe em seu coração. E disse o Senhor: Destruirei o homem que criei de sobre a face da terra, desde o homem até ao animal, até ao réptil, e até à ave dos céus; porque me arrependo de os haver feito. Noé, porém, achou graça aos olhos do Senhor. Estas são as gerações de Noé. Noé era homem justo e perfeito em suas gerações; Noé andava com Deus. E gerou Noé três filhos: Sem, Cão e Jafé. A terra, porém, estava corrompida diante da face de Deus; e encheu-se a terra de violência. E viu Deus a terra, e eis que estava corrompida; porque toda a carne havia corrompido o seu caminho sobre a terra. Então disse Deus a Noé: O fim de toda a carne é vindo perante a minha face; porque a terra está cheia de violência; e eis que os desfarei com a terra. Faze para ti uma arca da madeira de gofer; farás compartimentos na arca e a betumarás por dentro e por fora com betume. E desta maneira a farás: De trezentos côvados o comprimento da arca, e de cinqüenta côvados a sua largura, e de trinta côvados a sua altura. Farás na arca uma janela, e de um côvado a acabarás em cima; e a porta da arca porás ao seu lado; far-lhe-ás andares, baixo, segundo e terceiro. Porque eis que eu trago um dilúvio de águas sobre a terra, para desfazer toda a carne em que há espírito de vida debaixo dos céus; tudo o que há na terra expirará. Mas contigo estabelecerei a minha aliança; e entrarás na arca, tu e os teus filhos, tua mulher e as mulheres de teus filhos contigo. E de tudo o que vive, de toda a carne, dois de cada espécie, farás entrar na arca, para os conservar vivos contigo; macho e fêmea serão. Das aves conforme a sua espécie, e dos animais conforme a sua espécie, de todo o réptil da terra conforme a sua espécie, dois de cada espécie virão a ti, para os conservar em vida. E leva contigo de toda a comida que se come e ajunta-a para ti; e te será para mantimento, a ti e a eles. Assim fez Noé; conforme a tudo o que Deus lhe mandou, assim o fez.'
      },
      {
        label: 'Gn 7',
        passage: 'Depois disse o SENHOR a Noé: Entra tu e toda a tua casa na arca, porque tenho visto que és justo diante de mim nesta geração. De todos os animais limpos tomarás para ti sete e sete, o macho e sua fêmea; mas dos animais que não são limpos, dois, o macho e sua fêmea. Também das aves dos céus sete e sete, macho e fêmea, para conservar em vida sua espécie sobre a face de toda a terra. Porque, passados ainda sete dias, farei chover sobre a terra quarenta dias e quarenta noites; e desfarei de sobre a face da terra toda a substância que fiz. E fez Noé conforme a tudo o que o Senhor lhe ordenara. E era Noé da idade de seiscentos anos, quando o dilúvio das águas veio sobre a terra. Noé entrou na arca, e com ele seus filhos, sua mulher e as mulheres de seus filhos, por causa das águas do dilúvio. Dos animais limpos e dos animais que não são limpos, e das aves, e de todo o réptil sobre a terra, Entraram de dois em dois para junto de Noé na arca, macho e fêmea, como Deus ordenara a Noé. E aconteceu que passados sete dias, vieram sobre a terra as águas do dilúvio. No ano seiscentos da vida de Noé, no mês segundo, aos dezessete dias do mês, naquele mesmo dia se romperam todas as fontes do grande abismo, e as janelas dos céus se abriram, E houve chuva sobre a terra quarenta dias e quarenta noites. E no mesmo dia entraram na arca Noé, seus filhos Sem, Cão e Jafé, sua mulher e as mulheres de seus filhos. Eles, e todo o animal conforme a sua espécie, e todo o gado conforme a sua espécie, e todo o réptil que se arrasta sobre a terra conforme a sua espécie, e toda a ave conforme a sua espécie, pássaros de toda qualidade. E de toda a carne, em que havia espírito de vida, entraram de dois em dois para junto de Noé na arca. E os que entraram eram macho e fêmea de toda a carne, como Deus lhe tinha ordenado; e o Senhor o fechou dentro. E durou o dilúvio quarenta dias sobre a terra, e cresceram as águas e levantaram a arca, e ela se elevou sobre a terra. E prevaleceram as águas e cresceram grandemente sobre a terra; e a arca andava sobre as águas. E as águas prevaleceram excessivamente sobre a terra; e todos os altos montes que havia debaixo de todo o céu, foram cobertos. Quinze côvados acima prevaleceram as águas; e os montes foram cobertos. E expirou toda a carne que se movia sobre a terra, tanto de ave como de gado e de feras, e de todo o réptil que se arrasta sobre a terra, e todo o homem. Tudo o que tinha fôlego de espírito de vida em suas narinas, tudo o que havia em terra seca, morreu. Assim foi destruído todo o ser vivente que havia sobre a face da terra, desde o homem até ao animal, até ao réptil, e até à ave dos céus; e foram extintos da terra; e ficou somente Noé, e os que com ele estavam na arca. E prevaleceram as águas sobre a terra cento e cinqüenta dias.'
      },
      {
        label: 'Gn 8',
        passage: 'E lembrou-se Deus de Noé, e de todos os seres viventes, e de todo o gado que estavam com ele na arca; e Deus fez passar um vento sobre a terra, e aquietaram-se as águas. Cerraram-se também as fontes do abismo e as janelas dos céus, e a chuva dos céus deteve-se. E as águas iam-se escoando continuamente de sobre a terra, e ao fim de cento e cinqüenta dias minguaram. E a arca repousou no sétimo mês, no dia dezessete do mês, sobre os montes de Ararate. E foram as águas indo e minguando até ao décimo mês; no décimo mês, no primeiro dia do mês, apareceram os cumes dos montes. E aconteceu que ao cabo de quarenta dias, abriu Noé a janela da arca que tinha feito. E soltou um corvo, que saiu, indo e voltando, até que as águas se secaram de sobre a terra. Depois soltou uma pomba, para ver se as águas tinham minguado de sobre a face da terra. A pomba, porém, não achou repouso para a planta do seu pé, e voltou a ele para a arca; porque as águas estavam sobre a face de toda a terra; e ele estendeu a sua mão, e tomou-a, e recolheu-a consigo na arca. E esperou ainda outros sete dias, e tornou a enviar a pomba fora da arca. E a pomba voltou a ele à tarde; e eis, arrancada, uma folha de oliveira no seu bico; e conheceu Noé que as águas tinham minguado de sobre a terra. Então esperou ainda outros sete dias, e enviou fora a pomba; mas não tornou mais a ele. E aconteceu que no ano seiscentos e um, no mês primeiro, no primeiro dia do mês, as águas se secaram de sobre a terra. Então Noé tirou a cobertura da arca, e olhou, e eis que a face da terra estava enxuta. E no segundo mês, aos vinte e sete dias do mês, a terra estava seca. Então falou Deus a Noé dizendo: Sai da arca, tu com tua mulher, e teus filhos e as mulheres de teus filhos. Todo o animal que está contigo, de toda a carne, de ave, e de gado, e de todo o réptil que se arrasta sobre a terra, traze fora contigo; e povoem abundantemente a terra e frutifiquem, e se multipliquem sobre a terra. Então saiu Noé, e seus filhos, e sua mulher, e as mulheres de seus filhos com ele. Todo o animal, todo o réptil, e toda a ave, e tudo o que se move sobre a terra, conforme as suas famílias, saiu para fora da arca. E edificou Noé um altar ao Senhor; e tomou de todo o animal limpo e de toda a ave limpa, e ofereceu holocausto sobre o altar. E o Senhor sentiu o suave cheiro, e o Senhor disse em seu coração: Não tornarei mais a amaldiçoar a terra por causa do homem; porque a imaginação do coração do homem é má desde a sua meninice, nem tornarei mais a ferir todo o vivente, como fiz. Enquanto a terra durar, sementeira e sega, e frio e calor, e verão e inverno, e dia e noite, não cessarão.'
      },
      {
        label: 'Jó 1:6-12',
        passage: 'E num dia em que os filhos de Deus vieram apresentar-se perante o Senhor, veio também Satanás entre eles. Então o Senhor disse a Satanás: Donde vens? E Satanás respondeu ao Senhor, e disse: De rodear a terra, e passear por ela. E disse o Senhor a Satanás: Observaste tu a meu servo Jó? Porque ninguém há na terra semelhante a ele, homem íntegro e reto, temente a Deus, e que se desvia do mal. Então respondeu Satanás ao Senhor, e disse: Porventura teme Jó a Deus debalde? Porventura tu não cercaste de sebe, a ele, e a sua casa, e a tudo quanto tem? A obra de suas mãos abençoaste e o seu gado se tem aumentado na terra. Mas estende a tua mão, e toca-lhe em tudo quanto tem, e verás se não blasfema contra ti na tua face. E disse o Senhor a Satanás: Eis que tudo quanto ele tem está na tua mão; somente contra ele não estendas a tua mão. E Satanás saiu da presença do Senhor.'
      },
      {
        label: 'Is 14:12-14',
        passage: 'Como caíste desde o céu, ó Lúcifer, filho da alva! Como foste cortado por terra, tu que debilitavas as nações! E tu dizias no teu coração: Eu subirei ao céu, acima das estrelas de Deus exaltarei o meu trono, e no monte da congregação me assentarei, aos lados do norte. Subirei sobre as alturas das nuvens, e serei semelhante ao Altíssimo.'
      },
      {
        label: 'Ez 28:12-18',
        passage: 'Filho do homem, levanta uma lamentação sobre o rei de Tiro, e dize-lhe: Assim diz o Senhor DEUS: Tu eras o selo da medida, cheio de sabedoria e perfeito em formosura. Estiveste no Éden, jardim de Deus; de toda a pedra preciosa era a tua cobertura: sardônia, topázio, diamante, turquesa, ônix, jaspe, safira, carbúnculo, esmeralda e ouro; em ti se faziam os teus tambores e os teus pífaros; no dia em que foste criado foram preparados. Tu eras o querubim, ungido para cobrir, e te estabeleci; no monte santo de Deus estavas, no meio das pedras afogueadas andavas. Perfeito eras nos teus caminhos, desde o dia em que foste criado, até que se achou iniqüidade em ti. Na multiplicação do teu comércio encheram o teu interior de violência, e pecaste; por isso te lancei, profanado, do monte de Deus, e te fiz perecer, ó querubim cobridor, do meio das pedras afogueadas. Elevou-se o teu coração por causa da tua formosura, corrompeste a tua sabedoria por causa do teu resplendor; por terra te lancei, diante dos reis te pus, para que olhem para ti. Pela multidão das tuas iniqüidades, pela injustiça do teu comércio profanaste os teus santuários; eu, pois, fiz sair do meio de ti um fogo, que te consumiu e te tornei em cinza sobre a terra, aos olhos de todos os que te vêem.'
      },
      {
        label: 'Rm 1:19-32',
        passage: 'Porquanto o que de Deus se pode conhecer neles se manifesta, porque Deus lho manifestou. Porque as suas coisas invisíveis, desde a criação do mundo, tanto o seu eterno poder, como a sua divindade, se entendem, e claramente se vêem pelas coisas que estão criadas, para que eles fiquem inescusáveis; Porquanto, tendo conhecido a Deus, não o glorificaram como Deus, nem lhe deram graças, antes em seus discursos se desvaneceram, e o seu coração insensato se obscureceu. Dizendo-se sábios, tornaram-se loucos. E mudaram a glória do Deus incorruptível em semelhança da imagem de homem corruptível, e de aves, e de quadrúpedes, e de répteis. Por isso também Deus os entregou às concupiscências de seus corações, à imundícia, para desonrarem seus corpos entre si; Pois mudaram a verdade de Deus em mentira, e honraram e serviram mais a criatura do que o Criador, que é bendito eternamente. Amém. Por isso Deus os abandonou às paixões infames. Porque até as suas mulheres mudaram o uso natural, no contrário à natureza. E, semelhantemente, também os homens, deixando o uso natural da mulher, se inflamaram em sua sensualidade uns para com os outros, homens com homens, cometendo torpeza e recebendo em si mesmos a recompensa que convinha ao seu erro. E, como eles não se importaram de ter conhecimento de Deus, assim Deus os entregou a um sentimento perverso, para fazerem coisas que não convêm; Estando cheios de toda a iniqüidade, fornicação, malícia, avareza, maldade; cheios de inveja, homicídio, contenda, engano, malignidade; Sendo murmuradores, detratores, aborrecedores de Deus, injuriadores, soberbos, presunçosos, inventores de males, desobedientes aos pais e às mães; Néscios, infiéis nos contratos, sem afeição natural, irreconciliáveis, sem misericórdia; Os quais, conhecendo o juízo de Deus (que são dignos de morte os que tais coisas praticam), não somente as fazem, mas também consentem aos que as fazem.'
      },
      {
        label: 'Rm 3:4',
        passage: 'De maneira nenhuma; sempre seja Deus verdadeiro, e todo o homem mentiroso; como está escrito:Para que sejas justificado em tuas palavras,E venças quando fores julgado.'
      },
      {
        label: 'Rm 5:12-21',
        passage: 'Portanto, como por um homem entrou o pecado no mundo, e pelo pecado a morte, assim também a morte passou a todos os homens por isso que todos pecaram. Porque até à lei estava o pecado no mundo, mas o pecado não é imputado, não havendo lei. No entanto, a morte reinou desde Adão até Moisés, até sobre aqueles que não tinham pecado à semelhança da transgressão de Adão, o qual é a figura daquele que havia de vir. Mas não é assim o dom gratuito como a ofensa. Porque, se pela ofensa de um morreram muitos, muito mais a graça de Deus, e o dom pela graça, que é de um só homem, Jesus Cristo, abundou sobre muitos. E não foi assim o dom como a ofensa, por um só que pecou. Porque o juízo veio de uma só ofensa, na verdade, para condenação, mas o dom gratuito veio de muitas ofensas para justificação. Porque, se pela ofensa de um só, a morte reinou por esse, muito mais os que recebem a abundância da graça, e do dom da justiça, reinarão em vida por um só, Jesus Cristo. Pois assim como por uma só ofensa veio o juízo sobre todos os homens para condenação, assim também por um só ato de justiça veio a graça sobre todos os homens para justificação de vida. Porque, como pela desobediência de um só homem, muitos foram feitos pecadores, assim pela obediência de um muitos serão feitos justos. Veio, porém, a lei para que a ofensa abundasse; mas, onde o pecado abundou, superabundou a graça; Para que, assim como o pecado reinou na morte, também a graça reinasse pela justiça para a vida eterna, por Jesus Cristo nosso Senhor.'
      },
      {
        label: 'Rm 8:19-22',
        passage: 'Porque a ardente expectação da criatura espera a manifestação dos filhos de Deus. Porque a criação ficou sujeita à vaidade, não por sua vontade, mas por causa do que a sujeitou, Na esperança de que também a mesma criatura será libertada da servidão da corrupção, para a liberdade da glória dos filhos de Deus. Porque sabemos que toda a criação geme e está juntamente com dores de parto até agora.'
      },
      {
        label: '1Co 4:9',
        passage: 'Porque tenho para mim, que Deus a nós, apóstolos, nos pôs por últimos, como condenados à morte; pois somos feitos espetáculo ao mundo, aos anjos, e aos homens.'
      },
      {
        label: 'Hb 1:14',
        passage: 'Não são porventura todos eles espíritos ministradores, enviados para servir a favor daqueles que hão de herdar a salvação?'
      },
      {
        label: '1Pe 5:8',
        passage: 'Sede sóbrios; vigiai; porque o diabo, vosso adversário, anda em derredor, bramando como leão, buscando a quem possa tragar;'
      },
      {
        label: '2Pe 3:6',
        passage: 'Pelas quais coisas pereceu o mundo de então, coberto com as águas do dilúvio,'
      },
      {
        label: 'Ap 12:4-9',
        passage: 'E a sua cauda levou após si a terça parte das estrelas do céu, e lançou-as sobre a terra; e o dragão parou diante da mulher que havia de dar à luz, para que, dando ela à luz, lhe tragasse o filho. E deu à luz um filho homem que há de reger todas as nações com vara de ferro; e o seu filho foi arrebatado para Deus e para o seu trono. E a mulher fugiu para o deserto, onde já tinha lugar preparado por Deus, para que ali fosse alimentada durante mil duzentos e sessenta dias. E houve batalha no céu; Miguel e os seus anjos batalhavam contra o dragão, e batalhavam o dragão e os seus anjos; Mas não prevaleceram, nem mais o seu lugar se achou nos céus. E foi precipitado o grande dragão, a antiga serpente, chamada o Diabo, e Satanás, que engana todo o mundo; ele foi precipitado na terra, e os seus anjos foram lançados com ele.'
      },
    ],
    tags: [
      'deus',
      'satanás',
      'cristo',
      'grande',
      'conflito',
      'grande conflito',
      '8',
    ],
    numbering: 8,
  },
  {
    title: 'Vida, Morte e Ressurreição de Cristo',
    description: '',
    parameter: CreedEnum.LIFE_DEATH_RESSURECTION_CHRIST,
    texts: [
      'Na vida de Cristo, de perfeita obediência à vontade de Deus, e em seu sofrimento, morte e ressurreição, Deus proveu o único meio de expiação do pecado humano, de modo que os que aceitam essa expiação pela fé possam ter vida eterna, e toda a criação compreenda melhor o infinito e santo amor do Criador. Esta expiação perfeita vindica a justiça da lei de Deus e a benignidade de seu caráter; pois ela não somente condena o nosso pecado, mas também garante o nosso perdão. A morte de Cristo é substituinte e expiatória, reconciliadora e transformadora. A ressurreição corpórea de Cristo proclama a vitória de Deus sobre as forças do mal, e assegura a vitória final sobre o pecado e a morte para os que aceitam a expiação. Proclama a soberania de Jesus Cristo, diante do qual se dobrará todo joelho, no Céu e na Terra.'
    ],
    youtubeIds: ['_awKj2sCLkc'],
    biblical_passages: [
      {
        label: 'Gn 3:15',
        passage: 'E porei inimizade entre ti e a mulher, e entre a tua semente e a sua semente; esta te ferirá a cabeça, e tu lhe ferirás o calcanhar.'
      },
      {
        label: 'Salmos 22:1',
        passage: 'Deus meu, Deus meu, por que me desamparaste? Por que te alongas do meu auxílio e das palavras do meu bramido?'
      },
      {
        label: 'Is 53',
        passage: 'Quem deu crédito à nossa pregação? E a quem se manifestou o braço do SENHOR? Porque foi subindo como renovo perante ele, e como raiz de uma terra seca; não tinha beleza nem formosura e, olhando nós para ele, não havia boa aparência nele, para que o desejássemos. Era desprezado, e o mais rejeitado entre os homens, homem de dores, e experimentado nos trabalhos; e, como um de quem os homens escondiam o rosto, era desprezado, e não fizemos dele caso algum. Verdadeiramente ele tomou sobre si as nossas enfermidades, e as nossas dores levou sobre si; e nós o reputávamos por aflito, ferido de Deus, e oprimido. Mas ele foi ferido por causa das nossas transgressões, e moído por causa das nossas iniqüidades; o castigo que nos traz a paz estava sobre ele, e pelas suas pisaduras fomos sarados. Todos nós andávamos desgarrados como ovelhas; cada um se desviava pelo seu caminho; mas o Senhor fez cair sobre ele a iniqüidade de nós todos. Ele foi oprimido e afligido, mas não abriu a sua boca; como um cordeiro foi levado ao matadouro, e como a ovelha muda perante os seus tosquiadores, assim ele não abriu a sua boca. Da opressão e do juízo foi tirado; e quem contará o tempo da sua vida? Porquanto foi cortado da terra dos viventes; pela transgressão do meu povo ele foi atingido. E puseram a sua sepultura com os ímpios, e com o rico na sua morte; ainda que nunca cometeu injustiça, nem houve engano na sua boca. Todavia, ao Senhor agradou moê-lo, fazendo-o enfermar; quando a sua alma se puser por expiação do pecado, verá a sua posteridade, prolongará os seus dias; e o bom prazer do Senhor prosperará na sua mão. Ele verá o fruto do trabalho da sua alma, e ficará satisfeito; com o seu conhecimento o meu servo, o justo, justificará a muitos; porque as iniqüidades deles levará sobre si. Por isso lhe darei a parte de muitos, e com os poderosos repartirá ele o despojo; porquanto derramou a sua alma na morte, e foi contado com os transgressores; mas ele levou sobre si o pecado de muitos, e intercedeu pelos transgressores.'
      },
      {
        label: 'Jo 3:16',
        passage: 'Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.'
      },
      {
        label: 'Jo 14:30',
        passage: 'Já não falarei muito convosco, porque se aproxima o príncipe deste mundo, e nada tem em mim;'
      },
      {
        label: 'Rm 1:4',
        passage: 'Declarado Filho de Deus em poder, segundo o Espírito de santificação, pela ressurreição dentre os mortos, Jesus Cristo, nosso Senhor,'
      },
      {
        label: 'Rm 3:25',
        passage: 'Ao qual Deus propôs para propiciação pela fé no seu sangue, para demonstrar a sua justiça pela remissão dos pecados dantes cometidos, sob a paciência de Deus;'
      },
      {
        label: 'Rm 4:25',
        passage: 'O qual por nossos pecados foi entregue, e ressuscitou para nossa justificação.'
      },
      {
        label: 'Rm 8:3,4',
        passage: 'Porquanto o que era impossível à lei, visto como estava enferma pela carne, Deus, enviando o seu Filho em semelhança da carne do pecado, pelo pecado condenou o pecado na carne; Para que a justiça da lei se cumprisse em nós, que não andamos segundo a carne, mas segundo o Espírito.'
      },
      {
        label: '1Co 15:3,4',
        passage: 'Porque primeiramente vos entreguei o que também recebi: que Cristo morreu por nossos pecados, segundo as Escrituras, E que foi sepultado, e que ressuscitou ao terceiro dia, segundo as Escrituras.'
      },
      {
        label: '2Co 5:14, 15, 19-21',
        passage: 'Porque o amor de Cristo nos constrange, julgando nós assim: que, se um morreu por todos, logo todos morreram. [...]E ele morreu por todos, para que os que vivem não vivam mais para si, mas para aquele que por eles morreu e ressuscitou. [...]Isto é, Deus estava em Cristo reconciliando consigo o mundo, não lhes imputando os seus pecados; e pôs em nós a palavra da reconciliação. De sorte que somos embaixadores da parte de Cristo, como se Deus por nós rogasse. Rogamo-vos, pois, da parte de Cristo, que vos reconcilieis com Deus. Àquele que não conheceu pecado, o fez pecado por nós; para que nele fôssemos feitos justiça de Deus.'
      },
      {
        label: 'Fp 2:6-11',
        passage: 'Que, sendo em forma de Deus, não teve por usurpação ser igual a Deus, Mas esvaziou-se a si mesmo, tomando a forma de servo, fazendo-se semelhante aos homens; E, achado na forma de homem, humilhou-se a si mesmo, sendo obediente até à morte, e morte de cruz. Por isso, também Deus o exaltou soberanamente, e lhe deu um nome que é sobre todo o nome; Para que ao nome de Jesus se dobre todo o joelho dos que estão nos céus, e na terra, e debaixo da terra, E toda a língua confesse que Jesus Cristo é o Senhor, para glória de Deus Pai.'
      },
      {
        label: 'Cl 2:15',
        passage: 'E, despojando os principados e potestades, os expôs publicamente e deles triunfou em si mesmo.'
      },
      {
        label: '1Pe 2:21,22',
        passage: 'Porque para isto sois chamados; pois também Cristo padeceu por nós, deixando-nos o exemplo, para que sigais as suas pisadas.O qual não cometeu pecado, nem na sua boca se achou engano.'
      },
      {
        label: '1Jo 2:2',
        passage: 'E ele é a propiciação pelos nossos pecados, e não somente pelos nossos, mas também pelos de todo o mundo.'
      },
      {
        label: '1Jo 4:10',
        passage: 'Nisto está o amor, não em que nós tenhamos amado a Deus, mas em que ele nos amou a nós, e enviou seu Filho para propiciação pelos nossos pecados.'
      },
    ],
    tags: [
      'jesus',
      'cristo',
      'jesus cristo',
      'morte',
      'ressureição',
      '9',
    ],
    numbering: 9,
  },
  {
    title: 'A Experiência da Salvação',
    description: '',
    parameter: CreedEnum.SALVATION_EXPERIENCE,
    texts: [
      'Em infinito amor e misericórdia, Deus fez com que Cristo, que não conheceu pecado, se tornasse pecado por nós, para que nele fôssemos feitos justiça de Deus. Guiados pelo Espírito Santo, sentimos nossa necessidade, reconhecemos nossa pecaminosidade, arrependemo-nos de nossas transgressões e temos fé em Jesus como Salvador e Senhor, Substituto e Exemplo. Essa fé salvadora advém do divino poder da Palavra e é o dom da graça de Deus. Por meio de Cristo, somos justificados, adotados como filhos e filhas de Deus, e libertados do domínio do pecado. Por meio do Espírito, nascemos de novo e somos santificados; o Espírito renova nossa mente, escreve a lei de Deus, a lei de amor, em nosso coração, e recebemos o poder para levar uma vida santa. Permanecendo nele, tornamo-nos participantes da natureza divina e temos a certeza da salvação agora e no juízo.'
    ],
    youtubeIds: ['7lA9TnCRa0w'],
    biblical_passages: [
      {
        label: 'Gn 3:15',
        passage: 'E porei inimizade entre ti e a mulher, e entre a tua semente e a sua semente; esta te ferirá a cabeça, e tu lhe ferirás o calcanhar.'
      },
      {
        label: 'Is 45:22',
        passage: 'Olhai para mim, e sereis salvos, vós, todos os termos da terra; porque eu sou Deus, e não há outro.'
      },
      {
        label: 'Is 53',
        passage: 'Quem deu crédito à nossa pregação? E a quem se manifestou o braço do SENHOR? Porque foi subindo como renovo perante ele, e como raiz de uma terra seca; não tinha beleza nem formosura e, olhando nós para ele, não havia boa aparência nele, para que o desejássemos. Era desprezado, e o mais rejeitado entre os homens, homem de dores, e experimentado nos trabalhos; e, como um de quem os homens escondiam o rosto, era desprezado, e não fizemos dele caso algum. Verdadeiramente ele tomou sobre si as nossas enfermidades, e as nossas dores levou sobre si; e nós o reputávamos por aflito, ferido de Deus, e oprimido. Mas ele foi ferido por causa das nossas transgressões, e moído por causa das nossas iniqüidades; o castigo que nos traz a paz estava sobre ele, e pelas suas pisaduras fomos sarados. Todos nós andávamos desgarrados como ovelhas; cada um se desviava pelo seu caminho; mas o Senhor fez cair sobre ele a iniqüidade de nós todos. Ele foi oprimido e afligido, mas não abriu a sua boca; como um cordeiro foi levado ao matadouro, e como a ovelha muda perante os seus tosquiadores, assim ele não abriu a sua boca. Da opressão e do juízo foi tirado; e quem contará o tempo da sua vida? Porquanto foi cortado da terra dos viventes; pela transgressão do meu povo ele foi atingido. E puseram a sua sepultura com os ímpios, e com o rico na sua morte; ainda que nunca cometeu injustiça, nem houve engano na sua boca. Todavia, ao Senhor agradou moê-lo, fazendo-o enfermar; quando a sua alma se puser por expiação do pecado, verá a sua posteridade, prolongará os seus dias; e o bom prazer do Senhor prosperará na sua mão. Ele verá o fruto do trabalho da sua alma, e ficará satisfeito; com o seu conhecimento o meu servo, o justo, justificará a muitos; porque as iniqüidades deles levará sobre si. Por isso lhe darei a parte de muitos, e com os poderosos repartirá ele o despojo; porquanto derramou a sua alma na morte, e foi contado com os transgressores; mas ele levou sobre si o pecado de muitos, e intercedeu pelos transgressores.'
      },
      {
        label: 'Jr 31:31-34',
        passage: 'Eis que dias vêm, diz o Senhor, em que farei uma aliança nova com a casa de Israel e com a casa de Judá. Não conforme a aliança que fiz com seus pais, no dia em que os tomei pela mão, para os tirar da terra do Egito; porque eles invalidaram a minha aliança apesar de eu os haver desposado, diz o Senhor. Mas esta é a aliança que farei com a casa de Israel depois daqueles dias, diz o Senhor: Porei a minha lei no seu interior, e a escreverei no seu coração; e eu serei o seu Deus e eles serão o meu povo. E não ensinará mais cada um a seu próximo, nem cada um a seu irmão, dizendo: Conhecei ao Senhor; porque todos me conhecerão, desde o menor até ao maior deles, diz o Senhor; porque lhes perdoarei a sua maldade, e nunca mais me lembrarei dos seus pecados.'
      },
      {
        label: 'Ez 33:11',
        passage: 'Dize-lhes: Vivo eu, diz o Senhor DEUS, que não tenho prazer na morte do ímpio, mas em que o ímpio se converta do seu caminho, e viva. Convertei-vos, convertei-vos dos vossos maus caminhos; pois, por que razão morrereis, ó casa de Israel?'
      },
      {
        label: 'Ez 36:25-27',
        passage: 'Então aspergirei água pura sobre vós, e ficareis purificados; de todas as vossas imundícias e de todos os vossos ídolos vos purificarei. E dar-vos-ei um coração novo, e porei dentro de vós um espírito novo; e tirarei da vossa carne o coração de pedra, e vos darei um coração de carne. E porei dentro de vós o meu Espírito, e farei que andeis nos meus estatutos, e guardeis os meus juízos, e os observeis.'
      },
      {
        label: 'Hc 2:4',
        passage: 'Eis que a sua alma está orgulhosa, não é reta nele; mas o justo pela sua fé viverá.'
      },
      {
        label: 'Mc 9:23, 24',
        passage: 'E Jesus disse-lhe: Se tu podes crer, tudo é possível ao que crê. E logo o pai do menino, clamando, com lágrimas, disse: Eu creio, Senhor! ajuda a minha incredulidade.  Marcos 9:24'
      },
      {
        label: 'Jo 3:3-8',
        passage: 'Jesus respondeu, e disse-lhe: Na verdade, na verdade te digo que aquele que não nascer de novo, não pode ver o reino de Deus. Disse-lhe Nicodemos: Como pode um homem nascer, sendo velho? Pode, porventura, tornar a entrar no ventre de sua mãe, e nascer? Jesus respondeu: Na verdade, na verdade te digo que aquele que não nascer da água e do Espírito, não pode entrar no reino de Deus. O que é nascido da carne é carne, e o que é nascido do Espírito é espírito. Não te maravilhes de te ter dito: Necessário vos é nascer de novo. O vento assopra onde quer, e ouves a sua voz, mas não sabes de onde vem, nem para onde vai; assim étodo aquele que é nascido do Espírito.[...]Porque Deus amou o mundo de tal maneira que deu o seu Filho unigênito, para que todo aquele que nele crê não pereça, mas tenha a vida eterna.'
      },
      {
        label: 'Rm 3:21-26',
        passage: 'Mas agora se manifestou sem a lei a justiça de Deus, tendo o testemunho da lei e dos profetas; Isto é, a justiça de Deus pela fé em Jesus Cristo para todos e sobre todos os que crêem; porque não há diferença. Porque todos pecaram e destituídos estão da glória de Deus; Sendo justificados gratuitamente pela sua graça, pela redenção que há em Cristo Jesus. Ao qual Deus propôs para propiciação pela fé no seu sangue, para demonstrar a sua justiça pela remissão dos pecados dantes cometidos, sob a paciência de Deus; Para demonstração da sua justiça neste tempo presente, para que ele seja justo e justificador daquele que tem fé em Jesus.'
      },
      {
        label: 'Rm 8:1-4',
        passage: 'Portanto, agora nenhuma condenação há para os que estão em Cristo Jesus, que não andam segundo a carne, mas segundo o Espírito. Porque a lei do Espírito de vida, em Cristo Jesus, me livrou da lei do pecado e da morte. Porquanto o que era impossível à lei, visto como estava enferma pela carne, Deus, enviando o seu Filho em semelhança da carne do pecado, pelo pecado condenou o pecado na carne; Para que a justiça da lei se cumprisse em nós, que não andamos segundo a carne, mas segundo o Espírito.'
      },
      {
        label: 'Rm 8:14-17',
        passage: 'Porque todos os que são guiados pelo Espírito de Deus esses são filhos de Deus. Porque não recebestes o espírito de escravidão, para outra vez estardes em temor, mas recebestes o Espírito de adoção de filhos, pelo qual clamamos: Aba, Pai. O mesmo Espírito testifica com o nosso espírito que somos filhos de Deus. E, se nós somos filhos, somos logo herdeiros também, herdeiros de Deus, e co-herdeiros de Cristo: se é certo que com ele padecemos, para que também com ele sejamos glorificados.'
      },
      {
        label: 'Rm 5:6-10',
        passage: 'Porque Cristo, estando nós ainda fracos, morreu a seu tempo pelos ímpios. Porque apenas alguém morrerá por um justo; pois poderá ser que pelo bom alguém ouse morrer. Mas Deus prova o seu amor para conosco, em que Cristo morreu por nós, sendo nós ainda pecadores. Logo muito mais agora, tendo sido justificados pelo seu sangue, seremos por ele salvos da ira. Porque se nós, sendo inimigos, fomos reconciliados com Deus pela morte de seu Filho, muito mais, tendo sido já reconciliados, seremos salvos pela sua vida.'
      },
      {
        label: 'Rm 10:17',
        passage: 'De sorte que a fé é pelo ouvir, e o ouvir pela palavra de Deus.'
      },
      {
        label: 'Rm 12:2',
        passage: 'E não sede conformados com este mundo, mas sede transformados pela renovação do vosso entendimento, para que experimenteis qual seja a boa, agradável, e perfeita vontade de Deus.'
      },
      {
        label: '2Co 5:17-21',
        passage: 'Assim que, se alguém está em Cristo, nova criatura é; as coisas velhas já passaram; eis que tudo se fez novo. E tudo isto provém de Deus, que nos reconciliou consigo mesmo por Jesus Cristo, e nos deu o ministério da reconciliação; Isto é, Deus estava em Cristo reconciliando consigo o mundo, não lhes imputando os seus pecados; e pôs em nós a palavra da reconciliação. De sorte que somos embaixadores da parte de Cristo, como se Deus por nós rogasse. Rogamo-vos, pois, da parte de Cristo, que vos reconcilieis com Deus. Àquele que não conheceu pecado, o fez pecado por nós; para que nele fôssemos feitos justiça de Deus.'
      },
      {
        label: 'Gl 1:4',
        passage: 'O qual se deu a si mesmo por nossos pecados, para nos livrar do presente século mau, segundo a vontade de Deus nosso Pai,'
      },
      {
        label: 'Gl 3:13,14,26',
        passage: 'Cristo nos resgatou da maldição da lei, fazendo-se maldição por nós; porque está escrito: Maldito todo aquele que for pendurado no madeiro; Para que a bênção de Abraão chegasse aos gentios por Jesus Cristo, e para que pela fé nós recebamos a promessa do Espírito. Porque todos sois filhos de Deus pela fé em Cristo Jesus.'
      },
      {
        label: 'Gl 4:4-7',
        passage: 'Mas, vindo a plenitude dos tempos, Deus enviou seu Filho, nascido de mulher, nascido sob a lei, Para remir os que estavam debaixo da lei, a fim de recebermos a adoção de filhos. E, porque sois filhos, Deus enviou aos vossos corações o Espírito de seu Filho, que clama: Aba, Pai. Assim que já não és mais servo, mas filho; e, se és filho, és também herdeiro de Deus por Cristo.'
      },
      {
        label: 'Ef 2:4-10',
        passage: 'Mas Deus, que é riquíssimo em misericórdia, pelo seu muito amor com que nos amou, Estando nós ainda mortos em nossas ofensas, nos vivificou juntamente com Cristo (pela graça sois salvos), E nos ressuscitou juntamente com ele e nos fez assentar nos lugares celestiais, em Cristo Jesus; Para mostrar nos séculos vindouros as abundantes riquezas da sua graça pela sua benignidade para conosco em Cristo Jesus. Porque pela graça sois salvos, por meio da fé; e isto não vem de vós, é dom de Deus. Não vem das obras, para que ninguém se glorie; Porque somos feitura sua, criados em Cristo Jesus para as boas obras, as quais Deus preparou para que andássemos nelas.'
      },
      {
        label: 'Cl 1:13, 14',
        passage: 'O qual nos tirou da potestade das trevas, e nos transportou para o reino do Filho do seu amor; Em quem temos a redenção pelo seu sangue, a saber, a remissão dos pecados;'
      },
      {
        label: 'Tt 3:3-7',
        passage: 'Porque também nós éramos noutro tempo insensatos, desobedientes, extraviados, servindo a várias concupiscências e deleites, vivendo em malícia e inveja, odiosos, odiando-nos uns aos outros. Mas quando apareceu a benignidade e amor de Deus, nosso Salvador, para com os homens, Não pelas obras de justiça que houvéssemos feito, mas segundo a sua misericórdia, nos salvou pela lavagem da regeneração e da renovação do Espírito Santo, Que abundantemente ele derramou sobre nós por Jesus Cristo nosso Salvador; Para que, sendo justificados pela sua graça, sejamos feitos herdeiros segundo a esperança da vida eterna.'
      },
      {
        label: 'Hb 8:7-12',
        passage: 'Porque, se aquela primeira fora irrepreensível, nunca se teria buscado lugar para a segunda. Porque, repreendendo-os, lhes diz: Eis que virão dias, diz o Senhor, Em que com a casa de Israel e com a casa de Judá estabelecerei uma nova aliança, Não segundo a aliança que fiz com seus pais No dia em que os tomei pela mão, para os tirar da terra do Egito;Como não permaneceram naquela minha aliança,Eu para eles não atentei, diz o Senhor. Porque esta é a aliança que depois daqueles diasFarei com a casa de Israel, diz o Senhor; Porei as minhas leis no seu entendimento, E em seu coração as escreverei; E eu lhes serei por Deus, E eles me serão por povo; E não ensinará cada um a seu próximo, Nem cada um ao seu irmão, dizendo: Conhece o Senhor; Porque todos me conhecerão, Desde o menor deles até ao maior. Porque serei misericordioso para com suas iniqüidades, E de seus pecados e de suas prevaricações não me lembrarei mais.'
      },
      {
        label: '1Pe 1:23',
        passage: 'Sendo de novo gerados, não de semente corruptível, mas da incorruptível, pela palavra de Deus, viva, e que permanece para sempre.'
      },
      {
        label: '1Pe 2:21, 22',
        passage: 'Porque para isto sois chamados; pois também Cristo padeceu por nós, deixando-nos o exemplo, para que sigais as suas pisadas. O qual não cometeu pecado, nem na sua boca se achou engano.'
      },
      {
        label: '2Pe 1:3,4',
        passage: 'Visto como o seu divino poder nos deu tudo o que diz respeito à vida e piedade, pelo conhecimento daquele que nos chamou pela sua glória e virtude; Pelas quais ele nos tem dado grandíssimas e preciosas promessas, para que por elas fiqueis participantes da natureza divina, havendo escapado da corrupção, que pela concupiscência há no mundo.  2 Pedro 1:3,4'
      },
      {
        label: 'Ap 13:8',
        passage: 'E adoraram-na todos os que habitam sobre a terra, esses cujos nomes não estão escritos no livro da vida do Cordeiro que foi morto desde a fundação do mundo.'
      },
    ],
    tags: [
      'jesus',
      'justificação',
      'salvação',
      'experiência',
      'fé',
      'salvador',
      '10',
    ],
    numbering: 10,
  },
  {
    title: 'Crescimento em Cristo',
    description: '',
    parameter: CreedEnum.GROWTH_IN_CHRIST,
    texts: [
      'Com sua morte na cruz, Jesus triunfou sobre as forças do mal. Aquele que durante seu ministério terrestre subjugou os espíritos demoníacos, quebrou o poder do maligno e confirmou sua condenação final. A vitória de Jesus dá-nos a vitória sobre as forças do mal que ainda procuram controlar-nos ao andarmos com Ele em paz, alegria e com a certeza de seu amor. Agora, o Espírito Santo habita em nós e reveste-nos de poder. Estando continuamente comprometidos com Jesus como nosso Salvador e Senhor, somos libertados do fardo dos atos cometidos no passado. Não mais vivemos nas trevas, com medo dos poderes do mal, na ignorância e na vida sem sentido de outrora. Nesta nova liberdade em Jesus, somos chamados a crescer na semelhança de seu caráter, comungando com Ele diariamente em oração, alimentando-nos de sua Palavra, meditando nela e na sua providência, cantando seus louvores, nos reunindo nos cultos e participando da missão da igreja. Também somos chamados a seguir o exemplo de Cristo pelo ministério compassivo às necessidades físicas, mentais, sociais, emocionais e espirituais da humanidade. Ao entregar-nos para o amoroso serviço em prol dos que estão em torno de nós e ao testemunharmos de sua salvação, sua constante presença conosco por meio do Espírito transforma cada momento e cada tarefa em uma experiência espiritual.'
    ],
    youtubeIds: ['iilLZ5c8wOE'],
    biblical_passages: [
      {
        label: '1Cr 29:11',
        passage: 'Tua é, Senhor, a magnificência, e o poder, e a honra, e a vitória, e a majestade; porque teu é tudo quanto há nos céus e na terra; teu é, Senhor, o reino, e tu te exaltaste por cabeça sobre todos.'
      },
      {
        label: 'Sl 1:1, 2',
        passage: 'Bem-aventurado o homem que não anda segundo o conselho dos ímpios, nem se detém no caminho dos pecadores, nem se assenta na roda dos escarnecedores. Antes tem o seu prazer na lei do Senhor, e na sua lei medita de dia e de noite.'
      },
      {
        label: 'Sl 23:4',
        passage: 'Ainda que eu andasse pelo vale da sombra da morte, não temeria mal algum, porque tu estás comigo; a tua vara e o teu cajado me consolam.'
      },
      {
        label: 'Sl 77:11,12',
        passage: 'Eu me lembrarei das obras do Senhor; certamente que eu me lembrarei das tuas maravilhas da antiguidade. Meditarei também em todas as tuas obras, e falarei dos teus feitos.'
      },
      {
        label: 'Mt 20:25-28',
        passage: 'Então Jesus, chamando-os para junto de si, disse: Bem sabeis que pelos príncipes dos gentios são estes dominados, e que os grandes exercem autoridade sobre eles. Não será assim entre vós; mas todo aquele que quiser entre vós fazer-se grande seja vosso serviçal; E, qualquer que entre vós quiser ser o primeiro, seja vosso servo; Bem como o Filho do homem não veio para ser servido, mas para servir, e para dar a sua vida em resgate de muitos.'
      },
      {
        label: 'Mt 25:31-46',
        passage: 'E quando o Filho do homem vier em sua glória, e todos os santos anjos com ele, então se assentará no trono da sua glória; E todas as nações serão reunidas diante dele, e apartará uns dos outros, como o pastor aparta dos bodes as ovelhas; E porá as ovelhas à sua direita, mas os bodes à esquerda. Então dirá o Rei aos que estiverem à sua direita: Vinde, benditos de meu Pai, possuí por herança o reino que vos está preparado desde a fundação do mundo; Porque tive fome, e destes-me de comer; tive sede, e destes-me de beber; era estrangeiro, e hospedastes-me; Estava nu, e vestistes-me; adoeci, e visitastes-me; estive na prisão, e foste me ver. Então os justos lhe responderão, dizendo: Senhor, quando te vimos com fome, e te demos de comer? ou com sede, e te demos de beber? E quando te vimos estrangeiro, e te hospedamos? ou nu, e te vestimos? E quando te vimos enfermo, ou na prisão, e fomos ver-te? E, respondendo o Rei, lhes dirá: Em verdade vos digo que quando o fizestes a um destes meus pequeninos irmãos, a mim o fizestes. Então dirá também aos que estiverem à sua esquerda: Apartai-vos de mim, malditos, para o fogo eterno, preparado para o diabo e seus anjos; Porque tive fome, e não me destes de comer; tive sede, e não me destes de beber; Sendo estrangeiro, não me recolhestes; estando nu, não me vestistes; e enfermo, e na prisão, não me visitastes. Então eles também lhe responderão, dizendo: Senhor, quando te vimos com fome, ou com sede, ou estrangeiro, ou nu, ou enfermo, ou na prisão, e não te servimos? Então lhes responderá, dizendo: Em verdade vos digo que, quando a um destes pequeninos o não fizestes, não o fizestes a mim. E irão estes para o tormento eterno, mas os justos para a vida eterna.'
      },
      {
        label: 'Lc 10:17-20',
        passage: 'E voltaram os setenta com alegria, dizendo: Senhor, pelo teu nome, até os demônios se nos sujeitam. E disse-lhes: Eu via Satanás, como raio, cair do céu. Eis que vos dou poder para pisar serpentes e escorpiões, e toda a força do inimigo, e nada vos fará dano algum. Mas, não vos alegreis porque se vos sujeitem os espíritos; alegrai-vos antes por estarem os vossos nomes escritos nos céus.'
      },
      {
        label: 'Jo 20:21',
        passage: 'Disse-lhes, pois, Jesus outra vez: Paz seja convosco; assim como o Pai me enviou, também eu vos envio a vós.'
      },
      {
        label: 'Rm 8:38,39',
        passage: 'Porque estou certo de que, nem a morte, nem a vida, nem os anjos, nem os principados, nem as potestades, nem o presente, nem o porvir, Nem a altura, nem a profundidade, nem alguma outra criatura nos poderá separar do amor de Deus, que está em Cristo Jesus nosso Senhor.'
      },
      {
        label: '2Co 3:17, 18',
        passage: 'Ora, o Senhor é o Espírito; e onde está o Espírito do Senhor, aí há liberdade. Mas todos nós, com rosto descoberto, refletindo como um espelho a glória do Senhor, somos transformados de glória em glória na mesma imagem, como pelo Espírito do Senhor.'
      },
      {
        label: 'Gl 5:22-25',
        passage: 'Mas o fruto do Espírito é: amor, gozo, paz, longanimidade, benignidade, bondade, fé, mansidão, temperança. Contra estas coisas não há lei. E os que são de Cristo crucificaram a carne com as suas paixões e concupiscências. Se vivemos em Espírito, andemos também em Espírito.'
      },
      {
        label: 'Ef 5:19,20',
        passage: 'Falando entre vós em salmos, e hinos, e cânticos espirituais; cantando e salmodiando ao Senhor no vosso coração; Dando sempre graças por tudo a nosso Deus e Pai, em nome de nosso Senhor Jesus Cristo;'
      },
      {
        label: 'Ef 6:12-18',
        passage: 'Porque não temos que lutar contra a carne e o sangue, mas, sim, contra os principados, contra as potestades, contra os príncipes das trevas deste século, contra as hostes espirituais da maldade, nos lugares celestiais. Portanto, tomai toda a armadura de Deus, para que possais resistir no dia mau e, havendo feito tudo, ficar firmes. Estai, pois, firmes, tendo cingidos os vossos lombos com a verdade, e vestida a couraça da justiça; E calçados os pés na preparação do evangelho da paz; Tomando sobretudo o escudo da fé, com o qual podereis apagar todos os dardos inflamados do maligno. Tomai também o capacete da salvação, e a espada do Espírito, que é a palavra de Deus; Orando em todo o tempo com toda a oração e súplica no Espírito, e vigiando nisto com toda a perseverança e súplica por todos os santos,'
      },
      {
        label: 'Fp 3:7-14',
        passage: 'Mas o que para mim era ganho reputei-o perda por Cristo. E, na verdade, tenho também por perda todas as coisas, pela excelência do conhecimento de Cristo Jesus, meu Senhor; pelo qual sofri a perda de todas estas coisas, e as considero como escória, para que possa ganhar a Cristo, E seja achado nele, não tendo a minha justiça que vem da lei, mas a que vem pela fé em Cristo, a saber, a justiça que vem de Deus pela fé; Para conhecê-lo, e à virtude da sua ressurreição, e à comunicação de suas aflições, sendo feito conforme à sua morte; Para ver se de alguma maneira posso chegar à ressurreição dentre os mortos. Não que já a tenha alcançado, ou que seja perfeito; mas prossigo para alcançar aquilo para o que fui também preso por Cristo Jesus. Irmãos, quanto a mim, não julgo que o haja alcançado; mas uma coisa faço, e é que, esquecendo-me das coisas que atrás ficam, e avançando para as que estão diante de mim, Prossigo para o alvo, pelo prêmio da soberana vocação de Deus em Cristo Jesus.'
      },
      {
        label: 'Cl 1:13,14',
        passage: 'O qual nos tirou da potestade das trevas, e nos transportou para o reino do Filho do seu amor; Em quem temos a redenção pelo seu sangue, a saber, a remissão dos pecados;'
      },
      {
        label: 'Cl 2:6,14,15',
        passage: 'Como, pois, recebestes o Senhor Jesus Cristo, assim também andai nele, Havendo riscado a cédula que era contra nós nas suas ordenanças, a qual de alguma maneira nos era contrária, e a tirou do meio de nós, cravando-a na cruz. E, despojando os principados e potestades, os expôs publicamente e deles triunfou em si mesmo.'
      },
      {
        label: '1Ts 5:16-18, 23',
        passage: 'Regozijai-vos sempre. Orai sem cessar. Em tudo dai graças, porque esta é a vontade de Deus em Cristo Jesus para convosco.[...] E o mesmo Deus de paz vos santifique em tudo; e todo o vosso espírito, e alma, e corpo, sejam plenamente conservados irrepreensíveis para a vinda de nosso Senhor Jesus Cristo.'
      },
      {
        label: 'Hb 10:25',
        passage: 'Não deixando a nossa congregação, como é costume de alguns, antes admoestando-nos uns aos outros; e tanto mais, quanto vedes que se vai aproximando aquele dia.'
      },
      {
        label: 'Tg 1:27',
        passage: 'A religião pura e imaculada para com Deus e Pai, é esta: Visitar os órfãos e as viúvas nas suas tribulações, e guardar-se da corrupção do mundo.'
      },
      {
        label: '2Pe 2:9',
        passage: 'Assim, sabe o Senhor livrar da tentação os piedosos, e reservar os injustos para o dia do juízo, para serem castigados;'
      },
      {
        label: '2Pe 3:18',
        passage: 'Antes crescei na graça e conhecimento de nosso Senhor e Salvador, Jesus Cristo. A ele seja dada a glória, assim agora, como no dia da eternidade. Amém.'
      },
      {
        label: '1Jo 4:4',
        passage: 'Filhinhos, sois de Deus, e já os tendes vencido; porque maior é o que está em vós do que o que está no mundo.'
      },
    ],
    tags: [
      'jesus',
      'cristo',
      'crescimento',
      'vida',
      'espiritual',
      '11',
    ],
    numbering: 11,
  },
  {
    title: 'A igreja',
    description: '',
    parameter: CreedEnum.THE_CHURCH,
    texts: [
      'A igreja é a comunidade de crentes que confessam a Jesus Cristo como Senhor e Salvador. Em continuidade do povo de Deus nos tempos do Antigo Testamento, somos chamados para fora do mundo; e nos unimos para prestar culto, para comunhão, para instrução na Palavra, para a celebração da Ceia do Senhor, para o serviço a toda a humanidade e para a proclamação mundial do evangelho. A igreja recebe sua autoridade de Cristo, o qual é a Palavra encarnada revelada nas Escrituras. A igreja é a família de Deus; adotados por Ele como filhos, seus membros vivem com base no novo concerto. A igreja é o corpo de Cristo, uma comunidade de fé, da qual o próprio Cristo é a cabeça. A igreja é a noiva pela qual Cristo morreu para que pudesse santificá-la e purificá-la. Em sua volta triunfal, Ele a apresentará a si mesmo igreja gloriosa, os fiéis de todos os séculos, a aquisição de seu sangue, sem mácula, nem ruga, porém santa e sem defeito.'
    ],
    youtubeIds: ['mo6RZGvyFR8'],
    biblical_passages: [
      {
        label: 'Gn 12:1-3',
        passage: 'Ora, o SENHOR disse a Abrão: Sai-te da tua terra, da tua parentela e da casa de teu pai, para a terra que eu te mostrarei. E far-te-ei uma grande nação, e abençoar-te-ei e engrandecerei o teu nome; e tu serás uma bênção. E abençoarei os que te abençoarem, e amaldiçoarei os que te amaldiçoarem; e em ti serão benditas todas as famílias da terra.'
      },
      {
        label: 'Êx 19:3-7',
        passage: 'E subiu Moisés a Deus, e o Senhor o chamou do monte, dizendo: Assim falarás à casa de Jacó, e anunciarás aos filhos de Israel: Vós tendes visto o que fiz aos egípcios, como vos levei sobre asas de águias, e vos trouxe a mim; Agora, pois, se diligentemente ouvirdes a minha voz e guardardes a minha aliança, então sereis a minha propriedade peculiar dentre todos os povos, porque toda a terra é minha. E vós me sereis um reino sacerdotal e o povo santo. Estas são as palavras que falarás aos filhos de Israel. E veio Moisés, e chamou os anciãos do povo, e expôs diante deles todas estas palavras, que o Senhor lhe tinha ordenado.'
      },
      {
        label: 'Mt 16:13-20',
        passage: 'E, chegando Jesus às partes de Cesaréia de Filipe, interrogou os seus discípulos, dizendo: Quem dizem os homens ser o Filho do homem? E eles disseram: Uns, João o Batista; outros, Elias; e outros, Jeremias, ou um dos profetas. Disse-lhes ele: E vós, quem dizeis que eu sou? E Simão Pedro, respondendo, disse: Tu és o Cristo, o Filho do Deus vivo. E Jesus, respondendo, disse-lhe: Bem-aventurado és tu, Simão Barjonas, porque to não revelou a carne e o sangue, mas meu Pai, que está nos céus. Pois também eu te digo que tu és Pedro, e sobre esta pedra edificarei a minha igreja, e as portas do inferno não prevalecerão contra ela; E eu te darei as chaves do reino dos céus; e tudo o que ligares na terra será ligado nos céus, e tudo o que desligares na terra será desligado nos céus. Então mandou aos seus discípulos que a ninguém dissessem que ele era Jesus o Cristo.'
      },
      {
        label: 'Mt 18:18',
        passage: 'Em verdade vos digo que tudo o que ligardes na terra será ligado no céu, e tudo o que desligardes na terra será desligado no céu.'
      },
      {
        label: 'Mt 28:19,20',
        passage: 'Portanto ide, fazei discípulos de todas as nações, batizando-os em nome do Pai, e do Filho, e do Espírito Santo; Ensinando-os a guardar todas as coisas que eu vos tenho mandado; e eis que eu estou convosco todos os dias, até a consumação dos séculos. Amém.'
      },
      {
        label: 'At 2:38-42',
        passage: 'E disse-lhes Pedro: Arrependei-vos, e cada um de vós seja batizado em nome de Jesus Cristo, para perdão dos pecados; e recebereis o dom do Espírito Santo; Porque a promessa vos diz respeito a vós, a vossos filhos, e a todos os que estão longe, a tantos quantos Deus nosso Senhor chamar. E com muitas outras palavras isto testificava, e os exortava, dizendo: Salvai-vos desta geração perversa. De sorte que foram batizados os que de bom grado receberam a sua palavra; e naquele dia agregaram-se quase três mil almas, E perseveravam na doutrina dos apóstolos, e na comunhão, e no partir do pão, e nas orações.'
      },
      {
        label: 'At 7:38',
        passage: 'Este é o que esteve entre a congregação no deserto, com o anjo que lhe falava no monte Sinai, e com nossos pais, o qual recebeu as palavras de vida para no-las dar.'
      },
      {
        label: '1Co 1:2',
        passage: 'À igreja de Deus que está em Corinto, aos santificados em Cristo Jesus, chamados santos, com todos os que em todo o lugar invocam o nome de nosso Senhor Jesus Cristo, Senhor deles e nosso:'
      },
      {
        label: 'Ef 1:22, 23',
        passage: 'E sujeitou todas as coisas a seus pés, e sobre todas as coisas o constituiu como cabeça da igreja, Que é o seu corpo, a plenitude daquele que cumpre tudo em todos.'
      },
      {
        label: 'Ef 2:19-22',
        passage: 'Assim que já não sois estrangeiros, nem forasteiros, mas concidadãos dos santos, e da família de Deus; Edificados sobre o fundamento dos apóstolos e dos profetas, de que Jesus Cristo é a principal pedra da esquina; No qual todo o edifício, bem ajustado, cresce para templo santo no Senhor. No qual também vós juntamente sois edificados para morada de Deus em Espírito.'
      },
      {
        label: 'Ef 3:8-11',
        passage: 'A mim, o mínimo de todos os santos, me foi dada esta graça de anunciar entre os gentios, por meio do evangelho, as riquezas incompreensíveis de Cristo, E demonstrar a todos qual seja a comunhão do mistério, que desde os séculos esteve oculto em Deus, que tudo criou por meio de Jesus Cristo; Para que agora, pela igreja, a multiforme sabedoria de Deus seja conhecida dos principados e potestades nos céus, Segundo o eterno propósito que fez em Cristo Jesus nosso Senhor.'
      },
      {
        label: 'Ef 5:23-27',
        passage: 'Porque o marido é a cabeça da mulher, como também Cristo é a cabeça da igreja, sendo ele próprio o salvador do corpo. De sorte que, assim como a igreja está sujeita a Cristo, assim também as mulheres sejam em tudo sujeitas a seus maridos. Vós, maridos, amai vossas mulheres, como também Cristo amou a igreja, e a si mesmo se entregou por ela, Para a santificar, purificando-a com a lavagem da água, pela palavra, Para a apresentar a si mesmo igreja gloriosa, sem mácula, nem ruga, nem coisa semelhante, mas santa e irrepreensível.'
      },
      {
        label: 'Cl 1:17,18',
        passage: 'E ele é antes de todas as coisas, e todas as coisas subsistem por ele. E ele é a cabeça do corpo, da igreja; é o princípio e o primogênito dentre os mortos, para que em tudo tenha a preeminência.'
      },
      {
        label: '1Pe 2:9',
        passage: 'Mas vós sois a geração eleita, o sacerdócio real, a nação santa, o povo adquirido, para que anuncieis as virtudes daquele que vos chamou das trevas para a sua maravilhosa luz;'
      },
    ],
    tags: [
      'igreja',
      'corpo',
      'cristo',
      '12',
    ],
    numbering: 12,
  },
  {
    title: 'O Remanescente e sua Missão',
    description: '',
    parameter: CreedEnum.THE_REMNANT_MISSION,
    texts: [
      'A igreja universal se compõe de todos os que verdadeiramente creem em Cristo; mas, nos últimos dias, um tempo de ampla apostasia, um remanescente tem sido chamado para guardar os mandamentos de Deus e a fé de Jesus. Esse remanescente anuncia a chegada da hora do Juízo, proclama a salvação por meio de Cristo e prediz a aproximação de seu segundo advento. Essa proclamação é simbolizada pelos três anjos de Apocalipse 14. Ela coincide com a obra de julgamento no Céu e resulta em uma obra de arrependimento e reforma na Terra. Todo crente é convidado a desempenhar uma parte nesse testemunho mundial.'
    ],
    youtubeIds: ['FUnxrx-V82w'],
    biblical_passages: [
      {
        label: 'Dn 7:9-14',
        passage: 'Eu continuei olhando, até que foram postos uns tronos, e um ancião de dias se assentou; a sua veste era branca como a neve, e o cabelo da sua cabeça como a pura lã; e seu trono era de chamas de fogo, e as suas rodas de fogo ardente. Um rio de fogo manava e saía de diante dele; milhares de milhares o serviam, e milhões de milhões assistiam diante dele; assentou-se o juízo, e abriram-se os livros. Então estive olhando, por causa da voz das grandes palavras que o chifre proferia; estive olhando até que o animal foi morto, e o seu corpo desfeito, e entregue para ser queimado pelo fogo; E, quanto aos outros animais, foi-lhes tirado o domínio; todavia foi-lhes prolongada a vida até certo espaço de tempo. Eu estava olhando nas minhas visões da noite, e eis que vinha nas nuvens do céu um como o filho do homem; e dirigiu-se ao ancião de dias, e o fizeram chegar até ele. E foi-lhe dado o domínio, e a honra, e o reino, para que todos os povos, nações e línguas o servissem; o seu domínio é um domínio eterno, que não passará, e o seu reino tal, que não será destruído.'
      },
      {
        label: 'Is 1:9',
        passage: 'Se o Senhor dos Exércitos não nos tivesse deixado algum remanescente, já como Sodoma seríamos, e semelhantes a Gomorra.'
      },
      {
        label: 'Is 11:11',
        passage: 'E há de ser que naquele dia o Senhor tornará a pôr a sua mão para adquirir outra vez o remanescente do seu povo, que for deixado, da Assíria, e do Egito, e de Patros, e da Etiópia, e de Elã, e de Sinar, e de Hamate, e das ilhas do mar.  '
      },
      {
        label: 'Jr 23:3',
        passage: 'E eu mesmo recolherei o restante das minhas ovelhas, de todas as terras para onde as tiver afugentado, e as farei voltar aos seus apriscos; e frutificarão, e se multiplicarão.',
      },
      {
        label: 'Mq 2:12',
        passage: 'Certamente te ajuntarei todo, ó Jacó; certamente congregarei o restante de Israel; pô-los-ei todos juntos, como ovelhas de Bozra; como o rebanho no meio do seu pasto, farão estrondo por causa da multidão dos homens.',
      },
      {
        label: '2 Co 5:10',
        passage: 'Porque todos devemos comparecer ante o tribunal de Cristo, para que cada um receba segundo o que tiver feito por meio do corpo, ou bem, ou mal.',
      },
      {
        label: '1Pe 1:16-19',
        passage: 'Porquanto está escrito: Sede santos, porque eu sou santo. E, se invocais por Pai aquele que, sem acepção de pessoas, julga segundo a obra de cada um, andai em temor, durante o tempo da vossa peregrinação, Sabendo que não foi com coisas corruptíveis, como prata ou ouro, que fostes resgatados da vossa vã maneira de viver que por tradição recebestes dos vossos pais, Mas com o precioso sangue de Cristo, como de um cordeiro imaculado e incontaminado,',
      },
      {
        label: '1Pe 4:17',
        passage: 'Porque já é tempo que comece o julgamento pela casa de Deus; e, se primeiro começa por nós, qual será o fim daqueles que são desobedientes ao evangelho de Deus?',
      },
      {
        label: '2Pe 3:10-14',
        passage: 'Mas o dia do Senhor virá como o ladrão de noite; no qual os céus passarão com grande estrondo, e os elementos, ardendo, se desfarão, e a terra, e as obras que nela há, se queimarão. Havendo, pois, de perecer todas estas coisas, que pessoas vos convém ser em santo trato, e piedade, Aguardando, e apressando-vos para a vinda do dia de Deus, em que os céus, em fogo se desfarão, e os elementos, ardendo, se fundirão? Mas nós, segundo a sua promessa, aguardamos novos céus e nova terra, em que habita a justiça. Por isso, amados, aguardando estas coisas, procurai que dele sejais achados imaculados e irrepreensíveis em paz.',
      },
      {
        label: 'Ap 12:17',
        passage: 'E o dragão irou-se contra a mulher, e foi fazer guerra ao remanescente da sua semente, os que guardam os mandamentos de Deus, e têm o testemunho de Jesus Cristo.',
      },
      {
        label: 'Ap 14:6-12',
        passage: 'E vi outro anjo voar pelo meio do céu, e tinha o evangelho eterno, para o proclamar aos que habitam sobre a terra, e a toda a nação, e tribo, e língua, e povo, Dizendo com grande voz: Temei a Deus, e dai-lhe glória; porque é vinda a hora do seu juízo. E adorai aquele que fez o céu, e a terra, e o mar, e as fontes das águas. E outro anjo seguiu, dizendo: Caiu, caiu Babilônia, aquela grande cidade, que a todas as nações deu a beber do vinho da ira da sua fornicação. E seguiu-os o terceiro anjo, dizendo com grande voz: Se alguém adorar a besta, e a sua imagem, e receber o sinal na sua testa, ou na sua mão, Também este beberá do vinho da ira de Deus, que se deitou, não misturado, no cálice da sua ira; e será atormentado com fogo e enxofre diante dos santos anjos e diante do Cordeiro. E a fumaça do seu tormento sobe para todo o sempre; e não têm repouso nem de dia nem de noite os que adoram a besta e a sua imagem, e aquele que receber o sinal do seu nome. Aqui está a paciência dos santos; aqui estão os que guardam os mandamentos de Deus e a fé em Jesus.',
      },
      {
        label: 'Ap 18:1-4',
        passage: 'E depois destas coisas vi descer do céu outro anjo, que tinha grande poder, e a terra foi iluminada com a sua glória. E clamou fortemente com grande voz, dizendo: Caiu, caiu a grande Babilônia, e se tornou morada de demônios, e coito de todo espírito imundo, e coito de toda ave imunda e odiável. Porque todas as nações beberam do vinho da ira da sua fornicação, e os reis da terra fornicaram com ela; e os mercadores da terra se enriqueceram com a abundância de suas delícias. E ouvi outra voz do céu, que dizia: Sai dela, povo meu, para que não sejas participante dos seus pecados, e para que não incorras nas suas pragas.',
      },
    ],
    tags: [
      'remanescente',
      '13',
    ],
    numbering: 13,
  },
  {
    title: 'Unidade no Corpo de Cristo',
    description: '',
    parameter: CreedEnum.UNITY_IN_THE_BODY_OF_CHRIST,
    texts: [
      'A igreja é um corpo com muitos membros, chamados de toda nação, tribo, língua e povo. Em Cristo somos uma nova criação. Distinções de raça, cultura e nacionalidade, e diferenças entre altos e baixos, ricos e pobres, homens e mulheres, não devem ser motivo de dissensões entre nós. Todos somos iguais em Cristo, o qual por um só Espírito nos uniu em comunhão com Ele e uns com os outros. Devemos servir e ser servidos sem parcialidade ou restrição. Mediante a revelação de Jesus Cristo nas Escrituras, partilhamos a mesma fé e esperança, e estendemos um só testemunho para todos. Esta unidade encontra sua fonte na unidade do Deus triúno, que nos adotou como seus filhos.'
    ],
    youtubeIds: ['g3kuuz-ibCw'],
    biblical_passages: [
      {
        label: 'Sl 133:1',
        passage: 'Oh! quão bom e quão suave é que os irmãos vivam em união.'
      },
      {
        label: 'Mt 28:19, 20',
        passage: 'Portanto ide, fazei discípulos de todas as nações, batizando-os em nome do Pai, e do Filho, e do Espírito Santo; Ensinando-os a guardar todas as coisas que eu vos tenho mandado; e eis que eu estou convosco todos os dias, até a consumação dos séculos. Amém.'
      },
      {
        label: 'Jo 17:20-23',
        passage: 'E não rogo somente por estes, mas também por aqueles que pela tua palavra hão de crer em mim; Para que todos sejam um, como tu, ó Pai, o és em mim, e eu em ti; que também eles sejam um em nós, para que o mundo creia que tu me enviaste. E eu dei-lhes a glória que a mim me deste, para que sejam um, como nós somos um. Eu neles, e tu em mim, para que eles sejam perfeitos em unidade, e para que o mundo conheça que tu me enviaste a mim, e que os tens amado a eles como me tens amado a mim.'
      },
      {
        label: 'At 17:26,27',
        passage: 'E de um só sangue fez toda a geração dos homens, para habitar sobre toda a face da terra, determinando os tempos já dantes ordenados, e os limites da sua habitação; Para que buscassem ao Senhor, se porventura, tateando, o pudessem achar; ainda que não está longe de cada um de nós;'
      },
      {
        label: 'Rm 12:4,5',
        passage: 'Porque assim como em um corpo temos muitos membros, e nem todos os membros têm a mesma operação, Assim nós, que somos muitos, somos um só corpo em Cristo, mas individualmente somos membros uns dos outros.'
      },
      {
        label: '1Co 12:12-14',
        passage: 'Porque, assim como o corpo é um, e tem muitos membros, e todos os membros, sendo muitos, são um só corpo, assim é Cristo também. Pois todos nós fomos batizados em um Espírito, formando um corpo, quer judeus, quer gregos, quer servos, quer livres, e todos temos bebido de um Espírito. Porque também o corpo não é um só membro, mas muitos.'
      },
      {
        label: '2Co 5:16, 17',
        passage: 'Assim que daqui por diante a ninguém conhecemos segundo a carne, e, ainda que também tenhamos conhecido Cristo segundo a carne, contudo agora já não o conhecemos deste modo. Assim que, se alguém está em Cristo, nova criatura é; as coisas velhas já passaram; eis que tudo se fez novo.'
      },
      {
        label: 'Gl 3:27-29',
        passage: 'Porque todos quantos fostes batizados em Cristo já vos revestistes de Cristo. Nisto não há judeu nem grego; não há servo nem livre; não há macho nem fêmea; porque todos vós sois um em Cristo Jesus. E, se sois de Cristo, então sois descendência de Abraão, e herdeiros conforme a promessa.'
      },
      {
        label: 'Ef 2:13-16',
        passage: 'Mas agora em Cristo Jesus, vós, que antes estáveis longe, já pelo sangue de Cristo chegastes perto. Porque ele é a nossa paz, o qual de ambos os povos fez um; e, derrubando a parede de separação que estava no meio, Na sua carne desfez a inimizade, isto é, a lei dos mandamentos, que consistia em ordenanças, para criar em si mesmo dos dois um novo homem, fazendo a paz, E pela cruz reconciliar ambos com Deus em um corpo, matando com ela as inimizades.'
      },
      {
        label: 'Ef 4:3-6',
        passage: 'Procurando guardar a unidade do Espírito pelo vínculo da paz. Há um só corpo e um só Espírito, como também fostes chamados em uma só esperança da vossa vocação; Um só Senhor, uma só fé, um só batismo; Um só Deus e Pai de todos, o qual é sobre todos, e por todos e em todos vós.'
      },
      {
        label: 'Ef 4:11-16',
        passage: 'E ele mesmo deu uns para apóstolos, e outros para profetas, e outros para evangelistas, e outros para pastores e doutores, Querendo o aperfeiçoamento dos santos, para a obra do ministério, para edificação do corpo de Cristo; Até que todos cheguemos à unidade da fé, e ao conhecimento do Filho de Deus, a homem perfeito, à medida da estatura completa de Cristo, Para que não sejamos mais meninos inconstantes, levados em roda por todo o vento de doutrina, pelo engano dos homens que com astúcia enganam fraudulosamente. Antes, seguindo a verdade em amor, cresçamos em tudo naquele que é a cabeça, Cristo, Do qual todo o corpo, bem ajustado, e ligado pelo auxílio de todas as juntas, segundo a justa operação de cada parte, faz o aumento do corpo, para sua edificação em amor.'
      },
      {
        label: 'Cl 3:10-15',
        passage: 'E vos vestistes do novo, que se renova para o conhecimento, segundo a imagem daquele que o criou; Onde não há grego, nem judeu, circuncisão, nem incircuncisão, bárbaro, cita, servo ou livre; mas Cristo é tudo, e em todos. Revesti-vos, pois, como eleitos de Deus, santos e amados, de entranhas de misericórdia, de benignidade, humildade, mansidão, longanimidade; Suportando-vos uns aos outros, e perdoando-vos uns aos outros, se alguém tiver queixa contra outro; assim como Cristo vos perdoou, assim fazei vós também. E, sobre tudo isto, revesti-vos de amor, que é o vínculo da perfeição. E a paz de Deus, para a qual também fostes chamados em um corpo, domine em vossos corações; e sede agradecidos.'
      },
    ],
    tags: [
      'jesus',
      'cristo',
      'unidade',
      'corpo',
      '14',
    ],
    numbering: 14,
  },
  {
    title: 'O Batismo',
    description: '',
    parameter: CreedEnum.THE_BAPTISM,
    texts: [
      'Pelo batismo confessamos nossa fé na morte e ressurreição de Jesus Cristo e testificamos nossa morte para o pecado e nosso propósito de andar em novidade de vida. Assim reconhecemos Cristo como Senhor e Salvador, tornamo-nos seu povo e somos aceitos por sua igreja como membros. O batismo é um símbolo de nossa união com Cristo, do perdão de nossos pecados e do recebimento do Espírito Santo. É por imersão na água e depende de uma afirmação de fé em Jesus e da evidência de arrependimento do pecado. Segue-se à instrução nas Escrituras Sagradas e à aceitação de seus ensinos.'
    ],
    youtubeIds: ['bvq5Pz2qQWw'],
    biblical_passages: [
      {
        label: 'Mt 28:19, 20',
        passage: 'Portanto ide, fazei discípulos de todas as nações, batizando-os em nome do Pai, e do Filho, e do Espírito Santo; Ensinando-os a guardar todas as coisas que eu vos tenho mandado; e eis que eu estou convosco todos os dias, até a consumação dos séculos. Amém.'
      },
      {
        label: 'At 2:38',
        passage: 'E disse-lhes Pedro: Arrependei-vos, e cada um de vós seja batizado em nome de Jesus Cristo, para perdão dos pecados; e recebereis o dom do Espírito Santo;'
      },
      {
        label: 'At 16:30-33',
        passage: 'E, tirando-os para fora, disse: Senhores, que é necessário que eu faça para me salvar? E eles disseram: Crê no Senhor Jesus Cristo e serás salvo, tu e a tua casa. E lhe pregavam a palavra do Senhor, e a todos os que estavam em sua casa. E, tomando-os ele consigo naquela mesma hora da noite, lavou-lhes os vergões; e logo foi batizado, ele e todos os seus.'
      },
      {
        label: 'At 22:16',
        passage: 'E agora por que te deténs? Levanta-te, e batiza-te, e lava os teus pecados, invocando o nome do Senhor.'
      },
      {
        label: 'Rm 6:1-6',
        passage: 'Que diremos pois? Permaneceremos no pecado, para que a graça abunde? De modo nenhum. Nós, que estamos mortos para o pecado, como viveremos ainda nele? Ou não sabeis que todos quantos fomos batizados em Jesus Cristo fomos batizados na sua morte? De sorte que fomos sepultados com ele pelo batismo na morte; para que, como Cristo foi ressuscitado dentre os mortos, pela glória do Pai, assim andemos nós também em novidade de vida. Porque, se fomos plantados juntamente com ele na semelhança da sua morte, também o seremos na da sua ressurreição; Sabendo isto, que o nosso homem velho foi com ele crucificado, para que o corpo do pecado seja desfeito, para que não sirvamos mais ao pecado.'
      },
      {
        label: 'Gl 3:27',
        passage: 'Porque todos quantos fostes batizados em Cristo já vos revestistes de Cristo.'
      },
      {
        label: 'Cl 2:12, 13',
        passage: 'Sepultados com ele no batismo, nele também ressuscitastes pela fé no poder de Deus, que o ressuscitou dentre os mortos. E, quando vós estáveis mortos nos pecados, e na incircuncisão da vossa carne, vos vivificou juntamente com ele, perdoando-vos todas as ofensas,'
      },
    ],
    tags: [
      'batismo',
      '15',
    ],
    numbering: 15,
  },
  {
    title: 'A Ceia do Senhor',
    description: '',
    parameter: CreedEnum.LORDS_SUPPER,
    texts: [
      'A Ceia do Senhor é uma participação nos emblemas do corpo e do sanguede Jesus, como expressão de fé nele, nosso Senhor e Salvador. Nessa experiência de comunhão, Cristo se faz presente para se encontrar com seu povo e fortalecê-lo. Participando da Ceia, proclamamos alegremente a morte do Senhor até que Ele volte. A preparação para a Ceia envolve exame de consciência, arrependimento e confissão. O Mestre instituiu a cerimônia do lava-pés para denotar renovada purificação, para expressar a disposição de servir uns aos outros em humildade semelhante à de Cristo e para unir nossos corações em amor. A cerimônia da comunhão é franqueada a todos os cristãos.'
    ],
    youtubeIds: ['iOe_EgmuH3s'],
    biblical_passages: [
      {
        label: 'Mt 26:17-30',
        passage: 'ddd'
      },
      {
        label: 'Mt 26:17-30',
        passage: 'E, no primeiro dia da festa dos pães ázimos, chegaram os discípulos junto de Jesus, dizendo: Onde queres que façamos os preparativos para comeres a páscoa? E ele disse: Ide à cidade, a um certo homem, e dizei-lhe: O Mestre diz: O meu tempo está próximo; em tua casa celebrarei a páscoa com os meus discípulos. E os discípulos fizeram como Jesus lhes ordenara, e prepararam a páscoa. E, chegada a tarde, assentou-se à mesa com os doze. E, comendo eles, disse: Em verdade vos digo que um de vós me há de trair. E eles, entristecendo-se muito, começaram cada um a dizer-lhe: Porventura sou eu, Senhor? E ele, respondendo, disse: O que põe comigo a mão no prato, esse me há de trair. Em verdade o Filho do homem vai, como acerca dele está escrito, mas ai daquele homem por quem o Filho do homem é traído! Bom seria para esse homem se não houvera nascido. E, respondendo Judas, o que o traía, disse: Porventura sou eu, Rabi? Ele disse: Tu o disseste. E, quando comiam, Jesus tomou o pão, e abençoando-o, o partiu, e o deu aos discípulos, e disse: Tomai, comei, isto é o meu corpo. E, tomando o cálice, e dando graças, deu-lho, dizendo: Bebei dele todos; Porque isto é o meu sangue, o sangue do novo testamento, que é derramado por muitos, para remissão dos pecados. E digo-vos que, desde agora, não beberei deste fruto da vide, até aquele dia em que o beba novo convosco no reino de meu Pai. E, tendo cantado o hino, saíram para o Monte das Oliveiras.'
      },
      {
        label: 'Jo 6:48-63',
        passage: 'Eu sou o pão da vida. Vossos pais comeram o maná no deserto, e morreram. Este é o pão que desce do céu, para que o que dele comer não morra. Eu sou o pão vivo que desceu do céu; se alguém comer deste pão, viverá para sempre; e o pão que eu der é a minha carne, que eu darei pela vida do mundo. Disputavam, pois, os judeus entre si, dizendo: Como nos pode dar este a sua carne a comer? Jesus, pois, lhes disse: Na verdade, na verdade vos digo que, se não comerdes a carne do Filho do homem, e não beberdes o seu sangue, não tereis vida em vós mesmos. Quem come a minha carne e bebe o meu sangue tem a vida eterna, e eu o ressuscitarei no último dia. Porque a minha carne verdadeiramente é comida, e o meu sangue verdadeiramente é bebida. Quem come a minha carne e bebe o meu sangue permanece em mim e eu nele. Assim como o Pai, que vive, me enviou, e eu vivo pelo Pai, assim, quem de mim se alimenta, também viverá por mim. Este é o pão que desceu do céu; não é o caso de vossos pais, que comeram o maná e morreram; quem comer este pão viverá para sempre. Ele disse estas coisas na sinagoga, ensinando em Cafarnaum. Muitos, pois, dos seus discípulos, ouvindo isto, disseram: Duro é este discurso; quem o pode ouvir? Sabendo, pois, Jesus em si mesmo que os seus discípulos murmuravam disto, disse-lhes: Isto escandaliza-vos? Que seria, pois, se vísseis subir o Filho do homem para onde primeiro estava? O espírito é o que vivifica, a carne para nada aproveita; as palavras que eu vos digo são espírito e vida.'
      },
      {
        label: 'Jo 13:1-17',
        passage: 'Eis que tudo isto viram os meus olhos, e os meus ouvidos o ouviram e entenderam. Como vós o sabeis, também eu o sei; não vos sou inferior. Mas eu falarei ao Todo-Poderoso, e quero defender-me perante Deus. Vós, porém, sois inventores de mentiras, e vós todos médicos que não valem nada. Quem dera que vos calásseis de todo, pois isso seria a vossa sabedoria. Ouvi agora a minha defesa, e escutai os argumentos dos meus lábios. Porventura por Deus falareis perversidade e por ele falareis mentiras? Fareis acepção da sua pessoa? Contendereis por Deus? Ser-vos-ia bom, se ele vos esquadrinhasse? Ou zombareis dele, como se zomba de algum homem? Certamente vos repreenderá, se em oculto fizerdes acepção de pessoas. Porventura não vos espantará a sua alteza, e não cairá sobre vós o seu terror? As vossas memórias são como provérbios de cinza; as vossas defesas como defesas de lodo. Calai-vos perante mim, e falarei eu, e venha sobre mim o que vier. Por que razão tomarei eu a minha carne com os meus dentes, e porei a minha vida na minha mão? Ainda que ele me mate, nele esperarei; contudo os meus caminhos defenderei diante dele. Também ele será a minha salvação; porém o hipócrita não virá perante ele. Ouvi com atenção as minhas palavras, e com os vossos ouvidos a minha declaração.'
      },
      {
        label: '1Co 10:16, 17',
        passage: 'Porventura o cálice de bênção, que abençoamos, não é a comunhão do sangue de Cristo? O pão que partimos não é porventura a comunhão do corpo de Cristo? Porque nós, sendo muitos, somos um só pão e um só corpo, porque todos participamos do mesmo pão.'
      },
      {
        label: '1Co 11:23-30',
        passage: 'Porque eu recebi do Senhor o que também vos ensinei: que o Senhor Jesus, na noite em que foi traído, tomou o pão; E, tendo dado graças, o partiu e disse: Tomai, comei; isto é o meu corpo que é partido por vós; fazei isto em memória de mim. Semelhantemente também, depois de cear, tomou o cálice, dizendo: Este cálice é o novo testamento no meu sangue; fazei isto, todas as vezes que beberdes, em memória de mim. Porque todas as vezes que comerdes este pão e beberdes este cálice anunciais a morte do Senhor, até que venha. Portanto, qualquer que comer este pão, ou beber o cálice do Senhor indignamente, será culpado do corpo e do sangue do Senhor. Examine-se, pois, o homem a si mesmo, e assim coma deste pão e beba deste cálice. Porque o que come e bebe indignamente, come e bebe para sua própria condenação, não discernindo o corpo do Senhor. Por causa disto há entre vós muitos fracos e doentes, e muitos que dormem.'
      },
      {
        label: 'Ap 3:20',
        passage: 'Eis que estou à porta, e bato; se alguém ouvir a minha voz, e abrir a porta, entrarei em sua casa, e com ele cearei, e ele comigo.'
      },
    ],
    tags: [
      'jesus',
      'sangue',
      'corpo',
      'santa',
      'ceia',
      '16',
    ],
    numbering: 16,
  },
  {
    title: 'Dons e Ministérios Espirituais',
    description: '',
    parameter: CreedEnum.SPIRITUAL_GIFTS_AND_MINISTRIES,
    texts: [
      'Deus concede a todos os membros de sua igreja, em todas as épocas, dons espirituais que cada um deve empregar em amoroso ministério para o bem comum da igreja e da humanidade. Outorgados pela atuação do Espírito Santo, o qual os distribui a cada membro como lhe apraz, os dons proveem todas as aptidões e ministérios de que a igreja necessita para cumprir suas funções divinamente ordenadas. De acordo com as Escrituras, esses dons abrangem ministérios como fé, cura, profecia, proclamação, ensino, administração, reconciliação, compaixão e serviço abnegado e caridade para auxílio e encorajamento das pessoas. Alguns membros são chamados por Deus e dotados pelo Espírito para funções reconhecidas pela igreja em ministérios pastorais, evangelísticos e de ensino especialmente necessários para habilitar os membros para o serviço. Também são chamados para edificar a igreja, visando alcançar a maturidade espiritual e promover a unidade da fé e do conhecimento de Deus. Quando os membros utilizam esses dons espirituais como fiéis mordomos da multiforme graça de Deus, a igreja é protegida contra a influência demolidora de falsas doutrinas, tem um crescimento que provém de Deus e é edificada na fé e no amor.'
    ],
    youtubeIds: ['emYKIY-wbbM'],
    biblical_passages: [
      {
        label: 'dddd',
        passage: 'ddd'
      },
    ],
    tags: [
      'dons',
      'ministérios',
      'espirituais',
      '17',
    ],
    numbering: 17,
  },
  {
    title: 'O dom de profecia',
    description: '',
    parameter: CreedEnum.PROPHECY_GIFT,
    texts: [
      'As Escrituras revelam que um dos dons do Espírito Santo é a profecia. Esse dom é uma característica da igreja remanescente e nós cremos que ele foi manifestado no ministério de Ellen G. White. Seus escritos falam com autoridade profética e proveem consolo, orientação, instrução e correção para a igreja. Eles também tornam claro que a Bíblia é a norma pela qual deve ser provado todo ensino e experiência.'
    ],
    youtubeIds: ['bAHkhWBOhOg'],
    biblical_passages: [
      {
        label: 'Nm 12:6',
        passage: 'E disse: Ouvi agora as minhas palavras; se entre vós houver profeta, eu, o Senhor, em visão a ele me farei conhecer, ou em sonhos falarei com ele.'
      },
      {
        label: '2Cr 20:20',
        passage: 'E pela manhã cedo se levantaram e saíram ao deserto de Tecoa; e, ao saírem, Jeosafá pôs-se em pé, e disse: Ouvi-me, ó Judá, e vós, moradores de Jerusalém: Crede no Senhor vosso Deus, e estareis seguros; crede nos seus profetas, e prosperareis;'
      },
      {
        label: 'Am 3:7',
        passage: 'Certamente o Senhor DEUS não fará coisa alguma, sem ter revelado o seu segredo aos seus servos, os profetas.'
      },
      {
        label: 'Jl 2:28,29',
        passage: 'E há de ser que, depois derramarei o meu Espírito sobre toda a carne, e vossos filhos e vossas filhas profetizarão, os vossos velhos terão sonhos, os vossos jovens terão visões. E também sobre os servos e sobre as servas naqueles dias derramarei o meu Espírito.'
      },
      {
        label: 'At 2:14-21',
        passage: 'Pedro, porém, pondo-se em pé com os onze, levantou a sua voz, e disse-lhes: Homens judeus, e todos os que habitais em Jerusalém, seja-vos isto notório, e escutai as minhas palavras. Estes homens não estão embriagados, como vós pensais, sendo a terceira hora do dia. Mas isto é o que foi dito pelo profeta Joel: E nos últimos dias acontecerá, diz Deus, Que do meu Espírito derramarei sobre toda a carne; E os vossos filhos e as vossas filhas profetizarão, Os vossos jovens terão visões, E os vossos velhos sonharão sonhos; E também do meu Espírito derramarei sobre os meus servos e as minhas servas naqueles dias, e profetizarão; E farei aparecer prodígios em cima, no céu; E sinais em baixo na terra, Sangue, fogo e vapor de fumo. O sol se converterá em trevas, E a lua em sangue, Antes de chegar o grande e glorioso dia do Senhor; E acontecerá que todo aquele que invocar o nome do Senhor será salvo.'
      },
      {
        label: '2Tm 3:16, 17',
        passage: 'Toda a Escritura é divinamente inspirada, e proveitosa para ensinar, para redargüir, para corrigir, para instruir em justiça; Para que o homem de Deus seja perfeito, e perfeitamente instruído para toda a boa obra.'
      },
      {
        label: 'Hb 1:1-3',
        passage: 'Havendo Deus antigamente falado muitas vezes, e de muitas maneiras, aos pais, pelos profetas, a nós falou-nos nestes últimos dias pelo Filho, A quem constituiu herdeiro de tudo, por quem fez também o mundo. O qual, sendo o resplendor da sua glória, e a expressa imagem da sua pessoa, e sustentando todas as coisas pela palavra do seu poder, havendo feito por si mesmo a purificação dos nossos pecados, assentou-se à destra da majestade nas alturas;'
      },
      {
        label: 'Ap 12:17',
        passage: 'E o dragão irou-se contra a mulher, e foi fazer guerra ao remanescente da sua semente, os que guardam os mandamentos de Deus, e têm o testemunho de Jesus Cristo.'
      },
      {
        label: 'Ap 19:10',
        passage: 'E eu lancei-me a seus pés para o adorar; mas ele disse-me: Olha não faças tal; sou teu conservo, e de teus irmãos, que têm o testemunho de Jesus. Adora a Deus; porque o testemunho de Jesus é o espírito de profecia.'
      },
      {
        label: 'Ap 22:8,9',
        passage: 'E eu, João, sou aquele que vi e ouvi estas coisas. E, havendo-as ouvido e visto, prostrei-me aos pés do anjo que mas mostrava para o adorar.  E disse-me: Olha, não faças tal; porque eu sou conservo teu e de teus irmãos, os profetas, e dos que guardam as palavras deste livro. Adora a Deus.'
      },
    ],
    tags: [
      'prophecy',
      '18',
    ],
    numbering: 18,
  },
  {
    title: 'A Lei de Deus',
    description: '',
    parameter: CreedEnum.GOD_LAW,
    texts: [
      'Os grandes princípios da lei de Deus são incorporados nos Dez Mandamentos e exemplificados na vida de Cristo. Expressam o amor, a vontade e os propósitos de Deus acerca da conduta e das relações humanas, e são obrigatórios a todas as pessoas, em todas as épocas. Esses preceitos constituem a base do concerto de Deus com seu povo e a norma no julgamento de Deus. Por meio da atuação do Espírito Santo, eles apontam para o pecado e despertam o senso da necessidade de um Salvador. A salvação é inteiramente pela graça, e não pelas obras, e seu fruto é a obediência aos mandamentos. Essa obediência desenvolve o caráter cristão e resulta em uma sensação de bem-estar. É evidência de nosso amor ao Senhor e de nossa solicitude pelos seres humanos. A obediência da fé demonstra o poder de Cristo para transformar vidas e fortalece, portanto, o testemunho cristão.'
    ],
    youtubeIds: ['c_-y1ihOGmE'],
    biblical_passages: [
      {
        label: 'Êx 20:1-17',
        passage: 'Então falou Deus todas estas palavras, dizendo: Eu sou o Senhor teu Deus, que te tirei da terra do Egito, da casa da servidão. Não terás outros deuses diante de mim. Não farás para ti imagem de escultura, nem alguma semelhança do que há em cima nos céus, nem em baixo na terra, nem nas águas debaixo da terra. Não te encurvarás a elas nem as servirás; porque eu, o Senhor teu Deus, sou Deus zeloso, que visito a iniqüidade dos pais nos filhos, até a terceira e quarta geração daqueles que me odeiam. E faço misericórdia a milhares dos que me amam e aos que guardam os meus mandamentos. Não tomarás o nome do Senhor teu Deus em vão; porque o Senhor não terá por inocente o que tomar o seu nome em vão. Lembra-te do dia do sábado, para o santificar. Seis dias trabalharás, e farás toda a tua obra. Mas o sétimo dia é o sábado do Senhor teu Deus; não farás nenhuma obra, nem tu, nem teu filho, nem tua filha, nem o teu servo, nem a tua serva, nem o teu animal, nem o teu estrangeiro, que está dentro das tuas portas. Porque em seis dias fez o Senhor os céus e a terra, o mar e tudo que neles há, e ao sétimo dia descansou; portanto abençoou o Senhor o dia do sábado, e o santificou. Honra a teu pai e a tua mãe, para que se prolonguem os teus dias na terra que o Senhor teu Deus te dá. Não matarás. Não adulterarás. Não furtarás. Não dirás falso testemunho contra o teu próximo. Não cobiçarás a casa do teu próximo, não cobiçarás a mulher do teu próximo, nem o seu servo, nem a sua serva, nem o seu boi, nem o seu jumento, nem coisa alguma do teu próximo.'
      },
      {
        label: 'Dt 28:1-14',
        passage: 'E será que, se ouvires a voz do SENHOR teu Deus, tendo cuidado de guardar todos os seus mandamentos que eu hoje te ordeno, o SENHOR teu Deus te exaltará sobre todas as nações da terra. E todas estas bênçãos virão sobre ti e te alcançarão, quando ouvires a voz do Senhor teu Deus: Bendito serás na cidade, e bendito serás no campo. Bendito o fruto do teu ventre, e o fruto da tua terra, e o fruto dos teus animais; e as crias das tuas vacas e das tuas ovelhas. Bendito o teu cesto e a tua amassadeira. Bendito serás ao entrares, e bendito serás ao saíres. O Senhor entregará, feridos diante de ti, os teus inimigos, que se levantarem contra ti; por um caminho sairão contra ti, mas por sete caminhos fugirão da tua presença. O Senhor mandará que a bênção esteja contigo nos teus celeiros, e em tudo o que puseres a tua mão; e te abençoará na terra que te der o Senhor teu Deus. O Senhor te confirmará para si como povo santo, como te tem jurado, quando guardares os mandamentos do Senhor teu Deus, e andares nos seus caminhos. E todos os povos da terra verão que é invocado sobre ti o nome do Senhor, e terão temor de ti. E o Senhor te dará abundância de bens no fruto do teu ventre, e no fruto dos teus animais, e no fruto do teu solo, sobre a terra que o Senhor jurou a teus pais te dar. O Senhor te abrirá o seu bom tesouro, o céu, para dar chuva à tua terra no seu tempo, e para abençoar toda a obra das tuas mãos; e emprestarás a muitas nações, porém tu não tomarás emprestado. E o Senhor te porá por cabeça, e não por cauda; e só estarás em cima, e não debaixo, se obedeceres aos mandamentos do Senhor teu Deus, que hoje te ordeno, para os guardar e cumprir. E não te desviarás de todas as palavras que hoje te ordeno, nem para a direita nem para a esquerda, andando após outros deuses, para os servires.'
      },
      {
        label: 'dddd',
        passage: 'ddd'
      },
      {
        label: 'Sl 19:7-14',
        passage: 'A lei do Senhor é perfeita, e refrigera a alma; o testemunho do Senhor é fiel, e dá sabedoria aos símplices. Os preceitos do Senhor são retos e alegram o coração; o mandamento do Senhor é puro, e ilumina os olhos. O temor do Senhor é limpo, e permanece eternamente; os juízos do Senhor são verdadeiros e justos juntamente. Mais desejáveis são do que o ouro, sim, do que muito ouro fino; e mais doces do que o mel e o licor dos favos. Também por eles é admoestado o teu servo; e em os guardar há grande recompensa. Quem pode entender os seus erros? Expurga-me tu dos que me são ocultos. Também da soberba guarda o teu servo, para que se não assenhoreie de mim. Então serei sincero, e ficarei limpo de grande transgressão. Sejam agradáveis as palavras da minha boca e a meditação do meu coração perante a tua face, Senhor, Rocha minha e Redentor meu!'
      },
      {
        label: 'Sl 40:7, 8',
        passage: 'Então disse: Eis aqui venho; no rolo do livro de mim está escrito. Deleito-me em fazer a tua vontade, ó Deus meu; sim, a tua lei está dentro do meu coração.'
      },
      {
        label: 'Mt 5:17-20',
        passage: 'Não cuideis que vim destruir a lei ou os profetas: não vim abrogar, mas cumprir. Porque em verdade vos digo que, até que o céu e a terra passem, nem um jota ou um til jamais passará da lei, sem que tudo seja cumprido. Qualquer, pois, que violar um destes mandamentos, por menor que seja, e assim ensinar aos homens, será chamado o menor no reino dos céus; aquele, porém, que os cumprir e ensinar será chamado grande no reino dos céus. Porque vos digo que, se a vossa justiça não exceder a dos escribas e fariseus, de modo nenhum entrareis no reino dos céus.'
      },
      {
        label: 'Mt 22:36-40',
        passage: 'Mestre, qual é o grande mandamento na lei? E Jesus disse-lhe: Amarás o Senhor teu Deus de todo o teu coração, e de toda a tua alma, e de todo o teu pensamento. Este é o primeiro e grande mandamento. E o segundo, semelhante a este, é: Amarás o teu próximo como a ti mesmo. Destes dois mandamentos dependem toda a lei e os profetas.'
      },
      {
        label: 'Jo 14:15',
        passage: 'Chamar-me-ias, e eu te responderia, e terias afeto à obra de tuas mãos.'
      },
      {
        label: 'Jo 15:7-10',
        passage: 'Se vós estiverdes em mim, e as minhas palavras estiverem em vós, pedireis tudo o que quiserdes, e vos será feito. Nisto é glorificado meu Pai, que deis muito fruto; e assim sereis meus discípulos. Como o Pai me amou, também eu vos amei a vós; permanecei no meu amor. Se guardardes os meus mandamentos, permanecereis no meu amor; do mesmo modo que eu tenho guardado os mandamentos de meu Pai, e permaneço no seu amor.'
      },
      {
        label: 'Rm 8:3, 4',
        passage: 'Porquanto o que era impossível à lei, visto como estava enferma pela carne, Deus, enviando o seu Filho em semelhança da carne do pecado, pelo pecado condenou o pecado na carne; Para que a justiça da lei se cumprisse em nós, que não andamos segundo a carne, mas segundo o Espírito.'
      },
      {
        label: 'Ef 2:8-10',
        passage: 'Porque pela graça sois salvos, por meio da fé; e isto não vem de vós, é dom de Deus. Não vem das obras, para que ninguém se glorie; Porque somos feitura sua, criados em Cristo Jesus para as boas obras, as quais Deus preparou para que andássemos nelas.'
      },
      {
        label: 'Hb 8:8-10',
        passage: 'Porque, repreendendo-os, lhes diz: Eis que virão dias, diz o Senhor, Em que com a casa de Israel e com a casa de Judá estabelecerei uma nova aliança, Não segundo a aliança que fiz com seus pais No dia em que os tomei pela mão, para os tirar da terra do Egito;Como não permaneceram naquela minha aliança,Eu para eles não atentei, diz o Senhor. Porque esta é a aliança que depois daqueles diasFarei com a casa de Israel, diz o Senhor; Porei as minhas leis no seu entendimento, E em seu coração as escreverei; E eu lhes serei por Deus, E eles me serão por povo;'
      },
      {
        label: '1Jo 2:3',
        passage: 'E nisto sabemos que o conhecemos: se guardarmos os seus mandamentos.'
      },
      {
        label: '1Jo 5:3',
        passage: 'Porque este é o amor de Deus: que guardemos os seus mandamentos; e os seus mandamentos não são pesados.'
      },
      {
        label: 'Ap 12:17',
        passage: 'E o dragão irou-se contra a mulher, e foi fazer guerra ao remanescente da sua semente, os que guardam os mandamentos de Deus, e têm o testemunho de Jesus Cristo.'
      },
      {
        label: 'Ap 14:12',
        passage: 'Aqui está a paciência dos santos; aqui estão os que guardam os mandamentos de Deus e a fé em Jesus.'
      },
    ],
    tags: [
      'lei',
      'deus',
      '19',
    ],
    numbering: 19,
  },
  {
    title: 'O Sábado',
    description: '',
    parameter: CreedEnum.THE_SABBATH,
    texts: [
      'O gracioso Criador, após os seis dias da criação, descansou no sétimo dia e instituiu o sábado para todas as pessoas como memorial da criação. O quarto mandamento da imutável lei de Deus requer a observância deste sábado do sétimo dia como dia de descanso, adoração e ministério, em harmonia com o ensino e prática de Jesus, o Senhor do sábado. O sábado é um dia de deleitosa comunhão com Deus e uns com os outros. É um símbolo de nossa redenção em Cristo, um sinal de nossa santificação, uma prova de nossa lealdade e um antegozo de nosso futuro eterno no reino de Deus. O sábado é o sinal perpétuo do eterno concerto de Deus com seu povo. A prazerosa observância deste tempo sagrado duma tarde a outra tarde, do pôr do sol ao pôr do sol, é uma celebração dos atos criadores e redentores de Deus.'
    ],
    youtubeIds: ['ier0ps-876k'],
    biblical_passages: [
      {
        label: 'Gn 2:1-3',
        passage: 'Assim os céus, a terra e todo o seu exército foram acabados. E havendo Deus acabado no dia sétimo a obra que fizera, descansou no sétimo dia de toda a sua obra, que tinha feito. E abençoou Deus o dia sétimo, e o santificou; porque nele descansou de toda a sua obra que Deus criara e fizera.'
      },
      {
        label: 'Êx 20:8-11',
        passage: 'Lembra-te do dia do sábado, para o santificar. Seis dias trabalharás, e farás toda a tua obra. Mas o sétimo dia é o sábado do Senhor teu Deus; não farás nenhuma obra, nem tu, nem teu filho, nem tua filha, nem o teu servo, nem a tua serva, nem o teu animal, nem o teu estrangeiro, que está dentro das tuas portas. Porque em seis dias fez o Senhor os céus e a terra, o mar e tudo que neles há, e ao sétimo dia descansou; portanto abençoou o Senhor o dia do sábado, e o santificou.'
      },
      {
        label: 'Êx 31:13-17',
        passage: 'Tu, pois, fala aos filhos de Israel, dizendo: Certamente guardareis meus sábados; porquanto isso é um sinal entre mim e vós nas vossas gerações; para que saibais que eu sou o Senhor, que vos santifica. Portanto guardareis o sábado, porque santo é para vós; aquele que o profanar certamente morrerá; porque qualquer que nele fizer alguma obra, aquela alma será eliminada do meio do seu povo. Seis dias se trabalhará, porém o sétimo dia é o sábado do descanso, santo ao Senhor; qualquer que no dia do sábado fizer algum trabalho, certamente morrerá. Guardarão, pois, o sábado os filhos de Israel, celebrando-o nas suas gerações por aliança perpétua. Entre mim e os filhos de Israel será um sinal para sempre; porque em seis dias fez o Senhor os céus e a terra, e ao sétimo dia descansou, e restaurou-se.'
      },
      {
        label: 'Lv 23:32',
        passage: 'Sábado de descanso vos será; então afligireis as vossas almas; aos nove do mês à tarde, de uma tarde a outra tarde, celebrareis o vosso sábado.'
      },
      {
        label: 'Dt 5:12-15',
        passage: 'Guarda o dia de sábado, para o santificar, como te ordenou o Senhor teu Deus. Seis dias trabalharás, e farás todo o teu trabalho. Mas o sétimo dia é o sábado do Senhor teu Deus; não farás nenhum trabalho nele, nem tu, nem teu filho, nem tua filha, nem o teu servo, nem a tua serva, nem o teu boi, nem o teu jumento, nem animal algum teu, nem o estrangeiro que está dentro de tuas portas; para que o teu servo e a tua serva descansem como tu; Porque te lembrarás que foste servo na terra do Egito, e que o Senhor teu Deus te tirou dali com mão forte e braço estendido; por isso o Senhor teu Deus te ordenou que guardasses o dia de sábado.'
      },
      {
        label: 'Is 56:5,6',
        passage: 'Também lhes darei na minha casa e dentro dos meus muros um lugar e um nome, melhor do que o de filhos e filhas; um nome eterno darei a cada um deles, que nunca se apagará. E aos filhos dos estrangeiros, que se unirem ao Senhor, para o servirem, e para amarem o nome do Senhor, e para serem seus servos, todos os que guardarem o sábado, não o profanando, e os que abraçarem a minha aliança,'
      },
      {
        label: 'Is 58:13, 14',
        passage: 'Se desviares o teu pé do sábado, de fazeres a tua vontade no meu santo dia, e chamares ao sábado deleitoso, e o santo dia do Senhor, digno de honra, e o honrares não seguindo os teus caminhos, nem pretendendo fazer a tua própria vontade, nem falares as tuas próprias palavras, Então te deleitarás no Senhor, e te farei cavalgar sobre as alturas da terra, e te sustentarei com a herança de teu pai Jacó; porque a boca do Senhor o disse.'
      },
      {
        label: 'Ez 20:12, 20',
        passage: 'E também lhes dei os meus sábados, para que servissem de sinal entre mim e eles; para que soubessem que eu sou o Senhor que os santifica. E santificai os meus sábados, e servirão de sinal entre mim e vós, para que saibais que eu sou o Senhor vosso Deus.'
      },
      {
        label: 'Mt 12:1-12',
        passage: 'Naquele tempo passou Jesus pelas searas, em um sábado; e os seus discípulos, tendo fome, começaram a colher espigas, e a comer. E os fariseus, vendo isto, disseram-lhe: Eis que os teus discípulos fazem o que não é lícito fazer num sábado. Ele, porém, lhes disse: Não tendes lido o que fez Davi, quando teve fome, ele e os que com ele estavam? Como entrou na casa de Deus, e comeu os pães da proposição, que não lhe era lícito comer, nem aos que com ele estavam, mas só aos sacerdotes? Ou não tendes lido na lei que, aos sábados, os sacerdotes no templo violam o sábado, e ficam sem culpa? Pois eu vos digo que está aqui quem é maior do que o templo. Mas, se vós soubésseis o que significa: Misericórdia quero, e não sacrifício, não condenaríeis os inocentes. Porque o Filho do homem até do sábado é Senhor. E, partindo dali, chegou à sinagoga deles. E, estava ali um homem que tinha uma das mãos mirrada; e eles, para o acusarem, o interrogaram, dizendo: É lícito curar nos sábados? E ele lhes disse: Qual dentre vós será o homem que tendo uma ovelha, se num sábado ela cair numa cova, não lançará mão dela, e a levantará? Pois, quanto mais vale um homem do que uma ovelha? É, por conseqüência, lícito fazer bem nos sábados.'
      },
      {
        label: 'Mc 1:32',
        passage: 'E, tendo chegado a tarde, quando já se estava pondo o sol, trouxeram-lhe todos os que se achavam enfermos, e os endemoninhados.'
      },
      {
        label: 'Lc 4:16',
        passage: 'E, chegando a Nazaré, onde fora criado, entrou num dia de sábado, segundo o seu costume, na sinagoga, e levantou-se para ler.'
      },
      {
        label: 'Hb 4:1-11',
        passage: 'Temamos, pois, que, porventura, deixada a promessa de entrar no seu repouso, pareça que algum de vós fica para trás. Porque também a nós foram pregadas as boas novas, como a eles, mas a palavra da pregação nada lhes aproveitou, porquanto não estava misturada com a fé naqueles que a ouviram. Porque nós, os que temos crido, entramos no repouso, tal como disse:Assim jurei na minha ira Que não entrarão no meu repouso; embora as suas obras estivessem acabadas desde a fundação do mundo. Porque em certo lugar disse assim do dia sétimo: E repousou Deus de todas as suas obras no sétimo dia. E outra vez neste lugar:Não entrarão no meu repouso. Visto, pois, que resta que alguns entrem nele, e que aqueles a quem primeiro foram pregadas as boas novas não entraram por causa da desobediência, Determina outra vez um certo dia, Hoje, dizendo por Davi, muito tempo depois, como está dito: Hoje, se ouvirdes a sua voz, Não endureçais os vossos corações. Porque, se Josué lhes houvesse dado repouso, não falaria depois disso de outro dia. Portanto, resta ainda um repouso para o povo de Deus. Porque aquele que entrou no seu repouso, ele próprio repousou de suas obras, como Deus das suas. Procuremos, pois, entrar naquele repouso, para que ninguém caia no mesmo exemplo de desobediência.'
      },
    ],
    tags: [
      'sábado',
      'criação',
      'descanso',
      'mandamento',
      '20',
    ],
    numbering: 20,
  },
  {
    title: 'Mordomia',
    description: '',
    parameter: CreedEnum.STEWARDSHIP,
    texts: [
      'Somos despenseiros de Deus, responsáveis a Ele pelo uso apropriado do tempo e das oportunidades, capacidades e posses, e das bênçãos da Terra e seus recursos, que Ele colocou sob o nosso cuidado. Reconhecemos o direito de propriedade da parte de Deus por meio de fiel serviço a Ele e a nossos semelhantes, e devolvendo os dízimos e dando ofertas para a proclamação de Seu evangelho e para a manutenção e o crescimento de Sua Igreja. A mordomia e um privilégio que Deus nos concede para desenvolvimento no amor e para vitória sobre o egoísmo e a cobiça. O mordomo se regozija nas bênçãos que advêm aos outros como resultado de sua fidelidade.'
    ],
    youtubeIds: ['RvrCBEvs-yI'],
    biblical_passages: [
      {
        label: 'Gn 1:26-28',
        passage: 'E disse Deus: Façamos o homem à nossa imagem, conforme a nossa semelhança; e domine sobre os peixes do mar, e sobre as aves dos céus, e sobre o gado, e sobre toda a terra, e sobre todo o réptil que se move sobre a terra. E criou Deus o homem à sua imagem; à imagem de Deus o criou; homem e mulher os criou. E Deus os abençoou, e Deus lhes disse: Frutificai e multiplicai-vos, e enchei a terra, e sujeitai-a; e dominai sobre os peixes do mar e sobre as aves dos céus, e sobre todo o animal que se move sobre a terra.'
      },
      {
        label: 'Gn 2:15',
        passage: 'E tomou o Senhor Deus o homem, e o pôs no jardim do Éden para o lavrar e o guardar.'
      },
      {
        label: '1 Cr 29:14',
        passage: 'Porque quem sou eu, e quem é o meu povo, para que pudéssemos oferecer voluntariamente coisas semelhantes? Porque tudo vem de ti, e do que é teu to damos.'
      },
      {
        label: 'Ag 1:3-11',
        passage: 'Veio, pois, a palavra do Senhor, por intermédio do profeta Ageu, dizendo: Porventura é para vós tempo de habitardes nas vossas casas forradas, enquanto esta casa fica deserta? Ora, pois, assim diz o Senhor dos Exércitos: Considerai os vossos caminhos. Semeais muito, e recolheis pouco; comeis, porém não vos fartais; bebeis, porém não vos saciais; vestis-vos, porém ninguém se aquece; e o que recebe salário, recebe-o num saco furado. Assim diz o Senhor dos Exércitos: Considerai os vossos caminhos. Subi ao monte, e trazei madeira, e edificai a casa; e dela me agradarei, e serei glorificado, diz o Senhor. Esperastes o muito, mas eis que veio a ser pouco; e esse pouco, quando o trouxestes para casa, eu dissipei com um sopro. Por que causa? disse o Senhor dos Exércitos. Por causa da minha casa, que está deserta, enquanto cada um de vós corre à sua própria casa. Por isso retém os céus sobre vós o orvalho, e a terra detém os seus frutos. E mandei vir a seca sobre a terra, e sobre os montes, e sobre o trigo, e sobre o mosto, e sobre o azeite, e sobre o que a terra produz; como também sobre os homens, e sobre o gado, e sobre todo o trabalho das mãos.'
      },
      {
        label: 'Ml 3:8-12',
        passage: 'Roubará o homem a Deus? Todavia vós me roubais, e dizeis: Em que te roubamos? Nos dízimos e nas ofertas. Com maldição sois amaldiçoados, porque a mim me roubais, sim, toda esta nação. Trazei todos os dízimos à casa do tesouro, para que haja mantimento na minha casa, e depois fazei prova de mim nisto, diz o Senhor dos Exércitos, se eu não vos abrir as janelas do céu, e não derramar sobre vós uma bênção tal até que não haja lugar suficiente para a recolherdes. E por causa de vós repreenderei o devorador, e ele não destruirá os frutos da vossa terra; e a vossa vide no campo não será estéril, diz o Senhor dos Exércitos. E todas as nações vos chamarão bem-aventurados; porque vós sereis uma terra deleitosa, diz o Senhor dos Exércitos.'
      },
      {
        label: '1 Cor 9:9-14',
        passage: 'Porque na lei de Moisés está escrito: Não atarás a boca ao boi que trilha o grão. Porventura tem Deus cuidado dos bois? Ou não o diz certamente por nós? Certamente que por nós está escrito; porque o que lavra deve lavrar com esperança e o que debulha deve debulhar com esperança de ser participante. Se nós vos semeamos as coisas espirituais, será muito que de vós recolhamos as carnais? Se outros participam deste poder sobre vós, por que não, e mais justamente, nós? Mas nós não usamos deste direito; antes suportamos tudo, para não pormos impedimento algum ao evangelho de Cristo. Não sabeis vós que os que administram o que é sagrado comem do que é do templo? E que os que de contínuo estão junto ao altar, participam do altar? Assim ordenou também o Senhor aos que anunciam o evangelho, que vivam do evangelho.'
      },
      {
        label: 'Mt 23:23',
        passage: 'Ai de vós, escribas e fariseus, hipócritas! pois que dizimais a hortelã, o endro e o cominho, e desprezais o mais importante da lei, o juízo, a misericórdia e a fé; deveis, porém, fazer estas coisas, e não omitir aquelas.'
      },
      {
        label: '2 Cor 8:1-15',
        passage: 'Também, irmãos, vos fazemos conhecer a graça de Deus dada às igrejas da macedônia; Como em muita prova de tribulação houve abundância do seu gozo, e como a sua profunda pobreza abundou em riquezas da sua generosidade. Porque, segundo o seu poder (o que eu mesmo testifico) e ainda acima do seu poder, deram voluntariamente. Pedindo-nos com muitos rogos que aceitássemos a graça e a comunicação deste serviço, que se fazia para com os santos. E não somente fizeram como nós esperávamos, mas a si mesmos se deram primeiramente ao Senhor, e depois a nós, pela vontade de Deus. De maneira que exortamos a Tito que, assim como antes tinha começado, assim também acabasse esta graça entre vós. Portanto, assim como em tudo abundais em fé, e em palavra, e em ciência, e em toda a diligência, e em vosso amor para conosco, assim também abundeis nesta graça. Não digo isto como quem manda, mas para provar, pela diligência dos outros, a sinceridade de vosso amor. Porque já sabeis a graça de nosso Senhor Jesus Cristo que, sendo rico, por amor de vós se fez pobre; para que pela sua pobreza enriquecêsseis. E nisto dou o meu parecer; pois isto convém a vós que, desde o ano passado, começastes; e não foi só praticar, mas também querer. Agora, porém, completai também o já começado, para que, assim como houve a prontidão de vontade, haja também o cumprimento, segundo o que tendes. Porque, se há prontidão de vontade, será aceita segundo o que qualquer tem, e não segundo o que não tem. Mas, não digo isto para que os outros tenham alívio, e vós opressão, Mas para igualdade; neste tempo presente, a vossa abundância supra a falta dos outros, para que também a sua abundância supra a vossa falta, e haja igualdade; Como está escrito: O que muito colheu não teve demais; e o que pouco, não teve de menos.'
      },
      {
        label: 'Rm 15:26-27',
        passage: 'Porque pareceu bem à macedônia e à Acaia fazerem uma coleta para os pobres dentre os santos que estão em Jerusalém. Isto lhes pareceu bem, como devedores que são para com eles. Porque, se os gentios foram participantes dos seus bens espirituais, devem também ministrar-lhes os temporais.'
      },
    ],
    tags: [
      'mordomia',
      'dízimo',
      'oferta',
      'tempo',
      'recursos',
      '21',
    ],
    numbering: 21,
  },
  {
    title: 'Conduta Cristã',
    description: '',
    parameter: CreedEnum.CHRISTIAN_CONDUCT,
    texts: [
      'Somos chamados para ser um povo piedoso que pensa, sente e age em harmonia com os princípios bíblicos em todos os aspectos da vida pessoal e social. Para que o Espírito recrie em nós o caráter de nosso Senhor, só nos envolvemos naquelas coisas que produzem em nossa vida pureza, saúde e alegria semelhantes às de Cristo. Isso significa que nossas diversões e entretenimentos devem corresponder aos mais altos padrões do gosto e beleza cristãos. Embora reconheçamos diferenças culturais, nosso vestuário deve ser simples, modesto e de bom gosto, apropriado àqueles cuja verdadeira beleza não consiste no adorno exterior, mas no ornamento imperecível de um espírito manso e tranquilo. Significa também que, sendo o nosso corpo o templo do Espírito Santo, devemos cuidar dele inteligentemente. Junto com adequado exercício e repouso, devemos adotar a alimentação mais saudável possível e abster-nos dos alimentos imundos identificados nas Escrituras. Visto que as bebidas alcoólicas, o fumo e o uso irresponsável de medicamentos e narcóticos são prejudiciais a nosso corpo, também devemos abaster-nos dessas coisas. Em vez disso, devemos empenhar-nos em tudo que submeta nossos pensamentos e nosso corpo à disciplina de Cristo, o qual deseja nossa integridade, alegria e bem-estar.'
    ],
    youtubeIds: ['1lOPDmPh4UI'],
    biblical_passages: [
      {
        label: 'Gn 7:2',
        passage: 'De todos os animais limpos tomarás para ti sete e sete, o macho e sua fêmea; mas dos animais que não são limpos, dois, o macho e sua fêmea.'
      },
      {
        label: 'Êx 20:15',
        passage: 'Não furtarás.'
      },
      {
        label: 'Lv 11:1-47',
        passage: 'E falou o SENHOR a Moisés e a Arão, dizendo-lhes: Fala aos filhos de Israel, dizendo: Estes são os animais, que comereis dentre todos os animais que há sobre a terra; Dentre os animais, todo o que tem unhas fendidas, e a fenda das unhas se divide em duas, e rumina, deles comereis. Destes, porém, não comereis; dos que ruminam ou dos que têm unhas fendidas; o camelo, que rumina, mas não tem unhas fendidas; esse vos será imundo; E o coelho, porque rumina, mas não tem as unhas fendidas; esse vos será imundo; E a lebre, porque rumina, mas não tem as unhas fendidas; essa vos será imunda. Também o porco, porque tem unhas fendidas, e a fenda das unhas se divide em duas, mas não rumina; este vos será imundo. Das suas carnes não comereis, nem tocareis nos seus cadáveres; estes vos serão imundos. De todos os animais que há nas águas, comereis os seguintes: todo o que tem barbatanas e escamas, nas águas, nos mares e nos rios, esses comereis. Mas todo o que não tem barbatanas, nem escamas, nos mares e nos rios, todo o réptil das águas, e todo o ser vivente que há nas águas, estes serão para vós abominação. Ser-vos-ão, pois, por abominação; da sua carne não comereis, e abominareis o seu cadáver. Todo o que não tem barbatanas ou escamas, nas águas, será para vós abominação. Das aves, estas abominareis; não se comerão, serão abominação: a águia, e o quebrantosso, e o xofrango, E o milhano, e o abutre segundo a sua espécie. Todo o corvo segundo a sua espécie, E o avestruz, e o mocho, e a gaivota, e o gavião segundo a sua espécie. E o bufo, e o corvo marinho, e a coruja, E a gralha, e o cisne, e o pelicano, E a cegonha, a garça segundo a sua espécie, e a poupa, e o morcego. Todo o inseto que voa, que anda sobre quatro pés, será para vós uma abominação. Mas isto comereis de todo o inseto que voa, que anda sobre quatro pés: o que tiver pernas sobre os seus pés, para saltar com elas sobre a terra. Deles comereis estes: a locusta segundo a sua espécie, o gafanhoto devorador segundo a sua espécie, o grilo segundo a sua espécie, e o gafanhoto segundo a sua espécie. E todos os outros insetos que voam, que têm quatro pés, serão para vós uma abominação. E por estes sereis imundos: qualquer que tocar os seus cadáveres, imundo será até à tarde. Qualquer que levar os seus cadáveres lavará as suas vestes, e será imundo até à tarde. Todo o animal que tem unha fendida, mas a fenda não se divide em duas, e todo o que não rumina, vos será por imundo; qualquer que tocar neles será imundo. E todo o animal que anda sobre as suas patas, todo o animal que anda a quatro pés, vos será por imundo; qualquer que tocar nos seus cadáveres será imundo até à tarde. E o que levar os seus cadáveres lavará as suas vestes, e será imundo até à tarde; eles vos serão por imundos. Estes também vos serão por imundos entre os répteis que se arrastam sobre a terra; a doninha, e o rato, e a tartaruga segundo a sua espécie, E o ouriço cacheiro, e o lagarto, e a lagartixa, e a lesma e a toupeira. Estes vos serão por imundos dentre todos os répteis; qualquer que os tocar, estando eles mortos, será imundo até à tarde. E tudo aquilo sobre o que cair alguma coisa deles estando eles mortos será imundo; seja vaso de madeira, ou veste, ou pele, ou saco, qualquer instrumento, com que se faz alguma obra, será posto na água, e será imundo até à tarde; depois será limpo. E todo o vaso de barro, em que cair alguma coisa deles, tudo o que houver nele será imundo, e o vaso quebrareis. Todo o alimento que se come, sobre o qual cair água de tais vasos, será imundo; e toda a bebida que se bebe, depositada nesses vasos, será imunda. E aquilo sobre o que cair alguma parte de seu corpo morto, será imundo; o forno e o vaso de barro serão quebrados; imundos são: portanto vos serão por imundos. Porém a fonte ou cisterna, em que se recolhem águas, será limpa, mas quem tocar no seu cadáver será imundo. E, se dos seus cadáveres cair alguma coisa sobre alguma semente que se vai semear, será limpa; Mas se for deitada água sobre a semente, e se dos seus cadáveres cair alguma coisa sobre ela, vos será por imunda. E se morrer algum dos animais, que vos servem de mantimento, quem tocar no seu cadáver será imundo até à tarde; E quem comer do seu cadáver lavará as suas vestes, e será imundo até à tarde; e quem levar o seu corpo morto lavará as suas vestes, e será imundo até à tarde. Também todo o réptil, que se arrasta sobre a terra, será abominação; não se comerá. Tudo o que anda sobre o ventre, e tudo o que anda sobre quatro pés, ou que tem muitos pés, entre todo o réptil que se arrasta sobre a terra, não comereis, porquanto são uma abominação. Não vos façais abomináveis, por nenhum réptil que se arrasta, nem neles vos contamineis, para não serdes imundos por eles; Porque eu sou o Senhor vosso Deus; portanto vós vos santificareis, e sereis santos, porque eu sou santo; e não vos contaminareis com nenhum réptil que se arrasta sobre a terra; Porque eu sou o Senhor, que vos fiz subir da terra do Egito, para que eu seja vosso Deus, e para que sejais santos; porque eu sou santo. Esta é a lei dos animais, e das aves, e de toda criatura vivente que se move nas águas, e de toda criatura que se arrasta sobre a terra; Para fazer diferença entre o imundo e o limpo; e entre animais que se podem comer e os animais que não se podem comer.'
      },
      {
        label: 'Sl 106:3',
        passage: 'Bem-aventurados os que guardam o juízo, o que pratica justiça em todos os tempos.'
      },
      {
        label: 'Rm 12:1,2',
        passage: 'Rogo-vos, pois, irmãos, pela compaixão de Deus, que apresenteis os vossos corpos em sacrifício vivo, santo e agradável a Deus, que é o vosso culto racional. E não sede conformados com este mundo, mas sede transformados pela renovação do vosso entendimento, para que experimenteis qual seja a boa, agradável, e perfeita vontade de Deus.'
      },
      {
        label: '1Co 6:19,20',
        passage: 'Ou não sabeis que o vosso corpo é o templo do Espírito Santo, que habita em vós, proveniente de Deus, e que não sois de vós mesmos? Porque fostes comprados por bom preço; glorificai, pois, a Deus no vosso corpo, e no vosso espírito, os quais pertencem a Deus.'
      },
      {
        label: '1Co 10:31',
        passage: 'Portanto, quer comais quer bebais, ou façais outra qualquer coisa, fazei tudo para glória de Deus.'
      },
      {
        label: '2Co 6:14–7:1',
        passage: 'Não vos prendais a um jugo desigual com os infiéis; porque, que sociedade tem a justiça com a injustiça? E que comunhão tem a luz com as trevas? E que concórdia há entre Cristo e Belial? Ou que parte tem o fiel com o infiel? E que consenso tem o templo de Deus com os ídolos? Porque vós sois o templo do Deus vivente, como Deus disse: Neles habitarei, e entre eles andarei; e eu serei o seu Deus e eles serão o meu povo. Por isso saí do meio deles, e apartai-vos, diz o Senhor;E não toqueis nada imundo,E eu vos receberei; E eu serei para vós Pai,E vós sereis para mim filhos e filhas, Diz o Senhor Todo-Poderoso.Ora, amados, pois que temos tais promessas, purifiquemo-nos de toda a imundícia da carne e do espírito, aperfeiçoando a santificação no temor de Deus.'
      },
      {
        label: '2Co 10:5',
        passage: 'Destruindo os conselhos, e toda a altivez que se levanta contra o conhecimento de Deus, e levando cativo todo o entendimento à obediência de Cristo;'
      },
      {
        label: 'Ef 5:1-21',
        passage: 'Sede, pois, imitadores de Deus, como filhos amados; E andai em amor, como também Cristo vos amou, e se entregou a si mesmo por nós, em oferta e sacrifício a Deus, em cheiro suave. Mas a fornicação, e toda a impureza ou avareza, nem ainda se nomeie entre vós, como convém a santos; Nem torpezas, nem parvoíces, nem chocarrices, que não convêm; mas antes, ações de graças. Porque bem sabeis isto: que nenhum devasso, ou impuro, ou avarento, o qual é idólatra, tem herança no reino de Cristo e de Deus. Ninguém vos engane com palavras vãs; porque por estas coisas vem a ira de Deus sobre os filhos da desobediência. Portanto, não sejais seus companheiros. Porque noutro tempo éreis trevas, mas agora sois luz no Senhor; andai como filhos da luz (Porque o fruto do Espírito está em toda a bondade, e justiça e verdade); Aprovando o que é agradável ao Senhor. E não comuniqueis com as obras infrutuosas das trevas, mas antes condenai-as. Porque o que eles fazem em oculto até dizê-lo é torpe. Mas todas estas coisas se manifestam, sendo condenadas pela luz, porque a luz tudo manifesta. Por isso diz: Desperta, tu que dormes, e levanta-te dentre os mortos, e Cristo te esclarecerá. Portanto, vede prudentemente como andais, não como néscios, mas como sábios, Remindo o tempo; porquanto os dias são maus. Por isso não sejais insensatos, mas entendei qual seja a vontade do Senhor. E não vos embriagueis com vinho, em que há contenda, mas enchei-vos do Espírito; Falando entre vós em salmos, e hinos, e cânticos espirituais; cantando e salmodiando ao Senhor no vosso coração; Dando sempre graças por tudo a nosso Deus e Pai, em nome de nosso Senhor Jesus Cristo; Sujeitando-vos uns aos outros no temor de Deus.'
      },
      {
        label: 'Fp 2:4',
        passage: 'Não atente cada um para o que é propriamente seu, mas cada qual também para o que é dos outros.'
      },
      {
        label: 'Fp 4:8',
        passage: 'Quanto ao mais, irmãos, tudo o que é verdadeiro, tudo o que é honesto, tudo o que é justo, tudo o que é puro, tudo o que é amável, tudo o que é de boa fama, se há alguma virtude, e se há algum louvor, nisso pensai.'
      },
      {
        label: '1Tm 2:9, 10',
        passage: 'Que do mesmo modo as mulheres se ataviem em traje honesto, com pudor e modéstia, não com tranças, ou com ouro, ou pérolas, ou vestidos preciosos, Mas (como convém a mulheres que fazem profissão de servir a Deus) com boas obras.'
      },
      {
        label: 'Tt 2:11,12',
        passage: 'Porque a graça salvadora de Deus se há manifestado a todos os homens, Ensinando-nos que, renunciando à impiedade e às concupiscências mundanas, vivamos neste presente século sóbria, e justa, e piamente,'
      },
      {
        label: '1Pe 3:1-4',
        passage: 'Semelhantemente, vós, mulheres, sede sujeitas aos vossos próprios maridos; para que também, se alguns não obedecem à palavra, pelo porte de suas mulheres sejam ganhos sem palavra; Considerando a vossa vida casta, em temor. O enfeite delas não seja o exterior, no frisado dos cabelos, no uso de jóias de ouro, na compostura dos vestidos; Mas o homem encoberto no coração; no incorruptível traje de um espírito manso e quieto, que é precioso diante de Deus.'
      },
      {
        label: '1 Jo 2:6',
        passage: 'Aquele que diz que está nele, também deve andar como ele andou.'
      },
    ],
    tags: [
      'condutã',
      'cristã',
    ],
    numbering: 22,
  },
  {
    title: 'O casamento e a família',
    description: '',
    parameter: CreedEnum.MARRIAGE_AND_FAMILY,
    texts: [
      'O casamento foi divinamente estabelecido no Éden e confirmado por Jesus como união vitalícia entre um homem e uma mulher, em amoroso companheirismo. Para o cristão, o compromisso matrimonial é com Deus bem como com o cônjuge, e só deve ser assumido entre um homem e uma mulher que partilham da mesma fé. Mútuo amor, honra, respeito e responsabilidade constituem a estrutura dessa relação, a qual deve refletir o amor, a santidade, a intimidade e a constância da relação entre Cristo e sua igreja. No tocante ao divórcio, Jesus ensinou que a pessoa que se divorcia do cônjuge, a não ser por causa de fornicação, e se casa com outro, comete adultério. Conquanto algumas relações de família fiquem aquém do ideal, um homem e uma mulher que se dedicam inteiramente um ao outro em Cristo por meio do casamento, podem alcançar amorosa unidade por meio da orientação do Espírito e a instrução da igreja. Deus abençoa a família e deseja que seus membros ajudem uns aos outros a alcançar completa maturidade. O aumento da intimidade familiar é uma das características da mensagem final do evangelho. Os pais devem educar seus filhos a amar o Senhor e a obedecer-lhe. Por seu exemplo e suas palavras, devem ensinar-lhes que Cristo é um guia terno, amoroso e cuidadoso, que deseja que eles se tornem membros de seu corpo, a família de Deus, que é formada tanto por solteiros quanto por casados.'
    ],
    youtubeIds: ['b3lf9NKi--w'],
    biblical_passages: [
      {
        label: 'Gn 2:18-25',
        passage: 'E disse o Senhor Deus: Não é bom que o homem esteja só; far-lhe-ei uma ajudadora idônea para ele. Havendo, pois, o Senhor Deus formado da terra todo o animal do campo, e toda a ave dos céus, os trouxe a Adão, para este ver como lhes chamaria; e tudo o que Adão chamou a toda a alma vivente, isso foi o seu nome. E Adão pôs os nomes a todo o gado, e às aves dos céus, e a todo o animal do campo; mas para o homem não se achava ajudadora idônea. Então o Senhor Deus fez cair um sono pesado sobre Adão, e este adormeceu; e tomou uma das suas costelas, e cerrou a carne em seu lugar; E da costela que o Senhor Deus tomou do homem, formou uma mulher, e trouxe-a a Adão. E disse Adão: Esta é agora osso dos meus ossos, e carne da minha carne; esta será chamada mulher, porquanto do homem foi tomada. Portanto deixará o homem o seu pai e a sua mãe, e apegar-se-á à sua mulher, e serão ambos uma carne. E ambos estavam nus, o homem e a sua mulher; e não se envergonhavam.'
      },
      {
        label: 'Êx 20:12',
        passage: 'Honra a teu pai e a tua mãe, para que se prolonguem os teus dias na terra que o Senhor teu Deus te dá.'
      },
      {
        label: 'Dt 6:5-9',
        passage: 'Amarás, pois, o Senhor teu Deus de todo o teu coração, e de toda a tua alma, e de todas as tuas forças. E estas palavras, que hoje te ordeno, estarão no teu coração; E as ensinarás a teus filhos e delas falarás assentado em tua casa, e andando pelo caminho, e deitando-te e levantando-te. Também as atarás por sinal na tua mão, e te serão por frontais entre os teus olhos. E as escreverás nos umbrais de tua casa, e nas tuas portas.'
      },
      {
        label: 'Pv 22:6',
        passage: 'Educa a criança no caminho em que deve andar; e até quando envelhecer não se desviará dele.'
      },
      {
        label: 'Ml 4:5, 6',
        passage: 'Eis que eu vos enviarei o profeta Elias, antes que venha o grande e terrível dia do Senhor; E ele converterá o coração dos pais aos filhos, e o coração dos filhos a seus pais; para que eu não venha, e fira a terra com maldição.'
      },
      {
        label: 'Mt 5:31, 32',
        passage: 'Também foi dito: Qualquer que deixar sua mulher, dê-lhe carta de divórcio. Eu, porém, vos digo que qualquer que repudiar sua mulher, a não ser por causa de fornicação, faz que ela cometa adultério, e qualquer que casar com a repudiada comete adultério.  Mateus 5:31,32Também foi dito: Qualquer que deixar sua mulher, dê-lhe carta de divórcio.Eu, porém, vos digo que qualquer que repudiar sua mulher, a não ser por causa de fornicação, faz que ela cometa adultério, e qualquer que casar com a repudiada comete adultério.'
      },
      {
        label: 'Mt 19:3-9, 12',
        passage: 'Então chegaram ao pé dele os fariseus, tentando-o, e dizendo-lhe: É lícito ao homem repudiar sua mulher por qualquer motivo? Ele, porém, respondendo, disse-lhes: Não tendes lido que aquele que os fez no princípio macho e fêmea os fez, E disse: Portanto, deixará o homem pai e mãe, e se unirá a sua mulher, e serão dois numa só carne? Assim não são mais dois, mas uma só carne. Portanto, o que Deus ajuntou não o separe o homem. Disseram-lhe eles: Então, por que mandou Moisés dar-lhe carta de divórcio, e repudiá-la? Disse-lhes ele: Moisés, por causa da dureza dos vossos corações, vos permitiu repudiar vossas mulheres; mas ao princípio não foi assim. Eu vos digo, porém, que qualquer que repudiar sua mulher, não sendo por causa de fornicação, e casar com outra, comete adultério; e o que casar com a repudiada também comete adultério. Porque há eunucos que assim nasceram do ventre da mãe; e há eunucos que foram castrados pelos homens; e há eunucos que se castraram a si mesmos, por causa do reino dos céus. Quem pode receber isto, receba-o.'
      },
      {
        label: 'Mc 10:11,12',
        passage: 'E ele lhes disse: Qualquer que deixar a sua mulher e casar com outra, adultera contra ela. E, se a mulher deixar a seu marido, e casar com outro, adultera.  Marcos 10:11,12E ele lhes disse: Qualquer que deixar a sua mulher e casar com outra, adultera contra ela.E, se a mulher deixar a seu marido, e casar com outro, adultera.'
      },
      {
        label: 'Jo 2:1-11',
        passage: 'E, vindo outro dia, em que os filhos de Deus vieram apresentar-se perante o SENHOR, veio também Satanás entre eles, apresentar-se perante o SENHOR. Então o Senhor disse a Satanás: Donde vens? E respondeu Satanás ao Senhor, e disse: De rodear a terra, e passear por ela. E disse o Senhor a Satanás: Observaste o meu servo Jó? Porque ninguém há na terra semelhante a ele, homem íntegro e reto, temente a Deus e que se desvia do mal, e que ainda retém a sua sinceridade, havendo-me tu incitado contra ele, para o consumir sem causa. Então Satanás respondeu ao Senhor, e disse: Pele por pele, e tudo quanto o homem tem dará pela sua vida. Porém estende a tua mão, e toca-lhe nos ossos, e na carne, e verás se não blasfema contra ti na tua face! E disse o Senhor a Satanás: Eis que ele está na tua mão; porém guarda a sua vida. Então saiu Satanás da presença do Senhor, e feriu a Jó de úlceras malignas, desde a planta do pé até ao alto da cabeça. E Jó tomou um caco para se raspar com ele; e estava assentado no meio da cinza. Então sua mulher lhe disse: Ainda reténs a tua sinceridade? Amaldiçoa a Deus, e morre. Porém ele lhe disse: Como fala qualquer doida, falas tu; receberemos o bem de Deus, e não receberíamos o mal? Em tudo isto não pecou Jó com os seus lábios. Ouvindo, pois, três amigos de Jó todo este mal que tinha vindo sobre ele, vieram cada um do seu lugar: Elifaz o temanita, e Bildade o suíta, e Zofar o naamatita; e combinaram condoer-se dele, para o consolarem.'
      },
      {
        label: '1Co 7:7, 10, 11',
        passage: 'Porque quereria que todos os homens fossem como eu mesmo; mas cada um tem de Deus o seu próprio dom, um de uma maneira e outro de outra. Todavia, aos casados mando, não eu mas o Senhor, que a mulher não se aparte do marido. Se, porém, se apartar, que fique sem casar, ou que se reconcilie com o marido; e que o marido não deixe a mulher.'
      },
      {
        label: '2Co 6:14',
        passage: 'Não vos prendais a um jugo desigual com os infiéis; porque, que sociedade tem a justiça com a injustiça? E que comunhão tem a luz com as trevas?'
      },
      {
        label: 'Ef 5:21-33',
        passage: 'Sujeitando-vos uns aos outros no temor de Deus. Vós, mulheres, sujeitai-vos a vossos maridos, como ao Senhor; Porque o marido é a cabeça da mulher, como também Cristo é a cabeça da igreja, sendo ele próprio o salvador do corpo. De sorte que, assim como a igreja está sujeita a Cristo, assim também as mulheres sejam em tudo sujeitas a seus maridos. Vós, maridos, amai vossas mulheres, como também Cristo amou a igreja, e a si mesmo se entregou por ela, Para a santificar, purificando-a com a lavagem da água, pela palavra, Para a apresentar a si mesmo igreja gloriosa, sem mácula, nem ruga, nem coisa semelhante, mas santa e irrepreensível. Assim devem os maridos amar as suas próprias mulheres, como a seus próprios corpos. Quem ama a sua mulher, ama-se a si mesmo. Porque nunca ninguém odiou a sua própria carne; antes a alimenta e sustenta, como também o Senhor à igreja; Porque somos membros do seu corpo, da sua carne, e dos seus ossos. Por isso deixará o homem seu pai e sua mãe, e se unirá a sua mulher; e serão dois numa carne. Grande é este mistério; digo-o, porém, a respeito de Cristo e da igreja. Assim também vós, cada um em particular, ame a sua própria mulher como a si mesmo, e a mulher reverencie o marido.'
      },
      {
        label: 'Ef 6:1-4',
        passage: 'Vós, filhos, sede obedientes a vossos pais no Senhor, porque isto é justo. Honra a teu pai e a tua mãe, que é o primeiro mandamento com promessa; Para que te vá bem, e vivas muito tempo sobre a terra. E vós, pais, não provoqueis à ira a vossos filhos, mas criai-os na doutrina e admoestação do Senhor.'
      },
    ],
    tags: [
      'casamento',
      'matrimônio',
      'família',
      '23',
    ],
    numbering: 23,
  },
  {
    title: 'O Ministério de Cristo no Santuário Celestial',
    description: '',
    parameter: CreedEnum.THE_MINISTRY_OF_CHRIST_IN_THE_HEAVENLY_SANCTUARY,
    texts: [
      'Há um santuário no Céu, o verdadeiro tabernáculo que o Senhor erigiu, não seres humanos. Nele Cristo ministra em nosso favor, tornando acessíveis aos crentes os benefícios de seu sacrifício expiatório oferecido uma vez por todas na cruz. Em sua ascensão, Ele foi empossado como nosso grande sumo sacerdote e começou seu ministério intercessório, que foi tipificado pela obra do sumo sacerdote no lugar santo do santuário terrestre. Em 1844, no fim do período profético dos 2.300 dias, Ele iniciou a segunda e última etapa de seu ministério expiatório, que foi tipificado pela obra do sumo sacerdote no lugar santíssimo do santuário terrestre. É uma obra de juízo investigativo, a qual faz parte da eliminação final de todo pecado, prefigurada pela purificação do antigo santuário hebraico, no Dia da Expiação. Nesse serviço típico, o santuário era purificado com o sangue de sacrifícios de animais, mas as coisas celestiais são purificadas com o perfeito sacrifício do sangue de Jesus. O juízo investigativo revela aos seres celestiais quem dentre os mortos dorme em Cristo, sendo, portanto, nele, considerado digno de ter parte na primeira ressurreição. Também torna manifesto quem, dentre os vivos, permanece em Cristo, guardando os mandamentos de Deus e a fé de Jesus, estando, portanto, nele, preparado para a trasladação a seu reino eterno. Este julgamento vindica a justiça de Deus em salvar os que creem em Jesus. Declara que os que permaneceram leais a Deus receberão o reino. A terminação do ministério de Cristo assinalará o fim do tempo da graça para os seres humanos, antes do segundo advento.'
    ],
    youtubeIds: ['I_Tc1GKx7bk'],
    biblical_passages: [
      {
        label: 'Lv 16',
        passage: 'E falou o SENHOR a Moisés, depois da morte dos dois filhos de Arão, que morreram quando se chegaram diante do SENHOR. Disse, pois, o Senhor a Moisés: Dize a Arão, teu irmão, que não entre no santuário em todo o tempo, para dentro do véu, diante do propiciatório que está sobre a arca, para que não morra; porque eu aparecerei na nuvem sobre o propiciatório. Com isto Arão entrará no santuário: com um novilho, para expiação do pecado, e um carneiro para holocausto. Vestirá ele a túnica santa de linho, e terá ceroulas de linho sobre a sua carne, e cingir-se-á com um cinto de linho, e se cobrirá com uma mitra de linho; estas são vestes santas; por isso banhará a sua carne na água, e as vestirá. E da congregação dos filhos de Israel tomará dois bodes para expiação do pecado e um carneiro para holocausto. Depois Arão oferecerá o novilho da expiação, que será para ele; e fará expiação por si e pela sua casa. Também tomará ambos os bodes, e os porá perante o Senhor, à porta da tenda da congregação. E Arão lançará sortes sobre os dois bodes; uma pelo Senhor, e a outra pelo bode emissário. Então Arão fará chegar o bode, sobre o qual cair a sorte pelo Senhor, e o oferecerá para expiação do pecado. Mas o bode, sobre que cair a sorte para ser bode emissário, apresentar-se-á vivo perante o Senhor, para fazer expiação com ele, a fim de enviá-lo ao deserto como bode emissário. E Arão fará chegar o novilho da expiação, que será por ele, e fará expiação por si e pela sua casa; e degolará o novilho da sua expiação. Tomará também o incensário cheio de brasas de fogo do altar, de diante do Senhor, e os seus punhos cheios de incenso aromático moído, e o levará para dentro do véu. E porá o incenso sobre o fogo perante o Senhor, e a nuvem do incenso cobrirá o propiciatório, que está sobre o testemunho, para que não morra. E tomará do sangue do novilho, e com o seu dedo espargirá sobre a face do propiciatório, para o lado oriental; e perante o propiciatório espargirá sete vezes do sangue com o seu dedo. Depois degolará o bode, da expiação, que será pelo povo, e trará o seu sangue para dentro do véu; e fará com o seu sangue como fez com o sangue do novilho, e o espargirá sobre o propiciatório, e perante a face do propiciatório. Assim fará expiação pelo santuário por causa das imundícias dos filhos de Israel e das suas transgressões, e de todos os seus pecados; e assim fará para a tenda da congregação que reside com eles no meio das suas imundícias. E nenhum homem estará na tenda da congregação quando ele entrar para fazer expiação no santuário, até que ele saia, depois de feita expiação por si mesmo, e pela sua casa, e por toda a congregação de Israel. Então sairá ao altar, que está perante o Senhor, e fará expiação por ele; e tomará do sangue do novilho, e do sangue do bode, e o porá sobre as pontas do altar ao redor. E daquele sangue espargirá sobre o altar, com o seu dedo, sete vezes, e o purificará das imundícias dos filhos de Israel, e o santificará. Havendo, pois, acabado de fazer expiação pelo santuário, e pela tenda da congregação, e pelo altar, então fará chegar o bode vivo. E Arão porá ambas as suas mãos sobre a cabeça do bode vivo, e sobre ele confessará todas as iniqüidades dos filhos de Israel, e todas as suas transgressões, e todos os seus pecados; e os porá sobre a cabeça do bode, e enviá-lo-á ao deserto, pela mão de um homem designado para isso. Assim aquele bode levará sobre si todas as iniqüidades deles à terra solitária; e deixará o bode no deserto. Depois Arão virá à tenda da congregação, e despirá as vestes de linho, que havia vestido quando entrara no santuário, e ali as deixará. E banhará a sua carne em água no lugar santo, e vestirá as suas vestes; então sairá e preparará o seu holocausto, e o holocausto do povo, e fará expiação por si e pelo povo. Também queimará a gordura da expiação do pecado sobre o altar. E aquele que tiver levado o bode emissário lavará as suas vestes, e banhará a sua carne em água; e depois entrará no arraial. Mas o novilho da expiação, e o bode da expiação do pecado, cujo sangue foi trazido para fazer expiação no santuário, serão levados fora do arraial; porém as suas peles, a sua carne, e o seu esterco queimarão com fogo. E aquele que os queimar lavará as suas vestes, e banhará a sua carne em água; e depois entrará no arraial. E isto vos será por estatuto perpétuo: no sétimo mês, aos dez do mês, afligireis as vossas almas, e nenhum trabalho fareis nem o natural nem o estrangeiro que peregrina entre vós. Porque naquele dia se fará expiação por vós, para purificar-vos; e sereis purificados de todos os vossos pecados perante o Senhor. É um sábado de descanso para vós, e afligireis as vossas almas; isto é estatuto perpétuo. E o sacerdote, que for ungido, e que for sagrado, para administrar o sacerdócio, no lugar de seu pai, fará a expiação, havendo vestido as vestes de linho, as vestes santas; Assim fará expiação pelo santo santuário; também fará expiação pela tenda da congregação e pelo altar; semelhantemente fará expiação pelos sacerdotes e por todo o povo da congregação. E isto vos será por estatuto perpétuo, para fazer expiação pelos filhos de Israel de todos os seus pecados, uma vez no ano. E fez Arão como o Senhor ordenara a Moisés.'
      },
      {
        label: 'Nm 14:34',
        passage: 'Segundo o número dos dias em que espiastes esta terra, quarenta dias, cada dia representando um ano, levareis sobre vós as vossas iniqüidades quarenta anos, e conhecereis o meu afastamento.'
      },
      {
        label: 'Ez 4:6',
        passage: 'E, quando tiveres cumprido estes dias, tornar-te-ás a deitar sobre o teu lado direito, e levarás a iniqüidade da casa de Judá quarenta dias; um dia te dei para cada ano.'
      },
      {
        label: 'Dn 7:9-27',
        passage: 'Eu continuei olhando, até que foram postos uns tronos, e um ancião de dias se assentou; a sua veste era branca como a neve, e o cabelo da sua cabeça como a pura lã; e seu trono era de chamas de fogo, e as suas rodas de fogo ardente. Um rio de fogo manava e saía de diante dele; milhares de milhares o serviam, e milhões de milhões assistiam diante dele; assentou-se o juízo, e abriram-se os livros. Então estive olhando, por causa da voz das grandes palavras que o chifre proferia; estive olhando até que o animal foi morto, e o seu corpo desfeito, e entregue para ser queimado pelo fogo; E, quanto aos outros animais, foi-lhes tirado o domínio; todavia foi-lhes prolongada a vida até certo espaço de tempo. Eu estava olhando nas minhas visões da noite, e eis que vinha nas nuvens do céu um como o filho do homem; e dirigiu-se ao ancião de dias, e o fizeram chegar até ele. E foi-lhe dado o domínio, e a honra, e o reino, para que todos os povos, nações e línguas o servissem; o seu domínio é um domínio eterno, que não passará, e o seu reino tal, que não será destruído. Quanto a mim, Daniel, o meu espírito foi abatido dentro do corpo, e as visões da minha cabeça me perturbaram. Cheguei-me a um dos que estavam perto, e pedi-lhe a verdade acerca de tudo isto. E ele me disse, e fez-me saber a interpretação das coisas. Estes grandes animais, que são quatro, são quatro reis, que se levantarão da terra. Mas os santos do Altíssimo receberão o reino, e o possuirão para todo o sempre, e de eternidade em eternidade. Então tive desejo de conhecer a verdade a respeito do quarto animal, que era diferente de todos os outros, muito terrível, cujos dentes eram de ferro e as suas unhas de bronze; que devorava, fazia em pedaços e pisava aos pés o que sobrava; E também a respeito dos dez chifres que tinha na cabeça, e do outro que subiu, e diante do qual caíram três, isto é, daquele que tinha olhos, e uma boca que falava grandes coisas, e cujo parecer era mais robusto do que o dos seus companheiros. Eu olhava, e eis que este chifre fazia guerra contra os santos, e prevaleceu contra eles. Até que veio o ancião de dias, e fez justiça aos santos do Altíssimo; e chegou o tempo em que os santos possuíram o reino. Disse assim: O quarto animal será o quarto reino na terra, o qual será diferente de todos os reinos; e devorará toda a terra, e a pisará aos pés, e a fará em pedaços. E, quanto aos dez chifres, daquele mesmo reino se levantarão dez reis; e depois deles se levantará outro, o qual será diferente dos primeiros, e abaterá a três reis. E proferirá palavras contra o Altíssimo, e destruirá os santos do Altíssimo, e cuidará em mudar os tempos e a lei; e eles serão entregues na sua mão, por um tempo, e tempos, e a metade de um tempo. Mas o juízo será estabelecido, e eles tirarão o seu domínio, para o destruir e para o desfazer até ao fim. E o reino, e o domínio, e a majestade dos reinos debaixo de todo o céu serão dados ao povo dos santos do Altíssimo; o seu reino será um reino eterno, e todos os domínios o servirão, e lhe obedecerão.'
      },
      {
        label: 'Dn 8:13, 14',
        passage: 'Depois ouvi um santo que falava; e disse outro santo àquele que falava: Até quando durará a visão do sacrifício contínuo, e da transgressão assoladora, para que sejam entregues o santuário e o exército, a fim de serem pisados? E ele me disse: Até duas mil e trezentas tardes e manhãs; e o santuário será purificado.'
      },
      {
        label: 'Dn 9:24-27',
        passage: 'Setenta semanas estão determinadas sobre o teu povo, e sobre a tua santa cidade, para cessar a transgressão, e para dar fim aos pecados, e para expiar a iniqüidade, e trazer a justiça eterna, e selar a visão e a profecia, e para ungir o Santíssimo. Sabe e entende: desde a saída da ordem para restaurar, e para edificar a Jerusalém, até ao Messias, o Príncipe, haverá sete semanas, e sessenta e duas semanas; as ruas e o muro se reedificarão, mas em tempos angustiosos. E depois das sessenta e duas semanas será cortado o Messias, mas não para si mesmo; e o povo do príncipe, que há de vir, destruirá a cidade e o santuário, e o seu fim será com uma inundação; e até ao fim haverá guerra; estão determinadas as assolações. E ele firmará aliança com muitos por uma semana; e na metade da semana fará cessar o sacrifício e a oblação; e sobre a asa das abominações virá o assolador, e isso até à consumação; e o que está determinado será derramado sobre o assolador.'
      },
      {
        label: 'Hb 1:3',
        passage: 'O qual, sendo o resplendor da sua glória, e a expressa imagem da sua pessoa, e sustentando todas as coisas pela palavra do seu poder, havendo feito por si mesmo a purificação dos nossos pecados, assentou-se à destra da majestade nas alturas;'
      },
      {
        label: 'Hb 2:16,17',
        passage: 'Porque, na verdade, ele não tomou os anjos, mas tomou a descendência de Abraão. Por isso convinha que em tudo fosse semelhante aos irmãos, para ser misericordioso e fiel sumo sacerdote naquilo que é de Deus, para expiar os pecados do povo.'
      },
      {
        label: 'Hb 4:14-16',
        passage: 'Visto que temos um grande sumo sacerdote, Jesus, Filho de Deus, que penetrou nos céus, retenhamos firmemente a nossa confissão. Porque não temos um sumo sacerdote que não possa compadecer-se das nossas fraquezas; porém, um que, como nós, em tudo foi tentado, mas sem pecado. Cheguemos, pois, com confiança ao trono da graça, para que possamos alcançar misericórdia e achar graça, a fim de sermos ajudados em tempo oportuno.'
      },
      {
        label: 'Hb 8:1-5',
        passage: 'Ora, a suma do que temos dito é que temos um sumo sacerdote tal, que está assentado nos céus à destra do trono da majestade, Ministro do santuário, e do verdadeiro tabernáculo, o qual o Senhor fundou, e não o homem. Porque todo o sumo sacerdote é constituído para oferecer dons e sacrifícios; por isso era necessário que este também tivesse alguma coisa que oferecer. Ora, se ele estivesse na terra, nem tão pouco sacerdote seria, havendo ainda sacerdotes que oferecem dons segundo a lei, Os quais servem de exemplo e sombra das coisas celestiais, como Moisés divinamente foi avisado, estando já para acabar o tabernáculo; porque foi dito: Olha, faze tudo conforme o modelo que no monte se te mostrou.'
      },
      {
        label: 'Hb 9:11-28',
        passage: 'Mas, vindo Cristo, o sumo sacerdote dos bens futuros, por um maior e mais perfeito tabernáculo, não feito por mãos, isto é, não desta criação, Nem por sangue de bodes e bezerros, mas por seu próprio sangue, entrou uma vez no santuário, havendo efetuado uma eterna redenção. Porque, se o sangue dos touros e bodes, e a cinza de uma novilha esparzida sobre os imundos, os santifica, quanto à purificação da carne, Quanto mais o sangue de Cristo, que pelo Espírito eterno se ofereceu a si mesmo imaculado a Deus, purificará as vossas consciências das obras mortas, para servirdes ao Deus vivo? E por isso é Mediador de um novo testamento, para que, intervindo a morte para remissão das transgressões que havia debaixo do primeiro testamento, os chamados recebam a promessa da herança eterna. Porque onde há testamento, é necessário que intervenha a morte do testador. Porque um testamento tem força onde houve morte; ou terá ele algum valor enquanto o testador vive? Por isso também o primeiro não foi consagrado sem sangue; Porque, havendo Moisés anunciado a todo o povo todos os mandamentos segundo a lei, tomou o sangue dos bezerros e dos bodes, com água, lã purpúrea e hissopo, e aspergiu tanto o mesmo livro como todo o povo, Dizendo: Este é o sangue do testamento que Deus vos tem mandado. E semelhantemente aspergiu com sangue o tabernáculo e todos os vasos do ministério. E quase todas as coisas, segundo a lei, se purificam com sangue; e sem derramamento de sangue não há remissão. De sorte que era bem necessário que as figuras das coisas que estão no céu assim se purificassem; mas as próprias coisas celestiais com sacrifícios melhores do que estes. Porque Cristo não entrou num santuário feito por mãos, figura do verdadeiro, porém no mesmo céu, para agora comparecer por nós perante a face de Deus; Nem também para a si mesmo se oferecer muitas vezes, como o sumo sacerdote cada ano entra no santuário com sangue alheio; De outra maneira, necessário lhe fora padecer muitas vezes desde a fundação do mundo. Mas agora na consumação dos séculos uma vez se manifestou, para aniquilar o pecado pelo sacrifício de si mesmo. E, como aos homens está ordenado morrerem uma vez, vindo depois disso o juízo, Assim também Cristo, oferecendo-se uma vez para tirar os pecados de muitos, aparecerá segunda vez, sem pecado, aos que o esperam para salvação.'
      },
      {
        label: 'Hb 10:19-22',
        passage: 'Tendo, pois, irmãos, ousadia para entrar no santuário, pelo sangue de Jesus, Pelo novo e vivo caminho que ele nos consagrou, pelo véu, isto é, pela sua carne, E tendo um grande sacerdote sobre a casa de Deus, Cheguemo-nos com verdadeiro coração, em inteira certeza de fé, tendo os corações purificados da má consciência, e o corpo lavado com água limpa,'
      },
      {
        label: 'Ap 8:3-5',
        passage: 'E veio outro anjo, e pôs-se junto ao altar, tendo um incensário de ouro; e foi-lhe dado muito incenso, para o pôr com as orações de todos os santos sobre o altar de ouro, que está diante do trono. E a fumaça do incenso subiu com as orações dos santos desde a mão do anjo até diante de Deus. E o anjo tomou o incensário, e o encheu do fogo do altar, e o lançou sobre a terra; e houve depois vozes, e trovões, e relâmpagos e terremotos.'
      },
      {
        label: 'Ap 11:19',
        passage: 'E abriu-se no céu o templo de Deus, e a arca da sua aliança foi vista no seu templo; e houve relâmpagos, e vozes, e trovões, e terremotos e grande saraiva.'
      },
      {
        label: 'Ap 14:6,7,12',
        passage: 'E vi outro anjo voar pelo meio do céu, e tinha o evangelho eterno, para o proclamar aos que habitam sobre a terra, e a toda a nação, e tribo, e língua, e povo, Dizendo com grande voz: Temei a Deus, e dai-lhe glória; porque é vinda a hora do seu juízo. E adorai aquele que fez o céu, e a terra, e o mar, e as fontes das águas. Aqui está a paciência dos santos; aqui estão os que guardam os mandamentos de Deus e a fé em Jesus.'
      },
      {
        label: 'Ap 20:12',
        passage: 'E vi os mortos, grandes e pequenos, que estavam diante de Deus, e abriram-se os livros; e abriu-se outro livro, que é o da vida. E os mortos foram julgados pelas coisas que estavam escritas nos livros, segundo as suas obras.'
      },
      {
        label: 'Ap 22:11, 12',
        passage: 'Quem é injusto, seja injusto ainda; e quem é sujo, seja sujo ainda; e quem é justo, seja justificado ainda; e quem é santo, seja santificado ainda. E, eis que cedo venho, e o meu galardão está comigo, para dar a cada um segundo a sua obra.'
      },
    ],
    tags: [
      'jesus',
      'cristo',
      'sacerdote',
      'santuário',
      'celestial',
    ],
    numbering: 24,
  },
  {
    title: 'A Segunda Vinda de Cristo',
    description: '',
    parameter: CreedEnum.THE_SECOND_COMING_OF_CHRIST,
    texts: [
      'A segunda vinda de Cristo é a bendita esperança da igreja, o grande ponto culminante do evangelho. A vinda do Salvador será literal, pessoal, visível e universal. Quando Ele voltar, os justos falecidos serão ressuscitados e, juntamente com os justos que estiverem vivos, serão glorificados e levados para o Céu, mas os ímpios irão morrer. O cumprimento quase completo da maioria dos aspectos da profecia e a condição atual do mundo indicam que a vinda de Cristo está próxima. O tempo exato desse acontecimento não foi revelado, e somos portanto exortados a estar preparados em todo o tempo.'
    ],
    youtubeIds: ['7mKoV4mCt9E'],
    biblical_passages: [
      {
        label: 'Mt 24',
        passage: 'E, quando Jesus ia saindo do templo, aproximaram-se dele os seus discípulos para lhe mostrarem a estrutura do templo. Jesus, porém, lhes disse: Não vedes tudo isto? Em verdade vos digo que não ficará aqui pedra sobre pedra que não seja derrubada. E, estando assentado no Monte das Oliveiras, chegaram-se a ele os seus discípulos em particular, dizendo: Dize-nos, quando serão essas coisas, e que sinal haverá da tua vinda e do fim do mundo? E Jesus, respondendo, disse-lhes: Acautelai-vos, que ninguém vos engane; Porque muitos virão em meu nome, dizendo: Eu sou o Cristo; e enganarão a muitos. E ouvireis de guerras e de rumores de guerras; olhai, não vos assusteis, porque é mister que isso tudo aconteça, mas ainda não é o fim. Porquanto se levantará nação contra nação, e reino contra reino, e haverá fomes, e pestes, e terremotos, em vários lugares. Mas todas estas coisas são o princípio de dores. Então vos hão de entregar para serdes atormentados, e matar-vosão; e sereis odiados de todas as nações por causa do meu nome. Nesse tempo muitos serão escandalizados, e trair-se-ão uns aos outros, e uns aos outros se odiarào. E surgirão muitos falsos profetas, e enganarão a muitos. E, por se multiplicar a iniqüidade, o amor de muitos esfriará. Mas aquele que perseverar até ao fim, esse será salvo. E este evangelho do reino será pregado em todo o mundo, em testemunho a todas as nações, e então virá o fim. Quando, pois, virdes que a abominação da desolação, de que falou o profeta Daniel, está no lugar santo; quem lê, entenda; Então, os que estiverem na Judéia, fujam para os montes; E quem estiver sobre o telhado não desça a tirar alguma coisa de sua casa; E quem estiver no campo não volte atrás a buscar as suas vestes. Mas ai das grávidas e das que amamentarem naqueles dias! E orai para que a vossa fuga não aconteça no inverno nem no sábado; Porque haverá então grande aflição, como nunca houve desde o princípio do mundo até agora, nem tampouco há de haver. E, se aqueles dias não fossem abreviados, nenhuma carne se salvaria; mas por causa dos escolhidos serão abreviados aqueles dias. Então, se alguém vos disser: Eis que o Cristo está aqui, ou ali, não lhe deis crédito; Porque surgirão falsos cristos e falsos profetas, e farão tão grandes sinais e prodígios que, se possível fora, enganariam até os escolhidos. Eis que eu vo-lo tenho predito. Portanto, se vos disserem: Eis que ele está no deserto, não saiais. Eis que ele está no interior da casa; não acrediteis. Porque, assim como o relâmpago sai do oriente e se mostra até ao ocidente, assim será também a vinda do Filho do homem. Pois onde estiver o cadáver, aí se ajuntarão as águias. E, logo depois da aflição daqueles dias, o sol escurecerá, e a lua não dará a sua luz, e as estrelas cairão do céu, e as potências dos céus serão abaladas. Então aparecerá no céu o sinal do Filho do homem; e todas as tribos da terra se lamentarão, e verão o Filho do homem, vindo sobre as nuvens do céu, com poder e grande glória. E ele enviará os seus anjos com rijo clamor de trombeta, os quais ajuntarão os seus escolhidos desde os quatro ventos, de uma à outra extremidade dos céus. Aprendei, pois, esta parábola da figueira: Quando já os seus ramos se tornam tenros e brotam folhas, sabeis que está próximo o verão. Igualmente, quando virdes todas estas coisas, sabei que ele está próximo, às portas. Em verdade vos digo que não passará esta geração sem que todas estas coisas aconteçam. O céu e a terra passarão, mas as minhas palavras não hão de passar. Mas daquele dia e hora ninguém sabe, nem os anjos do céu, mas unicamente meu Pai. E, como foi nos dias de Noé, assim será também a vinda do Filho do homem. Porquanto, assim como, nos dias anteriores ao dilúvio, comiam, bebiam, casavam e davam-se em casamento, até ao dia em que Noé entrou na arca, E não o perceberam, até que veio o dilúvio, e os levou a todos, assim será também a vinda do Filho do homem. Então, estando dois no campo, será levado um, e deixado o outro; Estando duas moendo no moinho, será levada uma, e deixada outra. Vigiai, pois, porque não sabeis a que hora há de vir o vosso Senhor. Mas considerai isto: se o pai de família soubesse a que vigília da noite havia de vir o ladrão, vigiaria e não deixaria minar a sua casa. Por isso, estai vós apercebidos também; porque o Filho do homem há de vir à hora em que não penseis. Quem é, pois, o servo fiel e prudente, que o seu senhor constituiu sobre a sua casa, para dar o sustento a seu tempo? Bem-aventurado aquele servo que o seu senhor, quando vier, achar servindo assim. Em verdade vos digo que o porá sobre todos os seus bens. Mas se aquele mau servo disser no seu coração: O meu senhor tarde virá; E começar a espancar os seus conservos, e a comer e a beber com os ébrios, Virá o senhor daquele servo num dia em que o não espera, e à hora em que ele não sabe, E separá-lo-á, e destinará a sua parte com os hipócritas; ali haverá pranto e ranger de dentes.'
      },
      {
        label: 'Mc 13',
        passage: 'E, saindo ele do templo, disse-lhe um dos seus discípulos: Mestre, olha que pedras, e que edifícios! E, respondendo Jesus, disse-lhe: Vês estes grandes edifícios? Não ficará pedra sobre pedra que não seja derrubada. E, assentando-se ele no Monte das Oliveiras, defronte do templo, Pedro, e Tiago, e João e André lhe perguntaram em particular: Dize-nos, quando serão essas coisas, e que sinal haverá quando todas elas estiverem para se cumprir. E Jesus, respondendo-lhes, começou a dizer: Olhai que ninguém vos engane; Porque muitos virão em meu nome, dizendo: Eu sou o Cristo; e enganarão a muitos. E, quando ouvirdes de guerras e de rumores de guerras, não vos perturbeis; porque assim deve acontecer; mas ainda não será o fim. Porque se levantará nação contra nação, e reino contra reino, e haverá terremotos em diversos lugares, e haverá fomes e tribulações. Estas coisas sào os princípios das dores. Mas olhai por vós mesmos, porque vos entregarão aos concílios e às sinagogas; e sereis açoitados, e sereis apresentados perante presidentes e reis, por amor de mim, para lhes servir de testemunho. Mas importa que o evangelho seja primeiramente pregado entre todas as nações. Quando, pois, vos conduzirem e vos entregarem, não estejais solícitos de antemão pelo que haveis de dizer, nem premediteis; mas, o que vos for dado naquela hora, isso falai, porque não sois vós os que falais, mas o Espírito Santo. E o irmão entregará à morte o irmão, e o pai ao filho; e levantar-se-ão os filhos contra os pais, e os farão morrer. E sereis odiados por todos por amor do meu nome; mas quem perseverar até ao fim, esse será salvo. Ora, quando vós virdes a abominação do assolamento, que foi predita por Daniel o profeta, estar onde não deve estar (quem lê, entenda), então os que estiverem na Judéia fujam para os montes. E o que estiver sobre o telhado não desça para casa, nem entre a tomar coisa alguma de sua casa; E o que estiver no campo não volte atrás, para tomar as suas vestes. Mas ai das grávidas, e das que criarem naqueles dias! Orai, pois, para que a vossa fuga não suceda no inverno. Porque naqueles dias haverá uma aflição tal, qual nunca houve desde o princípio da criação, que Deus criou, até agora, nem jamais haverá. E, se o Senhor não abreviasse aqueles dias, nenhuma carne se salvaria; mas, por causa dos eleitosque escolheu, abreviou aqueles dias. E então, se alguém vos disser: Eis aqui o Cristo; ou: Ei-lo ali; não acrediteis. Porque se levantarão falsos cristos, e falsos profetas, e farão sinais e prodígios, para enganarem, se for possível, até os escolhidos. Mas vós vede; eis que de antemão vos tenho dito tudo. Ora, naqueles dias, depois daquela aflição, o sol se escurecerá, e a lua não dará a sua luz. E as estrelas cairão do céu, e as forças que estão nos céus serão abaladas. E então verão vir o Filho do homem nas nuvens, com grande poder e glória. E ele enviará os seus anjos, e ajuntará os seus escolhidos, desde os quatro ventos, da extremidade da terra até a extremidade do céu. Aprendei, pois, a parábola da figueira: Quando já o seu ramo se torna tenro, e brota folhas, bem sabeis que já está próximo o verão. Assim também vós, quando virdes sucederem estas coisas, sabei que já está perto, às portas. Na verdade vos digo que não passará esta geração, sem que todas estas coisas aconteçam. Passará o céu e a terra, mas as minhas palavras não passarão. Mas daquele dia e hora ninguém sabe, nem os anjos que estão no céu, nem o Filho, senão o Pai. Olhai, vigiai e orai; porque não sabeis quando chegará o tempo. É como se um homem, partindo para fora da terra, deixasse a sua casa, e desse autoridade aos seus servos, e a cada um a sua obra, e mandasse ao porteiro que vigiasse. Vigiai, pois, porque não sabeis quando virá o senhor da casa; se à tarde, se à meia-noite, se ao cantar do galo, se pela manhã, Para que, vindo de improviso, não vos ache dormindo. E as coisas que vos digo, digo-as a todos: Vigiai.'
      },
      {
        label: 'Mc 13',
        passage: 'E, saindo ele do templo, disse-lhe um dos seus discípulos: Mestre, olha que pedras, e que edifícios! E, respondendo Jesus, disse-lhe: Vês estes grandes edifícios? Não ficará pedra sobre pedra que não seja derrubada. E, assentando-se ele no Monte das Oliveiras, defronte do templo, Pedro, e Tiago, e João e André lhe perguntaram em particular: Dize-nos, quando serão essas coisas, e que sinal haverá quando todas elas estiverem para se cumprir. E Jesus, respondendo-lhes, começou a dizer: Olhai que ninguém vos engane; Porque muitos virão em meu nome, dizendo: Eu sou o Cristo; e enganarão a muitos. E, quando ouvirdes de guerras e de rumores de guerras, não vos perturbeis; porque assim deve acontecer; mas ainda não será o fim. Porque se levantará nação contra nação, e reino contra reino, e haverá terremotos em diversos lugares, e haverá fomes e tribulações. Estas coisas sào os princípios das dores. Mas olhai por vós mesmos, porque vos entregarão aos concílios e às sinagogas; e sereis açoitados, e sereis apresentados perante presidentes e reis, por amor de mim, para lhes servir de testemunho. Mas importa que o evangelho seja primeiramente pregado entre todas as nações. Quando, pois, vos conduzirem e vos entregarem, não estejais solícitos de antemão pelo que haveis de dizer, nem premediteis; mas, o que vos for dado naquela hora, isso falai, porque não sois vós os que falais, mas o Espírito Santo. E o irmão entregará à morte o irmão, e o pai ao filho; e levantar-se-ão os filhos contra os pais, e os farão morrer. E sereis odiados por todos por amor do meu nome; mas quem perseverar até ao fim, esse será salvo. Ora, quando vós virdes a abominação do assolamento, que foi predita por Daniel o profeta, estar onde não deve estar (quem lê, entenda), então os que estiverem na Judéia fujam para os montes. E o que estiver sobre o telhado não desça para casa, nem entre a tomar coisa alguma de sua casa; E o que estiver no campo não volte atrás, para tomar as suas vestes. Mas ai das grávidas, e das que criarem naqueles dias! Orai, pois, para que a vossa fuga não suceda no inverno. Porque naqueles dias haverá uma aflição tal, qual nunca houve desde o princípio da criação, que Deus criou, até agora, nem jamais haverá. E, se o Senhor não abreviasse aqueles dias, nenhuma carne se salvaria; mas, por causa dos eleitosque escolheu, abreviou aqueles dias. E então, se alguém vos disser: Eis aqui o Cristo; ou: Ei-lo ali; não acrediteis. Porque se levantarão falsos cristos, e falsos profetas, e farão sinais e prodígios, para enganarem, se for possível, até os escolhidos. Mas vós vede; eis que de antemão vos tenho dito tudo. Ora, naqueles dias, depois daquela aflição, o sol se escurecerá, e a lua não dará a sua luz. E as estrelas cairão do céu, e as forças que estão nos céus serão abaladas. E então verão vir o Filho do homem nas nuvens, com grande poder e glória. E ele enviará os seus anjos, e ajuntará os seus escolhidos, desde os quatro ventos, da extremidade da terra até a extremidade do céu. Aprendei, pois, a parábola da figueira: Quando já o seu ramo se torna tenro, e brota folhas, bem sabeis que já está próximo o verão. Assim também vós, quando virdes sucederem estas coisas, sabei que já está perto, às portas. Na verdade vos digo que não passará esta geração, sem que todas estas coisas aconteçam. Passará o céu e a terra, mas as minhas palavras não passarão. Mas daquele dia e hora ninguém sabe, nem os anjos que estão no céu, nem o Filho, senão o Pai. Olhai, vigiai e orai; porque não sabeis quando chegará o tempo. É como se um homem, partindo para fora da terra, deixasse a sua casa, e desse autoridade aos seus servos, e a cada um a sua obra, e mandasse ao porteiro que vigiasse. Vigiai, pois, porque não sabeis quando virá o senhor da casa; se à tarde, se à meia-noite, se ao cantar do galo, se pela manhã, Para que, vindo de improviso, não vos ache dormindo. E as coisas que vos digo, digo-as a todos: Vigiai.'
      },
      {
        label: 'Lc 21',
        passage: 'E, olhando ele, viu os ricos lançarem as suas ofertas na arca do tesouro; E viu também uma pobre viúva lançar ali duas pequenas moedas; E disse: Em verdade vos digo que lançou mais do que todos, esta pobre viúva; Porque todos aqueles deitaram para as ofertas de Deus do que lhes sobeja; mas esta, da sua pobreza, deitou todo o sustento que tinha. E, dizendo alguns a respeito do templo, que estava ornado de formosas pedras e dádivas, disse: Quanto a estas coisas que vedes, dias virão em que não se deixará pedra sobre pedra, que não seja derrubada. E perguntaram-lhe, dizendo: Mestre, quando serão, pois, estas coisas? E que sinal haverá quando isto estiver para acontecer? Disse então ele: Vede não vos enganem, porque virão muitos em meu nome, dizendo: Sou eu, e o tempo está próximo. Não vades, portanto, após eles. E, quando ouvirdes de guerras e sedições, não vos assusteis. Porque é necessário que isto aconteça primeiro, mas o fim não será logo. Então lhes disse: Levantar-se-á nação contra nação, e reino contra reino; E haverá em vários lugares grandes terremotos, e fomes e pestilências; haverá também coisas espantosas, e grandes sinais do céu. Mas antes de todas estas coisas lançarão mão de vós, e vos perseguirão, entregando-vos às sinagogas e às prisões, e conduzindo-vos à presença de reis e presidentes, por amor do meu nome. E vos acontecerá isto para testemunho. Proponde, pois, em vossos corações não premeditar como haveis de responder; Porque eu vos darei boca e sabedoria a que não poderão resistir nem contradizer todos quantos se vos opuserem. E até pelos pais, e irmãos, e parentes, e amigos sereis entregues; e matarão alguns de vós. E de todos sereis odiados por causa do meu nome. Mas não perecerá um único cabelo da vossa cabeça. Na vossa paciência possuí as vossas almas. Mas, quando virdes Jerusalém cercada de exércitos, sabei então que é chegada a sua desolação. Então, os que estiverem na Judéia, fujam para os montes; os que estiverem no meio da cidade, saiam; e os que nos campos não entrem nela. Porque dias de vingança são estes, para que se cumpram todas as coisas que estão escritas. Mas ai das grávidas, e das que criarem naqueles dias! porque haverá grande aperto na terra, e ira sobre este povo. E cairão ao fio da espada, e para todas as nações serão levados cativos; e Jerusalém será pisada pelos gentios, até que os tempos dos gentios se completem. E haverá sinais no sol e na lua e nas estrelas; e na terra angústia das nações, em perplexidade pelo bramido do mar e das ondas. Homens desmaiando de terror, na expectação das coisas que sobrevirão ao mundo; porquanto as virtudes do céu serão abaladas. E então verão vir o Filho do homem numa nuvem, com poder e grande glória. Ora, quando estas coisas começarem a acontecer, olhai para cima e levantai as vossas cabeças, porque a vossa redenção está próxima. E disse-lhes uma parábola: Olhai para a figueira, e para todas as árvores; Quando já têm rebentado, vós sabeis por vós mesmos, vendo-as, que perto está já o verão. Assim também vós, quando virdes acontecer estas coisas, sabei que o reino de Deus está perto. Em verdade vos digo que não passará esta geração até que tudo aconteça. Passará o céu e a terra, mas as minhas palavras não hão de passar. E olhai por vós, não aconteça que os vossos corações se carreguem de glutonaria, de embriaguez, e dos cuidados da vida, e venha sobre vós de improviso aquele dia. Porque virá como um laço sobre todos os que habitam na face de toda a terra. Vigiai, pois, em todo o tempo, orando, para que sejais havidos por dignos de evitar todas estas coisas que hão de acontecer, e de estar em pé diante do Filho do homem. E de dia ensinava no templo, e à noite, saindo, ficava no monte chamado das Oliveiras. E todo o povo ia ter com ele ao templo, de manhã cedo, para o ouvir.'
      },
      {
        label: 'Jo 14:1-3',
        passage: 'O homem, nascido da mulher, é de poucos dias e farto de inquietação. Sai como a flor, e murcha; foge também como a sombra, e não permanece. E sobre este tal abres os teus olhos, e a mim me fazes entrar no juízo contigo.'
      },
      {
        label: 'At 1:9-11',
        passage: 'E, quando dizia isto, vendo-o eles, foi elevado às alturas, e uma nuvem o recebeu, ocultando-o a seus olhos. E, estando com os olhos fitos no céu, enquanto ele subia, eis que junto deles se puseram dois homens vestidos de branco. Os quais lhes disseram: Homens galileus, por que estais olhando para o céu? Esse Jesus, que dentre vós foi recebido em cima no céu, há de vir assim como para o céu o vistes ir.'
      },
      {
        label: '1Co 15:51-54',
        passage: 'Eis aqui vos digo um mistério: Na verdade, nem todos dormiremos, mas todos seremos transformados; Num momento, num abrir e fechar de olhos, ante a última trombeta; porque a trombeta soará, e os mortos ressuscitarão incorruptíveis, e nós seremos transformados. Porque convém que isto que é corruptível se revista da incorruptibilidade, e que isto que é mortal se revista da imortalidade. E, quando isto que é corruptível se revestir da incorruptibilidade, e isto que é mortal se revestir da imortalidade, então cumprir-se-á a palavra que está escrita: Tragada foi a morte na vitória.'
      },
      {
        label: '1Ts 4:13-18',
        passage: 'Não quero, porém, irmãos, que sejais ignorantes acerca dos que já dormem, para que não vos entristeçais, como os demais, que não têm esperança. Porque, se cremos que Jesus morreu e ressuscitou, assim também aos que em Jesus dormem, Deus os tornará a trazer com ele. Dizemo-vos, pois, isto, pela palavra do Senhor: que nós, os que ficarmos vivos para a vinda do Senhor, não precederemos os que dormem. Porque o mesmo Senhor descerá do céu com alarido, e com voz de arcanjo, e com a trombeta de Deus; e os que morreram em Cristo ressuscitarão primeiro. Depois nós, os que ficarmos vivos, seremos arrebatados juntamente com eles nas nuvens, a encontrar o Senhor nos ares, e assim estaremos sempre com o Senhor. Portanto, consolai-vos uns aos outros com estas palavras.'
      },
      {
        label: '1Ts 5:1-6',
        passage: 'Mas, irmãos, acerca dos tempos e das estações, não necessitais de que se vos escreva; Porque vós mesmos sabeis muito bem que o dia do Senhor virá como o ladrão de noite; Pois que, quando disserem: Há paz e segurança, então lhes sobrevirá repentina destruição, como as dores de parto àquela que está grávida, e de modo nenhum escaparão. Mas vós, irmãos, já não estais em trevas, para que aquele dia vos surpreenda como um ladrão; Porque todos vós sois filhos da luz e filhos do dia; nós não somos da noite nem das trevas. Não durmamos, pois, como os demais, mas vigiemos, e sejamos sóbrios;'
      },
      {
        label: '2Ts 1:7-10',
        passage: 'E a vós, que sois atribulados, descanso conosco, quando se manifestar o Senhor Jesus desde o céu com os anjos do seu poder, Com labareda de fogo, tomando vingança dos que não conhecem a Deus e dos que não obedecem ao evangelho de nosso Senhor Jesus Cristo; Os quais, por castigo, padecerão eterna perdição, longe da face do Senhor e da glória do seu poder, Quando vier para ser glorificado nos seus santos, e para se fazer admirável naquele dia em todos os que crêem (porquanto o nosso testemunho foi crido entre vós).'
      },
      {
        label: '2Ts 2:8',
        passage: 'E então será revelado o iníquo, a quem o Senhor desfará pelo assopro da sua boca, e aniquilará pelo esplendor da sua vinda;'
      },
      {
        label: '2Tm 3:1-5',
        passage: 'Sabe, porém, isto: que nos últimos dias sobrevirão tempos trabalhosos. Porque haverá homens amantes de si mesmos, avarentos, presunçosos, soberbos, blasfemos, desobedientes a pais e mães, ingratos, profanos, Sem afeto natural, irreconciliáveis, caluniadores, incontinentes, cruéis, sem amor para com os bons, Traidores, obstinados, orgulhosos, mais amigos dos deleites do que amigos de Deus, Tendo aparência de piedade, mas negando a eficácia dela. Destes afasta-te.'
      },
      {
        label: 'Tt 2:13',
        passage: 'Aguardando a bem-aventurada esperança e o aparecimento da glória do grande Deus e nosso Senhor Jesus Cristo;'
      },
      {
        label: 'Hb 9:28',
        passage: 'Assim também Cristo, oferecendo-se uma vez para tirar os pecados de muitos, aparecerá segunda vez, sem pecado, aos que o esperam para salvação.'
      },
      {
        label: 'Ap 1:7',
        passage: 'Eis que vem com as nuvens, e todo o olho o verá, até os mesmos que o traspassaram; e todas as tribos da terra se lamentarão sobre ele. Sim. Amém.'
      },
      {
        label: 'Ap 14:14-20',
        passage: 'E olhei, e eis uma nuvem branca, e assentado sobre a nuvem um semelhante ao Filho do homem, que tinha sobre a sua cabeça uma coroa de ouro, e na sua mão uma foice aguda. E outro anjo saiu do templo, clamando com grande voz ao que estava assentado sobre a nuvem: Lança a tua foice, e sega; a hora de segar te é vinda, porque já a seara da terra está madura. E aquele que estava assentado sobre a nuvem meteu a sua foice à terra, e a terra foi segada. E saiu do templo, que está no céu, outro anjo, o qual também tinha uma foice aguda. E saiu do altar outro anjo, que tinha poder sobre o fogo, e clamou com grande voz ao que tinha a foice aguda, dizendo: Lança a tua foice aguda, e vindima os cachos da vinha da terra, porque já as suas uvas estão maduras. E o anjo lançou a sua foice à terra e vindimou as uvas da vinha da terra, e atirou-as no grande lagar da ira de Deus. E o lagar foi pisado fora da cidade, e saiu sangue do lagar até aos freios dos cavalos, pelo espaço de mil e seiscentos estádios.'
      },
      {
        label: 'Ap 19:11-21',
        passage: 'E vi o céu aberto, e eis um cavalo branco; e o que estava assentado sobre ele chama-se Fiel e Verdadeiro; e julga e peleja com justiça. E os seus olhos eram como chama de fogo; e sobre a sua cabeça havia muitos diademas; e tinha um nome escrito, que ninguém sabia senão ele mesmo. E estava vestido de veste tingida em sangue; e o nome pelo qual se chama é A Palavra de Deus. E seguiam-no os exércitos no céu em cavalos brancos, e vestidos de linho fino, branco e puro. E da sua boca saía uma aguda espada, para ferir com ela as nações; e ele as regerá com vara de ferro; e ele mesmo é o que pisa o lagar do vinho do furor e da ira do Deus Todo-Poderoso. E no manto e na sua coxa tem escrito este nome: Rei dos reis, e Senhor dos senhores. E vi um anjo que estava no sol, e clamou com grande voz, dizendo a todas as aves que voavam pelo meio do céu: Vinde, e ajuntai-vos à ceia do grande Deus; Para que comais a carne dos reis, e a carne dos tribunos, e a carne dos fortes, e a carne dos cavalos e dos que sobre eles se assentam; e a carne de todos os homens, livres e servos, pequenos e grandes. E vi a besta, e os reis da terra, e os seus exércitos reunidos, para fazerem guerra àquele que estava assentado sobre o cavalo, e ao seu exército. E a besta foi presa, e com ela o falso profeta, que diante dela fizera os sinais, com que enganou os que receberam o sinal da besta, e adoraram a sua imagem. Estes dois foram lançados vivos no lago de fogo que arde com enxofre. E os demais foram mortos com a espada que saía da boca do que estava assentado sobre o cavalo, e todas as aves se fartaram das suas carnes.'
      },
    ],
    tags: [
      'jesus',
      'vinda',
      'volta',
      '25',
    ],
    numbering: 25,
  },
  {
    title: 'Morte e Ressurreição',
    description: '',
    parameter: CreedEnum.DEATH_AND_RESURRECTION,
    texts: [
      'O salário do pecado é a morte. Mas Deus, o único que é imortal, concederá vida eterna a seus remidos. Até aquele dia, a morte é um estado inconsciente para todas as pessoas. Quando Cristo, que é a nossa vida, se manifestar, os justos ressuscitados e os justos vivos serão glorificados e arrebatados para o encontro de seu Senhor. A segunda ressurreição, a ressurreição dos ímpios, ocorrerá mil anos mais tarde.'
    ],
    youtubeIds: ['H2yN-iHTgwc'],
    biblical_passages: [
      {
        label: 'Jó 19:25-27',
        passage: 'Porque eu sei que o meu Redentor vive, e que por fim se levantará sobre a terra. E depois de consumida a minha pele, contudo ainda em minha carne verei a Deus, Vê-lo-ei, por mim mesmo, e os meus olhos, e não outros o contemplarão; e por isso os meus rins se consomem no meu interior.'
      },
      {
        label: 'Sl 146:3, 4',
        passage: 'Não confieis em príncipes, nem em filho de homem, em quem não há salvação. Sai-lhe o espírito, volta para a terra; naquele mesmo dia perecem os seus pensamentos.'
      },
      {
        label: 'Ec 9:5,6,10',
        passage: 'Porque os vivos sabem que hão de morrer, mas os mortos não sabem coisa nenhuma, nem tampouco terão eles recompensa, mas a sua memória fica entregue ao esquecimento. Também o seu amor, o seu ódio, e a sua inveja já pereceram, e já não têm parte alguma para sempre, em coisa alguma do que se faz debaixo do sol. Tudo quanto te vier à mão para fazer, faze-o conforme as tuas forças, porque na sepultura, para onde tu vais, não há obra nem projeto, nem conhecimento, nem sabedoria alguma.'
      },
      {
        label: 'Dn 12:2, 13',
        passage: 'E muitos dos que dormem no pó da terra ressuscitarão, uns para vida eterna, e outros para vergonha e desprezo eterno. Tu, porém, vai até ao fim; porque descansarás, e te levantarás na tua herança, no fim dos dias.'
      },
      {
        label: 'Is 25:8',
        passage: 'Aniquilará a morte para sempre, e assim enxugará o Senhor DEUS as lágrimas de todos os rostos, e tirará o opróbrio do seu povo de toda a terra; porque o SENHOR o disse.'
      },
      {
        label: 'Jo 5:28, 29',
        passage: 'Não vos maravilheis disto; porque vem a hora em que todos os que estão nos sepulcros ouvirão a sua voz. E os que fizeram o bem sairão para a ressurreição da vida; e os que fizeram o mal para a ressurreição da condenação.'
      },
      {
        label: 'Jo 11:11-14',
        passage: 'Porque ele conhece aos homens vãos, e vê o vício; e não o terá em consideração? Mas o homem vão é falto de entendimento; sim, o homem nasce como a cria do jumento montês. Se tu preparares o teu coração, e estenderes as tuas mãos para ele; Se há iniqüidade na tua mão, lança-a para longe de ti e não deixes habitar a injustiça nas tuas tendas.'
      },
      {
        label: 'Rm 6:23',
        passage: 'Porque o salário do pecado é a morte, mas o dom gratuito de Deus é a vida eterna, por Cristo Jesus nosso Senhor.'
      },
      {
        label: 'Rm 16',
        passage: 'Recomendo-vos, pois, Febe, nossa irmã, a qual serve na igreja que está em Cencréia, Para que a recebais no Senhor, como convém aos santos, e a ajudeis em qualquer coisa que de vós necessitar; porque tem hospedado a muitos, como também a mim mesmo. Saudai a Priscila e a Áqüila, meus cooperadores em Cristo Jesus, Os quais pela minha vida expuseram as suas cabeças; o que não só eu lhes agradeço, mas também todas as igrejas dos gentios. Saudai também a igreja que está em sua casa. Saudai a Epêneto, meu amado, que é as primícias da Acáia em Cristo. Saudai a Maria, que trabalhou muito por nós. Saudai a Andrônico e a Júnias, meus parentes e meus companheiros na prisão, os quais se distinguiram entre os apóstolos e que foram antes de mim em Cristo. Saudai a Amplias, meu amado no Senhor. Saudai a Urbano, nosso cooperador em Cristo, e a Estáquis, meu amado. Saudai a Apeles, aprovado em Cristo. Saudai aos da família de Aristóbulo. Saudai a Herodião, meu parente. Saudai aos da família de Narciso, os que estão no Senhor. Saudai a Trifena e a Trifosa, as quais trabalham no Senhor. Saudai à amada Pérside, a qual muito trabalhou no Senhor. Saudai a Rufo, eleito no Senhor, e a sua mãe e minha. Saudai a Asíncrito, a Flegonte, a Hermes, a Pátrobas, a Hermas, e aos irmãos que estão com eles. Saudai a Filólogo e a Júlia, a Nereu e a sua irmã, e a Olimpas, e a todos os santos que com eles estão. Saudai-vos uns aos outros com santo ósculo. As igrejas de Cristo vos saúdam. E rogo-vos, irmãos, que noteis os que promovem dissensões e escândalos contra a doutrina que aprendestes; desviai-vos deles. Porque os tais não servem a nosso Senhor Jesus Cristo, mas ao seu ventre; e com suaves palavras e lisonjas enganam os corações dos simples. Quanto à vossa obediência, é ela conhecida de todos. Comprazo-me, pois, em vós; e quero que sejais sábios no bem, mas simples no mal. E o Deus de paz esmagará em breve Satanás debaixo dos vossos pés. A graça de nosso Senhor Jesus Cristo seja convosco. Amém. Saúdam-vos Timóteo, meu cooperador, e Lúcio, Jasom e Sosípatro, meus parentes. Eu, Tércio, que esta carta escrevi, vos saúdo no Senhor. Saúda-vos Gaio, meu hospedeiro, e de toda a igreja. Saúda-vos Erasto, procurador da cidade, e também o irmão Quarto. A graça de nosso Senhor Jesus Cristo seja com todos vós. Amém. Ora, àquele que é poderoso para vos confirmar segundo o meu evangelho e a pregação de Jesus Cristo, conforme a revelação do mistério que desde tempos eternos esteve oculto, Mas que se manifestou agora, e se notificou pelas Escrituras dos profetas, segundo o mandamento do Deus eterno, a todas as nações para obediência da fé; Ao único Deus, sábio, seja dada glória por Jesus Cristo para todo o sempre. Amém.'
      },
      {
        label: '1Co 15:51-54',
        passage: 'Eis aqui vos digo um mistério: Na verdade, nem todos dormiremos, mas todos seremos transformados; Num momento, num abrir e fechar de olhos, ante a última trombeta; porque a trombeta soará, e os mortos ressuscitarão incorruptíveis, e nós seremos transformados. Porque convém que isto que é corruptível se revista da incorruptibilidade, e que isto que é mortal se revista da imortalidade. E, quando isto que é corruptível se revestir da incorruptibilidade, e isto que é mortal se revestir da imortalidade, então cumprir-se-á a palavra que está escrita: Tragada foi a morte na vitória.'
      },
      {
        label: 'Cl 3:4',
        passage: 'Quando Cristo, que é a nossa vida, se manifestar, então também vós vos manifestareis com ele em glória.'
      },
      {
        label: '1Ts 4:13-17',
        passage: 'Não quero, porém, irmãos, que sejais ignorantes acerca dos que já dormem, para que não vos entristeçais, como os demais, que não têm esperança. Porque, se cremos que Jesus morreu e ressuscitou, assim também aos que em Jesus dormem, Deus os tornará a trazer com ele. Dizemo-vos, pois, isto, pela palavra do Senhor: que nós, os que ficarmos vivos para a vinda do Senhor, não precederemos os que dormem. Porque o mesmo Senhor descerá do céu com alarido, e com voz de arcanjo, e com a trombeta de Deus; e os que morreram em Cristo ressuscitarão primeiro. Depois nós, os que ficarmos vivos, seremos arrebatados juntamente com eles nas nuvens, a encontrar o Senhor nos ares, e assim estaremos sempre com o Senhor.'
      },
      {
        label: '1Tm 6:15',
        passage: 'A qual a seu tempo mostrará o bem-aventurado, e único poderoso Senhor, Rei dos reis e Senhor dos senhores;'
      },
      {
        label: 'Ap 20:1-10',
        passage: 'E vi descer do céu um anjo, que tinha a chave do abismo, e uma grande cadeia na sua mão. Ele prendeu o dragão, a antiga serpente, que é o Diabo e Satanás, e amarrou-o por mil anos. E lançou-o no abismo, e ali o encerrou, e pôs selo sobre ele, para que não mais engane as nações, até que os mil anos se acabem. E depois importa que seja solto por um pouco de tempo. E vi tronos; e assentaram-se sobre eles, e foi-lhes dado o poder de julgar; e vi as almas daqueles que foram degolados pelo testemunho de Jesus, e pela palavra de Deus, e que não adoraram a besta, nem a sua imagem, e não receberam o sinal em suas testas nem em suas mãos; e viveram, e reinaram com Cristo durante mil anos. Mas os outros mortos não reviveram, até que os mil anos se acabaram. Esta é a primeira ressurreição. Bem-aventurado e santo aquele que tem parte na primeira ressurreição; sobre estes não tem poder a segunda morte; mas serão sacerdotes de Deus e de Cristo, e reinarão com ele mil anos. E, acabando-se os mil anos, Satanás será solto da sua prisão, E sairá a enganar as nações que estão sobre os quatro cantos da terra, Gogue e Magogue, cujo número é como a areia do mar, para as ajuntar em batalha. E subiram sobre a largura da terra, e cercaram o arraial dos santos e a cidade amada; e de Deus desceu fogo, do céu, e os devorou. E o diabo, que os enganava, foi lançado no lago de fogo e enxofre, onde estão a besta e o falso profeta; e de dia e de noite serão atormentados para todo o sempre.'
      },
    ],
    tags: [
      'morte',
      'pecado',
      'ressurreição',
      '26',
    ],
    numbering: 26,
  },
  {
    title: 'O Milênio e o Fim do Pecado',
    description: '',
    parameter: CreedEnum.MILLENNIUM_AND_THE_END_OF_SIN,
    texts: [
      'O milênio é o reinado de mil anos de Cristo com seus santos no Céu, entre a primeira e a segunda ressurreição. Durante esse tempo serão julgados os ímpios mortos. A Terra estará completamente desolada, sem seres humanos vivos, mas ocupada por Satanás e seus anjos. No fim desse período, Cristo com seus santos e a Cidade Santa descerão do Céu à Terra. Os ímpios mortos serão então ressuscitados e, com Satanás e seus anjos, cercarão a cidade; mas fogo de Deus os consumirá e purificará a terra. O universo ficará assim eternamente livre do pecado e dos pecadores.'
    ],
    youtubeIds: ['b4pwwz0hZfw'],
    biblical_passages: [
      {
        label: 'Jr 4:23-26',
        passage: 'Observei a terra, e eis que era sem forma e vazia; também os céus, e não tinham a sua luz. Observei os montes, e eis que estavam tremendo; e todos os outeiros estremeciam. Observei, e eis que não havia homem algum; e todas as aves do céu tinham fugido. Vi também que a terra fértil era um deserto; e todas as suas cidades estavam derrubadas diante do Senhor, diante do furor da sua ira.  Jeremias 4:23-26'
      },
      {
        label: 'Ez 28:18, 19',
        passage: 'Pela multidão das tuas iniqüidades, pela injustiça do teu comércio profanaste os teus santuários; eu, pois, fiz sair do meio de ti um fogo, que te consumiu e te tornei em cinza sobre a terra, aos olhos de todos os que te vêem. Todos os que te conhecem entre os povos estão espantados de ti; em grande espanto te tornaste, e nunca mais subsistirá.'
      },
      {
        label: 'Ml 4:1',
        passage: 'Porque eis que aquele dia vem ardendo como fornalha; todos os soberbos, e todos os que cometem impiedade, serão como a palha; e o dia que está para vir os abrasará, diz o SENHOR dos Exércitos, de sorte que lhes não deixará nem raiz nem ramo.'
      },
      {
        label: '1Co 6:2, 3',
        passage: 'Não sabeis vós que os santos hão de julgar o mundo? Ora, se o mundo deve ser julgado por vós, sois porventura indignos de julgar as coisas mínimas? Não sabeis vós que havemos de julgar os anjos? Quanto mais as coisas pertencentes a esta vida?'
      },
      {
        label: 'Ap 20 ',
        passage: 'E vi descer do céu um anjo, que tinha a chave do abismo, e uma grande cadeia na sua mão. Ele prendeu o dragão, a antiga serpente, que é o Diabo e Satanás, e amarrou-o por mil anos. E lançou-o no abismo, e ali o encerrou, e pôs selo sobre ele, para que não mais engane as nações, até que os mil anos se acabem. E depois importa que seja solto por um pouco de tempo. E vi tronos; e assentaram-se sobre eles, e foi-lhes dado o poder de julgar; e vi as almas daqueles que foram degolados pelo testemunho de Jesus, e pela palavra de Deus, e que não adoraram a besta, nem a sua imagem, e não receberam o sinal em suas testas nem em suas mãos; e viveram, e reinaram com Cristo durante mil anos. Mas os outros mortos não reviveram, até que os mil anos se acabaram. Esta é a primeira ressurreição. Bem-aventurado e santo aquele que tem parte na primeira ressurreição; sobre estes não tem poder a segunda morte; mas serão sacerdotes de Deus e de Cristo, e reinarão com ele mil anos. E, acabando-se os mil anos, Satanás será solto da sua prisão, E sairá a enganar as nações que estão sobre os quatro cantos da terra, Gogue e Magogue, cujo número é como a areia do mar, para as ajuntar em batalha. E subiram sobre a largura da terra, e cercaram o arraial dos santos e a cidade amada; e de Deus desceu fogo, do céu, e os devorou. E o diabo, que os enganava, foi lançado no lago de fogo e enxofre, onde estão a besta e o falso profeta; e de dia e de noite serão atormentados para todo o sempre. E vi um grande trono branco, e o que estava assentado sobre ele, de cuja presença fugiu a terra e o céu; e não se achou lugar para eles. E vi os mortos, grandes e pequenos, que estavam diante de Deus, e abriram-se os livros; e abriu-se outro livro, que é o da vida. E os mortos foram julgados pelas coisas que estavam escritas nos livros, segundo as suas obras. E deu o mar os mortos que nele havia; e a morte e o inferno deram os mortos que neles havia; e foram julgados cada um segundo as suas obras. E a morte e o inferno foram lançados no lago de fogo. Esta é a segunda morte. E aquele que não foi achado escrito no livro da vida foi lançado no lago de fogo.'
      },
      {
        label: 'Ap 21:1-5',
        passage: 'E vi um novo céu, e uma nova terra. Porque já o primeiro céu e a primeira terra passaram, e o mar já não existe. E eu, João, vi a santa cidade, a nova Jerusalém, que de Deus descia do céu, adereçada como uma esposa ataviada para o seu marido. E ouvi uma grande voz do céu, que dizia: Eis aqui o tabernáculo de Deus com os homens, pois com eles habitará, e eles serão o seu povo, e o mesmo Deus estará com eles, e será o seu Deus. E Deus limpará de seus olhos toda a lágrima; e não haverá mais morte, nem pranto, nem clamor, nem dor; porque já as primeiras coisas são passadas. E o que estava assentado sobre o trono disse: Eis que faço novas todas as coisas. E disse-me: Escreve; porque estas palavras são verdadeiras e fiéis.'
      },
    ],
    tags: [
      'milênio',
      'pecado',
      '27',
    ],
    numbering: 27,
  },
  {
    title: 'A nova Terra',
    description: '',
    parameter: CreedEnum.NEW_EARTH,
    texts: [
      'Na Nova Terra, em que habita justiça, Deus proverá um lar eterno para os remidos e um ambiente perfeito para vida, amor, alegria e aprendizado eternos, em sua presença. Aqui o próprio Deus habitará com seu povo, e o sofrimento e a morte deixarão de existir. O grande conflito estará terminado e não mais haverá pecado. Todas as coisas, animadas e inanimadas, declararão que Deus é amor; e Ele reinará para todo o sempre. Amém!'
    ],
    youtubeIds: ['Ih_Qm4qAe7c'],
    biblical_passages: [
      {
        label: 'Is 35',
        passage: 'O deserto e o lugar solitário se alegrarão disto; e o ermo exultará e florescerá como a rosa. Abundantemente florescerá, e também jubilará de alegria e cantará; a glória do Líbano se lhe deu, a excelência do Carmelo e Sarom; eles verão a glória do Senhor, o esplendor do nosso Deus. Fortalecei as mãos fracas, e firmai os joelhos trementes. Dizei aos turbados de coração: Sede fortes, não temais; eis que o vosso Deus virá com vingança, com recompensa de Deus; ele virá, e vos salvará. Então os olhos dos cegos serão abertos, e os ouvidos dos surdos se abrirão. Então os coxos saltarão como cervos, e a língua dos mudos cantará; porque águas arrebentarão no deserto e ribeiros no ermo. E a terra seca se tornará em lagos, e a terra sedenta em mananciais de águas; e nas habitações em que jaziam os chacais haverá erva com canas e juncos. E ali haverá uma estrada, um caminho, que se chamará o caminho santo; o imundo não passará por ele, mas será para aqueles; os caminhantes, até mesmo os loucos, não errarão. Ali não haverá leão, nem animal feroz subirá a ele, nem se achará nele; porém só os remidos andarão por ele. E os resgatados do Senhor voltarão; e virão a Sião com júbilo, e alegria eterna haverá sobre as suas cabeças; gozo e alegria alcançarão, e deles fugirá a tristeza e o gemido.'
      },
      {
        label: 'Is 65:17-25',
        passage: 'Porque, eis que eu crio novos céus e nova terra; e não haverá mais lembrança das coisas passadas, nem mais se recordarão. Mas vós folgareis e exultareis perpetuamente no que eu crio; porque eis que crio para Jerusalém uma alegria, e para o seu povo gozo. E exultarei em Jerusalém, e me alegrarei no meu povo; e nunca mais se ouvirá nela voz de choro nem voz de clamor. Não haverá mais nela criança de poucos dias, nem velho que não cumpra os seus dias; porque o menino morrerá de cem anos; porém o pecador de cem anos será amaldiçoado. E edificarão casas, e as habitarão; e plantarão vinhas, e comerão o seu fruto. Não edificarão para que outros habitem; não plantarão para que outros comam; porque os dias do meu povo serão como os dias da árvore, e os meus eleitos gozarão das obras das suas mãos. Não trabalharão debalde, nem terão filhos para a perturbação; porque são a posteridade bendita do Senhor, e os seus descendentes estarão com eles. E será que antes que clamem eu responderei; estando eles ainda falando, eu os ouvirei. O lobo e o cordeiro se apascentarão juntos, e o leão comerá palha como o boi; e pó será a comida da serpente. Não farão mal nem dano algum em todo o meu santo monte, diz o Senhor.'
      },
      {
        label: 'Mt 5:5',
        passage: 'Bem-aventurados os mansos, porque eles herdarão a terra;'
      },
      {
        label: '2 Pe 3:13',
        passage: 'Mas nós, segundo a sua promessa, aguardamos novos céus e nova terra, em que habita a justiça.'
      },
      {
        label: 'Ap 11:15',
        passage: 'E o sétimo anjo tocou a sua trombeta, e houve no céu grandes vozes, que diziam: Os reinos do mundo vieram a ser de nosso Senhor e do seu Cristo, e ele reinará para todo o sempre.'
      },
      {
        label: 'Ap 21:1-7',
        passage: 'E vi um novo céu, e uma nova terra. Porque já o primeiro céu e a primeira terra passaram, e o mar já não existe. E eu, João, vi a santa cidade, a nova Jerusalém, que de Deus descia do céu, adereçada como uma esposa ataviada para o seu marido. E ouvi uma grande voz do céu, que dizia: Eis aqui o tabernáculo de Deus com os homens, pois com eles habitará, e eles serão o seu povo, e o mesmo Deus estará com eles, e será o seu Deus. E Deus limpará de seus olhos toda a lágrima; e não haverá mais morte, nem pranto, nem clamor, nem dor; porque já as primeiras coisas são passadas. E o que estava assentado sobre o trono disse: Eis que faço novas todas as coisas. E disse-me: Escreve; porque estas palavras são verdadeiras e fiéis. E disse-me mais: Está cumprido. Eu sou o Alfa e o Ômega, o princípio e o fim. A quem quer que tiver sede, de graça lhe darei da fonte da água da vida. Quem vencer, herdará todas as coisas; e eu serei seu Deus, e ele será meu filho.'
      },
      {
        label: 'Ap 22:1-5',
        passage: 'E mostrou-me o rio puro da água da vida, claro como cristal, que procedia do trono de Deus e do Cordeiro. No meio da sua praça, e de um e de outro lado do rio, estava a árvore da vida, que produz doze frutos, dando seu fruto de mês em mês; e as folhas da árvore são para a saúde das nações. E ali nunca mais haverá maldição contra alguém; e nela estará o trono de Deus e do Cordeiro, e os seus servos o servirão. E verão o seu rosto, e nas suas testas estará o seu nome. E ali não haverá mais noite, e não necessitarão de lâmpada nem de luz do sol, porque o Senhor Deus os ilumina; e reinarão para todo o sempre.'
      },
    ],
    tags: [
      'nova',
      'terra',
      '28',
    ],
    numbering: 28,
  },
]
