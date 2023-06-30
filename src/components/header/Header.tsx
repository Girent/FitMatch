export const Header = () => {
  return (
    <header className="2xl:h-32 h-24 bg-[#FFF] grid grid-cols-4 gap-4 items-center">
      <div className="text-[#6D40FF] font-roboto font-bold 2xl:text-[64px] text-5xl ml-16">
        FitMatch
      </div>
      <div className="2xl:text-[32px] text-2xl ml-20 relative 2xl:w-[58px] w-[45px]">
        <span className="hover:text-[#6D40FF] relative mt-12">Main</span>
        <span className="inset-0 flex items-center">
          <span className="w-full 2xl:border-b-4 border-b-2 border-[#6D40FF] ml-2"></span>
        </span>
      </div>
      <div className="hover:text-[#6D40FF] font-roboto 2xl:text-[32px] text-2xl mr-auto">
        Functionality
      </div>
      <button className="text-[#FFF] 2xl:text-[32px] text-2xl bg-[#5E4FFF] 2xl:w-64 w-48 2xl:h-16 h-12 2xl:rounded-3xl rounded-2xl">
        Get App
      </button>
    </header>
  )
}
