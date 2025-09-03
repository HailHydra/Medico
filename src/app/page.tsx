import Image from "next/image";

export default function Home() {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto flex flex-col">
          <div className="lg:w-4/6 mx-auto">
            <div className="rounded-lg h-64 overflow-hidden">
              <Image
                src="/image/6f2f3942f68c6d939798f70c1bfc2509.jpg"
                alt="Medical equipment"
                width={1200}
                height={500}
                className="object-cover object-center h-full w-full"
                priority
              />           
            </div>
            <div className="flex flex-col sm:flex-row mt-10">
              <div className="sm:w-1/3 text-center sm:pr-8 sm:py-8">
                <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-green-500 text-white">
                  <svg 
                    fill="none" 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    className="w-10 h-10" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                    <circle cx="12" cy="7" r="4"></circle>
                  </svg>
                </div>
                <div className="flex flex-col items-center text-center justify-center">
                  <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">Mr. Avinash Gupta</h2>
                  <div className="w-12 h-1 bg-green-500 rounded mt-2 mb-4"></div>
                  <p className="text-base">
                    Avinash Gupta founded Medico to connect medical manufacturers with healthcare providers. Under his leadership, Medico has become a trusted distributor for 200+ medical product lines, serving hospitals and clinics regionwide.
                  </p>
                </div>
              </div>
              <div className="sm:w-2/3 sm:pl-8 sm:py-8 sm:border-l border-gray-200 sm:border-t-0 border-t mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                <p className="leading-relaxed text-lg mb-4">
                  Medico is a trusted medical products distributor serving hospitals, clinics, and healthcare practices with essential medical equipment and supplies. We partner with leading manufacturers to provide over 200 product lines, from surgical instruments to diagnostic equipment, ensuring healthcare providers have reliable access to quality medical products that enhance patient care.
                </p>
                <a className="text-green-500 inline-flex items-center" href="/AboutUs">
                  Learn More
                  <svg 
                    fill="none" 
                    stroke="currentColor" 
                    strokeLinecap="round" 
                    strokeLinejoin="round" 
                    strokeWidth="2" 
                    className="w-4 h-4 ml-2" 
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}