import React from 'react'

const FormError = ({ error, className }: { error?: string; className?: string }) => {
    return (
        <div className={(`text-[13px] text-red-600  ${className}`)}>{error}</div>
    )
}

export default FormError