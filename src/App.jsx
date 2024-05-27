import Chat from "./Componentes/Chat/Chat"
import Detail from "./Componentes/Detail/Detail"
import Lista from "./Componentes/Lista/Lista"
import Iniciar from "./Componentes/Iniciar/Iniciar"
import Notificacion from "./Componentes/Notificacion/Notificacion"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./Componentes/lib/firebase"
import { useUserStore } from "./Componentes/lib/userStore"
import { useChatStore } from "./Componentes/lib/chatStore"
const App = () => {

  const {currentUser, isLoading, fetchUserInfo } = useUserStore()
  const { chatId } = useChatStore()
  

  useEffect(() => {
    const unSub = onAuthStateChanged(auth, user => {
      fetchUserInfo(user?.uid)
    })

    return () => {
      unSub()
    }
  }, [fetchUserInfo])

  if (isLoading) return <div className="loading">Loading...</div>

  return (
    <div className='container'>
      {
        currentUser ? (
          <>
          <Lista />
          {chatId && <Chat />}
          {chatId && <Detail />}
          </>
        ): (
        <Iniciar />
      )
      }
      <Notificacion />
    </div>
  )
}

export default App