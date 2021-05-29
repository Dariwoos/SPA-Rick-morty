import React from 'react'

export default function layout({name,image,description, next}) {
    return (
        <div>
            {name}
            {image}
            {description}
            {next}
        </div>
    )
}
