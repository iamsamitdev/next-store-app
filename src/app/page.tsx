import { Typography, Button } from '@mui/material'
import { 
  AddCircleOutline as AddIcon,
} from '@mui/icons-material'
import React from 'react'

type Props = {}

export default function Home({}: Props) {
  return (
    <>
      {/* Typography */}
      <Typography variant='h1'>Next.JS MUI App</Typography>

      {/* Button */}
      <Button variant='contained' color='primary'>Click Me</Button>

      {/* Icons */}
      <div>
        <AddIcon color='primary' />
        <AddIcon color='secondary' />
        <AddIcon color='info' />
        <AddIcon color='warning' />
        <AddIcon color='error' />
        <AddIcon color='success' />
      </div>
    </>
  )
}