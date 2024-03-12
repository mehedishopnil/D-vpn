import icon1 from '../../../assets/security.svg'
import icon2 from '../../../assets/loop.svg'
import icon3 from '../../../assets/connctivity.svg'

const MyVPN = () => {
  return (
    <div className="my-[150px]">
      <h1 className="text-3xl text-center lg:text-5xl  text-white">
        What Makes MyVPN a <br /> Good Choice
      </h1>

      <div className="flex justify-center mt-[50px] gap-5">
        <div className='space-y-5 w-[411px] p-8 rounded-lg bg-[#ffffff10] border border-[#ffffff23] '>
          <img className='w-[73px] h-[73px] p-2 rounded-lg bg-[#00000010] border border-[#ffffff23]' src={icon1} alt="MyVPN" />
          <h1 className='text-white text-2xl'>Stronger Data Protection</h1>
          <p className='w-[333px] text-white text-base font-light'>Lorem ipsum dolor sit amet consectetur. Sapien porttitor purus ut tincidunt egestas. Lacinia ac tortor.</p>
        </div>

        <div className='space-y-5 w-[411px] p-8 rounded-lg bg-[#ffffff10] border border-[#ffffff23] '>
          <img className='w-[73px] h-[73px] p-2 rounded-lg bg-[#00000010] border border-[#ffffff23]' src={icon2} alt="MyVPN" />
          <h1 className='text-white text-2xl'>Stronger Data Protection</h1>
          <p className='w-[333px] text-white text-base font-light'>Lorem ipsum dolor sit amet consectetur. Sapien porttitor purus ut tincidunt egestas. Lacinia ac tortor.</p>
        </div>

        <div className='space-y-5 w-[411px] p-8 rounded-lg bg-[#ffffff10] border border-[#ffffff23] '>
          <img className='w-[73px] h-[73px] p-2 rounded-lg bg-[#00000010] border border-[#ffffff23]' src={icon3} alt="MyVPN" />
          <h1 className='text-white text-2xl'>Stronger Data Protection</h1>
          <p className='w-[333px] text-white text-base font-light'>Lorem ipsum dolor sit amet consectetur. Sapien porttitor purus ut tincidunt egestas. Lacinia ac tortor.</p>
        </div>
      </div>
    </div>
  );
};

export default MyVPN;
