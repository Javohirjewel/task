
import cancel_img from "../assets/arrow.png"
import dropTop from "../assets/Rectangle 6.png"
import dropBot from "../assets/Rectangle 7.png"
import del from "../assets/Trash Can.png"
import { useState } from "react"

const left = (props:any) => {
    const [count1, setCount1] = useState(1)
    const [count2, setCount2] = useState(1)
    const [count3, setCount3] = useState(1)

    // let chipping = 4
    // let sum  = 0 + chipping

    const data = props.data
    // sum += data[0].price * count1 
    // sum += data[1].price * count2 

    // console.log(sum);

    
    
  
    return (
    <>
        <div className="w-[708px] pl-[45px] pr-[55px]">
        <div className="flex items-center pb-[30px] border-b-[#d0cfcf] border-b-[1.5px] border-solid">
            <img className="w-[25px]" src={cancel_img} alt="image" />
            <p className="text-[#1e1e1e] font-[600] text-[18px] font-pop cursor-pointer ">
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
            {data.map((d:any, i:number) => {
                return  <div className="card py-[9px] px-[10px] flex items-center rounded-[15px]" key={i}>
                <img src={d.img}  className="w-[80px] rounded-[8px]" alt="img" />
                <div className="ml-[18px]">
                    <p className="font-pop font-[500] text-[18px] w-[162px] text-colorfirst">
                        {d.title}
                    </p>
                    <p className="font-nunito font-[500] text-[14px] text-colorfirst">
                        {d.info}
                    </p>
                </div>
                <div className="flex font-ralewy text-[22px] font-[600] text-colorsecond gap-2 h-max items-center ml-[102px]">
                    <p className="w-10">
                        {(i == 0) ? count1 : count2} 
                        
                    </p>
                    <div>
                    <img onClick={(e) => {
                    if(i == 0){
                        setCount1(count1 + 1)
                    }else if(i == 1){
                        setCount2(count2 + 1)
                    }else if(i == 2){
                        setCount3(count3 + 1) 
                    }
                    }}
                    className="cursor-pointer" src={dropTop} alt="image" />
                    <img
                    onClick={(e) => {
                        if(count1 >= 0 && count2 >= 0 && count3 > 0){
                            if(i == 0 && count1 > 0){
                                setCount1(count1 - 1)
                            }else if(i == 1 && count2 > 0){
                                setCount2(count2 - 1)
                            }else if(i == 2 && count3 >0){
                                setCount3(count3 - 1) 
                            }
                        }
                        }} className="mt-[8px] cursor-pointer" src={dropBot} alt="image" />
                    
                    </div>
                </div>
                <div className="text-[14px] font-pop font-[500] text-colorsecond ml-[44px] w-[60px] text-right">
                    ${d.price}
                </div>
              
                <img className="w-[25px] ml-[38px] cursor-pointer" src={del} alt="image" />
                </div>
                
                
            })}
        </div>
        </div>
    </>
    )
}

export default left
