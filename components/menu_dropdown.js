import { Menu, Transition } from '@headlessui/react'
import { Fragment, useEffect, useState } from 'react'
import { FiMenu } from 'react-icons/fi';
import { useRouter } from 'next/router'

export default function MenuDropdown() {

  const [isCurrentRoute, setRoute] = useState("/");
  const { asPath } = useRouter();

  useEffect(() => {
    if(asPath !== null){
      setRoute(asPath);
    } 
  });

  console.log(isCurrentRoute);

  return (
    <div className="text-right flex">
      <Menu as="div" className="relative inline-block text-left">
        <div>
          <Menu.Button className="">
            <FiMenu size={24}/>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute -left-2 w-64 mt-2 origin-top-left bg-primary divide-y divide-gray-100 rounded-sm shadow-md ring-0 ring-gray-200 focus:outline-none">
            <div className="px-1 py-1">
              <Menu.Item className="px-4 py-4">
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    <p className={isCurrentRoute === '/' ? `text-md font-semibold font-body` : `text-md font-body`}>Home</p>
                  </button>
                )}
              </Menu.Item>
              <br/>
              <Menu.Item className="px-4 py-4">
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    <p className={isCurrentRoute === '/collections' ? `text-md font-semibold font-body` : `text-md font-body`}>Collections</p>
                  </button>
                )}
              </Menu.Item>
              <br/>
              <Menu.Item className="px-4 py-4">
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-violet-500 text-white' : 'text-gray-900'
                    } group flex rounded-md items-center w-full px-2 py-2 text-sm`}
                  >
                    <p className={isCurrentRoute === '/support'  ? `text-md font-semibold font-body` : `text-md font-body`}>Support us</p>
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  )
}