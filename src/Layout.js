import React from 'react'

export default function layout({ name, image, description, next, bankData }) {
  return (
    <div>
      {name}
      {image}
      {description}
      {next}
      {bankData}
    </div>
  );
}
