import React from "react";
import { siFacebook, siX, siInstagram } from "simple-icons/icons";

interface SimpleIconProps extends React.SVGProps<SVGSVGElement> {
    icon: typeof siFacebook;
}

export const SimpleIcon: React.FC<SimpleIconProps> = ({ icon, ...props }) => (
    <svg
        role="img"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        {...props}
    >
        <title>{icon.title}</title>
        <path d={icon.path} />
    </svg>
);
