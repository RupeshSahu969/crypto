import module from "./Cart.module.css"

export default function Cart(){

    const Cartitem = JSON.parse(localStorage.getItem("cart")) || []

     var total = Cartitem.reduce(function(sum,num){
              return sum + Number(num.qtydata*num.price)
     },0)

     console.log(total)

    return (
        <div className={module.cart1}>
            <table >
            {
               Cartitem &&  Cartitem.map((item,index) => < >
               <tr >
                   <td className={module.td1}>{index+1}.</td>
                   <td>{item.name}</td>
                    
                    <td>{item.qtydata}</td>
                    <td>${item.price*item.qtydata}</td>
                </tr>
               </>)
            }
            </table>
            <h4>Grand Total: ${total}</h4>
        </div>
    )
}