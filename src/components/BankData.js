import React from 'react'

export default function bankData({ loan, balance, dues, payments }) {
  return <div>{loan} {balance} {dues} {payments} </div>;
}
