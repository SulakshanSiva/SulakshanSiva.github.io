import React from 'react'

const Navbar = () => {

  const navItems = [
    {
        link: "#",
        name: "About"
    },
    {
      link: "#",
      name: "Career"
    },
    {
      link: "#",
      name: "Projects"
    },
  ];

  const navList = navItems.map((item) =>
    <li className=''>
      <a href={item.link} className='hover:underline hover:decoration-orange-400'>{item.name}</a>
    </li>
  );

  return (
    <div>
      <nav className='bg-white text-black shadow-lg' >

        <div className='flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4'>

          <span>
            <a href="#" className='text-2xl text-orange-400'>Sulakshan Sivakumaran</a>
          </span>
        
          <div className='hidden w-full md:block md:w-auto'>
            <ul className='flex space-x-10 text-m'>
              {navList}
            </ul>
          </div>

        </div>

      </nav>
    </div>
  )
}

export default Navbar;