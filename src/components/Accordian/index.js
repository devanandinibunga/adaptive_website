import React from 'react';
import "./Accordian.css";

import { BsFillArrowDownCircleFill, BsFillArrowUpCircleFill } from 'react-icons/bs'

function Accordian ({index, activeIndex, setActiveIndex }) {
    const toggle=(index)=>{
 
        if(activeIndex===index){
          return setActiveIndex(null)
        }
       setActiveIndex(index)
    
      }

  return (
    <>
        <div onClick={()=> toggle()} className='accordian-container justify-between rounded bg-red-400'>
            <div className='flex'>
                <div className='text-black accordian-heading'>About Us</div>
            </div>
            <div className="accordian-icons flex items-center justify-center">
                {
                (activeIndex === index) 
                ? <BsFillArrowUpCircleFill className='w-8 h-8 accordian-icon' />
                : <BsFillArrowDownCircleFill className='w-8 h-8 accordian-icon' />
                }
            </div>
        </div>

        {(activeIndex === index) && (
            <div className="shadow-3xl rounded-2xl shadow-cyan-500/50 p-4 mb-6">
                <hr className='line'/>
              <p className='accordian-para'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut faucibus mi est, vel mattis enim malesuada at. Suspendisse potenti. Mauris eu leo nulla. Quisque eget dolor accumsan, blandit orci sit amet, pellentesque purus. Mauris a orci ante. Duis dictum aliquam commodo. Maecenas commodo dolor lorem.</p>
            </div>
        )}
    </>
  );
};

export default Accordian;