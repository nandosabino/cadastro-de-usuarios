import UserImage from "../../assets/users.png";
import { Background } from "./styles";

function TopBackground(){

    return(
        <Background>
        <img src={UserImage} alt="imagem-usuários" />
      </Background>
    )
}

export default TopBackground