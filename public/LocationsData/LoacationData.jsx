
import { CiLocationOn } from "react-icons/ci";
import { IoTimeOutline } from "react-icons/io5";
import { MdLocalPhone } from "react-icons/md";

const locations = [
  {
    _id: 1,
    icon: <MdLocalPhone className="text-3xl text-white" />,
    name: "Phone",
    address: "+38 (012) 34 56 789",
  },
  {
    _id: 2,
    icon: <CiLocationOn className="text-3xl text-white" />,
    name: "ADDRESS",
    address: "+38 (012) 34 56 789",
  },
  {
    _id: 3,
    icon: <IoTimeOutline className="text-3xl text-white" />,
    name: "WORKING HOURS",
    address: "Mon - Fri: 08:00 - 22:00",
    address2: "Sat - Sun: 10:00 - 23:00",
  },
];

export default locations;