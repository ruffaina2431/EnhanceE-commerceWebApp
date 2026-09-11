import svgPaths from "./svg-64dbh05sob";

function Group() {
  return (
    <a className="absolute contents cursor-pointer left-[762px] top-[394px]">
      <div className="absolute bg-[#2187fb] h-[48px] left-[762px] rounded-[50px] top-[394px] w-[180px]" />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal h-[26px] leading-[normal] left-[812px] not-italic text-[24px] text-white top-[405px] w-[82px]">Submit</p>
    </a>
  );
}

export default function OtpCode() {
  return (
    <div className="bg-white relative size-full" data-name="OTP code">
      <div className="absolute bg-[#d9d9d9] h-[78px] left-0 top-0 w-[1440px]" />
      <a className="absolute block cursor-pointer left-[188px] size-[24px] top-[30px]" data-name="Iconly/Sharp/Bold/Home 2">
        <div className="absolute inset-[9.14%_12.74%]" data-name="Fill 199">
          <svg className="absolute block inset-0 size-full" fill="none" height="19.613" preserveAspectRatio="none" viewBox="0 0 17.886 19.613" width="17.886">
            <path clipRule="evenodd" d={svgPaths.p137f4fe0} fill="black" fillRule="evenodd" id="Fill 199" />
          </svg>
        </div>
      </a>
      <a className="[word-break:break-word] absolute block cursor-pointer font-['Inter:Regular',sans-serif] font-normal h-[42px] leading-[0] left-[221px] not-italic text-[12px] text-black top-[36px] w-[678px]">
        <p className="leading-[normal]">{`UMAK Co-op `}</p>
      </a>
      <div className="absolute bg-[#d9d9d9] h-[387px] left-[437px] rounded-[35px] top-[120px] w-[566px]" />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal h-[54px] leading-[normal] left-[642px] not-italic text-[36px] text-black top-[141px] w-[182px]">OTP-Code</p>
      <div className="absolute bg-white h-[36px] left-[502px] top-[278px] w-[451px]" />
      <div className="absolute bg-[#2187fb] h-[48px] left-[497px] rounded-[50px] top-[394px] w-[188px]" />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal h-[26px] leading-[normal] left-[515px] not-italic text-[24px] text-white top-[405px] w-[180px]">Re-send OTP</p>
      <Group />
      <p className="[word-break:break-word] absolute font-['Inter:Regular',sans-serif] font-normal h-[30px] leading-[normal] left-[502px] not-italic text-[24px] text-black top-[246px] w-[329px]">Enter OTP sent to your Gmail</p>
    </div>
  );
}