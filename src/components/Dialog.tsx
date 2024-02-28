'use client';

import { useSearchParams } from 'next/navigation';
import { useRef, useEffect, ReactNode } from 'react';

type Props = {
  title: string;
  onClose: () => void;
  onOk: () => void;
  children: ReactNode;
};

const Dialog = ({ title, onClose, onOk, children }: Props) => {
  const searchParams = useSearchParams();
  const dialogRef = useRef<null | HTMLDialogElement>(null);
  const showDialog = searchParams.get('showDialog');

  useEffect(() => {
    if (showDialog === 'y') {
      //   dialogRef.current?.show(); //for dialog box
      dialogRef.current?.showModal(); //for modals
    } else {
      dialogRef.current?.close();
    }
  }, [showDialog]);

  const closeDialog = () => {
    dialogRef.current?.close();
    onClose();
  };

  const clickOk = () => {
    onOk();
    closeDialog();
  };

  const dialog: JSX.Element | null =
    showDialog === 'y' ? (
      <dialog
        ref={dialogRef}
        className="fixed top-50 left-50 -translate-x-50 -translate-y-50 z-10  rounded-xl backdrop:bg-gray-800/50"
      >
        <div className="w-[500px] max-w-fullbg-gray-200 flex flex-col">
          <div className="flex flex-row justify-between mb-4 pt-2 px-5 bg-yellow-400">
            <h1 className="text-2xl">{title}</h1>
            <button
              onClick={closeDialog}
              className="mb-2 py-1 px-2 cursor-pointer rounded border-none w-8 h-8 font-bold bg-red-600 text-white"
            >
              x
            </button>
          </div>
          <div className="px-5 pb-6">
            {children}
            <div className="flex flex-row justify-end mt-2">
              <button
                onClick={clickOk}
                className="bg-green-500 py-1 px-2 rounded border-none"
              >
                OK
              </button>
            </div>
          </div>
        </div>
      </dialog>
    ) : null;

  return dialog;
};

export default Dialog;

// The pseudo-element 'backdrop' css property applies to only modals. It adds the color for the background of the screen outside the modal
// In a dialog box, the background color behind the dialog box would not change and you can also interact with other parts of the page while the dialog box is still open, like clicking on a link on the page. That is the difference between it and a modal.
