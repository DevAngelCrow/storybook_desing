import React from "react";
import type { IconProps } from "../../interfaces/Icon.interface";
import * as MaterialIcons from "@mui/icons-material"

export const Icon: React.FC<IconProps> = ({ name, className }) => {
    const IconComponent = MaterialIcons[name];

    if(!IconComponent){
        console.log(`Icono no encontrado: ${name}`);
        return null;
    }

    return <IconComponent className={`${className} flex`}></IconComponent>
}

export default Icon;