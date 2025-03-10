
import cancel_img from "../assets/arrow.png"
import dropTop from "../assets/Rectangle 6.png"
import dropBot from "../assets/Rectangle 7.png"
import del from "../assets/Trash Can.png"
import {ICard} from "../types"
import pizza from "../assets/pissa.png"
import combo from "../assets/combo.png"
import spain from "../assets/spanish.png"

const imageArr = [pizza, combo, spain]
const left = ({data, setData}:any) => {
    function inc (d:ICard){
        let elem = data.find((item:ICard) => item.id == d.id )
        elem.count++
        let newElem = {...d, elem}
        let newData = data.map((item:ICard) => item.id == d.id ? newElem : item)
        setData(newData);
    }

    function dec (d:ICard){
        let elem = data.find((item:ICard) => item.id == d.id  )
        elem.count > 0 ? elem.count-- : elem.count
        let newElem = {...d, elem}
        let newData = data.map((item:ICard) => item.id == d.id ? newElem : item)
        setData(newData);
    }
    function removeList(id:number){
        const newList = data.filter((list:any) => list.id !== id)
        setData(newList)   
    }
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
            {data.map((d:ICard, i:number) => {
                return  <div className="card py-[9px] px-[10px] flex items-center rounded-[15px]" key={i}>
                <img src={imageArr[i]}  className="w-[80px] rounded-[8px]" alt="img" />
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
                        {d.count}
                    </p>
                    <div>
                    <img onClick={() => {inc(d)}}
                    className="cursor-pointer" src={dropTop} alt="image" />
                    <img
                    onClick={() => {dec(d)}} 
                        className="mt-[8px] cursor-pointer" src={dropBot} alt="image" />
                    </div>
                </div>
                <div className="text-[14px] font-pop font-[500] text-colorsecond ml-[44px] w-[60px] text-right">
                    ${d.price}
                </div>  
                    <img className="w-[25px] ml-[38px] cursor-pointer" onClick={() => removeList(data[0].id)} src={del} alt="image" />
                </div>
            })}
        </div>
        </div>
    </>
    )
}

export default left
