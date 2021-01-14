import React from 'react'
import { Doughnut } from 'react-chartjs-2'

const dataChart = {
  datasets: [{
    data: [10, 20, 30],
    backgroundColor: [
      '#ff6384',
      '#36a2eb',
      '#cc65fe',
    ]
  }],

  // These labels appear in the legend and in the tooltips when hovering different arcs
  labels: [
    'terkonfirmasi',
    'meninggal',
    'sembuh'
  ]
}
function Register() {
  return (
    <div>
      <h1>halaman register</h1>
      <Doughnut data={dataChart} />
    </div>
  )
}

export default Register
