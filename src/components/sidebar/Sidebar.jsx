import { useState } from "react";
import "./sidebar.scss";
import {motion} from "framer-motion";
import Toggle from "./toggle/Toggle";
import Links from "./links/Links";
const SideBar = () => {
  const [open, setOpen]= useState(false)

  const variants={
    open:{
      clipPath: "circle(1200px at 1000px 50px)",
      transition:{
        type:"spring",
        stiffness:20,
      },
    },
    closed: {
      clipPath: "circle(30px at 200px 50px)",
      transition:{
        delay:0.5,
        type:"spring",
        stiffness:400,
        damping:40,
      },
    },
  };
  return (
    <motion.div className="sidebar" animate={open ? "open":"closed"}>
      <motion.div className="bg" variants={variants}>
        <Links/>
      </motion.div>
      <Toggle setOpen={setOpen}/>
    </motion.div>
  )
}

export default SideBar;