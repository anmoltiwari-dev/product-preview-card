import React from "react";
import Image from "next/image";

function ProductPreviewCard() {
  return (
    <div className="bg-white h-[611px] w-[343px] sm:h-[450px] sm:w-[600px] flex flex-col sm:flex-row">
      <div className="hidden sm:inline-block sm:relative h-[39%] sm:h-full w-full sm:w-[174%]">
        <Image
          src="/images/image-product-desktop.jpg"
          alt="Gabrielle Essence Eau De Parfum"
          priority
          layout="fill"
        />
      </div>
      <div className="sm:hidden relative h-[39%] sm:h-full w-full sm:w-[174%]">
        <Image
          src="/images/image-product-mobile.jpg"
          alt="Gabrielle Essence Eau De Parfum"
          priority
          layout="fill"
        />
      </div>
      <div className="h-[371px] sm:h-full sm:pl-[31.5px] sm:pr-[31.5px]">
        <h2 className="tracking-[5px] text-[12px] leading-[15px] pt-[24px] pl-[24px] sm:pl-[0px] sm:tracking-[0.35714285714285715em] sm:text-[0.857rem] sm:leading-[1.0714285714285714em] text-dark-grayish-blue sm:pt-[32px]">
          PERFUME
        </h2>
        <h1 className="pt-[12px] pl-[24px] pr-[24px] text-[32px] leading-[32px] sm:pr-[0] sm:pl-[0] sm:pt-[20px] sm:text-[2rem] font-serif sm:leading-[2rem] font-bold text-very-dark-blue">
          Gabrielle Essence Eau De Parfum
        </h1>
        <p className="pt-[16px] pl-[24px] pr-[24px] text-[14px] leading-[23px] sm:pl-[0px] sm:pr-[0px] sm:pt-[24px] sm:leading-[1.643rem] text-dark-grayish-blue">
          A floral, solar and voluptuous interpretation composed by Olivier
          Polge, Perfumer-Creator for the House of CHANEL.
        </p>
        <div className="pt-[24px] pl-[24.5px] sm:pl-[0px] sm:pt-[29px] flex">
          <div className="font-serif text-[32px] leading-[32px] sm:leading-[2rem] sm:text-[2rem] sm:pr-[19px] text-dark-cyan">
            $149.99
          </div>
          <div className="text-[13px] leading-[23px] pl-[19px] sm:leading-[1.643rem] sm:text-[0.929rem] flex items-center justify-center line-through text-dark-grayish-blue">
            $169.99
          </div>
        </div>
        <div className="pl-[25px] sm:pl-[0px]">
          <button className="w-[295px] h-[48px] mt-[20px] sm:w-[236px] sm:h-[48px] justify-center bg-dark-cyan text-white rounded-[8px] sm:mt-[30px]">
            <span className="flex items-center justify-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              <span className="font-bold text-[14px] leading-[17px] sm:leading-[1.214rem] pl-[11.6px]">Add to Cart</span>
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductPreviewCard;
