import { FunctionComponent, useCallback } from "react";
import { useNavigate } from "react-router-dom";

const Report: FunctionComponent = () => {
  const navigate = useNavigate();

  const onReportTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='rectangle']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onRectangleClick = useCallback(() => {
    navigate("/");
  }, [navigate]);

  const onImageClick = useCallback(() => {
    navigate("/report-2");
  }, [navigate]);

  return (
    <div className="w-full relative bg-white h-[2089px] overflow-hidden text-center text-5xl text-white font-open-sans">
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
      <img
        className="absolute top-[1832px] left-[-154px] w-[1882px] h-64 object-cover"
        alt=""
        src="/group-5941@2x.png"
      />
      <div className="absolute top-[1970px] left-[718px] w-[421px] h-[68px]">
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
      <button className="cursor-pointer [border:none] p-0 bg-[transparent] absolute top-[1970px] left-[1244px] w-[180px] h-[68px]">
        <div className="absolute top-[0px] left-[0px] rounded-3xs bg-deepskyblue-200 w-[180px] h-[68px]" />
        <div className="absolute top-[22px] left-[50px] text-mid font-semibold font-open-sans text-white text-center">
          Subscribe
        </div>
      </button>
      <div className="absolute top-[1882px] left-[539px] leading-[54px] font-semibold text-text-clr inline-block w-[991px]">
        Subscribe to get information, latest news and other interesting offers
      </div>
      <div className="absolute top-[1957px] left-[167px] w-[180px] h-[31px] text-left text-lg text-text-clr">
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
      <b className="absolute top-[1911px] left-[160px] leading-[102.5%] inline-block font-laila text-black w-[97px] h-[77px]">
        Levitree
      </b>
      <div className="absolute top-[0px] left-[0px] bg-steelblue-200 w-[1728px] h-[710px]" />
      <img
        className="absolute top-[-4px] left-[-1px] w-[1729px] h-[714px]"
        alt=""
        src="/rectangle-31.svg"
        data-scroll-to="rectangle"
      />
      <b className="absolute top-[51px] left-[77px] leading-[102.5%] font-laila">
        Flood Test
      </b>
      <div className="absolute top-[58px] left-[673px] w-[358px] h-[27px] text-left text-xl">
        <div className="absolute top-[0px] left-[0px] font-semibold">Home</div>
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
      <b className="absolute top-[671px] left-[352px] text-29xl text-black">
        <ol className="m-0 font-inherit text-inherit pl-16">
          <li>Let’s start with your property location</li>
        </ol>
      </b>
      <img
        className="absolute top-[849px] left-[234px] w-[1234px] h-[608px] object-cover"
        alt=""
        src="/image-3@2x.png"
      />
      <div className="absolute top-[255px] left-[210px] text-45xl font-extrabold">
        Let’s generate your personalized report
      </div>
      <div
        className="absolute top-[54px] left-[652px] bg-gainsboro w-[110px] h-[42px] cursor-pointer"
        onClick={onRectangleClick}
      />
      <img
        className="absolute top-[1525px] left-[651px] w-[426px] h-[155px] object-cover cursor-pointer"
        alt=""
        src="/image-4@2x.png"
        onClick={onImageClick}
      />
    </div>
  );
};

export default Report;