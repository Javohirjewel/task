import hero from "../assets/hero.png"
import visa from "../assets/Visa.png"
import master from "../assets/master.png"
import rupay from "../assets/Rupay.png"
import icon from "../assets/Right.png"
import { ICard } from "../types/index"


const right = ({data}:any) => {
  let sum = 0
  function summ(){
    data.map((elem:ICard) => {
      sum = sum + elem.price * elem.count
    }) 
    
  }
  summ()

  return (
    <>
        <div className="bg-[#565abb] w-[388px] rounded-[20px] p-[19px] text-colorwhite">
          <div className="flex justify-between">
            <p className="font-pop text-[22px] text-colorwhite font-[600] mt-[15px]">
              Card Details
            </p>
            <img src={hero} alt="image" />

          </div>
          <p className="[15px] font-nunito text-[16px] font-[500]">
            Card type
          </p>
          <div className="mt-[14px] flex gap-[16px]">
            <img src={visa} alt="image" />
            <img src={master} alt="image" />
            <img src={rupay} alt="image" />
            <div className="font-[700] text-[14px] font-open w-[75px] h-[55px] bg-[#6268c6] rounded-[5px] flex items-center justify-center cursor-pointer">
              See all
            </div>
          </div>
          <form className="mt-[27px] font-pop font-[500] text-[14px]">
            <div>
              <label  htmlFor="name">
                Name on card
              </label><br />
              <input className="bg-[#6268c6] py-[11px] px-[18px] w-full rounded-[6px] outline-none mt-[5px] capitalize text-[12px] text-[#c4c4c4]" placeholder="Name" id="name" type="text" />
            </div>
            <div className="mt-[14px]">
              <label className="text-[14px] font-[500]"    htmlFor="number">
                Card Number
              </label><br />
              <input className="bg-[#6268c6] py-[11px] px-[18px] w-full rounded-[6px] outline-none mt-[5px] text-[12px] text-[#c4c4c4]" placeholder="1111 2222 3333 4444" id="number" type="number" />
            </div>
            <div className="mt-[14px] flex gap-[8px] pb-[22px] border-b-[1px] border-b-[#5f65c3]">
              <div>
                <label className="text-[14px] font-[500]"  htmlFor="mm">
                  Expiration date
                </label><br />
                <input className="bg-[#6268c6] py-[11px] px-[18px] w-[171px] rounded-[6px] outline-none mt-[5px] text-[12px] text-[#c4c4c4]" placeholder="mm/yy" id="mm" type="number" />
              </div>
              <div>
                <label className="text-[14px] font-[500]"  htmlFor="cvv">
                    CVV
                </label><br />
                <input className="bg-[#6268c6] py-[11px] px-[18px] w-[171px] rounded-[6px] outline-none mt-[5px] text-[12px] text-[#c4c4c4]" placeholder="123" id="cvv" type="number" />
              </div>
            </div>

            <div>
              <div className="flex justify-between mt-[14.54px] text-[14px] font-[500]">
              <p>
                Subtotal
              </p>
              <p>
                ${sum}
              </p>
            </div>
            <div className="flex justify-between mt-[14.54px] text-[14px] font-[500]">
              <p>
                Shipping
              </p>
              <p>
                $4
              </p>
            </div>
            <div className="flex justify-between mt-[14.54px] text-[14px] font-[500]">
              <p>
                Total (Tax incl.)
              </p>
              <p>
                ${sum + 4}
              </p>
            </div>
            
              
            </div>
            <div className="bg-[#4de1c1] w-full rounded-[12px] py-[18px] flex justify-between px-[24px] text-[16px] items-center mt-[26px]">
              <p>
                ${sum + 4}
              </p>
              <p className="flex items-center gap-[5px]">
                Checkout  
                <img src={icon} alt="image" />
              </p>
            </div>
          </form>
        </div>
    </>
  )
}

export default right