import React from "react";
import { FaRegSquareCheck } from "react-icons/fa6";
const Skills = () => {
return(
    <div id="skills">
        <section className="text-gray-600 body-font bg-gray-300">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h2 className="text-xs text-blue-500 tracking-widest font-medium title-font mb-1">
        SKILLS
      </h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
        My Skills
      </h1>
    </div>
    <div className="flex flex-wrap -m-4">
        {/* skills 1 start */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <FaRegSquareCheck />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
             MS OFFICE
            </h2>
          </div>
          <div className="flex-grow">
            <div className="relative h-1 w-full bg-gray-300 rounded 3-xl">
            <div className="absolute bg-blue-600 h-1 rounded-xl w-[100%]"></div>
            </div>
            <p className="font-bold text-blue-600 text-right ">100%</p>
          </div>
        </div>
      </div>
      {/* skills 2 start */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <FaRegSquareCheck />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
             ADOBE ILLUSTRATOR
            </h2>
          </div>
          <div className="flex-grow">
            <div className="relative h-1 w-full bg-gray-300 rounded 3-xl">
            <div className="absolute bg-blue-600 h-1 rounded-xl w-[85%]"></div>
            </div>
            <p className="font-bold text-blue-600 text-right ">85%</p>
          </div>
        </div>
      </div>

     {/* skills 3 start */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <FaRegSquareCheck />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
             HTML
            </h2>
          </div>
          <div className="flex-grow">
            <div className="relative h-1 w-full bg-gray-300 rounded 3-xl">
            <div className="absolute bg-blue-600 h-1 rounded-xl w-[100%]"></div>
            </div>
            <p className="font-bold text-blue-600 text-right ">100%</p>
          </div>
        </div>
      </div>

      {/* skills 4 start */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <FaRegSquareCheck />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
             CSS
            </h2>
          </div>
          <div className="flex-grow">
            <div className="relative h-1 w-full bg-gray-300 rounded 3-xl">
            <div className="absolute bg-blue-600 h-1 rounded-xl w-[90%]"></div>
            </div>
            <p className="font-bold text-blue-600 text-right ">90%</p>
          </div>
        </div>
      </div>

      {/* skills 5 start */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <FaRegSquareCheck />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
             TYPESCRIPT
            </h2>
          </div>
          <div className="flex-grow">
            <div className="relative h-1 w-full bg-gray-300 rounded 3-xl">
            <div className="absolute bg-blue-600 h-1 rounded-xl w-[70%]"></div>
            </div>
            <p className="font-bold text-blue-600 text-right ">70%</p>
          </div>
        </div>
      </div>

      {/* skills 5 start */}
      <div className="p-4 w-[100%] md:w-1/3">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-blue-500 text-white flex-shrink-0">
            <FaRegSquareCheck />
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium">
             NEXT.JS
            </h2>
          </div>
          <div className="flex-grow">
            <div className="relative h-1 w-full bg-gray-300 rounded 3-xl">
            <div className="absolute bg-blue-600 h-1 rounded-xl w-[50%]"></div>
            </div>
            <p className="font-bold text-blue-600 text-right ">50%</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

</div>
    )
}
export default Skills