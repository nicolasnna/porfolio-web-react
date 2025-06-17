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

const skillsArray = [
  {
    name: "python",
    element: (
      <ItemSkill
        key={"python"}
        icon={
          <Python width={constants.heightIcon} height={constants.heightIcon} />
        }
        text={"Python"}
      />
    ),
  },
  {
    name: "cpp",
    element: (
      <ItemSkill
        key={"cpp"}
        icon={
          <Cpp width={constants.heightIcon} height={constants.heightIcon} />
        }
        text={"C++"}
      />
    ),
  },
  {
    name: "ros",
    element: (
      <ItemSkill
        key={"ros"}
        icon={
          <Ros width={constants.heightIcon} height={constants.heightIcon} />
        }
        text={"ROS"}
      />
    ),
  },
  {
    name: "html",
    element: (
      <ItemSkill
        key={"html"}
        icon={
          <Html width={constants.heightIcon} height={constants.heightIcon} />
        }
        text={"HTML"}
      />
    ),
  },
  {
    name: "css",
    element: (
      <ItemSkill
        key={"css"}
        icon={
          <Css width={constants.heightIcon} height={constants.heightIcon} />
        }
        text={"CSS"}
      />
    ),
  },
  {
    name: "javascript",
    element: (
      <ItemSkill
        key={"javascript"}
        icon={
          <JavaScript
            width={constants.heightIcon}
            height={constants.heightIcon}
          />
        }
        text={"JavaScript"}
      />
    ),
  },
  {
    name: "typescript",
    element: (
      <ItemSkill
        key={"typescript"}
        icon={
          <Typescript
            width={constants.heightIcon}
            height={constants.heightIcon}
          />
        }
        text={"Typescript"}
      />
    ),
  },
  {
    name: "react",
    element: (
      <ItemSkill
        key={"react"}
        icon={
          <ReactIcon
            width={constants.heightIcon}
            height={constants.heightIcon}
          />
        }
        text={"React"}
      />
    ),
  },
  {
    name: "materialui",
    element: (
      <ItemSkill
        key={"materialui"}
        icon={
          <MaterialUi
            width={constants.heightIcon}
            height={constants.heightIcon}
          />
        }
        text={"MaterialUI"}
      />
    ),
  },
  {
    name: "reflex",
    element: (
      <ItemSkill
        key={"reflex"}
        icon={<Reflex width={"6em"} height={constants.heightIcon} />}
        text={"Reflex"}
      />
    ),
  },
  {
    name: "fastapi",
    element: (
      <ItemSkill
        key={"fastapi"}
        icon={<Fastapi width={constants.heightIcon} height={constants.heightIcon} />}
        text={"FastAPI"}
      />
    ),
  },
  {
    name: "mysql",
    element: (
      <ItemSkill
        key={"mysql"}
        icon={<Mysql width={"50px"} height={"40px"} />}
        text={"MySQL"}
      />
    ),
  },
]

export default skillsArray
