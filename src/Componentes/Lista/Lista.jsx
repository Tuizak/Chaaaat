import ChatLista from "./chatLista/ChatLista"
import "./lista.css"
import Userinfo from "./userInfo/Userinfo"

const Lista = () => {
  return (
    <div className="lista">
      <Userinfo/>
      <ChatLista/>
    </div>
  )
}

export default Lista
