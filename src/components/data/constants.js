import { HiOutlineTrophy } from "react-icons/hi2";
import Url from "../img/img.png";
import { IoIosArrowDown } from "react-icons/io";
import { TiStarFullOutline } from "react-icons/ti";
import { TiStarHalfOutline } from "react-icons/ti";
import { IoDiamondOutline } from "react-icons/io5";
import { IoInformationCircleOutline } from "react-icons/io5";
import { FaCheck } from "react-icons/fa6";
import { TiStarOutline } from "react-icons/ti";

export const details = [
	{
		tag: [{ icon: <HiOutlineTrophy />, label: "Best Choice" }],
		no: "1",
		img: [{ url: Url, label: "Builder 1" }],
		body: [
			{
				heading: "WixPro 72-Inch Responsive Website Builder-",
				details:
					"Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
				subheading: "Main highlights",
				subdetails:
					"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
				showmore: [{ label: "Show more", icon: <IoIosArrowDown /> }],
			},
		],
		rating: [
			{
				info: <IoInformationCircleOutline size={12} />,
				rate: "9.8",
				level: "Exceptional",
				stars: (
					<span style={{ fontSize: "11px" }}>
						<TiStarFullOutline />
						<TiStarFullOutline />
						<TiStarFullOutline />
						<TiStarFullOutline />
						<TiStarFullOutline />
					</span>
				),
			},
		],
	},
	{
		tag: [{ icon: <IoDiamondOutline />, label: "Best Value" }],
		no: "2",
		img: [{ url: Url, label: "Builder" }],
		body: [
			{
				heading: "SiteCraft 68-Inch Ultimate Web Design Studio-",
				details:
					"Advanced Site Creation Toolkit, Intuitive Drag-and-Drop Editor for Dynamic Websites and E-commerce Platforms (Green/White)",
				subheading: "Main highlights",
				subdetails:
					"[What You Get]: Gain access to the SiteCraft design studio, featuring a robust selection of design elements, SEO optimization tools, and e-commerce integrations.",
				showmore: [{ label: "Show more", icon: <IoIosArrowDown /> }],
			},
		],
		rating: [
			{
				info: <IoInformationCircleOutline size={12} />,
				rate: "9.5",
				level: "Excellent",
				stars: (
					<span style={{ fontSize: "11px" }}>
						<TiStarFullOutline />
						<TiStarFullOutline />
						<TiStarFullOutline />
						<TiStarFullOutline />
						<TiStarHalfOutline />
					</span>
				),
			},
		],
	},
	{
		tag: [""],
		no: "3",
		img: [{ url: Url, label: "Builder 1" }],
		body: [
			{
				heading: "WixPro 72-Inch Responsive Website Builder-",
				details:
					"Comprehensive Digital Platform Creation Tool, Streamlined Design Interface for Professional Websites and Online Stores (Black/Blue)",
				subheading: "Main highlights",
				subdetails:
					"[What You Get]: Receive the WixPro website builder suite, access to premium design templates, an extensive library of widgets and apps, and detailed step-by-step guides.",
				showmore: [{ label: "Show more", icon: null }],
			},
		],
		rating: [
			{
				rate: "9.3",
				level: "Exceptional",
				stars: (
					<span style={{ fontSize: "11px" }}>
						<TiStarFullOutline />
						<TiStarFullOutline />
						<TiStarFullOutline />
						<TiStarFullOutline />
						<TiStarFullOutline />
					</span>
				),
			},
		],
	},
];

export const CDK = [
	{
		tag: [""],
		no: "4",
		img: [{ url: Url, label: "CDK" }],
		body: [
			{
				heading: "CDK Resposive Builder:",
				details:
					"An extensive library of widgets and apps, and detailed step-by-step guides",
				offer: "26% Off",
				subheading: "Main highlights",
				subdetails: [
					{ num: "9.9", label: "Building Responsive" },
					{ num: "8.9", label: "Cool" },
					{ num: "8.9", label: "Docs" },
				],
				why: "Why we love it",
				list: [
					{ icon: <FaCheck />, label: "Documentation" },
					{ icon: <FaCheck />, label: "Easy Use" },
					{ icon: <FaCheck />, label: "Out of box" },
				],
				showmore: [{ label: "Show more" }],
			},
		],
		rating: [
			{
				rate: "9.1",
				level: "Very Good",
				stars: (
					<span style={{ fontSize: "11px" }}>
						<TiStarFullOutline />
						<TiStarFullOutline />
						<TiStarFullOutline />
						<TiStarFullOutline />
						<TiStarOutline />
					</span>
				),
			},
		],
	},
];

export const relatedDeals = [
	{
		img: Url,
		offer: "26% Off",
		time: "Limited time",
		heading: "Webbuilder 1",
		details: "Computer Modern clasic with wix support",
		price1: "$39.96",
		price2: "$49.96",
		off: "20% Off",
	},
];
