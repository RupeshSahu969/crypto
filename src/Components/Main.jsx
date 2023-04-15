import Cart from "./Cart";
import Cryptocur from "./crypto"
import module from "./Main.module.css"



export default function Main(){

    return (
        <div className={module.Main}>
            <Cryptocur/>
            <p>My Cart:</p>
            <Cart/>
        </div>
    )
}