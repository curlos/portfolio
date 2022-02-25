/* This example requires Tailwind CSS v2.0+ */
import React, { Fragment, useEffect, useRef, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { getProjects } from '../utils/data'

interface Props {
  openProject: string,
  setOpenProject: any
}

export const ProjectModal = ({ openProject, setOpenProject }: Props) => {
  const projects = getProjects()
  const [isOpen, setIsOpen] = useState(true)
  const project = projects[0]



  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="fixed z-50 inset-0 overflow-y-auto" onClose={(val: boolean) => {
        setIsOpen(val)
      }}>
        <div className={`flex items-center justify-center min-h-screen p-2 lg:pt-4 lg:px-4 lg:pb-20 text-center sm:p-0`}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span className="inline-block align-middle h-screen lg:h-full" aria-hidden="true">
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            enterTo="opacity-100 translate-y-0 sm:scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 translate-y-0 sm:scale-100"
            leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
          >
            <div className="inline-block bg-gray-700 dark:bg-black rounded-2xl text-left overflow-hidden shadow-xl transform transition-all my-8 align-top w-[90vw] lg:w-[75vw] xl:w-[50vw] p-4">
              <div className="bg-gray-700 text-white dark:bg-black p-3">
                <img src={project.screenshots[0]} alt="Sneaker Palace Screenshot" className="rounded-t-xl mb-2" />
                <div className="text-xl font-bold">{project.name}</div>
                <div>{project.description}</div>
              </div>


            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  )
}