import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const LnadingPage: FunctionComponent = () => {
  const navigate = useNavigate();

  const onHomeTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onReportTextClick = useCallback(() => {
    navigate("/report");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[3329px] overflow-hidden text-center text-5xl text-black font-open-sans">
      <div className="absolute top-[2151px] left-[2px] [background:radial-gradient(50%_50%_at_50%_50%,_#428ac1,_#155586_92.5%)] w-[1732px] h-[792px]" />
      <img
        className="absolute top-[0px] left-[3px] w-[1728px] h-[1177px] object-cover"
        alt=""
        src="/image@2x.png"
      />
      <img
        className="absolute top-[0px] left-[3px] w-[1729px] h-[1336px]"
        alt=""
        src="/rectangle-3.svg"
        data-scroll-to="rectangle"
      />
      <div className="absolute top-[58px] left-[673px] w-[358px] h-[27px] text-left text-xl text-white">
        <div
          className="absolute top-[0px] left-[0px] font-semibold cursor-pointer"
          onClick={onHomeTextClick}
        >
          Home
        </div>
        <div className="absolute top-[0px] left-[134px] font-semibold">
          About Us
        </div>
        <div
          className="absolute top-[0px] left-[292px] font-semibold cursor-pointer"
          onClick={onReportTextClick}
        >
          Report
        </div>
      </div>
      <div className="absolute top-[319px] left-[3px] rounded-mini bg-dimgray w-[1728px] h-[520px]" />
      <div className="absolute top-[387px] left-[271px] text-45xl font-extrabold text-white">
        Is Your Property at Risk of Flooding?
      </div>
      <div className="absolute top-[493px] left-[143px] text-13xl text-white inline-block w-[1437px] h-[52px]">
        <p className="m-0">
          <b>Discover Your Property's Flood Risk and Stay Protected</b>
        </p>
        <p className="m-0">
          Get a personalized flood risk report tailored to your property.
          Understand your current vulnerabilities and future risks, and take
          action today to safeguard your most valuable asset.
        </p>
      </div>
      <b className="absolute top-[1269px] left-[308px] text-45xl">
        Why You Need a Flood Risk Report:
      </b>
      <b className="absolute top-[2172px] left-[649px] text-45xl text-white">
        How it works:
      </b>
      <img
        className="absolute top-[156px] left-[364px] w-[702px] h-[468px] object-cover hidden"
        alt=""
        src="/pexelsgustavofring3885490removebgpreview-1@2x.png"
      />
      <img
        className="absolute top-[249px] left-[1178px] rounded-[50%] w-[184px] h-[184px] object-cover hidden"
        alt=""
        src="/ellipse-1@2x.png"
      />
      <img
        className="absolute top-[449px] left-[320px] rounded-[50%] w-28 h-28 object-cover hidden"
        alt=""
        src="/ellipse-2@2x.png"
      />
      <img
        className="absolute top-[173px] left-[238px] rounded-[50%] w-[156px] h-[156px] object-cover hidden"
        alt=""
        src="/ellipse-3@2x.png"
      />
      <img
        className="absolute top-[326px] left-[580px] rounded-[50%] w-[93px] h-[93px] object-cover hidden"
        alt=""
        src="/ellipse-4@2x.png"
      />
      <img
        className="absolute top-[237px] left-[1019px] rounded-[50%] w-[59px] h-[59px] object-cover hidden"
        alt=""
        src="/ellipse-9@2x.png"
      />
      <img
        className="absolute top-[577px] left-[1409px] rounded-[50%] w-[152px] h-[152px] object-cover hidden"
        alt=""
        src="/ellipse-5@2x.png"
      />
      <img
        className="absolute top-[546px] left-[1102px] rounded-[50%] w-[95px] h-[95px] object-cover hidden"
        alt=""
        src="/ellipse-6@2x.png"
      />
      <img
        className="absolute top-[220px] left-[1520px] rounded-[50%] w-[122px] h-[122px] object-cover hidden"
        alt=""
        src="/ellipse-7@2x.png"
      />
      <img
        className="absolute top-[580px] left-[83px] rounded-[50%] w-[122px] h-[122px] object-cover hidden"
        alt=""
        src="/ellipse-8@2x.png"
      />
      <b
        className="absolute top-[51px] left-[77px] leading-[102.5%] font-laila text-white cursor-pointer"
        onClick={onHomeTextClick}
      >
        Flood Test
      </b>
      <img
        className="absolute top-[3072px] left-[-154px] w-[1882px] h-64 object-cover"
        alt=""
        src="/group-594@2x.png"
      />
      <div className="absolute top-[3210px] left-[718px] w-[421px] h-[68px]">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-white w-[421px] h-[68px]" />
        <input
          className="[border:none] [outline:none] font-montserrat text-sm bg-[transparent] absolute top-[25px] left-[66px] text-text-color text-left"
          placeholder="Your email"
          type="text"
        />
        <div className="absolute top-[25px] left-[31px] w-[21px] h-[18px]">
          <img
            className="absolute top-[6px] left-[4px] rounded-12xs w-3 h-[4.5px]"
            alt=""
            src="/vector-5.svg"
          />
          <div className="absolute top-[0px] left-[0px] rounded-8xs border-text-color border-[1px] border-solid box-border w-[21px] h-[18px]" />
        </div>
      </div>
      <button className="cursor-pointer [border:none] py-[22px] px-[50px] bg-deepskyblue-200 absolute top-[3210px] left-[1244px] rounded-3xs w-[180px] h-[68px] flex flex-row items-center justify-center box-border hover:bg-steelblue-100 hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]">
        <div className="relative text-mid font-semibold font-open-sans text-white text-center">
          Subscribe
        </div>
      </button>
      <div className="absolute top-[3122px] left-[539px] leading-[54px] font-semibold text-text-clr inline-block w-[991px]">
        Subscribe to get information, latest news and other interesting offers
      </div>
      <div className="absolute top-[3197px] left-[167px] w-[180px] h-[31px] text-left text-lg text-text-clr">
        <div className="absolute top-[0px] left-[0px] w-[180px] h-[31px]">
          <div className="absolute top-[0px] left-[0px] leading-[124.5%] inline-block w-[180px] h-[31px]">
            <p className="m-0">SF Bay Area</p>
            <p className="m-0">
              <a
                className="text-[inherit]"
                href="tel:4158703833"
                target="_blank"
              >
                <span className="[text-decoration:underline]">
                  (415) 870-3833
                </span>
              </a>
            </p>
          </div>
        </div>
      </div>
      <b className="absolute top-[3151px] left-[160px] leading-[102.5%] inline-block font-laila w-[97px] h-[77px]">
        Levitree
      </b>
      <button
        className="cursor-pointer [border:none] p-2.5 bg-deepskyblue-200 absolute top-[2781px] left-[191px] w-[631px] h-[113px] flex flex-row items-center justify-center box-border hover:bg-steelblue-100 hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
        onClick={onReportTextClick}
      >
        <div className="w-[608px] relative text-29xl font-semibold font-open-sans text-white text-center inline-block h-[57px] shrink-0">
          Check My Flood Risk Now
        </div>
      </button>
      <button
        className="cursor-pointer [border:none] p-2.5 bg-deepskyblue-200 absolute top-[676px] left-[562px] w-[602px] h-[104px] flex flex-col items-center justify-center box-border hover:bg-steelblue-100 hover:animate-[1s_ease_0s_infinite_normal_none_shadow-drop-bottom] hover:opacity-[1]"
        onClick={onReportTextClick}
      >
        <div
          className="w-[500px] relative text-21xl font-semibold font-open-sans text-white text-center inline-block h-[49px] shrink-0 cursor-pointer"
          onClick={onHomeTextClick}
        >
          Check My Flood Risk Now
        </div>
      </button>
      <img
        className="absolute top-[1410px] left-[918px] w-[756px] h-[548px] object-cover"
        alt=""
        src="/image-20241108-111317964-1@2x.png"
      />
      <div className="absolute top-[2313px] left-[1055px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_16px_rgba(0,_0,_0,_0.15)] rounded-mini bg-white w-[500px] h-[150px]" />
      <b className="absolute top-[2337px] left-[1095px]">Enter Your Address</b>
      <div className="absolute top-[2388px] left-[1095px] text-base text-left inline-block w-[402px] h-[22px]">
        We analyze your specific location to determine current and future flood
        risks.
      </div>
      <div className="absolute top-[2501px] left-[1055px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_16px_rgba(0,_0,_0,_0.15)] rounded-mini bg-white w-[498px] h-[150px]" />
      <b className="absolute top-[2525px] left-[1093px]">
        Receive Your Personalized Report
      </b>
      <div className="absolute top-[2576px] left-[1093px] text-base text-left inline-block w-[402px] h-[22px]">
        A detailed report tailored to your property, delivered straight to your
        inbox.
      </div>
      <div className="absolute top-[2689px] left-[1055px] shadow-[0px_4px_4px_rgba(0,_0,_0,_0.25),_0px_4px_16px_rgba(0,_0,_0,_0.15)] rounded-mini bg-white w-[498px] h-[150px]" />
      <b className="absolute top-[2711px] left-[1093px] text-left">
        Take Action
      </b>
      <div className="absolute top-[2764px] left-[1093px] text-base text-left inline-block w-[402px] h-[22px]">
        Get clear, actionable advice on how to minimize your flood risk and
        protect your home.
      </div>
      <div className="absolute top-[1421px] left-[146px] text-13xl text-left inline-block w-[643px] h-[508px]">
        <p className="m-0">
          <b className="font-open-sans">Protect your investment</b>
          <span>{` by identifying flood hazards to avoid costly damage and preserve property value. `}</span>
        </p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">
          <b className="font-open-sans">Ensure safety</b>
          <span>
            {" "}
            by assessing risks and implementing protective measures for your
            property.
          </span>
        </p>
        <p className="m-0">&nbsp;</p>
        <p className="m-0">
          <b className="font-open-sans-hebrew">Plan ahead</b>
          <span>
            {" "}
            by anticipating climate change-driven flood pattern shifts and
            adapting proactively.
          </span>
        </p>
      </div>
      <img
        className="absolute top-[2349px] left-[175px] w-[640px] h-[390px] object-cover"
        alt=""
        src="/image-1@2x.png"
      />
      <img
        className="absolute top-[2386px] left-[263px] w-[476px] h-[297px] object-cover"
        alt=""
        src="/image-2@2x.png"
      />
    </div>
  );
};

export default LnadingPage;
