import './App.css'
import Header from './components/Header'
import Post from './components/Post'
import Reply from './components/Reply'

export default function App() {
  return (
    <main>
      <Header/>
      <h1 className='topico_principal'>Tópico Programação</h1>
      <Post
        nome="Joaquim"
        postTime="04/04/2023 - 21:32"
        descrição="Aprendi a codar react, agora farei vários projetos de sucesso, conseguirei um emprego"
        likes="8"
        comments="3"
        
        />
      <Reply
        nome="Jonas Gonçalves"
        postTime="04/04/2023 - 22:40"
        descrição="Maneiro mano!"
        likes="3"
        />
      <Reply
        nome="Gustavo Vicente"
        postTime="05/04/2023 - 08:40"
        descrição="Calma lá jovem!!"
        likes="1"
        />
      <Reply
        nome="Felipe Costa"
        postTime="06/04/2023 - 12:30"
        descrição="Um dia eu vou aprender também!"
        likes="6"
        />
    </main>
  )
}
