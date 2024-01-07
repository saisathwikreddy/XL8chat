'use client'
import { Button } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import GoogleIcon from './GoogleIcon';

export default function SignInWithGoogleButton() {
  const theme = useTheme();
  console.log(theme)
  return (
    <div><Button startIcon={<GoogleIcon />}>Sign in with Google</Button></div>
  )
}
