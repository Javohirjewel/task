import hero from "../assets/hero.png"
import visa from "../assets/Visa.png"
import master from "../assets/master.png"
import rupay from "../assets/Rupay.png"

const right = () => {
  return (
    <>
        <div className="bg-[#565abb] w-[388px] rounded-[20px] p-[19px] text-colorwhite">
          <div className="flex justify-between">
            <p className="font-pop text-[22px] text-colorwhite font-[600] mt-[8px]">
              Card Details
            </p>
            <img src={hero} alt="image" />

          </div>
          <p className="[15px] font-nunito text-[16px] font-[500]">
            Card type
          </p>
          <div className="cards flex gap-[16px]">
            <img src={visa} alt="image" />
            <img src={master} alt="image" />
            <img src={rupay} alt="image" />

          </div>
        </div>
    </>
  )
}

export default right