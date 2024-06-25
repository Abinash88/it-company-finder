import React from 'react'

const FormError = ({ error, className }: { error?: string; className?: string }) => {
    return (
        <div className={(`text-[13px] left-0 text-red-600  ${className}`)}>{error}</div>
    )
}

export default FormError