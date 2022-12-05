import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const ReadyPrevArrow = ({ className, onClick }) => (
  <IoIosArrowBack
    className={className}
    style={{
      fill: "#1F518B",
      // display: "flex",
      // justifyContent: "center",
      // paddingTop: "7px",
      // borderRadius: "50%",
      // border: "1px solid rgb(31, 81, 139)",
      height: "25px",
      width: "25px",
      // left: "0px",
      // zIndex: "1",
    }}
    onClick={onClick}
  />
);

const ReadyNextArrow = ({ className, onClick }) => (
  <IoIosArrowForward
    className={className}
    style={
      {
        fill: "#1F518B",
        // display: "flex",
        // justifyContent: "center",
        // paddingTop: "7px",
        // borderRadius: "50%",
        // border: "1px solid rgb(31, 81, 139)",
        height: "25px",
        width: "25px",
        // right: "0px",
      }
    }
    onClick={onClick}
  />
);


export const settings = {
  dots: false,
  infinite: true,
  slidesToScroll: 1,
  autoplay: false,
  // speed: 1000,
  autoplaySpeed: 1000,
  slidesToShow: 3,
  nextArrow: <ReadyNextArrow />,
  prevArrow: <ReadyPrevArrow />,
  // cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 2,
        slidesToScroll: 2,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        // centerMode: true,
        // centerPadding: '40px',
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        lineHeight: 0,
        // centerMode: true,
        // centerPadding: '40px',

      },
    },
  ],
};

const ReadyEventPrevArrow = ({ className, onClick }) => (
  <IoIosArrowBack
    className={className}
    style={{
      fill: "#ffff",
      // display: "flex",
      // justifyContent: "center",
      // paddingTop: "7px",
      // borderRadius: "50%",
      // border: "1px solid rgb(31, 81, 139)",
      // height: "35px",
      // width: "35px",
      // left: "0px",
      // zIndex: "1",
    }}
    onClick={onClick}
  />
);

const ReadyEventNextArrow = ({ className, onClick }) => (
  <IoIosArrowForward
    className={className}
    style={
      {
        fill: "#ffff",
        // display: "flex",
        // justifyContent: "center",
        // paddingTop: "7px",
        // borderRadius: "50%",
        // border: "1px solid rgb(31, 81, 139)",
        // height: "35px",
        // width: "35px",
        // right: "0px",
      }
    }
    onClick={onClick}
  />
);
export const settings3 = {
  dots: false,
  infinite: true,
  slidesToScroll: 1,
  autoplay: false,
  // speed: 1000,
  autoplaySpeed: 1000,
  slidesToShow: 1,
  nextArrow: <ReadyEventNextArrow />,
  prevArrow: <ReadyEventPrevArrow />,
  // cssEase: "linear",
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: false,
      },
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 1,
      },
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        lineHeight: 0,
      },
    },
  ],
};

const BlogNextArrow = ({ className, onClick }) => (
  <IoIosArrowForward
    className={className}
    style={
      {
        fill: "#fff",
        display: "flex",
        justifyContent: "center",
        paddingTop: "7px",
        height: "25px",
        width: "35px",
        right: "0px",
      }
    }
    onClick={onClick}
  />
);

const BlogPrevArrow = ({ className, onClick }) => (
  <IoIosArrowBack
    className={className}
    style={
      {
        fill: "#fff",
        display: "flex",
        justifyContent: "center",
        paddingTop: "7px",
        height: "25px",
        width: "35px",
        left: "5px",
        zIndex: "300",
      }
    }
    onClick={onClick}
  />
);
export const settings2 = {
  dots: false,
  infinite: true,
  slidesToScroll: 1,
  autoplay: false,
  speed: 1000,
  autoplaySpeed: 1000,
  slidesToShow: 4,
  nextArrow: <BlogNextArrow />,
  prevArrow: <BlogPrevArrow />,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 4,
        slidesToScroll: 2,
        initialSlide: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 4,
        initialSlide: 2,
        slidesToScroll: 1
      }
    },
    {
      breakpoint: 400,
      settings: {
        slidesToShow: 4,
        initialSlide: 2,
        slidesToScroll: 1
      }
    }
  ]

};
