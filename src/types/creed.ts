export type BiblicalPassages = {
  label: string
  passage: string
}

export type Creed = {
  name: string
  text: string
  biblical_passages: BiblicalPassages[]
  youtubeIds: string[]
  tags: string[]
}

export type Creeds = Creed[]
