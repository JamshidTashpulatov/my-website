import Link from 'next/link'
import me from '../img/me.jpg'

import Twitter from '../img/twitter.svg'

export default function Header() {
  return (

    <header className="flex justify-between items-center py-10">
      <div className="flex items-center space-x-4">
        <a href="/" class="flex items-center no-underline">
          <img src={me} alt="Jamshidbek Tashpulatov" className="h-10 w-10 md:h-12 md:w-12 lg:h-20 lg:w-20 rounded-full" />
        </a>
        <div>
          <p className="block text-gray-900 no-underline font-bold text-xl lg:text-3xl font-extrabold leading-none lg:leading-tight">Jamshidbek Tashpulatov</p>
          <p className="text-base text-gray-500">Product Designer and Front-End Developer</p>
        </div>
      </div>
      <div className="text-base leading-5">
        <a
          href="https://twitter.com/heyjamshid"
          className="font-medium text-gray-500 hover:text-gray-700"
        >
         <img src={Twitter} />
        </a>
      </div>
    </header>
  )
}
