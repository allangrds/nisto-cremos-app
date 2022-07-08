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
  youtubeId: string
  tags: string[],
}

export const creeds: Creed[] = [
  {
    title: 'As escrituras sagradas',
    description: 'xablau',
    parameter: CreedEnum.BIBLE,
    texts: [
      'As Escrituras Sagradas, o Antigo e o Novo Testamentos, são a Palavra de Deus escrita, dada por inspiração divina. Os autores inspirados falaram e escreveram ao serem movidos pelo Espírito Santo. Nesta Palavra, Deus transmitiu à humanidade o conhecimento necessário para a salvação. As Escrituras Sagradas são a revelação infalível, suprema e repleta de autoridade de sua vontade. Constituem o padrão de caráter, a prova da experiência, o revelador definitivo de doutrinas e o registro fidedigno dos atos de Deus na história.'
    ],
    youtubeId: '6kkc_ey__Gk',
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
    ],
  },
  {
    title: 'A trindade',
    description: 'xablau',
    parameter: CreedEnum.THE_TRINITY,
    texts: [
      'Há um só Deus: Pai, Filho e Espírito Santo, uma unidade de três pessoas coeternas. Deus é imortal, onipotente, onisciente, acima de tudo e sempre presente. Ele é infinito e está além da compreensão humana, mas é conhecido por meio de sua autorrevelação. Deus, que é amor, para sempre é digno de culto, adoração e serviço por parte de toda a criação.'
    ],
    youtubeId: 'KPqE4ho6pvA',
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
    ],
  },
  {
    title: 'Deus pai',
    description: 'xablau',
    parameter: CreedEnum.GOD,
    texts: [
      'Deus, o eterno Pai, é o criador, o originador, o mantenedor e o soberano de toda a criação. Ele é justo e santo, compassivo e clemente, tardio em irar-se e grande em constante amor e fidelidade. As qualidades e os poderes manifestos no Filho e no Espírito Santo também são os mesmos do Pai.'
    ],
    youtubeId: 'IqwkEwx0vno',
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
    ],
  },
  {
    title: 'Deus filho',
    description: 'xablau',
    parameter: CreedEnum.SON,
    texts: [
      'Deus, o Filho Eterno, encarnou-se como Jesus Cristo. Por meio dele foram criadas todas as coisas, é revelado o caráter de Deus, efetuada a salvação da humanidade e julgado o mundo. Sendo para sempre verdadeiramente Deus, Ele se tornou também verdadeiramente humano, Jesus, o Cristo. Foi concebido do Espírito Santo e nasceu da virgem Maria. Viveu e experimentou a tentação como ser humano, mas exemplificou perfeitamente a justiça e o amor de Deus. Por seus milagres manifestou o poder de Deus e atestou que era o Messias prometido por Deus. Sofreu e morreu voluntariamente na cruz por nossos pecados e em nosso lugar, foiressuscitado dentre os mortos e ascendeu ao Céu para ministrar no santuário celestial em nosso favor. Virá outra vez, em glória, para o livramento final de seu povo e a restauração de todas as coisas.'
    ],
    youtubeId: 'geNa4qzDsfo',
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
      'jesus',
      'salvador',
    ],
  },
  {
    title: 'O Espírito Santo',
    description: 'xablau',
    parameter: CreedEnum.HOLY_SPIRIT,
    texts: [
      'Deus, o Espírito Santo, desempenhou uma parte ativa com o Pai e o Filho na criação, encarnação e redenção. Ele é uma pessoa tanto quanto o Pai e o Filho. Inspirou os escritores das Escrituras. Encheu de poder a vida de Cristo. Atrai e convence os seres humanos; e os que se mostram sensíveis são renovados e transformados por Ele à imagem de Deus. Enviado pelo Pai e pelo Filho para estar sempre com seus filhos, Ele concede dons espirituais à igreja, a habilita a dar testemunho de Cristo e, em harmonia com as Escrituras, guia-a em toda a verdade.'
    ],
    youtubeId: 'YkKEpO_0g-o',
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
    ],
  },
]
