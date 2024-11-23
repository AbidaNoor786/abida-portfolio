import React from "react";
const Contact = () => {
    return (
        <div id="Contact">
           <section className="text-blue-700 body-font relative bg-gray-300">
            <div className="container px-5 py-24 mx-auto flex sm:flex-nowrap flex-wrap ">
                <div className="lg:w-2/3 md:w-1/2 bg-slate-500 rounded-lg overflow-hidden
                sm:mr-10 p-10 flex items-end justify-start relative">
                    <iframe
                    width="100%"
                    height="100%"
                    className="absolute inset-0"
                    frameBorder={0}
                    title="map" 
                    marginHeight={0}
                    marginWidth={0}
                    scrolling="no"
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3615.9981700571193!2d67
                    .06697943624025!3d25.00017813975158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!
                    1s0x3eb3410013bc95bd%3A0xbd8bdbaa62fd1795!2sKala%20School%20Bus%20Stop!5e0!3m2!1sen!
                    2s!4v1731240335408!5m2!1sen!2s" frame-border="0"
                    style={{ filter : " contrast(1.2) opacity(0.4)"}}/>

                    {/* map k ander wala div */}

                    <div className="bg-white relative flex flex-wrap py-6 rounded shadow-md">
                        <div className="lg:w-1/2 px-6">
                        <h2 className="tital-font font-semibold text-black tracking-widest text-xs ">
                            ADDRESS
                        </h2>
                        <p className="mt-1">
                            Kala School 5/D New Karachi
                        </p>
                        </div>
                        <div className="lg:w-1/2 px-6 mt-4 lg:mt-0">
                        <h2 className="tital-font font-semibold text-black tracking-widest text-xs">
                            EMAIL
                        </h2>
                        <a className="text-blue-700 leading-relaxed">
                            abidajunaid87@gmail.com
                        </a>
                        <h2 className="tital-font font-semibold text-black tracking-widest text-xs mt-4">
                            PHONE
                        </h2>
                        <p className="leading-relaxed">03132644990</p>
                        </div>       
                    </div>
                </div>
                            {/* right side div information */}

                        <div className="lg:w-1/3 md:w-1/2 bg-gray-300 flex flex-col md:ml-auto w-full
                        md:py-8 mt-8 md:mt-0">
                            <h2 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-slate-900">
                                Contact
                            </h2>
                            <p className="leading-relaxed mb-5 text-blue-700">Feel free to contact me</p>
                            <div className="relative mb-4 ">
                                <label htmlFor="name" className="leading-7 text-sm text-black">Name</label>
                                <input
                                 type="text"
                                 id="name"
                                 name="name"
                                 className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 
                                 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3
                                 leading-8 transition-colors duration-200 ease-in-out"
                                 />
                            </div>
                            <div className="relative mb-4 ">
                                <label 
                                htmlFor="email"
                                className="leading-7 text-sm text-black">
                                    Email
                                </label>
                                <input type="email"
                                id="email"
                                name="email"
                                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 
                                focus:ring-2 focus:ring-blue-200 text-base outline-none text-black py-1 px-3
                                leading-8 transition-colors duration-200 ease-in-out"/>  
                            </div>
                            <div className="relative mb-4 ">
                                <label 
                                htmlFor="email"
                                className="leading-7 text-sm text-black">
                                    Message
                                </label>
                                <textarea name="message" id="message"
                                
                                className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 
                                focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3
                                leading-8 transition-colors duration-200 ease-in-out" defaultValue={""}/>
                            </div>
                            <button className="text-white bg-blue-500 borde-0 py-2 px-6
                            focus:outline-none hover:bg-blue-600 rounded text-lg">Send Message</button>

                        </div>
            </div>
           </section>

        </div>
    )
}
export default Contact

