import React from 'react'

 function Option({id,title,desc,openId,toggle}) {
  return (
    <div
          key={id}
          className="border-b border-sky-200 px-3 pb-2 transition-all duration-300"
        >
          <div
            onClick={() => toggle(id)}
            className="flex items-center justify-between cursor-pointer"
          >
            <h3 className="text-sky-900 text-lg font-semibold">{title}</h3>

            <i
              className={`ri-arrow-down-line text-sky-800 transform transition-transform duration-300 ${
                openId === id ? "rotate-180" : "rotate-0"
              }`}
            ></i>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              openId === id ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
          >
            <p className="">{desc}</p>
          </div>
        </div>
  )
}
export default Option