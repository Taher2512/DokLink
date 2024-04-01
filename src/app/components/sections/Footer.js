import React from "react";

function Footer({ contactRef }) {
  return (
    //    Footer Container
    <footer
      ref={contactRef}
      className="flex flex-col items-center bg-gray-800 text-center text-white"
    >
      <div className="container p-6 border-b-2 border-b-gray-700">
        <div className="">
          <div className="flex flex-col items-center justify-center">
            <p className="GilroyBold me-4 text-3xl mb-6">Contact Us</p>
            <div>
              <div className="GilroyLight flex flex-row justify-between">
                <p className="me-4 w-1/5 text-start">Mobile: </p>
                <p className="me-4 w-4/5 text-end">
                  +91 6291449089 / +91 8100604497
                </p>
              </div>
              <div className="flex flex-row justify-between">
                <p className="me-4 w-1/5 text-start">Whatsapp: </p>
                <p className="me-4 w-4/5 text-end">
                  +91 6291449089 / +918100604497
                </p>
              </div>
              <div className="flex flex-row justify-between">
                <p className="me-4 w-1/5 text-start">Email: </p>
                <p className="me-4 w-4/5 text-end">
                  rohitkrishnendu024@gmail.com
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="GilroyLight w-full bg-gray-800 p-4 text-center">
        © 2024 Copyright: DokLink
        {/* <a href="https://tw-elements.com/">DokLink</a> */}
      </div>
    </footer>
  );
}

export default Footer;
