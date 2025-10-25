export default function Hero({img,title}) {

    return(
        <section className="relative h-[40vh] w-full flex flex-col items-center justify-center bg-sky-200 p-3">
                                   <div className="absolute z-[-1] w-full h-full hidden">
                                         <img className="" src={img} alt="" />
                                   </div>
                                   <div className=" text-sky-900 px-3 w-full h-fit">
                                         <h1 className="text-4xl font-bold mb-4">
                                              {title}
                                         </h1>
                                   </div>
        
        </section>
    )
}