const Resume = () => {
  return (
    <main className="bg-[#1C1C24] flex flex-col lg:flex-row lg:gap-4 flex-1 items-center p-6 overflow-scroll">
      <object
        data="/Pratik Resume Final.pdf" // Adjust this path based on your project structure
        type="application/pdf"
        width="80%"
        height="100%"
      >
        <p>
          No resume available!
        </p>
      </object>
      <a
        href="/Pratik Resume Final.pdf"
        download="Pratik Gawari Resume.pdf" // Filename to be downloaded
        className="w-fit px-4 py-2 bg-[#E94560] text-white text-sm md:text-md font-semibold rounded-md shadow-md hover:bg-[#D73752] transition duration-200 font-source_code_pro_bold"
      >Download Resume</a>
    </main>
  )
}

export default Resume