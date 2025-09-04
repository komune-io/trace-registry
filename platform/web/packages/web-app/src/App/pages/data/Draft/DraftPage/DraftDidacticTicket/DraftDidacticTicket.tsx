import { DidacticTicket } from 'components'
import img from "./didactiv.svg"

const content = `
#### 💬 Vous avez sûrement des choses à raconter.

Rendez-vous dans l’onglet **Contenu de la page** pour présenter vos actions, vos projets ou votre raison d’être.

**👀 Une fiche bien remplie, c’est une organisation qui se démarque.**
`

export const DraftDidacticTicket = () => {
  return (
    <DidacticTicket 
      content={content}
      img={img}
    />
  )
}
