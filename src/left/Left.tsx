import cancel_img from "../assets/arrow.png"
import pizza from "../assets/pissa.png"
import combo from "../assets/combo.png"
import spanish from "../assets/spanish.png"
import dropTop from "../assets/Rectangle 6.png"
import dropBot from "../assets/Rectangle 7.png"
import del from "../assets/Trash Can.png"

const left = () => {
  return (
   <>
    <div className="w-[708px] pl-[45px] pr-[55px]">
      <div className="flex items-center pb-[30px] border-b-[#d0cfcf] border-b-[1.5px] border-solid">
          <img className="w-[25px]" src={cancel_img} alt="image" />
          <p className="text-[#1e1e1e] font-[600] text-[18px] font-pop ">
              Shopping Continue
          </p>
      </div>
      <p className="font-pop font-[500] text-[18px] text-colorfirst mt-[24px]">
        Shopping cart
      </p>
      <p className="font-nunito font-[500] text-[14px] text-colorfirst">
        You have 3 item in your cart
      </p>
      <div className="mt-[29px] flex flex-col gap-[24px]">
        <div className="card py-[9px] px-[10px] flex items-center rounded-[15px]">
          <img className="w-[80px] rounded-[8px]" src={pizza} alt="img" />
          <div className="ml-[18px]">
            <p className="font-pop font-[500] text-[18px] text-colorfirst">
              Italy Pizza
            </p>
            <p className="font-nunito font-[500] text-[14px] text-colorfirst">
              Extra cheese and toping
            </p>
          </div>
          <div className="flex font-ralewy text-[22px] font-[600] text-colorsecond gap-2 h-max items-center ml-[102px]">
            <p>
              1
            </p>
            <div>
              <img className="cursor-pointer" src={dropTop} alt="image" />
              <img className="mt-[8px] cursor-pointer" src={dropBot} alt="image" />
              
            </div>
          </div>
          <div className="text-[14px] font-pop font-[500] text-colorsecond ml-[44px] w-[60px] text-right">
            $681
          </div>
          <img className="w-[25px] ml-[38px] cursor-pointer" src={del} alt="image" />
        </div>
        <div className="card py-[9px] px-[10px] flex items-center rounded-[15px]">
          <img className="w-[80px] rounded-[8px]" src={combo} alt="img" />
          <div className="ml-[18px]">
            <p className="font-pop font-[500] text-[18px] text-colorfirst">
              Combo Plate
            </p>
            <p className="font-nunito font-[500] text-[14px] text-colorfirst">
              Extra cheese and toping
            </p>
          </div>
          <div className="flex font-ralewy text-[22px] font-[600] text-colorsecond gap-2 h-max items-center ml-[102px] select-none">
            <p onClick={(e) => console.dir(e.target.textContent)}>
              25
            </p>
            <div>
              <img className="cursor-pointer" src={dropTop} alt="image" />
              <img className="mt-[8px] cursor-pointer" src={dropBot} alt="image" />
              
            </div>
          </div>
          <div className="text-[14px] font-pop font-[500] text-colorsecond ml-[44px] w-[60px] text-right">
            $855
          </div>
          <img className="w-[25px] ml-[38px] cursor-pointer" src={del} alt="image" />
        </div>
        <div className="card py-[9px] px-[10px] flex items-center rounded-[15px]">
          <img className="w-[80px] rounded-[8px]" src={spanish} alt="img" />
          <div className="ml-[18px]">
            <p className="font-pop font-[500] text-[18px] text-colorfirst">
              Spanish Rice
            </p>
            <p className="font-nunito font-[500] text-[14px] text-colorfirst">
              Extra cheese and toping
            </p>
          </div>
          <div className="flex font-ralewy text-[22px] font-[600] text-colorsecond gap-2 h-max items-center ml-[102px]">
            <p>
              1
            </p>
            <div>
              <img className="cursor-pointer" src={dropTop} alt="image" />
              <img className="mt-[8px] cursor-pointer" src={dropBot} alt="image" />
              
            </div>
          </div>
          <div className="text-[14px] font-pop font-[500] text-colorsecond ml-[44px] w-[60px] text-right">
            $761
          </div>
          <img className="w-[25px] ml-[38px] cursor-pointer" src={del} alt="image" />
        </div>
      </div>
    </div>
   </>
  )
}

export default left