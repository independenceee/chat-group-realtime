import React, { ReactNode } from "react";

type Props = {
    children: ReactNode
};

const AuthLayout = function({children}: Props) {
    return (
        <div className="h-full flex items-center justify-center">
            {children}
        </div>
    )
}

export default AuthLayout