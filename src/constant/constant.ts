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
]
