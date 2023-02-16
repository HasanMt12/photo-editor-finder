import React from "react";

const Modal = ({ modalStatus, hide, modalData }) => {
  const { title, price, serviceList, serviceDesc } = modalData;

  return (
    <div>
      {modalStatus && (
        <div
          class="relative z-10"
          aria-labelledby="modal-title"
          role="dialog"
          aria-modal="true"
        >
          <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>
          <div class=" ml-64  fixed inset-0 z-10 overflow-y-auto">
            <div class="flex min-h-full items-end justify-center pl-4 py-4 text-center sm:items-center sm:p-0">
              <div class="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-4xl">
                <div class="bg-white  pl-4 pt-5 sm:pl-6 sm:pb-10">
                  <div className="flex justify-end -mt-2 mr-5">
                    <button onClick={() => hide(false)}>
                      <svg
                        width="14"
                        height="14"
                        viewBox="0 0 14 14"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M14 1.41L12.59 0L7 5.59L1.41 0L0 1.41L5.59 7L0 12.59L1.41 14L7 8.41L12.59 14L14 12.59L8.41 7L14 1.41Z"
                          fill="#6B6F86"
                        />
                      </svg>
                    </button>
                  </div>
                  <div
                    className={`grid grid-cols-2 justify-start ${
                      serviceDesc ? "items-center" : "items-start"
                    } gap-16`}
                  >
                    <div className="ml-10">
                      <h3 className="text-[#0EC970]">Per image ${price}</h3>
                      <h1 className="text-lg mt-2 font-semibold uppercase">
                        {title}
                      </h1>
                      <img
                        className="max-w-[366px] h-64 mt-10 rounded-lg"
                        src="https://images.unsplash.com/photo-1618221999490-9418f64786aa?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80"
                        alt=""
                      />
                    </div>
                    <div className="w-full">
                      {serviceList?.length ? (
                        <div className="flex items-center min-h-[400px] w-full">
                          <div className="h-full w-full">
                            <h1 className="text-lg mb-4 capitalize">
                              {serviceList.length} steps enhancements
                            </h1>
                            <div>
                              {serviceList.map((item, index) => (
                                <p
                                  key={index}
                                  className="border-0 border-b-2 w-full mt-3 capitalize"
                                >
                                  {item}
                                </p>
                              ))}
                            </div>
                          </div>
                        </div>
                      ) : (
                        <>
                          {serviceDesc.map((item, index) => (
                            <div key={index}>
                              <p className="mb-6 normal-case">{item}</p>
                            </div>
                          ))}
                        </>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
