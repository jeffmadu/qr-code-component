import qrCode from "../images/image-qr-code.png";

function QrCodeComponent() {
  return (
    <div className="text-3xl flex bg-[#D5E1EF] h-screen items-center justify-center">
      <div className="bg-white w-[320px] h-[497px] flex flex-col items-center justify-center rounded-[12px]">
        <div className="mb-5  ">
          <img
            src={qrCode}
            alt="Qr Code"
            className="w-[288px] h-[288px] rounded-[9px]"
          />
        </div>
        <div>
          <div className="w-[288px] text-[#1F314F] text-[22px] font-bold mb-2 mx-auto text-center  leading-normal">
            Improve your front-end skills by building projects
          </div>
          <div className="text-[15px] text-[#7D889E]  w-[256px] mx-auto text-center leading-normal ">
            Scan the QR code to visit Frontend Mentor and take your coding
            skills to the next level
          </div>
        </div>
      </div>
    </div>
  );
}

export default QrCodeComponent;
