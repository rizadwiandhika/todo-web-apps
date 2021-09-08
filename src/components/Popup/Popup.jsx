import React, { Fragment } from 'react'
import { Dialog, Transition } from '@headlessui/react'

export default function Popup({ isOpen, togglePopup }) {
  return (
    <Transition show={isOpen} as={Fragment}>
      <Dialog onClose={() => togglePopup(false)}>
        <div className="fixed inset-0 flex items-center justify-center min-h-screen">
          <Dialog.Overlay className="fixed inset-0 bg-black opacity-30" />

          <Transition.Child
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-out duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="relative bg-white rounded max-w-sm mx-auto p-12">
              <Dialog.Title className="font-bold text-lg">
                Activity cannot be empty
              </Dialog.Title>

              <button
                className="block w-24 mt-8 mx-auto box-border border border-gray-300 p-2 rounded-3xl text-sm hover:bg-gray-100"
                onClick={() => togglePopup(false)}
              >
                Close
              </button>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}

/* 

*/
