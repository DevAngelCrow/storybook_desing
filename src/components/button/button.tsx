import React from "react";
import type { ButtonProps } from "../../interfaces/Button.interface";
import {Icon} from "../icon/index";

export const Button: React.FC<ButtonProps> = ({ label, className, icon, disabled, value, onClick, variant }) => {
    className = `${variant} ${className}`
    return (
        <button type="button" disabled={disabled}  className={`${className} bg-red-500`} onClick={onClick} value={value?.toString()}>
                {icon?.position === 'left' ? <Icon className={icon.position}  name="Alarm"></Icon> : null }
                {icon?.position === 'center' ? <Icon className={icon.position}  name="Alarm"></Icon> : <span>{label}</span>}
                {icon?.position === 'right' ? <Icon className={icon.position}  name="Alarm"></Icon> : null }
        </button>
    );
}
