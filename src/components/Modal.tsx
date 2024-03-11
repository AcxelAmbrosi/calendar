import { MouseEvent, useRef } from "react";

interface ModalProps {
  modal: boolean;
  modalHandler: () => void;
  header: React.ReactNode;
  children: React.ReactNode;
}
export const Modal: React.FC<ModalProps> = ({
  header,
  modal,
  modalHandler,
  children,
}) => {
  const modalRef = useRef<HTMLDivElement>(null);

  const handleOverlayClick = (e: MouseEvent<HTMLDivElement>) => {
    if (modalRef.current && !modalRef.current.contains(e.target as Node)) {
      modalHandler();
    }
  };
  return (
    modal && (
      <div
        className="relative z-10"
        aria-labelledby="modal-title"
        role="dialog"
        aria-modal="true"
        onClick={handleOverlayClick}
      >
        <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <div
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg"
              ref={modalRef}
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="flex">
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <div
                      className="text-base font-semibold leading-6 text-gray-900"
                      id="modal-title"
                    >
                      {header}
                    </div>
                    <div className="mt-2">{children}</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  );
};
