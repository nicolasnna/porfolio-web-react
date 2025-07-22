import Python from "@icons/Python"
import Cpp from "@icons/Cpp"
import Ros from "@icons/Ros"
import Html from "@icons/Html"
import Css from "@icons/Css"
import JavaScript from "@icons/JavaScript"
import ReactIcon from "@icons/ReactIcon"
import MaterialUi from "@icons/MaterialUi"
import Fastapi from "@icons/Fastapi"
import Reflex from "@icons/Reflex"
import ItemSkill from "@components/Item/ItemSkill"
import * as constants from "./constants"
import Typescript from "@icons/Typescript"
import Mysql from "../icons/Mysql"
import { Tailwind } from "../icons/Tailwind"
import { Firebase } from "../icons/Firebase"
import { Express } from "../icons/Express"

const dict = [
  { name: "python", text: "Python", icon: Python },
  { name: "cpp", text: "C++", icon: Cpp },
  { name: "ros", text: "ROS", icon: Ros },
  { name: "html", text: "HTML", icon: Html },
  { name: "css", text: "CSS", icon: Css },
  { name: "javascript", text: "JavaScript", icon: JavaScript },
  { name: "typescript", text: "TypeScript", icon: Typescript },
  { name: "react", text: "React", icon: ReactIcon },
  { name: "materialui", text: "MaterialUI", icon: MaterialUi },
  { name: "reflex", text: "Reflex", icon: Reflex, width: "6em" },
  { name: "fastapi", text: "FastAPI", icon: Fastapi },
  { name: "mysql", text: "MySQL", icon: Mysql, width: "50px", height: "40px" },
  { name: "tailwind", text: "Tailwind CSS", icon: Tailwind },
  { name: "firebase", text: "Firebase", icon: Firebase },
  { name: "express", text: "Express", icon: Express}
]

const skillsArray = dict.map((d) => ({
  name: d.name,
  element: (
    <ItemSkill
      key={d.name}
      icon={
        <d.icon width={d.width ?? constants.heightIcon} height={d.height ?? constants.heightIcon} />
      }
      text={d.text}
    />
  ),
}))

export default skillsArray
