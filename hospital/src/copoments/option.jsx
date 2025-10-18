import React from 'react'

 function Option() {
  return (
    <div
          key={service.id}
          className="border-b border-sky-100 pb-2 transition-all duration-300"
        >
          <div
            onClick={() => toggle(service.id)}
            className="flex items-center justify-between cursor-pointer"
          >
            <h3 className="text-sky-900 font-semibold">{service.title}</h3>

            <i
              className={`ri-arrow-down-line text-sky-800 transform transition-transform duration-300 ${
                openId === service.id ? "rotate-180" : "rotate-0"
              }`}
            ></i>
          </div>

          <div
            className={`overflow-hidden transition-all duration-300 ${
              openId === service.id ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
            }`}
          >
            <p className="text-gray-700">{service.desc}</p>
          </div>
        </div>
  )
}
export default Option