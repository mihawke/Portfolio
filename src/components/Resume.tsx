const Resume = () => {
  return (
    <main className="bg-[#1C1C24] flex flex-col lg:flex-row lg:gap-4 flex-1 items-center justify-center p-6">
      <div className="h-full md:w-[50%] md:h-[600px] overflow-y-auto">
        <img src="/resume_img.jpg" className="w-full" />
      </div>
      <a
        href="/Resume Final.pdf"
        download="Pratik Gawari Resume.pdf"
        className="w-fit px-4 py-2 bg-[#E94560] text-white text-sm md:text-md font-semibold rounded-md shadow-md hover:bg-[#D73752] transition duration-200 font-source_code_pro_bold"
      >Download Resume</a>
    </main>
  )
}

export default Resume