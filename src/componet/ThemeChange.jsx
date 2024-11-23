import React from 'react'

function ThemeChange() {
    const ActiveTheme = () => {
        const Body = document.querySelector("body");
        if (Body.classList.contains("dark")) {
            Body.classList.remove("dark");
        } else {
            Body.classList.add("dark");
        }
    }
    return (
        <div className='theme_changer' onClick={() => ActiveTheme()}>
            <i className="fa fa-moon" />
        </div>
    )
}

export default ThemeChange